-- =====================================================
-- FIX SECURITY ISSUES FROM DATABASE LINTER
-- =====================================================
-- 1. Enable RLS on admin_users table (if exists)
-- 2. Replace user_metadata with app_metadata in client policies
--
-- IMPORTANT SECURITY NOTE:
-- - user_metadata can be edited by users themselves (insecure)
-- - app_metadata can only be set by admins/service role (secure)
-- - RLS policies MUST use app_metadata for authorization
-- - Client code can read user_metadata for display, but access control
--   is enforced by these database policies using app_metadata
--
-- REQUIRED ACTION AFTER MIGRATION:
-- For each user that needs role-based access, run:
--   UPDATE auth.users
--   SET raw_app_meta_data = jsonb_set(
--     COALESCE(raw_app_meta_data, '{}'::jsonb),
--     '{role}',
--     to_jsonb(user_metadata->>'role')
--   )
--   WHERE user_metadata->>'role' IS NOT NULL;
--
-- This copies roles from user_metadata to app_metadata
-- =====================================================

-- =====================================================
-- 1. ADMIN_USERS TABLE - ENABLE RLS
-- =====================================================

-- Enable RLS on admin_users table if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename = 'admin_users'
  ) THEN
    ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

    -- Add a policy for service role access if no policies exist
    IF NOT EXISTS (
      SELECT 1 FROM pg_policies
      WHERE tablename = 'admin_users'
      AND policyname = 'admin_users_service_access'
    ) THEN
      CREATE POLICY "admin_users_service_access"
      ON public.admin_users FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
    END IF;
  END IF;
END $$;

-- =====================================================
-- 2. CLIENT TABLES - FIX USER_METADATA REFERENCES
-- =====================================================
-- Replace insecure user_metadata with app_metadata
-- app_metadata can only be set by admins, not by users
-- =====================================================

-- YULIA_CLIENTS
DROP POLICY IF EXISTS "Yulia can manage her clients" ON public.yulia_clients;
CREATE POLICY "Yulia can manage her clients"
ON public.yulia_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'yulia'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
)
WITH CHECK (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'yulia'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
);

-- ANNA_CLIENTS
DROP POLICY IF EXISTS "Anna can manage her clients" ON public.anna_clients;
CREATE POLICY "Anna can manage her clients"
ON public.anna_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'anna'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
)
WITH CHECK (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'anna'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
);

-- NATALIA_CLIENTS
DROP POLICY IF EXISTS "Natalia can manage her clients" ON public.natalia_clients;
CREATE POLICY "Natalia can manage her clients"
ON public.natalia_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'natalia'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
)
WITH CHECK (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'natalia'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
);

-- LERA_CLIENTS
DROP POLICY IF EXISTS "Lera can manage her clients" ON public.lera_clients;
CREATE POLICY "Lera can manage her clients"
ON public.lera_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'lera'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
)
WITH CHECK (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'lera'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
);

-- LIUDMILA_CLIENTS
DROP POLICY IF EXISTS "Liudmila can manage her clients" ON public.liudmila_clients;
CREATE POLICY "Liudmila can manage her clients"
ON public.liudmila_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'liudmila'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
)
WITH CHECK (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'liudmila'
  OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'service_role'
);

-- =====================================================
-- 3. MIGRATE ROLES FROM user_metadata TO app_metadata
-- =====================================================
-- Automatically copy existing roles to app_metadata
-- This ensures existing users continue to have access

DO $$
BEGIN
  -- Copy roles from user_metadata to app_metadata
  UPDATE auth.users
  SET raw_app_meta_data = jsonb_set(
    COALESCE(raw_app_meta_data, '{}'::jsonb),
    '{role}',
    to_jsonb(user_metadata->>'role')
  )
  WHERE user_metadata->>'role' IS NOT NULL
    AND (raw_app_meta_data->>'role' IS NULL OR raw_app_meta_data->>'role' = '');

  -- Log the migration
  RAISE NOTICE 'Migrated roles from user_metadata to app_metadata for % users',
    (SELECT COUNT(*) FROM auth.users WHERE user_metadata->>'role' IS NOT NULL);
END $$;

-- =====================================================
-- 4. VERIFICATION
-- =====================================================

-- Verify RLS is enabled on all tables
SELECT
  schemaname,
  tablename,
  rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('admin_users', 'yulia_clients', 'anna_clients', 'natalia_clients', 'lera_clients', 'liudmila_clients')
ORDER BY tablename;

-- Verify policies no longer reference user_metadata
SELECT
  schemaname,
  tablename,
  policyname,
  CASE
    WHEN pg_get_expr(polqual, polrelid) LIKE '%user_metadata%' THEN 'INSECURE: uses user_metadata'
    WHEN pg_get_expr(polqual, polrelid) LIKE '%app_metadata%' THEN 'SECURE: uses app_metadata'
    ELSE 'OK'
  END as security_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename LIKE '%_clients'
ORDER BY tablename, policyname;
