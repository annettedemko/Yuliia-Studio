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

      // Add timeout to prevent infinite loading on login
      const timeoutPromise = new Promise<{ user: SimpleAuthUser | null, error: string | null }>((resolve) => {
        setTimeout(() => {
          console.warn('🔴 SimpleAuth: signInWithPassword timeout after 5 seconds')
          resolve({ user: null, error: 'Timeout - проверьте подключение к интернету' })
        }, 5000)
      })

      // Используем стандартную Supabase аутентификацию с timeout
      const loginPromise = supabase.auth.signInWithPassword({
        email,
        password,
      }).then(({ data, error }) => {
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
      })

      // Race between timeout and actual login
      return await Promise.race([loginPromise, timeoutPromise])

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
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise<null>((resolve) => {
        setTimeout(() => {
          console.warn('🟡 SimpleAuth: getSession timeout after 2 seconds')
          resolve(null)
        }, 2000)
      })

      // Проверяем реальную сессию Supabase с timeout
      const sessionPromise = supabase.auth.getSession().then(({ data: { session }, error }) => {
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
      })

      // Race between timeout and actual session fetch
      const result = await Promise.race([sessionPromise, timeoutPromise])

      if (result === null) {
        this.currentUser = null
        localStorage.removeItem('simpleAuth')
      }

      return result
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