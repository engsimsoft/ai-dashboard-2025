"use client"

export function CodingModelCards() {
  const models = [
    {
      name: "Claude 3.5 Sonnet (новая версия)",
      company: "Anthropic",
      releaseDate: "Июнь 2025",
      description: "Лидирующая модель для программирования с Computer Use, Artifacts и превосходным reasoning",
      features: [
        "200K токенов контекста",
        "88.0% на HumanEval",
        "Computer Use для автономного кодинга",
        "Artifacts - интерактивная генерация",
        "Превосходный reasoning для архитектуры"
      ],
      pricing: "$3/$15 за млн токенов",
      color: "blue",
      badge: "🏆 Лидер",
      rating: 9.7
    },
    {
      name: "GPT-4o",
      company: "OpenAI",
      releaseDate: "Май 2024",
      description: "Универсальная модель с мультимодальностью и глубокой интеграцией в экосистему разработки",
      features: [
        "128K токенов контекста",
        "86.6% на HumanEval",
        "Мультимодальный ввод/вывод",
        "GitHub Copilot интеграция",
        "Быстрая скорость ответа"
      ],
      pricing: "$5/$15 за млн токенов",
      color: "green",
      badge: "Экосистема",
      rating: 9.5
    },
    {
      name: "DeepSeek-Coder V2.5",
      company: "DeepSeek",
      releaseDate: "Сентябрь 2025",
      description: "Лучшая open source модель с высокой производительностью для локального развертывания",
      features: [
        "16K/32K токенов контекста",
        "87.5% на HumanEval",
        "Локальное развертывание",
        "Оптимизация под GPU",
        "Полный код-completion"
      ],
      pricing: "Бесплатно (Open Source)",
      color: "orange",
      badge: "🚀 Open Source",
      rating: 9.4
    },
    {
      name: "Gemini 1.5 Pro",
      company: "Google",
      releaseDate: "Февраль 2024",
      description: "Модель с огромным контекстным окном для обработки больших кодовых баз",
      features: [
        "1M токенов контекста",
        "84.1% на HumanEval",
        "Поддержка больших проектов",
        "Мультиязычное программирование",
        "Google Cloud интеграция"
      ],
      pricing: "$7/$21 за млн токенов",
      color: "purple",
      badge: "Мега-контекст",
      rating: 9.2
    },
    {
      name: "Codestral",
      company: "Mistral AI",
      releaseDate: "Май 2024",
      description: "Специализированная модель для быстрой генерации кода с низкой латентностью",
      features: [
        "32K токенов контекста",
        "81.1% на HumanEval",
        "Ультра-быстрый отклик",
        "IDE интеграции",
        "Streaming completion"
      ],
      pricing: "$1/$3 за млн токенов",
      color: "red",
      badge: "⚡ Скорость",
      rating: 9.0
    },
    {
      name: "Code Llama 70B",
      company: "Meta",
      releaseDate: "Август 2023",
      description: "Мощная open source модель для enterprise развертывания и кастомизации",
      features: [
        "100K токенов контекста",
        "82.0% на HumanEval",
        "Локальное развертывание",
        "Fine-tuning friendly",
        "Enterprise безопасность"
      ],
      pricing: "Бесплатно (Open Source)",
      color: "indigo",
      badge: "Enterprise",
      rating: 8.9
    },
    {
      name: "Qwen2.5-Coder 72B",
      company: "Alibaba",
      releaseDate: "Сентябрь 2024",
      description: "Сильная модель с акцентом на азиатские языки программирования и мобильную разработку",
      features: [
        "32K токенов контекста",
        "85.2% на HumanEval",
        "Поддержка редких языков",
        "Мобильная разработка",
        "Кросс-платформенность"
      ],
      pricing: "$2/$6 за млн токенов",
      color: "pink",
      badge: "🌏 Глобальная",
      rating: 8.8
    },
    {
      name: "Grok-2",
      company: "xAI",
      releaseDate: "Август 2024",
      description: "Инновационная модель с интеграцией реального времени для трендов в разработке",
      features: [
        "131K токенов контекста",
        "79.8% на HumanEval",
        "Реал-тайм данные из X",
        "Анализ трендов разработки",
        "Инновационные подходы"
      ],
      pricing: "$5/$15 за млн токенов",
      color: "cyan",
      badge: "🔮 Инновации",
      rating: 8.6
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50",
      green: "border-green-200 bg-green-50",
      purple: "border-purple-200 bg-purple-50",
      orange: "border-orange-200 bg-orange-50",
      red: "border-red-200 bg-red-50",
      indigo: "border-indigo-200 bg-indigo-50",
      pink: "border-pink-200 bg-pink-50",
      cyan: "border-cyan-200 bg-cyan-50"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getBadgeClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600 text-white",
      green: "bg-green-600 text-white",
      purple: "bg-purple-600 text-white",
      orange: "bg-orange-600 text-white",
      red: "bg-red-600 text-white",
      indigo: "bg-indigo-600 text-white",
      pink: "bg-pink-600 text-white",
      cyan: "bg-cyan-600 text-white"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {models.map((model, index) => (
        <div
          key={index}
          className={`border-2 rounded-lg p-6 ${getColorClasses(model.color)} hover:shadow-lg transition-shadow`}
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold">{model.name}</h3>
            <span className={`px-2 py-1 rounded text-xs font-semibold ${getBadgeClasses(model.color)}`}>
              {model.badge}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-1">{model.company}</p>
          <p className="text-sm text-gray-600 mb-2">{model.releaseDate}</p>
          <p className="text-gray-700 mb-4">{model.description}</p>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Ключевые особенности:</h4>
            <ul className="text-sm space-y-1">
              {model.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold text-gray-800">
                Цена: {model.pricing}
              </p>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-1">Рейтинг:</span>
                <span className="text-sm font-bold text-yellow-600">{model.rating}/10</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}