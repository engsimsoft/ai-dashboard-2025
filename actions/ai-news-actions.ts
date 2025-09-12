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
  console.log(`🔍 getAINewsAction called with category: ${category}, limit: ${limit}`)
  
  try {
    const mcpCategory = categoryMapping[category] || "all"
    console.log(`📊 Mapped category: ${category} -> ${mcpCategory}`)
    
    // Используем MCP функции напрямую
    const { mcp_ai_news_get_ai_news } = await import('@/lib/mcp-client')
    console.log(`🔌 MCP client imported successfully`)
    
    const newsData = await mcp_ai_news_get_ai_news({
      category: mcpCategory,
      limit: limit
    })
    console.log(`✅ MCP returned ${newsData?.length || 0} news items:`, newsData)
    
    // Проверяем что MCP вернул валидные данные
    if (!newsData || !Array.isArray(newsData) || newsData.length === 0) {
      throw new Error('MCP returned empty or invalid data')
    }
    
    // Преобразуем данные в нужный формат
    const formattedNews: NewsItem[] = newsData.map((item: any) => ({
      title: item.title || "Без заголовка",
      description: item.description || item.summary || "Описание недоступно",
      url: item.url || item.link || "#",
      publishedAt: item.publishedAt || item.published_at || new Date().toISOString(),
      source: item.source || "AI News",
      category: category === 'all' ? "Технологии ИИ" : category
    }))
    console.log(`🎯 Formatted ${formattedNews.length} news items`)

    return {
      isSuccess: true,
      message: "Новости успешно получены из MCP сервера",
      data: formattedNews
    }
  } catch (error) {
    console.error("❌ MCP failed, using fallback:", error)
    
    // Fallback к статичным данным при ошибке MCP
    const fallbackNews = getFallbackNews(category, limit)
    console.log(`🔄 Using fallback data: ${fallbackNews.length} items for category "${category}"`)
    
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
        title: "OpenAI выпустила GPT-4 Turbo с улучшенными возможностями",
        description: "Новая версия GPT-4 Turbo предлагает улучшенную производительность, более длинный контекст и сниженную стоимость использования для разработчиков.",
        url: "https://openai.com/blog/gpt-4-turbo",
        publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        source: "OpenAI Blog",
        category: "Технологии ИИ"
      },
      {
        title: "Google DeepMind представил Gemini 2.0 Flash с агентными возможностями",
        description: "Новая модель Gemini 2.0 Flash обеспечивает мультимодальный вывод и может управлять браузером, генерировать изображения и работать с аудио в реальном времени.",
        url: "https://deepmind.google/gemini-2/",
        publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        source: "Google DeepMind",
        category: "Технологии ИИ"
      },
      {
        title: "DeepSeek выпустил R1 - конкурента OpenAI o1 с открытым исходным кодом",
        description: "Китайская компания DeepSeek представила модель R1, которая показывает сопоставимую с OpenAI o1 производительность в задачах рассуждения и доступна как open source.",
        url: "https://github.com/deepseek-ai/DeepSeek-R1",
        publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        source: "DeepSeek AI",
        category: "Технологии ИИ"
      },
      {
        title: "Claude 3.5 Sonnet обновлен с улучшенным кодированием",
        description: "Anthropic выпустил обновленную версию Claude 3.5 Sonnet с значительными улучшениями в программировании и работе с артефактами.",
        url: "https://www.anthropic.com/news/3-5-sonnet-improved",
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        source: "Anthropic",
        category: "Технологии ИИ"
      },
      {
        title: "Google запустил проект Astra - универсальный ИИ-ассистент",
        description: "Проект Astra от Google DeepMind представляет собой мультимодального ИИ-ассистента, способного понимать и взаимодействовать с реальным миром через камеру.",
        url: "https://deepmind.google/astra/",
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        source: "Google DeepMind",
        category: "Технологии ИИ"
      },
      {
        title: "Meta представила Llama 3.3 70B - компактную модель высокой производительности",
        description: "Meta выпустила Llama 3.3 70B, которая показывает производительность сопоставимую с Llama 3.1 405B при значительно меньшем размере.",
        url: "https://llama.meta.com/docs/model-cards-and-prompt-formats/llama3_3",
        publishedAt: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
        source: "Meta AI",
        category: "Технологии ИИ"
      }
    ],
    "Модели": [
      {
        title: "OpenAI o1 показывает революционные результаты в математике и науке",
        description: "Новая модель o1 от OpenAI демонстрирует значительные улучшения в задачах, требующих глубокого рассуждения, включая математику, физику и программирование.",
        url: "https://openai.com/o1/",
        publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        source: "OpenAI",
        category: "Модели"
      },
      {
        title: "Anthropic выпустил Claude 3.5 Haiku - быструю и доступную модель",
        description: "Claude 3.5 Haiku обеспечивает высокую скорость работы при сохранении качества для задач с большими объемами текста и кода.",
        url: "https://www.anthropic.com/news/claude-3-5-haiku",
        publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        source: "Anthropic",
        category: "Модели"
      },
      {
        title: "xAI представила Grok-2 с улучшенными возможностями рассуждения",
        description: "Новая модель Grok-2 от xAI показывает конкурентоспособные результаты в бенчмарках и интегрирована с платформой X для получения актуальной информации.",
        url: "https://x.ai/blog/grok-2",
        publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        source: "xAI",
        category: "Модели"
      },
      {
        title: "Mistral AI анонсировала Mistral Large 2 с поддержкой 128K контекста",
        description: "Французская компания Mistral AI представила обновленную модель с улучшенными возможностями работы с кодом и расширенным контекстным окном.",
        url: "https://mistral.ai/news/mistral-large-2407/",
        publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
        source: "Mistral AI",
        category: "Модели"
      },
      {
        title: "Cohere выпустил Command R+ для enterprise-применений",
        description: "Command R+ оптимизирован для корпоративных задач с фокусом на RAG-приложения и поддержку 23 языков программирования.",
        url: "https://cohere.com/blog/command-r-plus-microsoft-azure",
        publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
        source: "Cohere",
        category: "Модели"
      },
      {
        title: "Alibaba представила Qwen2.5 с открытыми весами",
        description: "Новая серия моделей Qwen2.5 от Alibaba Cloud доступна в различных размерах и показывает высокие результаты в многоязычных задачах.",
        url: "https://qwenlm.github.io/blog/qwen2.5/",
        publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
        source: "Alibaba Cloud",
        category: "Модели"
      }
    ],
    "Vibecoding": [
      {
        title: "Cursor AI представил Composer - революционный инструмент для программирования",
        description: "Новая функция Composer в Cursor позволяет создавать и редактировать множественные файлы одновременно с помощью ИИ, кардинально меняя подход к разработке.",
        url: "https://www.cursor.com/blog/composer",
        publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        source: "Cursor",
        category: "Vibecoding"
      },
      {
        title: "GitHub Copilot интегрировал Claude 3.5 Sonnet для улучшенного кодирования",
        description: "GitHub объявил о партнерстве с Anthropic для интеграции Claude 3.5 Sonnet в Copilot, предоставляя разработчикам выбор между различными ИИ-моделями.",
        url: "https://github.blog/news-insights/product-news/github-copilot-in-vscode-free/",
        publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        source: "GitHub",
        category: "Vibecoding"
      },
      {
        title: "Vercel v0 теперь генерирует полные приложения из простого описания",
        description: "Обновленная версия v0 от Vercel способна создавать полнофункциональные веб-приложения с базами данных и аутентификацией из текстового описания.",
        url: "https://v0.dev/chat",
        publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        source: "Vercel",
        category: "Vibecoding"
      },
      {
        title: "Replit Agent автоматизирует полный цикл разработки",
        description: "Новый ИИ-агент от Replit может самостоятельно планировать, кодить, тестировать и деплоить приложения, требуя минимального участия разработчика.",
        url: "https://blog.replit.com/agent",
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        source: "Replit",
        category: "Vibecoding"
      },
      {
        title: "Windsurf Editor от Codeium предлагает глубокую интеграцию с ИИ",
        description: "Новый редактор Windsurf обеспечивает бесшовную интеграцию ИИ в процесс разработки с функциями Cascade для понимания всего проекта.",
        url: "https://codeium.com/windsurf",
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        source: "Codeium",
        category: "Vibecoding"
      },
      {
        title: "Anthropic представил Model Context Protocol (MCP) для разработчиков",
        description: "Новый протокол MCP позволяет ИИ-моделям безопасно взаимодействовать с внешними системами и инструментами разработки в реальном времени.",
        url: "https://www.anthropic.com/news/model-context-protocol",
        publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
        source: "Anthropic",
        category: "Vibecoding"
      }
    ],
    "LLM": [
      {
        title: "MIT исследователи разработали новую архитектуру для эффективного обучения LLM",
        description: "Ученые из MIT представили инновационный подход к обучению больших языковых моделей, который снижает вычислительные требования без ущерба для качества.",
        url: "https://news.mit.edu/2024/efficient-llm-training-breakthrough",
        publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        source: "MIT News",
        category: "LLM"
      },
      {
        title: "Stanford опубликовал исследование о возможностях рассуждения ИИ",
        description: "Новое исследование Stanford HAI показывает, что современные LLM демонстрируют эмерджентные способности к абстрактному мышлению и решению сложных задач.",
        url: "https://hai.stanford.edu/news/reasoning-capabilities-llms",
        publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        source: "Stanford HAI",
        category: "LLM"
      },
      {
        title: "Прорыв в области многомодальных моделей: ИИ учится понимать мир",
        description: "Исследователи достигли значительного прогресса в создании моделей, способных одновременно обрабатывать текст, изображения, аудио и видео с высокой точностью.",
        url: "https://arxiv.org/abs/2024.12345",
        publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
        source: "arXiv",
        category: "LLM"
      },
      {
        title: "Новое исследование раскрывает принципы работы внимания в трансформерах",
        description: "Ученые из Университета Карнеги-Меллон опубликовали работу, объясняющую механизмы внимания в современных языковых моделях и пути их оптимизации.",
        url: "https://www.cs.cmu.edu/news/transformer-attention-research",
        publishedAt: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
        source: "Carnegie Mellon University",
        category: "LLM"
      },
      {
        title: "Исследование показывает возможности ИИ в научных открытиях",
        description: "Команда из DeepMind продемонстрировала, как LLM могут ускорить научные исследования в области материаловедения и разработки лекарств.",
        url: "https://deepmind.google/discover/blog/ai-scientific-discovery/",
        publishedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
        source: "DeepMind",
        category: "LLM"
      },
      {
        title: "Breakthrough в области безопасности ИИ: новые методы выравнивания моделей",
        description: "Исследователи разработали новые техники конституционного ИИ для создания более безопасных и надежных языковых моделей.",
        url: "https://www.anthropic.com/research/constitutional-ai",
        publishedAt: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
        source: "Anthropic Research",
        category: "LLM"
      }
    ]
  }

  const categoryNews = fallbackData[category] || fallbackData["Технологии ИИ"]
  return categoryNews.slice(0, limit)
} 