-- Simplify RLS for public data tables
-- Allow everyone (authenticated and anonymous) to read published content

-- PRICES: Everyone can read published prices
DROP POLICY IF EXISTS "anon_select_prices" ON public.prices;
DROP POLICY IF EXISTS "authenticated_select_prices" ON public.prices;
DROP POLICY IF EXISTS "Public read for published prices" ON public.prices;

CREATE POLICY "Public read for published prices"
ON public.prices
FOR SELECT
USING (is_published = true);

-- SUBSCRIPTIONS: Everyone can read published subscriptions
DROP POLICY IF EXISTS "anon_select_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "authenticated_select_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Public read for published subscriptions" ON public.subscriptions;

CREATE POLICY "Public read for published subscriptions"
ON public.subscriptions
FOR SELECT
USING (is_published = true);

-- EVENTS: Everyone can read published events
DROP POLICY IF EXISTS "anon_select_events" ON public.events;
DROP POLICY IF EXISTS "authenticated_select_events" ON public.events;
DROP POLICY IF EXISTS "Public read for published events" ON public.events;

CREATE POLICY "Public read for published events"
ON public.events
FOR SELECT
USING (is_published = true);

-- PRICE_CATEGORIES: Everyone can read published categories
DROP POLICY IF EXISTS "anon_select_price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "authenticated_select_price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "Public read for published price_categories" ON public.price_categories;

CREATE POLICY "Public read for published price_categories"
ON public.price_categories
FOR SELECT
USING (is_published = true);

-- Verification
SELECT
    tablename,
    policyname,
    cmd,
    qual as using_expression
FROM pg_policies
WHERE tablename IN ('prices', 'subscriptions', 'events', 'price_categories')
    AND cmd = 'SELECT'
ORDER BY tablename;
