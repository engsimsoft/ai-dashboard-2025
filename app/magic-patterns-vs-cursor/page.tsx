"use server"

import { Header } from '@/components/header'
import Link from 'next/link'

export default async function MagicPatternsVsCursorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Magic Patterns vs Cursor: Сравнение AI-инструментов 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Детальное сравнение лидирующих AI-платформ для прототипирования и разработки
          </p>
        </div>

        {/* Краткий обзор */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="text-2xl font-bold text-purple-600">Magic Patterns</h2>
            </div>
            <p className="text-gray-700 mb-4">
              AI-платформа для прототипирования, специализирующаяся на создании UI-компонентов 
              и быстрой итерации дизайна с фокусом на пользовательскую обратную связь.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Более 1,000,000 созданных дизайнов
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Используется командами PwC, Grafana, NASCAR
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-600">Cursor</h2>
            </div>
            <p className="text-gray-700 mb-4">
              AI-редактор кода на базе VS Code, предназначенный для профессиональной разработки 
              с интеллектуальными возможностями автодополнения и генерации кода.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                7+ миллионов разработчиков
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Используется Fortune 1000 компаниями
              </div>
            </div>
          </div>
        </div>

        {/* Почему Magic Patterns выделяется */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Почему Magic Patterns выделяется среди AI-инструментов 2025</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Фокус на пользователях</h3>
              <p className="text-gray-700">
                Уникальная система сбора обратной связи позволяет делиться прототипами 
                через ссылку и получать структурированные отзывы пользователей
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Скорость итераций</h3>
              <p className="text-gray-700">
                Генерирует UI, соответствующий существующему продукту, позволяя 
                исследовать новые идеи за минуты, а не часы
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Дизайн-система</h3>
              <p className="text-gray-700">
                Импорт существующих дизайн-систем и точное соответствие стилю 
                вашего приложения без дополнительной настройки
              </p>
            </div>
          </div>
        </div>

        {/* Успешные кейсы */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Успешные кейсы применения Magic Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-purple-600">PwC - Корпоративные прототипы</h3>
              <p className="text-gray-700 mb-4">
                Команда PwC использует Magic Patterns для быстрого создания прототипов 
                корпоративных решений, сокращая время от идеи до тестирования с недель до дней.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Результат:</strong> 80% сокращение времени прототипирования
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Grafana - UI компоненты</h3>
              <p className="text-gray-700 mb-4">
                Команда Grafana применяет Magic Patterns для создания сложных компонентов 
                визуализации данных, поддерживая консистентность дизайн-системы.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Результат:</strong> Унифицированная библиотека из 50+ компонентов
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Стартапы - MVP разработка</h3>
              <p className="text-gray-700 mb-4">
                Более 100,000 стартапов используют Magic Patterns для создания MVP, 
                тестирования гипотез и привлечения инвестиций.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Результат:</strong> От идеи до рабочего прототипа за 1 день
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Enterprise - A/B тестирование</h3>
              <p className="text-gray-700 mb-4">
                Крупные компании используют платформу для быстрого создания вариантов 
                интерфейсов для A/B тестирования и оптимизации конверсии.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Результат:</strong> 300% увеличение количества экспериментов
              </div>
            </div>
          </div>
        </div>

        {/* Детальное сравнение */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Детальное сравнение функций</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold">Критерий</th>
                  <th className="text-center py-4 px-4 font-bold text-purple-600">Magic Patterns</th>
                  <th className="text-center py-4 px-4 font-bold text-blue-600">Cursor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Основное назначение</td>
                  <td className="py-4 px-4 text-center">UI прототипирование</td>
                  <td className="py-4 px-4 text-center">Разработка кода</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-4 px-4 font-medium">Скорость создания прототипа</td>
                  <td className="py-4 px-4 text-center text-green-600">⭐⭐⭐⭐⭐ (минуты)</td>
                  <td className="py-4 px-4 text-center text-yellow-600">⭐⭐⭐ (часы)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Качество кода</td>
                  <td className="py-4 px-4 text-center text-yellow-600">⭐⭐⭐ (базовый)</td>
                  <td className="py-4 px-4 text-center text-green-600">⭐⭐⭐⭐⭐ (продакшн)</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-4 px-4 font-medium">Пользовательское тестирование</td>
                  <td className="py-4 px-4 text-center text-green-600">⭐⭐⭐⭐⭐ (встроено)</td>
                  <td className="py-4 px-4 text-center text-red-600">⭐ (отсутствует)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Командная работа</td>
                  <td className="py-4 px-4 text-center text-green-600">⭐⭐⭐⭐ (реальное время)</td>
                  <td className="py-4 px-4 text-center text-green-600">⭐⭐⭐⭐ (через Git)</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-4 px-4 font-medium">Кривая обучения</td>
                  <td className="py-4 px-4 text-center text-green-600">⭐⭐⭐⭐⭐ (простая)</td>
                  <td className="py-4 px-4 text-center text-yellow-600">⭐⭐⭐ (средняя)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Стоимость</td>
                  <td className="py-4 px-4 text-center">Бесплатно + платные планы</td>
                  <td className="py-4 px-4 text-center">$20/месяц (Pro)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Когда использовать что */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Выбирайте Magic Patterns если:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Нужно быстро создать и протестировать UI прототип</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Важна обратная связь от пользователей</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Работаете в команде дизайнеров</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Создаете MVP или тестируете гипотезы</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Нужна интеграция с дизайн-системой</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Выбирайте Cursor если:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Разрабатываете продакшн-готовое приложение</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Нужен полный контроль над кодом</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Работаете с существующей кодовой базой</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Требуется интеграция с backend</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Команда разработчиков</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Заключение */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Заключение</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-6">
              Magic Patterns и Cursor решают разные задачи в экосистеме разработки. 
              Magic Patterns превосходит в быстром прототипировании и пользовательском тестировании, 
              в то время как Cursor лидирует в профессиональной разработке.
            </p>
            <p className="text-lg mb-8">
              Для максимальной эффективности многие команды используют оба инструмента: 
              Magic Patterns для быстрой валидации идей, а Cursor для их реализации в продакшне.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://www.magicpatterns.com/" 
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors"
                target="_blank"
              >
                Попробовать Magic Patterns
              </Link>
              <Link 
                href="https://cursor.sh/" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
                target="_blank"
              >
                Скачать Cursor
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 