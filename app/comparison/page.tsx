"use server"

import { ComparisonTable } from './_components/comparison-table'
import { ModelCards } from './_components/model-cards'
import { BenchmarkCharts } from './_components/benchmark-charts'
import Link from 'next/link'
import { Header } from '@/components/header'

export default async function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Сравнение ИИ-ассистентов 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Детальное сравнение ведущих AI-помощников для выбора лучшего решения
          </p>
        </div>
        
        <ModelCards />
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Сравнительная таблица</h2>
          <ComparisonTable />
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Результаты бенчмарков</h2>
          <BenchmarkCharts />
        </div>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Выводы и рекомендации</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Claude 4</h3>
              <p className="text-gray-700 mb-4">
                Лидер в программировании и сложных аналитических задачах. 
                Показывает лучшие результаты в SWE-bench (72.5%) и Terminal-bench (43.2%).
              </p>
              <div className="text-sm text-gray-600">
                <strong>Лучше всего для:</strong> Разработка ПО, отладка кода, сложные алгоритмы
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-green-600">ChatGPT o3</h3>
              <p className="text-gray-700 mb-4">
                Сбалансированная модель с отличными возможностями рассуждения. 
                Превосходит в математике (88.9% AIME) и научных задачах.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Лучше всего для:</strong> Общие задачи, образование, анализ данных
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Gemini 2.5 Pro</h3>
              <p className="text-gray-700 mb-4">
                Мультимодальный лидер с огромным контекстным окном (1M+ токенов). 
                Лучший в работе с видео (84.8% VideoMME) и веб-разработке.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Лучше всего для:</strong> Исследования, мультимедиа, длинные документы
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 