"use client"

export function ClaudePricingChart() {
  const models = [
    { name: "Claude 4 Opus", input: 15, output: 75, color: "blue" },
    { name: "Claude 4 Sonnet", input: 3, output: 15, color: "green" },
    { name: "Claude 3.7 Sonnet", input: 3, output: 15, color: "purple" },
    { name: "Claude 3.5 Haiku", input: 0.8, output: 4, color: "orange" },
    { name: "Claude 3 Haiku", input: 0.25, output: 1.25, color: "red" },
    { name: "Claude 3 Opus", input: 15, output: 75, color: "indigo" }
  ]

  const maxPrice = Math.max(...models.map(m => Math.max(m.input, m.output)))

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500", 
      red: "bg-red-500",
      indigo: "bg-indigo-500"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getColorClassesLight = (color: string) => {
    const colors = {
      blue: "bg-blue-200",
      green: "bg-green-200", 
      purple: "bg-purple-200",
      orange: "bg-orange-200",
      red: "bg-red-200",
      indigo: "bg-indigo-200"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-6 text-center">Сравнение цен за миллион токенов (USD)</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Pricing Chart */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center">Цена за ввод (Input)</h4>
          <div className="space-y-3">
            {models.map((model, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 text-sm font-medium text-right mr-3">
                  {model.name}
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                  <div 
                    className={`h-6 rounded-full ${getColorClassesLight(model.color)} flex items-center justify-end pr-2`}
                    style={{ width: `${(model.input / maxPrice) * 100}%` }}
                  >
                    <span className="text-xs font-semibold text-gray-700">
                      ${model.input}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Output Pricing Chart */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center">Цена за вывод (Output)</h4>
          <div className="space-y-3">
            {models.map((model, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 text-sm font-medium text-right mr-3">
                  {model.name}
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                  <div 
                    className={`h-6 rounded-full ${getColorClasses(model.color)} flex items-center justify-end pr-2`}
                    style={{ width: `${(model.output / maxPrice) * 100}%` }}
                  >
                    <span className="text-xs font-semibold text-white">
                      ${model.output}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Comparison Table */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4 text-center">Примеры стоимости использования</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Модель</th>
                <th className="border border-gray-300 px-3 py-2 text-center">10K токенов ввод</th>
                <th className="border border-gray-300 px-3 py-2 text-center">1K токенов вывод</th>
                <th className="border border-gray-300 px-3 py-2 text-center">Общая стоимость</th>
                <th className="border border-gray-300 px-3 py-2 text-center">Экономия vs Opus</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, index) => {
                const inputCost = (model.input * 10) / 1000 // 10K tokens
                const outputCost = (model.output * 1) / 1000 // 1K tokens  
                const totalCost = inputCost + outputCost
                const opusCost = (15 * 10) / 1000 + (75 * 1) / 1000
                const savings = ((opusCost - totalCost) / opusCost * 100).toFixed(0)
                
                return (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border border-gray-300 px-3 py-2 font-medium">{model.name}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">${inputCost.toFixed(3)}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">${outputCost.toFixed(3)}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center font-semibold">${totalCost.toFixed(3)}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {model.name.includes("Opus") ? (
                        <span className="text-gray-500">-</span>
                      ) : (
                        <span className="text-green-600 font-semibold">{savings}%</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h5 className="font-semibold mb-2">💡 Советы по экономии:</h5>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• Используйте <strong>Claude 3.5 Haiku</strong> для простых задач и чат-ботов</li>
          <li>• <strong>Claude 4 Sonnet</strong> оптимален для большинства бизнес-задач</li>
          <li>• <strong>Prompt caching</strong> может снизить стоимость до 90%</li>
          <li>• <strong>Message Batches API</strong> дает скидку 50%</li>
        </ul>
      </div>
    </div>
  )
} 