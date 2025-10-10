-- Fix RLS policies for public content tables
-- Problem: Authenticated users can't see published content on /preis and other pages
-- Solution: Keep existing policies, just ensure they work correctly

-- Prices table: anon and authenticated can read published, authenticated can read all
DROP POLICY IF EXISTS "anon_select_prices" ON public.prices;
DROP POLICY IF EXISTS "authenticated_select_prices" ON public.prices;

CREATE POLICY "anon_select_prices"
ON public.prices
FOR SELECT
TO anon
USING (is_published = true);

CREATE POLICY "authenticated_select_prices"
ON public.prices
FOR SELECT
TO authenticated
USING (true);  -- Authenticated users can see all prices (for admin panel)

-- Subscriptions table: same logic
DROP POLICY IF EXISTS "anon_select_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "authenticated_select_subscriptions" ON public.subscriptions;

CREATE POLICY "anon_select_subscriptions"
ON public.subscriptions
FOR SELECT
TO anon
USING (is_published = true);

CREATE POLICY "authenticated_select_subscriptions"
ON public.subscriptions
FOR SELECT
TO authenticated
USING (true);  -- Authenticated users can see all subscriptions

-- Events table: same logic
DROP POLICY IF EXISTS "anon_select_events" ON public.events;
DROP POLICY IF EXISTS "authenticated_select_events" ON public.events;

CREATE POLICY "anon_select_events"
ON public.events
FOR SELECT
TO anon
USING (is_published = true);

CREATE POLICY "authenticated_select_events"
ON public.events
FOR SELECT
TO authenticated
USING (true);  -- Authenticated users can see all events

-- Price categories: allow everyone to read published
DROP POLICY IF EXISTS "anon_select_price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "authenticated_select_price_categories" ON public.price_categories;

CREATE POLICY "anon_select_price_categories"
ON public.price_categories
FOR SELECT
TO anon
USING (is_published = true);

CREATE POLICY "authenticated_select_price_categories"
ON public.price_categories
FOR SELECT
TO authenticated
USING (true);  -- Authenticated users can see all categories

-- Verify policies
SELECT
    tablename,
    policyname,
    roles,
    cmd,
    qual as using_expression
FROM pg_policies
WHERE tablename IN ('prices', 'subscriptions', 'events', 'price_categories')
    AND cmd = 'SELECT'
ORDER BY tablename, policyname;
