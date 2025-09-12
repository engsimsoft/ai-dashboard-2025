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
            Актуальный обзор лучших AI-инструментов для программирования на сентябрь 2025
          </p>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 max-w-4xl mx-auto">
            <p className="text-sm text-yellow-800">
              <strong>🔄 Обновлено:</strong> Сентябрь 2025 - Windsurf стал новым лидером, Cursor потерял позиции, появились новые игроки
            </p>
          </div>
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
          Рейтинг AI-кодинг платформ сентября 2025
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Полный обзор лучших AI-инструментов: новые лидеры, падение старых гигантов и революционные технологии
        </p>
        
        <AICodingPlatformCards />
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Детальное сравнение с новыми критериями</h2>
          <AICodingComparisonTable />
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Сценарии использования 2025</h2>
          <AICodingUseCases />
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Революционные тренды 2025</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-600">Новые технологии</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Агентная автономность:</strong> ИИ выполняет полные проекты самостоятельно</li>
                <li>• <strong>Локальные модели:</strong> Приватность и контроль данных стали приоритетом</li>
                <li>• <strong>Мультимодальность:</strong> Работа с кодом, изображениями, диаграммами и голосом</li>
                <li>• <strong>Cascade-технологии:</strong> Понимание контекста всего проекта</li>
                <li>• <strong>Интерактивные артефакты:</strong> Мгновенное создание работающих приложений</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Изменения на рынке</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Windsurf обогнал Cursor:</strong> Новый лидер с агентными возможностями</li>
                <li>• <strong>Kilo Code растет:</strong> Мультимодальный подход привлекает разработчиков</li>
                <li>• <strong>Приватность в тренде:</strong> Aider и Continue набирают популярность</li>
                <li>• <strong>Специализация важна:</strong> Узкоспециализированные инструменты побеждают</li>
                <li>• <strong>Open Source возрождается:</strong> Разработчики выбирают контроль над данными</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-red-50 p-8 rounded-lg border-l-4 border-red-400">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-800">Что случилось с Cursor?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-red-600">Проблемы платформы</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• Проблемы с производительностью и стабильностью</li>
                <li>• Отставание в агентных возможностях</li>
                <li>• Высокая цена при снижении качества</li>
                <li>• Медленное внедрение новых технологий</li>
                <li>• Потеря конкурентных преимуществ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-red-600">Реакция рынка</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• Массовый переход пользователей на Windsurf</li>
                <li>• Снижение рейтингов в обзорах</li>
                <li>• Рост популярности альтернатив</li>
                <li>• Критика в сообществе разработчиков</li>
                <li>• Падение доли рынка с 40% до 15%</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Как выбрать платформу в 2025?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-green-600">🔧 Полные приложения</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Нужно создать рабочее приложение с фронтендом и бэкендом
              </p>
              <div className="text-sm">
                <strong>Лучший выбор:</strong> Windsurf, Replit Agent
              </div>
              <div className="text-xs text-gray-500 mt-2">
                ✅ Не требуют знания терминала<br/>
                ✅ Создают полные приложения
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">🎨 Только UI/UX</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Нужно создать красивый интерфейс или компоненты
              </p>
              <div className="text-sm">
                <strong>Лучший выбор:</strong> v0 by Vercel, Lovable
              </div>
              <div className="text-xs text-red-500 mt-2">
                ⚠️ Только UI компоненты<br/>
                ⚠️ Не создают полные приложения
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-orange-600">🔌 Привычная IDE</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Хотите добавить AI в VS Code, Cursor или JetBrains
              </p>
              <div className="text-sm">
                <strong>Лучший выбор:</strong> Continue, Kilo Code, Tabnine
              </div>
              <div className="text-xs text-blue-500 mt-2">
                ✅ Работа в привычной среде<br/>
                ✅ Много бесплатных опций
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-purple-600">👨‍💻 Для новичков</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Не умеете пользоваться терминалом и командной строкой
              </p>
              <div className="text-sm">
                <strong>Лучший выбор:</strong> Replit Agent, v0, Lovable
              </div>
              <div className="text-xs text-green-500 mt-2">
                ✅ Простой интерфейс<br/>
                ✅ Без терминала
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-600">🔒 Для приватности</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Важна безопасность данных и локальная работа
              </p>
              <div className="text-sm">
                <strong>Лучший выбор:</strong> Continue, Tabnine, Windsurf
              </div>
              <div className="text-xs text-yellow-500 mt-2">
                ⚠️ Требует технических знаний<br/>
                ✅ Максимальная приватность
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
            <h3 className="text-lg font-bold mb-3 text-red-800">⚠️ Важные предупреждения</h3>
            <ul className="text-sm text-red-700 space-y-2">
              <li>• <strong>v0 и Lovable</strong> создают только UI компоненты, не полные приложения</li>
              <li>• <strong>GitHub Copilot</strong> очень неудобен для веб-разработки, требует знания терминала</li>
              <li>• <strong>Cursor</strong> потерял лидерство, есть лучшие альтернативы</li>
              <li>• Для полного приложения выбирайте платформы с пометкой 🔧</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Прогноз на 2026</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-600">Ожидаемые тренды</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Полная автономность:</strong> ИИ-разработчики заменят 30% рутинных задач</li>
                <li>• <strong>Голосовое программирование:</strong> Кодирование через естественную речь</li>
                <li>• <strong>Визуальное программирование:</strong> От эскиза к коду за секунды</li>
                <li>• <strong>Персонализация:</strong> ИИ, адаптированный под стиль команды</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-600">Новые игроки</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Apple Intelligence Code:</strong> Интеграция в Xcode</li>
                <li>• <strong>Google Gemini Dev:</strong> Мультимодальная разработка</li>
                <li>• <strong>Meta Code Llama Pro:</strong> Открытая альтернатива</li>
                <li>• <strong>Новые стартапы:</strong> Специализированные решения</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}