-- Создание таблицы events с простыми правами доступа
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT,
  time TEXT,
  location TEXT,
  address TEXT,
  description TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включение RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Простые политики - разрешить всё для аутентифицированных пользователей
CREATE POLICY "Allow all for authenticated users" ON events
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Разрешить чтение для анонимных пользователей
CREATE POLICY "Allow select for anonymous" ON events
  FOR SELECT
  TO anon
  USING (true);

-- Разрешить вставку для анонимных пользователей (для форм)
CREATE POLICY "Allow insert for anonymous" ON events
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Создание индексов
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date);
CREATE INDEX IF NOT EXISTS idx_events_is_published ON events(is_published);