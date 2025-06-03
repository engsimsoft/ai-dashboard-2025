"use server"

import { ClaudeModelCards } from './_components/claude-model-cards'
import { ClaudeComparisonTable } from './_components/claude-comparison-table'
import { ClaudePricingChart } from './_components/claude-pricing-chart'
import Link from 'next/link'
import { Header } from '@/components/header'

export default async function ClaudeModelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Сравнение моделей Claude
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подробный анализ всех моделей Claude от Anthropic
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link 
              href="/" 
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Назад к дашборду
            </Link>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center">Сравнение моделей Claude 2025</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Полное руководство по выбору подходящей модели Claude для ваших задач
          </p>
          
          <ClaudeModelCards />
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Сравнительная таблица</h2>
            <ClaudeComparisonTable />
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Ценообразование</h2>
            <ClaudePricingChart />
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Рекомендации по выбору</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Claude 4 Opus</h3>
                <p className="text-gray-700 mb-4">
                  Самая мощная модель для сложных задач программирования и анализа. 
                  Лидер в SWE-bench (72.5%) и Terminal-bench (43.2%).
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $15/$75 за млн токенов (ввод/вывод)
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Разработка ПО, сложные алгоритмы, исследования
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-green-600">Claude 4 Sonnet</h3>
                <p className="text-gray-700 mb-4">
                  Сбалансированная модель с отличным соотношением производительности и стоимости. 
                  Превосходит в кодировании (72.7% SWE-bench).
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $3/$15 за млн токенов (ввод/вывод)
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Общие задачи, бизнес-приложения, автоматизация
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Claude 3.7 Sonnet</h3>
                <p className="text-gray-700 mb-4">
                  Гибридная модель с расширенным мышлением. Уникальная функция "extended thinking" 
                  для пошагового анализа сложных задач.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $3/$15 за млн токенов + токены мышления
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Аналитика, исследования, обучение
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Claude 3.5 Haiku</h3>
                <p className="text-gray-700 mb-4">
                  Быстрая и экономичная модель для повседневных задач. 
                  Отличная производительность при низкой стоимости.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $0.80/$4.00 за млн токенов (ввод/вывод)
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Чат-боты, быстрые запросы, массовая обработка
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-red-600">Claude 3 Haiku</h3>
                <p className="text-gray-700 mb-4">
                  Самая доступная модель для простых задач. 
                  Идеальна для экспериментов и обучения.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $0.25/$1.25 за млн токенов (ввод/вывод)
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Простые запросы, прототипирование, обучение
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Claude 3 Opus</h3>
                <p className="text-gray-700 mb-4">
                  Предыдущее поколение флагманской модели. 
                  Все еще мощная для сложных творческих задач.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $15/$75 за млн токенов (ввод/вывод)
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Творческое письмо, анализ, legacy проекты
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Ключевые особенности</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Новые возможности Claude 4</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Extended thinking:</strong> Видимое пошаговое рассуждение</li>
                  <li>• <strong>Tool use:</strong> Использование инструментов во время мышления</li>
                  <li>• <strong>Memory capabilities:</strong> Создание и поддержка файлов памяти</li>
                  <li>• <strong>Parallel tool execution:</strong> Одновременное использование инструментов</li>
                  <li>• <strong>Improved steerability:</strong> Лучший контроль над выполнением</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Технические характеристики</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Контекстное окно:</strong> 200K токенов (стандарт)</li>
                  <li>• <strong>Максимальный вывод:</strong> до 128K токенов (Claude 3.7)</li>
                  <li>• <strong>Мультимодальность:</strong> Текст + изображения</li>
                  <li>• <strong>Языки:</strong> Поддержка множества языков</li>
                  <li>• <strong>API:</strong> Anthropic, AWS Bedrock, Google Cloud</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 