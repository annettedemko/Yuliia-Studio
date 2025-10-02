-- Проверяем существующие таблицы клиентов
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name LIKE '%clients%'
ORDER BY table_name;

-- Проверяем структуру таблиц клиентов
SELECT 
    t.table_name,
    c.column_name,
    c.data_type,
    c.is_nullable
FROM information_schema.tables t
JOIN information_schema.columns c ON t.table_name = c.table_name
WHERE t.table_schema = 'public' 
AND t.table_name LIKE '%clients%'
ORDER BY t.table_name, c.ordinal_position;

-- Проверяем данные в каждой таблице
SELECT 'anna_clients' as table_name, COUNT(*) as count FROM public.anna_clients
UNION ALL
SELECT 'lera_clients', COUNT(*) FROM public.lera_clients
UNION ALL  
SELECT 'natalia_clients', COUNT(*) FROM public.natalia_clients
UNION ALL
SELECT 'yulia_clients', COUNT(*) FROM public.yulia_clients;

-- Проверяем RLS политики для таблиц клиентов
SELECT 
    tablename,
    policyname,
    roles,
    cmd,
    qual
FROM pg_policies
WHERE tablename LIKE '%clients%'
ORDER BY tablename, policyname;

-- Проверяем есть ли связь с auth.users через user_id
SELECT 
    t.table_name,
    c.column_name,
    c.data_type
FROM information_schema.tables t
JOIN information_schema.columns c ON t.table_name = c.table_name
WHERE t.table_schema = 'public' 
AND t.table_name LIKE '%clients%'
AND c.column_name LIKE '%user%'
ORDER BY t.table_name;
