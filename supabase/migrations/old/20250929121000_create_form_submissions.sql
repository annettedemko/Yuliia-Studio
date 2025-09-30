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

-- Политика: вставка для всех (для форм на сайте)
CREATE POLICY "anon_insert_form_submissions" ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Политика: чтение только для админов
CREATE POLICY "admin_select_form_submissions" ON form_submissions
  FOR SELECT
  TO authenticated
  USING (is_admin(auth.uid()));

-- Политика: удаление только для админов
CREATE POLICY "admin_delete_form_submissions" ON form_submissions
  FOR DELETE
  TO authenticated
  USING (is_admin(auth.uid()));

-- Создание индексов для оптимизации
CREATE INDEX idx_form_submissions_owner ON form_submissions(owner);
CREATE INDEX idx_form_submissions_created_at ON form_submissions(created_at DESC);
CREATE INDEX idx_form_submissions_page ON form_submissions(page);