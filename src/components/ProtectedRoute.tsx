import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * ProtectedRoute - компонент для защиты админских страниц
 * Перенаправляет неавторизованных пользователей на /admin/login
 */
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  // Показываем загрузку пока проверяем авторизацию
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка...</p>
        </div>
      </div>
    );
  }

  // Если пользователь не авторизован - редирект на страницу входа
  if (!user) {
    console.log('🔴 ProtectedRoute: Пользователь не авторизован, редирект на /admin/login');
    return <Navigate to="/admin/login" replace />;
  }

  // Если авторизован - показываем защищённый контент
  return <>{children}</>;
};

/**
 * PublicRoute - компонент для страницы входа
 * Перенаправляет авторизованных пользователей на /admin
 */
export const PublicRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  // Показываем загрузку пока проверяем авторизацию
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка...</p>
        </div>
      </div>
    );
  }

  // Если пользователь уже авторизован - редирект на админку
  if (user) {
    console.log('🟢 PublicRoute: Пользователь уже авторизован, редирект на /admin');
    return <Navigate to="/admin" replace />;
  }

  // Если не авторизован - показываем страницу входа
  return <>{children}</>;
};
