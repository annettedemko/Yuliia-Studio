-- Создаем admin пользователя в Supabase Auth
-- ВАЖНО: Замените 'your-secure-password' на реальный пароль!

-- Вариант 1: Через SQL (требует доступа к auth.users)
-- INSERT INTO auth.users (
--   instance_id,
--   id,
--   aud,
--   role,
--   email,
--   encrypted_password,
--   email_confirmed_at,
--   raw_user_meta_data,
--   created_at,
--   updated_at,
--   confirmation_token,
--   recovery_token
-- )
-- VALUES (
--   '00000000-0000-0000-0000-000000000000',
--   gen_random_uuid(),
--   'authenticated',
--   'authenticated',
--   'admin@beauty.com',
--   crypt('your-secure-password', gen_salt('bf')),
--   NOW(),
--   '{"role": "admin"}',
--   NOW(),
--   NOW(),
--   '',
--   ''
-- );

-- Вариант 2: ПРАВИЛЬНЫЙ СПОСОБ - через Supabase Dashboard
-- 1. Откройте https://supabase.com/dashboard/project/knmompemjlboqzwcycwe/auth/users
-- 2. Нажмите "Add user" → "Create new user"
-- 3. Email: admin@beauty.com
-- 4. Password: [ваш пароль]
-- 5. Auto Confirm User: ✅ (включите!)
-- 6. После создания, нажмите на пользователя и в "User Metadata" добавьте:
--    {
--      "role": "admin"
--    }

-- Проверка: список всех пользователей (если есть доступ)
SELECT id, email, raw_user_meta_data->'role' as role, email_confirmed_at
FROM auth.users
WHERE email = 'admin@beauty.com';
