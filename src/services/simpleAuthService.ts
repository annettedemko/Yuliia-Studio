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

      // Используем стандартную Supabase аутентификацию
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      console.log('🟡 SimpleAuth: Ответ:', { data, error });

      if (error || !data.user) {
        console.log('🔴 SimpleAuth: Неверные данные');
        return { user: null, error: 'Неверный email или пароль' }
      }

      // Получаем роль из метаданных пользователя
      const userRole = data.user.user_metadata?.role || data.user.raw_user_meta_data?.role || 'viewer';

      this.currentUser = {
        id: data.user.id,
        email: data.user.email || '',
        role: userRole
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

  async logout() {
    this.currentUser = null
    localStorage.removeItem('simpleAuth')

    // Также выходим из Supabase auth
    await supabase.auth.signOut()
  }

  async getCurrentUser(): Promise<SimpleAuthUser | null> {
    try {
      // Проверяем реальную сессию Supabase
      const { data: { session }, error } = await supabase.auth.getSession()

      if (error || !session || !session.user) {
        // Очищаем localStorage если сессия недействительна
        this.currentUser = null
        localStorage.removeItem('simpleAuth')
        return null
      }

      // Получаем роль из метаданных пользователя
      const userRole = session.user.user_metadata?.role || session.user.raw_user_meta_data?.role || 'viewer'

      this.currentUser = {
        id: session.user.id,
        email: session.user.email || '',
        role: userRole
      }

      // Обновляем localStorage
      localStorage.setItem('simpleAuth', JSON.stringify(this.currentUser))

      return this.currentUser
    } catch (error) {
      console.error('🔴 SimpleAuth: Ошибка при получении пользователя:', error)
      this.currentUser = null
      localStorage.removeItem('simpleAuth')
      return null
    }
  }

  async isAdmin(): Promise<boolean> {
    const user = await this.getCurrentUser()
    return user?.role === 'admin'
  }
}

export const simpleAuthService = new SimpleAuthService()