"use server"

import Link from 'next/link'
import { Header } from '@/components/header'

export default async function CursorVsCompetitorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cursor vs Конкуренты: Детальное сравнение
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Глубокий анализ Cursor против Cline, Claude Code и Devin в программировании
          </p>
        </div>
        
        {/* Hero section */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Битва AI-ассистентов для кода</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            В 2025 году рынок AI-инструментов для программирования стал невероятно конкурентным. 
            Cursor, как AI-первая IDE, сражается с инновационными решениями вроде Cline, 
            премиум-инструментами как Claude Code и автономными агентами типа Devin.
          </p>
        </div>

        {/* Main Competitors Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Основные конкуренты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Cursor</h3>
              <p className="text-sm text-blue-600">AI-первая IDE с агентным режимом</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Cline</h3>
              <p className="text-sm text-purple-600">Open-source коллаборативный ассистент</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💻</span>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Claude Code</h3>
              <p className="text-sm text-green-600">Премиум терминальный ассистент</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Devin</h3>
              <p className="text-sm text-red-600">Автономный AI-инженер</p>
            </div>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Детальное сравнение</h2>
          
          {/* Cursor vs Cline */}
          <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Cursor vs Cline</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-600 mb-4">🎯 Cursor</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Подход:</strong> Полноценная AI-первая IDE с глубокой интеграцией
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Агентный режим:</strong> Может выполнять высокоуровневые задачи автономно
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Модели:</strong> Использует OpenAI/Anthropic (закрытые модели)
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>UX:</strong> Полированный интерфейс, простота использования
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <strong>Недостатки:</strong> Подписка, зависимость от провайдера, меньше контроля
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-purple-600 mb-4">🔧 Cline</h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <strong>Подход:</strong> Расширение для существующих IDE (VS Code)
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <strong>Коллаборация:</strong> Больше вопросов, интерактивное взаимодействие
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <strong>Модели:</strong> Open-source, можно использовать любые модели
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <strong>Контроль:</strong> Полная прозрачность, настраиваемость
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <strong>Недостатки:</strong> Требует настройки, менее полированный UX
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h5 className="font-bold mb-2">🏆 Вердикт:</h5>
              <p className="text-gray-700">
                <strong>Cursor</strong> лучше для быстрого старта и продуктивности "из коробки". 
                <strong>Cline</strong> предпочтительнее для команд, которым нужен контроль и настройка под специфические нужды.
              </p>
            </div>
          </div>

          {/* Cursor vs Claude Code */}
          <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Cursor vs Claude Code</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-600 mb-4">🎯 Cursor</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Интерфейс:</strong> Графический редактор с AI-интеграцией
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Workflow:</strong> Визуальное программирование с AI-помощью
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Цена:</strong> Фиксированная подписка (~$20/месяц)
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Аудитория:</strong> Разработчики всех уровней
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <strong>Недостатки:</strong> Менее гибкий для терминальных workflow
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-green-600 mb-4">💻 Claude Code</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <strong>Интерфейс:</strong> Работает в терминале, командная строка
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <strong>Качество:</strong> Генерирует код более высокого качества
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <strong>Цена:</strong> Дорого, pay-per-use модель
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <strong>Аудитория:</strong> Профессиональные разработчики
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <strong>Недостатки:</strong> Высокая цена, только терминал, крутая кривая обучения
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h5 className="font-bold mb-2">🏆 Вердикт:</h5>
              <p className="text-gray-700">
                <strong>Cursor</strong> лучше для большинства разработчиков благодаря балансу цены и функциональности. 
                <strong>Claude Code</strong> стоит выбирать, если качество кода критично и бюджет позволяет.
              </p>
            </div>
          </div>

          {/* Cursor vs Devin */}
          <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Cursor vs Devin</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-600 mb-4">🎯 Cursor</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Роль:</strong> AI-ассистент для разработчика
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Контроль:</strong> Разработчик остается в контроле процесса
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Задачи:</strong> Помощь в написании кода, рефакторинг
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Скорость:</strong> Быстрые итерации, мгновенная обратная связь
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <strong>Недостатки:</strong> Требует активного участия разработчика
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-red-600 mb-4">🤖 Devin</h4>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <strong>Роль:</strong> Автономный AI-инженер
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <strong>Автономность:</strong> Может работать самостоятельно часами
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <strong>Задачи:</strong> Полные проекты, тестирование, деплой
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <strong>Возможности:</strong> Веб-поиск, браузер, полная среда разработки
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <strong>Недостатки:</strong> Дорого, медленно, может "уйти не туда"
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h5 className="font-bold mb-2">🏆 Вердикт:</h5>
              <p className="text-gray-700">
                <strong>Cursor</strong> идеален для ежедневной разработки и быстрых итераций. 
                <strong>Devin</strong> подходит для автономных задач и экспериментов, когда время не критично.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Comparison Matrix */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Матрица сравнения функций</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Критерий</th>
                  <th className="px-4 py-3 text-center font-semibold">Cursor</th>
                  <th className="px-4 py-3 text-center font-semibold">Cline</th>
                  <th className="px-4 py-3 text-center font-semibold">Claude Code</th>
                  <th className="px-4 py-3 text-center font-semibold">Devin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">Простота установки</td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Отлично</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средне</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Хорошо</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Сложно</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Качество кода</td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Хорошо</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Хорошо</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Отлично</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средне</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Скорость работы</td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Быстро</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Быстро</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средне</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Медленно</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Автономность</td>
                  <td className="px-4 py-3 text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Низкая</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Низкая</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Высокая</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Стоимость</td>
                  <td className="px-4 py-3 text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">$20/мес</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Бесплатно</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Дорого</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Премиум</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Приватность</td>
                  <td className="px-4 py-3 text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Высокая</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Низкая</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Настраиваемость</td>
                  <td className="px-4 py-3 text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Средняя</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Высокая</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Низкая</span></td>
                  <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Низкая</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Сценарии использования</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">🎯 Выбирайте Cursor, если:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Нужна продуктивность "из коробки"</li>
                <li>• Работаете в команде с разными уровнями опыта</li>
                <li>• Важен баланс функций и простоты</li>
                <li>• Нужен агентный режим для сложных задач</li>
                <li>• Готовы платить за удобство</li>
                <li>• Работаете с популярными языками и фреймворками</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">🔧 Выбирайте Cline, если:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Нужен полный контроль над инструментом</li>
                <li>• Работаете с чувствительным кодом</li>
                <li>• Хотите использовать собственные модели</li>
                <li>• Предпочитаете open-source решения</li>
                <li>• Готовы потратить время на настройку</li>
                <li>• Нужна интеграция с существующим workflow</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">💻 Выбирайте Claude Code, если:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Качество кода - приоритет №1</li>
                <li>• Работаете с критически важными проектами</li>
                <li>• Комфортно работать в терминале</li>
                <li>• Бюджет позволяет премиум-решения</li>
                <li>• Нужны лучшие возможности рефакторинга</li>
                <li>• Работаете с legacy кодом</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">🤖 Выбирайте Devin, если:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Нужен автономный разработчик</li>
                <li>• Работаете над экспериментальными проектами</li>
                <li>• Время не критично</li>
                <li>• Хотите делегировать рутинные задачи</li>
                <li>• Нужны возможности веб-исследования</li>
                <li>• Готовы к непредсказуемым результатам</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Benchmarks */}
        <div className="mb-12 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Бенчмарки производительности</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">⚡ Скорость выполнения задач</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Cursor</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cline</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="text-sm">80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Claude Code</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <span className="text-sm">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Devin</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <span className="text-sm">40%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">🎯 Точность решений</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Claude Code</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <span className="text-sm">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cursor</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                  <span className="text-sm">88%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cline</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Devin</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <span className="text-sm">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Recommendations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Итоговые рекомендации</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-green-700">🥇 Для большинства команд</h3>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-blue-600 mt-2">Cursor</h4>
              </div>
              <p className="text-sm text-green-700">
                Лучший баланс функциональности, простоты и цены. 
                Идеален для продуктивной разработки в команде.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-blue-700">🔒 Для корпораций</h3>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h4 className="text-xl font-bold text-purple-600 mt-2">Cline</h4>
              </div>
              <p className="text-sm text-blue-700">
                Максимальный контроль, безопасность и настраиваемость. 
                Лучший выбор для чувствительных проектов.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-yellow-700">💎 Для премиум-проектов</h3>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">💻</span>
                </div>
                <h4 className="text-xl font-bold text-green-600 mt-2">Claude Code</h4>
              </div>
              <p className="text-sm text-yellow-700">
                Высочайшее качество кода для критически важных проектов. 
                Стоит своих денег для профессионалов.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Выбор за вами</h2>
          <p className="text-lg mb-6">
            Каждый инструмент имеет свои сильные стороны. Выбирайте тот, 
            который лучше всего подходит под ваши задачи и команду.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/ai-coding-platforms"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Все AI-платформы
            </Link>
            <Link 
              href="/dark-horses"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
            >
              Темные лошадки
            </Link>
            <Link 
              href="/comparison"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
            >
              Сравнение ассистентов
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 