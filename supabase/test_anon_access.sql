-- Проверяем RLS для prices
SELECT tablename, rowsecurity as rls_enabled
FROM pg_tables
WHERE tablename = 'prices';

-- Проверяем политики
SELECT policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename = 'prices';

-- Тестируем доступ как анонимный пользователь
SET ROLE anon;

-- Пробуем прочитать цены
SELECT COUNT(*) as total FROM public.prices WHERE is_published = true;

SELECT id, service, price, category, is_published
FROM public.prices 
WHERE is_published = true 
LIMIT 3;

RESET ROLE;

-- Если не работает, отключаем RLS временно
-- ALTER TABLE public.prices DISABLE ROW LEVEL SECURITY;
