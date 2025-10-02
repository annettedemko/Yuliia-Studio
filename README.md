# Yuliia Cheporska Studio

Professional beauty studio website offering laser hair removal, iCoone treatments, manicure, and pedicure services in Munich.

## 🌐 Live Website

**Production:** [yuliia-studio.vercel.app](https://yuliia-studio.vercel.app)

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Backend:** Supabase (PostgreSQL + Auth + RLS)
- **Deployment:** Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Start local development
npm run dev

# Start local Supabase
npx supabase start

# Build for production
npm run build
```

## 🔧 Environment Variables

Create `.env.local` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🗂️ Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components (routing)
├── services/       # API services (Supabase)
├── lib/            # Utilities and configurations
└── types/          # TypeScript type definitions

supabase/
├── migrations/     # Database migrations
└── seed/          # Seed data (CSV)
```

## 📝 Features

- ✅ Multi-language support (German/Russian)
- ✅ Admin dashboard for content management
- ✅ Event registration forms
- ✅ Dynamic pricing with categories
- ✅ Client management system
- ✅ Subscription packages
- ✅ SEO optimized

## 🚀 Deployment

The project automatically deploys to Vercel on push to `main` branch.

## 📞 Contact

**Yuliia Cheporska Studio**
Elsässer Str. 33, Munich
Phone: +49 152 0606 7810

## 📄 License

© 2025 Yuliia Cheporska Studio. All rights reserved.
