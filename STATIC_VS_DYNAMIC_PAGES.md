# 📄 Статические vs Динамические страницы

## 🎯 Обзор

В проекте используется **гибридный подход**:
- **Статические страницы** - pre-rendered при build, мгновенная загрузка, отличное SEO
- **Динамические страницы** - загружаются на клиенте, подтягивают данные из Supabase

---

## ✅ СТАТИЧЕСКИЕ СТРАНИЦЫ (Pre-rendered)

Эти страницы генерируются при билде как статичный HTML и сразу отдаются пользователю.

### 🇩🇪 Немецкие (DE)

**Основные страницы:**
- ✅ `/de/about` - О нас
- ✅ `/de/services` - Услуги
- ✅ `/de/kontakt` - Контакты
- ✅ `/de/impressum` - Impressum
- ✅ `/de/datenschutzerklaerung` - Защита данных

**Услуги:**
- ✅ `/de/laser-haarentfernung-muenchen` - Лазерная эпиляция
- ✅ `/de/alexandrit-gegen-diodenlaser` - Александрит vs Диод
- ✅ `/de/icoone-laser-muenchen` - iCoone Laser
- ✅ `/de/manikuere-pedikuere-muenchen` - Маникюр и Педикюр
- ✅ `/de/redtouch-laser-muenchen` - RedTouch Laser

**DEKA Устройства:**
- ✅ `/de/deka-geraeteverkauf` - Продажа DEKA устройств
- ✅ `/de/redtouch-pro` - RedTouch PRO
- ✅ `/de/motus-pro` - Motus PRO
- ✅ `/de/motus-ax` - Motus AX
- ✅ `/de/physiq360` - PHYSIQ 360
- ✅ `/de/again-cos` - Again Cos

### 🇷🇺 Русские (RU)

**Основные страницы:**
- ✅ `/ru/about` - О нас
- ✅ `/ru/services` - Услуги
- ✅ `/ru/kontakt` - Контакты
- ✅ `/ru/impressum` - Impressum
- ✅ `/ru/datenschutzerklaerung` - Защита данных

**Услуги:**
- ✅ `/ru/laser-haarentfernung-muenchen` - Лазерная эпиляция
- ✅ `/ru/alexandrit-gegen-diodenlaser` - Александрит vs Диод
- ✅ `/ru/icoone-laser-muenchen` - iCoone Laser
- ✅ `/ru/manikuere-pedikuere-muenchen` - Маникюр и Педикюр
- ✅ `/ru/redtouch-laser-muenchen` - RedTouch Laser

**DEKA Устройства:**
- ✅ `/ru/deka-geraeteverkauf` - Продажа DEKA устройств
- ✅ `/ru/redtouch-pro` - RedTouch PRO
- ✅ `/ru/motus-pro` - Motus PRO
- ✅ `/ru/motus-ax` - Motus AX
- ✅ `/ru/physiq360` - PHYSIQ 360
- ✅ `/ru/again-cos` - Again Cos

**Всего статических страниц: 30** (15 DE + 15 RU)

---

## 🔄 ДИНАМИЧЕСКИЕ СТРАНИЦЫ (Client-side Hydration)

Эти страницы тоже имеют pre-rendered HTML для SEO, но **контент подгружается из Supabase** на клиенте.

### 🇩🇪 Немецкие (DE)

- 🔄 `/de` - **Главная страница**
  - **Блок абонементов** загружается из Supabase (`subscriptions`)
  - Остальной контент статичный
- 🔄 `/de/preis` - Цены (из Supabase: `prices`, `price_categories`)
- 🔄 `/de/deka` - DEKA Congress (может иметь динамические события)
- 🔄 `/de/deka-day` - DEKA Day (динамические события)
- 🔄 `/de/deka-anna` - DEKA Anna (динамические события)
- 🔄 `/de/deka-lera` - DEKA Lera (динамические события)
- 🔄 `/de/deka-liudmila` - DEKA Liudmila (динамические события)

### 🇷🇺 Русские (RU)

- 🔄 `/ru` - **Главная страница**
  - **Блок абонементов** загружается из Supabase (`subscriptions`)
  - Остальной контент статичный
- 🔄 `/ru/preis` - Цены (из Supabase: `prices`, `price_categories`)
- 🔄 `/ru/deka` - DEKA Congress (может иметь динамические события)
- 🔄 `/ru/deka-day` - DEKA Day (динамические события)
- 🔄 `/ru/deka-anna` - DEKA Anna (динамические события)
- 🔄 `/ru/deka-lera` - DEKA Lera (динамические события)
- 🔄 `/ru/deka-liudmila` - DEKA Liudmila (динамические события)

**Всего динамических страниц: 14** (7 DE + 7 RU)

---

## 📊 Таблицы Supabase, используемые на динамических страницах

### `/de` и `/ru` (Главная страница)

**Используемые таблицы:**
1. `subscriptions` - **Абонементы** (Silber, Gold, Platin)
   - Поля: `id`, `name`, `price`, `period`, `period_ru`, `treatments`, `treatments_ru`, `frequency`, `frequency_ru`, `features`, `is_popular`, `is_published`, `order_index`
   - Запрос: `WHERE is_published=true ORDER BY order_index ASC`

**Код загрузки:**
```typescript
// src/pages/Home.tsx, строка 54-65
const data = await subscriptionsService.getAll();
// Загружает только опубликованные абонементы из Supabase
```

### `/de/preis` и `/ru/preis`

**Используемые таблицы:**
1. `price_categories` - Категории цен (Alexandrit, Dioden, iCoone, RedTouchPro, Manicure, Pedicure)
2. `prices` - Сами цены с привязкой к категориям

**Пример запроса:**
```sql
SELECT * FROM prices
JOIN price_categories ON prices.category_id = price_categories.id
ORDER BY price_categories.order_index, prices.service
```

### DEKA страницы (могут использовать)

**Потенциальные таблицы:**
- `events` - Информация о событиях DEKA Congress
- `deka_subscriptions` - Регистрации на события (другая таблица, не путать с `subscriptions`)
- `deka_devices` - Информация об устройствах

---

## 🏗️ Как работает Pre-rendering

### Build Process

```bash
npm run build:ssg
  ↓
1. vite build (создает dist/)
  ↓
2. node scripts/prerender.mjs
  ↓
3. Создает структуру:
   dist/
   ├── index.html (корень)
   ├── de/
   │   ├── index.html
   │   ├── about/index.html
   │   ├── services/index.html
   │   ├── preis/index.html (динамика)
   │   └── ...
   └── ru/
       ├── index.html
       ├── about/index.html
       ├── services/index.html
       ├── preis/index.html (динамика)
       └── ...
```

### Что происходит при загрузке

**Статическая страница** (например, `/de/about`):
1. Nginx/Vercel отдает готовый HTML
2. React гидрирует страницу
3. Страница мгновенно интерактивна
4. ✅ **Отличное SEO, быстрая загрузка**

**Динамическая страница** (например, `/de/preis`):
1. Nginx/Vercel отдает базовый HTML
2. React гидрирует страницу
3. Вызывается Supabase API
4. Данные загружаются и отображаются
5. ⚡ **SEO OK, данные всегда актуальные**

---

## 🎯 Преимущества гибридного подхода

### ✅ Статические страницы

**Плюсы:**
- 🚀 Мгновенная загрузка (уже HTML)
- 🔍 Отличное SEO (контент сразу в HTML)
- 💰 Дешевле хостинг (не требуют сервера)
- 📱 Работают offline (после первой загрузки)

**Минусы:**
- 📝 Нужно rebuild для изменения контента
- 🔄 Не подходят для часто меняющихся данных

### 🔄 Динамические страницы

**Плюсы:**
- ⚡ Данные всегда актуальные
- 🎛️ Легко обновлять через админку
- 📊 Подходят для прайс-листов, событий
- 🔗 Можно управлять через CMS (Supabase)

**Минусы:**
- 🐌 Чуть медленнее первая загрузка
- 💸 Требуют БД запросы

---

## 🔧 Когда добавлять новую статическую страницу

Добавьте страницу в `scripts/prerender.mjs`:

```javascript
const staticRoutes = {
  de: [
    '/de/about',
    '/de/services',
    '/de/your-new-page', // ← Добавьте сюда
    // ...
  ],
  ru: [
    '/ru/about',
    '/ru/services',
    '/ru/your-new-page', // ← И сюда
    // ...
  ]
};
```

## 📈 Статистика

| Категория | Количество | Процент |
|-----------|-----------|---------|
| Статические страницы | 30 | 68% |
| Динамические страницы | 14 | 32% |
| **Всего** | **44** | **100%** |

---

**Последнее обновление:** 2025-10-20
**Статус:** ✅ Работает
