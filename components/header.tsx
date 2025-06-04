"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Brain, ChevronDown } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AI Dashboard</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Главная
            </Link>
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Сравнения</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link 
                    href="/comparison"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium">Сравнение ИИ-ассистентов 2025</div>
                    <div className="text-xs text-gray-500 mt-1">ChatGPT, Claude, Gemini и другие</div>
                  </Link>
                  <Link 
                    href="/claude-models"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium">Сравнение моделей Claude</div>
                    <div className="text-xs text-gray-500 mt-1">3.5 Sonnet, 3.7 Sonnet, Haiku</div>
                  </Link>
                  <Link 
                    href="/cursor-vs-competitors"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium">Cursor vs Конкуренты</div>
                    <div className="text-xs text-gray-500 mt-1">Cline, Claude Code, Devin</div>
                  </Link>
                  <Link 
                    href="/claude-code-vs-cursor"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium">Claude Code vs Cursor FullStack</div>
                    <div className="text-xs text-gray-500 mt-1">Детальное сравнение для веб-разработки</div>
                  </Link>
                  <Link 
                    href="/magic-patterns-vs-cursor"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium">Magic Patterns vs Cursor</div>
                    <div className="text-xs text-gray-500 mt-1">AI прототипирование vs разработка</div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/ai-coding-platforms" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              AI-платформы
            </Link>
            
            <Link 
              href="/dark-horses" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Темные лошадки
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              
              <div className="border-l-2 border-gray-200 pl-4 space-y-3">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Сравнения</div>
                <Link 
                  href="/comparison"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ИИ-ассистенты 2025
                </Link>
                <Link 
                  href="/claude-models"
                  className="block text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Модели Claude
                </Link>
                <Link 
                  href="/cursor-vs-competitors"
                  className="block text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cursor vs Конкуренты
                </Link>
                <Link 
                  href="/claude-code-vs-cursor"
                  className="block text-gray-700 hover:text-teal-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Claude Code vs Cursor
                </Link>
                <Link 
                  href="/magic-patterns-vs-cursor"
                  className="block text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Magic Patterns vs Cursor
                </Link>
              </div>
              
              <Link 
                href="/ai-coding-platforms" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI-платформы
              </Link>
              
              <Link 
                href="/dark-horses" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Темные лошадки
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay for dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  )
} 