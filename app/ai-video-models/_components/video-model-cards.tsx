"use client"

export function VideoModelCards() {
  const models = [
    {
      name: "OpenAI Sora",
      company: "OpenAI",
      releaseDate: "Февраль 2024",
      description: "Флагманская модель от OpenAI с лучшим качеством видео",
      features: [
        "До 60 секунд видео",
        "Высокое разрешение (1080p)",
        "Отличное понимание текста",
        "Реалистичные движения"
      ],
      pricing: "От $20 за видео",
      color: "blue",
      badge: "Флагман",
      rating: 9.8
    },
    {
      name: "Google Veo",
      company: "Google",
      releaseDate: "Май 2024",
      description: "Мощная модель от Google с быстрой генерацией",
      features: [
        "До 60 секунд видео",
        "Интеграция с Gemini",
        "Быстрая генерация",
        "Стабильные результаты"
      ],
      pricing: "Бесплатно для тестов",
      color: "green",
      badge: "Быстрая",
      rating: 9.5
    },
    {
      name: "Runway ML Gen-3",
      company: "Runway ML",
      releaseDate: "Март 2024",
      description: "Универсальная модель для творческих задач",
      features: [
        "До 10 секунд видео",
        "Монтаж и эффекты",
        "Стилизация изображений",
        "Интеграция с After Effects"
      ],
      pricing: "От $12/месяц",
      color: "purple",
      badge: "Творческая",
      rating: 9.3
    },
    {
      name: "Pika Labs",
      company: "Pika Labs",
      releaseDate: "Январь 2024",
      description: "Специализируется на анимации и персонажах",
      features: [
        "Живые персонажи",
        "Динамичные сцены",
        "Текст в видео",
        "Высокая детализация"
      ],
      pricing: "От $8/месяц",
      color: "orange",
      badge: "Анимация",
      rating: 9.1
    },
    {
      name: "Stable Video Diffusion",
      company: "Stability AI",
      releaseDate: "Ноябрь 2023",
      description: "Открытая модель для экспериментов",
      features: [
        "Open source",
        "Бесплатное использование",
        "Кастомизация",
        "Сообщество разработчиков"
      ],
      pricing: "Бесплатно",
      color: "red",
      badge: "Open Source",
      rating: 8.8
    },
    {
      name: "Kling AI",
      company: "Kling AI",
      releaseDate: "Апрель 2024",
      description: "Китайская модель с отличным качеством",
      features: [
        "До 10 минут видео",
        "Высокая скорость",
        "Реалистичные сцены",
        "Доступные цены"
      ],
      pricing: "От $10/месяц",
      color: "indigo",
      badge: "Доступная",
      rating: 9.0
    },
    {
      name: "Haiper AI",
      company: "Haiper",
      releaseDate: "Июнь 2024",
      description: "Специализируется на длинных видео",
      features: [
        "До 6 минут видео",
        "Высокое качество",
        "Музыкальная синхронизация",
        "Профессиональные эффекты"
      ],
      pricing: "От $15/месяц",
      color: "pink",
      badge: "Длинные видео",
      rating: 8.9
    },
    {
      name: "Luma AI Dream Machine",
      company: "Luma AI",
      releaseDate: "Декабрь 2023",
      description: "Мощная модель для 3D и динамики",
      features: [
        "3D генерация",
        "Динамичные камеры",
        "Реалистичные материалы",
        "Высокая производительность"
      ],
      pricing: "От $29/месяц",
      color: "cyan",
      badge: "3D",
      rating: 9.2
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