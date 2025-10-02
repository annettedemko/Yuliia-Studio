-- ============================================
-- ШАГИ ДЛЯ PRODUCTION БАЗЫ ДАННЫХ
-- ============================================

-- ШАГ 1: Преобразование колонки price в числовой тип
-- ============================================

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


-- ШАГ 2: Добавление Foreign Key для связи prices <-> price_categories
-- ============================================

-- Добавляем category_id если его нет
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'prices' AND column_name = 'category_id'
    ) THEN
        ALTER TABLE public.prices ADD COLUMN category_id uuid;
    END IF;
END $$;

-- Обновляем category_id на основе текстового поля category
-- Используем отдельные UPDATE для каждой категории (безопасный подход)
UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'alexandrit')
WHERE category = 'alexandrit' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'dioden')
WHERE category = 'dioden' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'icoone')
WHERE category = 'icoone' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'redtouchpro')
WHERE category = 'redtouchpro' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'manicure')
WHERE category = 'manicure' AND category_id IS NULL;

UPDATE public.prices
SET category_id = (SELECT id FROM public.price_categories WHERE code = 'pedicure')
WHERE category = 'pedicure' AND category_id IS NULL;

-- Добавляем foreign key constraint
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'prices_category_id_fkey'
    ) THEN
        ALTER TABLE public.prices 
        ADD CONSTRAINT prices_category_id_fkey 
        FOREIGN KEY (category_id) 
        REFERENCES public.price_categories(id);
    END IF;
END $$;


-- ШАГ 3: Настройка RLS политик
-- ============================================

-- PRICES - публичное чтение
ALTER TABLE public.prices ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read access to prices" ON public.prices;
CREATE POLICY "Allow public read access to prices"
ON public.prices FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- PRICE_CATEGORIES - публичное чтение
ALTER TABLE public.price_categories ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read access to price_categories" ON public.price_categories;
CREATE POLICY "Allow public read access to price_categories"
ON public.price_categories FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- SUBSCRIPTIONS - публичное чтение
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read access to subscriptions" ON public.subscriptions;
CREATE POLICY "Allow public read access to subscriptions"
ON public.subscriptions FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- EVENTS - анонимные могут создавать, authenticated читают свои
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can read own events" ON public.events;
DROP POLICY IF EXISTS "Allow anon to insert events" ON public.events;

CREATE POLICY "Allow anon to insert events"
ON public.events FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Users can read own events"
ON public.events FOR SELECT
TO authenticated
USING (auth.uid()::text = user_id);

-- FORM_SUBMISSIONS - анонимные могут отправлять, authenticated читают все
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow anon to insert submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Authenticated can read all submissions" ON public.form_submissions;

CREATE POLICY "Allow anon to insert submissions"
ON public.form_submissions FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated can read all submissions"
ON public.form_submissions FOR SELECT
TO authenticated
USING (true);


-- ШАГ 4: Проверка итогового результата
-- ============================================

-- Проверяем типы данных
SELECT 
    column_name, 
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'prices' 
AND column_name IN ('price', 'category_id')
ORDER BY ordinal_position;

-- Проверяем foreign keys
SELECT
    tc.table_name, 
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY' 
AND tc.table_name = 'prices';

-- Проверяем RLS политики
SELECT 
    schemaname, 
    tablename, 
    policyname,
    roles,
    cmd
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- Проверяем данные
SELECT p.service, p.price, pc.name as category_name
FROM public.prices p
LEFT JOIN public.price_categories pc ON p.category_id = pc.id
LIMIT 10;
