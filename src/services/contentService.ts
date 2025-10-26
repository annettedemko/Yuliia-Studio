import { supabase } from '@/lib/supabase'
import type { ServicePrice, SubscriptionPackage, Event, Promotion } from '@/types/admin'

const SUPABASE_URL = 'https://knmompemjlboqzwcycwe.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM'

// Helper to get auth token - ALWAYS use ANON_KEY
// The Supabase client handles session automatically, we just need ANON_KEY for REST API
const getAuthToken = (): string => {
  // Always use ANON_KEY - RLS policies handle access control
  console.log('🔑 Using ANON_KEY for API request');
  return SUPABASE_ANON_KEY;
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
    console.log('Creating price category via REST API:', category);
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/price_categories`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(category)
      });

      const elapsed = Date.now() - startTime;
      console.log(`createPriceCategory: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('createPriceCategory: Error creating category:', error);
        return null;
      }

      const data = await response.json();
      console.log('createPriceCategory: Successfully created category:', data[0]);
      return data[0] as PriceCategory;
    } catch (error) {
      console.error('createPriceCategory: Exception:', error);
      return null;
    }
  },

  async update(id: string, updates: Partial<PriceCategory>): Promise<PriceCategory | null> {
    console.log('Updating price category', id, 'via REST API...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/price_categories?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(updates)
      });

      const elapsed = Date.now() - startTime;
      console.log(`updatePriceCategory: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('updatePriceCategory: Error updating category:', error);
        return null;
      }

      const data = await response.json();
      console.log('updatePriceCategory: Successfully updated category:', data[0]);
      return data[0] as PriceCategory;
    } catch (error) {
      console.error('updatePriceCategory: Exception:', error);
      return null;
    }
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
    console.log('Creating price via REST API:', price);
    const startTime = Date.now();

    try {
      const token = getAuthToken();

      // Find category_id by category code using REST API
      console.log('Looking for category with code:', price.category);
      const categoryResponse = await fetch(`${SUPABASE_URL}/rest/v1/price_categories?code=eq.${price.category}&select=id`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!categoryResponse.ok) {
        const error = await categoryResponse.json();
        console.error('Error fetching category:', error);
        alert(`Fehler beim Abrufen der Kategorie: ${JSON.stringify(error)}`);
        return null;
      }

      const categoryData = await categoryResponse.json();
      console.log('Category data received:', categoryData);
      if (!categoryData || categoryData.length === 0) {
        console.error('Category not found for code:', price.category);
        alert(`Kategorie nicht gefunden: ${price.category}`);
        return null;
      }
      console.log('Using category_id:', categoryData[0].id);

      // Create price
      const response = await fetch(`${SUPABASE_URL}/rest/v1/prices`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          service: price.service,
          service_ru: price.service_ru || null,
          price: price.price,
          category: price.category,
          category_id: categoryData[0].id,
          note: price.note || null,
          note_ru: price.note_ru || null,
          order_index: 0,
          is_published: true
        })
      });

      const elapsed = Date.now() - startTime;
      console.log(`createPrice: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('createPrice: Error creating price:', error);
        return null;
      }

      const data = await response.json();
      console.log('createPrice: Successfully created price:', data[0]);

      return {
        id: data[0].id,
        service: data[0].service,
        service_ru: data[0].service_ru || undefined,
        price: data[0].price,
        category: data[0].category as ServicePrice['category'],
        note: data[0].note || undefined,
        note_ru: data[0].note_ru || undefined
      };
    } catch (error) {
      console.error('createPrice: Exception:', error);
      return null;
    }
  },

  async update(id: string, updates: Partial<ServicePrice>): Promise<ServicePrice | null> {
    console.log('Updating price', id, 'via REST API...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      let category_id = undefined;

      // If category is being updated, find the category_id
      if (updates.category) {
        const categoryResponse = await fetch(`${SUPABASE_URL}/rest/v1/price_categories?code=eq.${updates.category}&select=id`, {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!categoryResponse.ok) {
          console.error('Error fetching category:', await categoryResponse.json());
          return null;
        }

        const categoryData = await categoryResponse.json();
        if (!categoryData || categoryData.length === 0) {
          console.error('Category not found:', updates.category);
          return null;
        }
        category_id = categoryData[0].id;
      }

      const updateData: any = {
        service: updates.service,
        service_ru: updates.service_ru || null,
        price: updates.price,
        note: updates.note || null,
        note_ru: updates.note_ru || null
      };

      if (updates.category) {
        updateData.category = updates.category;
      }

      if (category_id) {
        updateData.category_id = category_id;
      }

      const response = await fetch(`${SUPABASE_URL}/rest/v1/prices?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(updateData)
      });

      const elapsed = Date.now() - startTime;
      console.log(`updatePrice: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('updatePrice: Error updating price:', error);
        return null;
      }

      const data = await response.json();
      console.log('updatePrice: Successfully updated price:', data[0]);

      return {
        id: data[0].id,
        service: data[0].service,
        service_ru: data[0].service_ru || undefined,
        price: data[0].price,
        category: data[0].category as ServicePrice['category'],
        note: data[0].note || undefined,
        note_ru: data[0].note_ru || undefined
      };
    } catch (error) {
      console.error('updatePrice: Exception:', error);
      return null;
    }
  },

  async delete(id: string): Promise<boolean> {
    console.log('Deleting price', id, 'via REST API...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/prices?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`deletePrice: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('deletePrice: Error deleting price:', error);
        return false;
      }

      console.log('deletePrice: Successfully deleted price', id);
      return true;
    } catch (error) {
      console.error('deletePrice: Exception:', error);
      return false;
    }
  },

  async updateOrder(id: string, order_index: number): Promise<boolean> {
    console.log('Updating price order', id, 'via REST API...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/prices?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order_index })
      });

      const elapsed = Date.now() - startTime;
      console.log(`updatePriceOrder: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('updatePriceOrder: Error updating order:', error);
        return false;
      }

      console.log('updatePriceOrder: Successfully updated order for price', id);
      return true;
    } catch (error) {
      console.error('updatePriceOrder: Exception:', error);
      return false;
    }
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
    console.log('Creating subscription via REST API:', subscription);
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name: subscription.name,
          price: subscription.price,
          period: subscription.period || null,
          period_ru: subscription.period_ru || null,
          treatments: subscription.treatments || null,
          treatments_ru: subscription.treatments_ru || null,
          frequency: subscription.frequency || null,
          frequency_ru: subscription.frequency_ru || null,
          features: subscription.features || [],
          popular: subscription.popular || false,
          order_index: 0,
          is_published: true
        })
      });

      const elapsed = Date.now() - startTime;
      console.log(`createSubscription: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('createSubscription: Error creating subscription:', error);
        return null;
      }

      const data = await response.json();
      console.log('createSubscription: Successfully created subscription:', data[0]);

      return {
        id: data[0].id,
        name: data[0].name,
        price: data[0].price,
        period: data[0].period || undefined,
        period_ru: data[0].period_ru || undefined,
        treatments: data[0].treatments || undefined,
        treatments_ru: data[0].treatments_ru || undefined,
        frequency: data[0].frequency || undefined,
        frequency_ru: data[0].frequency_ru || undefined,
        features: data[0].features || [],
        popular: data[0].popular
      };
    } catch (error) {
      console.error('createSubscription: Exception:', error);
      return null;
    }
  },

  async update(id: string, updates: Partial<SubscriptionPackage>): Promise<SubscriptionPackage | null> {
    console.log('Updating subscription', id, 'via REST API...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name: updates.name,
          price: updates.price,
          period: updates.period || null,
          period_ru: updates.period_ru || null,
          treatments: updates.treatments || null,
          treatments_ru: updates.treatments_ru || null,
          frequency: updates.frequency || null,
          frequency_ru: updates.frequency_ru || null,
          features: updates.features || [],
          popular: updates.popular || false
        })
      });

      const elapsed = Date.now() - startTime;
      console.log(`updateSubscription: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('updateSubscription: Error updating subscription:', error);
        return null;
      }

      const data = await response.json();
      console.log('updateSubscription: Successfully updated subscription:', data[0]);

      return {
        id: data[0].id,
        name: data[0].name,
        price: data[0].price,
        period: data[0].period || undefined,
        period_ru: data[0].period_ru || undefined,
        treatments: data[0].treatments || undefined,
        treatments_ru: data[0].treatments_ru || undefined,
        frequency: data[0].frequency || undefined,
        frequency_ru: data[0].frequency_ru || undefined,
        features: data[0].features || [],
        popular: data[0].popular
      };
    } catch (error) {
      console.error('updateSubscription: Exception:', error);
      return null;
    }
  },

  async delete(id: string): Promise<boolean> {
    console.log('Deleting subscription', id, 'via REST API...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`deleteSubscription: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('deleteSubscription: Error deleting subscription:', error);
        return false;
      }

      console.log('deleteSubscription: Successfully deleted subscription', id);
      return true;
    } catch (error) {
      console.error('deleteSubscription: Exception:', error);
      return false;
    }
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

// Promotions service
export const promotionsService = {
  async getAll(): Promise<Promotion[]> {
    console.log('🔍 Promotions: Fetching from Supabase...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/promotions?is_active=eq.true&order=display_order.asc&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`🔍 Promotions: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching promotions:', error);
        return [];
      }

      const data = await response.json();
      console.log('🟢 Promotions: Найдено записей:', data.length);

      return data.map((item: any) => ({
        id: item.id,
        title_de: item.title_de,
        title_ru: item.title_ru,
        description_de: item.description_de,
        description_ru: item.description_ru,
        discount_text_de: item.discount_text_de || undefined,
        discount_text_ru: item.discount_text_ru || undefined,
        valid_until: item.valid_until || undefined,
        is_active: item.is_active,
        display_order: item.display_order,
        icon: item.icon || 'Sparkles',
        color: item.color || 'rose-gold',
        created_at: item.created_at,
        updated_at: item.updated_at
      }));
    } catch (error) {
      console.error('Promotions: Exception:', error);
      return [];
    }
  },

  async getActive(): Promise<Promotion[]> {
    const allPromotions = await this.getAll();
    const now = new Date();

    return allPromotions.filter(promo => {
      if (!promo.valid_until) return true; // No expiry date
      return new Date(promo.valid_until) > now;
    });
  },

  async create(promotion: Omit<Promotion, 'id' | 'created_at' | 'updated_at'>): Promise<Promotion | null> {
    console.log('Creating promotion via REST API:', promotion);
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/promotions`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          title_de: promotion.title_de,
          title_ru: promotion.title_ru,
          description_de: promotion.description_de,
          description_ru: promotion.description_ru,
          discount_text_de: promotion.discount_text_de || null,
          discount_text_ru: promotion.discount_text_ru || null,
          valid_until: promotion.valid_until || null,
          is_active: promotion.is_active,
          display_order: promotion.display_order,
          icon: promotion.icon || 'Sparkles',
          color: promotion.color || 'rose-gold'
        })
      });

      const elapsed = Date.now() - startTime;
      console.log(`createPromotion: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('createPromotion: Error creating promotion:', error);
        return null;
      }

      const data = await response.json();
      console.log('createPromotion: Successfully created promotion:', data[0]);
      return data[0] as Promotion;
    } catch (error) {
      console.error('createPromotion: Exception:', error);
      return null;
    }
  },

  async update(id: string, updates: Partial<Promotion>): Promise<Promotion | null> {
    console.log('Updating promotion', id, 'via REST API...', updates);
    const startTime = Date.now();

    try {
      const token = getAuthToken();

      const updateData: any = {
        updated_at: new Date().toISOString()
      };

      if (updates.title_de !== undefined) updateData.title_de = updates.title_de;
      if (updates.title_ru !== undefined) updateData.title_ru = updates.title_ru;
      if (updates.description_de !== undefined) updateData.description_de = updates.description_de;
      if (updates.description_ru !== undefined) updateData.description_ru = updates.description_ru;
      if (updates.discount_text_de !== undefined) updateData.discount_text_de = updates.discount_text_de || null;
      if (updates.discount_text_ru !== undefined) updateData.discount_text_ru = updates.discount_text_ru || null;
      if (updates.valid_until !== undefined) updateData.valid_until = updates.valid_until || null;
      if (updates.is_active !== undefined) updateData.is_active = updates.is_active;
      if (updates.display_order !== undefined) updateData.display_order = updates.display_order;
      if (updates.icon !== undefined) updateData.icon = updates.icon || null;
      if (updates.color !== undefined) updateData.color = updates.color || null;

      console.log('updatePromotion: Sending update data:', updateData);

      const response = await fetch(`${SUPABASE_URL}/rest/v1/promotions?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(updateData)
      });

      const elapsed = Date.now() - startTime;
      console.log(`updatePromotion: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('updatePromotion: Error updating promotion:', error);
        return null;
      }

      const data = await response.json();
      console.log('updatePromotion: Response data:', data);
      console.log('updatePromotion: Response is array?', Array.isArray(data));
      console.log('updatePromotion: Response length:', data?.length);

      if (!data || data.length === 0) {
        console.error('updatePromotion: No data returned from update. This may be an RLS policy issue.');
        console.error('updatePromotion: Check that anon role has UPDATE permissions with USING and WITH CHECK policies');
        return null;
      }

      console.log('updatePromotion: Successfully updated promotion:', data[0]);
      return data[0] as Promotion;
    } catch (error) {
      console.error('updatePromotion: Exception:', error);
      return null;
    }
  },

  async delete(id: string): Promise<boolean> {
    console.log('Deleting promotion', id, 'via REST API...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/promotions?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`deletePromotion: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('deletePromotion: Error deleting promotion:', error);
        return false;
      }

      console.log('deletePromotion: Successfully deleted promotion', id);
      return true;
    } catch (error) {
      console.error('deletePromotion: Exception:', error);
      return false;
    }
  },

  async updateOrder(id: string, display_order: number): Promise<boolean> {
    console.log('Updating promotion order', id, 'via REST API...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/promotions?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          display_order,
          updated_at: new Date().toISOString()
        })
      });

      const elapsed = Date.now() - startTime;
      console.log(`updatePromotionOrder: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('updatePromotionOrder: Error updating order:', error);
        return false;
      }

      console.log('updatePromotionOrder: Successfully updated order for promotion', id);
      return true;
    } catch (error) {
      console.error('updatePromotionOrder: Exception:', error);
      return false;
    }
  }
}