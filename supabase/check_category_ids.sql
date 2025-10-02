-- Проверяем сколько цен без category_id
SELECT 
    COUNT(*) FILTER (WHERE category_id IS NULL) as without_category_id,
    COUNT(*) FILTER (WHERE category_id IS NOT NULL) as with_category_id,
    COUNT(*) as total
FROM public.prices;

-- Показываем цены без category_id
SELECT id, service, category, category_id
FROM public.prices
WHERE category_id IS NULL
LIMIT 10;

-- Обновляем category_id если пусто (используем скрипт который работал)
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
SELECT 
    COUNT(*) FILTER (WHERE category_id IS NULL) as still_null,
    COUNT(*) FILTER (WHERE category_id IS NOT NULL) as filled,
    COUNT(*) as total
FROM public.prices;

-- Показываем несколько примеров с категориями
SELECT p.service, p.category, pc.name as category_name, p.category_id
FROM public.prices p
LEFT JOIN public.price_categories pc ON p.category_id = pc.id
LIMIT 10;
