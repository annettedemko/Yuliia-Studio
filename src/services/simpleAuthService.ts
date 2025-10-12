import { supabase } from '@/lib/supabase'

export interface SimpleAuthUser {
  id: string
  email: string
  role: string
}

const SUPABASE_URL = 'https://knmompemjlboqzwcycwe.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM'

class SimpleAuthService {
  private currentUser: SimpleAuthUser | null = null

  async login(email: string, password: string): Promise<{ user: SimpleAuthUser | null, error: string | null }> {
    try {
      console.log('🟡 SimpleAuth: Пытаемся войти с email:', email);
      const startTime = Date.now();

      // DIRECT REST API CALL - обход Supabase JS SDK
      console.log('🟡 SimpleAuth: Используем прямой REST API запрос...');
      const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const elapsed = Date.now() - startTime;
      console.log(`🟡 SimpleAuth: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const errorData = await response.json();
        console.log('🔴 SimpleAuth: REST API ошибка:', errorData);
        return { user: null, error: errorData.error_description || 'Неверный email или пароль' }
      }

      const data = await response.json();
      console.log('🟡 SimpleAuth: REST API ответ:', data);

      if (!data.user) {
        console.log('🔴 SimpleAuth: Нет данных пользователя');
        return { user: null, error: 'Неверный email или пароль' }
      }

      // Получаем роль из метаданных пользователя
      const userRole = data.user.user_metadata?.role || data.user.raw_user_meta_data?.role || 'viewer';

      this.currentUser = {
        id: data.user.id,
        email: data.user.email || '',
        role: userRole
      }

      // Сохраняем access_token для последующих запросов
      if (data.access_token) {
        localStorage.setItem('supabase.auth.token', data.access_token);
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
    localStorage.removeItem('supabase.auth.token')

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

          // Проверяем, есть ли сохраненный token
          const token = localStorage.getItem('supabase.auth.token')
          if (token) {
            console.log('🟢 SimpleAuth: Есть cached token, возвращаем cached user')
            return this.currentUser
          }
        } catch (e) {
          console.warn('🟡 SimpleAuth: Ошибка парсинга cached user')
        }
      }

      // Если нет cached user или token - возвращаем null (не залогинен)
      console.log('🟡 SimpleAuth: Нет cached user или token');
      this.currentUser = null
      localStorage.removeItem('simpleAuth')
      return null

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