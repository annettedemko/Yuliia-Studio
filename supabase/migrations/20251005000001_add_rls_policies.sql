-- Enable RLS for all content tables
ALTER TABLE public.prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Policies for prices table
DO $$
BEGIN
    -- Allow anonymous users to read published prices
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'prices'
        AND policyname = 'anon_select_prices'
    ) THEN
        CREATE POLICY "anon_select_prices"
        ON public.prices
        FOR SELECT
        TO anon
        USING (is_published = true);
    END IF;

    -- Allow authenticated users to read all prices
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'prices'
        AND policyname = 'authenticated_select_prices'
    ) THEN
        CREATE POLICY "authenticated_select_prices"
        ON public.prices
        FOR SELECT
        TO authenticated
        USING (true);
    END IF;

    -- Allow authenticated users to insert prices
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'prices'
        AND policyname = 'authenticated_insert_prices'
    ) THEN
        CREATE POLICY "authenticated_insert_prices"
        ON public.prices
        FOR INSERT
        TO authenticated
        WITH CHECK (true);
    END IF;

    -- Allow authenticated users to update prices
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'prices'
        AND policyname = 'authenticated_update_prices'
    ) THEN
        CREATE POLICY "authenticated_update_prices"
        ON public.prices
        FOR UPDATE
        TO authenticated
        USING (true)
        WITH CHECK (true);
    END IF;

    -- Allow authenticated users to delete prices
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'prices'
        AND policyname = 'authenticated_delete_prices'
    ) THEN
        CREATE POLICY "authenticated_delete_prices"
        ON public.prices
        FOR DELETE
        TO authenticated
        USING (true);
    END IF;
END $$;

-- Policies for subscriptions table
DO $$
BEGIN
    -- Allow anonymous users to read published subscriptions
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'subscriptions'
        AND policyname = 'anon_select_subscriptions'
    ) THEN
        CREATE POLICY "anon_select_subscriptions"
        ON public.subscriptions
        FOR SELECT
        TO anon
        USING (is_published = true);
    END IF;

    -- Allow authenticated users to read all subscriptions
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'subscriptions'
        AND policyname = 'authenticated_select_subscriptions'
    ) THEN
        CREATE POLICY "authenticated_select_subscriptions"
        ON public.subscriptions
        FOR SELECT
        TO authenticated
        USING (true);
    END IF;

    -- Allow authenticated users to insert subscriptions
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'subscriptions'
        AND policyname = 'authenticated_insert_subscriptions'
    ) THEN
        CREATE POLICY "authenticated_insert_subscriptions"
        ON public.subscriptions
        FOR INSERT
        TO authenticated
        WITH CHECK (true);
    END IF;

    -- Allow authenticated users to update subscriptions
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'subscriptions'
        AND policyname = 'authenticated_update_subscriptions'
    ) THEN
        CREATE POLICY "authenticated_update_subscriptions"
        ON public.subscriptions
        FOR UPDATE
        TO authenticated
        USING (true)
        WITH CHECK (true);
    END IF;

    -- Allow authenticated users to delete subscriptions
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'subscriptions'
        AND policyname = 'authenticated_delete_subscriptions'
    ) THEN
        CREATE POLICY "authenticated_delete_subscriptions"
        ON public.subscriptions
        FOR DELETE
        TO authenticated
        USING (true);
    END IF;
END $$;

-- Policies for events table
DO $$
BEGIN
    -- Allow anonymous users to read published events
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'events'
        AND policyname = 'anon_select_events'
    ) THEN
        CREATE POLICY "anon_select_events"
        ON public.events
        FOR SELECT
        TO anon
        USING (is_published = true);
    END IF;

    -- Allow authenticated users to read all events
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'events'
        AND policyname = 'authenticated_select_events'
    ) THEN
        CREATE POLICY "authenticated_select_events"
        ON public.events
        FOR SELECT
        TO authenticated
        USING (true);
    END IF;

    -- Allow authenticated users to insert events
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'events'
        AND policyname = 'authenticated_insert_events'
    ) THEN
        CREATE POLICY "authenticated_insert_events"
        ON public.events
        FOR INSERT
        TO authenticated
        WITH CHECK (true);
    END IF;

    -- Allow authenticated users to update events
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'events'
        AND policyname = 'authenticated_update_events'
    ) THEN
        CREATE POLICY "authenticated_update_events"
        ON public.events
        FOR UPDATE
        TO authenticated
        USING (true)
        WITH CHECK (true);
    END IF;

    -- Allow authenticated users to delete events
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'events'
        AND policyname = 'authenticated_delete_events'
    ) THEN
        CREATE POLICY "authenticated_delete_events"
        ON public.events
        FOR DELETE
        TO authenticated
        USING (true);
    END IF;
END $$;

-- Add missing policies for price_categories (insert, update, delete)
DO $$
BEGIN
    -- Allow authenticated users to insert categories
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'price_categories'
        AND policyname = 'authenticated_insert_price_categories'
    ) THEN
        CREATE POLICY "authenticated_insert_price_categories"
        ON public.price_categories
        FOR INSERT
        TO authenticated
        WITH CHECK (true);
    END IF;

    -- Allow authenticated users to update categories
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'price_categories'
        AND policyname = 'authenticated_update_price_categories'
    ) THEN
        CREATE POLICY "authenticated_update_price_categories"
        ON public.price_categories
        FOR UPDATE
        TO authenticated
        USING (true)
        WITH CHECK (true);
    END IF;

    -- Allow authenticated users to delete categories
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'price_categories'
        AND policyname = 'authenticated_delete_price_categories'
    ) THEN
        CREATE POLICY "authenticated_delete_price_categories"
        ON public.price_categories
        FOR DELETE
        TO authenticated
        USING (true);
    END IF;
END $$;

-- Comments for documentation
COMMENT ON POLICY "anon_select_prices" ON public.prices IS 'Allow anonymous users to view published prices';
COMMENT ON POLICY "anon_select_subscriptions" ON public.subscriptions IS 'Allow anonymous users to view published subscriptions';
COMMENT ON POLICY "anon_select_events" ON public.events IS 'Allow anonymous users to view published events';
