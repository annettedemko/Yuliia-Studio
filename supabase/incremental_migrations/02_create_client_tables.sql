-- Step 2: Create missing client tables
-- This migration creates client tables for Yulia, Lera, and Liudmila

-- Yulia clients table
CREATE TABLE IF NOT EXISTS public.yulia_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Lera clients table
CREATE TABLE IF NOT EXISTS public.lera_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Liudmila clients table
CREATE TABLE IF NOT EXISTS public.liudmila_clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    phone text,
    email text,
    instagram text,
    warming_level text DEFAULT 'cold' CHECK (warming_level IN ('hot', 'warm', 'cold')),
    user_id uuid,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Add updated_at triggers for new tables
CREATE OR REPLACE TRIGGER set_updated_at_yulia_clients
    BEFORE UPDATE ON public.yulia_clients
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE TRIGGER set_updated_at_lera_clients
    BEFORE UPDATE ON public.lera_clients
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE TRIGGER set_updated_at_liudmila_clients
    BEFORE UPDATE ON public.liudmila_clients
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Update existing anna_clients and natalia_clients tables to match new structure
-- Add missing columns if they don't exist
DO $$
BEGIN
    -- Update anna_clients table
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'anna_clients' AND column_name = 'updated_at') THEN
        ALTER TABLE public.anna_clients ADD COLUMN updated_at timestamptz DEFAULT now();
        CREATE OR REPLACE TRIGGER set_updated_at_anna_clients
            BEFORE UPDATE ON public.anna_clients
            FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
    END IF;

    -- Update natalia_clients table
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'natalia_clients' AND column_name = 'updated_at') THEN
        ALTER TABLE public.natalia_clients ADD COLUMN updated_at timestamptz DEFAULT now();
        CREATE OR REPLACE TRIGGER set_updated_at_natalia_clients
            BEFORE UPDATE ON public.natalia_clients
            FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
    END IF;

    -- Make sure warming_level has the proper constraint on existing tables
    IF NOT EXISTS (SELECT 1 FROM information_schema.check_constraints WHERE constraint_name LIKE '%anna_clients_warming_level%') THEN
        ALTER TABLE public.anna_clients ADD CONSTRAINT anna_clients_warming_level_check
            CHECK (warming_level IN ('hot', 'warm', 'cold'));
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.check_constraints WHERE constraint_name LIKE '%natalia_clients_warming_level%') THEN
        ALTER TABLE public.natalia_clients ADD CONSTRAINT natalia_clients_warming_level_check
            CHECK (warming_level IN ('hot', 'warm', 'cold'));
    END IF;
END $$;