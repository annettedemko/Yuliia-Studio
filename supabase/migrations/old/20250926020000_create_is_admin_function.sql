-- Создание функции is_admin для проверки админских прав
CREATE OR REPLACE FUNCTION "public"."is_admin"("p_user" "uuid") RETURNS boolean
    LANGUAGE "sql" STABLE
    AS $$
  SELECT EXISTS (SELECT 1 FROM public.profiles WHERE id = p_user AND role = 'admin');
$$;

-- Настройка прав доступа
ALTER FUNCTION "public"."is_admin"("p_user" "uuid") OWNER TO "postgres";

-- Предоставление прав
GRANT ALL ON FUNCTION "public"."is_admin"("p_user" "uuid") TO "service_role";
GRANT ALL ON FUNCTION "public"."is_admin"("p_user" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_admin"("p_user" "uuid") TO "anon";