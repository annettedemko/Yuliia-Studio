# Yuliia Cheporska Studio - Munich Beauty Salon Website

Modern, responsive website for a professional beauty studio in Munich, specializing in laser hair removal, iCoone treatments, manicure, and pedicure services.

🌐 **Live Website:** [yuliia-studio.vercel.app](https://yuliia-studio.vercel.app)

## About

Yuliia Cheporska Studio is a premium beauty salon located in Munich, offering professional cosmetic services including Alexandrite laser hair removal, Diode laser treatments, iCoone body sculpting, RedTouchPro, manicure, and pedicure services.

**Location:** Elsässer Str. 33, Munich, Germany
**Phone:** +49 152 0606 7810

## Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with shadcn/ui components
- **Backend & Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth with Row Level Security (RLS)
- **Deployment:** Vercel
- **Booking Integration:** Dikidi booking system

## Key Features

### Client-Facing Features
- Responsive design optimized for mobile and desktop
- Multi-language support (German/Russian)
- Online appointment booking via Dikidi integration
- Dynamic pricing pages with service categories
- Event registration forms for DEKA beauty days
- DEKA equipment showcase pages
- SEO optimized with proper meta tags and structured data

### Admin Dashboard
- Secure authentication system for 5 users
- Content management for services and pricing
- Event management system
- Client relationship management (CRM) with lead tracking
- Form submissions management
- Multi-user access with role-based permissions

## Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/              # Page components for routing
│   ├── services/           # API service layer (Supabase)
│   ├── lib/                # Utility functions and configurations
│   └── types/              # TypeScript type definitions
├── supabase/
│   ├── migrations/         # Database schema migrations
│   ├── seed/              # Seed data files (CSV)
│   └── *.sql              # Production SQL scripts
└── public/                # Static assets (images, logos)
```

## Development Setup

### Prerequisites
- Node.js 18+ and npm
- Supabase CLI (optional, for local development)

### Installation

```bash
# Clone the repository
git clone https://github.com/annettedemko/Yuliia-Studio.git
cd Yuliia-Studio

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Start development server
npm run dev

# Optional: Start local Supabase instance
npx supabase start
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## Deployment

The project is configured for automatic deployment to Vercel. Any push to the `main` branch triggers a new production deployment.

## Database Schema

The application uses Supabase PostgreSQL with the following main tables:

- `prices` - Service pricing with categories
- `price_categories` - Price category definitions
- `subscriptions` - Subscription packages
- `events` - Beauty events and DEKA days
- `form_submissions` - Contact form submissions
- `*_clients` - Client management tables per specialist

All tables are protected with Row Level Security (RLS) policies.

## Contributing

This is a private project for Yuliia Cheporska Studio. For inquiries, please contact the studio directly.

## License

© 2025 Yuliia Cheporska Studio. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.
