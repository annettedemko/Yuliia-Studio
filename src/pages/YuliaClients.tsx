import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  LogOut,
  Plus,
  Edit3,
  Trash2,
  Save,
  X,
  Users
} from 'lucide-react';
import { simpleAuthService } from '@/services/simpleAuthService';
import {
  getYuliaClients,
  createYuliaClient,
  updateYuliaClient,
  deleteYuliaClient
} from '@/utils/clientsAPI';
import type { Database } from '@/lib/supabase';
import { FormSubmissionsWidget } from '@/components/admin/FormSubmissionsWidget';

type YuliaClient = Database['public']['Tables']['yulia_clients']['Row'];
type YuliaClientInsert = Database['public']['Tables']['yulia_clients']['Insert'];

const YuliaClients = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<YuliaClient[]>([]);
  const [editingClient, setEditingClient] = useState<YuliaClient | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const user = await simpleAuthService.getCurrentUser();

      if (!user) {
        navigate('/admin/login');
        return;
      }

      if (user.role !== 'admin' && user.role !== 'yulia') {
        navigate('/admin/login');
        return;
      }

      setCurrentUser(user.email);
      setUserRole(user.role);
      await loadClients();
    };

    initializeAuth();
  }, [navigate]);

  const loadClients = async () => {
    setLoading(true);
    console.log('Loading Yulia clients...');
    try {
      const data = await getYuliaClients();
      console.log('Loaded clients:', data);
      setClients(data);
    } catch (error) {
      console.error('Error loading clients:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    simpleAuthService.logout();
    navigate('/admin/login');
  };

  const handleSaveClient = async (clientData: Omit<YuliaClientInsert, 'id' | 'created_at'>) => {
    console.log('Saving client data:', clientData);
    try {
      let result;
      if (editingClient) {
        console.log('Updating existing client:', editingClient.id);
        result = await updateYuliaClient(editingClient.id, clientData);
      } else {
        console.log('Creating new client...');
        result = await createYuliaClient(clientData);
        console.log('Create result:', result);
      }
      setEditingClient(null);
      setIsCreating(false);
      console.log('Reloading clients...');
      await loadClients();
      console.log('Clients reloaded successfully');
    } catch (error) {
      console.error('Error saving client:', error);
      alert('Ошибка при сохранении клиента');
    }
  };

  const handleDeleteClient = async (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этого клиента?')) {
      try {
        await deleteYuliaClient(id);
        await loadClients();
      } catch (error) {
        console.error('Error deleting client:', error);
        alert('Ошибка при удалении клиента');
      }
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                Клиенты Юлии - Управление клиентами
              </h1>
              <p className="text-sm text-muted-foreground">
                Авторизован как: {currentUser}
              </p>
            </div>
            <div className="flex gap-2">
              {userRole === 'admin' && (
                <Button
                  variant="outline"
                  onClick={() => navigate('/admin')}
                  className="flex items-center gap-2"
                >
                  Назад к обзору
                </Button>
              )}
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Card */}
        <Card className="mb-8">
          <CardContent className="flex items-center p-6">
            <div className="flex items-center">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-muted-foreground">Всего клиентов</p>
                <p className="text-2xl font-bold">{clients.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clients Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Клиенты Юлии</CardTitle>
              <Button
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Новый клиент
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isCreating && (
              <div className="mb-6">
                <ClientEditor
                  onSave={handleSaveClient}
                  onCancel={() => setIsCreating(false)}
                />
              </div>
            )}

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Имя</TableHead>
                    <TableHead>Телефон</TableHead>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Instagram</TableHead>
                    <TableHead>Уровень прогрева</TableHead>
                    <TableHead>Создан</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      {editingClient?.id === client.id ? (
                        <TableCell colSpan={7}>
                          <ClientEditor
                            client={editingClient}
                            onSave={handleSaveClient}
                            onCancel={() => setEditingClient(null)}
                          />
                        </TableCell>
                      ) : (
                        <>
                          <TableCell className="font-medium">{client.full_name}</TableCell>
                          <TableCell>{client.phone || '-'}</TableCell>
                          <TableCell>{client.email || '-'}</TableCell>
                          <TableCell>{client.instagram || '-'}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              client.warming_level === 'hot' ? 'bg-red-100 text-red-800' :
                              client.warming_level === 'warm' ? 'bg-yellow-100 text-yellow-800' :
                              client.warming_level === 'cold' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {client.warming_level === 'hot' ? 'Горячий' :
                               client.warming_level === 'warm' ? 'Теплый' :
                               client.warming_level === 'cold' ? 'Холодный' :
                               'Не задан'}
                            </span>
                          </TableCell>
                          <TableCell>
                            {new Date(client.created_at).toLocaleDateString('ru-RU')}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-2 justify-end">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setEditingClient(client)}
                              >
                                <Edit3 className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteClient(client.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                  {clients.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Пока нет клиентов
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Form Submissions Widget */}
        <FormSubmissionsWidget owner="Yulia" />
      </div>
    </div>
  );
};

// Client Editor Component
const ClientEditor = ({
  client,
  onSave,
  onCancel
}: {
  client?: YuliaClient;
  onSave: (client: Omit<YuliaClientInsert, 'id' | 'created_at'>) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Omit<YuliaClientInsert, 'id' | 'created_at'>>(
    client ? {
      full_name: client.full_name,
      phone: client.phone,
      email: client.email,
      instagram: client.instagram,
      warming_level: client.warming_level,
      user_id: client.user_id
    } : {
      full_name: '',
      phone: '',
      email: '',
      instagram: '',
      warming_level: 'cold',
      user_id: null
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name.trim() || !formData.phone.trim()) {
      alert('Имя и телефон являются обязательными полями');
      return;
    }
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="full_name">Имя *</Label>
          <Input
            id="full_name"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            required
            placeholder="Полное имя"
          />
        </div>
        <div>
          <Label htmlFor="phone">Телефон *</Label>
          <Input
            id="phone"
            value={formData.phone || ''}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value || null })}
            required
            placeholder="+49 123 456789"
          />
        </div>
        <div>
          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ''}
            onChange={(e) => setFormData({ ...formData, email: e.target.value || null })}
            placeholder="client@example.com"
          />
        </div>
        <div>
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            value={formData.instagram || ''}
            onChange={(e) => setFormData({ ...formData, instagram: e.target.value || null })}
            placeholder="@username"
          />
        </div>
        <div>
          <Label htmlFor="warming_level">Уровень прогрева</Label>
          <Select
            value={formData.warming_level || 'cold'}
            onValueChange={(value) => setFormData({ ...formData, warming_level: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hot">Горячий - Очень заинтересован</SelectItem>
              <SelectItem value="warm">Теплый - Заинтересован</SelectItem>
              <SelectItem value="cold">Холодный - Мало заинтересован</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <Button type="submit" size="sm">
          <Save className="w-4 h-4 mr-2" />
          Сохранить
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default YuliaClients;