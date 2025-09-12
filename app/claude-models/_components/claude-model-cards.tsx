"use client"

export function ClaudeModelCards() {
  const models = [
    {
      name: "Claude 4 Opus",
      version: "Май 2025",
      description: "Самая мощная модель для сложных задач",
      features: [
        "Лучший в программировании (SWE-bench: 72.5%)",
        "Extended thinking с tool use",
        "Memory capabilities",
        "32K токенов вывода"
      ],
      pricing: "$15/$75 за млн токенов",
      color: "blue",
      badge: "Флагман"
    },
    {
      name: "Claude 4 Sonnet", 
      version: "Май 2025",
      description: "Сбалансированная производительность и стоимость",
      features: [
        "Отличное кодирование (SWE-bench: 72.7%)",
        "Быстрые ответы",
        "Parallel tool execution",
        "64K токенов вывода"
      ],
      pricing: "$3/$15 за млн токенов",
      color: "green",
      badge: "Рекомендуется"
    },
    {
      name: "Claude 3.7 Sonnet",
      version: "Февраль 2025", 
      description: "Гибридная модель с расширенным мышлением",
      features: [
        "Extended thinking mode",
        "Пошаговое рассуждение",
        "Высокая точность в математике",
        "128K токенов вывода"
      ],
      pricing: "$3/$15 + токены мышления",
      color: "purple",
      badge: "Инновация"
    },
    {
      name: "Claude 3.5 Haiku",
      version: "Ноябрь 2024",
      description: "Быстрая и экономичная модель",
      features: [
        "Высокая скорость ответов",
        "Отличное соотношение цена/качество", 
        "Хорошее кодирование (HumanEval: 88.1%)",
        "8K токенов вывода"
      ],
      pricing: "$0.80/$4.00 за млн токенов",
      color: "orange",
      badge: "Экономичная"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50",
      green: "border-green-200 bg-green-50", 
      purple: "border-purple-200 bg-purple-50",
      orange: "border-orange-200 bg-orange-50"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getBadgeClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600 text-white",
      green: "bg-green-600 text-white",
      purple: "bg-purple-600 text-white", 
      orange: "bg-orange-600 text-white"
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
          
          <p className="text-sm text-gray-600 mb-2">{model.version}</p>
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
            <p className="text-sm font-semibold text-gray-800">
              Цена: {model.pricing}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
} 