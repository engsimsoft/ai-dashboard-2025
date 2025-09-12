"use client"

export function AICodingComparisonTable() {
  const platforms = [
    {
      name: "Windsurf",
      type: "IDE",
      pricing: "$19/мес",
      codeGeneration: "10/10",
      agentCapabilities: "10/10",
      collaboration: "8/10",
      deployment: "8/10",
      privacy: "9/10",
      multimodality: "8/10",
      easeOfUse: "Средняя",
      requiresTerminal: "Иногда",
      canBuildFullApp: "Да",
      languages: "Все",
      bestFor: "Агентная разработка",
      company: "Codeium"
    },
    {
      name: "Replit Agent",
      type: "Облачная IDE",
      pricing: "$30/мес",
      codeGeneration: "8/10",
      agentCapabilities: "10/10",
      collaboration: "10/10",
      deployment: "10/10",
      privacy: "6/10",
      multimodality: "7/10",
      easeOfUse: "Очень легкая",
      requiresTerminal: "Нет",
      canBuildFullApp: "Да",
      languages: "50+",
      bestFor: "Быстрое прототипирование",
      company: "Replit"
    },
    {
      name: "v0 by Vercel",
      type: "UI генератор",
      pricing: "$20/мес",
      codeGeneration: "9/10",
      agentCapabilities: "6/10",
      collaboration: "7/10",
      deployment: "8/10",
      privacy: "7/10",
      multimodality: "8/10",
      easeOfUse: "Очень легкая",
      requiresTerminal: "Нет",
      canBuildFullApp: "Только UI",
      languages: "React/Next.js",
      bestFor: "UI компоненты",
      company: "Vercel"
    },
    {
      name: "Lovable",
      type: "No-code",
      pricing: "$49/мес",
      codeGeneration: "7/10",
      agentCapabilities: "9/10",
      collaboration: "8/10",
      deployment: "9/10",
      privacy: "7/10",
      multimodality: "9/10",
      easeOfUse: "Очень легкая",
      requiresTerminal: "Нет",
      canBuildFullApp: "Только UI",
      languages: "Визуальный",
      bestFor: "MVP без кода",
      company: "Lovable"
    },
    {
      name: "GitHub Copilot",
      type: "ИИ-ассистент",
      pricing: "$10/мес",
      codeGeneration: "8/10",
      agentCapabilities: "5/10",
      collaboration: "9/10",
      deployment: "5/10",
      privacy: "7/10",
      multimodality: "6/10",
      easeOfUse: "Средняя",
      requiresTerminal: "Да",
      canBuildFullApp: "Да",
      languages: "Все",
      bestFor: "Автодополнение кода",
      company: "GitHub/Microsoft"
    }
  ]

  const getRatingColor = (rating: string) => {
    const score = parseInt(rating.split('/')[0])
    if (score >= 9) return "text-green-600 font-bold"
    if (score >= 7) return "text-yellow-600 font-semibold"
    return "text-red-600"
  }

  const getLearningCurveColor = (ease: string) => {
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

  const getAppTypeColor = (canBuild: string) => {
    if (canBuild === "Да") return "text-green-600 font-bold"
    if (canBuild === "Только UI") return "text-blue-600"
    return "text-red-600"
  }

  const getPricingColor = (pricing: string) => {
    if (pricing === "Бесплатно") return "text-green-600 font-bold"
    if (pricing.includes("$10") || pricing.includes("$15") || pricing.includes("$19")) return "text-yellow-600"
    if (pricing.includes("$500")) return "text-red-600 font-bold"
    return "text-gray-700"
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <th className="border p-3 text-left font-semibold">Платформа</th>
            <th className="border p-3 text-center font-semibold">Тип</th>
            <th className="border p-3 text-center font-semibold">Цена</th>
            <th className="border p-3 text-center font-semibold">Генерация кода</th>
            <th className="border p-3 text-center font-semibold">Агентные возможности</th>
            <th className="border p-3 text-center font-semibold">Приватность</th>
            <th className="border p-3 text-center font-semibold">Мультимодальность</th>
            <th className="border p-3 text-center font-semibold">Совместная работа</th>
            <th className="border p-3 text-center font-semibold">Деплой</th>
            <th className="border p-3 text-center font-semibold">Простота использования</th>
            <th className="border p-3 text-center font-semibold">Требует терминал</th>
            <th className="border p-3 text-center font-semibold">Полное приложение</th>
            <th className="border p-3 text-center font-semibold">Языки</th>
            <th className="border p-3 text-center font-semibold">Лучше всего для</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((platform, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
              <td className="border p-3">
                <div>
                  <div className="font-bold text-lg flex items-center">
                    {platform.name}
                    {index === 0 && <span className="ml-2 text-yellow-500">🏆</span>}
                    {index === 1 && <span className="ml-2 text-blue-500">☁️</span>}
                  </div>
                  <div className="text-sm text-gray-600">{platform.company}</div>
                </div>
              </td>
              <td className="border p-3 text-center">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {platform.type}
                </span>
              </td>
              <td className={`border p-3 text-center font-semibold ${getPricingColor(platform.pricing)}`}>
                {platform.pricing}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.codeGeneration)}`}>
                {platform.codeGeneration}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.agentCapabilities)}`}>
                {platform.agentCapabilities}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.privacy)}`}>
                {platform.privacy}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.multimodality)}`}>
                {platform.multimodality}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.collaboration)}`}>
                {platform.collaboration}
              </td>
              <td className={`border p-3 text-center ${getRatingColor(platform.deployment)}`}>
                {platform.deployment}
              </td>
              <td className={`border p-3 text-center ${getLearningCurveColor(platform.easeOfUse)}`}>
                {platform.easeOfUse}
              </td>
              <td className={`border p-3 text-center ${getTerminalColor(platform.requiresTerminal)}`}>
                {platform.requiresTerminal}
              </td>
              <td className={`border p-3 text-center ${getAppTypeColor(platform.canBuildFullApp)}`}>
                {platform.canBuildFullApp}
              </td>
              <td className="border p-3 text-center text-sm">{platform.languages}</td>
              <td className="border p-3 text-center text-sm">{platform.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Легенда оценок и критериев:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Рейтинги:</h4>
            <div className="space-y-1 text-sm">
              <div><span className="text-green-600 font-bold">9-10/10:</span> Отличный уровень</div>
              <div><span className="text-yellow-600 font-semibold">7-8/10:</span> Хороший уровень</div>
              <div><span className="text-red-600">5-6/10:</span> Базовый уровень</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Новые критерии 2025:</h4>
            <div className="space-y-1 text-sm">
              <div><span className="text-green-600 font-bold">Очень легкая</span> - Для новичков</div>
              <div><span className="text-yellow-600">Средняя</span> - Нужен опыт</div>
              <div><span className="text-green-600 font-bold">Нет терминала</span> - Только UI</div>
              <div><span className="text-red-600">Да терминал</span> - Нужны команды</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
          <h4 className="font-semibold text-blue-800 mb-2">Важные изменения (сентябрь 2025):</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>🏆 <strong>Windsurf</strong> - новый абсолютный лидер</li>
            <li>☁️ <strong>Replit Agent</strong> - лучший для новичков</li>
            <li>🎨 <strong>v0, Lovable</strong> - только для UI, не полные приложения</li>
            <li>⚠️ <strong>GitHub Copilot</strong> - неудобен для веб-разработки</li>
          </ul>
        </div>
      </div>
    </div>
  )
}