-- Проверяем текущие политики для admin_users
SELECT 
    schemaname, 
    tablename, 
    policyname,
    roles,
    cmd,
    qual
FROM pg_policies
WHERE tablename = 'admin_users';

-- Проверяем включен ли RLS
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE tablename = 'admin_users';

-- Отключаем RLS для admin_users (так как это система на custom auth, не Supabase auth)
ALTER TABLE public.admin_users DISABLE ROW LEVEL SECURITY;

-- Или если нужен RLS, создаем политику для анонимного доступа на чтение
-- ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
-- DROP POLICY IF EXISTS "Allow anon read for login" ON public.admin_users;
-- CREATE POLICY "Allow anon read for login"
-- ON public.admin_users FOR SELECT
-- TO anon, authenticated
-- USING (true);

-- Проверяем результат
SELECT * FROM public.admin_users LIMIT 1;
