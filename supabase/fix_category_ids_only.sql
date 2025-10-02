-- Простой скрипт только для обновления category_id
-- Без проверки типов, используем CAST

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'alexandrit')
WHERE CAST(category AS text) = 'alexandrit' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'dioden')
WHERE CAST(category AS text) = 'dioden' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'icoone')
WHERE CAST(category AS text) = 'icoone' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'redtouchpro')
WHERE CAST(category AS text) = 'redtouchpro' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'manicure')
WHERE CAST(category AS text) = 'manicure' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'pedicure')
WHERE CAST(category AS text) = 'pedicure' AND category_id IS NULL;

-- Проверяем результат
SELECT COUNT(*) as updated_count FROM public.prices WHERE category_id IS NOT NULL;
SELECT p.service, CAST(p.category AS text) as category, pc.name, p.category_id
FROM public.prices p
LEFT JOIN public.price_categories pc ON p.category_id = pc.id
LIMIT 10;
