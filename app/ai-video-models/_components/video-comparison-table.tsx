"use client"

export function VideoComparisonTable() {
  const models = [
    {
      name: "OpenAI Sora",
      company: "OpenAI",
      maxDuration: "60 сек",
      resolution: "1080p",
      pricePerVideo: "$20",
      monthlyPrice: "N/A",
      quality: "Отличное",
      speed: "Средняя",
      textToVideo: "Отличное",
      imageToVideo: "Отличное",
      useCase: "Профессиональный контент",
      released: "Февраль 2024"
    },
    {
      name: "Google Veo",
      company: "Google",
      maxDuration: "60 сек",
      resolution: "1080p",
      pricePerVideo: "Бесплатно",
      monthlyPrice: "Бесплатно",
      quality: "Хорошее",
      speed: "Быстрая",
      textToVideo: "Хорошее",
      imageToVideo: "Отличное",
      useCase: "Быстрое прототипирование",
      released: "Май 2024"
    },
    {
      name: "Runway ML Gen-3",
      company: "Runway ML",
      maxDuration: "10 сек",
      resolution: "1080p",
      pricePerVideo: "N/A",
      monthlyPrice: "$12",
      quality: "Хорошее",
      speed: "Быстрая",
      textToVideo: "Отличное",
      imageToVideo: "Отличное",
      useCase: "Творческий монтаж",
      released: "Март 2024"
    },
    {
      name: "Pika Labs",
      company: "Pika Labs",
      maxDuration: "10 сек",
      resolution: "720p",
      pricePerVideo: "N/A",
      monthlyPrice: "$8",
      quality: "Хорошее",
      speed: "Средняя",
      textToVideo: "Отличное",
      imageToVideo: "Отличное",
      useCase: "Анимация персонажей",
      released: "Январь 2024"
    },
    {
      name: "Stable Video Diffusion",
      company: "Stability AI",
      maxDuration: "4 сек",
      resolution: "1024x576",
      pricePerVideo: "Бесплатно",
      monthlyPrice: "Бесплатно",
      quality: "Среднее",
      speed: "Быстрая",
      textToVideo: "Хорошее",
      imageToVideo: "Хорошее",
      useCase: "Эксперименты",
      released: "Ноябрь 2023"
    },
    {
      name: "Kling AI",
      company: "Kling AI",
      maxDuration: "10 мин",
      resolution: "1080p",
      pricePerVideo: "N/A",
      monthlyPrice: "$10",
      quality: "Хорошее",
      speed: "Быстрая",
      textToVideo: "Отличное",
      imageToVideo: "Хорошее",
      useCase: "Длинные видео",
      released: "Апрель 2024"
    },
    {
      name: "Haiper AI",
      company: "Haiper",
      maxDuration: "6 мин",
      resolution: "1080p",
      pricePerVideo: "N/A",
      monthlyPrice: "$15",
      quality: "Отличное",
      speed: "Средняя",
      textToVideo: "Отличное",
      imageToVideo: "Отличное",
      useCase: "Профессиональные видео",
      released: "Июнь 2024"
    },
    {
      name: "Luma AI Dream Machine",
      company: "Luma AI",
      maxDuration: "10 сек",
      resolution: "1080p",
      pricePerVideo: "N/A",
      monthlyPrice: "$29",
      quality: "Отличное",
      speed: "Средняя",
      textToVideo: "Хорошее",
      imageToVideo: "Отличное",
      useCase: "3D и динамика",
      released: "Декабрь 2023"
    }
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Модель</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Компания</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Макс. длительность</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Разрешение</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Цена за видео</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Цена мес.</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Качество</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Скорость</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Текст→Видео</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Изобр→Видео</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Лучше всего для</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Релиз</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border border-gray-300 px-4 py-3 font-semibold">{model.name}</td>
              <td className="border border-gray-300 px-4 py-3">{model.company}</td>
              <td className="border border-gray-300 px-4 py-3">{model.maxDuration}</td>
              <td className="border border-gray-300 px-4 py-3">{model.resolution}</td>
              <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">{model.pricePerVideo}</td>
              <td className="border border-gray-300 px-4 py-3 text-blue-600 font-semibold">{model.monthlyPrice}</td>
              <td className="border border-gray-300 px-4 py-3">
                <span className={`px-2 py-1 rounded text-sm font-semibold ${
                  model.quality === "Отличное" ? "bg-green-100 text-green-800" :
                  model.quality === "Хорошее" ? "bg-blue-100 text-blue-800" :
                  "bg-yellow-100 text-yellow-800"
                }`}>
                  {model.quality}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <span className={`px-2 py-1 rounded text-sm font-semibold ${
                  model.speed === "Быстрая" ? "bg-green-100 text-green-800" :
                  model.speed === "Средняя" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {model.speed}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <span className={`px-2 py-1 rounded text-sm font-semibold ${
                  model.textToVideo === "Отличное" ? "bg-green-100 text-green-800" :
                  "bg-blue-100 text-blue-800"
                }`}>
                  {model.textToVideo}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <span className={`px-2 py-1 rounded text-sm font-semibold ${
                  model.imageToVideo === "Отличное" ? "bg-green-100 text-green-800" :
                  "bg-blue-100 text-blue-800"
                }`}>
                  {model.imageToVideo}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{model.useCase}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">{model.released}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-sm text-gray-600">
        <p>* Цены указаны в долларах США. N/A - не применимо (плата за использование, а не за видео)</p>
        <p>Текст→Видео: Качество генерации видео из текстового описания | Изобр→Видео: Качество анимации изображений</p>
      </div>
    </div>
  )
}