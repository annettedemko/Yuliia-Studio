import { useState, useEffect } from 'react'
import { simpleAuthService, SimpleAuthUser } from '@/services/simpleAuthService'
import { supabase } from '@/lib/supabase'

export function useAuth() {
  const [user, setUser] = useState<SimpleAuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active session on mount
    const checkSession = async () => {
      try {
        const currentUser = await simpleAuthService.getCurrentUser()
        setUser(currentUser)
      } catch (error) {
        console.error('Error checking session:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkSession()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session)

      if (session?.user) {
        const role = session.user.user_metadata?.role || 'user'
        setUser({
          id: session.user.id,
          email: session.user.email!,
          role: role
        })
      } else {
        setUser(null)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const isAdmin = user?.role === 'admin'
  const isAuthenticated = !!user

  return {
    user,
    loading,
    isAdmin,
    isAuthenticated
  }
}
