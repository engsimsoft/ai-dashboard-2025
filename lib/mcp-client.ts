// MCP Client для работы с AI News сервером

// Базовый URL MCP HTTP-обвязки (можно переопределить env-переменной)
const MCP_BASE = process.env.NEXT_PUBLIC_MCP_API_BASE || "http://localhost:3003"

// Унифицированный вызов MCP через HTTP
async function callMcp(path: string, body: Record<string, unknown>) {
  const res = await fetch(`${MCP_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    throw new Error(`MCP request to ${path} failed with status ${res.status}`)
  }

  return res.json()
}

export async function mcp_ai_news_get_ai_news(params: {
  category?: string;
  limit?: number;
}) {
  // Используем встроенные MCP функции Cursor
  const { mcp_ai_news_get_ai_news } = globalThis as any;
  
  if (mcp_ai_news_get_ai_news) {
    return await mcp_ai_news_get_ai_news(params);
  }
  
  // Fallback: HTTP вызов к MCP серверу
  return callMcp("/mcp/ai-news/get_ai_news", params)
}

export async function mcp_ai_news_get_ai_market_data(params: {
  timeframe?: string;
}) {
  const { mcp_ai_news_get_ai_market_data } = globalThis as any;
  
  if (mcp_ai_news_get_ai_market_data) {
    return await mcp_ai_news_get_ai_market_data(params);
  }
  
  // Fallback: HTTP вызов к MCP серверу
  return callMcp("/mcp/ai-news/get_ai_market_data", params)
}

export async function mcp_ai_news_search_ai_news(params: {
  query: string;
  limit?: number;
}) {
  const { mcp_ai_news_search_ai_news } = globalThis as any;
  
  if (mcp_ai_news_search_ai_news) {
    return await mcp_ai_news_search_ai_news(params);
  }
  
  // Fallback: HTTP вызов к MCP серверу
  return callMcp("/mcp/ai-news/search_ai_news", params)
} 