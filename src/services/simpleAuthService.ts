import { supabase } from '@/lib/supabase'

export interface SimpleAuthUser {
  id: string
  email: string
  role: string
}

class SimpleAuthService {
  private currentUser: SimpleAuthUser | null = null

  async login(email: string, password: string): Promise<{ user: SimpleAuthUser | null, error: string | null }> {
    try {
      console.log('🟡 SimpleAuth: Пытаемся войти с email:', email);

      // Простой запрос к нашей таблице admin_users
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .single()

      console.log('🟡 SimpleAuth: Ответ:', { data, error });

      if (error || !data) {
        console.log('🔴 SimpleAuth: Неверные данные');
        return { user: null, error: 'Неверный email или пароль' }
      }

      this.currentUser = {
        id: data.id,
        email: data.email,
        role: data.role
      }

      // Сохраняем в localStorage
      localStorage.setItem('simpleAuth', JSON.stringify(this.currentUser));

      console.log('🟢 SimpleAuth: Успешный вход:', this.currentUser);
      return { user: this.currentUser, error: null }

    } catch (error) {
      console.error('🔴 SimpleAuth: Ошибка:', error);
      return { user: null, error: 'Ошибка входа' }
    }
  }

  logout() {
    this.currentUser = null
    localStorage.removeItem('simpleAuth')
  }

  getCurrentUser(): SimpleAuthUser | null {
    if (this.currentUser) {
      return this.currentUser
    }

    // Пытаемся загрузить из localStorage
    const stored = localStorage.getItem('simpleAuth')
    if (stored) {
      try {
        this.currentUser = JSON.parse(stored)
        return this.currentUser
      } catch {
        localStorage.removeItem('simpleAuth')
      }
    }

    return null
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser()
    return user?.role === 'admin'
  }
}

export const simpleAuthService = new SimpleAuthService()