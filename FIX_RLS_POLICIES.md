# 🚨 КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: RLS Политики

## Проблема
Цены и подписки не загружаются из-за включенных RLS (Row Level Security) политик в продакшн базе данных.

## ✅ Быстрое решение

### Шаг 1: Зайти в Supabase Dashboard
1. Открыть https://supabase.com/dashboard
2. Выбрать ваш проект
3. Перейти в **SQL Editor**

### Шаг 2: Выполнить SQL команды
Скопировать и выполнить этот SQL скрипт:

```sql
абонимн
### Шаг 3: Проверить результат
После выполнения команд сайт должен сразу заработать. Проверьте:
- https://yuliia-studio.vercel.app/preis
- В консоли должно быть: "🟢 Загружено цен: 59" (или больше)

## 🔍 Как проверить статус RLS

В SQL Editor выполните:
```sql
SELECT
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;
```

**Результат должен показать `false` для всех таблиц.**

## ⚠️ Альтернативное решение

Если не хотите отключать RLS полностью, можно создать политики:

```sql
-- Создать политику для чтения всех опубликованных цен
CREATE POLICY "Allow public read published prices" ON public.prices
FOR SELECT USING (is_published = true);

-- Создать политику для чтения всех опубликованных подписок
CREATE POLICY "Allow public read published subscriptions" ON public.subscriptions
FOR SELECT USING (is_published = true);
```

## 🎯 После исправления

Сайт должен полностью заработать:
- ✅ Цены загружаются
- ✅ Подписки загружаются
- ✅ Категории загружаются
- ✅ Авторизация работает

---

**ВАЖНО**: Выполните SQL команды прямо сейчас, и сайт заработает немедленно! 🚀