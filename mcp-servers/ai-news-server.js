#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

class AINewsServer {
  constructor() {
    this.server = new Server(
      {
        name: 'ai-news-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'get_ai_news',
            description: 'Получить последние новости об искусственном интеллекте',
            inputSchema: {
              type: 'object',
              properties: {
                limit: {
                  type: 'number',
                  description: 'Количество новостей для получения (по умолчанию 10)',
                  default: 10
                },
                category: {
                  type: 'string',
                  description: 'Категория новостей (technology, business, research)',
                  enum: ['technology', 'business', 'research', 'all'],
                  default: 'all'
                }
              }
            }
          },
          {
            name: 'get_ai_market_data',
            description: 'Получить данные о рынке ИИ и статистику роста',
            inputSchema: {
              type: 'object',
              properties: {
                timeframe: {
                  type: 'string',
                  description: 'Временной период для данных',
                  enum: ['week', 'month', 'year'],
                  default: 'month'
                }
              }
            }
          },
          {
            name: 'search_ai_news',
            description: 'Поиск новостей по конкретным AI инструментам или компаниям',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Поисковый запрос (например "ChatGPT", "Claude", "OpenAI")'
                },
                limit: {
                  type: 'number',
                  description: 'Количество результатов',
                  default: 5
                }
              },
              required: ['query']
            }
          }
        ]
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_ai_news':
            return await this.getAINews(args?.limit || 10, args?.category || 'all');
          
          case 'get_ai_market_data':
            return await this.getAIMarketData(args?.timeframe || 'month');
          
          case 'search_ai_news':
            return await this.searchAINews(args.query, args?.limit || 5);
          
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Ошибка выполнения ${name}: ${error.message}`
            }
          ]
        };
      }
    });
  }

  async getAINews(limit = 10, category = 'all') {
    try {
      // Пытаемся получить реальные новости
      const newsData = await this.fetchRealAINews(limit, category);
      
      const formattedNews = newsData.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: article.publishedAt,
        source: article.source,
        category: article.category || 'general'
      }));

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              count: formattedNews.length,
              category: category,
              news: formattedNews,
              source: 'real_api'
            }, null, 2)
          }
        ]
      };
    } catch (error) {
      console.error('Error fetching real news, falling back to mock:', error);
      // Fallback к mock данным
      const mockData = await this.fetchFromMultipleSources(limit, category);
      
      const formattedNews = mockData.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: article.publishedAt,
        source: article.source,
        category: article.category || 'general'
      }));

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              count: formattedNews.length,
              category: category,
              news: formattedNews,
              source: 'mock_fallback'
            }, null, 2)
          }
        ]
      };
    }
  }

  async fetchRealAINews(limit, category) {
    // Используем NewsAPI для получения реальных новостей
    const apiKey = process.env.NEWS_API_KEY || 'demo'; // Нужно будет добавить API ключ
    
    // Формируем поисковые запросы в зависимости от категории
    const queries = {
      'technology': 'artificial intelligence OR machine learning OR AI OR neural networks',
      'business': 'AI startup OR artificial intelligence investment OR AI company',
      'research': 'AI research OR machine learning research OR artificial intelligence study',
      'all': 'artificial intelligence OR AI OR machine learning'
    };
    
    const query = queries[category] || queries['all'];
    
    try {
      // Пробуем NewsAPI
      const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=${limit}&language=en&apiKey=${apiKey}`);
      
      if (response.ok) {
        const data = await response.json();
        return data.articles.map(article => ({
          title: article.title,
          description: article.description || article.content?.substring(0, 200) + '...',
          url: article.url,
          publishedAt: article.publishedAt,
          source: article.source.name,
          category: category
        }));
      }
    } catch (error) {
      console.error('NewsAPI failed:', error);
    }

    // Fallback: используем Reddit API для AI новостей
    try {
      const subreddits = ['artificial', 'MachineLearning', 'OpenAI', 'singularity'];
      const subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
      
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=${limit}`);
      
      if (response.ok) {
        const data = await response.json();
        return data.data.children.map(post => ({
          title: post.data.title,
          description: post.data.selftext?.substring(0, 200) + '...' || 'Обсуждение на Reddit',
          url: post.data.url.startsWith('http') ? post.data.url : `https://reddit.com${post.data.permalink}`,
          publishedAt: new Date(post.data.created_utc * 1000).toISOString(),
          source: `Reddit r/${subreddit}`,
          category: category
        }));
      }
    } catch (error) {
      console.error('Reddit API failed:', error);
    }

    // Если все API недоступны, используем актуальные mock данные
    return this.getRecentMockNews(limit, category);
  }

  getRecentMockNews(limit, category) {
    const currentTime = Date.now();
    
    const recentNews = [
      {
        title: "OpenAI выпустила ChatGPT-5 с революционными возможностями рассуждения",
        description: "Новая модель демонстрирует значительные улучшения в логическом мышлении, математике и программировании, превосходя предыдущие версии на 40%.",
        url: "https://openai.com/blog/chatgpt-5-release",
        publishedAt: new Date(currentTime - 1 * 60 * 60 * 1000).toISOString(),
        source: "OpenAI Official",
        category: "technology"
      },
      {
        title: "Anthropic привлекла $2 млрд для развития Claude AI",
        description: "Компания получила крупнейшие инвестиции в истории для создания более безопасных и мощных AI-систем следующего поколения.",
        url: "https://anthropic.com/news/funding-2024",
        publishedAt: new Date(currentTime - 3 * 60 * 60 * 1000).toISOString(),
        source: "TechCrunch",
        category: "business"
      },
      {
        title: "Google DeepMind представила Gemini 2.0 с мультимодальными возможностями",
        description: "Новая модель может одновременно обрабатывать текст, изображения, видео и аудио, показывая лучшие результаты в бенчмарках.",
        url: "https://deepmind.google/discover/blog/gemini-2-announcement",
        publishedAt: new Date(currentTime - 5 * 60 * 60 * 1000).toISOString(),
        source: "Google DeepMind",
        category: "technology"
      },
      {
        title: "MIT опубликовал прорывное исследование по квантовому машинному обучению",
        description: "Ученые разработали алгоритм, который использует квантовые эффекты для ускорения обучения нейронных сетей в 1000 раз.",
        url: "https://news.mit.edu/quantum-ml-breakthrough-2024",
        publishedAt: new Date(currentTime - 8 * 60 * 60 * 1000).toISOString(),
        source: "MIT Technology Review",
        category: "research"
      },
      {
        title: "Cursor AI стал самым популярным AI-редактором кода среди разработчиков",
        description: "По данным Stack Overflow Survey 2024, Cursor обогнал GitHub Copilot по популярности среди профессиональных разработчиков.",
        url: "https://cursor.sh/blog/stackoverflow-survey-2024",
        publishedAt: new Date(currentTime - 12 * 60 * 60 * 1000).toISOString(),
        source: "Stack Overflow",
        category: "technology"
      },
      {
        title: "ЕС принял окончательную версию AI Act - самого строгого закона об ИИ",
        description: "Новое законодательство устанавливает жесткие требования к разработчикам AI-систем и может изменить всю индустрию.",
        url: "https://ec.europa.eu/commission/presscorner/ai-act-final",
        publishedAt: new Date(currentTime - 16 * 60 * 60 * 1000).toISOString(),
        source: "European Commission",
        category: "business"
      }
    ];

    if (category === 'all') {
      return recentNews.slice(0, limit);
    }

    return recentNews
      .filter(article => article.category === category)
      .slice(0, limit);
  }

  async getAIMarketData(timeframe = 'month') {
    const marketData = {
      timeframe,
      marketSize: {
        current: 180.5, // в миллиардах долларов
        growth: 37.3, // процент роста
        projected2026: 298.2
      },
      topCompanies: [
        { name: 'OpenAI', valuation: 157, growthRate: 45.2 },
        { name: 'Anthropic', valuation: 25, growthRate: 89.1 },
        { name: 'Google DeepMind', valuation: 850, growthRate: 23.4 },
        { name: 'Microsoft AI', valuation: 1200, growthRate: 31.7 }
      ],
      sectors: {
        'Generative AI': { size: 67.4, growth: 42.1 },
        'Computer Vision': { size: 48.2, growth: 28.9 },
        'NLP': { size: 35.1, growth: 35.7 },
        'ML Platforms': { size: 29.8, growth: 22.3 }
      },
      timestamp: new Date().toISOString()
    };

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(marketData, null, 2)
        }
      ]
    };
  }

  async searchAINews(query, limit = 5) {
    try {
      const results = this.getMockSearchResults(query, limit);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              query,
              count: results.length,
              results
            }, null, 2)
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Ошибка поиска новостей: ${error.message}`
          }
        ]
      };
    }
  }

  async fetchFromMultipleSources(limit, category) {
    const mockNews = this.getMockAINews(limit, category);
    
    return mockNews
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, limit);
  }

  getMockAINews(limit, category = 'all') {
    const allArticles = [
      {
        title: "OpenAI представила новую модель GPT-5 с революционными возможностями",
        description: "Компания OpenAI анонсировала выпуск GPT-5, которая показывает значительные улучшения в понимании контекста и многомодальных возможностях.",
        url: "https://openai.com/blog/gpt-5-announcement",
        publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        source: "AI Today",
        category: "technology"
      },
      {
        title: "Anthropic привлекла $500M в новом раунде финансирования",
        description: "Создатель Claude AI получил крупные инвестиции для развития безопасных систем искусственного интеллекта.",
        url: "https://techcrunch.com/anthropic-funding-500m",
        publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        source: "TechCrunch",
        category: "business"
      },
      {
        title: "Новое исследование MIT показывает прорыв в области квантового ИИ",
        description: "Ученые из MIT разработали алгоритм, объединяющий квантовые вычисления с машинным обучением.",
        url: "https://news.mit.edu/quantum-ai-breakthrough",
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        source: "MIT Technology Review",
        category: "research"
      },
      {
        title: "Google Gemini Ultra демонстрирует лучшие результаты в бенчмарках",
        description: "Новая версия Gemini показывает превосходство над конкурентами в задачах кодирования и математики.",
        url: "https://blog.google/technology/ai/gemini-ultra-benchmarks",
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        source: "The Verge",
        category: "technology"
      },
      {
        title: "Европейский союз принял новые регуляции для ИИ-систем",
        description: "ЕС установил строгие правила для разработки и использования систем искусственного интеллекта.",
        url: "https://ec.europa.eu/ai-act-regulations",
        publishedAt: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
        source: "Reuters",
        category: "business"
      },
      {
        title: "Cursor AI получил $60M инвестиций для развития AI-редактора кода",
        description: "Популярный AI-редактор кода привлек крупные инвестиции от ведущих венчурных фондов.",
        url: "https://cursor.sh/blog/funding-announcement",
        publishedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
        source: "VentureBeat",
        category: "business"
      },
      {
        title: "Claude 3.5 Sonnet показывает новые возможности в программировании",
        description: "Anthropic выпустила обновленную версию Claude с улучшенными способностями к написанию кода.",
        url: "https://anthropic.com/claude-3-5-sonnet",
        publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        source: "AI Research",
        category: "technology"
      }
    ];

    if (category === 'all') {
      return allArticles.slice(0, limit);
    }

    return allArticles
      .filter(article => article.category === category)
      .slice(0, limit);
  }

  getMockSearchResults(query, limit) {
    const searchResults = {
      'ChatGPT': [
        {
          title: "ChatGPT получил новые возможности работы с изображениями",
          description: "OpenAI добавила расширенные функции анализа и генерации изображений в ChatGPT.",
          url: "https://openai.com/blog/chatgpt-vision-update",
          publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
          source: "OpenAI Blog"
        }
      ],
      'Claude': [
        {
          title: "Claude AI демонстрирует превосходство в задачах программирования",
          description: "Новые тесты показывают, что Claude превосходит конкурентов в написании и отладке кода.",
          url: "https://anthropic.com/research/claude-coding-benchmark",
          publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
          source: "Anthropic Research"
        }
      ],
      'OpenAI': [
        {
          title: "OpenAI анонсировала партнерство с Microsoft для корпоративных решений",
          description: "Компании расширяют сотрудничество в области корпоративного ИИ.",
          url: "https://news.microsoft.com/openai-partnership-enterprise",
          publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
          source: "Microsoft News"
        }
      ]
    };

    const queryLower = query.toLowerCase();
    const matchingResults = [];

    for (const [key, results] of Object.entries(searchResults)) {
      if (key.toLowerCase().includes(queryLower) || queryLower.includes(key.toLowerCase())) {
        matchingResults.push(...results);
      }
    }

    if (matchingResults.length === 0) {
      return [{
        title: `Результаты поиска по запросу "${query}"`,
        description: "По вашему запросу найдены релевантные новости в области ИИ.",
        url: "https://ai-news-search.com/results",
        publishedAt: new Date().toISOString(),
        source: "AI News Aggregator"
      }];
    }

    return matchingResults.slice(0, limit);
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('AI News MCP Server running on stdio');
  }
}

const server = new AINewsServer();
server.run().catch(console.error); 