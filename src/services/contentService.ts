import { supabase } from '@/lib/supabase'
import type { ServicePrice, SubscriptionPackage, Event } from '@/types/admin'

// Price category interface
export interface PriceCategory {
  id: string
  code: string
  name: string
  description?: string
  icon?: string
  color?: string
  order_index: number
  is_published: boolean
}

// Categories service
export const categoriesService = {
  async getAll(): Promise<PriceCategory[]> {
    const { data, error } = await supabase
      .from('price_categories')
      .select('*')
      .eq('is_published', true)
      .order('order_index', { ascending: true })

    if (error) {
      console.error('Error fetching categories:', error)
      return []
    }

    return data as PriceCategory[]
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

    // Простой запрос без joins для совместимости с продакшн БД
    const { data, error } = await supabase
      .from('prices')
      .select('*')
      .eq('is_published', true)
      .order('order_index', { ascending: true })

    console.log('🔍 Prices: Ответ от Supabase:', { data: data?.length, error });

    if (error) {
      console.error('🔴 Error fetching prices:', error)
      console.error('🔴 Error details:', error.message, error.details, error.hint, error.code);
      return []
    }

    if (!data || data.length === 0) {
      console.warn('⚠️ Prices: Таблица пустая или нет опубликованных цен');
      return []
    }

    console.log('🟢 Prices: Найдено записей:', data.length);
    console.log('🟢 Prices: Первая запись:', data[0]);

    return data.map(item => ({
      id: item.id,
      service: item.service,
      price: item.price,
      category: item.category as ServicePrice['category'],
      note: item.note || undefined
    }))
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
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('is_published', true)
      .order('order_index', { ascending: true })

    if (error) {
      console.error('Error fetching subscriptions:', error)
      return []
    }

    return data.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      period: item.period || undefined,
      treatments: item.treatments || undefined,
      frequency: item.frequency || undefined,
      features: item.features || [],
      popular: item.popular
    }))
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
      date: item.date || '',
      time: item.time || undefined,
      location: item.location || undefined,
      address: item.address || undefined,
      description: item.description || undefined
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
      date: item.date || '',
      time: item.time || undefined,
      location: item.location || undefined,
      address: item.address || undefined,
      description: item.description || undefined
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