-- Step 6: Add RLS policies for new client tables
-- This migration adds Row Level Security policies for Yulia, Lera, and Liudmila client tables

-- Enable RLS for new client tables (if you want to use it later)
-- Note: RLS is currently disabled for simplified admin access, but policies are created for future use

-- Yulia clients policies
CREATE POLICY "yulia_clients_access" ON "public"."yulia_clients"
TO "authenticated"
USING ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::text) = 'admin'::text))))))
WITH CHECK ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::text) = 'admin'::text))))));

CREATE POLICY "yulia_owner_all" ON "public"."yulia_clients"
TO "authenticated"
USING (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")))
WITH CHECK (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")));

-- Lera clients policies
CREATE POLICY "lera_clients_access" ON "public"."lera_clients"
TO "authenticated"
USING ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::text) = 'admin'::text))))))
WITH CHECK ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::text) = 'admin'::text))))));

CREATE POLICY "lera_owner_all" ON "public"."lera_clients"
TO "authenticated"
USING (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")))
WITH CHECK (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")));

-- Liudmila clients policies
CREATE POLICY "liudmila_clients_access" ON "public"."liudmila_clients"
TO "authenticated"
USING ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::text) = 'admin'::text))))))
WITH CHECK ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::text) = 'admin'::text))))));

CREATE POLICY "liudmila_owner_all" ON "public"."liudmila_clients"
TO "authenticated"
USING (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")))
WITH CHECK (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")));

-- Add foreign key constraints for new client tables (if they don't exist)
DO $$
BEGIN
    -- Add foreign key constraint for yulia_clients if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints
        WHERE constraint_name = 'yulia_clients_user_id_fkey'
    ) THEN
        ALTER TABLE ONLY "public"."yulia_clients"
            ADD CONSTRAINT "yulia_clients_user_id_fkey"
            FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;
    END IF;

    -- Add foreign key constraint for lera_clients if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints
        WHERE constraint_name = 'lera_clients_user_id_fkey'
    ) THEN
        ALTER TABLE ONLY "public"."lera_clients"
            ADD CONSTRAINT "lera_clients_user_id_fkey"
            FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;
    END IF;

    -- Add foreign key constraint for liudmila_clients if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints
        WHERE constraint_name = 'liudmila_clients_user_id_fkey'
    ) THEN
        ALTER TABLE ONLY "public"."liudmila_clients"
            ADD CONSTRAINT "liudmila_clients_user_id_fkey"
            FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;
    END IF;
END $$;

-- Add indexes for better performance on new tables
CREATE INDEX IF NOT EXISTS "idx_yulia_clients_user_id" ON "public"."yulia_clients" USING "btree" ("user_id");
CREATE INDEX IF NOT EXISTS "idx_yulia_clients_created_at" ON "public"."yulia_clients" USING "btree" ("created_at");
CREATE INDEX IF NOT EXISTS "idx_yulia_clients_warming_level" ON "public"."yulia_clients" USING "btree" ("warming_level");

CREATE INDEX IF NOT EXISTS "idx_lera_clients_user_id" ON "public"."lera_clients" USING "btree" ("user_id");
CREATE INDEX IF NOT EXISTS "idx_lera_clients_created_at" ON "public"."lera_clients" USING "btree" ("created_at");
CREATE INDEX IF NOT EXISTS "idx_lera_clients_warming_level" ON "public"."lera_clients" USING "btree" ("warming_level");

CREATE INDEX IF NOT EXISTS "idx_liudmila_clients_user_id" ON "public"."liudmila_clients" USING "btree" ("user_id");
CREATE INDEX IF NOT EXISTS "idx_liudmila_clients_created_at" ON "public"."liudmila_clients" USING "btree" ("created_at");
CREATE INDEX IF NOT EXISTS "idx_liudmila_clients_warming_level" ON "public"."liudmila_clients" USING "btree" ("warming_level");

-- Add indexes for price_categories table
CREATE INDEX IF NOT EXISTS "idx_price_categories_code" ON "public"."price_categories" USING "btree" ("code");
CREATE INDEX IF NOT EXISTS "idx_price_categories_order" ON "public"."price_categories" USING "btree" ("order_index");
CREATE INDEX IF NOT EXISTS "idx_price_categories_published" ON "public"."price_categories" USING "btree" ("is_published");

-- Add index for prices.category_id foreign key
CREATE INDEX IF NOT EXISTS "idx_prices_category_id" ON "public"."prices" USING "btree" ("category_id");