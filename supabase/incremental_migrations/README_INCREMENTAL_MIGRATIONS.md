# Инкрементальные миграции для Supabase

Эти миграции позволяют обновить существующую базу данных Supabase до новой версии с 5-пользовательской системой администрирования.

## Порядок применения миграций

Выполните следующие файлы **в точном порядке** в SQL Editor вашего Supabase проекта:

### 1. Обновление enum типов
```sql
-- Файл: 01_update_enums.sql
-- Добавляет новых пользователей в form_owner enum и redtouchpro в price_category enum
```

### 2. Создание таблиц клиентов
```sql
-- Файл: 02_create_client_tables.sql
-- Создает таблицы для Юлии, Леры и Людмилы
-- Обновляет существующие таблицы Anna и Natalia
```

### 3. Создание админ пользователей
```sql
-- Файл: 03_create_admin_users.sql
-- Создает таблицу admin_users с учетными записями
-- Создает таблицу price_categories для лучшей категоризации
```

### 4. Обновление разрешений
```sql
-- Файл: 04_update_permissions.sql
-- Отключает RLS для новых таблиц
-- Создает функции проверки ролей для новых пользователей
```

### 5. Добавление цен RedTouchPro
```sql
-- Файл: 05_add_redtouchpro_prices.sql
-- Добавляет все цены для услуг RedTouchPro
```

### 6. Настройка политик RLS и индексов
```sql
-- Файл: 06_add_rls_policies.sql
-- Добавляет политики Row Level Security для новых таблиц
-- Создает индексы для производительности
-- Добавляет внешние ключи
```

## Учетные записи администраторов

После применения миграций будут доступны следующие учетные записи:

```
admin@beauty.com / Admin2024!     - Главный администратор
anna@beauty.com / Anna2024!       - Анна
natalia@beauty.com / Natalia2024! - Наталья
yulia@beauty.com / Yulia2024!     - Юлия
lera@beauty.com / Lera2024!       - Лера
liudmila@beauty.com / Liudmila2024! - Людмила
```

## Проверка применения миграций

После выполнения всех миграций проверьте:

### 1. Enum типы
```sql
SELECT unnest(enum_range(NULL::form_owner));
SELECT unnest(enum_range(NULL::price_category));
```

### 2. Таблицы клиентов
```sql
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name LIKE '%_clients'
ORDER BY table_name;
```

### 3. Админ пользователи
```sql
SELECT email, role FROM admin_users ORDER BY email;
```

### 4. Категории цен
```sql
SELECT code, name FROM price_categories ORDER BY order_index;
```

### 5. Цены RedTouchPro
```sql
SELECT COUNT(*) FROM prices WHERE category = 'redtouchpro';
```

## Что добавится к вашей базе данных

### Новые таблицы:
- `admin_users` - Система аутентификации админки
- `yulia_clients` - Клиенты Юлии
- `lera_clients` - Клиенты Леры
- `liudmila_clients` - Клиенты Людмилы
- `price_categories` - Категории цен

### Обновленные enum:
- `form_owner` - добавлены: Yulia, Natalia, Anna, Lera, Liudmila
- `price_category` - добавлена: redtouchpro

### Новые функции:
- `is_yulia_v2()`
- `is_lera_v2()`
- `is_liudmila_v2()`

### Новые данные:
- 10 новых цен для услуг RedTouchPro
- 6 учетных записей администраторов
- 6 категорий цен

## Безопасность

- Все миграции используют `IF NOT EXISTS` и `ON CONFLICT DO NOTHING`
- Миграции можно выполнять повторно без ошибок
- Существующие данные не затрагиваются
- RLS отключается только для новых административных таблиц

## После применения миграций

1. Проверьте работу админ панели: `/admin/login`
2. Убедитесь что все 5 пользователей могут войти в систему
3. Проверьте что заявки корректно распределяются по владельцам
4. Убедитесь что клиенты корректно отображаются для каждого пользователя

Если возникнут проблемы, обратитесь к полной документации в `DEPLOYMENT_GUIDE.md`.