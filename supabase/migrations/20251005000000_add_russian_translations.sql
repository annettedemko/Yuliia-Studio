-- Add Russian translation columns to price_categories
ALTER TABLE public.price_categories
ADD COLUMN IF NOT EXISTS name_ru TEXT,
ADD COLUMN IF NOT EXISTS description_ru TEXT;

-- Add Russian translation columns to prices
ALTER TABLE public.prices
ADD COLUMN IF NOT EXISTS service_ru TEXT,
ADD COLUMN IF NOT EXISTS note_ru TEXT;

-- Add Russian translation columns to subscriptions
ALTER TABLE public.subscriptions
ADD COLUMN IF NOT EXISTS period_ru TEXT,
ADD COLUMN IF NOT EXISTS treatments_ru TEXT,
ADD COLUMN IF NOT EXISTS frequency_ru TEXT;

-- Add Russian translation columns to events
ALTER TABLE public.events
ADD COLUMN IF NOT EXISTS title_ru TEXT,
ADD COLUMN IF NOT EXISTS description_ru TEXT;

-- Enable RLS for price_categories if not already enabled
ALTER TABLE public.price_categories ENABLE ROW LEVEL SECURITY;

-- Add policies for price_categories (if not exists)
DO $$
BEGIN
    -- Allow anonymous users to read published categories
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'price_categories'
        AND policyname = 'anon_select_price_categories'
    ) THEN
        CREATE POLICY "anon_select_price_categories"
        ON public.price_categories
        FOR SELECT
        TO anon
        USING (is_published = true);
    END IF;

    -- Allow authenticated users to read all categories
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'price_categories'
        AND policyname = 'authenticated_select_price_categories'
    ) THEN
        CREATE POLICY "authenticated_select_price_categories"
        ON public.price_categories
        FOR SELECT
        TO authenticated
        USING (true);
    END IF;
END $$;

-- Comments for documentation
COMMENT ON COLUMN public.price_categories.name_ru IS 'Russian translation of category name';
COMMENT ON COLUMN public.price_categories.description_ru IS 'Russian translation of category description';
COMMENT ON COLUMN public.prices.service_ru IS 'Russian translation of service name';
COMMENT ON COLUMN public.prices.note_ru IS 'Russian translation of note';
COMMENT ON COLUMN public.subscriptions.period_ru IS 'Russian translation of period (e.g., "в месяц")';
COMMENT ON COLUMN public.subscriptions.treatments_ru IS 'Russian translation of treatments (e.g., "72 процедуры")';
COMMENT ON COLUMN public.subscriptions.frequency_ru IS 'Russian translation of frequency (e.g., "2 раза в неделю")';
COMMENT ON COLUMN public.events.title_ru IS 'Russian translation of event title';
COMMENT ON COLUMN public.events.description_ru IS 'Russian translation of event description';
