-- Получаем UUID пользователей для привязки
SELECT id, email, raw_user_meta_data->>'role' as role
FROM auth.users
WHERE email IN (
  'anna@beauty.com',
  'lera@beauty.com',
  'liudmila@beauty.com',
  'natalia@beauty.com',
  'yulia@beauty.com'
)
ORDER BY email;

-- Настройка RLS для таблиц клиентов
-- Каждый мастер видит только своих клиентов

-- ANNA_CLIENTS
ALTER TABLE public.anna_clients ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anna can manage her clients" ON public.anna_clients;
CREATE POLICY "Anna can manage her clients"
ON public.anna_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'anna' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- LERA_CLIENTS
ALTER TABLE public.lera_clients ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Lera can manage her clients" ON public.lera_clients;
CREATE POLICY "Lera can manage her clients"
ON public.lera_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'lera' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- LIUDMILA_CLIENTS
ALTER TABLE public.liudmila_clients ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Liudmila can manage her clients" ON public.liudmila_clients;
CREATE POLICY "Liudmila can manage her clients"
ON public.liudmila_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'liudmila' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- NATALIA_CLIENTS
ALTER TABLE public.natalia_clients ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Natalia can manage her clients" ON public.natalia_clients;
CREATE POLICY "Natalia can manage her clients"
ON public.natalia_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'natalia' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- YULIA_CLIENTS
ALTER TABLE public.yulia_clients ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Yulia can manage her clients" ON public.yulia_clients;
CREATE POLICY "Yulia can manage her clients"
ON public.yulia_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'yulia' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- Проверяем установленные политики
SELECT 
    tablename,
    policyname,
    roles,
    cmd
FROM pg_policies
WHERE tablename LIKE '%clients%'
ORDER BY tablename;

-- Обновляем user_id для существующих клиентов (если нужно)
-- Замените UUID на реальные ID из первого запроса

-- UPDATE public.anna_clients SET user_id = 'UUID_ANNA' WHERE user_id IS NULL;
-- UPDATE public.lera_clients SET user_id = 'UUID_LERA' WHERE user_id IS NULL;
-- UPDATE public.liudmila_clients SET user_id = 'UUID_LIUDMILA' WHERE user_id IS NULL;
-- UPDATE public.natalia_clients SET user_id = 'UUID_NATALIA' WHERE user_id IS NULL;
-- UPDATE public.yulia_clients SET user_id = 'UUID_YULIA' WHERE user_id IS NULL;
