import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://knmompemjlboqzwcycwe.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM'

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
    }
  }
}