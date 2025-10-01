-- Complete schema update for multi-user admin system
-- This migration includes all schema changes needed for the application

-- 1. Update form_owner enum to include all users
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Yulia';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Natalia';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Anna';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Lera';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Liudmila';

-- 2. Update price_category enum to include all categories
ALTER TYPE public.price_category ADD VALUE IF NOT EXISTS 'redtouchpro';

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

-- 9. Disable RLS for all tables to allow public access
ALTER TABLE public.admin_users DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.anna_clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.natalia_clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.yulia_clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.lera_clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.liudmila_clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.price_categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.prices DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.events DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions DISABLE ROW LEVEL SECURITY;

-- 10. Grant permissions
GRANT ALL ON public.admin_users TO anon, authenticated, service_role;
GRANT ALL ON public.anna_clients TO anon, authenticated, service_role;
GRANT ALL ON public.natalia_clients TO anon, authenticated, service_role;
GRANT ALL ON public.yulia_clients TO anon, authenticated, service_role;
GRANT ALL ON public.lera_clients TO anon, authenticated, service_role;
GRANT ALL ON public.liudmila_clients TO anon, authenticated, service_role;
GRANT ALL ON public.price_categories TO anon, authenticated, service_role;
GRANT ALL ON public.prices TO anon, authenticated, service_role;
GRANT ALL ON public.subscriptions TO anon, authenticated, service_role;
GRANT ALL ON public.events TO anon, authenticated, service_role;
GRANT ALL ON public.form_submissions TO anon, authenticated, service_role;

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