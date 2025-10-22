-- Fix RLS policies for promotions table
-- Drop the old policy
DROP POLICY IF EXISTS "Authenticated users can manage promotions" ON public.promotions;

-- Create separate policies for INSERT, UPDATE, DELETE
CREATE POLICY "Authenticated users can insert promotions"
    ON public.promotions
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can update promotions"
    ON public.promotions
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Authenticated users can delete promotions"
    ON public.promotions
    FOR DELETE
    TO authenticated
    USING (true);
