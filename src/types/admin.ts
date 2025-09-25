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

export interface ContentData {
  prices: ServicePrice[];
  subscriptions: SubscriptionPackage[];
  lastUpdated: string;
}