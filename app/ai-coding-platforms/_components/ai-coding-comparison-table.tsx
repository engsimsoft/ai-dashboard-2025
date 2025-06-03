"use client"

export function AICodingComparisonTable() {
  const platforms = [
    {
      name: "Cursor",
      type: "IDE",
      pricing: "$20/мес",
      codeGeneration: "9/10",
      agentCapabilities: "8/10", 
      collaboration: "7/10",
      deployment: "6/10",
      learningCurve: "Средняя",
      languages: "Все",
      bestFor: "Рефакторинг больших проектов",
      company: "Anysphere"
    },
    {
      name: "Replit Agent",
      type: "Облачная IDE",
      pricing: "$25/мес",
      codeGeneration: "8/10",
      agentCapabilities: "10/10",
      collaboration: "10/10", 
      deployment: "10/10",
      learningCurve: "Легкая",
      languages: "50+",
      bestFor: "Быстрое прототипирование",
      company: "Replit"
    },
    {
      name: "Bolt.new",
      type: "Веб-платформа",
      pricing: "Freemium",
      codeGeneration: "8/10",
      agentCapabilities: "7/10",
      collaboration: "6/10",
      deployment: "8/10", 
      learningCurve: "Легкая",
      languages: "JS/TS/React",
      bestFor: "Веб-приложения",
      company: "StackBlitz"
    },
    {
      name: "Windsurf",
      type: "IDE",
      pricing: "$15/мес",
      codeGeneration: "8/10",
      agentCapabilities: "9/10",
      collaboration: "7/10",
      deployment: "7/10",
      learningCurve: "Средняя", 
      languages: "Все",
      bestFor: "Агентная разработка",
      company: "Codeium"
    },
    {
      name: "Lovable",
      type: "No-code",
      pricing: "$49/мес",
      codeGeneration: "7/10",
      agentCapabilities: "9/10",
      collaboration: "8/10",
      deployment: "9/10",
      learningCurve: "Очень легкая",
      languages: "Визуальный",
      bestFor: "MVP без кода",
      company: "Lovable"
    },
    {
      name: "v0 by Vercel",
      type: "UI генератор",
      pricing: "$20/мес",
      codeGeneration: "9/10",
      agentCapabilities: "6/10",
      collaboration: "7/10",
      deployment: "8/10",
      learningCurve: "Легкая",
      languages: "React/Next.js",
      bestFor: "UI компоненты",
      company: "Vercel"
    },
    {
      name: "GitHub Copilot",
      type: "ИИ-ассистент",
      pricing: "$10/мес",
      codeGeneration: "8/10",
      agentCapabilities: "5/10",
      collaboration: "9/10",
      deployment: "5/10",
      learningCurve: "Легкая",
      languages: "Все",
      bestFor: "Автодополнение кода",
      company: "GitHub/Microsoft"
    },
    {
      name: "Amazon Q",
      type: "Корпоративный",
      pricing: "$19/мес",
      codeGeneration: "7/10",
      agentCapabilities: "7/10",
      collaboration: "9/10",
      deployment: "9/10",
      learningCurve: "Сложная",
      languages: "Все",
      bestFor: "Корпоративная разработка",
      company: "Amazon"
    }
  ]

  const getRatingColor = (rating: string) => {
    const score = parseInt(rating.split('/')[0])
    if (score >= 9) return "text-green-600 font-bold"
    if (score >= 7) return "text-yellow-600 font-semibold"
    return "text-red-600"
  }

  const getLearningCurveColor = (curve: string) => {
    if (curve === "Очень легкая" || curve === "Легкая") return "text-green-600"
    if (curve === "Средняя") return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <th className="border p-3 text-left font-semibold">Платформа</th>
            <th className="border p-3 text-center font-semibold">Тип</th>
            <th className="border p-3 text-center font-semibold">Цена</th>
            <th className="border p-3 text-center font-semibold">Генерация кода</th>
            <th className="border p-3 text-center font-semibold">Агентные возможности</th>
            <th className="border p-3 text-center font-semibold">Совместная работа</th>
            <th className="border p-3 text-center font-semibold">Деплой</th>
            <th className="border p-3 text-center font-semibold">Кривая обучения</th>
            <th className="border p-3 text-center font-semibold">Языки</th>
            <th className="border p-3 text-center font-semibold">Лучше всего для</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((platform, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
              <td className="border p-3">
                <div>
                  <div className="font-bold text-lg">{platform.name}</div>
                  <div className="text-sm text-gray-600">{platform.company}</div>
                </div>
              </td>
              <td className="border p-3 text-center">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {platform.type}
                </span>
              </td>
              <td className="border p-3 text-center font-semibold">{platform.pricing}</td>
              <td className={`border p-3 text-center ${getRatingColor(platform.codeGeneration)}`}>
                {platform.codeGeneration}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.agentCapabilities)}`}>
                {platform.agentCapabilities}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.collaboration)}`}>
                {platform.collaboration}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.deployment)}`}>
                {platform.deployment}
              </td>
              <td className={`border p-3 text-center ${getLearningCurveColor(platform.learningCurve)}`}>
                {platform.learningCurve}
              </td>
              <td className="border p-3 text-center text-sm">{platform.languages}</td>
              <td className="border p-3 text-center text-sm">{platform.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Легенда оценок:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-green-600 font-bold">9-10/10:</span> Отличный уровень
          </div>
          <div>
            <span className="text-yellow-600 font-semibold">7-8/10:</span> Хороший уровень
          </div>
          <div>
            <span className="text-red-600">5-6/10:</span> Базовый уровень
          </div>
        </div>
      </div>
    </div>
  )
} 