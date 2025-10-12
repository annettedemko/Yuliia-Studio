import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { simpleAuthService } from '@/services/simpleAuthService';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if already logged in on mount
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkAuth = async () => {
      try {
        // Set timeout to prevent infinite loading - 15 seconds for Supabase free tier
        timeoutId = setTimeout(() => {
          console.warn('🟡 AdminLogin: Auth check timeout - showing login form');
          setLoading(false);
        }, 15000); // 15 second timeout

        const user = await simpleAuthService.getCurrentUser();

        clearTimeout(timeoutId);

        if (user) {
          console.log('🟢 AdminLogin: Уже авторизован, редирект на dashboard');
          // Redirect to appropriate dashboard based on role
          const dashboardRoutes: Record<string, string> = {
            admin: '/admin',
            anna: '/admin/anna-clients',
            natalia: '/admin/natalia-clients',
            lera: '/admin/lera-clients',
            liudmila: '/admin/liudmila-clients',
          };
          const route = dashboardRoutes[user.role] || '/admin';
          navigate(route);
        } else {
          setLoading(false);
        }
      } catch (err) {
        clearTimeout(timeoutId);
        console.error('🔴 AdminLogin: Ошибка проверки авторизации:', err);
        setLoading(false);
      }
    };

    checkAuth();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('🟡 AdminLogin: Попытка входа с', credentials.email);

    // Add timeout wrapper - 30 seconds for Supabase free tier wake-up
    const loginTimeout = setTimeout(() => {
      console.warn('🟡 AdminLogin: Login timeout after 30 seconds');
      setError('Timeout - Supabase не отвечает. Попробуйте еще раз через минуту.');
      setLoading(false);
    }, 30000);

    try {
      const { user, error: signInError } = await simpleAuthService.login(credentials.email, credentials.password);

      clearTimeout(loginTimeout);

      if (signInError) {
        console.log('🔴 AdminLogin: Ошибка входа:', signInError);
        setError(signInError);
        setLoading(false);
      } else if (user) {
        console.log('🟢 AdminLogin: Успешный вход:', user);
        // Redirect to appropriate dashboard based on role
        const dashboardRoutes: Record<string, string> = {
          admin: '/admin',
          anna: '/admin/anna-clients',
          natalia: '/admin/natalia-clients',
          lera: '/admin/lera-clients',
          liudmila: '/admin/liudmila-clients',
        };
        const route = dashboardRoutes[user.role] || '/admin';
        navigate(route);
      } else {
        setError('Ошибка входа');
        setLoading(false);
      }
    } catch (err) {
      clearTimeout(loginTimeout);
      console.error('🔴 AdminLogin: Исключение:', err);
      setError('Ошибка входа');
      setLoading(false);
    }
  };


  if (loading && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Überprüfen...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-rose-gold/5 to-accent/10">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-rose-gold to-rose-gold-dark rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-primary">
              Admin Anmeldung
            </CardTitle>
            <p className="text-muted-foreground">
              Yuliia Cheporska Studio Verwaltung
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  E-Mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                  className="mt-2"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Passwort
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  className="mt-2"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white"
                disabled={loading}
              >
                {loading ? 'Anmeldung...' : 'Anmelden'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;