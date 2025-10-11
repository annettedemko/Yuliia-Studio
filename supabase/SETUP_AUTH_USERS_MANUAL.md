# Настройка пользователей через Supabase Dashboard

Если SQL скрипт не работает, можно создать пользователей вручную через Dashboard.

## Способ 1: Через SQL Editor (Рекомендуется)

1. Откройте Supabase SQL Editor: https://supabase.com/dashboard/project/knmompemjlboqzwcycwe/sql/new
2. Скопируйте и выполните содержимое файла `setup_auth_users.sql`

## Способ 2: Через Dashboard UI (Если SQL не работает)

### Шаг 1: Удалить yulia@beauty.com

1. Откройте: https://supabase.com/dashboard/project/knmompemjlboqzwcycwe/auth/users
2. Найдите пользователя `yulia@beauty.com`
3. Нажмите на иконку меню (три точки) → **Delete user**

### Шаг 2: Создать/обновить пользователей

Для каждого пользователя ниже:

#### 1. ADMIN (YULIA - Администратор)

**Если пользователь НЕ существует:**
1. Нажмите **"Add user"** → **"Create new user"**
2. Заполните:
   - **Email**: `admin@beauty.com`
   - **Password**: `P@ssw0rd!Adm1n#2025`
   - **Auto Confirm User**: ✅ (включите!)
3. Нажмите **"Create user"**
4. После создания кликните на пользователя
5. В разделе **"User Metadata"** добавьте:
   ```json
   {
     "full_name": "Yulia",
     "role": "admin"
   }
   ```
6. Нажмите **"Save"**

**Если пользователь УЖЕ существует:**
1. Кликните на `admin@beauty.com`
2. Нажмите **"Reset password"** и установите: `P@ssw0rd!Adm1n#2025`
3. В **"User Metadata"** добавьте/обновите:
   ```json
   {
     "full_name": "Yulia",
     "role": "admin"
   }
   ```

#### 2. ANNA

1. **Email**: `anna@beauty.com`
2. **Password**: `AnN@_Secure2025!`
3. **Auto Confirm User**: ✅
4. **User Metadata**:
   ```json
   {
     "full_name": "Anna",
     "role": "anna"
   }
   ```

#### 3. NATALIA

1. **Email**: `natalia@beauty.com`
2. **Password**: `N@talia!2025$Aa`
3. **Auto Confirm User**: ✅
4. **User Metadata**:
   ```json
   {
     "full_name": "Natalia",
     "role": "natalia"
   }
   ```

#### 4. LERA

1. **Email**: `lera@beauty.com`
2. **Password**: `Lera#Safe2025$!`
3. **Auto Confirm User**: ✅
4. **User Metadata**:
   ```json
   {
     "full_name": "Lera",
     "role": "lera"
   }
   ```

#### 5. LIUDMILA (НОВЫЙ ПОЛЬЗОВАТЕЛЬ!)

1. **Email**: `liudmila@beauty.com`
2. **Password**: `L1udm!la_Secure#2025`
3. **Auto Confirm User**: ✅
4. **User Metadata**:
   ```json
   {
     "full_name": "Liudmila",
     "role": "liudmila"
   }
   ```

---

## Проверка

После создания всех пользователей должно быть **5 пользователей**:

1. ✅ admin@beauty.com (Yulia, role: admin)
2. ✅ anna@beauty.com (Anna, role: anna)
3. ✅ natalia@beauty.com (Natalia, role: natalia)
4. ✅ lera@beauty.com (Lera, role: lera)
5. ✅ liudmila@beauty.com (Liudmila, role: liudmila)

**НЕ ДОЛЖНО БЫТЬ:**
- ❌ yulia@beauty.com (удален, так как Yulia использует admin@beauty.com)

---

## Важно!

- **Auto Confirm User** должен быть включен для всех пользователей
- Все пользователи должны иметь **User Metadata** с полями `full_name` и `role`
- Пароли должны точно соответствовать указанным выше

---

Последнее обновление: 2025-10-09
