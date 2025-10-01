-- Step 3: Create admin_users table and insert admin accounts
-- This migration creates a simple authentication system for the multi-user admin panel

-- Create admin_users table for simple authentication
CREATE TABLE IF NOT EXISTS public.admin_users (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text UNIQUE NOT NULL,
    password text NOT NULL,
    role text DEFAULT 'admin',
    created_at timestamptz DEFAULT now()
);

-- Insert admin users (passwords are plain text for simplicity)
INSERT INTO public.admin_users (email, password, role) VALUES
('admin@beauty.com', 'Admin2024!', 'admin'),
('anna@beauty.com', 'Anna2024!', 'anna'),
('natalia@beauty.com', 'Natalia2024!', 'natalia'),
('yulia@beauty.com', 'Yulia2024!', 'yulia'),
('lera@beauty.com', 'Lera2024!', 'lera'),
('liudmila@beauty.com', 'Liudmila2024!', 'liudmila')
ON CONFLICT (email) DO NOTHING;

-- Create price_categories table for better categorization
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

-- Add category_id to prices table if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'prices' AND column_name = 'category_id') THEN
        ALTER TABLE public.prices ADD COLUMN category_id uuid;
    END IF;
END $$;

-- Update existing prices with category_id
UPDATE public.prices SET category_id = (
    SELECT id FROM public.price_categories WHERE code = prices.category::text
) WHERE category_id IS NULL;

-- Add updated_at trigger for price_categories
CREATE OR REPLACE TRIGGER set_updated_at_price_categories
    BEFORE UPDATE ON public.price_categories
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();