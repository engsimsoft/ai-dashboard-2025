#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';

class GitHubServer {
  constructor() {
    this.server = new Server(
      {
        name: 'github-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    
    // Error handling
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'get_repo_info',
          description: 'Получить информацию о репозитории GitHub',
          inputSchema: {
            type: 'object',
            properties: {
              owner: {
                type: 'string',
                description: 'Владелец репозитория (username или organization)',
              },
              repo: {
                type: 'string',
                description: 'Название репозитория',
              },
            },
            required: ['owner', 'repo'],
          },
        },
        {
          name: 'search_repositories',
          description: 'Поиск репозиториев на GitHub',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Поисковый запрос',
              },
              language: {
                type: 'string',
                description: 'Язык программирования (опционально)',
              },
              sort: {
                type: 'string',
                description: 'Сортировка: stars, forks, updated',
                enum: ['stars', 'forks', 'updated'],
              },
              limit: {
                type: 'number',
                description: 'Количество результатов (по умолчанию 10)',
                default: 10,
              },
            },
            required: ['query'],
          },
        },
        {
          name: 'get_repo_issues',
          description: 'Получить issues репозитория',
          inputSchema: {
            type: 'object',
            properties: {
              owner: {
                type: 'string',
                description: 'Владелец репозитория',
              },
              repo: {
                type: 'string',
                description: 'Название репозитория',
              },
              state: {
                type: 'string',
                description: 'Состояние issues: open, closed, all',
                enum: ['open', 'closed', 'all'],
                default: 'open',
              },
              limit: {
                type: 'number',
                description: 'Количество issues (по умолчанию 10)',
                default: 10,
              },
            },
            required: ['owner', 'repo'],
          },
        },
        {
          name: 'get_repo_commits',
          description: 'Получить последние коммиты репозитория',
          inputSchema: {
            type: 'object',
            properties: {
              owner: {
                type: 'string',
                description: 'Владелец репозитория',
              },
              repo: {
                type: 'string',
                description: 'Название репозитория',
              },
              limit: {
                type: 'number',
                description: 'Количество коммитов (по умолчанию 10)',
                default: 10,
              },
            },
            required: ['owner', 'repo'],
          },
        },
        {
          name: 'get_trending_repos',
          description: 'Получить трендовые репозитории',
          inputSchema: {
            type: 'object',
            properties: {
              language: {
                type: 'string',
                description: 'Язык программирования (опционально)',
              },
              since: {
                type: 'string',
                description: 'Период: daily, weekly, monthly',
                enum: ['daily', 'weekly', 'monthly'],
                default: 'daily',
              },
              limit: {
                type: 'number',
                description: 'Количество репозиториев (по умолчанию 10)',
                default: 10,
              },
            },
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      switch (request.params.name) {
        case 'get_repo_info':
          return this.getRepoInfo(request.params.arguments);
        case 'search_repositories':
          return this.searchRepositories(request.params.arguments);
        case 'get_repo_issues':
          return this.getRepoIssues(request.params.arguments);
        case 'get_repo_commits':
          return this.getRepoCommits(request.params.arguments);
        case 'get_trending_repos':
          return this.getTrendingRepos(request.params.arguments);
        default:
          throw new McpError(
            ErrorCode.MethodNotFound,
            `Unknown tool: ${request.params.name}`
          );
      }
    });
  }

  async makeGitHubRequest(url, token = null) {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'MCP-GitHub-Server/1.0',
    };

    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    try {
      const response = await fetch(url, { headers });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('GitHub API request failed:', error);
      throw error;
    }
  }

  async getRepoInfo(args) {
    const { owner, repo } = args;
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    
    try {
      const data = await this.makeGitHubRequest(url);
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              name: data.name,
              full_name: data.full_name,
              description: data.description,
              language: data.language,
              stars: data.stargazers_count,
              forks: data.forks_count,
              issues: data.open_issues_count,
              created_at: data.created_at,
              updated_at: data.updated_at,
              clone_url: data.clone_url,
              homepage: data.homepage,
              topics: data.topics,
              license: data.license?.name,
              default_branch: data.default_branch,
            }, null, 2),
          },
        ],
      };
    } catch (error) {
      throw new McpError(ErrorCode.InternalError, `Failed to get repo info: ${error.message}`);
    }
  }

  async searchRepositories(args) {
    const { query, language, sort = 'stars', limit = 10 } = args;
    
    let searchQuery = query;
    if (language) {
      searchQuery += ` language:${language}`;
    }

    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(searchQuery)}&sort=${sort}&order=desc&per_page=${limit}`;
    
    try {
      const data = await this.makeGitHubRequest(url);
      
      const repos = data.items.map(repo => ({
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        updated_at: repo.updated_at,
      }));

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              total_count: data.total_count,
              repositories: repos,
            }, null, 2),
          },
        ],
      };
    } catch (error) {
      throw new McpError(ErrorCode.InternalError, `Failed to search repositories: ${error.message}`);
    }
  }

  async getRepoIssues(args) {
    const { owner, repo, state = 'open', limit = 10 } = args;
    const url = `https://api.github.com/repos/${owner}/${repo}/issues?state=${state}&per_page=${limit}`;
    
    try {
      const data = await this.makeGitHubRequest(url);
      
      const issues = data.map(issue => ({
        number: issue.number,
        title: issue.title,
        body: issue.body?.substring(0, 200) + (issue.body?.length > 200 ? '...' : ''),
        state: issue.state,
        author: issue.user.login,
        created_at: issue.created_at,
        updated_at: issue.updated_at,
        labels: issue.labels.map(label => label.name),
        url: issue.html_url,
      }));

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ issues }, null, 2),
          },
        ],
      };
    } catch (error) {
      throw new McpError(ErrorCode.InternalError, `Failed to get repo issues: ${error.message}`);
    }
  }

  async getRepoCommits(args) {
    const { owner, repo, limit = 10 } = args;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${limit}`;
    
    try {
      const data = await this.makeGitHubRequest(url);
      
      const commits = data.map(commit => ({
        sha: commit.sha.substring(0, 7),
        message: commit.commit.message.split('\n')[0],
        author: commit.commit.author.name,
        date: commit.commit.author.date,
        url: commit.html_url,
      }));

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ commits }, null, 2),
          },
        ],
      };
    } catch (error) {
      throw new McpError(ErrorCode.InternalError, `Failed to get repo commits: ${error.message}`);
    }
  }

  async getTrendingRepos(args) {
    const { language, since = 'daily', limit = 10 } = args;
    
    // Создаем поисковый запрос для трендовых репозиториев
    const date = new Date();
    if (since === 'daily') {
      date.setDate(date.getDate() - 1);
    } else if (since === 'weekly') {
      date.setDate(date.getDate() - 7);
    } else if (since === 'monthly') {
      date.setMonth(date.getMonth() - 1);
    }
    
    const dateStr = date.toISOString().split('T')[0];
    let query = `created:>${dateStr}`;
    
    if (language) {
      query += ` language:${language}`;
    }

    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=${limit}`;
    
    try {
      const data = await this.makeGitHubRequest(url);
      
      const repos = data.items.map(repo => ({
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        created_at: repo.created_at,
      }));

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              period: since,
              language: language || 'all',
              repositories: repos,
            }, null, 2),
          },
        ],
      };
    } catch (error) {
      throw new McpError(ErrorCode.InternalError, `Failed to get trending repos: ${error.message}`);
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('GitHub MCP server running on stdio');
  }
}

const server = new GitHubServer();
server.run().catch(console.error); 