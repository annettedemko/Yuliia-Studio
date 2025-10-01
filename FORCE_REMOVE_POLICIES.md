# 🚨 ПРИНУДИТЕЛЬНОЕ УДАЛЕНИЕ ПОЛИТИК

## Проблема: Политики всё ещё остались (policies_count = 2)

### 🔍 Шаг 1: Узнать названия политик
```sql
-- Показать все политики для price_categories
SELECT
    policyname,
    tablename,
    roles,
    cmd,
    qual
FROM pg_policies
WHERE tablename = 'price_categories';
```

### 🔧 Шаг 2: Принудительно удалить ВСЕ политики
```sql
-- Метод 1: Удаление всех политик одной командой
DO $$
DECLARE
    policy_record RECORD;
BEGIN
    FOR policy_record IN
        SELECT policyname FROM pg_policies WHERE tablename = 'price_categories'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || policy_record.policyname || '" ON public.price_categories;';
    END LOOP;
END $$;

-- Метод 2: Принудительно попробовать удалить стандартные названия
DROP POLICY IF EXISTS "Enable read access for all users" ON public.price_categories;
DROP POLICY IF EXISTS "Allow public read published categories" ON public.price_categories;
DROP POLICY IF EXISTS "Enable select for authenticated users only" ON public.price_categories;
DROP POLICY IF EXISTS "Enable read for anon" ON public.price_categories;
DROP POLICY IF EXISTS "Allow read for all users" ON public.price_categories;
DROP POLICY IF EXISTS "Public read access" ON public.price_categories;
DROP POLICY IF EXISTS "anon_read" ON public.price_categories;
DROP POLICY IF EXISTS "authenticated_read" ON public.price_categories;
```

### 🔥 Шаг 3: Ядерный вариант - пересоздать таблицу
Если политики не удаляются, создаём новую таблицу:

```sql
-- Создаём резервную копию данных
CREATE TABLE price_categories_backup AS SELECT * FROM public.price_categories;

-- Удаляем старую таблицу (это удалит все политики)
DROP TABLE public.price_categories CASCADE;

-- Создаём новую таблицу
CREATE TABLE public.price_categories (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    code text UNIQUE NOT NULL,
    name text NOT NULL,
    description text,
    icon text,
    color text DEFAULT 'rose-gold',
    order_index integer DEFAULT 0,
    is_published boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Восстанавливаем данные
INSERT INTO public.price_categories SELECT * FROM price_categories_backup;

-- Отключаем RLS
ALTER TABLE public.price_categories DISABLE ROW LEVEL SECURITY;

-- Предоставляем доступ
GRANT ALL ON public.price_categories TO anon, authenticated, service_role;

-- Удаляем резервную копию
DROP TABLE price_categories_backup;
```

### ✅ Шаг 4: Проверить результат
```sql
SELECT
    tablename,
    rowsecurity as rls_enabled,
    (SELECT count(*) FROM pg_policies WHERE tablename = 'price_categories') as policies_count
FROM pg_tables
WHERE tablename = 'price_categories';
```

**Результат должен быть: `policies_count = 0`**

---

## 🎯 Порядок действий:
1. Сначала попробуйте **Шаг 2** (принудительное удаление)
2. Если не помогает - используйте **Шаг 3** (пересоздание таблицы)
3. Проверьте результат **Шагом 4**

**После этого сайт должен заработать мгновенно!** 🚀