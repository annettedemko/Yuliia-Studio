-- Fix RLS policies for client tables - add WITH CHECK for INSERT operations
-- Without WITH CHECK, INSERT operations fail even if USING passes

-- ANNA_CLIENTS
DROP POLICY IF EXISTS "Anna can manage her clients" ON public.anna_clients;
CREATE POLICY "Anna can manage her clients"
ON public.anna_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'anna' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
)
WITH CHECK (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'anna' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- LERA_CLIENTS
DROP POLICY IF EXISTS "Lera can manage her clients" ON public.lera_clients;
CREATE POLICY "Lera can manage her clients"
ON public.lera_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'lera' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
)
WITH CHECK (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'lera' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- LIUDMILA_CLIENTS
DROP POLICY IF EXISTS "Liudmila can manage her clients" ON public.liudmila_clients;
CREATE POLICY "Liudmila can manage her clients"
ON public.liudmila_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'liudmila' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
)
WITH CHECK (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'liudmila' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- NATALIA_CLIENTS
DROP POLICY IF EXISTS "Natalia can manage her clients" ON public.natalia_clients;
CREATE POLICY "Natalia can manage her clients"
ON public.natalia_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'natalia' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
)
WITH CHECK (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'natalia' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- YULIA_CLIENTS
DROP POLICY IF EXISTS "Yulia can manage her clients" ON public.yulia_clients;
CREATE POLICY "Yulia can manage her clients"
ON public.yulia_clients
FOR ALL
TO authenticated
USING (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'yulia' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
)
WITH CHECK (
  auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'yulia' LIMIT 1)
  OR auth.uid() = (SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin' LIMIT 1)
);

-- Verify policies
SELECT
    tablename,
    policyname,
    roles,
    cmd,
    qual as using_expression,
    with_check as with_check_expression
FROM pg_policies
WHERE tablename LIKE '%_clients'
ORDER BY tablename;
