-- Add CRUD policies for anon role on public tables (events, prices, subscriptions, price_categories)
-- This allows REST API calls with ANON_KEY to work for admin operations

-- Drop existing anon CRUD policies if they exist
DO $$
BEGIN
    -- Events
    DROP POLICY IF EXISTS "anon_insert_events" ON public.events;
    DROP POLICY IF EXISTS "anon_update_events" ON public.events;
    DROP POLICY IF EXISTS "anon_delete_events" ON public.events;
    DROP POLICY IF EXISTS "anon_select_events" ON public.events;

    -- Prices
    DROP POLICY IF EXISTS "anon_insert_prices" ON public.prices;
    DROP POLICY IF EXISTS "anon_update_prices" ON public.prices;
    DROP POLICY IF EXISTS "anon_delete_prices" ON public.prices;
    DROP POLICY IF EXISTS "anon_select_prices" ON public.prices;

    -- Subscriptions
    DROP POLICY IF EXISTS "anon_insert_subscriptions" ON public.subscriptions;
    DROP POLICY IF EXISTS "anon_update_subscriptions" ON public.subscriptions;
    DROP POLICY IF EXISTS "anon_delete_subscriptions" ON public.subscriptions;
    DROP POLICY IF EXISTS "anon_select_subscriptions" ON public.subscriptions;

    -- Price Categories
    DROP POLICY IF EXISTS "anon_insert_price_categories" ON public.price_categories;
    DROP POLICY IF EXISTS "anon_update_price_categories" ON public.price_categories;
    DROP POLICY IF EXISTS "anon_delete_price_categories" ON public.price_categories;
    DROP POLICY IF EXISTS "anon_select_price_categories" ON public.price_categories;
END $$;

-- ============================================
-- EVENTS policies
-- ============================================

-- Allow anon to read ALL events (including drafts) - needed for admin panel
CREATE POLICY "anon_select_events"
ON public.events FOR SELECT
TO anon
USING (true);

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
-- PRICES policies
-- ============================================

-- Allow anon to read ALL prices (including unpublished) - needed for admin panel
CREATE POLICY "anon_select_prices"
ON public.prices FOR SELECT
TO anon
USING (true);

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
-- SUBSCRIPTIONS policies
-- ============================================

-- Allow anon to read ALL subscriptions (including unpublished) - needed for admin panel
CREATE POLICY "anon_select_subscriptions"
ON public.subscriptions FOR SELECT
TO anon
USING (true);

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
-- PRICE_CATEGORIES policies
-- ============================================

-- Allow anon to read ALL price categories (including unpublished) - needed for admin panel
CREATE POLICY "anon_select_price_categories"
ON public.price_categories FOR SELECT
TO anon
USING (true);

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
