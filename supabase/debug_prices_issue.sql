-- Проверяем структуру таблицы prices
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'prices'
ORDER BY ordinal_position;

-- Проверяем данные
SELECT id, service, price, category, is_published
FROM public.prices
LIMIT 5;

-- Проверяем RLS политики
SELECT policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename = 'prices';

-- Проверяем включен ли RLS
SELECT tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'prices';

-- Пробуем запрос как анонимный пользователь (имитация фронтенда)
SET ROLE anon;
SELECT COUNT(*) as total_prices FROM public.prices WHERE is_published = true;
SELECT * FROM public.prices WHERE is_published = true LIMIT 3;
RESET ROLE;
