# ТЗ для Supabase Assistant: Создание Admin Пользователей

## Задача
Создать 5 пользователей в Supabase Authentication для админ-панели beauty студии.

## Требования

### 1. Создать следующих пользователей в Authentication:

**Пользователь 1 - Главный Администратор:**
- Email: `admin@beauty.com`
- Password: `[установите безопасный пароль]`
- Auto Confirm User: ✅ ДА
- User Metadata (JSON):
```json
{
  "role": "admin"
}
```

**Пользователь 2 - Anna:**
- Email: `anna@beauty.com`
- Password: `[установите безопасный пароль]`
- Auto Confirm User: ✅ ДА
- User Metadata (JSON):
```json
{
  "role": "anna"
}
```

**Пользователь 3 - Natalia:**
- Email: `natalia@beauty.com`
- Password: `[установите безопасный пароль]`
- Auto Confirm User: ✅ ДА
- User Metadata (JSON):
```json
{
  "role": "natalia"
}
```

**Пользователь 4 - Yulia:**
- Email: `yulia@beauty.com`
- Password: `[установите безопасный пароль]`
- Auto Confirm User: ✅ ДА
- User Metadata (JSON):
```json
{
  "role": "yulia"
}
```

**Пользователь 5 - Lera:**
- Email: `lera@beauty.com`
- Password: `[установите безопасный пароль]`
- Auto Confirm User: ✅ ДА
- User Metadata (JSON):
```json
{
  "role": "lera"
}
```

## Пошаговая инструкция для каждого пользователя:

1. Перейти в: **Authentication** → **Users**
2. Нажать **"Add user"** → **"Create new user"**
3. Ввести Email и Password
4. ✅ **ОБЯЗАТЕЛЬНО** включить "Auto Confirm User"
5. Нажать **"Create user"**
6. Кликнуть на созданного пользователя
7. В секции **"User Metadata"** добавить JSON с полем "role"
8. Сохранить изменения

## Проверка
После создания всех пользователей выполните SQL запрос для проверки:

```sql
SELECT 
  id, 
  email, 
  raw_user_meta_data->>'role' as role,
  email_confirmed_at,
  created_at
FROM auth.users
WHERE email IN (
  'admin@beauty.com',
  'anna@beauty.com', 
  'natalia@beauty.com',
  'yulia@beauty.com',
  'lera@beauty.com'
)
ORDER BY email;
```

Результат должен показать 5 пользователей с подтвержденными email (email_confirmed_at не NULL) и правильными ролями.

## Важно!
- Все пользователи должны иметь email_confirmed_at заполненным (не NULL)
- Каждый пользователь должен иметь соответствующую роль в User Metadata
- Пароли должны быть безопасными (минимум 8 символов)

## Примечание
Эти пользователи нужны для входа в админ-панель через custom authentication систему на фронтенде.
