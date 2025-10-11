# Структура пользовательских аккаунтов

## Обзор

В системе используется **5 аккаунтов** в Supabase Auth (`auth.users`) и дублируются в `public.admin_users`:

⚠️ **ВАЖНО**: Все пользователи должны быть созданы в **Supabase Auth** (auth.users) как настоящие authenticated users!

### 1. ЮЛИЯ (Администратор)
- **Email**: `admin@beauty.com`
- **Пароль**: `P@ssw0rd!Adm1n#2025`
- **Role**: `admin`
- **Таблица клиентов**: `yulia_clients`
- **Описание**: Администратор системы, использует admin-аккаунт для входа и управляет своей таблицей клиентов `yulia_clients`

### 2. АННА
- **Email**: `anna@beauty.com`
- **Пароль**: `AnN@_Secure2025!`
- **Role**: `anna`
- **Таблица клиентов**: `anna_clients`

### 3. НАТАЛЬЯ
- **Email**: `natalia@beauty.com`
- **Пароль**: `N@talia!2025$Aa`
- **Role**: `natalia`
- **Таблица клиентов**: `natalia_clients`

### 4. ЛЕРА
- **Email**: `lera@beauty.com`
- **Пароль**: `Lera#Safe2025$!`
- **Role**: `lera`
- **Таблица клиентов**: `lera_clients`

### 5. ЛЮДМИЛА
- **Email**: `liudmila@beauty.com`
- **Пароль**: `L1udm!la_Secure#2025`
- **Role**: `liudmila`
- **Таблица клиентов**: `liudmila_clients`

---

## Важные замечания

1. **Нет отдельного аккаунта yulia@beauty.com** - Юлия работает через `admin@beauty.com`
2. Каждый работник имеет свою таблицу для учета клиентов
3. Все пароли обновлены на безопасные версии через скрипт `update_user_passwords.sql`

---

## Применение изменений

### Способ 1: Автоматический (Рекомендуется)

Выполните SQL скрипт в Supabase SQL Editor:
```bash
supabase/setup_auth_users.sql
```

Этот скрипт:
1. ✅ Удалит yulia@beauty.com из auth.users
2. ✅ Создаст/обновит всех 5 пользователей в auth.users
3. ✅ Установит правильные пароли и метаданные
4. ✅ Подтвердит email для всех пользователей

### Способ 2: Вручную через Dashboard

Если SQL не работает, следуйте инструкциям в файле:
```bash
supabase/SETUP_AUTH_USERS_MANUAL.md
```

### Дополнительно: Обновление таблицы admin_users

После создания пользователей в auth.users, обновите таблицу admin_users:
```bash
supabase/update_user_passwords.sql
```

---

## Таблицы клиентов

| Работник | Email | Таблица клиентов |
|----------|-------|------------------|
| ЮЛИЯ (Администратор) | admin@beauty.com | yulia_clients |
| АННА | anna@beauty.com | anna_clients |
| НАТАЛЬЯ | natalia@beauty.com | natalia_clients |
| ЛЕРА | lera@beauty.com | lera_clients |
| ЛЮДМИЛА | liudmila@beauty.com | liudmila_clients |

---

## Структура таблицы admin_users

```sql
CREATE TABLE public.admin_users (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text UNIQUE NOT NULL,
    password text NOT NULL,
    role text DEFAULT 'admin',
    created_at timestamptz DEFAULT now()
);
```

---

Последнее обновление: 2025-10-09
