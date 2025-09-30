# Настройка локальной базы данных Supabase

## КРИТИЧЕСКИ ВАЖНО: Правильная последовательность запуска

### 1. Остановите все процессы
```bash
# Остановите npm run dev (Ctrl+C в терминале)
# Остановите Supabase
supabase stop
```

### 2. Запуск Supabase с чистой базой
```bash
supabase start
```

### 3. Полный сброс базы данных с применением миграций
```bash
supabase db reset --linked=false
```

### 4. Запуск приложения
```bash
npm run dev
```

### 5. Проверка
- Откройте http://localhost:8080/preis
- Войдите в админку http://localhost:8080/admin/login

## Что было настроено

1. **Миграции созданы:**
   - `20250925193134_remote_schema.sql` - основная схема
   - `20250930075300_disable_rls_for_public_access.sql` - отключение RLS для публичного доступа
   - `20250930075400_seed_data.sql` - загрузка начальных данных

2. **Данные seed-файлов:**
   - `supabase/seed/prices.csv` - цены на услуги
   - `supabase/seed/subscriptions.csv` - пакеты подписок (с features)
   - `supabase/seed/events.csv` - события для DEKA страниц
   - `supabase/seed/auth_users.csv` - админ пользователи

3. **Пользователи (админка):**
   - `admin@beauty.com` / `Admin2024` (админ)
   - `anna@beauty.com` / `Anna2024` (анна)
   - `natalia@beauty.com` / `Natalia2024` (наталия)

4. **Конфигурация клиента:**
   - `.env.local` обновлен для локальной разработки
   - `src/lib/supabase.ts` настроен на стандартный JWT для анонимного доступа

5. **Отладка добавлена:**
   - В `src/services/contentService.ts` добавлены console.log для диагностики

## Проверка работы

После выполнения всех шагов:

1. Откройте http://localhost:8080/preis
2. Проверьте консоль браузера на предмет ошибок или debug сообщений
3. Убедитесь, что цены и подписки загружаются
4. Проверьте админку на http://localhost:8080/admin/login

## В случае проблем

Проверьте:
1. Запущен ли Supabase (`supabase status`)
2. Применились ли миграции
3. Есть ли данные в таблицах
4. Правильные ли переменные окружения в `.env.local`