# 🚀 SSG Setup для SEO - Документация

## ✅ Что было реализовано

Проект успешно преобразован в **статический сайт (SSG - Static Site Generation)** с поддержкой двух языков и динамическими страницами.

### 📋 Основные изменения:

1. **Структура URL с языковыми префиксами:**
   - `/de/` - немецкие версии страниц
   - `/ru/` - русские версии страниц
   - Редирект с `/` на `/de` (немецкий по умолчанию)

2. **Статические страницы (pre-rendered HTML):**
   - `/de/about` и `/ru/about`
   - `/de/services` и `/ru/services`
   - `/de/laser-haarentfernung-muenchen` и `/ru/laser-haarentfernung-muenchen`
   - `/de/alexandrit-gegen-diodenlaser` и `/ru/alexandrit-gegen-diodenlaser`
   - `/de/icoone-laser-muenchen` и `/ru/icoone-laser-muenchen`
   - `/de/manikuere-pedikuere-muenchen` и `/ru/manikuere-pedikuere-muenchen`
   - `/de/redtouch-laser-muenchen` и `/ru/redtouch-laser-muenchen`
   - `/de/deka-geraeteverkauf` и `/ru/deka-geraeteverkauf`
   - `/de/redtouch-pro` и `/ru/redtouch-pro`
   - `/de/motus-pro` и `/ru/motus-pro`
   - `/de/motus-ax` и `/ru/motus-ax`
   - `/de/physiq360` и `/ru/physiq360`
   - `/de/again-cos` и `/ru/again-cos`
   - `/de/kontakt` и `/ru/kontakt`
   - `/de/impressum` и `/ru/impressum`
   - `/de/datenschutzerklaerung` и `/ru/datenschutzerklaerung`

3. **Динамические страницы (с React hydration):**
   - `/de/` и `/ru/` - главные страницы (блок "Абонементы" загружается из Supabase)
   - `/de/preis` и `/ru/preis` - страница цен
   - `/de/deka`, `/ru/deka` - DEKA landing pages
   - `/de/deka-anna`, `/ru/deka-anna`
   - `/de/deka-lera`, `/ru/deka-lera`
   - `/de/deka-liudmila`, `/ru/deka-liudmila`
   - `/de/deka-day`, `/ru/deka-day`

4. **SEO улучшения:**
   - ✅ Каждая страница имеет `<html lang="de">` или `<html lang="ru">`
   - ✅ Добавлены `hreflang` теги для связывания языковых версий
   - ✅ Статический HTML контент доступен без JavaScript
   - ✅ Google и другие поисковики видят полный контент страницы

---

## 📁 Созданные файлы:

### 1. `scripts/prerender.mjs`
Скрипт для pre-rendering статических страниц. Генерирует HTML файлы для каждого маршрута.

### 2. `src/components/HreflangTags.tsx`
Компонент для добавления hreflang тегов (SEO для многоязычных сайтов).

### 3. Обновленные файлы:
- `src/App.tsx` - новая структура роутинга с `/de/` и `/ru/`
- `src/contexts/LanguageContext.tsx` - определение языка из URL
- `vercel.json` - настройки для правильного роутинга на Vercel
- `package.json` - добавлен скрипт `build:ssg`

---

## 🔧 Команды для работы:

### Разработка (dev сервер):
```bash
npm run dev
```
Запускает dev сервер на http://localhost:8080

### Сборка для production (SSG):
```bash
npm run build:ssg
```
Создает статический билд в папке `dist/` с pre-rendered HTML страницами.

### Обычная сборка (без SSG):
```bash
npm run build
```

### Локальный preview собранного сайта:
```bash
npm run preview
```
После сборки можно проверить сайт на http://localhost:4173

---

## 🌐 Проверка SEO и статического контента:

### 1. Проверить HTML контент после сборки:
```bash
cat dist/de/about/index.html | head -30
```
Должен показать полноценный HTML с `<html lang="de">`

### 2. Проверить русскую версию:
```bash
cat dist/ru/about/index.html | head -10
```
Должен показать `<html lang="ru">`

### 3. Проверить структуру файлов:
```bash
ls -la dist/de/
ls -la dist/ru/
```

---

## 📊 Результаты сборки:

После выполнения `npm run build:ssg` вы увидите:

```
✅ Pre-rendered: /de/about
✅ Pre-rendered: /de/services
✅ Pre-rendered: /de/laser-haarentfernung-muenchen
... (все статические страницы)
✅ Pre-rendered: /ru/about
✅ Pre-rendered: /ru/services
... (все русские страницы)
✅ Pre-rendered (dynamic): /de/preis
✅ Pre-rendered (dynamic): /de/deka
... (динамические страницы)

🎉 Pre-rendering complete!
```

---

## 🚀 Деплой на Vercel:

### Важно!
Vercel автоматически использует команду из `vercel.json`:
```json
"buildCommand": "npm run build:ssg"
```

### При деплое на Vercel:
1. Vercel выполнит `npm run build:ssg`
2. Создастся папка `dist/` с pre-rendered HTML
3. Все маршруты будут доступны как статические HTML файлы
4. Динамические страницы будут работать с React hydration

### Rewrites в vercel.json:
```json
"rewrites": [
  { "source": "/de/:path*", "destination": "/de/:path*/index.html" },
  { "source": "/ru/:path*", "destination": "/ru/:path*/index.html" },
  { "source": "/:path*", "destination": "/index.html" }
]
```

---

## 🎯 Преимущества для SEO:

1. **Мгновенная загрузка контента:**
   - Google видит полный HTML без необходимости выполнения JavaScript
   - Все тексты, заголовки, описания доступны сразу

2. **Правильная языковая структура:**
   - `<html lang="de">` для немецких страниц
   - `<html lang="ru">` для русских страниц
   - hreflang теги связывают версии на разных языках

3. **Быстрая индексация:**
   - Статические HTML файлы индексируются быстрее
   - Нет задержек на загрузку данных из Supabase для статических страниц

4. **Core Web Vitals улучшены:**
   - FCP (First Contentful Paint) - быстрее
   - LCP (Largest Contentful Paint) - быстрее
   - CLS (Cumulative Layout Shift) - стабильнее

---

## ⚠️ Важные замечания:

1. **Не коммитить и не пушить** изменения без письменного разрешения владельца.

2. **contacts_n8n.csv** добавлен в `.gitignore` (правило `*.csv`).

3. **Динамические страницы** продолжают загружать данные из Supabase на клиенте.

4. **Admin панель** (`/admin/*`) работает без языковых префиксов.

5. **Старые URL редиректятся:**
   - `/icoone-laser` → `/de/icoone-laser-muenchen`
   - `/redtouchpro` → `/de/redtouch-laser-muenchen`
   - `/manikuere-pedikuere` → `/de/manikuere-pedikuere-muenchen`

---

## 🔍 Тестирование:

### 1. Проверка локально:
```bash
npm run build:ssg
npm run preview
```
Откройте:
- http://localhost:4173/de/
- http://localhost:4173/ru/
- http://localhost:4173/de/about
- http://localhost:4173/ru/about

### 2. Проверка SEO через curl:
```bash
curl -s http://localhost:4173/de/about | grep '<html'
```
Должно показать: `<html lang="de">`

### 3. Проверка hreflang:
```bash
curl -s http://localhost:4173/de/about | grep 'hreflang'
```
Должно показать теги hreflang для de и ru версий.

---

## 📞 Поддержка:

Если возникнут вопросы по настройке или деплою - обращайтесь!

---

**Дата:** 2025-10-18
**Статус:** ✅ Готово к деплою (после письменного разрешения)
