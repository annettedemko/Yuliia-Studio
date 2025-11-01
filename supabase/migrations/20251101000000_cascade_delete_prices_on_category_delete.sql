-- =====================================================
-- CASCADE DELETE FOR PRICE CATEGORIES
-- =====================================================
-- When a category is deleted, all associated prices should also be deleted
-- This changes the foreign key constraint from SET NULL to CASCADE

-- Drop the existing foreign key constraint
ALTER TABLE public.prices
DROP CONSTRAINT IF EXISTS prices_category_id_fkey;

-- Add the foreign key constraint with CASCADE delete
ALTER TABLE public.prices
ADD CONSTRAINT prices_category_id_fkey
FOREIGN KEY (category_id)
REFERENCES public.price_categories(id)
ON DELETE CASCADE;

-- Add a comment to document this behavior
COMMENT ON CONSTRAINT prices_category_id_fkey ON public.prices IS
'When a category is deleted, all associated prices are automatically deleted (CASCADE)';
