-- Step 4: Update permissions for new tables and admin system
-- This migration disables RLS and grants appropriate permissions for the admin system

-- Disable RLS for admin system tables (for simplified access control)
ALTER TABLE public.admin_users DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.yulia_clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.lera_clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.liudmila_clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.price_categories DISABLE ROW LEVEL SECURITY;

-- Grant permissions to all roles for new tables
GRANT ALL ON public.admin_users TO anon, authenticated, service_role;
GRANT ALL ON public.yulia_clients TO anon, authenticated, service_role;
GRANT ALL ON public.lera_clients TO anon, authenticated, service_role;
GRANT ALL ON public.liudmila_clients TO anon, authenticated, service_role;
GRANT ALL ON public.price_categories TO anon, authenticated, service_role;

-- Create functions for new user role checks
CREATE OR REPLACE FUNCTION public.is_yulia_v2(p_user_id uuid DEFAULT NULL::uuid)
RETURNS boolean
LANGUAGE sql SECURITY DEFINER
AS $$
select exists (
  select 1
  from auth.users u
  where u.id = coalesce(p_user_id, (SELECT auth.uid()))
    and (u.raw_user_meta_data->>'role') = 'yulia'
);
$$;

CREATE OR REPLACE FUNCTION public.is_lera_v2(p_user_id uuid DEFAULT NULL::uuid)
RETURNS boolean
LANGUAGE sql SECURITY DEFINER
AS $$
select exists (
  select 1
  from auth.users u
  where u.id = coalesce(p_user_id, (SELECT auth.uid()))
    and (u.raw_user_meta_data->>'role') = 'lera'
);
$$;

CREATE OR REPLACE FUNCTION public.is_liudmila_v2(p_user_id uuid DEFAULT NULL::uuid)
RETURNS boolean
LANGUAGE sql SECURITY DEFINER
AS $$
select exists (
  select 1
  from auth.users u
  where u.id = coalesce(p_user_id, (SELECT auth.uid()))
    and (u.raw_user_meta_data->>'role') = 'liudmila'
);
$$;

-- Grant permissions on new functions
GRANT ALL ON FUNCTION public.is_yulia_v2(uuid) TO anon, authenticated, service_role;
GRANT ALL ON FUNCTION public.is_lera_v2(uuid) TO anon, authenticated, service_role;
GRANT ALL ON FUNCTION public.is_liudmila_v2(uuid) TO anon, authenticated, service_role;