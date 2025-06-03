"use client"

export function AICodingPlatformCards() {
  const platforms = [
    {
      name: "Cursor",
      category: "IDE с ИИ",
      description: "Форк VS Code с интегрированным ИИ-ассистентом",
      features: [
        "Composer для больших изменений кода",
        "Интеграция с Claude 3.5 Sonnet",
        "Контекст всего проекта",
        "Локальная индексация кода"
      ],
      pricing: "$20/месяц Pro",
      color: "blue",
      badge: "Популярный",
      strengths: "Рефакторинг, работа с большими проектами",
      weaknesses: "Требует знания программирования"
    },
    {
      name: "Replit Agent", 
      category: "Облачная IDE",
      description: "ИИ-агент для создания полных приложений",
      features: [
        "Создание приложений с нуля",
        "Автоматический деплой",
        "Совместная работа в реальном времени",
        "Поддержка 50+ языков программирования"
      ],
      pricing: "$25/месяц Core",
      color: "green",
      badge: "Агентный ИИ",
      strengths: "Быстрое прототипирование, обучение",
      weaknesses: "Ограничения облачной среды"
    },
    {
      name: "Bolt.new",
      category: "Веб-разработка",
      description: "ИИ для создания веб-приложений от StackBlitz",
      features: [
        "Создание React/Vue приложений",
        "Мгновенный предварительный просмотр",
        "Интеграция с npm пакетами",
        "Экспорт в GitHub"
      ],
      pricing: "Бесплатно + Pro планы",
      color: "orange",
      badge: "Веб-фокус",
      strengths: "Фронтенд разработка, быстрые прототипы",
      weaknesses: "Ограничен веб-технологиями"
    },
    {
      name: "Windsurf",
      category: "IDE с ИИ",
      description: "Новый IDE от Codeium с агентными возможностями",
      features: [
        "Cascade - агентный режим",
        "Мультифайловое редактирование",
        "Локальные и облачные модели",
        "Интеграция с Git"
      ],
      pricing: "$15/месяц Pro",
      color: "purple",
      badge: "Новинка 2024",
      strengths: "Агентные возможности, цена",
      weaknesses: "Молодая платформа"
    },
    {
      name: "Lovable",
      category: "No-code ИИ",
      description: "ИИ-платформа для создания приложений без кода",
      features: [
        "Создание приложений из описания",
        "Автоматическая генерация UI/UX",
        "Интеграция с базами данных",
        "Мобильная адаптация"
      ],
      pricing: "$49/месяц Starter",
      color: "pink",
      badge: "No-code",
      strengths: "Простота, дизайн, скорость",
      weaknesses: "Ограниченная кастомизация"
    },
    {
      name: "v0 by Vercel",
      category: "UI генератор",
      description: "ИИ для создания React компонентов",
      features: [
        "Генерация React компонентов",
        "Shadcn/ui интеграция",
        "Tailwind CSS поддержка",
        "Итеративное улучшение"
      ],
      pricing: "$20/месяц Pro",
      color: "gray",
      badge: "UI-фокус",
      strengths: "Качественный UI, React экосистема",
      weaknesses: "Только фронтенд компоненты"
    },
    {
      name: "GitHub Copilot",
      category: "ИИ-ассистент",
      description: "Классический ИИ-помощник для программирования",
      features: [
        "Автодополнение кода",
        "Поддержка всех языков",
        "Интеграция с VS Code",
        "Чат-режим"
      ],
      pricing: "$10/месяц Individual",
      color: "indigo",
      badge: "Классика",
      strengths: "Универсальность, интеграция",
      weaknesses: "Нет агентных возможностей"
    },
    {
      name: "Amazon Q Developer",
      category: "Корпоративный ИИ",
      description: "ИИ-ассистент для разработки от Amazon",
      features: [
        "Интеграция с AWS",
        "Безопасность корпоративного уровня",
        "Поддержка множества IDE",
        "Анализ кодовой базы"
      ],
      pricing: "$19/месяц Pro",
      color: "yellow",
      badge: "Корпоративный",
      strengths: "AWS интеграция, безопасность",
      weaknesses: "Привязка к экосистеме Amazon"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50",
      green: "border-green-200 bg-green-50", 
      orange: "border-orange-200 bg-orange-50",
      purple: "border-purple-200 bg-purple-50",
      pink: "border-pink-200 bg-pink-50",
      gray: "border-gray-200 bg-gray-50",
      indigo: "border-indigo-200 bg-indigo-50",
      yellow: "border-yellow-200 bg-yellow-50"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      orange: "bg-orange-100 text-orange-800", 
      purple: "bg-purple-100 text-purple-800",
      pink: "bg-pink-100 text-pink-800",
      gray: "bg-gray-100 text-gray-800",
      indigo: "bg-indigo-100 text-indigo-800",
      yellow: "bg-yellow-100 text-yellow-800"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {platforms.map((platform, index) => (
        <div 
          key={index}
          className={`border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${getColorClasses(platform.color)}`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{platform.name}</h3>
              <p className="text-sm text-gray-600">{platform.category}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getBadgeColor(platform.color)}`}>
              {platform.badge}
            </span>
          </div>
          
          <p className="text-gray-700 mb-4 text-sm">{platform.description}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-sm">Ключевые возможности:</h4>
            <ul className="text-xs space-y-1">
              {platform.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">• {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-3">
            <div className="text-sm">
              <strong>Сильные стороны:</strong> <span className="text-green-600">{platform.strengths}</span>
            </div>
            <div className="text-sm mt-1">
              <strong>Слабые стороны:</strong> <span className="text-red-600">{platform.weaknesses}</span>
            </div>
          </div>
          
          <div className="text-lg font-bold text-center py-2 bg-white rounded border">
            {platform.pricing}
          </div>
        </div>
      ))}
    </div>
  )
} 