'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function MCPServersPage() {
  const [activeTab, setActiveTab] = useState('what-is');

  const tabs = [
    { id: 'what-is', label: 'Что это?' },
    { id: 'how-works', label: 'Как работает?' },
    { id: 'benefits', label: 'Преимущества' },
    { id: 'use-cases', label: 'Применение' },
    { id: 'official-servers', label: 'Официальные серверы' },
    { id: 'setup', label: 'Настройка' },
    { id: 'examples', label: 'Примеры' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            MCP-серверы в Cursor
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Полное руководство по Model Context Protocol - технологии, которая превращает 
            Cursor в суперинструмент для разработки
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === 'what-is' && <WhatIsMCP />}
            {activeTab === 'how-works' && <HowItWorks />}
            {activeTab === 'benefits' && <Benefits />}
            {activeTab === 'use-cases' && <UseCases />}
            {activeTab === 'official-servers' && <OfficialServers />}
            {activeTab === 'setup' && <Setup />}
            {activeTab === 'examples' && <Examples />}
          </div>
        </div>

        {/* Quick Start Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Готов начать?</h2>
          <p className="text-blue-100 mb-6">
            Создай свой первый MCP-сервер за 5 минут и увидь магию автоматизации
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Начать сейчас
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function WhatIsMCP() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Что такое MCP-серверы?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Простыми словами</h3>
            <p className="text-blue-800">
              MCP (Model Context Protocol) - это способ "научить" Cursor новым навыкам. 
              Представь, что Cursor - это умный помощник, а MCP-серверы - это специальные 
              инструменты, которые ты можешь ему дать.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Техническое определение</h3>
            <p className="text-green-800">
              MCP - это открытый протокол от Anthropic, который позволяет AI-ассистентам 
              безопасно подключаться к внешним системам данных и инструментам через 
              стандартизированный интерфейс.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Аналогия с реальной жизнью</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🧠</div>
              <h4 className="font-medium text-gray-900">Cursor (Мозг)</h4>
              <p className="text-sm text-gray-600">Умный ассистент, который понимает код</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔌</div>
              <h4 className="font-medium text-gray-900">MCP (Разъемы)</h4>
              <p className="text-sm text-gray-600">Стандартные разъемы для подключения</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🛠️</div>
              <h4 className="font-medium text-gray-900">Серверы (Инструменты)</h4>
              <p className="text-sm text-gray-600">Специализированные инструменты</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">💡 Ключевая идея</h3>
          <p className="text-yellow-800">
            Без MCP Cursor знает только то, что видит в твоем коде. С MCP он может читать базы данных, 
            получать данные из API, управлять файлами, отправлять уведомления и многое другое!
          </p>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Как это работает?</h2>
      
      <div className="space-y-6">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Создание MCP-сервера</h3>
              <p className="text-gray-600 mb-4">
                Ты пишешь небольшую программу (сервер), которая умеет делать что-то полезное: 
                читать базу данных, получать новости, работать с файлами и т.д.
              </p>
              <div className="bg-gray-100 rounded p-3">
                <code className="text-sm">
                  // Пример: сервер для работы с базой данных<br/>
                  server.addTool("get_users", async () =&gt; &#123;<br/>
                  &nbsp;&nbsp;return await db.users.findMany()<br/>
                  &#125;)
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
              <span className="text-green-600 font-bold text-lg">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Подключение к Cursor</h3>
              <p className="text-gray-600 mb-4">
                Добавляешь конфигурацию в файл <code className="bg-gray-100 px-2 py-1 rounded">.cursor/mcp.json</code>, 
                и Cursor автоматически подключается к твоему серверу.
              </p>
              <div className="bg-gray-100 rounded p-3">
                <code className="text-sm">
                  {`{`}<br/>
                  &nbsp;&nbsp;"mcpServers": {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"database": {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"command": "node server.js"<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  &nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
              <span className="text-purple-600 font-bold text-lg">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Использование в чате</h3>
              <p className="text-gray-600 mb-4">
                Теперь в Cursor Chat ты можешь просто сказать "Покажи всех пользователей" 
                и Cursor автоматически вызовет твой сервер и получит данные.
              </p>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-blue-800 font-medium">💬 Ты: "Покажи последних 10 пользователей"</p>
                <p className="text-green-800 mt-2">🤖 Cursor: *вызывает MCP-сервер* "Вот последние пользователи..."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-indigo-900 mb-4">🔄 Схема взаимодействия</h3>
        <div className="flex items-center justify-between text-center">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">💬</div>
            <div className="font-medium">Твой запрос</div>
          </div>
          <div className="text-indigo-600 text-2xl">→</div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">🧠</div>
            <div className="font-medium">Cursor AI</div>
          </div>
          <div className="text-indigo-600 text-2xl">→</div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">🔌</div>
            <div className="font-medium">MCP Сервер</div>
          </div>
          <div className="text-indigo-600 text-2xl">→</div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">💾</div>
            <div className="font-medium">Данные/API</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества MCP-серверов</h2>
      
      {/* Новый раздел сравнения с @Web */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">🆚 MCP vs @Web поиск</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-3">📱 @Web поиск</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>Разовый запрос</strong> - каждый раз новый поиск</li>
              <li>• <strong>Текстовый ответ</strong> - нужно копировать вручную</li>
              <li>• <strong>Нет структуры</strong> - просто текст в чате</li>
              <li>• <strong>Не сохраняется</strong> - данные "умирают" после ответа</li>
              <li>• <strong>Медленно</strong> - каждый раз полный поиск</li>
            </ul>
            <div className="mt-4 bg-orange-50 rounded p-3">
              <p className="text-orange-800 text-xs">
                <strong>Пример:</strong> "Вот что я нашел в интернете: OpenAI выпустила GPT-5..."
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border-2 border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">🔌 MCP-сервер</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>Постоянное подключение</strong> - сервер всегда готов</li>
              <li>• <strong>Структурированные данные</strong> - JSON объекты</li>
              <li>• <strong>Прямо в код</strong> - автоматически в компоненты</li>
              <li>• <strong>Кэширование</strong> - быстрые повторные запросы</li>
              <li>• <strong>Мгновенно</strong> - данные уже готовы</li>
            </ul>
            <div className="mt-4 bg-green-50 rounded p-3">
              <p className="text-green-800 text-xs">
                <strong>Пример:</strong> {`{ title: "GPT-5", url: "...", date: "..." }`}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-blue-500">
          <h4 className="font-medium text-blue-900 mb-2">💡 Главное отличие</h4>
          <p className="text-blue-800 text-sm">
            @Web поиск - это как спросить у прохожего дорогу. MCP-сервер - это как иметь GPS навигатор, 
            который всегда знает актуальную информацию и может ею поделиться мгновенно.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <span className="text-green-600 text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-green-900">Автоматизация</h3>
          </div>
          <p className="text-green-800">
            Cursor сам вызывает нужные функции. Не нужно копировать данные или объяснять структуру - 
            он знает как получить информацию.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <span className="text-blue-600 text-xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900">Актуальные данные</h3>
          </div>
          <p className="text-blue-800">
            Данные всегда свежие - Cursor получает их в реальном времени из источника, 
            а не использует устаревшую информацию.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 rounded-full p-2 mr-3">
              <span className="text-purple-600 text-xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold text-purple-900">Безопасность</h3>
          </div>
          <p className="text-purple-800">
            Ты контролируешь какие данные и функции доступны Cursor. 
            Никаких неожиданных действий - только то, что разрешил.
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 rounded-full p-2 mr-3">
              <span className="text-orange-600 text-xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold text-orange-900">Расширяемость</h3>
          </div>
          <p className="text-orange-800">
            Можешь создать сервер для любой задачи: работа с API, файлами, 
            базами данных, внешними сервисами.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">🆚 Сравнение: До и После MCP</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-red-600 mb-3">❌ Без MCP</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Копируешь данные из БД в чат</li>
              <li>• Объясняешь структуру проекта</li>
              <li>• Cursor не знает о внешних API</li>
              <li>• Ручное обновление информации</li>
              <li>• Ограничен размером контекста</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-green-600 mb-3">✅ С MCP</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Cursor сам получает актуальные данные</li>
              <li>• Знает структуру БД автоматически</li>
              <li>• Может вызывать любые API</li>
              <li>• Данные всегда свежие</li>
              <li>• Неограниченный доступ к информации</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function UseCases() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Где применять MCP-серверы?</h2>
      
      <div className="space-y-6">
        <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">🏢 Корпоративные приложения</h3>
          <p className="text-gray-600 mb-4">
            Для серьезных инженерных проектов MCP - это game changer. Cursor может работать с:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Базы данных:</strong> PostgreSQL, MongoDB, Redis</li>
              <li>• <strong>API:</strong> REST, GraphQL, gRPC</li>
              <li>• <strong>Облачные сервисы:</strong> AWS, Azure, GCP</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Мониторинг:</strong> Prometheus, Grafana</li>
              <li>• <strong>CI/CD:</strong> Jenkins, GitHub Actions</li>
              <li>• <strong>Документация:</strong> Confluence, Notion</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">🚀 Стартапы и MVP</h3>
          <p className="text-gray-600 mb-4">
            Быстрая разработка с автоматическим пониманием контекста:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded p-4">
              <h4 className="font-medium text-green-900">Данные</h4>
              <p className="text-sm text-green-700">Автоматическое получение пользователей, заказов, аналитики</p>
            </div>
            <div className="bg-green-50 rounded p-4">
              <h4 className="font-medium text-green-900">Интеграции</h4>
              <p className="text-sm text-green-700">Stripe, SendGrid, Twilio без ручной настройки</p>
            </div>
            <div className="bg-green-50 rounded p-4">
              <h4 className="font-medium text-green-900">Деплой</h4>
              <p className="text-sm text-green-700">Автоматический деплой на Vercel, Netlify</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Специализированные задачи</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-purple-900 mb-2">Для разработчиков</h4>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Автоматическое создание миграций БД</li>
                <li>• Генерация API документации</li>
                <li>• Анализ производительности кода</li>
                <li>• Автоматические тесты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-900 mb-2">Для бизнеса</h4>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Аналитика продаж в реальном времени</li>
                <li>• Мониторинг пользователей</li>
                <li>• Автоматические отчеты</li>
                <li>• Интеграция с CRM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Когда MCP может не подойти</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-yellow-800 mb-2">Ограничения:</h4>
            <ul className="space-y-1 text-yellow-700 text-sm">
              <li>• Очень простые статичные сайты</li>
              <li>• Проекты без внешних данных</li>
              <li>• Когда нужна максимальная скорость (overhead)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-yellow-800 mb-2">Альтернативы:</h4>
            <ul className="space-y-1 text-yellow-700 text-sm">
              <li>• Простое копирование данных в чат</li>
              <li>• Использование готовых API без MCP</li>
              <li>• Статичная документация</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function OfficialServers() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Официальные MCP-серверы от Anthropic</h2>
      
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">🏛️</div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Базовые инструменты для разработки</h3>
            <p className="text-blue-800">
              Anthropic создала набор основных серверов, которые покрывают самые частые задачи разработки. 
              Эти серверы протестированы, безопасны и готовы к использованию в продакшене.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Filesystem Server */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
              <div className="text-2xl">📁</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Filesystem</h3>
              <p className="text-gray-600 mb-4">Безопасные операции с файлами и директориями</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Что умеет:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Чтение и запись файлов</li>
                    <li>• Создание директорий</li>
                    <li>• Поиск по содержимому</li>
                    <li>• Работа с правами доступа</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <h4 className="font-medium text-green-900 mb-2">Зачем нужен:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Автоматическое создание файлов</li>
                    <li>• Рефакторинг кода</li>
                    <li>• Анализ структуры проекта</li>
                    <li>• Бэкап важных файлов</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded p-3">
                <p className="text-green-400 text-sm">
                  💬 "Создай компонент Button.tsx в папке components"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Git Server */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 rounded-lg p-3 flex-shrink-0">
              <div className="text-2xl">🔧</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Git</h3>
              <p className="text-gray-600 mb-4">Полное управление Git-репозиториями</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Возможности:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Коммиты и пуши</li>
                    <li>• Создание веток</li>
                    <li>• История изменений</li>
                    <li>• Слияние веток</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <h4 className="font-medium text-orange-900 mb-2">Применение:</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Автоматические коммиты</li>
                    <li>• Анализ истории</li>
                    <li>• Подготовка релизов</li>
                    <li>• Откат изменений</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded p-3">
                <p className="text-green-400 text-sm">
                  💬 "Создай новую ветку feature/auth и переключись на неё"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Server */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
              <div className="text-2xl">🐙</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600 mb-4">Управление репозиториями, issues и pull requests</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Функции:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Создание issues</li>
                    <li>• Управление PR</li>
                    <li>• Просмотр коммитов</li>
                    <li>• Работа с релизами</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <h4 className="font-medium text-purple-900 mb-2">Автоматизация:</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Создание задач из кода</li>
                    <li>• Анализ активности</li>
                    <li>• Подготовка релизов</li>
                    <li>• Code review помощь</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded p-3">
                <p className="text-green-400 text-sm">
                  💬 "Создай issue для багфикса аутентификации"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PostgreSQL Server */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
              <div className="text-2xl">🐘</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PostgreSQL</h3>
              <p className="text-gray-600 mb-4">Прямой доступ к базам данных PostgreSQL</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Операции:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Выполнение SQL запросов</li>
                    <li>• Анализ данных</li>
                    <li>• Создание таблиц</li>
                    <li>• Миграции схемы</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <h4 className="font-medium text-blue-900 mb-2">Преимущества:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Живые данные в коде</li>
                    <li>• Автоматические отчёты</li>
                    <li>• Оптимизация запросов</li>
                    <li>• Мониторинг производительности</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded p-3">
                <p className="text-green-400 text-sm">
                  💬 "Покажи топ-10 пользователей по активности за месяц"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SQLite Server */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 rounded-lg p-3 flex-shrink-0">
              <div className="text-2xl">💾</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SQLite</h3>
              <p className="text-gray-600 mb-4">Работа с локальными базами данных SQLite</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Возможности:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Локальное хранение данных</li>
                    <li>• Быстрые запросы</li>
                    <li>• Импорт/экспорт данных</li>
                    <li>• Анализ структуры БД</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded p-3">
                  <h4 className="font-medium text-yellow-900 mb-2">Идеально для:</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Прототипирования</li>
                    <li>• Тестовых данных</li>
                    <li>• Локальной разработки</li>
                    <li>• Кэширования</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded p-3">
                <p className="text-green-400 text-sm">
                  💬 "Создай SQLite базу для хранения пользовательских настроек"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fetch Server */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 rounded-lg p-3 flex-shrink-0">
              <div className="text-2xl">🌐</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fetch</h3>
              <p className="text-gray-600 mb-4">Загрузка и анализ веб-контента</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Функции:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• HTTP запросы к API</li>
                    <li>• Скрапинг веб-страниц</li>
                    <li>• Загрузка файлов</li>
                    <li>• Мониторинг сайтов</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded p-3">
                  <h4 className="font-medium text-indigo-900 mb-2">Применение:</h4>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Интеграция с API</li>
                    <li>• Сбор данных</li>
                    <li>• Проверка доступности</li>
                    <li>• Автоматическое тестирование</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded p-3">
                <p className="text-green-400 text-sm">
                  💬 "Получи данные о погоде и добавь их в приложение"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Puppeteer Server */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
              <div className="text-2xl">🎭</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Puppeteer</h3>
              <p className="text-gray-600 mb-4">Автоматизация браузера и веб-тестирование</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Возможности:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Скриншоты страниц</li>
                    <li>• PDF генерация</li>
                    <li>• Автоматизация действий</li>
                    <li>• Тестирование UI</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded p-3">
                  <h4 className="font-medium text-red-900 mb-2">Сценарии:</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• E2E тестирование</li>
                    <li>• Мониторинг производительности</li>
                    <li>• Создание превью</li>
                    <li>• Автоматизация рутины</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded p-3">
                <p className="text-green-400 text-sm">
                  💬 "Сделай скриншот главной страницы в разных разрешениях"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Server */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="bg-emerald-100 rounded-lg p-3 flex-shrink-0">
              <div className="text-2xl">🧠</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Memory</h3>
              <p className="text-gray-600 mb-4">Система памяти на основе графов знаний</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Функции:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Сохранение контекста</li>
                    <li>• Связывание информации</li>
                    <li>• Поиск по памяти</li>
                    <li>• Обучение на истории</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded p-3">
                  <h4 className="font-medium text-emerald-900 mb-2">Преимущества:</h4>
                  <ul className="text-sm text-emerald-800 space-y-1">
                    <li>• Персонализация ответов</li>
                    <li>• Долгосрочная память</li>
                    <li>• Умные рекомендации</li>
                    <li>• Контекстная помощь</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded p-3">
                <p className="text-green-400 text-sm">
                  💬 "Запомни мои предпочтения в архитектуре проекта"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Setup Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">🚀 Быстрый старт с официальными серверами</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-3">Установка:</h4>
            <div className="bg-black/20 rounded p-3 mb-4">
              <code className="text-sm">
                npm install @anthropic-ai/mcp-server-*
              </code>
            </div>
            <p className="text-blue-100 text-sm">
              Замени * на название нужного сервера (filesystem, git, github и т.д.)
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3">Конфигурация:</h4>
            <div className="bg-black/20 rounded p-3 mb-4">
              <code className="text-sm">
                // В .cursor/mcp.json<br/>
                "filesystem": &#123;<br/>
                &nbsp;&nbsp;"command": "npx @anthropic-ai/mcp-server-filesystem"<br/>
                &#125;
              </code>
            </div>
            <p className="text-blue-100 text-sm">
              Добавь нужные серверы в конфигурацию MCP
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Почему стоит использовать официальные серверы</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded p-4">
            <div className="text-green-600 text-lg mb-2">✅</div>
            <h4 className="font-medium text-gray-900 mb-2">Надёжность</h4>
            <p className="text-sm text-gray-600">Протестированы командой Anthropic, регулярно обновляются</p>
          </div>
          <div className="bg-white rounded p-4">
            <div className="text-blue-600 text-lg mb-2">🔒</div>
            <h4 className="font-medium text-gray-900 mb-2">Безопасность</h4>
            <p className="text-sm text-gray-600">Встроенные механизмы защиты и валидации данных</p>
          </div>
          <div className="bg-white rounded p-4">
            <div className="text-purple-600 text-lg mb-2">📚</div>
            <h4 className="font-medium text-gray-900 mb-2">Документация</h4>
            <p className="text-sm text-gray-600">Подробные гайды и примеры использования</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Setup() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Настройка MCP в Cursor</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 Что понадобится</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded p-4">
            <h4 className="font-medium text-gray-900">Cursor IDE</h4>
            <p className="text-sm text-gray-600">Последняя версия с поддержкой MCP</p>
          </div>
          <div className="bg-white rounded p-4">
            <h4 className="font-medium text-gray-900">Node.js</h4>
            <p className="text-sm text-gray-600">Для создания серверов на JavaScript</p>
          </div>
          <div className="bg-white rounded p-4">
            <h4 className="font-medium text-gray-900">5 минут времени</h4>
            <p className="text-sm text-gray-600">Для первой настройки</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Шаг 1: Создание MCP-сервера</h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm">
              <div># Создай директорию для серверов</div>
              <div>mkdir mcp-servers && cd mcp-servers</div>
              <div></div>
              <div># Инициализируй npm проект</div>
              <div>npm init -y</div>
              <div></div>
              <div># Установи MCP SDK</div>
              <div>npm install @modelcontextprotocol/sdk</div>
            </code>
          </div>
          <p className="text-gray-600">
            Создай файл <code className="bg-gray-100 px-2 py-1 rounded">simple-server.js</code> с базовым сервером.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Шаг 2: Конфигурация Cursor</h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm">
              <div># Создай конфигурационный файл</div>
              <div>mkdir .cursor</div>
              <div>touch .cursor/mcp.json</div>
            </code>
          </div>
          <p className="text-gray-600 mb-4">Добавь конфигурацию в <code className="bg-gray-100 px-2 py-1 rounded">.cursor/mcp.json</code>:</p>
          <div className="bg-gray-100 rounded-lg p-4">
            <code className="text-sm">
              {`{`}<br/>
              &nbsp;&nbsp;"mcpServers": {`{`}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"my-server": {`{`}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"command": "node",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"args": ["./mcp-servers/simple-server.js"]<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
              &nbsp;&nbsp;{`}`}<br/>
              {`}`}
            </code>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Шаг 3: Активация в Cursor</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-1 flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">1</span>
              </div>
              <p className="text-gray-600">Перезапусти Cursor полностью</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-1 flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">2</span>
              </div>
              <p className="text-gray-600">Открой Settings (Ctrl+,) → MCP Servers</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-1 flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">3</span>
              </div>
              <p className="text-gray-600">Включи галочку рядом с "my-server"</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-1 flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">4</span>
              </div>
              <p className="text-gray-600">Проверь что статус "Connected" и есть доступные инструменты</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Шаг 4: Тестирование</h3>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-green-800 mb-2">
              <strong>Открой Cursor Chat и напиши:</strong>
            </p>
            <div className="bg-white rounded p-3 border">
              <code className="text-gray-800">"Используй мой MCP-сервер для получения данных"</code>
            </div>
            <p className="text-green-700 text-sm mt-2">
              Если все настроено правильно, Cursor автоматически вызовет твой сервер!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-3">🚨 Частые проблемы</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-red-800">Сервер не подключается</h4>
            <p className="text-red-700 text-sm">Проверь путь к файлу в конфигурации и права на выполнение</p>
          </div>
          <div>
            <h4 className="font-medium text-red-800">"No tools available"</h4>
            <p className="text-red-700 text-sm">Убедись что сервер правильно экспортирует инструменты</p>
          </div>
          <div>
            <h4 className="font-medium text-red-800">Cursor не видит сервер</h4>
            <p className="text-red-700 text-sm">Перезапусти Cursor и проверь синтаксис mcp.json</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Examples() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Примеры MCP-серверов</h2>
      
      <div className="grid gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">📰 Сервер новостей (как в этом проекте)</h3>
          <p className="text-gray-600 mb-4">
            Получает актуальные новости об ИИ из разных источников
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm">
              <div>// Инструменты сервера:</div>
              <div>• get_ai_news() - последние новости</div>
              <div>• search_ai_news(query) - поиск по компаниям</div>
              <div>• get_market_data() - данные рынка ИИ</div>
            </code>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="text-blue-800 text-sm">
              <strong>Результат:</strong> Cursor автоматически обновляет новостную ленту актуальными данными
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">💾 Сервер базы данных</h3>
          <p className="text-gray-600 mb-4">
            Подключается к PostgreSQL и предоставляет доступ к данным
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm">
              <div>// Возможности:</div>
              <div>• get_users() - список пользователей</div>
              <div>• create_user(data) - создание пользователя</div>
              <div>• get_analytics() - аналитика</div>
              <div>• run_query(sql) - выполнение SQL</div>
            </code>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="text-green-800 text-sm">
              <strong>Применение:</strong> "Покажи топ-10 активных пользователей за неделю"
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">🔗 Сервер интеграций</h3>
          <p className="text-gray-600 mb-4">
            Работает с внешними API: Stripe, SendGrid, Slack и др.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm">
              <div>// Интеграции:</div>
              <div>• send_email(to, subject, body) - отправка email</div>
              <div>• create_payment(amount) - создание платежа</div>
              <div>• post_to_slack(message) - уведомления</div>
              <div>• deploy_to_vercel() - деплой</div>
            </code>
          </div>
          <div className="bg-purple-50 rounded p-4">
            <p className="text-purple-800 text-sm">
              <strong>Магия:</strong> "Отправь email всем пользователям о новой функции"
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">📁 Файловый сервер</h3>
          <p className="text-gray-600 mb-4">
            Управляет файлами проекта, создает компоненты, читает логи
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm">
              <div>// Файловые операции:</div>
              <div>• read_logs() - чтение логов</div>
              <div>• create_component(name) - создание React компонента</div>
              <div>• analyze_bundle() - анализ размера бандла</div>
              <div>• backup_project() - бэкап проекта</div>
            </code>
          </div>
          <div className="bg-orange-50 rounded p-4">
            <p className="text-orange-800 text-sm">
              <strong>Удобство:</strong> "Создай новый компонент UserProfile с TypeScript"
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Готовые MCP-серверы</h3>
        <p className="text-gray-600 mb-4">
          Сообщество уже создало множество готовых серверов:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-4">
            <h4 className="font-medium text-gray-900">Официальные</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• GitHub - работа с репозиториями</li>
              <li>• SQLite - локальные базы данных</li>
              <li>• Filesystem - файловые операции</li>
            </ul>
          </div>
          <div className="bg-white rounded p-4">
            <h4 className="font-medium text-gray-900">Сообщество</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Docker - управление контейнерами</li>
              <li>• AWS - облачные сервисы</li>
              <li>• Notion - работа с документами</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 