import React, { createContext, useContext, useEffect, useState } from 'react'
import { authService, type AuthUser } from '@/services/authService'

interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    // Get initial user
    authService.getCurrentUser()
      .then(user => {
        if (mounted) {
          setUser(user)
          setLoading(false)
        }
      })
      .catch(error => {
        console.error('AuthContext: Error getting current user:', error)
        if (mounted) {
          setUser(null)
          setLoading(false)
        }
      })

    // Listen for auth changes
    const { data: { subscription } } = authService.onAuthStateChange((user) => {
      if (mounted) {
        setUser(user)
        setLoading(false)
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    setLoading(true)
    const { user: authUser, error } = await authService.signIn(email, password)

    if (authUser) {
      setUser(authUser)
    }

    setLoading(false)
    return { error }
  }

  const signOut = async (): Promise<void> => {
    setLoading(true)
    await authService.signOut()
    setUser(null)
    setLoading(false)
  }

  const isAdmin = user?.role === 'admin'

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signOut,
    isAdmin
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}