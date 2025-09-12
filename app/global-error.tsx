'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">💥</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Критическая ошибка!</h2>
              <p className="text-gray-600 mb-6">
                Произошла критическая ошибка приложения. Попробуйте перезагрузить страницу.
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={reset}
                className="block w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Перезагрузить приложение
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Вернуться на главную
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 