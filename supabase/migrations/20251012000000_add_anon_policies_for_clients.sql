-- Add policies to allow anon access to all client tables
-- This allows REST API calls with ANON_KEY to work

-- Drop existing anon policies if they exist (ignore errors)
DO $$
BEGIN
    -- Anna clients
    DROP POLICY IF EXISTS "anon_read_anna_clients" ON public.anna_clients;
    DROP POLICY IF EXISTS "anon_insert_anna_clients" ON public.anna_clients;
    DROP POLICY IF EXISTS "anon_update_anna_clients" ON public.anna_clients;
    DROP POLICY IF EXISTS "anon_delete_anna_clients" ON public.anna_clients;

    -- Natalia clients
    DROP POLICY IF EXISTS "anon_read_natalia_clients" ON public.natalia_clients;
    DROP POLICY IF EXISTS "anon_insert_natalia_clients" ON public.natalia_clients;
    DROP POLICY IF EXISTS "anon_update_natalia_clients" ON public.natalia_clients;
    DROP POLICY IF EXISTS "anon_delete_natalia_clients" ON public.natalia_clients;

    -- Yulia clients
    DROP POLICY IF EXISTS "anon_read_yulia_clients" ON public.yulia_clients;
    DROP POLICY IF EXISTS "anon_insert_yulia_clients" ON public.yulia_clients;
    DROP POLICY IF EXISTS "anon_update_yulia_clients" ON public.yulia_clients;
    DROP POLICY IF EXISTS "anon_delete_yulia_clients" ON public.yulia_clients;

    -- Lera clients
    DROP POLICY IF EXISTS "anon_read_lera_clients" ON public.lera_clients;
    DROP POLICY IF EXISTS "anon_insert_lera_clients" ON public.lera_clients;
    DROP POLICY IF EXISTS "anon_update_lera_clients" ON public.lera_clients;
    DROP POLICY IF EXISTS "anon_delete_lera_clients" ON public.lera_clients;

    -- Liudmila clients
    DROP POLICY IF EXISTS "anon_read_liudmila_clients" ON public.liudmila_clients;
    DROP POLICY IF EXISTS "anon_insert_liudmila_clients" ON public.liudmila_clients;
    DROP POLICY IF EXISTS "anon_update_liudmila_clients" ON public.liudmila_clients;
    DROP POLICY IF EXISTS "anon_delete_liudmila_clients" ON public.liudmila_clients;
END $$;

-- Anna clients
CREATE POLICY "anon_read_anna_clients"
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

-- Natalia clients
CREATE POLICY "anon_read_natalia_clients"
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

-- Yulia clients
CREATE POLICY "anon_read_yulia_clients"
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

-- Lera clients
CREATE POLICY "anon_read_lera_clients"
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

-- Liudmila clients
CREATE POLICY "anon_read_liudmila_clients"
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
