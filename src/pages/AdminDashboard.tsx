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
  LogOut,
  Plus,
  Edit3,
  Trash2,
  Save,
  X,
  DollarSign,
  Package,
  Clock,
  Calendar,
  Users,
  FileText
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { simpleAuthService } from '@/services/simpleAuthService';
import {
  pricesService,
  subscriptionsService,
  categoriesService,
  eventsService
} from '@/services/contentService';
import type { PriceCategory } from '@/services/contentService';
import {
  getEvents,
  createEvent as createSupabaseEvent,
  updateEvent as updateSupabaseEvent,
  deleteEvent as deleteSupabaseEvent
} from '@/utils/supabaseEventsAPI';
import { debugEventsTable, checkEventDataTypes } from '@/utils/debugEvents';
import { migrateEventsFromCSV } from '@/utils/migrateEventsFromCSV';
import { testSupabaseConnection } from '@/utils/testSupabaseConnection';
import type { Event as SupabaseEvent } from '@/utils/supabaseEventsAPI';
import { ServicePrice, SubscriptionPackage } from '@/types/admin';
import { FormSubmissionsManager } from '@/components/admin/FormSubmissionsManager';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [prices, setPrices] = useState<ServicePrice[]>([]);
  const [subscriptions, setSubscriptions] = useState<SubscriptionPackage[]>([]);
  const [categories, setCategories] = useState<PriceCategory[]>([]);
  const [supabaseEvents, setSupabaseEvents] = useState<SupabaseEvent[]>([]);
  const [editingPrice, setEditingPrice] = useState<ServicePrice | null>(null);
  const [editingSubscription, setEditingSubscription] = useState<SubscriptionPackage | null>(null);
  const [editingEvent, setEditingEvent] = useState<SupabaseEvent | null>(null);
  const [isCreating, setIsCreating] = useState<'price' | 'subscription' | 'event' | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAdmin = async () => {
      try {
        const user = await simpleAuthService.getCurrentUser();

        if (!user) {
          navigate('/admin/login');
          return;
        }

        console.log('🟢 AdminDashboard: Пользователь авторизован:', user);

        // Role-based redirection
        if (user.role === 'anna') {
          navigate('/admin/anna-clients');
          return;
        } else if (user.role === 'natalia') {
          navigate('/admin/natalia-clients');
          return;
        } else if (user.role === 'yulia') {
          navigate('/admin/yulia-clients');
          return;
        } else if (user.role === 'lera') {
          navigate('/admin/lera-clients');
          return;
        } else if (user.role === 'liudmila') {
          navigate('/admin/liudmila-clients');
          return;
        } else if (user.role !== 'admin') {
          navigate('/admin/login');
          return;
        }

        setCurrentUser(user.email);
        setUserRole(user.role);
        await loadData();
      } catch (error) {
        console.error('🔴 AdminDashboard: Ошибка инициализации:', error);
        setLoading(false);
        navigate('/admin/login');
      }
    };

    initializeAdmin();
  }, [navigate]);

  const loadData = async () => {
    setLoading(true);
    console.log('Loading data from Supabase...');

    try {
      // Load all data from Supabase
      const [pricesData, subscriptionsData, categoriesData, eventsData] = await Promise.all([
        pricesService.getAll(),
        subscriptionsService.getAll(),
        categoriesService.getAll(),
        getEvents()
      ]);

      console.log('Loaded prices:', pricesData);
      console.log('Loaded subscriptions:', subscriptionsData);
      console.log('Loaded categories:', categoriesData);
      console.log('Loaded events:', eventsData);

      setPrices(pricesData);
      setSubscriptions(subscriptionsData);
      setCategories(categoriesData);
      setSupabaseEvents(eventsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    simpleAuthService.logout();
    navigate('/admin/login');
  };

  const handleSavePrice = async (price: ServicePrice) => {
    try {
      if (editingPrice) {
        await pricesService.update(price.id, price);
      } else {
        await pricesService.create(price);
      }
      setEditingPrice(null);
      setIsCreating(null);
      await loadData();
    } catch (error) {
      console.error('Error saving price:', error);
      alert('Fehler beim Speichern des Preises');
    }
  };

  const handleDeletePrice = async (id: string) => {
    if (confirm('Sind Sie sicher, dass Sie diesen Preis löschen möchten?')) {
      try {
        await pricesService.delete(id);
        await loadData();
      } catch (error) {
        console.error('Error deleting price:', error);
        alert('Fehler beim Löschen des Preises');
      }
    }
  };

  const handleSaveSubscription = async (subscription: SubscriptionPackage) => {
    try {
      if (editingSubscription) {
        await subscriptionsService.update(subscription.id, subscription);
      } else {
        await subscriptionsService.create(subscription);
      }
      setEditingSubscription(null);
      setIsCreating(null);
      await loadData();
    } catch (error) {
      console.error('Error saving subscription:', error);
      alert('Fehler beim Speichern des Abonnements');
    }
  };

  const handleDeleteSubscription = async (id: string) => {
    if (confirm('Sind Sie sicher, dass Sie dieses Abonnement löschen möchten?')) {
      try {
        await subscriptionsService.delete(id);
        await loadData();
      } catch (error) {
        console.error('Error deleting subscription:', error);
        alert('Fehler beim Löschen des Abonnements');
      }
    }
  };

  const handleSaveEvent = async (event: SupabaseEvent) => {
    if (editingEvent && editingEvent.id) {
      await updateSupabaseEvent(editingEvent.id, event);
    } else {
      await createSupabaseEvent(event);
    }
    setEditingEvent(null);
    setIsCreating(null);
    await loadData();
  };

  const handleDeleteEvent = async (id: string) => {
    if (confirm('Sind Sie sicher, dass Sie diese Veranstaltung löschen möchten?')) {
      await deleteSupabaseEvent(id);
      await loadData();
    }
  };

  const handleMigrateCSVEvents = async () => {
    if (confirm('Möchten Sie die Events aus form_submisssions.csv in Supabase migrieren? Dies wird alle vorhandenen Events ersetzen.')) {
      console.log('Starting migration process...');
      try {
        const result = await migrateEventsFromCSV();
        console.log('Migration result:', result);
        if (result.success) {
          alert(result.message);
          console.log('Reloading data...');
          await loadData();
          console.log('Data reloaded');
        } else {
          alert(`Fehler: ${result.message}`);
        }
      } catch (error) {
        console.error('Migration process error:', error);
        alert(`Unerwarteter Fehler: ${error}`);
      }
    }
  };

  const categoryNames = {
    alexandrit: 'Alexandrit Laser',
    dioden: 'Dioden Laser',
    icoone: 'Icoone Laser',
    redtouchpro: 'RedTouchPro',
    manicure: 'Maniküre',
    pedicure: 'Pediküre'
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
                Yuliia Cheporska Studio - Панель управления
              </h1>
              <p className="text-sm text-muted-foreground">
                Авторизован как: {currentUser}
              </p>
            </div>
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
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              const element = document.getElementById('prices-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <CardContent className="flex items-center p-4">
              <div className="flex items-center">
                <div className="bg-rose-gold/20 p-2 rounded-full">
                  <DollarSign className="w-5 h-5 text-rose-gold" />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-muted-foreground">Цены</p>
                  <p className="text-xl font-bold">{prices.length || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              const element = document.getElementById('subscriptions-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <CardContent className="flex items-center p-4">
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-muted-foreground">Подписки</p>
                  <p className="text-xl font-bold">{subscriptions.length || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              const element = document.getElementById('events-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <CardContent className="flex items-center p-4">
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Calendar className="w-5 h-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-muted-foreground">События</p>
                  <p className="text-xl font-bold">{supabaseEvents.length || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              const element = document.getElementById('forms-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <CardContent className="flex items-center p-4">
              <div className="flex items-center">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <FileText className="w-5 h-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-muted-foreground">Заявки</p>
                  <p className="text-xl font-bold">
                    <span className="text-sm">Управление</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              const element = document.getElementById('clients-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <CardContent className="flex items-center p-4">
              <div className="flex items-center">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-muted-foreground">Клиенты</p>
                  <p className="text-xl font-bold">
                    <span className="text-sm">Управление</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <div className="flex items-center">
                <div className="bg-accent/20 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-muted-foreground">Обновлено</p>
                  <p className="text-xs">
                    {new Date().toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Prices Management */}
        <Card className="mb-8" id="prices-section">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Управление ценами</CardTitle>
              <Button
                onClick={() => setIsCreating('price')}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Новая цена
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isCreating === 'price' && (
              <PriceEditor
                categories={categories}
                onSave={handleSavePrice}
                onCancel={() => setIsCreating(null)}
              />
            )}

            <div className="space-y-4">
              {Object.entries(categoryNames).map(([category, name]) => (
                <div key={category} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">{name}</h3>
                  <div className="grid gap-2">
                    {prices
                      .filter(p => p.category === category)
                      .map(price => (
                        <div key={price.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                          {editingPrice?.id === price.id ? (
                            <PriceEditor
                              price={editingPrice}
                              categories={categories}
                              onSave={handleSavePrice}
                              onCancel={() => setEditingPrice(null)}
                            />
                          ) : (
                            <>
                              <div>
                                <span className="font-medium">{price.service}</span>
                                <span className="ml-4 text-rose-gold font-semibold">{price.price}€</span>
                                {price.note && (
                                  <span className="ml-2 text-sm text-muted-foreground">
                                    {price.note}
                                  </span>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setEditingPrice(price)}
                                >
                                  <Edit3 className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleDeletePrice(price.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subscriptions Management */}
        <Card className="mb-8" id="subscriptions-section">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Управление подписками</CardTitle>
              <Button
                onClick={() => setIsCreating('subscription')}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Новая подписка
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isCreating === 'subscription' && (
              <SubscriptionEditor
                onSave={handleSaveSubscription}
                onCancel={() => setIsCreating(null)}
              />
            )}

            <div className="grid gap-4">
              {subscriptions.map(subscription => (
                <div key={subscription.id} className="border rounded-lg p-4">
                  {editingSubscription?.id === subscription.id ? (
                    <SubscriptionEditor
                      subscription={editingSubscription}
                      onSave={handleSaveSubscription}
                      onCancel={() => setEditingSubscription(null)}
                    />
                  ) : (
                    <>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {subscription.name}
                            {subscription.popular && (
                              <span className="ml-2 bg-rose-gold text-white px-2 py-1 rounded text-xs">
                                Beliebt
                              </span>
                            )}
                          </h3>
                          <p className="text-rose-gold font-semibold">
                            {subscription.price} {subscription.period}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {subscription.treatments} • {subscription.frequency}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingSubscription(subscription)}
                          >
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteSubscription(subscription.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium mb-1">Features:</p>
                        <ul className="list-disc list-inside text-muted-foreground">
                          {subscription.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Events Management */}
        <Card className="mb-8" id="events-section">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Управление событиями</CardTitle>
              <div className="flex gap-2">
                <Button
                  onClick={() => setIsCreating('event')}
                  disabled={isCreating === 'event'}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Новое событие
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {isCreating === 'event' && (
              <div className="mb-4">
                <EventEditor
                  onSave={handleSaveEvent}
                  onCancel={() => setIsCreating(null)}
                />
              </div>
            )}

            <div className="space-y-4">
              {supabaseEvents.map((event) => (
                <div key={event.id} className="border p-4 rounded-lg">
                  {editingEvent?.id === event.id ? (
                    <EventEditor
                      event={editingEvent}
                      onSave={handleSaveEvent}
                      onCancel={() => setEditingEvent(null)}
                    />
                  ) : (
                    <>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-lg">{event.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              event.is_published
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {event.is_published ? '✓ Veröffentlicht' : 'Entwurf'}
                            </span>
                          </div>
                          <p className="text-muted-foreground">
                            {event.date && new Date(event.date).toLocaleDateString('de-DE', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                            {event.time && ` • ${event.time}`}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {event.location} - {event.address}
                          </p>
                          {event.description && (
                            <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingEvent(event)}
                          >
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteEvent(event.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Form Submissions Management */}
        <div id="forms-section">
          <FormSubmissionsManager />
        </div>

        {/* Client Management Links for Admin */}
        {userRole === 'admin' && (
          <Card className="mb-8" id="clients-section">
            <CardHeader>
              <CardTitle>Управление клиентами</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 h-16"
                  onClick={() => navigate('/admin/yulia-clients')}
                >
                  <Users className="w-6 h-6 text-blue-500" />
                  <div className="text-left">
                    <div className="font-semibold">Клиенты Юлии</div>
                    <div className="text-sm text-muted-foreground">Управление клиентами Юлии</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 h-16"
                  onClick={() => navigate('/admin/natalia-clients')}
                >
                  <Users className="w-6 h-6 text-purple-500" />
                  <div className="text-left">
                    <div className="font-semibold">Клиенты Натальи</div>
                    <div className="text-sm text-muted-foreground">Управление клиентами Натальи</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 h-16"
                  onClick={() => navigate('/admin/anna-clients')}
                >
                  <Users className="w-6 h-6 text-rose-gold" />
                  <div className="text-left">
                    <div className="font-semibold">Клиенты Анны</div>
                    <div className="text-sm text-muted-foreground">Управление клиентами Анны</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 h-16"
                  onClick={() => navigate('/admin/lera-clients')}
                >
                  <Users className="w-6 h-6 text-green-500" />
                  <div className="text-left">
                    <div className="font-semibold">Клиенты Леры</div>
                    <div className="text-sm text-muted-foreground">Управление клиентами Леры</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 h-16"
                  onClick={() => navigate('/admin/liudmila-clients')}
                >
                  <Users className="w-6 h-6 text-orange-500" />
                  <div className="text-left">
                    <div className="font-semibold">Клиенты Людмилы</div>
                    <div className="text-sm text-muted-foreground">Управление клиентами Людмилы</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

// Price Editor Component
const PriceEditor = ({
  price,
  categories,
  onSave,
  onCancel
}: {
  price?: ServicePrice;
  categories: PriceCategory[];
  onSave: (price: ServicePrice) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<ServicePrice>(
    price || {
      id: '',
      service: '',
      price: '',
      note: '',
      category: 'alexandrit'
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="service">Service</Label>
          <Input
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Preis</Label>
          <Input
            id="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="category">Kategorie</Label>
          <Select
            value={formData.category}
            onValueChange={(value: any) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.code}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="note">Notiz (optional)</Label>
          <Input
            id="note"
            value={formData.note || ''}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          />
        </div>
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

// Subscription Editor Component
const SubscriptionEditor = ({
  subscription,
  onSave,
  onCancel
}: {
  subscription?: SubscriptionPackage;
  onSave: (subscription: SubscriptionPackage) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<SubscriptionPackage>(
    subscription || {
      id: '',
      name: '',
      price: '',
      period: 'pro Monat',
      treatments: '',
      frequency: '',
      features: [],
      popular: false
    }
  );

  const [featuresText, setFeaturesText] = useState(
    subscription?.features.join('\n') || ''
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const features = featuresText.split('\n').filter(f => f.trim());
    onSave({ ...formData, features });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Preis</Label>
          <Input
            id="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="period">Zeitraum</Label>
          <Input
            id="period"
            value={formData.period}
            onChange={(e) => setFormData({ ...formData, period: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="treatments">Behandlungen</Label>
          <Input
            id="treatments"
            value={formData.treatments}
            onChange={(e) => setFormData({ ...formData, treatments: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="frequency">Häufigkeit</Label>
          <Input
            id="frequency"
            value={formData.frequency}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="popular"
            checked={formData.popular}
            onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
          />
          <Label htmlFor="popular">Als beliebt markieren</Label>
        </div>
      </div>

      <div>
        <Label htmlFor="features">Features (eine pro Zeile)</Label>
        <Textarea
          id="features"
          value={featuresText}
          onChange={(e) => setFeaturesText(e.target.value)}
          rows={4}
          required
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

// Event Editor Component
const EventEditor = ({
  event,
  onSave,
  onCancel
}: {
  event?: SupabaseEvent;
  onSave: (event: Omit<SupabaseEvent, 'id' | 'created_at' | 'updated_at'>) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Omit<SupabaseEvent, 'id' | 'created_at' | 'updated_at'>>(
    event ? {
      title: event.title,
      date: event.date || '',
      time: event.time || '',
      location: event.location || '',
      address: event.address || '',
      description: event.description || '',
      is_published: event.is_published ?? true
    } : {
      title: '',
      date: '',
      time: '',
      location: '',
      address: '',
      description: '',
      is_published: true
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Titel</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="date">Datum</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="time">Zeit (optional)</Label>
          <Input
            id="time"
            value={formData.time || ''}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            placeholder="z.B. 18-19.10"
          />
        </div>
        <div>
          <Label htmlFor="location">Ort</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="address">Adresse</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Beschreibung (optional)</Label>
        <Textarea
          id="description"
          value={formData.description || ''}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          placeholder="Zusätzliche Informationen zur Veranstaltung"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="is_published"
          checked={formData.is_published ?? true}
          onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
          className="w-4 h-4 text-rose-gold bg-gray-100 border-gray-300 rounded focus:ring-rose-gold focus:ring-2"
        />
        <Label htmlFor="is_published" className="cursor-pointer">
          Veröffentlicht (sichtbar auf der Website)
        </Label>
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

export default AdminDashboard;