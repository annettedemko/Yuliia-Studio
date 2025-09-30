-- Создание enum для типа страниц
CREATE TYPE form_page AS ENUM ('deka', 'deka-day', 'kopie-deka-day-anna');

-- Создание enum для владельцев заявок
CREATE TYPE form_owner AS ENUM ('Others', 'NATALIA', 'ANNA');

-- Создание таблицы form_submissions
CREATE TABLE IF NOT EXISTS public.form_submissions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    phone text NOT NULL,
    email text,
    message text,
    page form_page NOT NULL,
    owner form_owner NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Создание индексов
CREATE INDEX idx_form_submissions_page ON public.form_submissions USING btree (page);
CREATE INDEX idx_form_submissions_owner ON public.form_submissions USING btree (owner);
CREATE INDEX idx_form_submissions_created_at ON public.form_submissions USING btree (created_at);

-- Настройка RLS (Row Level Security)
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Политика для анонимных пользователей (только вставка)
CREATE POLICY "anon_insert_submissions" ON public.form_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Политика для аутентифицированных пользователей (полный доступ для админов)
CREATE POLICY "admin_all_submissions" ON public.form_submissions
  TO authenticated
  USING (public.is_admin((SELECT auth.uid())))
  WITH CHECK (public.is_admin((SELECT auth.uid())));

-- Политика для чтения всех заявок аутентифицированными пользователями
CREATE POLICY "authenticated_select_submissions" ON public.form_submissions
  FOR SELECT TO authenticated
  USING (true);

-- Предоставление прав
GRANT ALL ON TABLE public.form_submissions TO anon;
GRANT ALL ON TABLE public.form_submissions TO authenticated;
GRANT ALL ON TABLE public.form_submissions TO service_role;