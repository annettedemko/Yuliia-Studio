export interface ServicePrice {
  id: string;
  service: string;
  service_ru?: string;
  price: string;
  note?: string;
  note_ru?: string;
  category: 'alexandrit' | 'dioden' | 'icoone' | 'manicure' | 'pedicure' | 'redtouchpro';
}

export interface SubscriptionPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  period_ru?: string;
  treatments: string;
  treatments_ru?: string;
  frequency: string;
  frequency_ru?: string;
  features: string[];
  popular: boolean;
}

export interface AdminUser {
  username: string;
  password: string;
  role: 'admin' | 'anna' | 'natalia' | 'yulia' | 'lera' | 'liudmila';
  lastLogin?: string;
}

export interface Event {
  id: string;
  title: string;
  title_ru?: string;
  date: string; // YYYY-MM-DD format
  time?: string;
  location: string;
  address: string;
  description?: string;
  description_ru?: string;
}

export interface Client {
  id: string;
  phone: string;
  email: string | null;
  full_name: string;
  instagram: string | null;
  warming_level: string | null;
  user_id: string | null;
  created_at: string;
}

export interface ContentData {
  prices: ServicePrice[];
  subscriptions: SubscriptionPackage[];
  events: Event[];
  lastUpdated: string;
}