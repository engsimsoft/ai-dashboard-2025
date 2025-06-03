import { MarketChartWrapper } from './components/market-chart-wrapper';
import { NewsFeed } from './components/news-feed';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Дашборд анализа рынка ИИ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный анализ рынка искусственного интеллекта, сравнения ведущих AI-инструментов 
            и актуальные новости индустрии в одном месте
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">AI-инструментов проанализировано</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$180B</div>
            <div className="text-gray-600">Размер рынка ИИ в 2025</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Мониторинг новостей</div>
          </div>
        </div>
        
        {/* Market Chart - Full Width */}
        <div className="mb-16">
          <MarketChartWrapper />
        </div>

        {/* News Feed - Full Width */}
        <div className="mb-16">
          <NewsFeed />
        </div>

        {/* Featured Sections */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Популярные разделы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Сравнение ИИ-ассистентов
              </h3>
              <p className="text-gray-600 mb-4">
                Детальное сравнение ChatGPT, Claude, Gemini и других популярных AI-помощников
              </p>
              <a 
                href="/comparison" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Подробнее →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI-платформы для кодинга
              </h3>
              <p className="text-gray-600 mb-4">
                Обзор лучших AI-инструментов для программирования в 2025 году
              </p>
              <a 
                href="/ai-coding-platforms" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Изучить →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🐎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Темные лошадки
              </h3>
              <p className="text-gray-600 mb-4">
                Перспективные AI-инструменты, за которыми стоит следить
              </p>
              <a 
                href="/dark-horses" 
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Открыть →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}