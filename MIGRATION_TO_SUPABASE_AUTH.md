# Миграция на Supabase Auth

## Что изменилось

### ❌ СТАРАЯ СИСТЕМА (Небезопасная):
- Таблица `admin_users` с паролями в открытом виде
- localStorage с данными в открытом виде
- Нет шифрования, нет токенов

### ✅ НОВАЯ СИСТЕМА (Безопасная):
- Supabase Auth (`auth.users`) с зашифрованными паролями (bcrypt)
- JWT токены для сессий
- Автоматическое обновление сессий
- Безопасность на уровне индустрии

---

## Выполненные изменения

### 1. ✅ Обновлен `simpleAuthService.ts`

**Старый код** (использовал таблицу admin_users):
```typescript
const { data, error } = await supabase
  .from('admin_users')
  .select('*')
  .eq('email', email)
  .eq('password', password) // НЕБЕЗОПАСНО!
  .single()
```

**Новый код** (использует Supabase Auth):
```typescript
const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
  email,
  password // Автоматически хешируется и проверяется
})
```

### 2. ✅ Создан хук `useAuth.ts`

Удобный React хук для работы с аутентификацией:
```typescript
import { useAuth } from '@/hooks/useAuth'

function MyComponent() {
  const { user, loading, isAdmin, isAuthenticated } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!isAuthenticated) return <div>Please login</div>

  return <div>Welcome, {user.email}!</div>
}
```

### 3. ✅ Обновлена страница `AdminLogin.tsx`

- Использует async версию `getCurrentUser()`
- Обновлены пароли в подсказке (удален yulia@beauty.com, добавлена Liudmila)

---

## Что нужно обновить

### Страницы, требующие обновления:

1. `AdminDashboard.tsx` (строка 66)
2. `YuliaClients.tsx` (строка 54)
3. `AnnaClients.tsx` (строка 59)
4. `NataliaClients.tsx` (строка 59)
5. `LeraClients.tsx` (строка 54)
6. `LiudmilaClients.tsx` (строка 54)

### Шаблон обновления:

**Старый код:**
```typescript
useEffect(() => {
  const user = simpleAuthService.getCurrentUser();
  if (!user || user.role !== 'anna') {
    navigate('/admin/login');
  }
}, [navigate]);
```

**Новый код (вариант 1 - с async):**
```typescript
useEffect(() => {
  const checkAuth = async () => {
    const user = await simpleAuthService.getCurrentUser();
    if (!user || user.role !== 'anna') {
      navigate('/admin/login');
    }
  };
  checkAuth();
}, [navigate]);
```

**Новый код (вариант 2 - с useAuth хуком):**
```typescript
import { useAuth } from '@/hooks/useAuth'

function AnnaClients() {
  const { user, loading, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && (!isAuthenticated || user?.role !== 'anna')) {
      navigate('/admin/login')
    }
  }, [loading, isAuthenticated, user, navigate])

  if (loading) {
    return <div>Loading...</div>
  }

  // Остальной код компонента
}
```

---

## После обновления - Удаление старой системы

После того как все страницы обновлены и протестированы:

### 1. Удалить таблицу `admin_users`

```sql
-- Удалить таблицу admin_users (она больше не нужна!)
DROP TABLE IF EXISTS public.admin_users;
```

### 2. Удалить старые файлы

```bash
# Удалить старый файл с localStorage логикой
rm src/utils/adminAuth.ts

# Удалить миграции со старыми паролями
rm supabase/update_user_passwords.sql
```

### 3. Очистить импорты

Найти и удалить все импорты:
```typescript
import { getCurrentUser, isAuthenticated } from '@/utils/adminAuth'
```

---

## Тестирование

### Проверьте каждый аккаунт:

1. **Admin (Yulia)**
   - Email: `admin@beauty.com`
   - Password: `P@ssw0rd!Adm1n#2025`
   - Должен иметь доступ ко всем таблицам клиентов

2. **Anna**
   - Email: `anna@beauty.com`
   - Password: `AnN@_Secure2025!`
   - Должна видеть только `anna_clients`

3. **Natalia**
   - Email: `natalia@beauty.com`
   - Password: `N@talia!2025$Aa`
   - Должна видеть только `natalia_clients`

4. **Lera**
   - Email: `lera@beauty.com`
   - Password: `Lera#Safe2025$!`
   - Должна видеть только `lera_clients`

5. **Liudmila**
   - Email: `liudmila@beauty.com`
   - Password: `L1udm!la_Secure#2025`
   - Должна видеть только `liudmila_clients`

### Проверьте функциональность:

- [ ] Логин с правильными credentials
- [ ] Логин с неправильными credentials (должен показать ошибку)
- [ ] Logout
- [ ] Автоматическое перенаправление при переходе на /admin/login если уже залогинен
- [ ] Автоматическое перенаправление на /admin/login если не залогинен
- [ ] Сессия сохраняется после обновления страницы
- [ ] Каждый пользователь видит только свою таблицу клиентов

---

## Преимущества новой системы

✅ **Безопасность**: Пароли зашифрованы, никто не может их прочитать
✅ **Токены**: JWT токены вместо простого localStorage
✅ **Сессии**: Автоматическое управление сессиями
✅ **Стандарт**: Использует индустриальные стандарты безопасности
✅ **Масштабируемость**: Легко добавлять новых пользователей
✅ **Аудит**: Supabase логирует все попытки входа

---

Последнее обновление: 2025-01-10
