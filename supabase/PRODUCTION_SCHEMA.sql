-- =====================================================
-- YULIIA CHEPORSKA STUDIO - PRODUCTION DATABASE SCHEMA
-- =====================================================
-- Полная схема базы данных для production
-- Включает: таблицы, RLS политики, индексы
-- Дата: 2025-10-10
-- =====================================================

-- =====================================================
-- 1. ТАБЛИЦЫ
-- =====================================================

-- Users & Authentication (managed by Supabase Auth)
-- auth.users - стандартная таблица Supabase

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
  name_ru TEXT,
  description TEXT,
  description_ru TEXT,
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
  service_ru TEXT,
  price TEXT NOT NULL,
  category TEXT NOT NULL,
  category_id UUID REFERENCES public.price_categories(id) ON DELETE SET NULL,
  note TEXT,
  note_ru TEXT,
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
  period_ru TEXT,
  treatments TEXT,
  treatments_ru TEXT,
  frequency TEXT,
  frequency_ru TEXT,
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
  title_ru TEXT,
  date TEXT,
  time TEXT,
  location TEXT,
  address TEXT,
  description TEXT,
  description_ru TEXT,
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
  owner TEXT NOT NULL CHECK (owner IN ('Others', 'NATALIA', 'ANNA')),
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
-- 2. RLS POLICIES - PUBLIC DATA (анонимные + авторизованные)
-- =====================================================

-- Enable RLS
ALTER TABLE public.price_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Price Categories - публичный доступ
DROP POLICY IF EXISTS "Enable read access for all users" ON public.price_categories;
CREATE POLICY "Enable read access for all users"
ON public.price_categories FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Prices - публичный доступ
DROP POLICY IF EXISTS "Enable read access for all users" ON public.prices;
CREATE POLICY "Enable read access for all users"
ON public.prices FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Subscriptions - публичный доступ
DROP POLICY IF EXISTS "Enable read access for all users" ON public.subscriptions;
CREATE POLICY "Enable read access for all users"
ON public.subscriptions FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Events - публичный доступ
DROP POLICY IF EXISTS "Enable read access for all users" ON public.events;
CREATE POLICY "Enable read access for all users"
ON public.events FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Form Submissions - публичная вставка
DROP POLICY IF EXISTS "Enable insert for all users" ON public.form_submissions;
CREATE POLICY "Enable insert for all users"
ON public.form_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- =====================================================
-- 3. RLS POLICIES - ADMIN ACCESS
-- =====================================================

-- Admin can manage everything
DROP POLICY IF EXISTS "authenticated_insert_prices" ON public.prices;
DROP POLICY IF EXISTS "authenticated_update_prices" ON public.prices;
DROP POLICY IF EXISTS "authenticated_delete_prices" ON public.prices;

CREATE POLICY "authenticated_insert_prices"
ON public.prices FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "authenticated_update_prices"
ON public.prices FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_prices"
ON public.prices FOR DELETE TO authenticated USING (true);

-- Similar for other tables...
DROP POLICY IF EXISTS "authenticated_insert_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "authenticated_update_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "authenticated_delete_subscriptions" ON public.subscriptions;

CREATE POLICY "authenticated_insert_subscriptions"
ON public.subscriptions FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "authenticated_update_subscriptions"
ON public.subscriptions FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_subscriptions"
ON public.subscriptions FOR DELETE TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_insert_price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "authenticated_update_price_categories" ON public.price_categories;
DROP POLICY IF EXISTS "authenticated_delete_price_categories" ON public.price_categories;

CREATE POLICY "authenticated_insert_price_categories"
ON public.price_categories FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "authenticated_update_price_categories"
ON public.price_categories FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_price_categories"
ON public.price_categories FOR DELETE TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_insert_events" ON public.events;
DROP POLICY IF EXISTS "authenticated_update_events" ON public.events;
DROP POLICY IF EXISTS "authenticated_delete_events" ON public.events;

CREATE POLICY "authenticated_insert_events"
ON public.events FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "authenticated_update_events"
ON public.events FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_events"
ON public.events FOR DELETE TO authenticated USING (true);

-- Form Submissions - authenticated can read/update/delete
DROP POLICY IF EXISTS "Enable select for authenticated" ON public.form_submissions;
DROP POLICY IF EXISTS "Enable update for authenticated" ON public.form_submissions;
DROP POLICY IF EXISTS "Enable delete for authenticated" ON public.form_submissions;

CREATE POLICY "Enable select for authenticated"
ON public.form_submissions FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable update for authenticated"
ON public.form_submissions FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated"
ON public.form_submissions FOR DELETE TO authenticated USING (true);

-- =====================================================
-- 4. RLS POLICIES - CLIENT TABLES
-- =====================================================

-- Enable RLS on client tables
ALTER TABLE public.yulia_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anna_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.natalia_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lera_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.liudmila_clients ENABLE ROW LEVEL SECURITY;

-- Yulia Clients
DROP POLICY IF EXISTS "Yulia can manage her clients" ON public.yulia_clients;
CREATE POLICY "Yulia can manage her clients"
ON public.yulia_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'yulia'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'yulia'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'yulia'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'yulia'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- Anna Clients
DROP POLICY IF EXISTS "Anna can manage her clients" ON public.anna_clients;
CREATE POLICY "Anna can manage her clients"
ON public.anna_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'anna'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'anna'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'anna'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'anna'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- Natalia Clients
DROP POLICY IF EXISTS "Natalia can manage her clients" ON public.natalia_clients;
CREATE POLICY "Natalia can manage her clients"
ON public.natalia_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'natalia'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'natalia'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'natalia'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'natalia'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- Lera Clients
DROP POLICY IF EXISTS "Lera can manage her clients" ON public.lera_clients;
CREATE POLICY "Lera can manage her clients"
ON public.lera_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'lera'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'lera'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'lera'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'lera'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- Liudmila Clients
DROP POLICY IF EXISTS "Liudmila can manage her clients" ON public.liudmila_clients;
CREATE POLICY "Liudmila can manage her clients"
ON public.liudmila_clients FOR ALL TO authenticated
USING (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'liudmila'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'liudmila'
  OR (auth.jwt() ->> 'role') = 'admin'
)
WITH CHECK (
  (auth.jwt() -> 'user_metadata' ->> 'role') = 'liudmila'
  OR (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  OR (auth.jwt() ->> 'role') = 'liudmila'
  OR (auth.jwt() ->> 'role') = 'admin'
);

-- =====================================================
-- 5. SEED DATA - CATEGORIES
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

-- =====================================================
-- END OF SCHEMA
-- =====================================================
