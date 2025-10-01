


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE SCHEMA IF NOT EXISTS "public";


ALTER SCHEMA "public" OWNER TO "pg_database_owner";


COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE TYPE "public"."form_owner" AS ENUM (
    'Others',
    'NATALIA',
    'ANNA'
);


ALTER TYPE "public"."form_owner" OWNER TO "postgres";


CREATE TYPE "public"."price_category" AS ENUM (
    'alexandrit',
    'dioden',
    'icoone',
    'manicure',
    'pedicure'
);


ALTER TYPE "public"."price_category" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."is_admin"("p_user" "uuid") RETURNS boolean
    LANGUAGE "sql" STABLE
    AS $$ SELECT EXISTS ( SELECT 1 FROM public.profiles WHERE id = p_user AND role = 'admin' ); $$;


ALTER FUNCTION "public"."is_admin"("p_user" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."is_admin_v2"("p_user_id" "uuid" DEFAULT NULL::"uuid") RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
select exists (
  select 1
  from auth.users u
  where u.id = coalesce(p_user_id, (SELECT auth.uid()))
    and (u.raw_user_meta_data->>'role') = 'admin'
);
$$;


ALTER FUNCTION "public"."is_admin_v2"("p_user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."is_anna_v2"("p_user_id" "uuid" DEFAULT NULL::"uuid") RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
select exists (
  select 1
  from auth.users u
  where u.id = coalesce(p_user_id, (SELECT auth.uid()))
    and (u.raw_user_meta_data->>'role') = 'anna'
);
$$;


ALTER FUNCTION "public"."is_anna_v2"("p_user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."is_natalia_v2"("p_user_id" "uuid" DEFAULT NULL::"uuid") RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
select exists (
  select 1
  from auth.users u
  where u.id = coalesce(p_user_id, (SELECT auth.uid()))
    and (u.raw_user_meta_data->>'role') = 'natalia'
);
$$;


ALTER FUNCTION "public"."is_natalia_v2"("p_user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."set_updated_at"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."set_updated_at"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."anna_clients" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "phone" "text" NOT NULL,
    "email" "text",
    "full_name" "text",
    "instagram" "text",
    "warming_level" "text",
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."anna_clients" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."events" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "title" "text" NOT NULL,
    "date" "date",
    "time" "text",
    "location" "text",
    "address" "text",
    "description" "text",
    "is_published" boolean DEFAULT true NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "user_id" "uuid"
);


ALTER TABLE "public"."events" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."form_submissions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" "text" NOT NULL,
    "phone" "text" NOT NULL,
    "email" "text",
    "message" "text",
    "page" "text" NOT NULL,
    "owner" "public"."form_owner" DEFAULT 'Others'::"public"."form_owner" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."form_submissions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."natalia_clients" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "phone" "text" NOT NULL,
    "email" "text",
    "full_name" "text",
    "instagram" "text",
    "warming_level" "text",
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."natalia_clients" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."prices" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "service" "text" NOT NULL,
    "price" "text" NOT NULL,
    "category" "public"."price_category" NOT NULL,
    "note" "text",
    "order_index" integer DEFAULT 0 NOT NULL,
    "is_published" boolean DEFAULT true NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."prices" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" "uuid" NOT NULL,
    "full_name" "text",
    "role" "text" DEFAULT 'viewer'::"text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."profiles" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."subscriptions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" "text" NOT NULL,
    "price" "text" NOT NULL,
    "period" "text",
    "treatments" "text",
    "frequency" "text",
    "features" "text"[] DEFAULT ARRAY[]::"text"[],
    "popular" boolean DEFAULT false NOT NULL,
    "order_index" integer DEFAULT 0 NOT NULL,
    "is_published" boolean DEFAULT true NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."subscriptions" OWNER TO "postgres";


ALTER TABLE ONLY "public"."anna_clients"
    ADD CONSTRAINT "anna_clients_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."events"
    ADD CONSTRAINT "events_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."form_submissions"
    ADD CONSTRAINT "form_submissions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."natalia_clients"
    ADD CONSTRAINT "natalia_clients_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."prices"
    ADD CONSTRAINT "prices_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."subscriptions"
    ADD CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id");



CREATE INDEX "idx_events_date" ON "public"."events" USING "btree" ("date");



CREATE INDEX "idx_events_is_published" ON "public"."events" USING "btree" ("is_published");



CREATE INDEX "idx_events_published_date" ON "public"."events" USING "btree" ("is_published", "date");



CREATE INDEX "idx_events_user_id" ON "public"."events" USING "btree" ("id");



CREATE INDEX "idx_prices_category_order" ON "public"."prices" USING "btree" ("category", "order_index");



CREATE INDEX "idx_subscriptions_order" ON "public"."subscriptions" USING "btree" ("order_index");



CREATE OR REPLACE TRIGGER "set_updated_at_events" BEFORE UPDATE ON "public"."events" FOR EACH ROW EXECUTE FUNCTION "public"."set_updated_at"();



CREATE OR REPLACE TRIGGER "set_updated_at_prices" BEFORE UPDATE ON "public"."prices" FOR EACH ROW EXECUTE FUNCTION "public"."set_updated_at"();



CREATE OR REPLACE TRIGGER "set_updated_at_profiles" BEFORE UPDATE ON "public"."profiles" FOR EACH ROW EXECUTE FUNCTION "public"."set_updated_at"();



CREATE OR REPLACE TRIGGER "set_updated_at_subscriptions" BEFORE UPDATE ON "public"."subscriptions" FOR EACH ROW EXECUTE FUNCTION "public"."set_updated_at"();



ALTER TABLE ONLY "public"."anna_clients"
    ADD CONSTRAINT "anna_clients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."natalia_clients"
    ADD CONSTRAINT "natalia_clients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



CREATE POLICY "Allow delete for authenticated" ON "public"."form_submissions" FOR DELETE TO "authenticated" USING (true);



CREATE POLICY "Allow insert for all" ON "public"."form_submissions" FOR INSERT TO "authenticated", "anon" WITH CHECK (true);



CREATE POLICY "Allow inserts from website forms" ON "public"."form_submissions" FOR INSERT TO "anon" WITH CHECK (true);



CREATE POLICY "Allow read for authenticated" ON "public"."form_submissions" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "Allow read for authenticated users" ON "public"."form_submissions" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "admin_all_events_v2" ON "public"."events" TO "authenticated" USING (( SELECT "public"."is_admin_v2"() AS "is_admin_v2")) WITH CHECK (( SELECT "public"."is_admin_v2"() AS "is_admin_v2"));



CREATE POLICY "admin_all_prices" ON "public"."prices" TO "authenticated" USING ("public"."is_admin"("auth"."uid"())) WITH CHECK ("public"."is_admin"("auth"."uid"()));



CREATE POLICY "admin_all_subscriptions" ON "public"."subscriptions" TO "authenticated" USING ("public"."is_admin"("auth"."uid"())) WITH CHECK ("public"."is_admin"("auth"."uid"()));



CREATE POLICY "admin_delete_form_submissions" ON "public"."form_submissions" FOR DELETE TO "authenticated" USING (( SELECT "public"."is_admin_v2"() AS "is_admin_v2"));



CREATE POLICY "admin_mod_profiles" ON "public"."profiles" TO "authenticated" USING ("public"."is_admin"(( SELECT "auth"."uid"() AS "uid"))) WITH CHECK ("public"."is_admin"(( SELECT "auth"."uid"() AS "uid")));



CREATE POLICY "admin_select_form_submissions" ON "public"."form_submissions" FOR SELECT TO "authenticated" USING (( SELECT "public"."is_admin_v2"() AS "is_admin_v2"));



ALTER TABLE "public"."anna_clients" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "anna_clients_access" ON "public"."anna_clients" TO "authenticated" USING ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::"text") = 'admin'::"text")))))) WITH CHECK ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::"text") = 'admin'::"text"))))));



CREATE POLICY "anna_owner_all" ON "public"."anna_clients" TO "authenticated" USING (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2"))) WITH CHECK (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")));



CREATE POLICY "anon_insert_form_submissions" ON "public"."form_submissions" FOR INSERT TO "anon" WITH CHECK (true);



CREATE POLICY "anon_select_prices" ON "public"."prices" FOR SELECT TO "anon" USING (true);



CREATE POLICY "anon_select_published_events" ON "public"."events" FOR SELECT TO "anon" USING (("is_published" = true));



CREATE POLICY "anon_select_subscriptions" ON "public"."subscriptions" FOR SELECT TO "anon" USING (true);



CREATE POLICY "auth_select_published_events" ON "public"."events" FOR SELECT TO "authenticated" USING ((("is_published" = true) OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")));



CREATE POLICY "authenticated_select_prices" ON "public"."prices" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "authenticated_select_subscriptions" ON "public"."subscriptions" FOR SELECT TO "authenticated" USING (true);



ALTER TABLE "public"."events" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."form_submissions" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "form_submissions_admin_delete" ON "public"."form_submissions" FOR DELETE TO "authenticated" USING ("public"."is_admin"("auth"."uid"()));



CREATE POLICY "form_submissions_admin_select" ON "public"."form_submissions" FOR SELECT TO "authenticated" USING ("public"."is_admin"("auth"."uid"()));



CREATE POLICY "form_submissions_insert_anon" ON "public"."form_submissions" FOR INSERT TO "anon" WITH CHECK (true);



CREATE POLICY "form_submissions_insert_authenticated" ON "public"."form_submissions" FOR INSERT TO "authenticated" WITH CHECK (true);



CREATE POLICY "form_submissions_read_authenticated" ON "public"."form_submissions" FOR SELECT TO "authenticated" USING (true);



ALTER TABLE "public"."natalia_clients" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "natalia_clients_access" ON "public"."natalia_clients" TO "authenticated" USING ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::"text") = 'admin'::"text")))))) WITH CHECK ((("auth"."uid"() = "user_id") OR (EXISTS ( SELECT 1
   FROM "auth"."users" "u"
  WHERE (("u"."id" = "auth"."uid"()) AND (("u"."raw_user_meta_data" ->> 'role'::"text") = 'admin'::"text"))))));



CREATE POLICY "natalia_owner_all" ON "public"."natalia_clients" TO "authenticated" USING (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2"))) WITH CHECK (((( SELECT "auth"."uid"() AS "uid") = "user_id") OR ( SELECT "public"."is_admin_v2"() AS "is_admin_v2")));



ALTER TABLE "public"."prices" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "self_or_admin_select_profiles" ON "public"."profiles" FOR SELECT TO "authenticated" USING (((( SELECT "auth"."uid"() AS "uid") = "id") OR "public"."is_admin"(( SELECT "auth"."uid"() AS "uid"))));



ALTER TABLE "public"."subscriptions" ENABLE ROW LEVEL SECURITY;


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";



GRANT ALL ON FUNCTION "public"."is_admin"("p_user" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."is_admin_v2"("p_user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."is_admin_v2"("p_user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_admin_v2"("p_user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."is_anna_v2"("p_user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."is_anna_v2"("p_user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_anna_v2"("p_user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."is_natalia_v2"("p_user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."is_natalia_v2"("p_user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_natalia_v2"("p_user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."set_updated_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."set_updated_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."set_updated_at"() TO "service_role";



GRANT ALL ON TABLE "public"."anna_clients" TO "anon";
GRANT ALL ON TABLE "public"."anna_clients" TO "authenticated";
GRANT ALL ON TABLE "public"."anna_clients" TO "service_role";



GRANT ALL ON TABLE "public"."events" TO "anon";
GRANT ALL ON TABLE "public"."events" TO "authenticated";
GRANT ALL ON TABLE "public"."events" TO "service_role";



GRANT ALL ON TABLE "public"."form_submissions" TO "anon";
GRANT ALL ON TABLE "public"."form_submissions" TO "authenticated";
GRANT ALL ON TABLE "public"."form_submissions" TO "service_role";



GRANT ALL ON TABLE "public"."natalia_clients" TO "anon";
GRANT ALL ON TABLE "public"."natalia_clients" TO "authenticated";
GRANT ALL ON TABLE "public"."natalia_clients" TO "service_role";



GRANT ALL ON TABLE "public"."prices" TO "anon";
GRANT ALL ON TABLE "public"."prices" TO "authenticated";
GRANT ALL ON TABLE "public"."prices" TO "service_role";



GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";



GRANT ALL ON TABLE "public"."subscriptions" TO "anon";
GRANT ALL ON TABLE "public"."subscriptions" TO "authenticated";
GRANT ALL ON TABLE "public"."subscriptions" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";







RESET ALL;
