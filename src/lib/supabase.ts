import { createClient } from '@supabase/supabase-js'

// ПРОСТАЯ КОНФИГУРАЦИЯ
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://localhost:54321'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found, using defaults')
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
      anna_clients: {
        Row: {
          id: string
          phone: string
          email: string | null
          full_name: string
          instagram: string | null
          warming_level: string | null
          user_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          phone: string
          email?: string | null
          full_name: string
          instagram?: string | null
          warming_level?: string | null
          user_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          phone?: string
          email?: string | null
          full_name?: string
          instagram?: string | null
          warming_level?: string | null
          user_id?: string | null
          created_at?: string
        }
      }
      natalia_clients: {
        Row: {
          id: string
          phone: string
          email: string | null
          full_name: string
          instagram: string | null
          warming_level: string | null
          user_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          phone: string
          email?: string | null
          full_name: string
          instagram?: string | null
          warming_level?: string | null
          user_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          phone?: string
          email?: string | null
          full_name?: string
          instagram?: string | null
          warming_level?: string | null
          user_id?: string | null
          created_at?: string
        }
      }
    }
  }
}