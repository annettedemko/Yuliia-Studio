#!/bin/bash
# Script to create initial admin user in Supabase
# Usage:
#   1. Set environment variable: export SUPABASE_SERVICE_ROLE_KEY="your_key_here"
#   2. Run: bash scripts/create-admin.sh

# Check if service role key is set
if [ -z "$SUPABASE_SERVICE_ROLE_KEY" ]; then
    echo "Error: SUPABASE_SERVICE_ROLE_KEY environment variable is not set"
    echo "Please set it first:"
    echo "export SUPABASE_SERVICE_ROLE_KEY=\"your_service_role_key_here\""
    exit 1
fi

echo "Creating admin user in Supabase..."

curl -s -X POST "https://knmompemjlboqzwcycwe.supabase.co/auth/v1/admin/users" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "annettedemko@gmail.com",
    "password": "TempPasswort123!",
    "email_confirm": true,
    "user_metadata": { "role": "admin" }
  }'

echo ""
echo "Admin user creation completed!"
echo "Email: annettedemko@gmail.com"
echo "Password: TempPasswort123!"
echo "Please change the password after first login."