# 📚 Документация AI Dashboard

## 📁 Структура документации

### 🚀 Деплой и автоматизация
- **[deploy/](./deploy/)** - Автоматизация деплоя на Vercel
  - [DEPLOY-README.md](./deploy/DEPLOY-README.md) - Полная инструкция по деплою
  - [deploy-helper.js](./deploy/deploy-helper.js) - Node.js скрипт автоматизации
  - [.cursor-deploy-rules](./deploy/.cursor-deploy-rules) - Правила для Cursor агента
  - [.cursorrules-deploy](./deploy/.cursorrules-deploy) - Быстрые команды

### 🔧 Техническая документация
- [tech-analysis-and-hosting.md](./tech-analysis-and-hosting.md) - Технический анализ и рекомендации по хостингу

## 🎯 Быстрый старт

### Для деплоя проекта:
```bash
# Подготовка к деплою
node docs/deploy/deploy-helper.js prepare

# Или скажи Cursor агенту:
"Подготовь проект к деплою на Vercel"
```

### Для исправления ошибок деплоя:
```bash
# Исправление конфигурации
node docs/deploy/deploy-helper.js fix

# Или скажи агенту:
"Исправь ошибки деплоя"
```

### Для принудительного редеплоя:
```bash
# Принудительный push
node docs/deploy/deploy-helper.js force

# Или скажи агенту:
"Форсируй редеплой"
```

## 📖 Полезные ссылки

- [Техническая спецификация](./tech-analysis-and-hosting.md) - Детальный анализ технологий
- [Инструкция по деплою](./deploy/DEPLOY-README.md) - Пошаговое руководство
- [Автоматизация](./deploy/) - Скрипты и правила для быстрого деплоя

## 💡 Советы

1. **Всегда читай** [DEPLOY-README.md](./deploy/DEPLOY-README.md) перед первым деплоем
2. **Используй автоматизацию** - скрипты экономят время
3. **Говори с Cursor агентом** - он знает все команды из правил
4. **Проверяй логи** Vercel при проблемах с деплоем

---

*Документация обновлена: Декабрь 2024* 