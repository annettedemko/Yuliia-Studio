-- =====================================================
-- PRODUCTION FIX: RLS для Events и Form Submissions
-- =====================================================
-- Применить в Supabase Dashboard → SQL Editor
-- =====================================================

-- ============ EVENTS TABLE ============
-- Включаем RLS для events
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Удаляем старые политики (если есть)
DROP POLICY IF EXISTS "Users can read own events" ON public.events;
DROP POLICY IF EXISTS "Allow anon to insert events" ON public.events;
DROP POLICY IF EXISTS "Allow anon read access to events" ON public.events;
DROP POLICY IF EXISTS "Authenticated can manage all events" ON public.events;

-- Создаем новые политики для events
-- 1. Анонимные пользователи могут ЧИТАТЬ все события (для выбора в форме)
CREATE POLICY "Allow anon read access to events"
ON public.events FOR SELECT
TO anon, authenticated
USING (true);

-- 2. Анонимные могут СОЗДАВАТЬ события (для бронирования)
CREATE POLICY "Allow anon to insert events"
ON public.events FOR INSERT
TO anon
WITH CHECK (true);

-- 3. Authenticated пользователи (админы) могут делать всё
CREATE POLICY "Authenticated can manage all events"
ON public.events FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- ============ FORM_SUBMISSIONS TABLE ============
-- Включаем RLS для form_submissions
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Удаляем старые политики (если есть)
DROP POLICY IF EXISTS "Allow anon to insert submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Authenticated can read all submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Authenticated can delete submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Authenticated can update submissions" ON public.form_submissions;

-- Создаем новые политики для form_submissions
-- 1. Анонимные могут СОЗДАВАТЬ заявки (отправлять формы)
CREATE POLICY "Allow anon to insert submissions"
ON public.form_submissions FOR INSERT
TO anon
WITH CHECK (true);

-- 2. Authenticated (админы) могут ЧИТАТЬ все заявки
CREATE POLICY "Authenticated can read all submissions"
ON public.form_submissions FOR SELECT
TO authenticated
USING (true);

-- 3. Authenticated (админы) могут УДАЛЯТЬ заявки
CREATE POLICY "Authenticated can delete submissions"
ON public.form_submissions FOR DELETE
TO authenticated
USING (true);

-- 4. Authenticated (админы) могут ОБНОВЛЯТЬ заявки
CREATE POLICY "Authenticated can update submissions"
ON public.form_submissions FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- =====================================================
-- ПРОВЕРКА РЕЗУЛЬТАТА
-- =====================================================
-- Проверяем что политики применились для events
SELECT
    'events' as table_name,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies
WHERE tablename = 'events'
ORDER BY policyname;

-- Проверяем что политики применились для form_submissions
SELECT
    'form_submissions' as table_name,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies
WHERE tablename = 'form_submissions'
ORDER BY policyname;
