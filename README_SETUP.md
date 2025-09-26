# Supabase Setup Instructions

## Security Setup

### 1. Environment Variables
Copy the example environment file and fill in your credentials:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your actual Supabase keys:
```bash
# Never commit .env.local to git!
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODc5NTM2NCwiZXhwIjoyMDc0MzcxMzY0fQ.R2s1wQNzEJHMKCzgDh4iNol-PK2Xfqjnhrp26vhSgJg"
```

### 2. Create Admin User
```bash
# Set environment variable
export SUPABASE_SERVICE_ROLE_KEY="your_service_role_key_here"

# Run admin creation script
bash scripts/create-admin.sh
```

## Security Notes
- **Never commit** `.env.local` to version control
- **Never** put service role keys directly in scripts
- Use environment variables for all sensitive data
- Change default admin password after first login

## Admin Login
- Email: `annettedemko@gmail.com`
- Password: `TempPasswort123!`
- **Important**: Change password after first login!