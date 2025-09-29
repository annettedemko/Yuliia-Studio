# Yuliia Cheporska Studio - Supabase Database

Документация по структуре базы данных для студии красоты Yuliia Cheporska Studio.

## 📁 Структура проекта

```
supabase/
├── README.md                 # Эта документация
├── config.toml              # Конфигурация Supabase
├── migrations/
│   ├── schema.sql           # ✅ Актуальная полная схема БД
│   └── old/                 # 📦 Архив старых миграций
│       ├── 20250925193134_remote_schema.sql
│       ├── 20250926010000_create_events_table.sql
│       ├── 20250926020000_create_is_admin_function.sql
│       ├── 20250926030000_supabase_metadata.sql
│       ├── 20250926040000_supabase_initial_data.sql
│       ├── 20250929121000_create_form_submissions.sql
│       ├── 20250929122000_form_submissions_migration.sql
│       └── 20250929123000_supabase_admin_function.sql
└── seed/                    # 🌱 Данные для инициализации
    ├── events.csv           # События и мероприятия
    ├── prices.csv           # Цены на услуги
    ├── subscriptions.csv    # Пакеты подписок
    ├── form_submissions.csv # Заявки с сайта
    ├── anna_clients.csv     # Клиенты Анны
    ├── natalia_clients.csv  # Клиенты Наталии
    └── auth_users.csv       # 🔐 Авторизованные пользователи (3 учетные записи)
```

## 🗄️ Схема базы данных

### Таблицы

#### `events`
События и мероприятия студии красоты
- `id` - UUID, первичный ключ
- `title` - Название события
- `date` - Дата события
- `time` - Время проведения
- `location` - Место проведения
- `address` - Адрес
- `description` - Описание события
- `is_published` - Опубликовано ли событие
- `created_at`, `updated_at` - Временные метки
- `user_id` - Ссылка на пользователя

#### `prices`
Прайс-лист услуг
- `id` - UUID, первичный ключ
- `service` - Название услуги
- `price` - Стоимость услуги
- `category` - Категория (alexandrit, dioden, icoone, manicure, pedicure)
- `note` - Дополнительные заметки
- `order_index` - Порядок отображения
- `is_published` - Опубликовано ли
- `created_at`, `updated_at` - Временные метки

#### `subscriptions`
Пакеты абонементов
- `id` - UUID, первичный ключ
- `name` - Название пакета (Silber, Gold, Platin)
- `price` - Стоимость
- `period` - Период действия
- `treatments` - Количество процедур
- `frequency` - Частота посещений
- `features` - Дополнительные возможности
- `popular` - Популярный пакет
- `order_index` - Порядок отображения
- `is_published` - Опубликовано ли
- `created_at`, `updated_at` - Временные метки

#### `form_submissions`
Заявки с сайта
- `id` - UUID, первичный ключ
- `name` - Имя клиента
- `phone` - Телефон
- `email` - Email
- `message` - Сообщение
- `page` - Страница отправки
- `owner` - Ответственный мастер (Anna, Natalia, Others)
- `created_at` - Время создания

#### `anna_clients` / `natalia_clients`
Клиенты мастеров
- `id` - UUID, первичный ключ
- `phone` - Телефон клиента
- `email` - Email клиента
- `full_name` - Полное имя
- `instagram` - Instagram аккаунт
- `warming_level` - Уровень "прогрева" клиента
- `user_id` - Ссылка на пользователя
- `created_at` - Время создания

## 🚀 Команды развертывания

### Полный сброс и инициализация

```bash
# Сброс локальной БД и применение актуальной схемы
supabase db reset

# Загрузка seed данных (выполняется автоматически после reset)
```

### Работа с миграциями

```bash
# Применение только схемы
supabase db push

# Создание новой миграции
supabase db diff -f new_migration_name

# Применение миграций
supabase db push
```

### Загрузка seed данных

Seed данные загружаются автоматически при `supabase db reset`.
Для ручной загрузки:

```bash
# Загрузка конкретного CSV файла
supabase db seed --file seed/prices.csv

# Загрузка всех seed файлов
supabase db seed
```

## 🔐 Безопасность

### Авторизованные пользователи
В `auth_users.csv` хранятся данные 3 авторизованных пользователей:
- **admin@yuliia.com** - администратор с полными правами
- **anna@beauty.com** - мастер Анна (доступ к anna_clients)
- **natalia@beauty.com** - мастер Наталия (доступ к natalia_clients)

### Row Level Security (RLS)
Все таблицы защищены политиками RLS:
- **Публичные данные** (events, prices, subscriptions): чтение для всех, изменение для авторизованных
- **Приватные данные** (clients, form_submissions): доступ только для авторизованных пользователей
- **Клиентские данные**: строгое разделение доступа по ролям

### Функции безопасности
- `is_admin()` - проверка прав администратора
- `is_anna()` - проверка доступа для мастера Анны
- `is_natalia()` - проверка доступа для мастера Наталии
- `get_user_role()` - получение роли пользователя
- `update_updated_at_column()` - автоматическое обновление временных меток

## 📊 Мониторинг

### Индексы для производительности
- Индексы по датам для events
- Индексы по категориям для prices
- Индексы по email для clients

### Логи и аудит
- Все таблицы имеют временные метки создания/изменения
- RLS политики логируют доступ к данным

## 🔄 Backup и восстановление

```bash
# Создание backup
supabase db dump > backup.sql

# Восстановление из backup
supabase db reset
psql -f backup.sql
```

## 📞 Контакты

Для вопросов по БД обращайтесь к администратору проекта.

---
*Последнее обновление: 29.09.2025*