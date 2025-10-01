-- Отключаем RLS для публичных таблиц, чтобы данные были доступны всем пользователям
-- Выполнить в Supabase SQL Editor

-- Отключаем RLS для таблицы цен
ALTER TABLE public.prices DISABLE ROW LEVEL SECURITY;

-- Отключаем RLS для таблицы подписок
ALTER TABLE public.subscriptions DISABLE ROW LEVEL SECURITY;

-- Отключаем RLS для таблицы событий
ALTER TABLE public.events DISABLE ROW LEVEL SECURITY;

-- Отключаем RLS для таблицы категорий цен (если включен)
ALTER TABLE public.price_categories DISABLE ROW LEVEL SECURITY;

-- Отключаем RLS для таблицы отправок форм
ALTER TABLE public.form_submissions DISABLE ROW LEVEL SECURITY;

-- Предоставляем доступ для анонимных пользователей
GRANT SELECT ON public.prices TO anon, authenticated, service_role;
GRANT SELECT ON public.subscriptions TO anon, authenticated, service_role;
GRANT SELECT ON public.events TO anon, authenticated, service_role;
GRANT SELECT ON public.price_categories TO anon, authenticated, service_role;

-- Для форм также разрешаем вставку
GRANT SELECT, INSERT ON public.form_submissions TO anon, authenticated, service_role;

-- Проверяем статус RLS для всех таблиц
SELECT
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;