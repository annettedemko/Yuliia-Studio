-- Сбрасываем роль обратно
RESET ROLE;

-- Проверяем текущую роль
SELECT current_user, session_user;

-- Проверяем что prices доступны
SELECT COUNT(*) FROM public.prices WHERE is_published = true;
