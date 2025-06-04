'use server';

import { MarketChartWrapper } from './components/market-chart-wrapper';
import { NewsFeed } from './components/news-feed';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            AI Market Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Отслеживайте рост рынка искусственного интеллекта и последние новости индустрии
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Размер рынка</h3>
            <p className="text-3xl font-bold text-blue-600">$180.5B</p>
            <p className="text-sm text-gray-600">Текущий размер рынка ИИ</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Прогноз 2026</h3>
            <p className="text-3xl font-bold text-green-600">$298B</p>
            <p className="text-sm text-gray-600">Ожидаемый рост на 65%</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Годовой рост</h3>
            <p className="text-3xl font-bold text-purple-600">+28.4%</p>
            <p className="text-sm text-gray-600">CAGR 2024-2026</p>
          </div>
        </div>

        {/* Market Leaders */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Лидеры рынка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-900">OpenAI</h3>
              <p className="text-2xl font-bold text-blue-600">$86B</p>
              <p className="text-sm text-gray-600">Оценка компании</p>
              <p className="text-xs text-green-600">+340% за год</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-900">Anthropic</h3>
              <p className="text-2xl font-bold text-purple-600">$18.4B</p>
              <p className="text-sm text-gray-600">Оценка компании</p>
              <p className="text-xs text-green-600">+280% за год</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-900">Cursor</h3>
              <p className="text-2xl font-bold text-indigo-600">$2.6B</p>
              <p className="text-sm text-gray-600">Оценка компании</p>
              <p className="text-xs text-green-600">+520% за год</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-900">Perplexity</h3>
              <p className="text-2xl font-bold text-orange-600">$9.0B</p>
              <p className="text-sm text-gray-600">Оценка компании</p>
              <p className="text-xs text-green-600">+450% за год</p>
            </div>
          </div>
        </div>

        {/* News Section */}
        <NewsFeed />
      </main>

      <Footer />
    </div>
  );
}