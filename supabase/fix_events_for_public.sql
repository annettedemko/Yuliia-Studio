-- Проверяем текущую ситуацию с events
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'events';
SELECT policyname, permissive, roles, cmd FROM pg_policies WHERE tablename = 'events';

-- Тестируем доступ как анонимный
SET ROLE anon;
SELECT COUNT(*) as events_count FROM public.events;
RESET ROLE;

-- ИСПРАВЛЕНИЕ: Добавляем политику чтения для анонимных пользователей
-- События должны быть видны всем для выбора в форме

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Удаляем старые политики
DROP POLICY IF EXISTS "Users can read own events" ON public.events;
DROP POLICY IF EXISTS "Allow anon to insert events" ON public.events;
DROP POLICY IF EXISTS "Allow anon read access to events" ON public.events;

-- Анонимные пользователи могут ЧИТАТЬ все события (для формы выбора)
CREATE POLICY "Allow anon read access to events"
ON public.events FOR SELECT
TO anon, authenticated
USING (true);

-- Анонимные могут СОЗДАВАТЬ события (для бронирования)
CREATE POLICY "Allow anon to insert events"
ON public.events FOR INSERT
TO anon
WITH CHECK (true);

-- Authenticated пользователи (админы) могут делать всё
CREATE POLICY "Authenticated can manage all events"
ON public.events FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Проверяем что политики применились
SELECT policyname, permissive, roles, cmd FROM pg_policies WHERE tablename = 'events';

-- Тестируем снова как анонимный
SET ROLE anon;
SELECT COUNT(*) as events_count FROM public.events;
SELECT id, title, date, location FROM public.events LIMIT 3;
RESET ROLE;
