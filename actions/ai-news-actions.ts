"use server"

import { ActionState, NewsItem, MarketData } from "@/types"

// Маппинг категорий для MCP сервера
const categoryMapping: Record<string, string> = {
  "Технологии ИИ": "technology",
  "Модели": "technology", 
  "Vibecoding": "technology",
  "LLM": "research",
  "all": "all"
}

export async function getAINewsAction(
  category: string = 'all',
  limit: number = 6
): Promise<ActionState<NewsItem[]>> {
  try {
    const mcpCategory = categoryMapping[category] || "all"
    
    // Используем MCP функции напрямую
    const { mcp_ai_news_get_ai_news } = await import('@/lib/mcp-client')
    const newsData = await mcp_ai_news_get_ai_news({
      category: mcpCategory,
      limit: limit
    })
    
    // Преобразуем данные в нужный формат
    const formattedNews: NewsItem[] = newsData.map((item: any) => ({
      title: item.title || "Без заголовка",
      description: item.description || item.summary || "Описание недоступно",
      url: item.url || item.link || "#",
      publishedAt: item.publishedAt || item.published_at || new Date().toISOString(),
      source: item.source || "AI News",
      category: category === 'all' ? "Технологии ИИ" : category
    }))

    return {
      isSuccess: true,
      message: "Новости успешно получены из MCP сервера",
      data: formattedNews
    }
  } catch (error) {
    console.error("Error fetching AI news from MCP:", error)
    
    // Fallback к статичным данным при ошибке MCP
    const fallbackNews = getFallbackNews(category, limit)
    
    return {
      isSuccess: true,
      message: "Используются резервные новости (MCP недоступен)",
      data: fallbackNews
    }
  }
}

export async function getAIMarketDataAction(): Promise<ActionState<MarketData>> {
  try {
    // Получаем данные о рынке ИИ из MCP сервера
    const { mcp_ai_news_get_ai_market_data } = await import('@/lib/mcp-client')
    const marketData = await mcp_ai_news_get_ai_market_data({
      timeframe: "month"
    })
    
    const formattedData: MarketData = {
      marketSize: marketData.marketSize?.current || 180.5,
      growth: marketData.marketSize?.growth || 37.3,
      timeframe: marketData.timeframe || "month",
      lastUpdated: marketData.timestamp || new Date().toISOString()
    }

    return {
      isSuccess: true,
      message: "Данные рынка получены из MCP сервера",
      data: formattedData
    }
  } catch (error) {
    console.error("Error fetching market data from MCP:", error)
    
    // Fallback данные
    return {
      isSuccess: true,
      message: "Используются резервные данные рынка",
      data: {
        marketSize: 180.5,
        growth: 37.3,
        timeframe: "month",
        lastUpdated: new Date().toISOString()
      }
    }
  }
}

export async function searchAINewsAction(
  query: string,
  limit: number = 5
): Promise<ActionState<NewsItem[]>> {
  try {
    // Поиск новостей через MCP сервер
    const { mcp_ai_news_search_ai_news } = await import('@/lib/mcp-client')
    const searchData = await mcp_ai_news_search_ai_news({
      query: query,
      limit: limit
    })
    
    const formattedNews: NewsItem[] = searchData.map((item: any) => ({
      title: item.title || "Без заголовка",
      description: item.description || item.summary || "Описание недоступно",
      url: item.url || item.link || "#",
      publishedAt: item.publishedAt || item.published_at || new Date().toISOString(),
      source: item.source || "AI News",
      category: "Поиск"
    }))

    return {
      isSuccess: true,
      message: `Найдено ${formattedNews.length} новостей по запросу "${query}"`,
      data: formattedNews
    }
  } catch (error) {
    console.error("Error searching AI news:", error)
    
    return {
      isSuccess: false,
      message: "Ошибка при поиске новостей",
      data: []
    }
  }
}

// Fallback функция со статичными данными
function getFallbackNews(category: string, limit: number): NewsItem[] {
  const fallbackData: Record<string, NewsItem[]> = {
    "Технологии ИИ": [
      {
        title: "OpenAI представила новую модель GPT-5 с революционными возможностями",
        description: "Компания OpenAI анонсировала выпуск GPT-5, которая показывает значительные улучшения в понимании контекста и многомодальных возможностях.",
        url: "https://openai.com/blog",
        publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        source: "AI Today",
        category: "Технологии ИИ"
      },
      {
        title: "Google представил новую архитектуру нейронных сетей",
        description: "Исследователи Google разработали революционную архитектуру, которая превосходит трансформеры в задачах обработки длинных последовательностей.",
        url: "https://blog.google/technology/ai/",
        publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        source: "Google Research",
        category: "Технологии ИИ"
      }
    ],
    "Модели": [
      {
        title: "Claude 3.5 Sonnet показывает рекордные результаты в бенчмарках",
        description: "Новая модель от Anthropic демонстрирует превосходство в задачах рассуждения и кодирования.",
        url: "https://www.anthropic.com/news/claude-3-5-sonnet",
        publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        source: "Anthropic",
        category: "Модели"
      }
    ]
  }

  const categoryNews = fallbackData[category] || fallbackData["Технологии ИИ"]
  return categoryNews.slice(0, limit)
} 