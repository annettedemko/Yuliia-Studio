-- Add notes column to all client tables
-- This allows adding comments/notes for each client

-- Add notes column to yulia_clients
ALTER TABLE public.yulia_clients
ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add notes column to anna_clients
ALTER TABLE public.anna_clients
ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add notes column to natalia_clients
ALTER TABLE public.natalia_clients
ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add notes column to lera_clients
ALTER TABLE public.lera_clients
ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add notes column to liudmila_clients
ALTER TABLE public.liudmila_clients
ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add comment to document the column
COMMENT ON COLUMN public.yulia_clients.notes IS 'Комментарии и заметки о клиенте';
COMMENT ON COLUMN public.anna_clients.notes IS 'Комментарии и заметки о клиенте';
COMMENT ON COLUMN public.natalia_clients.notes IS 'Комментарии и заметки о клиенте';
COMMENT ON COLUMN public.lera_clients.notes IS 'Комментарии и заметки о клиенте';
COMMENT ON COLUMN public.liudmila_clients.notes IS 'Комментарии и заметки о клиенте';
