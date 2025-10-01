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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем если пользователь уже авторизован
    const user = simpleAuthService.getCurrentUser();
    if (user) {
      console.log('🟢 AdminLogin: Пользователь уже авторизован, перенаправление');
      navigate('/admin');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('🟡 AdminLogin: Попытка входа с', credentials.email);

    try {
      const { user, error: signInError } = await simpleAuthService.login(credentials.email, credentials.password);

      if (signInError) {
        console.log('🔴 AdminLogin: Ошибка входа:', signInError);
        setError(signInError);
      } else if (user) {
        console.log('🟢 AdminLogin: Успешный вход:', user);
        navigate('/admin');
      }
    } catch (err) {
      console.error('🔴 AdminLogin: Исключение:', err);
      setError('Ошибка входа');
    } finally {
      setLoading(false);
    }
  };


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

            <div className="text-xs text-center text-muted-foreground bg-accent/20 p-3 rounded-md">
              <p className="font-medium">🔐 Zugangsdaten:</p>
              <p><strong>Admin:</strong> admin@beauty.com / Admin2024!</p>
              <p><strong>Anna:</strong> anna@beauty.com / Anna2024!</p>
              <p><strong>Natalia:</strong> natalia@beauty.com / Natalia2024!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;