# 🔍 ДИАГНОСТИКА: Проблема с загрузкой цен

## Текущий статус:
✅ **Абонементы загружаются** - RLS отключен для `subscriptions`
❌ **Цены НЕ загружаются** - проблема с таблицей `prices`
❌ **Категории НЕ отображаются** - связано с ценами

## 🔧 Дополнительная диагностика

### Шаг 1: Проверить данные в таблице prices
Выполните в Supabase SQL Editor:

```sql
-- Проверяем, есть ли данные в таблице prices
SELECT COUNT(*) as total_prices FROM public.prices;

-- Проверяем, есть ли опубликованные цены
SELECT COUNT(*) as published_prices FROM public.prices WHERE is_published = true;

-- Проверяем структуру таблицы
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'prices' AND table_schema = 'public'
ORDER BY ordinal_position;

-- Проверяем первые 5 записей
SELECT id, service, price, category, is_published
FROM public.prices
LIMIT 5;
```

### Шаг 2: Проверить RLS статус
```sql
-- Проверяем RLS для всех таблиц
SELECT
    schemaname,
    tablename,
    rowsecurity as rls_enabled,
    (SELECT count(*) FROM pg_policies WHERE tablename = pg_tables.tablename) as policies_count
FROM pg_tables
WHERE schemaname = 'public'
AND tablename IN ('prices', 'subscriptions', 'price_categories')
ORDER BY tablename;
```

### Шаг 3: Принудительно отключить RLS для prices
```sql
-- Отключаем RLS для таблицы prices
ALTER TABLE public.prices DISABLE ROW LEVEL SECURITY;

-- Удаляем все существующие политики
DROP POLICY IF EXISTS "Enable read access for all users" ON public.prices;
DROP POLICY IF EXISTS "Allow public read published prices" ON public.prices;

-- Предоставляем полный доступ
GRANT ALL ON public.prices TO anon, authenticated, service_role;
```

### Шаг 4: Проверить категории
```sql
-- Проверяем таблицу категорий
SELECT COUNT(*) as total_categories FROM public.price_categories;
SELECT * FROM public.price_categories WHERE is_published = true;
```

## 🎯 Возможные проблемы:

1. **Нет данных в таблице** - таблица пустая
2. **Все цены is_published = false** - не помечены как опубликованные
3. **RLS всё ещё включен** - политики блокируют доступ
4. **Проблема с полем category** - неправильный тип данных

## ⚡ Быстрое решение

Если таблица пустая, загрузите данные:
```sql
-- Загрузка данных из CSV (если таблица пустая)
-- Используйте данные из supabase/seed/prices.csv
```

Если данные есть, но не опубликованы:
```sql
-- Пометить все цены как опубликованные
UPDATE public.prices SET is_published = true;
```

---

**Результат диагностики покажет точную причину проблемы!** 🕵️‍♂️