import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

export interface AuthUser {
  id: string
  email: string
  role: string
  full_name?: string
}

class AuthService {
  async signIn(email: string, password: string): Promise<{ user: AuthUser | null, error: string | null }> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { user: null, error: error.message }
      }

      if (!data.user) {
        return { user: null, error: 'No user returned' }
      }

      // Get user profile information
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role, full_name')
        .eq('id', data.user.id)
        .single()

      if (profileError) {
        console.error('Error fetching user profile:', profileError)
        // Still allow login even if profile fetch fails
      }

      const authUser: AuthUser = {
        id: data.user.id,
        email: data.user.email || '',
        role: profile?.role || 'viewer',
        full_name: profile?.full_name || undefined
      }

      return { user: authUser, error: null }
    } catch (error) {
      return { user: null, error: 'Authentication failed' }
    }
  }

  async signOut(): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.signOut()
      return { error: error?.message || null }
    } catch (error) {
      return { error: 'Sign out failed' }
    }
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        return null
      }

      // Get user profile information
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role, full_name')
        .eq('id', user.id)
        .single()

      if (profileError) {
        console.error('Error fetching user profile:', profileError)
        return null
      }

      return {
        id: user.id,
        email: user.email || '',
        role: profile?.role || 'viewer',
        full_name: profile?.full_name || undefined
      }
    } catch (error) {
      console.error('Error getting current user:', error)
      return null
    }
  }

  async isAdmin(): Promise<boolean> {
    const user = await this.getCurrentUser()
    return user?.role === 'admin'
  }

  onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const authUser = await this.getCurrentUser()
        callback(authUser)
      } else {
        callback(null)
      }
    })
  }
}

export const authService = new AuthService()