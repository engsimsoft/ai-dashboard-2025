"use client"

export function ComparisonTable() {
  const data = [
    {
      category: "Программирование (SWE-bench)",
      claude4: "72.5%",
      chatgpt: "69.1%", 
      gemini: "63.8%",
      winner: "claude4"
    },
    {
      category: "Терминальное программирование",
      claude4: "43.2%",
      chatgpt: "30.2%",
      gemini: "25.3%", 
      winner: "claude4"
    },
    {
      category: "Научное рассуждение (GPQA)",
      claude4: "83.3%",
      chatgpt: "83.3%",
      gemini: "83.0%",
      winner: "tie"
    },
    {
      category: "Математика (AIME 2025)",
      claude4: "90.0%",
      chatgpt: "88.9%",
      gemini: "83.0%",
      winner: "claude4"
    },
    {
      category: "Визуальное рассуждение (MMMU)",
      claude4: "76.5%",
      chatgpt: "82.9%",
      gemini: "79.6%",
      winner: "chatgpt"
    },
    {
      category: "Работа с видео (VideoMME)",
      claude4: "Н/Д",
      chatgpt: "Н/Д",
      gemini: "84.8%",
      winner: "gemini"
    },
    {
      category: "Многоязычность (MMLU)",
      claude4: "88.8%",
      chatgpt: "88.7%",
      gemini: "88.6%",
      winner: "claude4"
    },
    {
      category: "Использование инструментов",
      claude4: "81.4%",
      chatgpt: "70.4%",
      gemini: "Н/Д",
      winner: "claude4"
    }
  ]

  const getCellClass = (value: string, winner: string, model: string) => {
    if (value === "Н/Д") return "text-gray-400"
    if (winner === model) return "bg-green-100 text-green-800 font-bold"
    if (winner === "tie") return "bg-yellow-100 text-yellow-800 font-semibold"
    return ""
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left font-bold">Категория</th>
            <th className="border border-gray-300 p-3 text-center font-bold text-blue-600">Claude 4</th>
            <th className="border border-gray-300 p-3 text-center font-bold text-green-600">ChatGPT o3</th>
            <th className="border border-gray-300 p-3 text-center font-bold text-purple-600">Gemini 2.5 Pro</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3 font-medium">{row.category}</td>
              <td className={`border border-gray-300 p-3 text-center ${getCellClass(row.claude4, row.winner, "claude4")}`}>
                {row.claude4}
              </td>
              <td className={`border border-gray-300 p-3 text-center ${getCellClass(row.chatgpt, row.winner, "chatgpt")}`}>
                {row.chatgpt}
              </td>
              <td className={`border border-gray-300 p-3 text-center ${getCellClass(row.gemini, row.winner, "gemini")}`}>
                {row.gemini}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 text-sm text-gray-600">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 border border-green-300"></div>
            <span>Лучший результат</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-100 border border-yellow-300"></div>
            <span>Равные результаты</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Н/Д</span>
            <span>Нет данных</span>
          </div>
        </div>
      </div>
    </div>
  )
} 