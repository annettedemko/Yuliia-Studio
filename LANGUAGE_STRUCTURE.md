# 🌍 Языковая структура проекта Yuliia Beauty Studio

## 📁 Архитектура роутинга

```
Корень приложения (/)
│
├── /de (Немецкий) ← По умолчанию
│   ├── / (главная)
│   ├── /about
│   ├── /services
│   ├── /preis
│   ├── /kontakt
│   ├── /impressum
│   ├── /datenschutzerklaerung
│   │
│   ├── 📱 Услуги
│   │   ├── /laser-haarentfernung-muenchen
│   │   ├── /alexandrit-gegen-diodenlaser
│   │   ├── /icoone-laser-muenchen
│   │   ├── /redtouch-laser-muenchen
│   │   └── /manikuere-pedikuere-muenchen
│   │
│   └── 🏢 DEKA Устройства
│       ├── /deka-geraeteverkauf
│       ├── /deka
│       ├── /deka-day
│       ├── /deka-anna
│       ├── /deka-lera
│       ├── /deka-liudmila
│       ├── /physiq360
│       ├── /motus-ax
│       ├── /motus-pro
│       ├── /redtouch-pro
│       └── /again-cos
│
└── /ru (Русский)
    ├── / (главная)
    ├── /about
    ├── /services
    ├── /preis
    ├── /kontakt
    ├── /impressum
    ├── /datenschutzerklaerung
    │
    ├── 📱 Услуги (те же пути)
    │   ├── /laser-haarentfernung-muenchen
    │   ├── /alexandrit-gegen-diodenlaser
    │   ├── /icoone-laser-muenchen
    │   ├── /redtouch-laser-muenchen
    │   └── /manikuere-pedikuere-muenchen
    │
    └── 🏢 DEKA Устройства (те же пути)
        ├── /deka-geraeteverkauf
        ├── /deka
        ├── /deka-day
        ├── /deka-anna
        ├── /deka-lera
        ├── /deka-liudmila
        ├── /physiq360
        ├── /motus-ax
        ├── /motus-pro
        ├── /redtouch-pro
        └── /again-cos
```

## 🔧 Как это работает

### 1. **Определение языка из URL**

```typescript
// В LanguageContext.tsx
const getLanguageFromURL = () => {
  const pathname = window.location.pathname;
  if (pathname.startsWith('/ru')) return 'ru';
  if (pathname.startsWith('/de')) return 'de';
  return 'de'; // По умолчанию немецкий
};
```

### 2. **Автоматическое добавление префикса в Navigation и Footer**

```typescript
// В Navigation.tsx и Footer.tsx
const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
const langPrefix = `/${currentLang}`;

const withLang = (path: string) => {
  if (path === '/') return langPrefix;
  return `${langPrefix}${path}`;
};

// Использование
<Link to={withLang('/services')}>
  // Автоматически станет /de/services или /ru/services
</Link>
```

### 3. **Переключение языка**

```typescript
// В LanguageSwitcher.tsx
const handleSetLanguage = (lang: Language) => {
  setLanguage(lang);
  localStorage.setItem('language', lang);

  // Меняем /de/services на /ru/services
  const currentPath = window.location.pathname.replace(/^\/(de|ru)/, '') || '/';
  const newPath = `/${lang}${currentPath === '/' ? '' : currentPath}`;
  window.history.pushState({}, '', newPath);
};
```

## 📝 Структура переводов

### Файл: `src/contexts/LanguageContext.tsx`

```typescript
const translations = {
  de: {
    // 1294 строки немецких переводов
    'nav.home': 'Home',
    'nav.about': 'Über uns',
    'nav.services': 'Leistungen',
    // ... и так далее
  },
  ru: {
    // 1294 строки русских переводов
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    // ... и так далее
  }
};
```

### Категории переводов:

1. **Навигация** (`nav.*`)
   - nav.home, nav.about, nav.services, nav.pricing, nav.contact
   - nav.services.* (подменю услуг)
   - nav.deka.* (подменю DEKA)

2. **DEKA страницы** (`deka.*`)
   - deka.title, deka.subtitle, deka.description
   - deka.hero.*, deka.technologies.*, deka.benefits.*

3. **Услуги** (`services.*`)
   - Описания всех услуг
   - Преимущества, процессы, результаты

4. **Форма** (`form.*`)
   - Поля формы, валидация, сообщения об ошибках

5. **Footer** (`footer.*`)
   - footer.studio.*, footer.contact.*, footer.services.*, footer.legal.*

6. **Общие** (`common.*`)
   - Кнопки, заголовки, общие фразы

## 🎯 Ключевые особенности

### ✅ Преимущества текущей реализации:

1. **URL-based language routing**
   - Язык определяется из URL: `/de/*` или `/ru/*`
   - SEO-friendly: поисковики могут индексировать каждую языковую версию отдельно

2. **Автоматическая синхронизация**
   - При изменении URL язык автоматически обновляется
   - При переключении языка пользователь остается на той же странице

3. **Centralized translations**
   - Все переводы в одном месте: `LanguageContext.tsx`
   - Легко добавлять новые языки

4. **Type safety**
   - TypeScript обеспечивает безопасность типов
   - `Language = 'de' | 'ru'`

### 🔄 Жизненный цикл переключения языка:

```
Пользователь на /de/services
        ↓
Нажимает кнопку "RU"
        ↓
handleSetLanguage('ru')
        ↓
URL меняется на /ru/services
        ↓
LanguageContext обновляет язык
        ↓
Компоненты перерендериваются с русскими переводами
        ↓
Пользователь видит страницу на русском
```

## 📊 Статистика переводов

- **Немецкие переводы**: ~1294 строки (строки 14-1294)
- **Русские переводы**: ~1294 строки (строки 1295-2576)
- **Всего ключей**: ~650+ уникальных ключей перевода
- **Категорий**: 20+ категорий переводов

## 🚀 Как добавить новый перевод

1. Откройте `src/contexts/LanguageContext.tsx`
2. Найдите нужную категорию (например, `nav.*`)
3. Добавьте ключ в обе секции (`de` и `ru`):

```typescript
de: {
  'nav.new-page': 'Neue Seite',
},
ru: {
  'nav.new-page': 'Новая страница',
}
```

4. Используйте в компоненте:

```typescript
const { t } = useLanguage();
<h1>{t('nav.new-page')}</h1>
```

## 🔍 Поиск переводов

Используйте префикс для поиска:
- `nav.*` - навигация
- `hero.*` - героические секции
- `footer.*` - футер
- `services.*` - услуги
- `deka.*` - DEKA страницы
- `form.*` - формы
- `common.*` - общие элементы

---

**Последнее обновление**: 2025-10-20
**Статус**: ✅ Полностью функционально
