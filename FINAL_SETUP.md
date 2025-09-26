# 🚀 Финальная настройка Supabase интеграции

## ✅ Что уже готово:
- Проект Supabase настроен
- Переменные окружения в `.env.local`
- Основные таблицы созданы (prices, subscriptions, events, profiles)
- Админский пользователь создан: `annettedemko@gmail.com`
- Сайт запущен на: http://localhost:8082

## 🔧 Последний шаг:

### Создать таблицу form_submissions

В Supabase Dashboard → SQL Editor выполните:

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
  page TEXT NOT NULL CHECK (page IN ('deka', 'deka-day', 'kopie-deka-day-anna')),
  owner form_owner NOT NULL DEFAULT 'Others',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включение RLS
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Политики
CREATE POLICY "anon_insert_form_submissions" ON form_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "admin_select_form_submissions" ON form_submissions
  FOR SELECT TO authenticated USING (is_admin(auth.uid()));

CREATE POLICY "admin_delete_form_submissions" ON form_submissions
  FOR DELETE TO authenticated USING (is_admin(auth.uid()));

-- Индексы
CREATE INDEX idx_form_submissions_owner ON form_submissions(owner);
CREATE INDEX idx_form_submissions_created_at ON form_submissions(created_at DESC);
```

## 🧪 Тестирование:

1. **Админка**: http://localhost:8082/admin
   - Логин: `annettedemko@gmail.com`
   - Пароль: `TempPasswort123!`

2. **Формы для тестирования**:
   - http://localhost:8082/deka → Others
   - http://localhost:8082/deka-day → NATALIA
   - http://localhost:8082/kopie-deka-day-anna → ANNA

3. **Миграция данных** (если есть в localStorage):
   - Откройте консоль браузера
   - Выполните: `migrateData()`

## ✨ Готово!

После выполнения SQL-команды вся интеграция будет полностью работать!