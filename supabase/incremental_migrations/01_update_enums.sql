-- Step 1: Update enum types to add new values
-- This migration adds new users to form_owner enum and new category to price_category enum

-- Add new users to form_owner enum
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Yulia';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Natalia';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Anna';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Lera';
ALTER TYPE public.form_owner ADD VALUE IF NOT EXISTS 'Liudmila';

-- Add RedTouchPro category to price_category enum
ALTER TYPE public.price_category ADD VALUE IF NOT EXISTS 'redtouchpro';

-- Note: This migration is safe to run multiple times due to IF NOT EXISTS clause