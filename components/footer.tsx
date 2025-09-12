"use client"

import Link from 'next/link'
import { Brain, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AI Dashboard</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Комплексный анализ рынка искусственного интеллекта. Сравнения ведущих AI-инструментов, 
              актуальные новости и аналитика для принятия обоснованных решений.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Сравнения</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/comparison" className="text-gray-400 hover:text-white transition-colors">
                  ИИ-ассистенты 2025
                </Link>
              </li>
              <li>
                <Link href="/claude-models" className="text-gray-400 hover:text-white transition-colors">
                  Модели Claude
                </Link>
              </li>
              <li>
                <Link href="/cursor-vs-competitors" className="text-gray-400 hover:text-white transition-colors">
                  Cursor vs Конкуренты
                </Link>
              </li>
              <li>
                <Link href="/claude-code-vs-cursor" className="text-gray-400 hover:text-white transition-colors">
                  Claude Code vs Cursor
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-coding-platforms" className="text-gray-400 hover:text-white transition-colors">
                  AI-платформы
                </Link>
              </li>
              <li>
                <Link href="/dark-horses" className="text-gray-400 hover:text-white transition-colors">
                  Темные лошадки
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Новости ИИ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Аналитика рынка
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AI Dashboard. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 