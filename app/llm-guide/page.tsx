"use server"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Brain, AlertTriangle, Search, Database, Zap, BookOpen, Users, CheckCircle, Calculator, Building2, Lightbulb, TrendingUp } from 'lucide-react'

export default async function LLMGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LLM и RAG: От проблем к решениям
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полное руководство по Large Language Models, их ограничениям и тому, как RAG помогает создавать надежные ИИ-системы
          </p>
        </div>

        {/* Что такое LLM */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Что такое LLM и почему это важно?</h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Large Language Models (LLM)</strong> — это ИИ-системы, обученные на огромных объемах текста для понимания и генерации человеческого языка.
            </p>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Простая аналогия</h3>
              <p className="text-purple-800">
                LLM похож на очень образованного человека, который прочитал всю Википедию, миллионы статей и книг, запомнил все это и может цитировать по памяти. Он понимает контекст и может генерировать новые тексты на основе изученного.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Как работает LLM:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-gray-700"><strong>Обучение:</strong> Модель изучает миллиарды текстов из интернета</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-gray-700"><strong>Анализ запроса:</strong> Понимает контекст вашего вопроса</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-gray-700"><strong>Генерация ответа:</strong> Создает текст на основе изученных паттернов</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Проблемы LLM */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Проблемы LLM: когда умный становится опасным</h2>
          </div>
          
          <div className="space-y-8">
            {/* Галлюцинации */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">🚨 Проблема #1: Галлюцинации</h3>
              <p className="text-gray-700 mb-4">
                LLM может уверенно сообщать выдуманную информацию, которая звучит очень правдоподобно.
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Реальный пример галлюцинации:</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Вопрос:</span>
                    <p className="text-gray-600">"Расскажи о книге 'Цифровая трансформация России' автора Петрова И.В."</p>
                  </div>
                  <div>
                    <span className="font-medium text-red-700">Ответ LLM (неправильный):</span>
                    <p className="text-red-600 italic">"Книга 'Цифровая трансформация России' была написана Петровым И.В. в 2021 году. В ней автор анализирует развитие IT-сферы в России..."</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded">
                    <span className="font-medium text-red-800">Проблема:</span>
                    <p className="text-red-700">Такой книги не существует, автор выдуман, но описание выглядит очень убедительно!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Устаревшие данные */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold text-orange-700 mb-4">📅 Проблема #2: Устаревшие данные</h3>
              <p className="text-gray-700 mb-4">
                LLM обучается на данных до определенной даты и не знает о свежих событиях.
              </p>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Вопрос:</span>
                    <p className="text-gray-600">"Кто президент США в 2025 году?"</p>
                  </div>
                  <div>
                    <span className="font-medium text-orange-700">Ответ LLM:</span>
                    <p className="text-orange-600">"По состоянию на мой последний апдейт, президентом США был Джо Байден..."</p>
                  </div>
                  <div className="bg-orange-100 p-2 rounded">
                    <span className="font-medium text-orange-800">Проблема:</span>
                    <p className="text-orange-700">Информация может быть устаревшей для быстро меняющихся событий</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ошибки в вычислениях */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-4 flex items-center">
                <Calculator className="w-6 h-6 mr-2" />
                Проблема #3: Ошибки в вычислениях
              </h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Вопрос:</span>
                    <p className="text-gray-600">"Если я инвестирую 50,000 рублей под 8% годовых на 15 лет, сколько получу?"</p>
                  </div>
                  <div>
                    <span className="font-medium text-yellow-700">Ответ LLM (с ошибкой):</span>
                    <p className="text-yellow-600">"...вы получите примерно 145,000 рублей"</p>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded">
                    <span className="font-medium text-yellow-800">Правильный расчет:</span>
                    <p className="text-yellow-700">~158,691 рубль (ошибка в 13,000+ рублей!)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Приватные данные */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
                <Building2 className="w-6 h-6 mr-2" />
                Проблема #4: Отсутствие доступа к приватным данным
              </h3>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Вопрос сотрудника:</span>
                    <p className="text-gray-600">"Какие задачи у нас в проекте 'Модернизация склада' на этой неделе?"</p>
                  </div>
                  <div>
                    <span className="font-medium text-blue-700">Ответ LLM:</span>
                    <p className="text-blue-600">"Я не имею доступа к внутренним данным вашей компании..."</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded">
                    <span className="font-medium text-blue-800">Проблема:</span>
                    <p className="text-blue-700">LLM не может работать с корпоративными данными, документами, CRM-системами</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RAG как решение */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lightbulb className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">RAG: спасательный круг для LLM</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              <strong>RAG (Retrieval-Augmented Generation)</strong> — это технология, которая дает LLM возможность искать актуальную информацию в реальном времени перед генерацией ответа.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Аналогия: от библиотекаря к исследователю</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium text-red-600">LLM без RAG:</div>
                  <p className="text-gray-600 text-sm">библиотекарь, отвечающий только по памяти</p>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-green-600">LLM с RAG:</div>
                  <p className="text-gray-600 text-sm">исследователь с доступом к актуальной библиотеке и интернету</p>
                </div>
              </div>
            </div>

            {/* Примеры решения проблем */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Как RAG решает проблемы LLM:</h3>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-green-600 mb-3">💡 Решение проблемы галлюцинаций</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="font-medium text-red-700 mb-1">До RAG (с галлюцинациями):</div>
                    <p className="text-sm text-red-600">"В iOS 18 добавили революционную функцию 'Smart Lock'..." <em>(выдуманная информация!)</em></p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-medium text-green-700 mb-1">После RAG (с реальными данными):</div>
                    <p className="text-sm text-green-600">"Согласно официальной документации Apple, основные функции iOS 18 включают: улучшенный Control Center, новые возможности экрана блокировки... <em>Источник: apple.com/ios</em></p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-blue-600 mb-3">📊 Решение проблемы актуальности данных</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="font-medium text-red-700 mb-1">LLM без RAG:</div>
                    <p className="text-sm text-red-600">"Курс доллара колеблется около 75-80 рублей..." <em>(устаревшие данные)</em></p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-medium text-blue-700 mb-1">LLM с RAG:</div>
                    <p className="text-sm text-blue-600">"По данным ЦБ РФ на 8 июня 2025 года, курс доллара составляет 89.45 рублей. <em>Источник: cbr.ru, обновлено сегодня</em></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Практические примеры */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Практические примеры применения RAG</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">🎓 Образовательная платформа</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Вопрос студента:</span>
                  <p className="text-gray-600">"Как правильно использовать async/await с map() в JavaScript?"</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-blue-700">LLM с RAG отвечает:</span>
                  <p className="text-blue-600 mt-1">"Согласно нашему курсу 'JavaScript Advanced' (урок 15): используйте Promise.all() с map()...</p>
                  <div className="mt-2 p-2 bg-gray-800 text-green-400 text-xs rounded font-mono">
                    const results = await Promise.all(<br/>
                    &nbsp;&nbsp;items.map(async (item) =&gt; {`{...}`})<br/>
                    );
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-green-600 mb-3">🏥 Медицинская справочная система</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Вопрос:</span>
                  <p className="text-gray-600">"Какие побочные эффекты у препарата 'Метформин'?"</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-green-700">LLM с RAG:</span>
                  <p className="text-green-600 mt-1">"Согласно РЛС: тошнота (&gt;10%), диарея (&gt;10%), лактоацидоз (редко)... <em>Обязательно проконсультируйтесь с врачом</em>"</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">🏢 Корпоративная система</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Вопрос сотрудника:</span>
                  <p className="text-gray-600">"Сколько отпускных дней у сотрудников в нашей компании?"</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-purple-700">LLM с RAG:</span>
                  <p className="text-purple-600 mt-1">"Согласно Положению об отпусках: 28 календарных дней основного отпуска + 7 дней дополнительного для цеха</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">📈 Финансовая аналитика</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Вопрос инвестора:</span>
                  <p className="text-gray-600">"Какова текущая прибыль Apple за последний квартал?"</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-orange-700">LLM с RAG:</span>
                  <p className="text-orange-600 mt-1">"Согласно отчету Apple Q1 2025: выручка $123.9 млрд (+8% год к году). <em>Источник: SEC filing</em></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Когда использовать что */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Когда использовать LLM, а когда RAG?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Используйте обычный LLM для:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Креативных задач</strong> — написание стихов, рассказов, идеи для маркетинга</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Объяснения общих концепций</strong> — принципы работы блокчейна, фотосинтеза</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Обработки текста</strong> — перевод, исправление грамматики, резюмирование</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Используйте RAG для:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Фактической информации</strong> — данные о компаниях, технические спецификации</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Работы с документами</strong> — корпоративные политики, инструкции, регламенты</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Актуальной информации</strong> — новости, изменения в законодательстве, обновления</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Практические советы */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Практические советы по внедрению</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏗️ Создание RAG-системы: пошаговый план</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Определите источники данных</p>
                    <p className="text-sm text-gray-600">Какие документы включить? Какие API использовать? Как часто обновлять?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium text-gray-900">Выберите технологический стек</p>
                    <p className="text-sm text-gray-600">Vector DB: Pinecone, Weaviate • LLM: OpenAI, Anthropic • Framework: LangChain</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Подготовьте данные</p>
                    <p className="text-sm text-gray-600">Структурируйте документы, создайте метаданные, настройте индексацию</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-600 mb-4">💰 Экономическое обоснование RAG</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-semibold text-red-700 mb-2">До RAG (служба поддержки):</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• 50 обращений в день</li>
                    <li>• 15 минут на обращение</li>
                    <li>• Стоимость: 2000₽/час</li>
                    <li><strong>Месячные затраты: ~250,000₽</strong></li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-semibold text-green-700 mb-2">После RAG:</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• 70% обращений - ИИ автоматически</li>
                    <li>• 8 минут на сложные вопросы</li>
                    <li>• Освобожденное время операторов</li>
                    <li><strong>Месячные затраты: ~85,000₽</strong></li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 p-3 bg-green-100 rounded text-center">
                <span className="font-bold text-green-800">Экономия: 165,000₽/месяц</span>
              </div>
            </div>
          </div>
        </section>

        {/* Заключение */}
        <section className="bg-gradient-to-r from-gray-900 to-purple-900 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Заключение: будущее ИИ-ассистентов</h2>
          <div className="space-y-4 text-lg">
            <p>
              RAG превращает LLM из "умного болтуна" в надежного помощника, который дает точные ответы с указанием источников, работает с актуальными данными и снижает риск галлюцинаций на 80-90%.
            </p>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Ключевой принцип успеха</h3>
              <p className="text-gray-200">
                <strong>LLM + RAG ≠ замена человека</strong><br/>
                <strong>LLM + RAG = усиление человеческих возможностей</strong>
              </p>
            </div>
            
            <p>
              Правильно настроенная RAG-система не заменяет экспертов, а помогает им работать эффективнее, предоставляя быстрый доступ к проверенной информации.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-black/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">💡 Совет для начинающих</h3>
            <p className="text-gray-200">
              Начните с простой RAG-системы для одной конкретной задачи (например, FAQ по продукту), изучите результаты, а затем масштабируйте. Успех в ИИ — это итеративное улучшение, а не революция за один день.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
