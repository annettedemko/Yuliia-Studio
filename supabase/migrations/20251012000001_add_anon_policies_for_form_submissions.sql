-- Add policies to allow anon access to form_submissions table
-- This allows REST API calls with ANON_KEY to work

-- Drop existing anon policies if they exist (ignore errors)
DO $$
BEGIN
    DROP POLICY IF EXISTS "anon_read_form_submissions" ON public.form_submissions;
    DROP POLICY IF EXISTS "anon_insert_form_submissions" ON public.form_submissions;
    DROP POLICY IF EXISTS "anon_update_form_submissions" ON public.form_submissions;
    DROP POLICY IF EXISTS "anon_delete_form_submissions" ON public.form_submissions;
END $$;

-- Form submissions policies
CREATE POLICY "anon_read_form_submissions"
ON public.form_submissions FOR SELECT
TO anon
USING (true);

CREATE POLICY "anon_insert_form_submissions"
ON public.form_submissions FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "anon_update_form_submissions"
ON public.form_submissions FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "anon_delete_form_submissions"
ON public.form_submissions FOR DELETE
TO anon
USING (true);
