-- Check production database status
-- Run this in your Supabase SQL Editor

-- 1. Check form_submissions table and data
SELECT 'FORM SUBMISSIONS COUNT' as check_type, COUNT(*) as count FROM form_submissions;
SELECT 'FORM SUBMISSIONS SAMPLE' as check_type, * FROM form_submissions ORDER BY created_at DESC LIMIT 5;

-- 2. Check admin_users table
SELECT 'ADMIN USERS' as check_type, email, role FROM admin_users ORDER BY email;

-- 3. Check all client tables
SELECT 'ANNA CLIENTS' as check_type, COUNT(*) as count FROM anna_clients;
SELECT 'NATALIA CLIENTS' as check_type, COUNT(*) as count FROM natalia_clients;
SELECT 'YULIA CLIENTS' as check_type, COUNT(*) as count FROM yulia_clients;
SELECT 'LERA CLIENTS' as check_type, COUNT(*) as count FROM lera_clients;
SELECT 'LIUDMILA CLIENTS' as check_type, COUNT(*) as count FROM liudmila_clients;

-- 4. Check price categories
SELECT 'PRICE CATEGORIES' as check_type, code, name FROM price_categories ORDER BY order_index;

-- 5. Check RedTouchPro prices
SELECT 'REDTOUCHPRO PRICES' as check_type, COUNT(*) as count FROM prices WHERE category = 'redtouchpro';

-- 6. Check enum values
SELECT 'FORM OWNER ENUM' as check_type, unnest(enum_range(NULL::form_owner)) as enum_value;
SELECT 'PRICE CATEGORY ENUM' as check_type, unnest(enum_range(NULL::price_category)) as enum_value;

-- 7. Check RLS status
SELECT
    'TABLE RLS STATUS' as check_type,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;