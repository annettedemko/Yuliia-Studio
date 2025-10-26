-- Add full CRUD policies for anon role for all remaining tables
-- This ensures admin panel can manage all data using ANON_KEY

-- ============================================
-- FORM_SUBMISSIONS: Add full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_select_form_submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "anon_update_form_submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "anon_delete_form_submissions" ON public.form_submissions;

CREATE POLICY "anon_select_form_submissions"
ON public.form_submissions FOR SELECT
TO anon
USING (true);

CREATE POLICY "anon_update_form_submissions"
ON public.form_submissions FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_form_submissions"
ON public.form_submissions FOR DELETE
TO anon
USING (true);

-- ============================================
-- YULIA_CLIENTS: Add full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_select_yulia_clients" ON public.yulia_clients;
DROP POLICY IF EXISTS "anon_insert_yulia_clients" ON public.yulia_clients;
DROP POLICY IF EXISTS "anon_update_yulia_clients" ON public.yulia_clients;
DROP POLICY IF EXISTS "anon_delete_yulia_clients" ON public.yulia_clients;

CREATE POLICY "anon_select_yulia_clients"
ON public.yulia_clients FOR SELECT
TO anon
USING (true);

CREATE POLICY "anon_insert_yulia_clients"
ON public.yulia_clients FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_yulia_clients"
ON public.yulia_clients FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_yulia_clients"
ON public.yulia_clients FOR DELETE
TO anon
USING (true);

-- ============================================
-- ANNA_CLIENTS: Add full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_select_anna_clients" ON public.anna_clients;
DROP POLICY IF EXISTS "anon_insert_anna_clients" ON public.anna_clients;
DROP POLICY IF EXISTS "anon_update_anna_clients" ON public.anna_clients;
DROP POLICY IF EXISTS "anon_delete_anna_clients" ON public.anna_clients;

CREATE POLICY "anon_select_anna_clients"
ON public.anna_clients FOR SELECT
TO anon
USING (true);

CREATE POLICY "anon_insert_anna_clients"
ON public.anna_clients FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_anna_clients"
ON public.anna_clients FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_anna_clients"
ON public.anna_clients FOR DELETE
TO anon
USING (true);

-- ============================================
-- NATALIA_CLIENTS: Add full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_select_natalia_clients" ON public.natalia_clients;
DROP POLICY IF EXISTS "anon_insert_natalia_clients" ON public.natalia_clients;
DROP POLICY IF EXISTS "anon_update_natalia_clients" ON public.natalia_clients;
DROP POLICY IF EXISTS "anon_delete_natalia_clients" ON public.natalia_clients;

CREATE POLICY "anon_select_natalia_clients"
ON public.natalia_clients FOR SELECT
TO anon
USING (true);

CREATE POLICY "anon_insert_natalia_clients"
ON public.natalia_clients FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_natalia_clients"
ON public.natalia_clients FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_natalia_clients"
ON public.natalia_clients FOR DELETE
TO anon
USING (true);

-- ============================================
-- LERA_CLIENTS: Add full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_select_lera_clients" ON public.lera_clients;
DROP POLICY IF EXISTS "anon_insert_lera_clients" ON public.lera_clients;
DROP POLICY IF EXISTS "anon_update_lera_clients" ON public.lera_clients;
DROP POLICY IF EXISTS "anon_delete_lera_clients" ON public.lera_clients;

CREATE POLICY "anon_select_lera_clients"
ON public.lera_clients FOR SELECT
TO anon
USING (true);

CREATE POLICY "anon_insert_lera_clients"
ON public.lera_clients FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_lera_clients"
ON public.lera_clients FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_lera_clients"
ON public.lera_clients FOR DELETE
TO anon
USING (true);

-- ============================================
-- LIUDMILA_CLIENTS: Add full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_select_liudmila_clients" ON public.liudmila_clients;
DROP POLICY IF EXISTS "anon_insert_liudmila_clients" ON public.liudmila_clients;
DROP POLICY IF EXISTS "anon_update_liudmila_clients" ON public.liudmila_clients;
DROP POLICY IF EXISTS "anon_delete_liudmila_clients" ON public.liudmila_clients;

CREATE POLICY "anon_select_liudmila_clients"
ON public.liudmila_clients FOR SELECT
TO anon
USING (true);

CREATE POLICY "anon_insert_liudmila_clients"
ON public.liudmila_clients FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_liudmila_clients"
ON public.liudmila_clients FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_liudmila_clients"
ON public.liudmila_clients FOR DELETE
TO anon
USING (true);

-- ============================================
-- VERIFICATION
-- ============================================

-- Show all anon policies for all tables
SELECT
    schemaname,
    tablename,
    policyname,
    roles,
    cmd,
    CASE
        WHEN cmd = 'SELECT' THEN qual
        WHEN cmd IN ('UPDATE', 'DELETE') THEN qual
        ELSE 'N/A'
    END as using_expression,
    CASE
        WHEN cmd IN ('INSERT', 'UPDATE') THEN with_check
        ELSE 'N/A'
    END as with_check_expression
FROM pg_policies
WHERE schemaname = 'public'
    AND roles::text LIKE '%anon%'
ORDER BY tablename, cmd, policyname;
