"use server"

import { VideoModelCards } from './_components/video-model-cards'
import { VideoComparisonTable } from './_components/video-comparison-table'
import Link from 'next/link'
import { Header } from '@/components/header'

export default async function AIVideoModelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Лучшие модели генерации видео ИИ 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный справочник по топовым моделям ИИ для создания видео контента
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

          <h2 className="text-3xl font-bold mb-6 text-center">Топ моделей генерации видео ИИ</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Сравнение лучших инструментов для создания видео с помощью искусственного интеллекта
          </p>

          <VideoModelCards />

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Сравнительная таблица</h2>
            <VideoComparisonTable />
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Рекомендации по выбору</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-blue-600">OpenAI Sora</h3>
                <p className="text-gray-700 mb-4">
                  Флагманская модель от OpenAI. Лучшее качество видео и понимание текста.
                  Идеальна для профессионального контента и маркетинга.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> От $20 за видео
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Профессиональное видео, реклама, кино
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-green-600">Google Veo</h3>
                <p className="text-gray-700 mb-4">
                  Мощная модель от Google с отличной интеграцией в экосистему.
                  Быстрая генерация и хорошая стабильность.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> Бесплатно для тестов
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Быстрое прототипирование, интеграция с Google
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Runway ML Gen-3</h3>
                <p className="text-gray-700 mb-4">
                  Универсальная модель для творческих задач. Отличная для монтажа и эффектов.
                  Лучший выбор для контент-креаторов.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> От $12/месяц
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Креативный контент, монтаж, эффекты
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Pika Labs</h3>
                <p className="text-gray-700 mb-4">
                  Специализируется на анимации и динамичных сценах.
                  Лучшая модель для создания живых персонажей.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> От $8/месяц
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Анимация, персонажи, динамика
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-red-600">Stable Video Diffusion</h3>
                <p className="text-gray-700 mb-4">
                  Открытая модель от Stability AI. Бесплатная и доступная для экспериментов.
                  Хорошая для обучения и модификации.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> Бесплатно (open source)
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Эксперименты, обучение, кастомизация
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Kling AI</h3>
                <p className="text-gray-700 mb-4">
                  Китайская модель с отличным качеством и скоростью.
                  Сильная в генерации реалистичных сцен.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Цена:</strong> От $10/месяц
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Лучше всего для:</strong> Реалистичные видео, быстрые результаты
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Тренды и особенности 2025</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Технические достижения</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Высокое разрешение:</strong> До 4K и выше</li>
                  <li>• <strong>Длинные видео:</strong> До 10+ минут</li>
                  <li>• <strong>Стабильность:</strong> Меньше артефактов и искажений</li>
                  <li>• <strong>Скорость:</strong> Генерация за секунды</li>
                  <li>• <strong>Персонализация:</strong> Стилизация под бренд</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Области применения</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Маркетинг:</strong> Рекламные ролики и промо</li>
                  <li>• <strong>Кино:</strong> Визуальные эффекты и превью</li>
                  <li>• <strong>Образование:</strong> Интерактивные уроки</li>
                  <li>• <strong>Игры:</strong> Кат-сцены и анимации</li>
                  <li>• <strong>Social media:</strong> Вируальный контент</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}