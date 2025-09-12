"use server"

import Link from 'next/link'
import { Header } from '@/components/header'

export default async function DarkHorsesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            "Темные лошадки" среди AI-инструментов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Перспективные AI-инструменты, за которыми стоит следить в 2025 году
          </p>
        </div>
        
        <div className="min-h-screen p-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <Link 
                href="/" 
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Назад к дашборду
              </Link>
            </div>
            
            {/* Hero section */}
            <div className="mb-12 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Что такое "темные лошадки"?</h2>
              <p className="text-gray-700 text-center max-w-4xl mx-auto">
                Помимо основных игроков рынка AI, существует множество инновационных инструментов, 
                которые могут кардинально изменить индустрию. Эти "темные лошадки" часто предлагают 
                уникальные подходы и решения, которых нет у гигантов.
              </p>
            </div>

            {/* Development Tools */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Инструменты разработки</h2>
              <div className="grid md:grid-cols-2 gap-8">
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-600">Cline</h3>
                      <p className="text-sm text-gray-500">VS Code альтернатива с открытым кодом</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Работает в вашей существующей IDE и пытается быть более коллаборативным, 
                    чем Cursor/Windsurf. Задает больше вопросов и активно взаимодействует с разработчиком.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Open Source</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">VS Code</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Collaborative</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Особенности:</strong> Интерактивное взаимодействие, работа с существующими IDE, открытый исходный код
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-600">Claude Code</h3>
                      <p className="text-sm text-gray-500">Терминальный AI-ассистент</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Работает непосредственно в вашем терминале. Генерирует код более высокого качества, 
                    чем AI-IDE, но стоит дороже. Идеален для профессиональных разработчиков.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Terminal</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Premium</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">High Quality</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Особенности:</strong> Высокое качество кода, работа в терминале, премиум-цена
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">HeyBoss</h3>
                      <p className="text-sm text-gray-500">Генератор полноценных приложений</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Пытается генерировать полноценное приложение за один раз. Подобно Replit, 
                    агент HeyBoss работает дольше, но создает приложения целиком с уникальными дизайнерскими решениями.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Full App</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Agent</span>
                    <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">Design</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Особенности:</strong> Полные приложения, агентный подход, уникальный дизайн
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-600">Devin</h3>
                      <p className="text-sm text-gray-500">Автономный AI-инженер</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Действует как полностью автономный AI-инженер. Может самостоятельно запускать кодовые базы, 
                    искать в интернете и тестировать в браузерах. Claire Vo активно использует и рекомендует.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Autonomous</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Web Search</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Testing</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Особенности:</strong> Полная автономность, веб-поиск, автоматическое тестирование
                  </div>
                </div>
              </div>
            </div>

            {/* UX/Design Tools */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Инструменты для UX и дизайна</h2>
              <div className="grid md:grid-cols-2 gap-8">
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-600">Magic Patterns</h3>
                      <p className="text-sm text-gray-500">Оптимизация пользовательской обратной связи</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Оптимизирует процесс получения обратной связи от пользователей. 
                    Вы можете поделиться прототипом по ссылке и легко предложить пользователям заполнить форму обратной связи.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Feedback</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Prototyping</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">UX Research</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Особенности:</strong> Быстрая обратная связь, простое распространение, интеграция с прототипированием
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎬</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-indigo-600">Descript</h3>
                      <p className="text-sm text-gray-500">AI-редактор видео и подкастов</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Революционный подход к редактированию видео - редактирование через текст. 
                    AI автоматически создает субтитры, клоны голоса и профессиональные видео.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Video AI</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Voice Clone</span>
                    <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">Captions</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Особенности:</strong> Текстовое редактирование видео, клоны голоса, автоматические субтитры
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Tools */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Специализированные инструменты</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🏇</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-600">DarkHorse Sports Analytics</h3>
                    <p className="text-sm text-gray-500">AI для спортивной аналитики</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Специализированная платформа для спортивной аналитики, которая использует машинное обучение 
                  для автоматического создания профессиональных видео-подборок игроков. Революционизирует спортивный рекрутинг.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold text-sm mb-2">Ключевые особенности:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Автоматический анализ видео игр</li>
                      <li>• Ранжирование игроков по позициям</li>
                      <li>• Классификация игровых моментов</li>
                      <li>• Профессиональные highlight reels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-2">Партнеры:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 45+ футбольных клубов</li>
                      <li>• Университетские программы</li>
                      <li>• Профессиональные скауты</li>
                      <li>• Экономия 120+ часов для клубов</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Matrix */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Сравнительная матрица</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Инструмент</th>
                      <th className="px-4 py-3 text-left font-semibold">Категория</th>
                      <th className="px-4 py-3 text-left font-semibold">Ключевая особенность</th>
                      <th className="px-4 py-3 text-left font-semibold">Сложность</th>
                      <th className="px-4 py-3 text-left font-semibold">Цена</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">Cline</td>
                      <td className="px-4 py-3 text-gray-600">IDE Enhancement</td>
                      <td className="px-4 py-3 text-gray-600">Коллаборативность</td>
                      <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Низкая</span></td>
                      <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Бесплатно</span></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Claude Code</td>
                      <td className="px-4 py-3 text-gray-600">Terminal Tool</td>
                      <td className="px-4 py-3 text-gray-600">Качество кода</td>
                      <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                      <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Дорого</span></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">HeyBoss</td>
                      <td className="px-4 py-3 text-gray-600">App Generator</td>
                      <td className="px-4 py-3 text-gray-600">Полные приложения</td>
                      <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Низкая</span></td>
                      <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Devin</td>
                      <td className="px-4 py-3 text-gray-600">AI Engineer</td>
                      <td className="px-4 py-3 text-gray-600">Автономность</td>
                      <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Высокая</span></td>
                      <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Премиум</span></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Magic Patterns</td>
                      <td className="px-4 py-3 text-gray-600">UX Research</td>
                      <td className="px-4 py-3 text-gray-600">Обратная связь</td>
                      <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Низкая</span></td>
                      <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Descript</td>
                      <td className="px-4 py-3 text-gray-600">Video AI</td>
                      <td className="px-4 py-3 text-gray-600">Текстовое редактирование</td>
                      <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                      <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Future Trends */}
            <div className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">Тренды "темных лошадок" 2025</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-bold mb-3 text-purple-600">🔬 Специализация</h3>
                  <p className="text-gray-700 text-sm">
                    Инструменты становятся более узкоспециализированными, решая конкретные проблемы 
                    лучше, чем универсальные решения.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-bold mb-3 text-pink-600">🤝 Коллаборация</h3>
                  <p className="text-gray-700 text-sm">
                    Акцент на совместной работе человека и AI, где инструмент становится 
                    интеллектуальным партнером, а не заменой.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-bold mb-3 text-indigo-600">🔓 Открытость</h3>
                  <p className="text-gray-700 text-sm">
                    Растет количество open-source решений, что делает AI-инструменты 
                    доступнее и настраиваемее.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Следите за развитием</h2>
              <p className="text-lg mb-6">
                Мир AI-инструментов развивается стремительно. Сегодняшние "темные лошадки" 
                могут стать лидерами рынка уже завтра.
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/ai-coding-platforms"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Сравнить с лидерами
                </Link>
                <Link 
                  href="/comparison"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
                >
                  Все сравнения
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 