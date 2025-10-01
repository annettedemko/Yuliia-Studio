-- Complete schema update for multi-user admin system
-- This migration includes all schema changes needed for the application

-- 1. Create form_owner enum if it doesn't exist, or update existing one
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'form_owner') THEN
        CREATE TYPE public.form_owner AS ENUM ('Others', 'NATALIA', 'ANNA', 'Yulia', 'Natalia', 'Anna', 'Lera', 'Liudmila');
    ELSE
        -- Add new values to existing enum (will skip if already exist)
        BEGIN
            ALTER TYPE public.form_owner ADD VALUE 'Yulia';
        EXCEPTION WHEN duplicate_object THEN
            NULL; -- Value already exists, ignore
        END;
        BEGIN
            ALTER TYPE public.form_owner ADD VALUE 'Natalia';
        EXCEPTION WHEN duplicate_object THEN
            NULL; -- Value already exists, ignore
        END;
        BEGIN
            ALTER TYPE public.form_owner ADD VALUE 'Anna';
        EXCEPTION WHEN duplicate_object THEN
            NULL; -- Value already exists, ignore
        END;
        BEGIN
            ALTER TYPE public.form_owner ADD VALUE 'Lera';
        EXCEPTION WHEN duplicate_object THEN
            NULL; -- Value already exists, ignore
        END;
        BEGIN
            ALTER TYPE public.form_owner ADD VALUE 'Liudmila';
        EXCEPTION WHEN duplicate_object THEN
            NULL; -- Value already exists, ignore
        END;
    END IF;
END $$;

-- 2. Create price_category enum if it doesn't exist, or update existing one
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'price_category') THEN
        CREATE TYPE public.price_category AS ENUM ('alexandrit', 'dioden', 'icoone', 'manicure', 'pedicure', 'redtouchpro');
    ELSE
        -- Add redtouchpro to existing enum (will skip if already exists)
        BEGIN
            ALTER TYPE public.price_category ADD VALUE 'redtouchpro';
        EXCEPTION WHEN duplicate_object THEN
            NULL; -- Value already exists, ignore
        END;
    END IF;
END $$;

-- 3. Create admin_users table for simple authentication
CREATE TABLE IF NOT EXISTS public.admin_users (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text UNIQUE NOT NULL,
    password text NOT NULL,
    role text DEFAULT 'admin',
    created_at timestamptz DEFAULT now()
);

-- 4. Insert admin users
INSERT INTO public.admin_users (email, password, role) VALUES
('admin@beauty.com', 'Admin2024!', 'admin'),
('anna@beauty.com', 'Anna2024!', 'anna'),
('natalia@beauty.com', 'Natalia2024!', 'natalia'),
('yulia@beauty.com', 'Yulia2024!', 'yulia'),
('lera@beauty.com', 'Lera2024!', 'lera'),
('liudmila@beauty.com', 'Liudmila2024!', 'liudmila')
ON CONFLICT (email) DO NOTHING;

-- 5. Create client tables for each user

-- Anna clients table
CREATE TABLE IF NOT EXISTS public.anna_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Natalia clients table
CREATE TABLE IF NOT EXISTS public.natalia_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Yulia clients table
CREATE TABLE IF NOT EXISTS public.yulia_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Lera clients table
CREATE TABLE IF NOT EXISTS public.lera_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Liudmila clients table
CREATE TABLE IF NOT EXISTS public.liudmila_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- 6. Create price_categories table
CREATE TABLE IF NOT EXISTS public.price_categories (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    code text UNIQUE NOT NULL,
    name text NOT NULL,
    description text,
    icon text,
    color text DEFAULT 'rose-gold',
    order_index integer DEFAULT 0,
    is_published boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Insert price categories
INSERT INTO public.price_categories (code, name, description, icon, color, order_index) VALUES
('alexandrit', 'Alexandrit Laser Motus AX', 'Professionelle Alexandrit-Laser Haarentfernung', 'Zap', 'rose-gold', 1),
('dioden', 'M-Tech Diodenlaser', 'Modernste Diodenlaser-Technologie', 'Sparkles', 'primary', 2),
('icoone', 'Icoone Laser', 'Body Contouring und Hautstraffung', 'Heart', 'rose-gold', 3),
('redtouchpro', 'RedTouchPro', 'Innovative RedTouchPro Behandlungen für Hautstraffung', 'Waves', 'rose-gold', 4),
('manicure', 'Maniküre', 'Professionelle Maniküre-Behandlungen', 'Hand', 'rose-gold', 5),
('pedicure', 'Pediküre', 'Professionelle Pediküre-Behandlungen', 'Heart', 'primary', 6)
ON CONFLICT (code) DO NOTHING;

-- 7. Add category_id to prices table if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'prices' AND column_name = 'category_id') THEN
        ALTER TABLE public.prices ADD COLUMN category_id uuid;
    END IF;
END $$;

-- 8. Update existing prices with category_id
UPDATE public.prices SET category_id = (
    SELECT id FROM public.price_categories WHERE code = prices.category::text
) WHERE category_id IS NULL;

-- 9. Create missing core tables if they don't exist

-- Create form_submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.form_submissions (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    name text NOT NULL,
    phone text NOT NULL,
    email text,
    message text,
    page text NOT NULL,
    owner public.form_owner DEFAULT 'Others'::public.form_owner NOT NULL,
    created_at timestamptz DEFAULT now()
);

-- Create events table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.events (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    title text NOT NULL,
    date date,
    time text,
    location text,
    address text,
    description text,
    is_published boolean DEFAULT true NOT NULL,
    created_at timestamptz DEFAULT now() NOT NULL,
    updated_at timestamptz DEFAULT now() NOT NULL,
    user_id uuid
);

-- Create prices table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.prices (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    service text NOT NULL,
    price text NOT NULL,
    category public.price_category NOT NULL,
    note text,
    order_index integer DEFAULT 0 NOT NULL,
    is_published boolean DEFAULT true NOT NULL,
    created_at timestamptz DEFAULT now() NOT NULL,
    updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create subscriptions table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    name text NOT NULL,
    price text NOT NULL,
    period text,
    treatments text,
    frequency text,
    features text[] DEFAULT ARRAY[]::text[],
    popular boolean DEFAULT false NOT NULL,
    order_index integer DEFAULT 0 NOT NULL,
    is_published boolean DEFAULT true NOT NULL,
    created_at timestamptz DEFAULT now() NOT NULL,
    updated_at timestamptz DEFAULT now() NOT NULL
);

-- 10. Enable RLS first, then disable it for all tables to allow public access
DO $$
DECLARE
    tbl_name text;
    tables_to_process text[] := ARRAY['admin_users', 'anna_clients', 'natalia_clients', 'yulia_clients', 'lera_clients', 'liudmila_clients', 'price_categories', 'prices', 'subscriptions', 'events', 'form_submissions'];
BEGIN
    FOREACH tbl_name IN ARRAY tables_to_process
    LOOP
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = tbl_name AND table_schema = 'public') THEN
            -- First enable RLS if not already enabled
            EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', tbl_name);
            -- Then disable it for our use case
            EXECUTE format('ALTER TABLE public.%I DISABLE ROW LEVEL SECURITY', tbl_name);
        END IF;
    END LOOP;
END $$;

-- 11. Grant permissions (only if tables exist)
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'admin_users') THEN
        GRANT ALL ON public.admin_users TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'anna_clients') THEN
        GRANT ALL ON public.anna_clients TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'natalia_clients') THEN
        GRANT ALL ON public.natalia_clients TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'yulia_clients') THEN
        GRANT ALL ON public.yulia_clients TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'lera_clients') THEN
        GRANT ALL ON public.lera_clients TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'liudmila_clients') THEN
        GRANT ALL ON public.liudmila_clients TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'price_categories') THEN
        GRANT ALL ON public.price_categories TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'prices') THEN
        GRANT ALL ON public.prices TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'subscriptions') THEN
        GRANT ALL ON public.subscriptions TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'events') THEN
        GRANT ALL ON public.events TO anon, authenticated, service_role;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'form_submissions') THEN
        GRANT ALL ON public.form_submissions TO anon, authenticated, service_role;
    END IF;
END $$;

-- 11. Insert RedTouchPro prices
INSERT INTO public.prices (service, price, category) VALUES
('Am Körper bei der Behandlung 10×10 cm / По телу при процедуре 10×10 см', '50€ (15 хв)', 'redtouchpro'),
('Primär eine Fläche von 10×10 cm am Körper / По телу первично 10×10 см', '100€ (15 хв)', 'redtouchpro'),
('die Hand / Кисти рук', '100€ (30 хв)', 'redtouchpro'),
('Hals / Шея', '150€ (1 г)', 'redtouchpro'),
('Dekolleté / Декольте', '150€ (1 г)', 'redtouchpro'),
('Gesicht / Лицо', '250€ (1 г)', 'redtouchpro'),
('Unterarm mit Hand / Руки до локтя с кистью', '250€ (30 хв)', 'redtouchpro'),
('Gesicht + Hals / Лицо + Шея', '350€ (1 г 15 хв)', 'redtouchpro'),
('Gesicht + Hals + Dekolleté / Лицо + Шея + Декольте', '450€ (1 г 30 хв)', 'redtouchpro'),
('Bikini / Бикини', '200€ (45 хв)', 'redtouchpro')
ON CONFLICT DO NOTHING;