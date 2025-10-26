import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
  getNataliaClients,
  createNataliaClient,
  updateNataliaClient,
  deleteNataliaClient
} from '@/utils/clientsAPI';
import type { Database } from '@/lib/supabase';
import { FormSubmissionsWidget } from '@/components/admin/FormSubmissionsWidget';

type NataliaClient = Database['public']['Tables']['natalia_clients']['Row'];
type NataliaClientInsert = Database['public']['Tables']['natalia_clients']['Insert'];

const NataliaClients = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<NataliaClient[]>([]);
  const [editingClient, setEditingClient] = useState<NataliaClient | null>(null);
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

      if (user.role !== 'admin' && user.role !== 'natalia') {
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
    try {
      const data = await getNataliaClients();
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

  const handleSaveClient = async (clientData: Omit<NataliaClientInsert, 'id' | 'created_at'>) => {
    try {
      if (editingClient) {
        await updateNataliaClient(editingClient.id, clientData);
      } else {
        await createNataliaClient(clientData);
      }
      setEditingClient(null);
      setIsCreating(false);
      await loadClients();
    } catch (error) {
      console.error('Error saving client:', error);
      alert('Fehler beim Speichern des Kunden');
    }
  };

  const handleDeleteClient = async (id: string) => {
    if (confirm('Sind Sie sicher, dass Sie diesen Kunden löschen möchten?')) {
      try {
        await deleteNataliaClient(id);
        await loadClients();
      } catch (error) {
        console.error('Error deleting client:', error);
        alert('Fehler beim Löschen des Kunden');
      }
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Laden...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                Natalia Clients - Kundenverwaltung
              </h1>
              <p className="text-sm text-muted-foreground">
                Angemeldet als: {currentUser}
              </p>
            </div>
            <div className="flex gap-2">
              {userRole === 'admin' && (
                <Button
                  variant="outline"
                  onClick={() => navigate('/admin')}
                  className="flex items-center gap-2"
                >
                  Zurück zur Übersicht
                </Button>
              )}
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Abmelden
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
              <div className="bg-purple-500/20 p-3 rounded-full">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-muted-foreground">Kunden gesamt</p>
                <p className="text-2xl font-bold">{clients.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clients Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Natalia's Kunden</CardTitle>
              <Button
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Neuer Kunde
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
                    <TableHead>Name</TableHead>
                    <TableHead>Telefon</TableHead>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Instagram</TableHead>
                    <TableHead>Warming Level</TableHead>
                    <TableHead>Kommentare</TableHead>
                    <TableHead>Erstellt am</TableHead>
                    <TableHead className="text-right">Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      {editingClient?.id === client.id ? (
                        <TableCell colSpan={8}>
                          <ClientEditor
                            client={editingClient}
                            onSave={handleSaveClient}
                            onCancel={() => setEditingClient(null)}
                          />
                        </TableCell>
                      ) : (
                        <>
                          <TableCell className="font-medium">{client.full_name}</TableCell>
                          <TableCell>{client.phone}</TableCell>
                          <TableCell>{client.email || '-'}</TableCell>
                          <TableCell>{client.instagram || '-'}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              client.warming_level === 'hot' ? 'bg-red-100 text-red-800' :
                              client.warming_level === 'warm' ? 'bg-yellow-100 text-yellow-800' :
                              client.warming_level === 'cold' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {client.warming_level || 'Nicht gesetzt'}
                            </span>
                          </TableCell>
                          <TableCell className="max-w-xs truncate">{client.notes || '-'}</TableCell>
                          <TableCell>
                            {new Date(client.created_at).toLocaleDateString('de-DE')}
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
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        Noch keine Kunden vorhanden
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Form Submissions Widget */}
        <FormSubmissionsWidget owner="Natalia" />
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
  client?: NataliaClient;
  onSave: (client: Omit<NataliaClientInsert, 'id' | 'created_at'>) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Omit<NataliaClientInsert, 'id' | 'created_at'>>(
    client ? {
      full_name: client.full_name,
      phone: client.phone,
      email: client.email,
      instagram: client.instagram,
      warming_level: client.warming_level,
      notes: client.notes,
      user_id: client.user_id
    } : {
      full_name: '',
      phone: '',
      email: '',
      instagram: '',
      warming_level: 'cold',
      notes: '',
      user_id: null
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name.trim() || !formData.phone.trim()) {
      alert('Name und Telefon sind Pflichtfelder');
      return;
    }
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="full_name">Name *</Label>
          <Input
            id="full_name"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            required
            placeholder="Vollständiger Name"
          />
        </div>
        <div>
          <Label htmlFor="phone">Telefon *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
            placeholder="kunde@beispiel.de"
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
          <Label htmlFor="warming_level">Warming Level</Label>
          <Select
            value={formData.warming_level || 'cold'}
            onValueChange={(value) => setFormData({ ...formData, warming_level: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hot">Hot - Sehr interessiert</SelectItem>
              <SelectItem value="warm">Warm - Interessiert</SelectItem>
              <SelectItem value="cold">Cold - Wenig interessiert</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="notes">Kommentare</Label>
        <Textarea
          id="notes"
          value={formData.notes || ''}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value || null })}
          placeholder="Fügen Sie Kommentare oder Notizen zum Kunden hinzu..."
          rows={3}
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit" size="sm">
          <Save className="w-4 h-4 mr-2" />
          Speichern
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Abbrechen
        </Button>
      </div>
    </form>
  );
};

export default NataliaClients;