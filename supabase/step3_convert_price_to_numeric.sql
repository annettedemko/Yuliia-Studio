-- ШАГ 1: Преобразование колонки price в числовой тип
-- ============================================

-- Проверяем текущий тип
SELECT column_name, data_type 
FROM information_schema.columns
WHERE table_name = 'prices' AND column_name = 'price';

-- Создаем новую числовую колонку
ALTER TABLE public.prices ADD COLUMN price_numeric NUMERIC(10,2);

-- Переносим данные, убирая символы € и пробелы
UPDATE public.prices
SET price_numeric = CAST(
  TRIM(REPLACE(REPLACE(REPLACE(price, '€', ''), ' ', ''), ',', '.'))
  AS NUMERIC
);

-- Проверяем результат конвертации
SELECT service, price AS old_price, price_numeric AS new_price
FROM public.prices
LIMIT 10;

-- Удаляем старую текстовую колонку
ALTER TABLE public.prices DROP COLUMN price;

-- Переименовываем новую колонку в price
ALTER TABLE public.prices RENAME COLUMN price_numeric TO price;

-- Проверяем финальный результат
SELECT service, price, pg_typeof(price) as price_type
FROM public.prices
LIMIT 10;

-- Проверяем что всё работает с категориями
SELECT p.service, p.price, pc.name as category_name
FROM public.prices p
LEFT JOIN public.price_categories pc ON p.category_id = pc.id
LIMIT 10;
