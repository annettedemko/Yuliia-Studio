import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      prices: {
        Row: {
          id: string
          service: string
          price: string
          category: 'alexandrit' | 'dioden' | 'icoone' | 'manicure' | 'pedicure'
          note: string | null
          order_index: number
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          service: string
          price: string
          category: 'alexandrit' | 'dioden' | 'icoone' | 'manicure' | 'pedicure'
          note?: string | null
          order_index?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          service?: string
          price?: string
          category?: 'alexandrit' | 'dioden' | 'icoone' | 'manicure' | 'pedicure'
          note?: string | null
          order_index?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          name: string
          price: string
          period: string | null
          treatments: string | null
          frequency: string | null
          features: string[]
          popular: boolean
          order_index: number
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          price: string
          period?: string | null
          treatments?: string | null
          frequency?: string | null
          features?: string[]
          popular?: boolean
          order_index?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: string
          period?: string | null
          treatments?: string | null
          frequency?: string | null
          features?: string[]
          popular?: boolean
          order_index?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          date: string | null
          time: string | null
          location: string | null
          address: string | null
          description: string | null
          is_published: boolean
          created_at: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          id?: string
          title: string
          date?: string | null
          time?: string | null
          location?: string | null
          address?: string | null
          description?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          id?: string
          title?: string
          date?: string | null
          time?: string | null
          location?: string | null
          address?: string | null
          description?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
          user_id?: string | null
        }
      }
      form_submissions: {
        Row: {
          id: string
          name: string
          phone: string
          email: string | null
          message: string | null
          page: 'deka' | 'deka-day' | 'kopie-deka-day-anna'
          owner: 'Others' | 'NATALIA' | 'ANNA'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          phone: string
          email?: string | null
          message?: string | null
          page: 'deka' | 'deka-day' | 'kopie-deka-day-anna'
          owner: 'Others' | 'NATALIA' | 'ANNA'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          email?: string | null
          message?: string | null
          page?: 'deka' | 'deka-day' | 'kopie-deka-day-anna'
          owner?: 'Others' | 'NATALIA' | 'ANNA'
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          full_name: string | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}