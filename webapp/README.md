# Dota 2 WebApp

Это веб-приложение для Telegram бота.

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub
2. Загрузите все файлы из этой папки
3. Включите GitHub Pages: Settings → Pages → Source: main branch
4. Ваш URL: `https://username.github.io/repository-name`

## Деплой на Vercel

```bash
npm install -g vercel
vercel --prod
```

## Локальный тест

Просто откройте `demo.html` в браузере для тестирования.

## Структура файлов

- `index.html` - основная страница для Telegram WebApp
- `demo.html` - демо версия для теста в браузере
- `style.css` - стили и анимации
- `app.js` - вся логика приложения
- `data.js` - база данных героев

## Обновление данных

Отредактируйте `data.js` для изменения информации о героях.
