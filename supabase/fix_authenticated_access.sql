-- =====================================================
-- FIX: RLS политики для authenticated пользователей
-- =====================================================
-- Проблема: админы не могут смотреть цены и отправлять формы
-- Решение: добавить политики для authenticated с полным доступом
-- =====================================================

-- ============ PRICES TABLE ============
-- Включаем RLS
ALTER TABLE public.prices ENABLE ROW LEVEL SECURITY;

-- Удаляем старые политики (если есть)
DROP POLICY IF EXISTS "Allow public read access to prices" ON public.prices;
DROP POLICY IF EXISTS "Allow authenticated full access to prices" ON public.prices;

-- Все могут ЧИТАТЬ опубликованные цены
CREATE POLICY "Allow public read access to prices"
ON public.prices FOR SELECT
TO public
USING (is_published = true);

-- Authenticated могут делать ВСЁ (для админки)
CREATE POLICY "Allow authenticated full access to prices"
ON public.prices FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- ============ PRICE_CATEGORIES TABLE ============
ALTER TABLE public.price_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access to categories" ON public.price_categories;
DROP POLICY IF EXISTS "Allow authenticated full access to categories" ON public.price_categories;

CREATE POLICY "Allow public read access to categories"
ON public.price_categories FOR SELECT
TO public
USING (is_published = true);

CREATE POLICY "Allow authenticated full access to categories"
ON public.price_categories FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- ============ SUBSCRIPTIONS TABLE ============
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access to subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Allow authenticated full access to subscriptions" ON public.subscriptions;

CREATE POLICY "Allow public read access to subscriptions"
ON public.subscriptions FOR SELECT
TO public
USING (is_published = true);

CREATE POLICY "Allow authenticated full access to subscriptions"
ON public.subscriptions FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- ============ FORM_SUBMISSIONS TABLE ============
-- Добавляем INSERT для authenticated (чтобы админы тоже могли отправлять формы)
DROP POLICY IF EXISTS "Allow public to insert submissions" ON public.form_submissions;

CREATE POLICY "Allow public to insert submissions"
ON public.form_submissions FOR INSERT
TO public
WITH CHECK (true);

-- =====================================================
-- ПРОВЕРКА РЕЗУЛЬТАТА
-- =====================================================
SELECT
    tablename,
    policyname,
    roles,
    cmd
FROM pg_policies
WHERE tablename IN ('prices', 'price_categories', 'subscriptions', 'form_submissions')
ORDER BY tablename, cmd;
