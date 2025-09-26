# Настройка Supabase для Yuliia Beauty Studio

## ✅ Проект уже настроен

Проект Supabase уже создан и настроен:
- **URL**: https://knmompemjlboqzwcycwe.supabase.co
- Переменные окружения в `.env.local` настроены
- Основные таблицы (prices, subscriptions, events, profiles) созданы

## Оставшиеся шаги:

### 1. Создание таблицы form_submissions

В Supabase Dashboard → SQL Editor выполните содержимое файла `create_form_submissions.sql`

### 2. Создание админского пользователя

1. Перейдите в Authentication > Users
2. Найдите пользователя с email `annettedemko@gmail.com`
3. Если его нет, нажмите "Add user" и создайте с данными из `.env.local.example`
4. После создания/нахождения пользователя нажмите на него
5. Скопируйте его UUID (id пользователя)
6. В SQL Editor выполните:

```sql
-- Создание профиля админа (замените UUID на реальный)
INSERT INTO profiles (id, full_name, role)
VALUES ('USER_UUID_HERE', 'Anna Demko', 'admin')
ON CONFLICT (id) DO UPDATE SET role = 'admin';
```

### 3. Тестирование

1. Откройте http://localhost:8082/admin
2. Войдите под админским аккаунтом
3. Проверьте работу управления ценами и заявками
4. Протестируйте формы на страницах /deka, /deka-day, /kopie-deka-day-anna

### 4. Миграция данных (если нужно)

Если есть данные в localStorage:
1. Откройте консоль браузера на сайте
2. Выполните: `migrateData()`

```sql
-- Создание enum типа для владельца заявки
CREATE TYPE form_owner AS ENUM ('Others', 'NATALIA', 'ANNA');

-- Создание таблицы для заявок с форм
CREATE TABLE form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT,
  page TEXT NOT NULL,
  owner form_owner NOT NULL DEFAULT 'Others',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включение RLS
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Политика: чтение только для аутентифицированных пользователей
CREATE POLICY "Allow read for authenticated users" ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Политика: вставка для всех (для форм на сайте)
CREATE POLICY "Allow insert for all" ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Политика: удаление только для админов
CREATE POLICY "Allow delete for admins" ON form_submissions
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Создание таблицы для цен услуг
CREATE TABLE IF NOT EXISTS prices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service TEXT NOT NULL,
  price TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('alexandrit', 'dioden', 'icoone', 'manicure', 'pedicure')),
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включение RLS для цен
ALTER TABLE prices ENABLE ROW LEVEL SECURITY;

-- Политики для таблицы цен
CREATE POLICY "Allow read prices for all" ON prices
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow all operations for admins on prices" ON prices
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Создание таблицы для подписок
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  period TEXT NOT NULL,
  treatments INTEGER NOT NULL,
  frequency TEXT NOT NULL,
  features TEXT[] NOT NULL DEFAULT '{}',
  popular BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включение RLS для подписок
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Политики для таблицы подписок
CREATE POLICY "Allow read subscriptions for all" ON subscriptions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow all operations for admins on subscriptions" ON subscriptions
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Создание таблицы для событий
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  location TEXT NOT NULL,
  address TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включение RLS для событий
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Политики для таблицы событий
CREATE POLICY "Allow read events for all" ON events
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow all operations for admins on events" ON events
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );
```

## 4. Создание админского пользователя

1. Перейдите в Authentication > Users
2. Нажмите "Add user"
3. Введите email и пароль для админа
4. После создания пользователя нажмите на него
5. В разделе "User Metadata" добавьте поле:
   ```json
   {
     "role": "admin"
   }
   ```
6. Сохраните изменения

## 5. Перезапуск сервера разработки

После настройки `.env.local`:
```bash
npm run dev
```

## 6. Миграция существующих данных

После успешного запуска сайта:
1. Откройте консоль браузера на любой странице сайта
2. Выполните команду: `migrateData()`
3. Функция автоматически перенесет данные из localStorage в Supabase

## 7. Доступ к админке

- Перейдите на `/admin`
- Войдите под админским аккаунтом
- Управляйте ценами и заявками

## Структура созданных таблиц:

### form_submissions
- `id` (UUID) - уникальный идентификатор
- `name` (TEXT) - имя клиента
- `phone` (TEXT) - телефон клиента
- `email` (TEXT) - email клиента (опционально)
- `message` (TEXT) - сообщение (опционально)
- `page` (TEXT) - страница с которой отправлена заявка
- `owner` (form_owner) - владелец заявки (Others, NATALIA, ANNA)
- `created_at` (TIMESTAMP) - дата создания

### prices
- `id` (UUID) - уникальный идентификатор
- `service` (TEXT) - название услуги
- `price` (TEXT) - цена услуги
- `category` (TEXT) - категория услуги
- `note` (TEXT) - дополнительная заметка
- `created_at`, `updated_at` - временные метки

### subscriptions, events
- Аналогичная структура для управления подписками и событиями