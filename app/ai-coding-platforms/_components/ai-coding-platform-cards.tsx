"use client"

export function AICodingPlatformCards() {
  const platforms = [
    {
      name: "Windsurf",
      category: "IDE с ИИ",
      description: "Новый лидер рынка от Codeium с революционной технологией Cascade",
      features: [
        "Cascade - продвинутый агентный режим",
        "Поддержка локальных и облачных моделей",
        "Мультифайловое редактирование",
        "Интеграция с Claude 3.5 Sonnet, GPT-4o"
      ],
      pricing: "$19/месяц Pro",
      color: "purple",
      badge: "🏆 Лидер 2025",
      strengths: "Агентные возможности, локальные модели, производительность",
      weaknesses: "Относительно новая платформа",
      easeOfUse: "Средняя",
      requiresTerminal: "Иногда",
      canBuildFullApp: true
    },
    {
      name: "Replit Agent",
      category: "Облачная IDE",
      description: "Улучшенный ИИ-агент для создания полных приложений",
      features: [
        "Создание приложений с нуля",
        "Автоматический деплой",
        "Совместная работа в реальном времени",
        "Поддержка 50+ языков программирования"
      ],
      pricing: "$30/месяц Core",
      color: "indigo",
      badge: "☁️ Облачный лидер",
      strengths: "Агентные возможности, деплой, совместная работа",
      weaknesses: "Высокая цена, ограничения облачной среды",
      easeOfUse: "Очень легкая",
      requiresTerminal: "Нет",
      canBuildFullApp: true
    },
    {
      name: "v0 by Vercel",
      category: "UI генератор",
      description: "Специализированный инструмент для создания React компонентов",
      features: [
        "Генерация React компонентов",
        "Shadcn/ui интеграция",
        "Tailwind CSS поддержка",
        "Итеративное улучшение"
      ],
      pricing: "$20/месяц Pro",
      color: "pink",
      badge: "🎨 UI-фокус",
      strengths: "Качественный UI, React экосистема, дизайн",
      weaknesses: "Только фронтенд компоненты, узкая специализация",
      easeOfUse: "Очень легкая",
      requiresTerminal: "Нет",
      canBuildFullApp: false
    },
    {
      name: "Lovable",
      category: "No-code ИИ",
      description: "ИИ-платформа для создания приложений без кода с фокусом на дизайн",
      features: [
        "Создание приложений из описания",
        "Автоматическая генерация UI/UX",
        "Интеграция с базами данных",
        "Мобильная адаптация"
      ],
      pricing: "$49/месяц Starter",
      color: "pink",
      badge: "🎭 No-code UI",
      strengths: "Простота, красивый дизайн, скорость",
      weaknesses: "Ограниченная кастомизация, только UI/UX",
      easeOfUse: "Очень легкая",
      requiresTerminal: "Нет",
      canBuildFullApp: false
    },
    {
      name: "GitHub Copilot",
      category: "ИИ-ассистент",
      description: "Проверенный временем ИИ-помощник для программирования",
      features: [
        "Автодополнение кода",
        "Поддержка всех языков",
        "Интеграция с VS Code",
        "Чат-режим и объяснения"
      ],
      pricing: "$10/месяц Individual",
      color: "indigo",
      badge: "🏢 Корпоративный",
      strengths: "Надежность, интеграция, корпоративные функции",
      weaknesses: "Ограниченные агентные возможности, неудобен для веб-разработки",
      easeOfUse: "Средняя",
      requiresTerminal: "Да",
      canBuildFullApp: true
    }
  ]

  const aiExtensions = [
    {
      name: "Continue",
      category: "VS Code расширение",
      description: "Лучшее бесплатное AI-расширение с открытым исходным кодом",
      features: [
        "Поддержка множества моделей",
        "Настраиваемые провайдеры ИИ",
        "Локальные и облачные модели",
        "Интеграция с VS Code, JetBrains"
      ],
      pricing: "Бесплатно",
      color: "green",
      badge: "🆓 Open Source",
      strengths: "Бесплатно, настраиваемость, приватность",
      weaknesses: "Требует настройки, базовый UI",
      easeOfUse: "Средняя",
      requiresTerminal: "Иногда",
      canBuildFullApp: true,
      compatibility: "VS Code, Cursor, JetBrains"
    },
    {
      name: "Cline",
      category: "VS Code расширение",
      description: "Мощное AI-расширение для автономной разработки",
      features: [
        "Агентные возможности",
        "Работа с файловой системой",
        "Выполнение команд терминала",
        "Интеграция с Claude, GPT-4"
      ],
      pricing: "Бесплатно",
      color: "blue",
      badge: "🤖 Агентное",
      strengths: "Агентные возможности, бесплатно, мощный функционал",
      weaknesses: "Требует технических знаний",
      easeOfUse: "Сложная",
      requiresTerminal: "Да",
      canBuildFullApp: true,
      compatibility: "VS Code"
    },
    {
      name: "Kilo Code",
      category: "VS Code расширение",
      description: "Мультимодальное расширение с системой режимов",
      features: [
        "Система режимов (Architect, Code, Debug)",
        "Мультимодальные возможности",
        "Работа с изображениями и диаграммами",
        "Интеграция с Claude 3.5 Sonnet"
      ],
      pricing: "$25/месяц Pro",
      color: "purple",
      badge: "🎨 Мультимодальное",
      strengths: "Мультимодальность, качество, планирование",
      weaknesses: "Платное, новое на рынке",
      easeOfUse: "Средняя",
      requiresTerminal: "Иногда",
      canBuildFullApp: true,
      compatibility: "VS Code, Cursor"
    },
    {
      name: "Tabnine",
      category: "Универсальное расширение",
      description: "AI-автодополнение с фокусом на приватность",
      features: [
        "Локальные модели",
        "Поддержка всех языков",
        "Корпоративная безопасность",
        "Персонализированные предложения"
      ],
      pricing: "$12/месяц Pro",
      color: "orange",
      badge: "🔒 Приватное",
      strengths: "Приватность, универсальность, корпоративные функции",
      weaknesses: "Ограниченные агентные возможности",
      easeOfUse: "Легкая",
      requiresTerminal: "Нет",
      canBuildFullApp: true,
      compatibility: "VS Code, JetBrains, Vim, Emacs"
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

  const getEaseColor = (ease: string) => {
    if (ease === "Очень легкая") return "text-green-600 font-bold"
    if (ease === "Легкая") return "text-green-600"
    if (ease === "Средняя") return "text-yellow-600"
    return "text-red-600"
  }

  const getTerminalColor = (terminal: string) => {
    if (terminal === "Нет") return "text-green-600 font-bold"
    if (terminal === "Иногда") return "text-yellow-600"
    return "text-red-600"
  }

  const renderPlatformCard = (platform: any, index: number) => (
    <div
      key={index}
      className={`border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${getColorClasses(platform.color)}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold flex items-center">
            {platform.name}
            {platform.canBuildFullApp && <span className="ml-2 text-green-500" title="Может создать полное приложение">🔧</span>}
            {!platform.canBuildFullApp && <span className="ml-2 text-blue-500" title="Специализируется на UI/UX">🎨</span>}
          </h3>
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
          {platform.features.map((feature: string, idx: number) => (
            <li key={idx} className="text-gray-600">• {feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span><strong>Простота использования:</strong></span>
          <span className={getEaseColor(platform.easeOfUse)}>{platform.easeOfUse}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span><strong>Требует терминал:</strong></span>
          <span className={getTerminalColor(platform.requiresTerminal)}>{platform.requiresTerminal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span><strong>Полное приложение:</strong></span>
          <span className={platform.canBuildFullApp ? "text-green-600 font-bold" : "text-red-600"}>
            {platform.canBuildFullApp ? "Да" : "Только UI"}
          </span>
        </div>
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
  )

  return (
    <div className="space-y-12">
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-green-600">🔧 Full-Stack платформы</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Платформы для создания полных рабочих приложений - от фронтенда до бэкенда и деплоя
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.filter(p => p.canBuildFullApp).map((platform, index) => renderPlatformCard(platform, index))}
        </div>
      </div>

      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">🎨 UI/UX специализированные платформы</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Платформы, специализирующиеся на создании пользовательских интерфейсов и дизайна
          </p>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Важно:</strong> Эти платформы создают только UI компоненты, для полного приложения нужны дополнительные инструменты
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.filter(p => !p.canBuildFullApp).map((platform, index) => renderPlatformCard(platform, index))}
        </div>
      </div>

      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-orange-600">🔌 AI-расширения для IDE</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Расширения для VS Code, Cursor и других IDE - работайте в привычной среде с AI-возможностями
          </p>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400 max-w-2xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>💡 Преимущество:</strong> Используйте привычную IDE с добавлением AI-возможностей
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiExtensions.map((extension, index) => (
            <div
              key={index}
              className={`border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${getColorClasses(extension.color)}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center">
                    {extension.name}
                    <span className="ml-2 text-orange-500" title="Расширение для IDE">🔌</span>
                  </h3>
                  <p className="text-sm text-gray-600">{extension.category}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getBadgeColor(extension.color)}`}>
                  {extension.badge}
                </span>
              </div>

              <p className="text-gray-700 mb-4 text-sm">{extension.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Ключевые возможности:</h4>
                <ul className="text-xs space-y-1">
                  {extension.features.map((feature: string, idx: number) => (
                    <li key={idx} className="text-gray-600">• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span><strong>Совместимость:</strong></span>
                  <span className="text-blue-600 font-semibold text-xs">{extension.compatibility}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span><strong>Простота использования:</strong></span>
                  <span className={getEaseColor(extension.easeOfUse)}>{extension.easeOfUse}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span><strong>Требует терминал:</strong></span>
                  <span className={getTerminalColor(extension.requiresTerminal)}>{extension.requiresTerminal}</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="text-sm">
                  <strong>Сильные стороны:</strong> <span className="text-green-600">{extension.strengths}</span>
                </div>
                <div className="text-sm mt-1">
                  <strong>Слабые стороны:</strong> <span className="text-red-600">{extension.weaknesses}</span>
                </div>
              </div>

              <div className="text-lg font-bold text-center py-2 bg-white rounded border">
                {extension.pricing}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-center">Легенда символов и критериев</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Символы:</h4>
            <ul className="space-y-2 text-sm">
              <li>🔧 - Может создать полное рабочее приложение</li>
              <li>🎨 - Специализируется только на UI/UX</li>
              <li>🔌 - Расширение для IDE</li>
              <li>🏆 - Лидер рынка 2025</li>
              <li>🆓 - Бесплатное решение</li>
              <li>🤖 - Агентные возможности</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Критерии простоты:</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-green-600 font-bold">Очень легкая</span> - Подходит для новичков</li>
              <li><span className="text-green-600">Легкая</span> - Минимальные технические знания</li>
              <li><span className="text-yellow-600">Средняя</span> - Нужен опыт программирования</li>
              <li><span className="text-red-600">Сложная</span> - Требует глубоких технических знаний</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}