'use client';

import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  source: string;
  readTime: string;
  trending?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "OpenAI представила GPT-5: революция в области ИИ",
    summary: "Новая модель GPT-5 демонстрирует значительные улучшения в понимании контекста и генерации кода, превосходя предыдущие версии на 40%.",
    category: "Модели ИИ",
    date: "2025-01-15",
    source: "OpenAI Blog",
    readTime: "3 мин",
    trending: true
  },
  {
    id: 2,
    title: "Google Gemini Ultra получил обновление для разработчиков",
    summary: "Новые возможности включают улучшенную интеграцию с IDE и поддержку более 50 языков программирования.",
    category: "Разработка",
    date: "2025-01-14",
    source: "Google AI",
    readTime: "4 мин"
  },
  {
    id: 3,
    title: "Anthropic Claude 3.5 Sonnet: новые возможности для бизнеса",
    summary: "Компания Anthropic анонсировала специальные функции для корпоративных клиентов, включая улучшенную безопасность данных.",
    category: "Бизнес",
    date: "2025-01-13",
    source: "Anthropic",
    readTime: "5 мин",
    trending: true
  },
  {
    id: 4,
    title: "Рынок ИИ-инструментов достиг $200 млрд в 2025 году",
    summary: "Аналитики прогнозируют дальнейший рост рынка на 35% в год благодаря внедрению ИИ в различных отраслях.",
    category: "Рынок",
    date: "2025-01-12",
    source: "McKinsey",
    readTime: "6 мин"
  },
  {
    id: 5,
    title: "Microsoft Copilot интегрируется с новыми платформами",
    summary: "Расширение экосистемы Copilot включает поддержку популярных инструментов разработки и дизайна.",
    category: "Интеграции",
    date: "2025-01-11",
    source: "Microsoft",
    readTime: "3 мин"
  },
  {
    id: 6,
    title: "Новые стартапы в области ИИ привлекли $5 млрд инвестиций",
    summary: "Венчурные фонды активно инвестируют в AI-стартапы, специализирующиеся на автоматизации и машинном обучении.",
    category: "Инвестиции",
    date: "2025-01-10",
    source: "TechCrunch",
    readTime: "4 мин",
    trending: true
  }
];

const categories = ["Все", "Модели ИИ", "Разработка", "Бизнес", "Рынок", "Интеграции", "Инвестиции"];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Модели ИИ": "bg-blue-100 text-blue-800",
    "Разработка": "bg-green-100 text-green-800",
    "Бизнес": "bg-purple-100 text-purple-800",
    "Рынок": "bg-orange-100 text-orange-800",
    "Интеграции": "bg-indigo-100 text-indigo-800",
    "Инвестиции": "bg-red-100 text-red-800"
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

export function NewsFeed() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [showAll, setShowAll] = useState(false);

  const filteredNews = newsData.filter(item => 
    selectedCategory === "Все" || item.category === selectedCategory
  );

  const displayedNews = showAll ? filteredNews : filteredNews.slice(0, 6);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Последние новости ИИ
          </h2>
          <p className="text-gray-600">
            Актуальные события и тренды в мире искусственного интеллекта
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-500">Обновляется в реальном времени</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {displayedNews.map((item) => (
          <article
            key={item.id}
            className="group bg-gray-50 rounded-lg p-5 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-200"
          >
            {/* Category and Trending Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                {item.category}
              </span>
              {item.trending && (
                <div className="flex items-center space-x-1">
                  <span className="text-red-500 text-xs">🔥</span>
                  <span className="text-xs text-red-600 font-medium">Trending</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {item.title}
            </h3>

            {/* Summary */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {item.summary}
            </p>

            {/* Meta Information */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-3">
                <span>{item.source}</span>
                <span>•</span>
                <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
              </div>
              <span className="bg-gray-200 px-2 py-1 rounded">
                {item.readTime}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Show More/Less Button */}
      {filteredNews.length > 6 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {showAll ? 'Показать меньше' : `Показать еще ${filteredNews.length - 6} новостей`}
          </button>
        </div>
      )}

      {/* No results message */}
      {filteredNews.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Новостей в категории "{selectedCategory}" не найдено</p>
        </div>
      )}
    </div>
  );
} 