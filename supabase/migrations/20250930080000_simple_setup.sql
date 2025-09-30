-- Простая установка всей схемы и данных

-- Создаем таблицы без RLS
CREATE TABLE IF NOT EXISTS public.prices (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    service text NOT NULL,
    price text NOT NULL,
    category text NOT NULL,
    note text,
    order_index integer DEFAULT 0,
    is_published boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.subscriptions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    price text NOT NULL,
    period text,
    treatments text,
    frequency text,
    features text[] DEFAULT ARRAY[]::text[],
    popular boolean DEFAULT false,
    order_index integer DEFAULT 0,
    is_published boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.events (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title text NOT NULL,
    date date,
    time text,
    location text,
    address text,
    description text,
    is_published boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    user_id uuid
);

-- Отключаем RLS для всех таблиц
ALTER TABLE public.prices DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.events DISABLE ROW LEVEL SECURITY;

-- Даем доступ всем ролям
GRANT ALL ON public.prices TO anon, authenticated, service_role;
GRANT ALL ON public.subscriptions TO anon, authenticated, service_role;
GRANT ALL ON public.events TO anon, authenticated, service_role;

-- Очищаем существующие данные
TRUNCATE public.prices, public.subscriptions, public.events CASCADE;

-- Добавляем тестовые данные
INSERT INTO public.prices (service, price, category) VALUES
('Oberlippe', '35€', 'alexandrit'),
('Kinn', '35€', 'alexandrit'),
('Achselhöhlen', '60€', 'alexandrit'),
('Bikini Komplett', '120€', 'alexandrit'),
('Beine komplett', '200€', 'alexandrit'),
('Oberlippe Dioden', '30€', 'dioden'),
('Achselhöhlen Dioden', '50€', 'dioden'),
('Bikini Dioden', '100€', 'dioden'),
('Icoone Body Behandlung', '80€', 'icoone'),
('Icoone Gesicht', '60€', 'icoone'),
('Maniküre klassisch', '25€', 'manicure'),
('Maniküre Gel', '35€', 'manicure'),
('Pediküre klassisch', '30€', 'pedicure'),
('Pediküre Gel', '40€', 'pedicure');

INSERT INTO public.subscriptions (name, price, period, treatments, frequency, features, popular) VALUES
('Silber', '300€', 'pro Monat', '72 Behandlungen', '2x pro Woche',
 ARRAY['Icoone Laser Body Contouring', 'Persönliche Beratung', 'Flexible Terminplanung'], false),
('Gold', '400€', 'pro Monat', '106 Behandlungen', '3x pro Woche',
 ARRAY['Icoone Laser Body Contouring', 'Persönliche Beratung', 'Flexible Terminplanung', 'Hautanalyse inklusive', 'Prioritäre Terminvergabe'], true),
('Platin', '500€', 'pro Monat', '150 Behandlungen', '4x pro Woche',
 ARRAY['Icoone Laser Body Contouring', 'Persönliche Beratung', 'Flexible Terminplanung', 'Hautanalyse inklusive', 'Prioritäre Terminvergabe', 'Kostenlose Zusatzbehandlungen', 'Exklusive VIP-Betreuung'], false);

INSERT INTO public.events (title, date, time, location, address, description) VALUES
('DEKA Beauty Day', '2025-10-05', '18:00', 'Yuliia Cheporska Studio', 'Elsässer Straße 33, 81667 München', 'Exklusive Präsentation der neuesten DEKA Technologien'),
('BEAUTY FORUM Festival 2025', '2025-10-18', '10:00–17:00', 'Messe München', 'Am Messesee 2, 81829 München', 'Besuchen Sie den DEKA-Stand'),
('DEKA Beauty Day', '2025-11-09', '18:00', 'Yuliia Cheporska Studio', 'Elsässer Straße 33, 81667 München', 'Exklusive Präsentation der neuesten DEKA Technologien'),
('DEKA Beauty Day', '2025-12-17', '18:00', 'Yuliia Cheporska Studio', 'Elsässer Straße 33, 81667 München', 'Exklusive Präsentation der neuesten DEKA Technologien');

-- Простая таблица для админов
CREATE TABLE IF NOT EXISTS public.admin_users (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text UNIQUE NOT NULL,
    password text NOT NULL,
    role text DEFAULT 'admin',
    created_at timestamptz DEFAULT now()
);

-- Отключаем RLS
ALTER TABLE public.admin_users DISABLE ROW LEVEL SECURITY;
GRANT ALL ON public.admin_users TO anon, authenticated, service_role;

-- Добавляем простых админов
INSERT INTO public.admin_users (email, password, role) VALUES
('admin@beauty.com', 'Admin2024!', 'admin'),
('anna@beauty.com', 'Anna2024!', 'anna'),
('natalia@beauty.com', 'Natalia2024!', 'natalia');