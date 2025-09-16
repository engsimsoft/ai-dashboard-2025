"use server"

import { CodingModelCards } from './_components/coding-model-cards'
import { CodingComparisonTable } from './_components/coding-comparison-table'
import Link from 'next/link'
import { Header } from '@/components/header'

export default async function AICodingModelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Лучшие модели ИИ для программирования 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Профессиональный анализ топовых моделей ИИ для разработки кода. Актуальные данные на сентябрь 2025 с реальными бенчмарками, ценами и глубокой технической экспертизой.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Обновлено: 16 сентября 2025 • Включены: Claude Sonnet 4, GPT-4o, DeepSeek-Coder V2.5 и другие
          </div>
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

          {/* Главные модели */}
          <h2 className="text-3xl font-bold mb-6 text-center">Топ-8 моделей для программирования</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Сравнение лидирующих инструментов на основе реальных бенчмарков: HumanEval, MBPP, SWE-bench
          </p>

          <CodingModelCards />

          {/* Детальная сравнительная таблица */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Детальное сравнение характеристик</h2>
            <CodingComparisonTable />
          </div>

          {/* Экспертные рекомендации по выбору */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">🎯 Экспертные рекомендации по выбору</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-3 text-blue-700">🏆 Claude 3.5 Sonnet</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Лидер для сложных задач.</strong> Лучший reasoning, Computer Use для автономного программирования, Artifacts для интерактивной разработки.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $3/$15 за млн токенов
                </div>
                <div className="text-sm text-blue-700">
                  <strong>Идеально для:</strong> Архитектура, сложная логика, AI-агенты, рефакторинг legacy кода
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-3 text-green-700">🔄 GPT-4o</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Универсальный инструмент.</strong> Отличная интеграция с экосистемой разработки, мультимодальность, быстрый отклик.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $5/$15 за млн токенов
                </div>
                <div className="text-sm text-green-700">
                  <strong>Идеально для:</strong> Веб-разработка, интеграции, прототипирование, работа с изображениями
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold mb-3 text-orange-700">🚀 DeepSeek-Coder V2.5</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Лучший open source.</strong> Высокие результаты на бенчмарках, локальное развертывание, полный контроль данных.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> Бесплатно (Open Source)
                </div>
                <div className="text-sm text-orange-700">
                  <strong>Идеально для:</strong> Локальная разработка, enterprise с требованиями безопасности, эксперименты
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold mb-3 text-purple-700">📊 Gemini 1.5 Pro</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Для больших проектов.</strong> 1M токенов контекста позволяет обрабатывать огромные кодовые базы целиком.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $7/$21 за млн токенов
                </div>
                <div className="text-sm text-purple-700">
                  <strong>Идеально для:</strong> Анализ больших проектов, документация, миграция legacy систем
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-3 text-red-700">⚡ Codestral</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Скорость превыше всего.</strong> Минимальная латентность для реального времени, streaming completion в IDE.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> $1/$3 за млн токенов
                </div>
                <div className="text-sm text-red-700">
                  <strong>Идеально для:</strong> Автодополнение в реальном времени, быстрое прототипирование
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">🏢 Code Llama 70B</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Enterprise решение.</strong> Open source с возможностями fine-tuning под специфические задачи компании.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> Бесплатно (Open Source)
                </div>
                <div className="text-sm text-indigo-700">
                  <strong>Идеально для:</strong> Кастомизация под домен, корпоративные стандарты, специфические языки
                </div>
              </div>

            </div>
          </div>

          {/* Революционные тренды программирования 2025 */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">🚀 Революционные тренды программирования 2025</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">🤖 AI-Агенты и Computer Use</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">▸</span>
                    <span><strong>Computer Use:</strong> Claude может управлять экраном, писать и запускать код автономно</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">▸</span>
                    <span><strong>Artifacts:</strong> Интерактивная генерация с возможностью редактирования</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">▸</span>
                    <span><strong>Multi-step reasoning:</strong> Планирование сложных архитектурных решений</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">▸</span>
                    <span><strong>Автономная отладка:</strong> Поиск и исправление багов без участия человека</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-600">🔧 Интеграция в рабочий процесс</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">▸</span>
                    <span><strong>IDE нативная поддержка:</strong> VS Code, Cursor, JetBrains встроенная интеграция</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">▸</span>
                    <span><strong>Streaming completion:</strong> Код генерируется в реальном времени по мере набора</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">▸</span>
                    <span><strong>Context awareness:</strong> Понимание всей кодовой базы проекта</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">▸</span>
                    <span><strong>Git интеграция:</strong> Автоматические commit messages, PR reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Технические достижения */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">📈 Технические достижения 2025</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">88%+</div>
                <div className="text-sm text-gray-600 mb-1">HumanEval Score</div>
                <div className="text-xs text-gray-500">Лидирующие модели превышают 88% точности</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2M</div>
                <div className="text-sm text-gray-600 mb-1">Токенов контекста</div>
                <div className="text-xs text-gray-500">Gemini 1.5 Pro обрабатывает огромные проекты</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">&lt;100ms</div>
                <div className="text-sm text-gray-600 mb-1">Латентность</div>
                <div className="text-xs text-gray-500">Codestral для реального времени</div>
              </div>
            </div>
          </div>

          {/* Новые бенчмарки */}
          <div className="mt-12 bg-yellow-50 p-8 rounded-lg border border-yellow-200">
            <h2 className="text-3xl font-bold mb-6 text-center text-yellow-800">📊 Современные бенчмарки оценки</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-yellow-700 mb-2">HumanEval</h4>
                <p className="text-gray-600">164 задачи программирования на Python. Классический бенчмарк для базовой генерации кода.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-yellow-700 mb-2">MBPP</h4>
                <p className="text-gray-600">Mostly Basic Python Problems - практические задачи ближе к реальной разработке.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-yellow-700 mb-2">SWE-bench</h4>
                <p className="text-gray-600">Software Engineering benchmark - решение реальных GitHub issues. Самый сложный тест.</p>
              </div>
            </div>
          </div>

          {/* Области применения 2025 */}
          <div className="mt-12 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">💼 Ключевые области применения 2025</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-800 mb-3">🏗️ Архитектура ПО</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Проектирование систем</li>
                  <li>• Выбор паттернов</li>
                  <li>• Code review</li>
                  <li>• Рефакторинг legacy</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-800 mb-3">🚀 Разработка MVP</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Быстрое прототипирование</li>
                  <li>• Генерация boilerplate</li>
                  <li>• API интеграции</li>
                  <li>• UI компоненты</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-800 mb-3">🔍 DevOps автоматизация</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• CI/CD pipeline скрипты</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Мониторинг систем</li>
                  <li>• Docker контейнеризация</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-800 mb-3">📚 Обучение и документация</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Объяснение сложного кода</li>
                  <li>• Генерация документации</li>
                  <li>• Код тьютори  алы</li>
                  <li>• Примеры использования</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Заключение эксперта */}
          <div className="mt-12 bg-gradient-to-r from-gray-800 to-blue-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">🎯 Заключение эксперта</h2>
            <div className="text-lg leading-relaxed">
              <p className="mb-4">
                <strong>Сентябрь 2025 знаменует новую эру AI-ассистированного программирования.</strong> Claude 3.5 Sonnet с Computer Use революционизирует автономное программирование, а DeepSeek-Coder V2.5 демократизирует доступ к топовым возможностям через open source.
              </p>
              <p className="mb-4">
                Ключевой тренд - переход от простой генерации кода к <strong>полноценным AI-агентам</strong>, способным планировать, разрабатывать и тестировать решения самостоятельно. Это требует пересмотра процессов разработки и новых навыков от программистов.
              </p>
              <p className="text-blue-200">
                <em>Рекомендация:</em> Начните с Claude 3.5 Sonnet для изучения possibilities, дополните DeepSeek-Coder для локальной разработки и используйте специализированные модели для конкретных задач. Будущее программирования - в симбиозе человека и ИИ.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}