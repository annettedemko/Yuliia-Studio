-- ШАГ 1: Добавляем foreign key constraint
-- ============================================
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


-- ШАГ 2: Настройка RLS политик
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
USING (auth.uid() = user_id::uuid);

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


-- ШАГ 3: Проверка итогового результата
-- ============================================

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
AND tablename IN ('prices', 'price_categories', 'subscriptions', 'events', 'form_submissions')
ORDER BY tablename, policyname;

-- Проверяем данные с категориями
SELECT p.service, p.price, pc.name as category_name
FROM public.prices p
LEFT JOIN public.price_categories pc ON p.category_id = pc.id
LIMIT 10;
