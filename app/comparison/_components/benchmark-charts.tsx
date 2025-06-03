"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function BenchmarkCharts() {
  const codingData = [
    {
      name: 'SWE-bench',
      'Claude 4': 72.5,
      'ChatGPT o3': 69.1,
      'Gemini 2.5 Pro': 63.8
    },
    {
      name: 'Terminal-bench',
      'Claude 4': 43.2,
      'ChatGPT o3': 30.2,
      'Gemini 2.5 Pro': 25.3
    },
    {
      name: 'Использование инструментов',
      'Claude 4': 81.4,
      'ChatGPT o3': 70.4,
      'Gemini 2.5 Pro': 0
    }
  ]

  const reasoningData = [
    {
      name: 'GPQA (Наука)',
      'Claude 4': 83.3,
      'ChatGPT o3': 83.3,
      'Gemini 2.5 Pro': 83.0
    },
    {
      name: 'AIME (Математика)',
      'Claude 4': 90.0,
      'ChatGPT o3': 88.9,
      'Gemini 2.5 Pro': 83.0
    },
    {
      name: 'MMLU (Знания)',
      'Claude 4': 88.8,
      'ChatGPT o3': 88.7,
      'Gemini 2.5 Pro': 88.6
    }
  ]

  const multimodalData = [
    {
      name: 'MMMU (Визуальное)',
      'Claude 4': 76.5,
      'ChatGPT o3': 82.9,
      'Gemini 2.5 Pro': 79.6
    },
    {
      name: 'VideoMME (Видео)',
      'Claude 4': 0,
      'ChatGPT o3': 0,
      'Gemini 2.5 Pro': 84.8
    }
  ]

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 text-center">Программирование и инструменты</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={codingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Точность (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Claude 4" fill="#3B82F6" />
            <Bar dataKey="ChatGPT o3" fill="#10B981" />
            <Bar dataKey="Gemini 2.5 Pro" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 text-center">Рассуждение и знания</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={reasoningData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Точность (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Claude 4" fill="#3B82F6" />
            <Bar dataKey="ChatGPT o3" fill="#10B981" />
            <Bar dataKey="Gemini 2.5 Pro" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 text-center">Мультимодальные возможности</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={multimodalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Точность (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Claude 4" fill="#3B82F6" />
            <Bar dataKey="ChatGPT o3" fill="#10B981" />
            <Bar dataKey="Gemini 2.5 Pro" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 mt-2">
          * Значение 0 означает отсутствие данных или поддержки функции
        </p>
      </div>
    </div>
  )
} 