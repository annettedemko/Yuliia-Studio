-- =====================================================
-- YULIIA CHEPORSKA STUDIO - INITIAL DATABASE SCHEMA
-- =====================================================
-- Complete database schema for all tables
-- Includes: tables, RLS policies, indexes, seed data
-- =====================================================

-- =====================================================
-- 1. TABLES
-- =====================================================

-- Profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'viewer',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Price Categories
CREATE TABLE IF NOT EXISTS public.price_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  color TEXT,
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prices
CREATE TABLE IF NOT EXISTS public.prices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service TEXT NOT NULL,
  price TEXT NOT NULL,
  category TEXT NOT NULL,
  category_id UUID REFERENCES public.price_categories(id) ON DELETE SET NULL,
  note TEXT,
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  period TEXT,
  treatments TEXT,
  frequency TEXT,
  features TEXT[] DEFAULT '{}',
  popular BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  date TEXT,
  time TEXT,
  location TEXT,
  address TEXT,
  description TEXT,
  is_published BOOLEAN DEFAULT true,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Form Submissions
CREATE TABLE IF NOT EXISTS public.form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT,
  page TEXT NOT NULL CHECK (page IN ('deka', 'deka-day', 'kopie-deka-day-anna')),
  owner TEXT NOT NULL CHECK (owner IN ('Others', 'NATALIA', 'ANNA', 'Yulia', 'Lera', 'Liudmila')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Client Tables
CREATE TABLE IF NOT EXISTS public.yulia_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  instagram TEXT,
  warming_level TEXT CHECK (warming_level IN ('hot', 'warm', 'cold')),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.anna_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  instagram TEXT,
  warming_level TEXT CHECK (warming_level IN ('hot', 'warm', 'cold')),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.natalia_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  instagram TEXT,
  warming_level TEXT CHECK (warming_level IN ('hot', 'warm', 'cold')),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.lera_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  instagram TEXT,
  warming_level TEXT CHECK (warming_level IN ('hot', 'warm', 'cold')),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.liudmila_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  instagram TEXT,
  warming_level TEXT CHECK (warming_level IN ('hot', 'warm', 'cold')),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- 2. INDEXES
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_price_categories_code ON public.price_categories(code);
CREATE INDEX IF NOT EXISTS idx_price_categories_published ON public.price_categories(is_published);
CREATE INDEX IF NOT EXISTS idx_price_categories_order ON public.price_categories(order_index);

CREATE INDEX IF NOT EXISTS idx_prices_category ON public.prices(category);
CREATE INDEX IF NOT EXISTS idx_prices_category_id ON public.prices(category_id);
CREATE INDEX IF NOT EXISTS idx_prices_published ON public.prices(is_published);

CREATE INDEX IF NOT EXISTS idx_subscriptions_published ON public.subscriptions(is_published);
CREATE INDEX IF NOT EXISTS idx_events_published ON public.events(is_published);

-- =====================================================
-- 3. RLS - ENABLE
-- =====================================================

ALTER TABLE public.price_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.yulia_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anna_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.natalia_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lera_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.liudmila_clients ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- 4. RLS POLICIES - PUBLIC DATA
-- =====================================================

-- Price Categories - public read access
CREATE POLICY "Enable read access for all users"
ON public.price_categories FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Prices - public read access
CREATE POLICY "Enable read access for all users"
ON public.prices FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Subscriptions - public read access
CREATE POLICY "Enable read access for all users"
ON public.subscriptions FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Events - public read access
CREATE POLICY "Enable read access for all users"
ON public.events FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Form Submissions - public insert
CREATE POLICY "Enable insert for all users"
ON public.form_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- =====================================================
-- 5. RLS POLICIES - ADMIN ACCESS (authenticated users)
-- =====================================================

-- Prices - authenticated can manage
CREATE POLICY "authenticated_insert_prices"
ON public.prices FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "authenticated_update_prices"
ON public.prices FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_prices"
ON public.prices FOR DELETE TO authenticated USING (true);

-- Subscriptions - authenticated can manage
CREATE POLICY "authenticated_insert_subscriptions"
ON public.subscriptions FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "authenticated_update_subscriptions"
ON public.subscriptions FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_subscriptions"
ON public.subscriptions FOR DELETE TO authenticated USING (true);

-- Price Categories - authenticated can manage
CREATE POLICY "authenticated_insert_price_categories"
ON public.price_categories FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "authenticated_update_price_categories"
ON public.price_categories FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_price_categories"
ON public.price_categories FOR DELETE TO authenticated USING (true);

-- Events - authenticated can manage
CREATE POLICY "authenticated_insert_events"
ON public.events FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "authenticated_update_events"
ON public.events FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_events"
ON public.events FOR DELETE TO authenticated USING (true);

-- Form Submissions - authenticated can read/update/delete
CREATE POLICY "Enable select for authenticated"
ON public.form_submissions FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable update for authenticated"
ON public.form_submissions FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated"
ON public.form_submissions FOR DELETE TO authenticated USING (true);

-- =====================================================
-- 6. SEED DATA - CATEGORIES
-- =====================================================

INSERT INTO public.price_categories (code, name, description, icon, color, order_index, is_published)
VALUES
  ('alexandrit', 'Alexandrit Laser Motus AX', 'Professionelle Alexandrit-Laser Haarentfernung', 'Zap', 'rose-gold', 1, true),
  ('dioden', 'M-Tech Diodenlaser', 'Modernste Diodenlaser-Technologie', 'Sparkles', 'primary', 2, true),
  ('icoone', 'Icoone Laser', 'Body Contouring und Hautstraffung', 'Heart', 'rose-gold', 3, true),
  ('redtouchpro', 'RedTouchPro', 'Innovative RedTouchPro Behandlungen für Hautstraffung', 'Waves', 'rose-gold', 4, true),
  ('manicure', 'Maniküre', 'Professionelle Maniküre-Behandlungen', 'Hand', 'rose-gold', 5, true),
  ('pedicure', 'Pediküre', 'Professionelle Pediküre-Behandlungen', 'Heart', 'primary', 6, true)
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  color = EXCLUDED.color,
  order_index = EXCLUDED.order_index,
  is_published = EXCLUDED.is_published;
