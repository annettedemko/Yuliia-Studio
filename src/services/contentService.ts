import { supabase } from '@/lib/supabase'
import type { ServicePrice, SubscriptionPackage, Event } from '@/types/admin'

const SUPABASE_URL = 'https://knmompemjlboqzwcycwe.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM'

// Helper to get auth token
const getAuthToken = (): string => {
  return localStorage.getItem('supabase.auth.token') || SUPABASE_ANON_KEY;
};

// Price category interface
export interface PriceCategory {
  id: string
  code: string
  name: string
  name_ru?: string
  description?: string
  description_ru?: string
  icon?: string
  color?: string
  order_index: number
  is_published: boolean
}

// Categories service
export const categoriesService = {
  async getAll(): Promise<PriceCategory[]> {
    console.log('🔍 Categories: Fetching from Supabase...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/price_categories?is_published=eq.true&order=order_index.asc&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`🔍 Categories: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching categories:', error);
        return [];
      }

      const data = await response.json();
      return data as PriceCategory[];
    } catch (error) {
      console.error('Categories: Exception:', error);
      return [];
    }
  },

  async create(category: Omit<PriceCategory, 'id'>): Promise<PriceCategory | null> {
    const { data, error } = await supabase
      .from('price_categories')
      .insert(category)
      .select()
      .single()

    if (error) {
      console.error('Error creating category:', error)
      return null
    }

    return data as PriceCategory
  },

  async update(id: string, updates: Partial<PriceCategory>): Promise<PriceCategory | null> {
    const { data, error } = await supabase
      .from('price_categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating category:', error)
      return null
    }

    return data as PriceCategory
  }
}

// Prices service
export const pricesService = {
  async getAll(): Promise<ServicePrice[]> {
    console.log('🔍 Prices: Начинаем запрос к таблице prices...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/prices?is_published=eq.true&order=order_index.asc&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`🔍 Prices: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('🔴 Error fetching prices:', error);
        return [];
      }

      const data = await response.json();

      if (!data || data.length === 0) {
        console.warn('⚠️ Prices: Таблица пустая или нет опубликованных цен');
        return [];
      }

      console.log('🟢 Prices: Найдено записей:', data.length);
      console.log('🟢 Prices: Первая запись:', data[0]);

      return data.map((item: any) => ({
        id: item.id,
        service: item.service,
        service_ru: item.service_ru || undefined,
        price: item.price,
        category: item.category as ServicePrice['category'],
        note: item.note || undefined,
        note_ru: item.note_ru || undefined
      }));
    } catch (error) {
      console.error('🔴 Prices: Exception:', error);
      return [];
    }
  },

  async getAllWithCategories() {
    const { data, error } = await supabase
      .from('prices')
      .select(`
        *,
        price_categories!inner(*)
      `)
      .eq('is_published', true)
      .eq('price_categories.is_published', true)
      .order('price_categories.order_index', { ascending: true })

    if (error) {
      console.error('Error fetching prices with categories:', error)
      return []
    }

    return data
  },

  async create(price: Omit<ServicePrice, 'id'>): Promise<ServicePrice | null> {
    // Find category_id by category code
    const { data: categoryData } = await supabase
      .from('price_categories')
      .select('id')
      .eq('code', price.category)
      .single()

    if (!categoryData) {
      console.error('Category not found:', price.category)
      return null
    }

    const { data, error } = await supabase
      .from('prices')
      .insert({
        service: price.service,
        price: price.price,
        category_id: categoryData.id,
        note: price.note || null,
        order_index: 0
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating price:', error)
      return null
    }

    return {
      id: data.id,
      service: data.service,
      price: data.price,
      category: data.category as ServicePrice['category'],
      note: data.note || undefined
    }
  },

  async update(id: string, updates: Partial<ServicePrice>): Promise<ServicePrice | null> {
    let category_id = undefined

    // If category is being updated, find the category_id
    if (updates.category) {
      const { data: categoryData } = await supabase
        .from('price_categories')
        .select('id')
        .eq('code', updates.category)
        .single()

      if (!categoryData) {
        console.error('Category not found:', updates.category)
        return null
      }
      category_id = categoryData.id
    }

    const updateData: any = {
      service: updates.service,
      price: updates.price,
      note: updates.note || null
    }

    if (category_id) {
      updateData.category_id = category_id
    }

    const { data, error } = await supabase
      .from('prices')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating price:', error)
      return null
    }

    return {
      id: data.id,
      service: data.service,
      price: data.price,
      category: data.category as ServicePrice['category'],
      note: data.note || undefined
    }
  },

  async delete(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('prices')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting price:', error)
      return false
    }

    return true
  },

  async updateOrder(id: string, order_index: number): Promise<boolean> {
    const { error } = await supabase
      .from('prices')
      .update({ order_index })
      .eq('id', id)

    if (error) {
      console.error('Error updating price order:', error)
      return false
    }

    return true
  }
}

// Subscriptions service
export const subscriptionsService = {
  async getAll(): Promise<SubscriptionPackage[]> {
    console.log('🔍 Subscriptions: Fetching from Supabase...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions?is_published=eq.true&order=order_index.asc&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`🔍 Subscriptions: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching subscriptions:', error);
        return [];
      }

      const data = await response.json();

      return data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        period: item.period || undefined,
        period_ru: item.period_ru || undefined,
        treatments: item.treatments || undefined,
        treatments_ru: item.treatments_ru || undefined,
        frequency: item.frequency || undefined,
        frequency_ru: item.frequency_ru || undefined,
        features: item.features || [],
        popular: item.popular
      }));
    } catch (error) {
      console.error('Subscriptions: Exception:', error);
      return [];
    }
  },

  async create(subscription: Omit<SubscriptionPackage, 'id'>): Promise<SubscriptionPackage | null> {
    const { data, error } = await supabase
      .from('subscriptions')
      .insert({
        name: subscription.name,
        price: subscription.price,
        period: subscription.period || null,
        treatments: subscription.treatments || null,
        frequency: subscription.frequency || null,
        features: subscription.features || [],
        popular: subscription.popular || false,
        order_index: 0
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating subscription:', error)
      return null
    }

    return {
      id: data.id,
      name: data.name,
      price: data.price,
      period: data.period || undefined,
      treatments: data.treatments || undefined,
      frequency: data.frequency || undefined,
      features: data.features || [],
      popular: data.popular
    }
  },

  async update(id: string, updates: Partial<SubscriptionPackage>): Promise<SubscriptionPackage | null> {
    const { data, error } = await supabase
      .from('subscriptions')
      .update({
        name: updates.name,
        price: updates.price,
        period: updates.period || null,
        treatments: updates.treatments || null,
        frequency: updates.frequency || null,
        features: updates.features || [],
        popular: updates.popular || false
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating subscription:', error)
      return null
    }

    return {
      id: data.id,
      name: data.name,
      price: data.price,
      period: data.period || undefined,
      treatments: data.treatments || undefined,
      frequency: data.frequency || undefined,
      features: data.features || [],
      popular: data.popular
    }
  },

  async delete(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('subscriptions')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting subscription:', error)
      return false
    }

    return true
  }
}

// Events service
export const eventsService = {
  async getAll(): Promise<Event[]> {
    console.log('🔍 Events: Fetching all published events from Supabase...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/events?is_published=eq.true&order=date.asc&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`🔍 Events: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching events:', error);
        return [];
      }

      const data = await response.json();
      console.log('🔍 Events: Found events:', data?.length || 0);

      return data.map((item: any) => ({
        id: item.id,
        title: item.title,
        title_ru: item.title_ru || undefined,
        date: item.date || '',
        time: item.time || undefined,
        location: item.location || undefined,
        address: item.address || undefined,
        description: item.description || undefined,
        description_ru: item.description_ru || undefined
      }));
    } catch (error) {
      console.error('Events: Exception:', error);
      return [];
    }
  },

  async getUpcoming(): Promise<Event[]> {
    const today = new Date().toISOString().split('T')[0];
    console.log('🔍 Events: Fetching upcoming events from Supabase... Today:', today);
    const startTime = Date.now();

    try {
      // Using anon key for public access (no auth token needed)
      const response = await fetch(`${SUPABASE_URL}/rest/v1/events?is_published=eq.true&date=gte.${today}&order=date.asc&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`🔍 Events: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching upcoming events:', error);
        return [];
      }

      const data = await response.json();
      console.log('🔍 Events: Found upcoming events:', data?.length || 0, data);

      return data.map((item: any) => ({
        id: item.id,
        title: item.title,
        title_ru: item.title_ru || undefined,
        date: item.date || '',
        time: item.time || undefined,
        location: item.location || undefined,
        address: item.address || undefined,
        description: item.description || undefined,
        description_ru: item.description_ru || undefined
      }));
    } catch (error) {
      console.error('Events: Exception:', error);
      return [];
    }
  },

  async create(event: Omit<Event, 'id'>): Promise<Event | null> {
    console.log('🔍 Events: Creating event...');
    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/events`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          title: event.title,
          date: event.date || null,
          time: event.time || null,
          location: event.location || null,
          address: event.address || null,
          description: event.description || null,
          is_published: true
        })
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error creating event:', error);
        return null;
      }

      const data = await response.json();
      return {
        id: data[0].id,
        title: data[0].title,
        date: data[0].date || '',
        time: data[0].time || undefined,
        location: data[0].location || undefined,
        address: data[0].address || undefined,
        description: data[0].description || undefined
      };
    } catch (error) {
      console.error('Error creating event:', error);
      return null;
    }
  },

  async update(id: string, updates: Partial<Event>): Promise<Event | null> {
    console.log('🔍 Events: Updating event:', id);
    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/events?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          title: updates.title,
          date: updates.date || null,
          time: updates.time || null,
          location: updates.location || null,
          address: updates.address || null,
          description: updates.description || null,
          updated_at: new Date().toISOString()
        })
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error updating event:', error);
        return null;
      }

      const data = await response.json();
      return {
        id: data[0].id,
        title: data[0].title,
        date: data[0].date || '',
        time: data[0].time || undefined,
        location: data[0].location || undefined,
        address: data[0].address || undefined,
        description: data[0].description || undefined
      };
    } catch (error) {
      console.error('Error updating event:', error);
      return null;
    }
  },

  async delete(id: string): Promise<boolean> {
    console.log('🔍 Events: Deleting event:', id);
    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/events?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error deleting event:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error deleting event:', error);
      return false;
    }
  }
}