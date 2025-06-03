"use client"

export function AICodingUseCases() {
  const useCases = [
    {
      title: "Быстрое прототипирование",
      description: "Нужно быстро создать MVP или демо-версию приложения",
      icon: "⚡",
      color: "green",
      platforms: [
        { name: "Replit Agent", reason: "Создает полные приложения с нуля за минуты" },
        { name: "Bolt.new", reason: "Мгновенный предварительный просмотр веб-приложений" },
        { name: "Lovable", reason: "No-code подход для быстрых результатов" }
      ]
    },
    {
      title: "Рефакторинг больших проектов",
      description: "Нужно улучшить существующую кодовую базу",
      icon: "🔧",
      color: "blue",
      platforms: [
        { name: "Cursor", reason: "Composer понимает контекст всего проекта" },
        { name: "Windsurf", reason: "Cascade режим для сложных изменений" },
        { name: "GitHub Copilot", reason: "Отличная интеграция с существующими проектами" }
      ]
    },
    {
      title: "Обучение программированию",
      description: "Изучение новых языков и технологий",
      icon: "📚",
      color: "purple",
      platforms: [
        { name: "Replit Agent", reason: "Объясняет код и помогает понять концепции" },
        { name: "GitHub Copilot", reason: "Показывает лучшие практики в реальном времени" },
        { name: "Cursor", reason: "Интерактивные объяснения кода" }
      ]
    },
    {
      title: "Создание UI/UX",
      description: "Разработка пользовательских интерфейсов",
      icon: "🎨",
      color: "pink",
      platforms: [
        { name: "v0 by Vercel", reason: "Специализируется на React компонентах" },
        { name: "Lovable", reason: "Автоматическая генерация красивого дизайна" },
        { name: "Bolt.new", reason: "Мгновенный визуальный фидбек" }
      ]
    },
    {
      title: "Корпоративная разработка",
      description: "Работа в больших командах с требованиями безопасности",
      icon: "🏢",
      color: "indigo",
      platforms: [
        { name: "Amazon Q", reason: "Корпоративная безопасность и AWS интеграция" },
        { name: "GitHub Copilot", reason: "Проверенная платформа с enterprise функциями" },
        { name: "Replit", reason: "Совместная работа и управление командой" }
      ]
    },
    {
      title: "Мобильная разработка",
      description: "Создание мобильных приложений",
      icon: "📱",
      color: "orange",
      platforms: [
        { name: "Replit Agent", reason: "Поддержка React Native и Flutter" },
        { name: "Cursor", reason: "Отличная работа с мобильными фреймворками" },
        { name: "GitHub Copilot", reason: "Поддержка всех мобильных технологий" }
      ]
    },
    {
      title: "DevOps и автоматизация",
      description: "Настройка CI/CD и инфраструктуры",
      icon: "⚙️",
      color: "gray",
      platforms: [
        { name: "Amazon Q", reason: "Глубокая интеграция с AWS сервисами" },
        { name: "Replit Agent", reason: "Автоматический деплой и хостинг" },
        { name: "GitHub Copilot", reason: "Помощь с Docker, Kubernetes, YAML" }
      ]
    },
    {
      title: "Исследования и эксперименты",
      description: "Data Science, ML, исследовательские проекты",
      icon: "🔬",
      color: "yellow",
      platforms: [
        { name: "Replit Agent", reason: "Поддержка Python, Jupyter notebooks" },
        { name: "Cursor", reason: "Отличная работа с научными библиотеками" },
        { name: "GitHub Copilot", reason: "Знание ML/AI библиотек и паттернов" }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-200 bg-green-50",
      blue: "border-blue-200 bg-blue-50",
      purple: "border-purple-200 bg-purple-50",
      pink: "border-pink-200 bg-pink-50",
      indigo: "border-indigo-200 bg-indigo-50",
      orange: "border-orange-200 bg-orange-50",
      gray: "border-gray-200 bg-gray-50",
      yellow: "border-yellow-200 bg-yellow-50"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getIconBgColor = (color: string) => {
    const colors = {
      green: "bg-green-100",
      blue: "bg-blue-100",
      purple: "bg-purple-100",
      pink: "bg-pink-100",
      indigo: "bg-indigo-100",
      orange: "bg-orange-100",
      gray: "bg-gray-100",
      yellow: "bg-yellow-100"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {useCases.map((useCase, index) => (
        <div 
          key={index}
          className={`border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${getColorClasses(useCase.color)}`}
        >
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 rounded-full ${getIconBgColor(useCase.color)} flex items-center justify-center text-2xl mr-4`}>
              {useCase.icon}
            </div>
            <h3 className="text-xl font-bold">{useCase.title}</h3>
          </div>
          
          <p className="text-gray-700 mb-4 text-sm">{useCase.description}</p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Рекомендуемые платформы:</h4>
            {useCase.platforms.map((platform, idx) => (
              <div key={idx} className="bg-white p-3 rounded border">
                <div className="font-semibold text-sm text-blue-600">{platform.name}</div>
                <div className="text-xs text-gray-600 mt-1">{platform.reason}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 