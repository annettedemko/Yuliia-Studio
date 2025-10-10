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
      console.log('AuthService: Attempting login with email:', email);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      console.log('AuthService: Supabase auth response:', { data, error });

      if (error) {
        console.error('AuthService: Supabase auth error:', error);
        return { user: null, error: 'Ungültige Anmeldedaten' }
      }

      if (!data.user) {
        return { user: null, error: 'Kein Benutzer gefunden' }
      }

      // Get role from user metadata (since we're using Supabase auth with roles in metadata)
      const metaRole = data.user.user_metadata?.role || data.user.raw_user_meta_data?.role;
      console.log('User metadata role:', metaRole);
      console.log('User email:', data.user.email);
      console.log('User ID:', data.user.id);

      const authUser: AuthUser = {
        id: data.user.id,
        email: data.user.email || '',
        role: metaRole || 'viewer',
        full_name: data.user.user_metadata?.full_name || data.user.raw_user_meta_data?.full_name || undefined
      }

      return { user: authUser, error: null }
    } catch (error) {
      console.error('AuthService: Caught exception during sign in:', error);
      return { user: null, error: 'Anmeldefehler' }
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
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise<null>((resolve) => {
        setTimeout(() => {
          console.warn('getCurrentUser: Timeout after 2 seconds')
          resolve(null)
        }, 2000)
      })

      const userPromise = supabase.auth.getUser().then(({ data: { user } }) => {
        if (!user) {
          return null
        }

        // Get role from user metadata (same as in signIn method)
        const metaRole = user.user_metadata?.role || user.raw_user_meta_data?.role;

        return {
          id: user.id,
          email: user.email || '',
          role: metaRole || 'viewer',
          full_name: user.user_metadata?.full_name || undefined
        }
      })

      // Race between timeout and actual user fetch
      return await Promise.race([userPromise, timeoutPromise])
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