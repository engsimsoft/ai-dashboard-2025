"use client"

export function CodingComparisonTable() {
  const models = [
    {
      name: "Claude 3.5 Sonnet (новая)",
      company: "Anthropic",
      context: "200K токенов",
      humanEval: "88.0%",
      mbpp: "82.5%",
      sweBench: "49.0%",
      languages: "100+",
      price: "$3/$15 за млн",
      codeQuality: "Превосходное",
      speed: "Быстрая",
      textToCode: "Превосходное",
      useCase: "Архитектура, Computer Use, AI-агенты",
      released: "Июнь 2025",
      specialFeatures: "Computer Use, Artifacts"
    },
    {
      name: "GPT-4o",
      company: "OpenAI", 
      context: "128K токенов",
      humanEval: "86.6%",
      mbpp: "80.2%",
      sweBench: "43.8%",
      languages: "100+",
      price: "$5/$15 за млн",
      codeQuality: "Отличное",
      speed: "Быстрая",
      textToCode: "Отличное", 
      useCase: "Универсальная разработка, интеграции",
      released: "Май 2024",
      specialFeatures: "Мультимодальность, GitHub Copilot"
    },
    {
      name: "DeepSeek-Coder V2.5",
      company: "DeepSeek",
      context: "16K/32K токенов",
      humanEval: "87.5%",
      mbpp: "84.1%",
      sweBench: "45.2%",
      languages: "100+",
      price: "Бесплатно",
      codeQuality: "Отличное",
      speed: "Быстрая",
      textToCode: "Отличное",
      useCase: "Локальная разработка, open source",
      released: "Сентябрь 2025",
      specialFeatures: "Open source, локальное развертывание"
    },
    {
      name: "Gemini 1.5 Pro",
      company: "Google",
      context: "1M токенов",
      humanEval: "84.1%",
      mbpp: "78.9%",
      sweBench: "41.7%",
      languages: "100+",
      price: "$7/$21 за млн",
      codeQuality: "Отличное",
      speed: "Средняя",
      textToCode: "Отличное",
      useCase: "Большие проекты, enterprise",
      released: "Февраль 2024",
      specialFeatures: "Огромный контекст, Google Cloud"
    },
    {
      name: "Codestral",
      company: "Mistral AI",
      context: "32K токенов", 
      humanEval: "81.1%",
      mbpp: "76.2%",
      sweBench: "38.5%",
      languages: "80+",
      price: "$1/$3 за млн",
      codeQuality: "Хорошее",
      speed: "Очень быстрая",
      textToCode: "Хорошее",
      useCase: "Быстрая генерация, IDE интеграции",
      released: "Май 2024",
      specialFeatures: "Низкая латентность, streaming"
    },
    {
      name: "Code Llama 70B",
      company: "Meta",
      context: "100K токенов",
      humanEval: "82.0%",
      mbpp: "73.8%",
      sweBench: "35.1%",
      languages: "80+",
      price: "Бесплатно",
      codeQuality: "Хорошее",
      speed: "Средняя",
      textToCode: "Хорошее",
      useCase: "Enterprise, кастомизация",
      released: "Август 2023",
      specialFeatures: "Open source, fine-tuning"
    },
    {
      name: "Qwen2.5-Coder 72B",
      company: "Alibaba",
      context: "32K токенов",
      humanEval: "85.2%", 
      mbpp: "79.1%",
      sweBench: "40.3%",
      languages: "120+",
      price: "$2/$6 за млн",
      codeQuality: "Хорошее",
      speed: "Быстрая",
      textToCode: "Хорошее",
      useCase: "Азиатские языки, мобильная разработка",
      released: "Сентябрь 2024",
      specialFeatures: "Мультиязычность, мобильная разработка"
    },
    {
      name: "Grok-2",
      company: "xAI",
      context: "131K токенов",
      humanEval: "79.8%",
      mbpp: "71.4%",
      sweBench: "33.8%",
      languages: "80+",
      price: "$5/$15 за млн",
      codeQuality: "Хорошее",
      speed: "Средняя",
      textToCode: "Хорошее",
      useCase: "Инновации, анализ трендов",
      released: "Август 2024",
      specialFeatures: "Реал-тайм данные из X"
    }
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Модель</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Компания</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Контекст</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">HumanEval</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">MBPP</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">SWE-bench</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Языки</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Цена (in/out)</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Качество кода</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Скорость</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Лучше всего для</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Особенности</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border border-gray-300 px-4 py-3 font-semibold">{model.name}</td>
              <td className="border border-gray-300 px-4 py-3">{model.company}</td>
              <td className="border border-gray-300 px-4 py-3">{model.context}</td>
              <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">{model.humanEval}</td>
              <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{model.mbpp}</td>
              <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-600">{model.sweBench}</td>
              <td className="border border-gray-300 px-4 py-3">{model.languages}</td>
              <td className="border border-gray-300 px-4 py-3 text-blue-600 font-semibold">{model.price}</td>
              <td className="border border-gray-300 px-4 py-3">
                <span className={`px-2 py-1 rounded text-sm font-semibold ${
                  model.codeQuality === "Превосходное" ? "bg-emerald-100 text-emerald-800" :
                  model.codeQuality === "Отличное" ? "bg-green-100 text-green-800" :
                  model.codeQuality === "Хорошее" ? "bg-blue-100 text-blue-800" :
                  "bg-yellow-100 text-yellow-800"
                }`}>
                  {model.codeQuality}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <span className={`px-2 py-1 rounded text-sm font-semibold ${
                  model.speed === "Очень быстрая" ? "bg-emerald-100 text-emerald-800" :
                  model.speed === "Быстрая" ? "bg-green-100 text-green-800" :
                  model.speed === "Средняя" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {model.speed}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{model.useCase}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">{model.specialFeatures}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 space-y-2 text-sm text-gray-600">
        <p><strong>HumanEval:</strong> Бенчмарк генерации кода из описания (164 задачи)</p>
        <p><strong>MBPP:</strong> Mostly Basic Python Problems - практические задачи программирования</p>
        <p><strong>SWE-bench:</strong> Software Engineering benchmark - реальные задачи разработки</p>
        <p><strong>Цены:</strong> Указаны в долларах США за миллион токенов (input/output). Данные на сентябрь 2025.</p>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">💡 Профессиональная рекомендация:</h4>
          <p className="text-blue-800">Claude 3.5 Sonnet лидирует по качеству reasoning и архитектурных решений. DeepSeek-Coder V2.5 - лучший выбор для локальной разработки. GPT-4o оптимален для интеграций и универсальных задач.</p>
        </div>
      </div>
    </div>
  )
}