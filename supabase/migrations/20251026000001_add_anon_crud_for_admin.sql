-- Add full CRUD policies for anon role to allow admin panel operations
-- Admin panel uses ANON_KEY for all operations, so anon role needs full access

-- ============================================
-- PROMOTIONS: Add full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_read_all_promotions" ON public.promotions;
DROP POLICY IF EXISTS "anon_insert_promotions" ON public.promotions;
DROP POLICY IF EXISTS "anon_update_promotions" ON public.promotions;
DROP POLICY IF EXISTS "anon_delete_promotions" ON public.promotions;

CREATE POLICY "anon_read_all_promotions"
ON public.promotions FOR SELECT
TO anon
USING (true);

CREATE POLICY "anon_insert_promotions"
ON public.promotions FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_promotions"
ON public.promotions FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_promotions"
ON public.promotions FOR DELETE
TO anon
USING (true);

-- ============================================
-- EVENTS: Ensure full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_insert_events" ON public.events;
DROP POLICY IF EXISTS "anon_update_events" ON public.events;
DROP POLICY IF EXISTS "anon_delete_events" ON public.events;

CREATE POLICY "anon_insert_events"
ON public.events FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_events"
ON public.events FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_events"
ON public.events FOR DELETE
TO anon
USING (true);

-- ============================================
-- PRICES: Ensure full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_insert_prices" ON public.prices;
DROP POLICY IF EXISTS "anon_update_prices" ON public.prices;
DROP POLICY IF EXISTS "anon_delete_prices" ON public.prices;

CREATE POLICY "anon_insert_prices"
ON public.prices FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_prices"
ON public.prices FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_prices"
ON public.prices FOR DELETE
TO anon
USING (true);

-- ============================================
-- PRICE_CATEGORIES: Ensure full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_insert_price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "anon_update_price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "anon_delete_price_categories" ON public.price_categories;

CREATE POLICY "anon_insert_price_categories"
ON public.price_categories FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_price_categories"
ON public.price_categories FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_price_categories"
ON public.price_categories FOR DELETE
TO anon
USING (true);

-- ============================================
-- SUBSCRIPTIONS: Ensure full CRUD for anon
-- ============================================

DROP POLICY IF EXISTS "anon_insert_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "anon_update_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "anon_delete_subscriptions" ON public.subscriptions;

CREATE POLICY "anon_insert_subscriptions"
ON public.subscriptions FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_subscriptions"
ON public.subscriptions FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_subscriptions"
ON public.subscriptions FOR DELETE
TO anon
USING (true);

-- ============================================
-- VERIFICATION
-- ============================================

-- Show all policies for admin-related tables
SELECT
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
WHERE tablename IN ('prices', 'price_categories', 'subscriptions', 'events', 'promotions')
    AND roles::text LIKE '%anon%'
ORDER BY tablename, cmd, policyname;
