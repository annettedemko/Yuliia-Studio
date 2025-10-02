-- Обновляем порядок категорий на странице /preis
-- Новый порядок: Icoone → Manicure → Pedicure → RedTouchPro → Dioden → Alexandrit

UPDATE public.price_categories SET order_index = 1 WHERE code = 'icoone';
UPDATE public.price_categories SET order_index = 2 WHERE code = 'manicure';
UPDATE public.price_categories SET order_index = 3 WHERE code = 'pedicure';
UPDATE public.price_categories SET order_index = 4 WHERE code = 'redtouchpro';
UPDATE public.price_categories SET order_index = 5 WHERE code = 'dioden';
UPDATE public.price_categories SET order_index = 6 WHERE code = 'alexandrit';

-- Проверяем результат
SELECT code, name, order_index
FROM public.price_categories
ORDER BY order_index;
