-- Create promotions table for managing special offers and discounts
CREATE TABLE IF NOT EXISTS public.promotions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title_de text NOT NULL,
    title_ru text NOT NULL,
    description_de text NOT NULL,
    description_ru text NOT NULL,
    discount_text_de text,
    discount_text_ru text,
    valid_until timestamp with time zone,
    is_active boolean DEFAULT true,
    display_order integer DEFAULT 0,
    icon text DEFAULT 'Sparkles',
    color text DEFAULT 'rose-gold',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add RLS policies
ALTER TABLE public.promotions ENABLE ROW LEVEL SECURITY;

-- Allow public read access for active promotions
CREATE POLICY "Public can view active promotions"
    ON public.promotions
    FOR SELECT
    USING (is_active = true);

-- Allow authenticated users to manage promotions
CREATE POLICY "Authenticated users can manage promotions"
    ON public.promotions
    FOR ALL
    USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS promotions_active_order_idx
    ON public.promotions(is_active, display_order);

-- Insert initial promotions
INSERT INTO public.promotions (title_de, title_ru, description_de, description_ru, discount_text_de, discount_text_ru, valid_until, display_order, icon, color) VALUES
(
    'Icoone Erstbehandlung -50%',
    'Первое посещение Icoone -50%',
    'Erleben Sie bei Ihrem ersten Besuch die innovative Icoone-Behandlung mit 50% Rabatt!',
    'Испытайте инновационную процедуру Icoone со скидкой 50% при первом посещении!',
    '-50%',
    '-50%',
    NULL,
    1,
    'Sparkles',
    'rose-gold'
),
(
    'Bikini + Achseln gratis',
    'Бикини + подмышки в подарок',
    'Buchen Sie eine Bikini-Zone Behandlung mit dem Alexandrit-Laser und erhalten Sie die Achseln kostenlos dazu!',
    'Закажите эпиляцию зоны бикини на александритовом лазере и получите подмышки в подарок!',
    'Achseln Gratis',
    'Подмышки в подарок',
    '2025-11-15 23:59:59+00',
    2,
    'Zap',
    'primary'
),
(
    'Freundin mitbringen = Geschenk',
    'Приведи подругу = подарок',
    'Bringen Sie eine Freundin zur Laserbehandlung ab 250€ und erhalten Sie eine Massage oder Achsel-Epilation gratis!',
    'Приведите подругу на лазерную эпиляцию от 250€ и получите массаж или эпиляцию подмышек в подарок!',
    'Gratis Massage',
    'Массаж в подарок',
    NULL,
    3,
    'Heart',
    'rose-gold'
);
