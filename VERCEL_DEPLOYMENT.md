# Vercel Deployment Guide - Yuliia Beauty Studio

## 🚨 Critical Issue: Environment Variables

Your production site on Vercel is currently trying to connect to `localhost:54321` instead of the production Supabase database. This needs to be fixed immediately.

## 📋 Required Vercel Environment Variables

Go to your Vercel dashboard → Project Settings → Environment Variables and add these:

### 1. Supabase Production Configuration
```
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_PRODUCTION_ANON_KEY
```

### 2. Production Service Role (for admin functions)
```
SUPABASE_SERVICE_ROLE_KEY=YOUR_PRODUCTION_SERVICE_ROLE_KEY
```

### 3. Dikidi Integration
```
VITE_DIKIDI_WIDGET_ID=185505
```

### 4. Optional Production URL
```
VITE_APP_URL=https://yuliia-studio.vercel.app
```

## 🔧 Steps to Fix Vercel Deployment

### Step 1: Get Your Supabase Production Keys
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy:
   - **Project URL** (starts with https://...supabase.co)
   - **anon/public key** (for VITE_SUPABASE_ANON_KEY)
   - **service_role key** (for SUPABASE_SERVICE_ROLE_KEY)

### Step 2: Update Vercel Environment Variables
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `yuliia-studio` project
3. Go to Settings → Environment Variables
4. Add all variables listed above
5. Set Environment to: **Production**, **Preview**, and **Development**

### Step 3: Redeploy
1. Go to Deployments tab
2. Click "Redeploy" on the latest deployment
3. Or push a new commit to trigger automatic deployment

## 🚀 Quick Deploy Commands

If you need to trigger a new deployment:

```bash
# Add a small change and commit
echo "# Updated $(date)" >> README.md
git add README.md
git commit -m "trigger: Redeploy with correct environment variables"
git push origin main
```

## 🔍 How to Verify It's Working

After deployment, check:
1. Open browser console on https://yuliia-studio.vercel.app/preis
2. Should see data loading without localhost errors
3. Prices and categories should display correctly

## 🛠️ Troubleshooting

### If data still not loading:
1. Check Supabase RLS policies are disabled for public tables
2. Verify network tab shows requests to supabase.co (not localhost)
3. Check console for CORS errors

### If admin login not working:
1. Verify SUPABASE_SERVICE_ROLE_KEY is set
2. Check that admin users exist in auth.users table
3. Verify RLS policies allow admin access

## 📱 Current Production Status

❌ **BROKEN**: Site connecting to localhost instead of production DB
✅ **WORKING**: All other functionality (UI, routing, mobile responsiveness)

## 🎯 Priority Actions

1. **IMMEDIATE**: Set Vercel environment variables
2. **IMMEDIATE**: Redeploy the application
3. **VERIFY**: Test production site functionality
4. **MONITOR**: Check error logs in Vercel dashboard

---

**Next Steps**: Once environment variables are set and site is redeployed, all functionality should work correctly in production.