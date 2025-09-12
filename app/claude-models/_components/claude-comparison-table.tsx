"use client"

export function ClaudeComparisonTable() {
  const models = [
    {
      name: "Claude 4 Opus",
      contextWindow: "200K",
      maxOutput: "32K",
      inputPrice: "$15",
      outputPrice: "$75",
      sweBench: "72.5%",
      humanEval: "N/A",
      math: "N/A",
      speed: "Медленная",
      useCase: "Сложные задачи программирования",
      released: "Май 2025"
    },
    {
      name: "Claude 4 Sonnet", 
      contextWindow: "200K",
      maxOutput: "64K",
      inputPrice: "$3",
      outputPrice: "$15",
      sweBench: "72.7%",
      humanEval: "N/A",
      math: "N/A", 
      speed: "Быстрая",
      useCase: "Общие задачи, бизнес",
      released: "Май 2025"
    },
    {
      name: "Claude 3.7 Sonnet",
      contextWindow: "200K",
      maxOutput: "128K",
      inputPrice: "$3",
      outputPrice: "$15*",
      sweBench: "N/A",
      humanEval: "N/A",
      math: "82.2%",
      speed: "Средняя",
      useCase: "Аналитика, исследования",
      released: "Февраль 2025"
    },
    {
      name: "Claude 3.5 Haiku",
      contextWindow: "200K", 
      maxOutput: "8K",
      inputPrice: "$0.80",
      outputPrice: "$4.00",
      sweBench: "N/A",
      humanEval: "88.1%",
      math: "69.4%",
      speed: "Очень быстрая",
      useCase: "Чат-боты, быстрые запросы",
      released: "Ноябрь 2024"
    },
    {
      name: "Claude 3 Haiku",
      contextWindow: "200K",
      maxOutput: "4K", 
      inputPrice: "$0.25",
      outputPrice: "$1.25",
      sweBench: "N/A",
      humanEval: "N/A",
      math: "N/A",
      speed: "Очень быстрая",
      useCase: "Простые задачи, обучение",
      released: "Март 2024"
    },
    {
      name: "Claude 3 Opus",
      contextWindow: "200K",
      maxOutput: "4K",
      inputPrice: "$15", 
      outputPrice: "$75",
      sweBench: "N/A",
      humanEval: "N/A",
      math: "N/A",
      speed: "Медленная",
      useCase: "Творческие задачи",
      released: "Март 2024"
    }
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Модель</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Контекст</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Макс. вывод</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Цена ввод</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Цена вывод</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">SWE-bench</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">HumanEval</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">MATH</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Скорость</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Лучше всего для</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Релиз</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border border-gray-300 px-4 py-3 font-semibold">{model.name}</td>
              <td className="border border-gray-300 px-4 py-3">{model.contextWindow}</td>
              <td className="border border-gray-300 px-4 py-3">{model.maxOutput}</td>
              <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">{model.inputPrice}</td>
              <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">{model.outputPrice}</td>
              <td className="border border-gray-300 px-4 py-3">
                {model.sweBench !== "N/A" ? (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                    {model.sweBench}
                  </span>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {model.humanEval !== "N/A" ? (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                    {model.humanEval}
                  </span>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {model.math !== "N/A" ? (
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-semibold">
                    {model.math}
                  </span>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <span className={`px-2 py-1 rounded text-sm font-semibold ${
                  model.speed === "Очень быстрая" ? "bg-green-100 text-green-800" :
                  model.speed === "Быстрая" ? "bg-blue-100 text-blue-800" :
                  model.speed === "Средняя" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {model.speed}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{model.useCase}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">{model.released}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>* Цены указаны за миллион токенов. Claude 3.7 Sonnet: + дополнительная плата за токены мышления</p>
        <p>SWE-bench: Тест программирования | HumanEval: Тест кодирования | MATH: Математические задачи</p>
      </div>
    </div>
  )
} 