-- =====================================================
-- ПОЛНАЯ ОЧИСТКА И ПЕРЕСОЗДАНИЕ RLS ПОЛИТИК
-- =====================================================
-- Удаляем ВСЕ старые конфликтующие политики
-- Создаём ТОЛЬКО правильные политики
-- =====================================================

-- =====================================================
-- ANNA_CLIENTS - полная очистка
-- =====================================================
DROP POLICY IF EXISTS "anna_clients_access" ON public.anna_clients;
DROP POLICY IF EXISTS "Anna can manage her clients" ON public.anna_clients;
DROP POLICY IF EXISTS "anna_clients_anon_insert" ON public.anna_clients;
DROP POLICY IF EXISTS "anna_clients_service_access" ON public.anna_clients;

CREATE POLICY "Anna can manage her clients"
ON public.anna_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'anna'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'anna'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'anna'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'anna'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- =====================================================
-- LERA_CLIENTS - полная очистка
-- =====================================================
DROP POLICY IF EXISTS "lera_clients_access" ON public.lera_clients;
DROP POLICY IF EXISTS "Lera can manage her clients" ON public.lera_clients;
DROP POLICY IF EXISTS "lera_clients_anon_insert" ON public.lera_clients;
DROP POLICY IF EXISTS "lera_clients_service_access" ON public.lera_clients;

CREATE POLICY "Lera can manage her clients"
ON public.lera_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'lera'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'lera'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'lera'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'lera'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- =====================================================
-- LIUDMILA_CLIENTS - полная очистка
-- =====================================================
DROP POLICY IF EXISTS "liudmila_clients_access" ON public.liudmila_clients;
DROP POLICY IF EXISTS "Liudmila can manage her clients" ON public.liudmila_clients;
DROP POLICY IF EXISTS "liudmila_clients_anon_insert" ON public.liudmila_clients;
DROP POLICY IF EXISTS "liudmila_clients_service_access" ON public.liudmila_clients;

CREATE POLICY "Liudmila can manage her clients"
ON public.liudmila_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'liudmila'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'liudmila'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'liudmila'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'liudmila'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- =====================================================
-- NATALIA_CLIENTS - полная очистка
-- =====================================================
DROP POLICY IF EXISTS "natalia_clients_access" ON public.natalia_clients;
DROP POLICY IF EXISTS "Natalia can manage her clients" ON public.natalia_clients;
DROP POLICY IF EXISTS "natalia_clients_anon_insert" ON public.natalia_clients;
DROP POLICY IF EXISTS "natalia_clients_service_access" ON public.natalia_clients;

CREATE POLICY "Natalia can manage her clients"
ON public.natalia_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'natalia'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'natalia'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'natalia'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'natalia'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- =====================================================
-- YULIA_CLIENTS - полная очистка
-- =====================================================
DROP POLICY IF EXISTS "yulia_clients_access" ON public.yulia_clients;
DROP POLICY IF EXISTS "Yulia can manage her clients" ON public.yulia_clients;
DROP POLICY IF EXISTS "yulia_clients_anon_insert" ON public.yulia_clients;
DROP POLICY IF EXISTS "yulia_clients_service_access" ON public.yulia_clients;

CREATE POLICY "Yulia can manage her clients"
ON public.yulia_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'yulia'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'yulia'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'yulia'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'yulia'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- =====================================================
-- ФИНАЛЬНАЯ ПРОВЕРКА - должна быть ОДНА политика на таблицу
-- =====================================================
SELECT
    tablename,
    COUNT(*) as policies_count,
    STRING_AGG(policyname, ', ') as policy_names
FROM pg_policies
WHERE tablename LIKE '%_clients'
GROUP BY tablename
ORDER BY tablename;

-- Ожидается: policies_count = 1 для каждой таблицы!

-- Детальный вывод:
SELECT
    tablename,
    policyname,
    roles,
    cmd
FROM pg_policies
WHERE tablename LIKE '%_clients'
ORDER BY tablename, cmd;
