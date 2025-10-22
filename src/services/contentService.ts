import { supabase } from '@/lib/supabase'
import type { ServicePrice, SubscriptionPackage, Event, Promotion } from '@/types/admin'

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
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_published', true)
      .order('date', { ascending: true })

    if (error) {
      console.error('Error fetching events:', error)
      return []
    }

    return data.map(item => ({
      id: item.id,
      title: item.title,
      title_ru: item.title_ru || undefined,
      date: item.date || '',
      time: item.time || undefined,
      location: item.location || undefined,
      address: item.address || undefined,
      description: item.description || undefined,
      description_ru: item.description_ru || undefined
    }))
  },

  async getUpcoming(): Promise<Event[]> {
    const today = new Date().toISOString().split('T')[0]
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_published', true)
      .gte('date', today)
      .order('date', { ascending: true })

    if (error) {
      console.error('Error fetching upcoming events:', error)
      return []
    }

    return data.map(item => ({
      id: item.id,
      title: item.title,
      title_ru: item.title_ru || undefined,
      date: item.date || '',
      time: item.time || undefined,
      location: item.location || undefined,
      address: item.address || undefined,
      description: item.description || undefined,
      description_ru: item.description_ru || undefined
    }))
  },

  async create(event: Omit<Event, 'id'>): Promise<Event | null> {
    const { data, error } = await supabase
      .from('events')
      .insert({
        title: event.title,
        date: event.date || null,
        time: event.time || null,
        location: event.location || null,
        address: event.address || null,
        description: event.description || null
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating event:', error)
      return null
    }

    return {
      id: data.id,
      title: data.title,
      date: data.date || '',
      time: data.time || undefined,
      location: data.location || undefined,
      address: data.address || undefined,
      description: data.description || undefined
    }
  },

  async update(id: string, updates: Partial<Event>): Promise<Event | null> {
    const { data, error } = await supabase
      .from('events')
      .update({
        title: updates.title,
        date: updates.date || null,
        time: updates.time || null,
        location: updates.location || null,
        address: updates.address || null,
        description: updates.description || null
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating event:', error)
      return null
    }

    return {
      id: data.id,
      title: data.title,
      date: data.date || '',
      time: data.time || undefined,
      location: data.location || undefined,
      address: data.address || undefined,
      description: data.description || undefined
    }
  },

  async delete(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting event:', error)
      return false
    }

    return true
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
    const { data, error } = await supabase
      .from('promotions')
      .insert({
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
      .select()
      .single()

    if (error) {
      console.error('Error creating promotion:', error)
      return null
    }

    return data as Promotion
  },

  async update(id: string, updates: Partial<Promotion>): Promise<Promotion | null> {
    const updateData: any = {
      updated_at: new Date().toISOString()
    };

    if (updates.title_de !== undefined) updateData.title_de = updates.title_de;
    if (updates.title_ru !== undefined) updateData.title_ru = updates.title_ru;
    if (updates.description_de !== undefined) updateData.description_de = updates.description_de;
    if (updates.description_ru !== undefined) updateData.description_ru = updates.description_ru;
    if (updates.discount_text_de !== undefined) updateData.discount_text_de = updates.discount_text_de;
    if (updates.discount_text_ru !== undefined) updateData.discount_text_ru = updates.discount_text_ru;
    if (updates.valid_until !== undefined) updateData.valid_until = updates.valid_until;
    if (updates.is_active !== undefined) updateData.is_active = updates.is_active;
    if (updates.display_order !== undefined) updateData.display_order = updates.display_order;
    if (updates.icon !== undefined) updateData.icon = updates.icon;
    if (updates.color !== undefined) updateData.color = updates.color;

    const { data, error } = await supabase
      .from('promotions')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating promotion:', error)
      return null
    }

    return data as Promotion
  },

  async delete(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('promotions')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting promotion:', error)
      return false
    }

    return true
  },

  async updateOrder(id: string, display_order: number): Promise<boolean> {
    const { error } = await supabase
      .from('promotions')
      .update({ display_order, updated_at: new Date().toISOString() })
      .eq('id', id)

    if (error) {
      console.error('Error updating promotion order:', error)
      return false
    }

    return true
  }
}