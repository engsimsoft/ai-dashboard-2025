"use client"

export function AICodingUseCases() {
  const useCases = [
    {
      title: "Агентная разработка",
      description: "Автономное выполнение сложных задач разработки",
      icon: "🤖",
      color: "purple",
      platforms: [
        { name: "Windsurf", reason: "Cascade режим для автономной разработки" },
        { name: "Devin", reason: "Полностью автономный ИИ-разработчик" },
        { name: "Replit Agent", reason: "Создает полные приложения самостоятельно" }
      ]
    },
    {
      title: "Локальная и приватная разработка",
      description: "Разработка с полным контролем над данными",
      icon: "🔒",
      color: "green",
      platforms: [
        { name: "Aider", reason: "Полностью локальная работа с открытыми моделями" },
        { name: "Continue", reason: "Настраиваемые локальные провайдеры" },
        { name: "Windsurf", reason: "Поддержка локальных моделей" }
      ]
    },
    {
      title: "Мультимодальное программирование",
      description: "Работа с кодом, изображениями и диаграммами",
      icon: "🎨",
      color: "blue",
      platforms: [
        { name: "Kilo Code", reason: "Лидер в мультимодальных возможностях" },
        { name: "Claude Artifacts", reason: "Интерактивные компоненты с визуализацией" },
        { name: "v0 by Vercel", reason: "Генерация UI из описаний и макетов" }
      ]
    },
    {
      title: "Быстрое прототипирование",
      description: "Создание MVP и демо-версий за минуты",
      icon: "⚡",
      color: "orange",
      platforms: [
        { name: "Replit Agent", reason: "От идеи до деплоя за минуты" },
        { name: "Claude Artifacts", reason: "Мгновенные интерактивные прототипы" },
        { name: "v0 by Vercel", reason: "Быстрая генерация UI компонентов" }
      ]
    },
    {
      title: "Рефакторинг и улучшение кода",
      description: "Модернизация существующих проектов",
      icon: "🔧",
      color: "indigo",
      platforms: [
        { name: "Windsurf", reason: "Cascade понимает контекст всего проекта" },
        { name: "Aider", reason: "Отличная работа с Git и историей изменений" },
        { name: "Cursor", reason: "Все еще хорош для рефакторинга" }
      ]
    },
    {
      title: "Обучение и изучение кода",
      description: "Изучение новых технологий и паттернов",
      icon: "📚",
      color: "pink",
      platforms: [
        { name: "Claude Artifacts", reason: "Интерактивные примеры и объяснения" },
        { name: "Replit Agent", reason: "Пошаговые объяснения процесса" },
        { name: "GitHub Copilot", reason: "Показывает лучшие практики" }
      ]
    },
    {
      title: "Корпоративная разработка",
      description: "Работа в больших командах с требованиями безопасности",
      icon: "🏢",
      color: "gray",
      platforms: [
        { name: "GitHub Copilot", reason: "Проверенная корпоративная платформа" },
        { name: "Devin", reason: "Для крупных проектов с большим бюджетом" },
        { name: "Aider", reason: "Максимальная приватность данных" }
      ]
    },
    {
      title: "Создание UI/UX",
      description: "Разработка пользовательских интерфейсов",
      icon: "🎭",
      color: "yellow",
      platforms: [
        { name: "v0 by Vercel", reason: "Специализация на React компонентах" },
        { name: "Claude Artifacts", reason: "Красивые интерактивные интерфейсы" },
        { name: "Lovable", reason: "No-code подход к дизайну" }
      ]
    },
    {
      title: "Работа в привычной IDE",
      description: "Добавление AI в VS Code, Cursor или JetBrains",
      icon: "🔌",
      color: "orange",
      platforms: [
        { name: "Continue", reason: "Лучшее бесплатное расширение с открытым кодом" },
        { name: "Kilo Code", reason: "Мультимодальные возможности в VS Code" },
        { name: "Tabnine", reason: "Универсальная совместимость с любой IDE" }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "border-purple-200 bg-purple-50",
      green: "border-green-200 bg-green-50",
      blue: "border-blue-200 bg-blue-50",
      orange: "border-orange-200 bg-orange-50",
      indigo: "border-indigo-200 bg-indigo-50",
      pink: "border-pink-200 bg-pink-50",
      gray: "border-gray-200 bg-gray-50",
      yellow: "border-yellow-200 bg-yellow-50"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getIconBgColor = (color: string) => {
    const colors = {
      purple: "bg-purple-100",
      green: "bg-green-100",
      blue: "bg-blue-100",
      orange: "bg-orange-100",
      indigo: "bg-indigo-100",
      pink: "bg-pink-100",
      gray: "bg-gray-100",
      yellow: "bg-yellow-100"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Выберите платформу под свои задачи</h3>
        <p className="text-gray-600">Актуальные рекомендации на основе анализа рынка сентября 2025</p>
      </div>
      
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
              <h4 className="font-semibold text-sm">Топ рекомендации 2025:</h4>
              {useCase.platforms.map((platform, idx) => (
                <div key={idx} className="bg-white p-3 rounded border shadow-sm">
                  <div className="font-semibold text-sm text-blue-600 flex items-center">
                    {idx === 0 && <span className="mr-1">🥇</span>}
                    {idx === 1 && <span className="mr-1">🥈</span>}
                    {idx === 2 && <span className="mr-1">🥉</span>}
                    {platform.name}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{platform.reason}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Новые тренды использования (2025)</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-bold mb-3 text-purple-600">🤖 Агентная эра</h4>
            <p className="text-sm text-gray-700">
              ИИ больше не просто помогает - он выполняет полные задачи разработки автономно. 
              Windsurf и Devin лидируют в этом направлении.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-bold mb-3 text-green-600">🔒 Приватность важна</h4>
            <p className="text-sm text-gray-700">
              Локальные модели и приватная разработка стали ключевыми требованиями. 
              Aider и Continue набирают популярность.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-bold mb-3 text-blue-600">🎨 Мультимодальность</h4>
            <p className="text-sm text-gray-700">
              Работа с кодом, изображениями и диаграммами в одном инструменте. 
              Kilo Code показывает будущее разработки.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}