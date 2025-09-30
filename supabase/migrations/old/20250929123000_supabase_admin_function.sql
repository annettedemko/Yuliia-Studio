-- Create is_admin function for RLS policies
CREATE OR REPLACE FUNCTION is_admin(user_id uuid DEFAULT auth.uid())
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    user_role text;
BEGIN
    -- Check if user is authenticated
    IF user_id IS NULL THEN
        RETURN false;
    END IF;

    -- Get role from user metadata
    SELECT (auth.users.raw_user_meta_data ->> 'role')
    INTO user_role
    FROM auth.users
    WHERE auth.users.id = user_id;

    -- Return true if user has admin role
    RETURN user_role = 'admin';
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION is_admin TO authenticated;
GRANT EXECUTE ON FUNCTION is_admin TO anon;