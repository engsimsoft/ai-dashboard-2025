'use client';

import { useState, useEffect } from 'react';
import { getAINewsAction } from '@/actions/ai-news-actions';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  category: string;
}

// Новые категории для AI Dashboard
const categories = ["Технологии ИИ", "Модели", "Vibecoding", "LLM"];

// Маппинг категорий для MCP API
const categoryMapping: Record<string, string> = {
  "Технологии ИИ": "technology",
  "Модели": "technology",
  "Vibecoding": "technology",
  "LLM": "research"
};

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Технологии ИИ": "bg-blue-100 text-blue-800",
    "Модели": "bg-purple-100 text-purple-800", 
    "Vibecoding": "bg-green-100 text-green-800",
    "LLM": "bg-orange-100 text-orange-800"
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

// Функция для получения времени чтения (примерная оценка)
const getReadTime = (description: string) => {
  const words = description.split(' ').length;
  const minutes = Math.ceil(words / 200); // 200 слов в минуту
  return `${minutes} мин`;
};

// Функция для определения trending новостей (последние 6 часов)
const isTrending = (publishedAt: string) => {
  const newsDate = new Date(publishedAt);
  const now = new Date();
  const hoursDiff = (now.getTime() - newsDate.getTime()) / (1000 * 60 * 60);
  return hoursDiff <= 6;
};

export function NewsFeed() {
  const [selectedCategory, setSelectedCategory] = useState("Технологии ИИ");
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<'mcp' | 'fallback' | 'production'>('fallback');

  // Загрузка новостей через server action
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const result = await getAINewsAction(selectedCategory, 6);
        
        if (result.isSuccess && result.data) {
          setNewsData(result.data);
          
          // Определяем источник данных по сообщению
          if (result.message.includes('Production mode')) {
            setDataSource('production');
          } else if (result.message.includes('MCP сервера')) {
            setDataSource('mcp');
          } else {
            setDataSource('fallback');
          }
        } else {
          setNewsData([]);
          setDataSource('fallback');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setNewsData([]);
        setDataSource('fallback');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  // Функция для получения индикатора источника данных
  const getDataSourceIndicator = () => {
    switch (dataSource) {
      case 'mcp':
        return {
          color: 'bg-green-500',
          text: 'Данные через MCP',
          icon: '🔌'
        };
      case 'production':
        return {
          color: 'bg-blue-500',
          text: 'Проверенные новости',
          icon: '🌐'
        };
      default:
        return {
          color: 'bg-orange-500',
          text: 'Резервные данные',
          icon: '📰'
        };
    }
  };

  const indicator = getDataSourceIndicator();

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
          <div className={`w-3 h-3 rounded-full ${indicator.color} animate-pulse`}></div>
          <span className="text-sm text-gray-500">{indicator.text}</span>
        </div>
      </div>

      {/* Category Tabs */}
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

      {/* News Grid - всегда показываем 6 новостей */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((item, index) => {
          const trending = isTrending(item.publishedAt);
          
          return (
            <article
              key={index}
              className="group bg-gray-50 rounded-lg p-5 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-200"
              onClick={() => window.open(item.url, '_blank')}
            >
              {/* Category and Trending Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                {trending && (
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

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <span>{item.source}</span>
                  <span>•</span>
                  <span>{new Date(item.publishedAt).toLocaleDateString('ru-RU')}</span>
                </div>
                <span className="bg-gray-200 px-2 py-1 rounded">
                  {getReadTime(item.description)}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* No results message */}
      {newsData.length === 0 && !loading && (
        <div className="text-center py-8">
          <p className="text-gray-500">Новостей в категории "{selectedCategory}" не найдено</p>
        </div>
      )}
    </div>
  );
} 