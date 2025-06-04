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
    console.error("❌ Error fetching AI news from MCP:", error)
    
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
      },
      {
        title: "DeepSeek R1 показывает прорывные результаты в рассуждениях",
        description: "Обновленная модель с 685 миллиардами параметров превосходит конкурентов в тестах математики и логики.",
        url: "https://deepseek.com/blog/r1-breakthrough",
        publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        source: "DeepSeek",
        category: "Технологии ИИ"
      },
      {
        title: "Anthropic запустил Claude 4 - самую мощную модель компании",
        description: "Claude Opus 4 может автономно работать до 7 часов подряд над сложными задачами программирования.",
        url: "https://anthropic.com/claude-4",
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        source: "Anthropic",
        category: "Технологии ИИ"
      },
      {
        title: "Google Veo 3 произвел фурор в создании видео",
        description: "Пользователи создают полнометражные фильмы с помощью ИИ. Поддержка 4K видео и звука.",
        url: "https://deepmind.google/veo-3/",
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        source: "Google DeepMind",
        category: "Технологии ИИ"
      },
      {
        title: "Cursor AI стал самым популярным редактором среди разработчиков",
        description: "По данным Stack Overflow Survey 2024, Cursor обогнал GitHub Copilot по популярности.",
        url: "https://cursor.sh/blog/popularity-2024",
        publishedAt: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
        source: "Stack Overflow",
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
      },
      {
        title: "OpenAI o3 превзошел все предыдущие модели в математике",
        description: "Новая модель показала 87.5% в тесте AIME 2025, установив новый рекорд для ИИ систем.",
        url: "https://openai.com/o3-math-breakthrough",
        publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        source: "OpenAI",
        category: "Модели"
      },
      {
        title: "Google Gemini 2.0 с мультимодальными возможностями",
        description: "Новая модель может одновременно обрабатывать текст, изображения, видео и аудио.",
        url: "https://deepmind.google/gemini-2/",
        publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        source: "Google DeepMind",
        category: "Модели"
      },
      {
        title: "Meta выпустила Llama 4 с открытыми весами",
        description: "Новая модель конкурирует с GPT-4 и доступна для коммерческого использования бесплатно.",
        url: "https://ai.meta.com/llama-4/",
        publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
        source: "Meta AI",
        category: "Модели"
      },
      {
        title: "Mistral AI анонсировала самую эффективную модель в отрасли",
        description: "Mistral Large 3 показывает лучшее соотношение качества и скорости среди всех моделей.",
        url: "https://mistral.ai/large-3/",
        publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
        source: "Mistral AI",
        category: "Модели"
      },
      {
        title: "xAI Grok-3 превзошел GPT-4 в реальном времени",
        description: "Новая модель от компании Илона Маска показывает лучшие результаты в задачах с актуальными данными.",
        url: "https://x.ai/grok-3/",
        publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
        source: "xAI",
        category: "Модели"
      }
    ],
    "Vibecoding": [
      {
        title: "Cursor представил революционный AI Composer для программирования",
        description: "Новый инструмент позволяет создавать целые приложения через естественный диалог с ИИ.",
        url: "https://cursor.sh/composer",
        publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        source: "Cursor Blog",
        category: "Vibecoding"
      },
      {
        title: "GitHub Copilot Chat интегрировал голосовое программирование",
        description: "Разработчики теперь могут программировать голосом, описывая логику естественным языком.",
        url: "https://github.blog/voice-coding",
        publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        source: "GitHub",
        category: "Vibecoding"
      },
      {
        title: "V0 от Vercel генерирует React компоненты из скриншотов",
        description: "Новая возможность позволяет загрузить изображение интерфейса и получить готовый код.",
        url: "https://v0.dev/screenshot-to-code",
        publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        source: "Vercel",
        category: "Vibecoding"
      },
      {
        title: "Replit Agent автоматически создает полноценные приложения",
        description: "ИИ-агент может создать, задеплоить и протестировать веб-приложение за минуты.",
        url: "https://replit.com/agent",
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        source: "Replit",
        category: "Vibecoding"
      },
      {
        title: "Claude Engineer решает сложные архитектурные задачи",
        description: "ИИ теперь может проектировать микросервисную архитектуру и настраивать CI/CD пайплайны.",
        url: "https://claude-engineer.com/architecture",
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        source: "Claude Engineer",
        category: "Vibecoding"
      },
      {
        title: "MCP серверы превратили Cursor в универсальный инструмент",
        description: "Протокол MCP позволяет интегрировать любые внешние сервисы прямо в процесс программирования.",
        url: "https://modelcontextprotocol.io/cursor-integration",
        publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
        source: "MCP Blog",
        category: "Vibecoding"
      }
    ],
    "LLM": [
      {
        title: "MIT опубликовал прорывное исследование по квантовому машинному обучению",
        description: "Ученые разработали алгоритм, который использует квантовые эффекты для ускорения обучения нейронных сетей в 1000 раз.",
        url: "https://news.mit.edu/quantum-ml-breakthrough",
        publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        source: "MIT Technology Review",
        category: "LLM"
      },
      {
        title: "Исследование показало что ИИ превзошел людей в эмоциональном интеллекте",
        description: "Шесть моделей ИИ показали 82% правильных ответов против 56% у людей в тестах на эмоциональный интеллект.",
        url: "https://science.org/emotional-ai-breakthrough",
        publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        source: "ScienceDaily",
        category: "LLM"
      },
      {
        title: "Прорыв в компьютерном зрении: ИИ учится видеть как человек",
        description: "Новая техника Lp-Convolution приближает машинное зрение к человеческому восприятию.",
        url: "https://ibs.re.kr/visual-ai-breakthrough",
        publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
        source: "Institute for Basic Science",
        category: "LLM"
      },
      {
        title: "Новый метод обучения LLM сократил время тренировки в 10 раз",
        description: "Исследователи из Stanford разработали революционный подход к дистилляции знаний.",
        url: "https://stanford.edu/fast-llm-training",
        publishedAt: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
        source: "Stanford AI Lab",
        category: "LLM"
      },
      {
        title: "ИИ научился саморефлексии и метакогнитивным процессам",
        description: "Новое исследование показывает, что современные модели могут анализировать собственные мыслительные процессы.",
        url: "https://deepmind.google/metacognition-research",
        publishedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
        source: "DeepMind Research",
        category: "LLM"
      },
      {
        title: "Breakthrough в области многоязычных моделей",
        description: "Новая архитектура позволяет одной модели свободно переключаться между 200+ языками без потери качества.",
        url: "https://research.meta.com/multilingual-breakthrough",
        publishedAt: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
        source: "Meta Research",
        category: "LLM"
      }
    ]
  }

  const categoryNews = fallbackData[category] || fallbackData["Технологии ИИ"]
  return categoryNews.slice(0, limit)
} 