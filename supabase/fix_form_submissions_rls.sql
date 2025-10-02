-- Проверяем текущие политики для form_submissions
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'form_submissions';
SELECT policyname, permissive, roles, cmd FROM pg_policies WHERE tablename = 'form_submissions';

-- ИСПРАВЛЕНИЕ: Разрешаем анонимным отправлять формы
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Удаляем старые политики
DROP POLICY IF EXISTS "Allow anon to insert submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Authenticated can read all submissions" ON public.form_submissions;

-- Анонимные могут СОЗДАВАТЬ заявки (отправлять формы)
CREATE POLICY "Allow anon to insert submissions"
ON public.form_submissions FOR INSERT
TO anon
WITH CHECK (true);

-- Authenticated (админы) могут ЧИТАТЬ все заявки
CREATE POLICY "Authenticated can read all submissions"
ON public.form_submissions FOR SELECT
TO authenticated
USING (true);

-- Authenticated (админы) могут УДАЛЯТЬ заявки
CREATE POLICY "Authenticated can delete submissions"
ON public.form_submissions FOR DELETE
TO authenticated
USING (true);

-- Authenticated (админы) могут ОБНОВЛЯТЬ заявки
CREATE POLICY "Authenticated can update submissions"
ON public.form_submissions FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Проверяем что политики применились
SELECT policyname, permissive, roles, cmd FROM pg_policies WHERE tablename = 'form_submissions';

-- Тестируем INSERT как анонимный
SET ROLE anon;
INSERT INTO public.form_submissions (name, phone, email, message, page, created_at)
VALUES ('Test User', '+123456789', 'test@test.com', 'Test message', 'deka', NOW())
RETURNING id, name, created_at;
RESET ROLE;

-- Удаляем тестовую запись
DELETE FROM public.form_submissions WHERE name = 'Test User';
