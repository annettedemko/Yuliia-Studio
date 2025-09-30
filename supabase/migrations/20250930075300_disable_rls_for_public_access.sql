-- Отключение RLS для публичного доступа к данным
-- Это позволит анонимным пользователям читать цены, события и подписки

-- Отключаем RLS для таблиц, которые должны быть доступны публично
ALTER TABLE public.prices DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.events DISABLE ROW LEVEL SECURITY;

-- Убираем все существующие policies для этих таблиц
DROP POLICY IF EXISTS "anon_select_prices" ON public.prices;
DROP POLICY IF EXISTS "authenticated_select_prices" ON public.prices;
DROP POLICY IF EXISTS "admin_all_prices" ON public.prices;

DROP POLICY IF EXISTS "anon_select_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "authenticated_select_subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "admin_all_subscriptions" ON public.subscriptions;

DROP POLICY IF EXISTS "anon_select_published_events" ON public.events;
DROP POLICY IF EXISTS "auth_select_published_events" ON public.events;
DROP POLICY IF EXISTS "admin_all_events_v2" ON public.events;

-- Убеждаемся, что у анонимных пользователей есть доступ на чтение
GRANT SELECT ON public.prices TO anon;
GRANT SELECT ON public.subscriptions TO anon;
GRANT SELECT ON public.events TO anon;

-- Для админов оставляем полный доступ
GRANT ALL ON public.prices TO authenticated;
GRANT ALL ON public.subscriptions TO authenticated;
GRANT ALL ON public.events TO authenticated;