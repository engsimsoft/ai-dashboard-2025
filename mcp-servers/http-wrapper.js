#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

// Функция для вызова MCP сервера
async function callMCPServer(serverName, toolName, args = {}) {
  return new Promise((resolve, reject) => {
    const serverPath = path.join(__dirname, `${serverName}-server.js`);
    const child = spawn('node', [serverPath], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let output = '';
    let error = '';

    // Отправляем запрос к MCP серверу
    const request = {
      jsonrpc: '2.0',
      id: 1,
      method: 'tools/call',
      params: {
        name: toolName,
        arguments: args
      }
    };

    child.stdin.write(JSON.stringify(request) + '\n');
    child.stdin.end();

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.stderr.on('data', (data) => {
      error += data.toString();
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`MCP server exited with code ${code}: ${error}`));
        return;
      }

      try {
        // Парсим ответ от MCP сервера
        const lines = output.trim().split('\n');
        const lastLine = lines[lines.length - 1];
        const response = JSON.parse(lastLine);
        
        if (response.error) {
          reject(new Error(response.error.message));
          return;
        }

        // Извлекаем данные из content
        const content = response.result?.content?.[0]?.text;
        if (content) {
          const data = JSON.parse(content);
          resolve(data);
        } else {
          resolve({});
        }
      } catch (parseError) {
        reject(new Error(`Failed to parse MCP response: ${parseError.message}`));
      }
    });

    child.on('error', (err) => {
      reject(new Error(`Failed to start MCP server: ${err.message}`));
    });
  });
}

// AI News endpoints
app.post('/mcp/ai-news/get_ai_news', async (req, res) => {
  try {
    const { category = 'all', limit = 10 } = req.body;
    const result = await callMCPServer('ai-news', 'get_ai_news', { category, limit });
    
    // Возвращаем массив новостей
    res.json(result.news || []);
  } catch (error) {
    console.error('Error calling ai-news MCP:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/mcp/ai-news/get_ai_market_data', async (req, res) => {
  try {
    const { timeframe = 'month' } = req.body;
    const result = await callMCPServer('ai-news', 'get_ai_market_data', { timeframe });
    
    res.json(result);
  } catch (error) {
    console.error('Error calling ai-news market data MCP:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/mcp/ai-news/search_ai_news', async (req, res) => {
  try {
    const { query, limit = 5 } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    const result = await callMCPServer('ai-news', 'search_ai_news', { query, limit });
    
    // Возвращаем массив результатов поиска
    res.json(result.results || []);
  } catch (error) {
    console.error('Error calling ai-news search MCP:', error);
    res.status(500).json({ error: error.message });
  }
});

// GitHub endpoints
app.post('/mcp/github/get_repo_info', async (req, res) => {
  try {
    const { owner, repo } = req.body;
    if (!owner || !repo) {
      return res.status(400).json({ error: 'Owner and repo parameters are required' });
    }
    
    const result = await callMCPServer('github', 'get_repo_info', { owner, repo });
    res.json(result);
  } catch (error) {
    console.error('Error calling github MCP:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/mcp/github/search_repositories', async (req, res) => {
  try {
    const { query, language, limit = 10, sort } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    const result = await callMCPServer('github', 'search_repositories', { 
      query, language, limit, sort 
    });
    res.json(result);
  } catch (error) {
    console.error('Error calling github search MCP:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 MCP HTTP Wrapper running on http://localhost:${PORT}`);
  console.log(`📡 Available endpoints:`);
  console.log(`   POST /mcp/ai-news/get_ai_news`);
  console.log(`   POST /mcp/ai-news/get_ai_market_data`);
  console.log(`   POST /mcp/ai-news/search_ai_news`);
  console.log(`   POST /mcp/github/get_repo_info`);
  console.log(`   POST /mcp/github/search_repositories`);
  console.log(`   GET  /health`);
}); 