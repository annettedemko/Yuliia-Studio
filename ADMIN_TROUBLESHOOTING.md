# Решение проблем с Админ-панелью

## Проблема: Кнопка "Сохранить" не работает при добавлении мероприятия

### ✅ РЕШЕНО: 2025-01-10

**Проблема была в том, что RLS был отключен для таблицы events, но политики существовали.**
Это создавало конфликт доступа.

### Причины:
1. **RLS был отключен** для таблицы events
2. **Политики не применялись** из-за отключенного RLS

### ✅ Решение (УЖЕ ПРИМЕНЕНО):

Выполнен SQL скрипт `supabase/fix_events_rls.sql`, который:
- ✅ **Включил RLS** для таблицы events
- ✅ **Создал правильные политики** для authenticated пользователей:
  - `authenticated_insert_events` - авторизованные могут создавать события
  - `authenticated_update_events` - авторизованные могут обновлять события
  - `authenticated_delete_events` - авторизованные могут удалять события
  - `authenticated_select_events` - авторизованные могут видеть все события
- ✅ **Создал политику для анонимов** - видят только опубликованные события

### Если проблема возникнет снова:

Выполните в терминале:
```bash
PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres -f supabase/fix_events_rls.sql
```

#### Шаг 2: Проверить в браузере
1. Откройте консоль браузера (F12)
2. Попробуйте добавить мероприятие
3. Смотрите на логи с эмодзи:
   - 🟡 = процесс
   - 🟢 = успех
   - 🔴 = ошибка

#### Шаг 3: Проверить результат
После выполнения SQL скрипта:
- Попробуйте снова добавить мероприятие через админ-панель
- Должно появиться сообщение об успехе или ошибке

---

## Проблема: Добавленное в Supabase мероприятие не отображается на сайте

### Причины:
1. **Дата события в прошлом** - сайт показывает только будущие события
2. **is_published = false** - событие не опубликовано
3. **RLS блокирует чтение** - нет доступа к событию

### Проверка:

Выполните SQL запрос в Supabase SQL Editor:

```sql
-- Проверить все события
SELECT
  id,
  title,
  date,
  time,
  is_published,
  CASE
    WHEN date < CURRENT_DATE THEN '⏰ ПРОШЛОЕ'
    WHEN date = CURRENT_DATE THEN '📅 СЕГОДНЯ'
    ELSE '✅ БУДУЩЕЕ'
  END as date_status
FROM public.events
ORDER BY date DESC;
```

### Решение:

#### Если дата в прошлом:
```sql
-- Обновить дату на будущую
UPDATE public.events
SET date = '2025-02-15'  -- Замените на нужную дату
WHERE id = 'ваш-id-события';
```

#### Если is_published = false:
```sql
-- Опубликовать событие
UPDATE public.events
SET is_published = true
WHERE id = 'ваш-id-события';
```

#### Если всё правильно, но не отображается:
Проверьте RLS политики:
```bash
PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres -f supabase/fix_events_rls.sql
```

---

## Как работает отображение событий на сайте

### Фильтры:
1. **is_published = true** - только опубликованные
2. **date >= TODAY** - только будущие события (НЕ прошлые!)
3. **Сортировка** по дате (сначала ближайшие)

### Пример:

Сегодня: **2025-01-10**

| Событие | Дата | is_published | Отображается? |
|---------|------|--------------|---------------|
| Event 1 | 2025-01-05 | true | ❌ (прошлое) |
| Event 2 | 2025-01-10 | false | ❌ (не опубликовано) |
| Event 3 | 2025-01-15 | true | ✅ |
| Event 4 | 2025-02-20 | true | ✅ |

---

## Проверка работы админ-панели

### 1. Цены (Prices)

Проверка:
```sql
SELECT COUNT(*) FROM public.prices WHERE is_published = true;
```

Тест:
1. Добавьте новую цену через админ-панель
2. Проверьте появление на сайте: `/preise`

### 2. Подписки (Subscriptions)

Проверка:
```sql
SELECT COUNT(*) FROM public.subscriptions WHERE is_published = true;
```

Тест:
1. Добавьте новую подписку
2. Проверьте на сайте: `/preise` (секция подписок)

### 3. Мероприятия (Events)

Проверка:
```sql
SELECT
  COUNT(*) as total,
  COUNT(CASE WHEN is_published = true THEN 1 END) as published,
  COUNT(CASE WHEN date >= CURRENT_DATE AND is_published = true THEN 1 END) as upcoming
FROM public.events;
```

Тест:
1. Добавьте событие с **будущей датой** и `is_published = true`
2. Проверьте на сайте: `/deka` (секция "Upcoming Events")

---

## Частые ошибки

### ❌ "Permission denied for table events"
**Причина**: RLS блокирует доступ или политики неправильные
**Решение**: Выполните `supabase/fix_events_rls.sql`

### ❌ "null value in column violates not-null constraint"
**Причина**: Обязательное поле не заполнено
**Решение**: Проверьте все обязательные поля: title, date, location, address

### ❌ Мероприятие не отображается на сайте
**Причина**: Дата в прошлом или is_published = false
**Решение**: См. раздел "Проблема: Добавленное в Supabase мероприятие..."

### ❌ Кнопка "Сохранить" не делает ничего
**Причина**: JavaScript ошибка или RLS блокирует
**Решение**:
1. Откройте консоль браузера (F12)
2. Ищите красные ошибки
3. Если видите "Permission denied" - выполните `supabase/fix_events_rls.sql`

---

## Быстрая диагностика

Выполните все проверки одним SQL запросом:

```sql
-- 1. RLS Status
SELECT 'RLS Status' as check_name,
       tablename,
       rowsecurity as enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('events', 'prices', 'subscriptions');

-- 2. Events Count
SELECT 'Events Count' as check_name,
       COUNT(*) as total,
       COUNT(CASE WHEN is_published = true THEN 1 END) as published,
       COUNT(CASE WHEN date >= CURRENT_DATE AND is_published = true THEN 1 END) as upcoming
FROM public.events;

-- 3. Prices Count
SELECT 'Prices Count' as check_name,
       COUNT(*) as total
FROM public.prices
WHERE is_published = true;

-- 4. Subscriptions Count
SELECT 'Subscriptions Count' as check_name,
       COUNT(*) as total
FROM public.subscriptions
WHERE is_published = true;

-- 5. Latest Event
SELECT 'Latest Event' as check_name,
       title,
       date,
       is_published
FROM public.events
ORDER BY created_at DESC
LIMIT 1;
```

---

---

## История исправлений

### 2025-01-10
- ✅ **ИСПРАВЛЕНО**: Проблема с сохранением мероприятий в админке
  - Причина: RLS был отключен для таблицы events
  - Решение: Включен RLS и созданы правильные политики (`supabase/fix_events_rls.sql`)
  - Теперь работает: Добавление, редактирование и удаление событий через админку

Последнее обновление: 2025-01-10
