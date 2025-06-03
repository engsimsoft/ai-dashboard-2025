'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { marketData } from '../data/market-data';

export function MarketChart() {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-4">Рост размера рынка</h2>
      <div className="w-full h-[600px] bg-white border rounded">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={marketData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="year" />
            <YAxis label={{ value: 'в миллиардах долларов США', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="NLP" name="Обработка естественного языка" stackId="a" fill="#82ca9d" />
            <Bar dataKey="MachineLearning" name="Машинное обучение" stackId="a" fill="#ffc658" />
            <Bar dataKey="ComputerVision" name="Компьютерное зрение" stackId="a" fill="#8884d8" />
            <Bar dataKey="Autonomous" name="Автономные и сенсорные технологии" stackId="a" fill="#000000" />
            <Bar dataKey="AIRobotics" name="ИИ-робототехника" stackId="a" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 