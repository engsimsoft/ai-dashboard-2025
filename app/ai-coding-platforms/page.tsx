"use server"

import { AICodingPlatformCards } from './_components/ai-coding-platform-cards'
import { AICodingComparisonTable } from './_components/ai-coding-comparison-table'
import { AICodingUseCases } from './_components/ai-coding-use-cases'
import Link from 'next/link'
import { Header } from '@/components/header'

export default async function AICodingPlatformsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-кодинг платформы 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Обзор лучших AI-инструментов для программирования
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <Link 
            href="/" 
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Назад к дашборду
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-center">
          Сравнение AI-кодинг платформ 2025
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Полный обзор лучших AI-инструментов для разработки: от Cursor до новых игроков рынка
        </p>
        
        <AICodingPlatformCards />
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Детальное сравнение</h2>
          <AICodingComparisonTable />
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Сценарии использования</h2>
          <AICodingUseCases />
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Тренды и будущее AI-кодинга</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Новые тенденции 2025</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Агентный подход:</strong> ИИ не просто предлагает код, а выполняет полные задачи</li>
                <li>• <strong>Мультимодальность:</strong> Работа с изображениями, диаграммами и голосом</li>
                <li>• <strong>Локальные модели:</strong> Приватность и контроль над данными</li>
                <li>• <strong>Специализация:</strong> Инструменты для конкретных языков и фреймворков</li>
                <li>• <strong>Интеграция с DevOps:</strong> От кода до деплоя в одном инструменте</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-600">Что ожидать в будущем</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Автономные разработчики:</strong> ИИ-агенты, способные создавать полные приложения</li>
                <li>• <strong>Голосовое программирование:</strong> Кодирование через естественную речь</li>
                <li>• <strong>Визуальное программирование:</strong> От эскиза к коду за секунды</li>
                <li>• <strong>Персонализация:</strong> ИИ, адаптированный под стиль команды</li>
                <li>• <strong>Демократизация:</strong> Программирование станет доступно всем</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-yellow-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Рекомендации по выбору</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-green-600">Для начинающих</h3>
              <p className="text-gray-700 mb-4">
                Если вы новичок в программировании или хотите быстро создать прототип
              </p>
              <div className="text-sm">
                <strong>Рекомендуем:</strong> Replit Agent, Lovable, Bolt.new
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Для профессионалов</h3>
              <p className="text-gray-700 mb-4">
                Если вы опытный разработчик и хотите ускорить рабочий процесс
              </p>
              <div className="text-sm">
                <strong>Рекомендуем:</strong> Cursor, Windsurf, GitHub Copilot
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Для команд</h3>
              <p className="text-gray-700 mb-4">
                Если вам нужна совместная работа и корпоративные функции
              </p>
              <div className="text-sm">
                <strong>Рекомендуем:</strong> Replit, Cursor Business, Amazon Q
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 