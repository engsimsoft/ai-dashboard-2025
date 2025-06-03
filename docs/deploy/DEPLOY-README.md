# 🚀 Быстрый деплой Next.js на Vercel

## Автоматизация деплоя

### 📁 Файлы для автоматизации:
- `docs/deploy/.cursor-deploy-rules` - правила для Cursor агента
- `docs/deploy/.cursorrules-deploy` - быстрые команды для агента  
- `docs/deploy/deploy-helper.js` - Node.js скрипт автоматизации
- `docs/deploy/DEPLOY-README.md` - эта инструкция

## 🎯 Быстрые команды для Cursor агента

Просто скажи агенту:

### 🔧 Подготовка проекта
```
"Подготовь проект к деплою на Vercel"
```
Агент автоматически:
- Проверит package.json
- Настроит next.config.js с отключением ESLint
- Обновит .eslintrc.json
- Создаст .env.example
- Проверит .gitignore

### 🐛 Исправление ошибок
```
"Исправь ошибки деплоя"
```
Агент:
- Отключит блокирующие ESLint правила
- Исправит TypeScript ошибки
- Закоммитит и отправит изменения

### ⚡ Принудительный редеплой
```
"Форсируй редеплой"
```
Агент выполнит:
```bash
git commit --allow-empty -m "Force redeploy"
git push
```

### 📦 Настройка GitHub
```
"Создай GitHub репозиторий для этого проекта"
```

## 🛠️ Ручные команды

### Подготовка проекта:
```bash
node docs/deploy/deploy-helper.js prepare
```

### Настройка Git:
```bash
node docs/deploy/deploy-helper.js git https://github.com/username/repo.git
```

### Исправление конфигурации:
```bash
node docs/deploy/deploy-helper.js fix
```

### Принудительный деплой:
```bash
node docs/deploy/deploy-helper.js force "Описание изменений"
```

## 📋 Пошаговый процесс деплоя

### 1️⃣ Подготовка проекта
```bash
# Автоматическая подготовка
node docs/deploy/deploy-helper.js prepare

# Или скажи агенту: "Подготовь к деплою"
```

### 2️⃣ Создание GitHub репозитория
1. Заходи на github.com
2. New Repository
3. Название: `your-project-name`
4. Скопируй URL

### 3️⃣ Отправка кода в GitHub
```bash
# Автоматически
node docs/deploy/deploy-helper.js git https://github.com/username/repo.git

# Или вручную
git init
git add .
git commit -m "Initial commit: ready for deployment"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### 4️⃣ Деплой на Vercel
1. Заходи на vercel.com
2. New Project
3. Import from GitHub
4. Выбери свой репозиторий
5. Deploy (настройки по умолчанию)

## 🔧 Конфигурации для деплоя

### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Отключает ESLint при сборке
  },
  typescript: {
    ignoreBuildErrors: false, // true если нужно отключить TS ошибки
  }
};

export default nextConfig;
```

### .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@next/next/no-img-element": "off"
  }
}
```

## 🚨 Решение типичных проблем

### ❌ ESLint ошибки при деплое
**Проблема:** `react/no-unescaped-entities`, `unused-vars`
**Решение:** 
```bash
node docs/deploy/deploy-helper.js fix
# Или скажи агенту: "Исправь ошибки деплоя"
```

### ❌ Vercel не подхватывает изменения
**Проблема:** Старый коммит в логах деплоя
**Решение:**
1. Удали проект на Vercel
2. Создай заново
3. Или принудительный push:
```bash
node docs/deploy/deploy-helper.js force
```

### ❌ Build fails
**Проблема:** Ошибки компиляции
**Решение:** Добавь в next.config.js:
```js
{
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
}
```

## 🎉 Результат

После успешного деплоя получишь:
- ✅ Живой сайт: `https://your-project.vercel.app`
- ✅ Автоматические деплои при push в GitHub
- ✅ HTTPS сертификат
- ✅ Глобальный CDN
- ✅ Мониторинг и аналитика

## 💡 Советы

1. **Всегда используй** `eslint: { ignoreDuringBuilds: true }` для деплоя
2. **Проверяй логи** деплоя в Vercel при ошибках
3. **Используй принудительный push** если Vercel не подхватывает изменения
4. **Создавай .env.example** для документирования переменных окружения

---

**Быстрый старт:** Скажи Cursor агенту *"Подготовь проект к деплою на Vercel"* и следуй инструкциям! 🚀 