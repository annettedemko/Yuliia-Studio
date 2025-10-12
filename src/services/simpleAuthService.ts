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
      const startTime = Date.now();

      // Используем стандартную Supabase аутентификацию
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      const elapsed = Date.now() - startTime;
      console.log(`🟡 SimpleAuth: signInWithPassword завершен за ${elapsed}ms`);
      console.log('🟡 SimpleAuth: Ответ:', { data, error });

      if (error || !data.user) {
        console.log('🔴 SimpleAuth: Неверные данные:', error?.message);
        return { user: null, error: error?.message || 'Неверный email или пароль' }
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
      return { user: null, error: error instanceof Error ? error.message : 'Ошибка входа' }
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
      // Сначала пробуем взять из localStorage (быстро)
      const cachedUser = localStorage.getItem('simpleAuth')
      if (cachedUser) {
        try {
          this.currentUser = JSON.parse(cachedUser)
          console.log('🟡 SimpleAuth: Используем cached user:', this.currentUser)
        } catch (e) {
          console.warn('🟡 SimpleAuth: Ошибка парсинга cached user')
        }
      }

      // Затем проверяем реальную сессию Supabase (для валидации)
      console.log('🟡 SimpleAuth: Проверяем сессию Supabase...');
      const startTime = Date.now();

      const { data: { session }, error } = await supabase.auth.getSession()

      const elapsed = Date.now() - startTime;
      console.log(`🟡 SimpleAuth: getSession завершен за ${elapsed}ms`);

      if (error) {
        console.error('🔴 SimpleAuth: Ошибка getSession:', error.message);
        // Если была ошибка но есть cached user - возвращаем его
        if (this.currentUser) {
          console.log('🟡 SimpleAuth: Используем cached user после ошибки getSession')
          return this.currentUser
        }
        this.currentUser = null
        localStorage.removeItem('simpleAuth')
        return null
      }

      if (!session || !session.user) {
        console.log('🟡 SimpleAuth: Нет активной сессии');
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
      console.log('🟢 SimpleAuth: Сессия валидна:', this.currentUser);

      return this.currentUser
    } catch (error) {
      console.error('🔴 SimpleAuth: Ошибка при получении пользователя:', error)
      // Если была ошибка но есть cached user - возвращаем его
      if (this.currentUser) {
        console.log('🟡 SimpleAuth: Используем cached user после исключения')
        return this.currentUser
      }
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