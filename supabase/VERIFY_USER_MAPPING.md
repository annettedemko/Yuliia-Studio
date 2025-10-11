# Проверка привязки пользователей к таблицам и формам

## Текущее состояние

### 1. Маппинг пользователей

| Работник | Email | Таблица клиентов | Deka страница | Form owner |
|----------|-------|------------------|---------------|------------|
| ЮЛИЯ (Администратор) | admin@beauty.com | `yulia_clients` | `/deka` | `Yulia` |
| АННА | anna@beauty.com | `anna_clients` | `/deka-anna` | `Anna` |
| НАТАЛЬЯ | natalia@beauty.com | `natalia_clients` | `/deka-day` | `Natalia` |
| ЛЕРА | lera@beauty.com | `lera_clients` | `/deka-lera` | `Lera` |
| ЛЮДМИЛА | liudmila@beauty.com | `liudmila_clients` | `/deka-liudmila` | `Liudmila` |

### 2. Проблемы найдены

#### ❌ ПРОБЛЕМА 1: Enum form_owner устарел в schema.sql
**Файл**: `supabase/migrations/schema.sql:26-30`
**Текущее значение**:
```sql
CREATE TYPE "public"."form_owner" AS ENUM (
    'Others',
    'NATALIA',
    'ANNA'
);
```

**Должно быть**:
```sql
CREATE TYPE "public"."form_owner" AS ENUM (
    'Others',
    'Yulia',
    'Natalia',
    'Anna',
    'Lera',
    'Liudmila'
);
```

#### ❌ ПРОБЛЕМА 2: Отсутствуют таблицы клиентов в schema.sql
**Файл**: `supabase/migrations/schema.sql`
**Существуют только**: `anna_clients`, `natalia_clients`
**Отсутствуют**: `yulia_clients`, `lera_clients`, `liudmila_clients`

#### ✅ ПРАВИЛЬНО: formService.ts
**Файл**: `src/services/formService.ts:23-38`
Правильно маппит страницы к владельцам:
- `/deka` → `Yulia`
- `/deka-anna` → `Anna`
- `/deka-day` → `Natalia`
- `/deka-lera` → `Lera`
- `/deka-liudmila` → `Liudmila`

#### ✅ ПРАВИЛЬНО: Migration файл
**Файл**: `supabase/migrations/20251001000000_complete_schema_update.sql`
Содержит правильные значения enum и все таблицы клиентов

---

## Что нужно исправить

### Шаг 1: Обновить enum form_owner

Выполните SQL в Supabase SQL Editor:

```sql
-- Добавить новые значения в enum form_owner
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Yulia';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Lera';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Liudmila';

-- Удалить старые значения (только если нет данных с ними!)
-- ВНИМАНИЕ: Это может удалить данные! Сначала проверьте!
-- ALTER TYPE public.form_owner RENAME VALUE 'NATALIA' TO 'Natalia';
-- ALTER TYPE public.form_owner RENAME VALUE 'ANNA' TO 'Anna';
```

### Шаг 2: Создать недостающие таблицы клиентов

Выполните SQL в Supabase SQL Editor:

```sql
-- Создать yulia_clients (если не существует)
CREATE TABLE IF NOT EXISTS public.yulia_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Создать lera_clients (если не существует)
CREATE TABLE IF NOT EXISTS public.lera_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Создать liudmila_clients (если не существует)
CREATE TABLE IF NOT EXISTS public.liudmila_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Включить RLS и предоставить права
ALTER TABLE public.yulia_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lera_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.liudmila_clients ENABLE ROW LEVEL SECURITY;

GRANT ALL ON public.yulia_clients TO anon, authenticated, service_role;
GRANT ALL ON public.lera_clients TO anon, authenticated, service_role;
GRANT ALL ON public.liudmila_clients TO anon, authenticated, service_role;
```

### Шаг 3: Проверить работу

После выполнения шагов 1 и 2, проверьте:

```sql
-- 1. Проверить enum
SELECT enum_range(NULL::form_owner);

-- 2. Проверить таблицы
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name LIKE '%_clients'
ORDER BY table_name;

-- 3. Проверить form_submissions
SELECT DISTINCT owner FROM form_submissions;
```

Должно вернуть:
- **Enum**: `{Others,Yulia,Natalia,Anna,Lera,Liudmila}`
- **Таблицы**: `anna_clients`, `lera_clients`, `liudmila_clients`, `natalia_clients`, `yulia_clients`
- **Owners**: все используемые значения

---

---

## Шаг 4: Настроить RLS политики (Row Level Security)

После создания таблиц, настройте политики доступа:

```bash
supabase/setup_rls_policies.sql
```

Этот скрипт создаст правила доступа:

### Правила доступа к таблицам клиентов:

| Пользователь | Доступ к yulia_clients | anna_clients | natalia_clients | lera_clients | liudmila_clients |
|--------------|------------------------|--------------|-----------------|--------------|------------------|
| **admin@beauty.com (Юлия)** | ✅ Полный | ✅ Полный | ✅ Полный | ✅ Полный | ✅ Полный |
| **anna@beauty.com** | ❌ Нет | ✅ Полный | ❌ Нет | ❌ Нет | ❌ Нет |
| **natalia@beauty.com** | ❌ Нет | ❌ Нет | ✅ Полный | ❌ Нет | ❌ Нет |
| **lera@beauty.com** | ❌ Нет | ❌ Нет | ❌ Нет | ✅ Полный | ❌ Нет |
| **liudmila@beauty.com** | ❌ Нет | ❌ Нет | ❌ Нет | ❌ Нет | ✅ Полный |
| **Anon (публичные формы)** | ✅ INSERT | ✅ INSERT | ✅ INSERT | ✅ INSERT | ✅ INSERT |

**Примечание**: Анонимные пользователи могут только добавлять записи (INSERT) через публичные формы, но не могут читать или изменять существующие записи.

---

## Проверочный чеклист

После выполнения всех шагов:

### База данных:
- [ ] Enum `form_owner` содержит: `Others`, `Yulia`, `Natalia`, `Anna`, `Lera`, `Liudmila`
- [ ] Таблица `yulia_clients` существует
- [ ] Таблица `anna_clients` существует
- [ ] Таблица `natalia_clients` существует
- [ ] Таблица `lera_clients` существует
- [ ] Таблица `liudmila_clients` существует
- [ ] RLS политики настроены для всех таблиц клиентов

### Пользователи:
- [ ] Все 5 пользователей созданы в `auth.users`
- [ ] Пользователь `yulia@beauty.com` удален (не нужен)
- [ ] У каждого пользователя есть метаданные с `role`

### Формы и маппинг:
- [ ] Формы на `/deka` отправляют owner=`Yulia`
- [ ] Формы на `/deka-anna` отправляют owner=`Anna`
- [ ] Формы на `/deka-day` отправляют owner=`Natalia`
- [ ] Формы на `/deka-lera` отправляют owner=`Lera`
- [ ] Формы на `/deka-liudmila` отправляют owner=`Liudmila`

### Доступ:
- [ ] Администратор видит всех клиентов
- [ ] Каждый работник видит только своих клиентов
- [ ] Публичные формы работают (могут добавлять клиентов)

---

Последнее обновление: 2025-10-09
