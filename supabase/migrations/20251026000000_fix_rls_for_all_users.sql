-- Fix RLS policies to allow both anonymous and authenticated users to read published content
-- This migration ensures that registered users can also see prices, categories, subscriptions, and promotions

-- ============================================
-- PRICES policies
-- ============================================

-- Drop conflicting policies
DROP POLICY IF EXISTS "anon_select_prices" ON public.prices;
DROP POLICY IF EXISTS "Public read for published prices" ON public.prices;
DROP POLICY IF EXISTS "authenticated_select_prices" ON public.prices;

-- Allow everyone (anon AND authenticated) to read published prices
CREATE POLICY "public_read_published_prices"
ON public.prices FOR SELECT
USING (is_published = true);

-- Keep admin CRUD policies for anon role
-- (INSERT, UPDATE, DELETE policies for anon remain unchanged)

-- ============================================
-- PRICE_CATEGORIES policies
-- ============================================

DROP POLICY IF EXISTS "anon_select_price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "Public read for published price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "authenticated_select_price_categories" ON public.price_categories;

CREATE POLICY "public_read_published_categories"
ON public.price_categories FOR SELECT
USING (is_published = true);

-- ============================================
-- SUBSCRIPTIONS policies
-- ============================================

DROP POLICY IF EXISTS "anon_select_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Public read for published subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "authenticated_select_subscriptions" ON public.subscriptions;

CREATE POLICY "public_read_published_subscriptions"
ON public.subscriptions FOR SELECT
USING (is_published = true);

-- ============================================
-- EVENTS policies
-- ============================================

DROP POLICY IF EXISTS "anon_select_events" ON public.events;
DROP POLICY IF EXISTS "Public read for published events" ON public.events;
DROP POLICY IF EXISTS "authenticated_select_events" ON public.events;

CREATE POLICY "public_read_published_events"
ON public.events FOR SELECT
USING (is_published = true);

-- ============================================
-- PROMOTIONS policies
-- ============================================

DROP POLICY IF EXISTS "anon_select_promotions" ON public.promotions;
DROP POLICY IF EXISTS "Public read active promotions" ON public.promotions;
DROP POLICY IF EXISTS "authenticated_select_promotions" ON public.promotions;

CREATE POLICY "public_read_active_promotions"
ON public.promotions FOR SELECT
USING (is_active = true);

-- ============================================
-- Verification
-- ============================================

-- View all SELECT policies
SELECT
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual as using_expression
FROM pg_policies
WHERE tablename IN ('prices', 'price_categories', 'subscriptions', 'events', 'promotions')
    AND cmd = 'SELECT'
ORDER BY tablename, policyname;
