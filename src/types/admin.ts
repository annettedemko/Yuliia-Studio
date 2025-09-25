export interface ServicePrice {
  id: string;
  service: string;
  price: string;
  note?: string;
  category: 'alexandrit' | 'dioden' | 'icoone' | 'manicure' | 'pedicure';
}

export interface SubscriptionPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  treatments: string;
  frequency: string;
  features: string[];
  popular: boolean;
}

export interface AdminUser {
  username: string;
  password: string;
  lastLogin?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD format
  time?: string;
  location: string;
  address: string;
  description?: string;
}

export interface ContentData {
  prices: ServicePrice[];
  subscriptions: SubscriptionPackage[];
  events: Event[];
  lastUpdated: string;
}