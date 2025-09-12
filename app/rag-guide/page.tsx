"use server"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Brain, Database, Search, Zap, BookOpen, Users, CheckCircle } from 'lucide-react'

export default async function RAGGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            RAG: Полное руководство
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простое объяснение Retrieval-Augmented Generation и как использовать эту технологию в ваших проектах
          </p>
        </div>

        {/* Что такое RAG */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Что такое RAG?</h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>RAG (Retrieval-Augmented Generation)</strong> — это технология, которая улучшает ответы ИИ, добавляя к ним актуальную информацию из внешних источников.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Простая аналогия</h3>
              <p className="text-blue-800">
                Представьте судью в суде. Он знает много законов (это как ИИ-модель), но для конкретного дела ему нужны специальные документы и прецеденты. Помощник идет в библиотеку, находит нужные материалы и приносит судье. Теперь судья может дать более точное решение. RAG работает так же — помогает ИИ найти нужную информацию перед ответом.
              </p>
            </div>
          </div>
        </section>

        {/* Как работает RAG */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Как работает RAG?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Поиск</h3>
              <p className="text-gray-600">ИИ ищет релевантную информацию в базе знаний по вашему вопросу</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Извлечение</h3>
              <p className="text-gray-600">Система извлекает подходящие документы и фрагменты текста</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Генерация</h3>
              <p className="text-gray-600">ИИ объединяет найденную информацию со своими знаниями для ответа</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Пример работы:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <p className="text-gray-700"><strong>Вопрос:</strong> "Какие новые функции добавили в Next.js 14?"</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <p className="text-gray-700"><strong>Поиск в базе:</strong> Система находит документацию Next.js 14, релиз-ноты, статьи</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <p className="text-gray-700"><strong>Ответ:</strong> ИИ дает точный ответ с ссылками на источники</p>
              </div>
            </div>
          </div>
        </section>

        {/* Для каких проектов подходит */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Для каких проектов подходит RAG?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Отлично подходит для:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Документации и справочники</strong> — когда нужны точные ответы из большой базы знаний</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Корпоративные чат-боты</strong> — для ответов по внутренним процедурам компании</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Образовательные платформы</strong> — для персонализированного обучения</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Медицинские системы</strong> — для поиска в медицинской литературе</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Юридические консультации</strong> — поиск в базах законов и прецедентов</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-600 flex items-center">
                <span className="w-5 h-5 mr-2 text-red-500">❌</span>
                Не лучший выбор для:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Креативных задач</strong> — написание стихов, создание сюжетов</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Простых вычислений</strong> — обычный калькулятор справится лучше</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Общих разговоров</strong> — когда не нужна специфическая информация</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* RAG в онлайн обучении */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">RAG в онлайн обучении</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              В сфере образования RAG открывает невероятные возможности для персонализированного обучения:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">🎯 Персональный ИИ-репетитор</h3>
                <p className="text-gray-700 mb-4">
                  Система анализирует прогресс студента и подбирает материалы под его уровень. Если студент изучает JavaScript, RAG найдет подходящие примеры кода, упражнения и объяснения.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                  <strong>Пример:</strong> "Объясни замыкания в JavaScript для начинающего" → система найдет простые примеры и пошаговые объяснения
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-600 mb-3">📚 Умный поиск по курсам</h3>
                <p className="text-gray-700 mb-4">
                  Студент может задать вопрос на естественном языке, и система найдет ответ среди всех курсов, лекций и материалов платформы.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                  <strong>Пример:</strong> "Как развернуть приложение на Vercel?" → ответ из курса по деплойменту + актуальная документация
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">🔄 Адаптивное обучение</h3>
                <p className="text-gray-700 mb-4">
                  RAG отслеживает ошибки студента и предлагает дополнительные материалы для проблемных тем.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                  <strong>Пример:</strong> Студент путается в React hooks → система предложит дополнительные примеры и упражнения
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">🎓 Интеллектуальная оценка</h3>
                <p className="text-gray-700 mb-4">
                  Система может оценивать код студента, сравнивая с лучшими практиками из базы знаний.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                  <strong>Пример:</strong> Анализ кода → "Хорошо, но можно оптимизировать используя useMemo" + примеры
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Пример реализации */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-world пример: Платформа для изучения программирования</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Архитектура системы:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-700">База знаний</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Курсы и лекции</li>
                    <li>• Примеры кода</li>
                    <li>• Документация</li>
                    <li>• Упражнения</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-700">Пользовательские данные</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Прогресс обучения</li>
                    <li>• Ошибки и затруднения</li>
                    <li>• Предпочтения</li>
                    <li>• История вопросов</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-700">ИИ-система</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Поиск материалов</li>
                    <li>• Генерация ответов</li>
                    <li>• Рекомендации</li>
                    <li>• Оценка кода</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Преимущества для студентов:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center"><Users className="w-4 h-4 mr-2" /> Персонализированное обучение</li>
                  <li className="flex items-center"><Search className="w-4 h-4 mr-2" /> Мгновенные ответы на вопросы</li>
                  <li className="flex items-center"><BookOpen className="w-4 h-4 mr-2" /> Адаптивный учебный план</li>
                </ul>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Проверка кода в real-time</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 mr-2" /> Ускоренное освоение материала</li>
                  <li className="flex items-center"><Brain className="w-4 h-4 mr-2" /> Интеллектуальные подсказки</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Заключение */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Заключение</h2>
          <div className="space-y-4 text-lg">
            <p>
              RAG — это мост между универсальными знаниями ИИ и специфическими потребностями вашего проекта. Эта технология особенно мощна в образовании, где может создать по-настоящему персонализированный опыт обучения.
            </p>
            <p>
              Главное преимущество RAG — он делает ИИ не просто умным, а <strong>актуальным и точным</strong> для вашей конкретной области.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-black/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🚀 Готовы внедрить RAG?</h3>
            <p className="text-gray-200">
              Начните с простого: определите вашу базу знаний, выберите подходящий vector database (как Pinecone или Weaviate), и интегрируйте с ИИ-моделью через API. Популярные инструменты: LangChain, LlamaIndex, или AWS Bedrock.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 