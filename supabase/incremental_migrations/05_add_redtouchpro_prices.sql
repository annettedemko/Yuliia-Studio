-- Step 5: Add RedTouchPro prices and finalize setup
-- This migration adds the new RedTouchPro service prices

-- Insert RedTouchPro prices
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

-- Update the category_id for the new RedTouchPro prices
UPDATE public.prices SET category_id = (
    SELECT id FROM public.price_categories WHERE code = 'redtouchpro'
) WHERE category = 'redtouchpro' AND category_id IS NULL;