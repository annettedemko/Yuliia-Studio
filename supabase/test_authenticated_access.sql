-- Проверяем доступ для authenticated пользователей
SELECT policyname, roles, cmd, qual
FROM pg_policies
WHERE tablename IN ('prices', 'price_categories')
ORDER BY tablename;

-- Проверяем может ли authenticated читать prices
-- (это имитирует залогиненного пользователя)
SET ROLE authenticated;
SET request.jwt.claims TO '{"sub": "test-user-id"}';

SELECT COUNT(*) as prices_count FROM public.prices WHERE is_published = true;
SELECT COUNT(*) as categories_count FROM public.price_categories WHERE is_published = true;

RESET ROLE;
