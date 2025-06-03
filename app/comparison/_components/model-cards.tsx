"use client"

export function ModelCards() {
  const models = [
    {
      name: "Claude 4 Opus",
      company: "Anthropic",
      release: "Май 2025",
      contextWindow: "200K токенов",
      pricing: "$15 вход / $75 выход",
      strengths: ["Программирование", "Агентные задачи", "Сложное рассуждение"],
      color: "blue"
    },
    {
      name: "ChatGPT o3",
      company: "OpenAI", 
      release: "Апрель 2025",
      contextWindow: "200K токенов",
      pricing: "$10 вход / $40 выход",
      strengths: ["Математика", "Научные задачи", "Инструменты"],
      color: "green"
    },
    {
      name: "Gemini 2.5 Pro",
      company: "Google",
      release: "Май 2025", 
      contextWindow: "1M+ токенов",
      pricing: "$1.25-2.50 вход / $10-15 выход",
      strengths: ["Мультимодальность", "Видео", "Длинный контекст"],
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue': return 'border-blue-200 bg-blue-50'
      case 'green': return 'border-green-200 bg-green-50'
      case 'purple': return 'border-purple-200 bg-purple-50'
      default: return 'border-gray-200 bg-gray-50'
    }
  }

  const getTextColor = (color: string) => {
    switch(color) {
      case 'blue': return 'text-blue-600'
      case 'green': return 'text-green-600'
      case 'purple': return 'text-purple-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {models.map((model, index) => (
        <div key={index} className={`p-6 rounded-lg border-2 ${getColorClasses(model.color)}`}>
          <h3 className={`text-2xl font-bold mb-2 ${getTextColor(model.color)}`}>
            {model.name}
          </h3>
          <p className="text-gray-600 mb-4">{model.company} • {model.release}</p>
          
          <div className="space-y-3">
            <div>
              <span className="font-semibold">Контекст:</span> {model.contextWindow}
            </div>
            <div>
              <span className="font-semibold">Цена:</span> {model.pricing}
            </div>
            <div>
              <span className="font-semibold">Сильные стороны:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {model.strengths.map((strength, idx) => (
                  <span key={idx} className={`px-2 py-1 text-xs rounded ${getTextColor(model.color)} bg-white`}>
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 