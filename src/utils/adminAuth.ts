import { AdminUser } from '@/types/admin';

const ADMIN_KEY = 'yuliia_admin_session';
const ADMIN_USERS_KEY = 'yuliia_admin_users';

// Default admin users (in production, this should be in a secure backend)
const defaultUsers: AdminUser[] = [
  {
    username: 'admin',
    password: 'YuliiaCheporska2024!', // Should be hashed in production
    role: 'admin'
  },
  {
    username: 'anna@beauty.com',
    password: 'Anna2024!', // Should be hashed in production
    role: 'anna'
  },
  {
    username: 'natalia@beauty.com',
    password: 'Natalia2024!', // Should be hashed in production
    role: 'natalia'
  }
];

export const initializeAdmin = () => {
  const existingUsers = localStorage.getItem(ADMIN_USERS_KEY);
  if (!existingUsers) {
    localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(defaultUsers));
  }
};

export const login = (username: string, password: string): boolean => {
  const users = getAdminUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const session = {
      username: user.username,
      role: user.role,
      loginTime: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
    };
    localStorage.setItem(ADMIN_KEY, JSON.stringify(session));

    // Update last login
    user.lastLogin = new Date().toISOString();
    updateAdminUser(user);

    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem(ADMIN_KEY);
};

export const isAuthenticated = (): boolean => {
  const session = localStorage.getItem(ADMIN_KEY);
  if (!session) return false;

  try {
    const parsed = JSON.parse(session);
    return Date.now() < parsed.expiresAt;
  } catch {
    return false;
  }
};

export const getCurrentUser = (): string | null => {
  const session = localStorage.getItem(ADMIN_KEY);
  if (!session) return null;

  try {
    const parsed = JSON.parse(session);
    return Date.now() < parsed.expiresAt ? parsed.username : null;
  } catch {
    return null;
  }
};

export const getCurrentUserRole = (): 'admin' | 'anna' | 'natalia' | null => {
  const session = localStorage.getItem(ADMIN_KEY);
  if (!session) return null;

  try {
    const parsed = JSON.parse(session);
    return Date.now() < parsed.expiresAt ? parsed.role : null;
  } catch {
    return null;
  }
};

const getAdminUsers = (): AdminUser[] => {
  const users = localStorage.getItem(ADMIN_USERS_KEY);
  return users ? JSON.parse(users) : defaultUsers;
};

const updateAdminUser = (updatedUser: AdminUser) => {
  const users = getAdminUsers();
  const index = users.findIndex(u => u.username === updatedUser.username);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(users));
  }
};