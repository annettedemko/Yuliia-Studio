# 📋 Структура проекта Yuliia Beauty Studio

## 🏗️ Общая архитектура

```
Yuliia Beauty Studio/
├── src/                          # Исходный код приложения
│   ├── components/              # React компоненты
│   ├── pages/                   # Страницы приложения
│   ├── contexts/                # React Context для глобального состояния
│   ├── hooks/                   # Кастомные React хуки
│   ├── lib/                     # Библиотеки и утилиты
│   ├── services/                # Сервисы для работы с API
│   ├── utils/                   # Вспомогательные функции
│   ├── types/                   # TypeScript типы
│   ├── seo/                     # SEO утилиты
│   └── main.tsx                 # Точка входа приложения
├── public/                      # Статические файлы (изображения, логотипы)
└── package.json                 # Зависимости проекта
```

---

## 📁 Детальная структура

### 1. `/src/components/` - Компоненты

#### **Основные компоненты:**
```
components/
├── Navigation.tsx              # Навигационная панель с бургер-меню
├── Footer.tsx                  # Футер сайта
├── LanguageSwitcher.tsx        # Переключатель языков (DE/RU)
└── ScrollToTop.tsx             # Автоматический скролл вверх при смене страницы
```

#### **UI компоненты (shadcn/ui):**
```
components/ui/
├── button.tsx                  # Кнопки
├── card.tsx                    # Карточки
├── input.tsx                   # Поля ввода
├── form.tsx                    # Формы
├── dialog.tsx                  # Модальные окна
├── table.tsx                   # Таблицы
├── tabs.tsx                    # Вкладки
├── toast.tsx                   # Уведомления
├── calendar.tsx                # Календарь
├── select.tsx                  # Выпадающие списки
└── ... (еще 40+ UI компонентов)
```

#### **Административные компоненты:**
```
components/admin/
├── FormSubmissionsManager.tsx  # Управление заявками
├── LoginForm.tsx               # Форма входа в админ-панель
└── PricesManager.tsx           # Управление ценами
```

---

### 2. `/src/pages/` - Страницы

#### **Основные страницы:**
```
pages/
├── Home.tsx                    # Главная страница (/)
├── About.tsx                   # О нас (/about)
├── Services.tsx                # Услуги (/services)
├── Pricing.tsx                 # Цены (/preis)
├── Kontakt.tsx                 # Контакты (/kontakt)
└── NotFound.tsx                # 404 страница
```

#### **Страницы услуг:**
```
pages/
├── LaserHairRemoval.tsx        # Лазерная эпиляция (/laser-haarentfernung-muenchen)
├── IcooneLaser.tsx             # Icoone Laser (/icoone-laser-muenchen)
├── RedTouchProService.tsx      # RedTouch PRO услуга (/redtouch-laser-muenchen)
└── ManikuerePedikuere.tsx      # Маникюр/Педикюр (/manikuere-pedikuere-muenchen)
```

#### **DEKA оборудование:**
```
pages/
├── DekaGeraeteverkauf.tsx      # Продажа DEKA оборудования (/deka-geraeteverkauf)
├── Physiq360.tsx               # PHYSIQ 360 (/physiq360)
├── MotusAX.tsx                 # Motus AX (/motus-ax)
├── MotusPro.tsx                # Motus PRO (/motus-pro)
├── RedTouchPro.tsx             # RedTouch PRO (/redtouch-pro)
└── AgainCos.tsx                # Again Cos (/again-cos)
```

#### **DEKA Day страницы:**
```
pages/
├── DekaDay.tsx                 # DEKA Day общая страница
├── DekaAnna.tsx                # DEKA Day - Anna
├── DekaLera.tsx                # DEKA Day - Lera
├── DekaLiudmila.tsx            # DEKA Day - Liudmila
└── Deka.tsx                    # Основная DEKA страница
```

#### **Клиентские страницы:**
```
pages/
├── AnnaClients.tsx             # Клиенты Anna
├── LeraClients.tsx             # Клиенты Lera
├── LiudmilaClients.tsx         # Клиенты Liudmila
├── NataliaClients.tsx          # Клиенты Natalia
└── YuliaClients.tsx            # Клиенты Yulia
```

#### **Админ-панель:**
```
pages/
├── Admin.tsx                   # Главная админ-панель
├── AdminLogin.tsx              # Вход в админ-панель
└── AdminDashboard.tsx          # Дашборд администратора
```

#### **Юридические страницы:**
```
pages/
├── Impressum.tsx               # Impressum
└── Datenschutz.tsx             # Datenschutzerklärung (Политика конфиденциальности)
```

---

### 3. `/src/contexts/` - Контексты

```
contexts/
├── AuthContext.tsx             # Контекст авторизации
└── LanguageContext.tsx         # Контекст языка (DE/RU)
```

---

### 4. `/src/hooks/` - Кастомные хуки

```
hooks/
├── use-mobile.tsx              # Определение мобильного устройства
├── use-toast.ts                # Хук для toast уведомлений
└── useFormSubmission.ts        # Хук для отправки форм
```

---

### 5. `/src/services/` - Сервисы

```
services/
├── authService.ts              # Сервис авторизации
├── simpleAuthService.ts        # Упрощенная авторизация
├── contentService.ts           # Сервис контента
└── formService.ts              # Сервис форм
```

---

### 6. `/src/utils/` - Утилиты

```
utils/
├── adminAuth.ts                # Админ авторизация
├── clientsAPI.ts               # API клиентов
├── contentAPI.ts               # API контента
├── supabaseEventsAPI.ts        # Supabase события API
├── testSupabaseConnection.ts  # Тест подключения к Supabase
├── debugEvents.ts              # Отладка событий
├── migrateData.ts              # Миграция данных
└── migrateEventsFromCSV.ts    # Миграция из CSV
```

---

### 7. `/src/lib/` - Библиотеки

```
lib/
├── supabase.ts                 # Клиент Supabase
└── utils.ts                    # Общие утилиты (cn, clsx)
```

---

### 8. `/src/seo/` - SEO

```
seo/
└── seo.ts                      # Утилиты SEO (meta tags, JSON-LD)
```

---

### 9. `/src/types/` - TypeScript типы

```
types/
└── admin.ts                    # Типы для админ-панели
```

---

## 🎨 Технологический стек

### **Frontend:**
- **React 18** - UI библиотека
- **TypeScript** - Типизация
- **Vite** - Сборщик
- **Tailwind CSS** - Стилизация
- **shadcn/ui** - UI компоненты

### **Routing:**
- **React Router v6** - Маршрутизация

### **State Management:**
- **React Context API** - Глобальное состояние

### **Backend/Database:**
- **Supabase** - Backend as a Service
  - PostgreSQL база данных
  - Authentication
  - Real-time subscriptions

### **UI/UX:**
- **Lucide React** - Иконки
- **Framer Motion** - Анимации (опционально)
- **React Hook Form** - Формы

---

## 📄 Основные страницы и их функционал

### 1. **Главная страница (`/`)**
- Hero секция с анимацией
- Карточки услуг (Alexandrit, Dioden, Icoone, RedTouch, Manicure, Pedicure)
- Абонементные пакеты
- Галерея работ
- CTA секция с записью на прием

### 2. **О нас (`/about`)**
- История студии
- Преимущества (5 карточек)
- Команда
- Галерея студии (10 фото)

### 3. **Услуги (`/services`)**
- Обзор всех услуг
- Карточки с описанием:
  - Alexandrit Laser
  - Diodenlaser
  - Icoone Laser
  - RedTouch PRO
  - Maniküre
  - Pediküre
- Why Choose Us секция

### 4. **Цены (`/preis`)**
- Таблица цен по категориям
- Абонементные пакеты
- FAQ секция

### 5. **Контакты (`/kontakt`)**
- Google Maps
- Контактная информация (адрес, телефон, email)
- Информация о транспорте (ÖPNV, парковка)
- WhatsApp/Telegram ссылки
- Instagram

### 6. **DEKA оборудование**
- Страницы для каждого устройства:
  - **Physiq 360** - Система контурирования тела
  - **Motus AX** - Александритовый лазер
  - **Motus PRO** - Диодный лазер
  - **RedTouch PRO** - Радиочастотное омоложение
  - **Again Cos** - Антивозрастные процедуры

### 7. **Админ-панель (`/admin`)**
- Вход по паролю
- Управление заявками (form submissions)
- Управление ценами
- Просмотр клиентских данных

---

## 🔗 Маршруты (Routes)

```tsx
/                                    → Home
/about                              → About
/services                           → Services
/preis                              → Pricing
/kontakt                            → Kontakt

// Услуги
/laser-haarentfernung-muenchen      → LaserHairRemoval
/icoone-laser-muenchen              → IcooneLaser
/redtouch-laser-muenchen            → RedTouchProService
/manikuere-pedikuere-muenchen       → ManikuerePedikuere

// DEKA оборудование
/deka-geraeteverkauf                → DekaGeraeteverkauf
/physiq360                          → Physiq360
/motus-ax                           → MotusAX
/motus-pro                          → MotusPro
/redtouch-pro                       → RedTouchPro
/again-cos                          → AgainCos

// DEKA Day
/deka-day                           → DekaDay
/kopie-deka-day-anna                → DekaAnna
/deka-lera                          → DekaLera
/deka-liudmila                      → DekaLiudmila

// Клиенты
/anna-clients                       → AnnaClients
/lera-clients                       → LeraClients
/liudmila-clients                   → LiudmilaClients
/natalia-clients                    → NataliaClients
/yulia-clients                      → YuliaClients

// Админ
/admin                              → Admin
/admin-login                        → AdminLogin
/admin-dashboard                    → AdminDashboard

// Юридическое
/impressum                          → Impressum
/datenschutzerklaerung              → Datenschutz
```

---

## 🗄️ Структура базы данных (Supabase)

### Таблицы:

1. **`prices`** - Цены на услуги
   - id (uuid)
   - service (text)
   - price (text)
   - category (text)
   - category_id (uuid) - ссылка на price_categories

2. **`price_categories`** - Категории цен
   - id (uuid)
   - code (text)
   - name (text)
   - description (text)
   - icon (text)
   - color (text)
   - order_index (integer)

3. **`form_submissions`** - Заявки с форм
   - id (uuid)
   - name (text)
   - email (text)
   - phone (text)
   - message (text)
   - created_at (timestamp)

4. **`clients_events`** - События клиентов (для DEKA Day)
   - id (uuid)
   - master_name (text)
   - client_name (text)
   - date (text)
   - time (text)
   - service (text)
   - created_at (timestamp)

---

## 🎨 Дизайн система

### Цветовая палитра:
```css
--primary: #8B4513 (коричневый)
--rose-gold: #B76E79 (розовое золото)
--accent: #FFA500 (оранжевый/персиковый)
--background: #FFFFFF (белый)
--muted-foreground: #6B7280 (серый)
```

### Шрифты:
- **Inter** - основной шрифт

### Breakpoints (Tailwind):
```css
sm: 640px   (мобильные)
md: 768px   (планшеты)
lg: 1024px  (ноутбуки)
xl: 1280px  (десктопы)
2xl: 1536px (большие экраны)
```

---

## 🔧 Настройки и конфигурация

### **Environment Variables:**
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### **Основные скрипты:**
```json
"dev": "vite"              // Запуск dev сервера
"build": "vite build"      // Сборка production
"preview": "vite preview"  // Предпросмотр production
```

---

## 📱 Адаптивность

### Mobile-first подход:
- Базовые стили для мобильных (≤768px)
- md: для планшетов (768-1024px)
- lg: для десктопов (≥1024px)

### Ключевые адаптивные компоненты:
- ✅ Navigation с бургер-меню
- ✅ Hero секции с адаптивными высотами
- ✅ Карточки с grid (1 колонка → 2 → 3-4)
- ✅ Таблицы цен с горизонтальным скроллом
- ✅ Footer складывается в 1 колонку
- ✅ Формы на 100% ширины

---

## 🔐 Безопасность

- **Authentication** через Supabase Auth
- **Row Level Security (RLS)** в Supabase
- **Protected routes** для админ-панели
- **Environment variables** для sensitive данных

---

## 📊 SEO оптимизация

### Реализовано:
- ✅ Динамические meta tags через `setPageMeta()`
- ✅ JSON-LD разметка через `setJsonLd()`
- ✅ Локальные ключевые слова (München, Haidhausen)
- ✅ ALT теги для всех изображений
- ✅ Правильная H1/H2 структура
- ✅ Canonical URLs

### SEO функции:
```typescript
setPageMeta({
  title: 'Заголовок страницы',
  description: 'Описание для meta'
});

setJsonLd({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Yuliia Cheporska Studio',
  // ...
});
```

---

## 🚀 Deployment

**Hosting:** Vercel
**URL:** https://yuliia-studio.vercel.app

### Автоматический deploy:
- Push в `main` → автоматический deploy на Vercel
- Pull requests → preview deployments

---

## 📝 TODO / Roadmap

### В процессе:
- [ ] Мобильная адаптация всех страниц
- [ ] Оптимизация размеров H1/H2
- [ ] Исправление фиксированных высот
- [ ] Lighthouse audit (Performance ≥80)

### Планируется:
- [ ] Мультиязычность (DE/RU полная поддержка)
- [ ] Онлайн-запись через Dikidi интеграцию
- [ ] Блог/новости
- [ ] Отзывы клиентов
- [ ] Галерея "До/После"

---

## 📞 Контакты и ссылки

- **Телефон:** +49 152 06067810
- **Email:** Yulachip@icloud.com
- **WhatsApp:** https://wa.me/4915206067810
- **Telegram:** https://t.me/+4915206067810
- **Instagram:** @yuliia_cheporska_studio
- **Адрес:** Elsässer Straße 33, 81667 München

---

**Последнее обновление:** 2025-04-10
**Версия документа:** 1.0
