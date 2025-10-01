-- Fix: Create missing enums if they don't exist
-- This migration handles the case where enums don't exist in production

-- Create form_owner enum if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'form_owner') THEN
        CREATE TYPE public.form_owner AS ENUM ('Others', 'NATALIA', 'ANNA', 'Yulia', 'Natalia', 'Anna', 'Lera', 'Liudmila');
    ELSE
        -- Add new values to existing enum
        ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Yulia';
        ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Natalia';
        ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Anna';
        ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Lera';
        ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Liudmila';
    END IF;
END $$;

-- Create price_category enum if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'price_category') THEN
        CREATE TYPE public.price_category AS ENUM ('alexandrit', 'dioden', 'icoone', 'manicure', 'pedicure', 'redtouchpro');
    ELSE
        -- Add new values to existing enum
        ALTER TYPE public.price_category ADD VALUE IF NOT EXISTS 'redtouchpro';
    END IF;
END $$;