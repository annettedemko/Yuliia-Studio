import { ContentData, ServicePrice, SubscriptionPackage } from '@/types/admin';

const CONTENT_KEY = 'yuliia_content_data';

// Initial default data based on current pricing
const defaultContentData: ContentData = {
  prices: [
    // Alexandrit Laser
    { id: '1', service: 'Oberlippe', price: '35€', category: 'alexandrit' },
    { id: '2', service: 'Kinn', price: '35€', category: 'alexandrit' },
    { id: '3', service: 'Achseln', price: '60€', category: 'alexandrit' },
    { id: '4', service: 'Unterarme', price: '90€', category: 'alexandrit' },
    { id: '5', service: 'Oberarme', price: '90€', category: 'alexandrit' },
    { id: '6', service: 'Arme komplett', price: '150€', category: 'alexandrit' },
    { id: '7', service: 'Unterschenkel', price: '120€', category: 'alexandrit' },
    { id: '8', service: 'Oberschenkel', price: '150€', category: 'alexandrit' },
    { id: '9', service: 'Beine komplett', price: '200€', category: 'alexandrit' },
    { id: '10', service: 'Bikinizone klassisch', price: '80€', category: 'alexandrit' },
    { id: '11', service: 'Bikinizone komplett', price: '120€', category: 'alexandrit' },
    { id: '12', service: 'Rücken', price: '180€', category: 'alexandrit' },
    { id: '13', service: 'Brust (Herren)', price: '150€', category: 'alexandrit' },
    { id: '14', service: 'Ganzer Körper', price: '600€', category: 'alexandrit' },

    // Dioden Laser
    { id: '15', service: 'Oberlippe', price: '30€', category: 'dioden' },
    { id: '16', service: 'Kinn', price: '30€', category: 'dioden' },
    { id: '17', service: 'Achseln', price: '50€', category: 'dioden' },
    { id: '18', service: 'Unterarme', price: '70€', category: 'dioden' },
    { id: '19', service: 'Oberarme', price: '70€', category: 'dioden' },
    { id: '20', service: 'Arme komplett', price: '120€', category: 'dioden' },
    { id: '21', service: 'Unterschenkel', price: '80€', category: 'dioden' },
    { id: '22', service: 'Oberschenkel', price: '100€', category: 'dioden' },
    { id: '23', service: 'Beine komplett', price: '120€', category: 'dioden' },
    { id: '24', service: 'Bikinizone klassisch', price: '60€', category: 'dioden' },
    { id: '25', service: 'Bikinizone komplett', price: '90€', category: 'dioden' },
    { id: '26', service: 'Rücken', price: '120€', category: 'dioden' },
    { id: '27', service: 'Brust (Herren)', price: '100€', category: 'dioden' },
    { id: '28', service: 'Ganzer Körper', price: '400€', category: 'dioden' },

    // Icoone Laser
    { id: '29', service: 'Body Contouring (Einzelsitzung)', price: '80€', category: 'icoone' },
    { id: '30', service: '5er Paket Body Contouring', price: '360€', note: '(72€ pro Sitzung)', category: 'icoone' },
    { id: '31', service: '10er Paket Body Contouring', price: '650€', note: '(65€ pro Sitzung)', category: 'icoone' },
    { id: '32', service: '15er Paket Body Contouring', price: '900€', note: '(60€ pro Sitzung)', category: 'icoone' },
    { id: '33', service: 'Jahresabonnement Body Contouring', price: 'auf Anfrage', category: 'icoone' },

    // Manicure
    { id: '34', service: 'Maniküre mit Gel', price: '60€', category: 'manicure' },
    { id: '35', service: 'Maniküre ohne Gel', price: '40€', category: 'manicure' },
    { id: '36', service: 'Nagelverlängerung', price: '70€', category: 'manicure' },
    { id: '37', service: 'Nail Art (Aufpreis)', price: 'ab 10€', category: 'manicure' },
    { id: '38', service: 'Reparatur (pro Nagel)', price: '5€', category: 'manicure' },

    // Pedicure
    { id: '39', service: 'Pediküre mit Gel', price: '70€', category: 'pedicure' },
    { id: '40', service: 'Pediküre ohne Gel', price: '50€', category: 'pedicure' },
    { id: '41', service: 'Medizinische Fußpflege', price: '60€', category: 'pedicure' },
    { id: '42', service: 'Hornhautentfernung', price: '20€', category: 'pedicure' },
    { id: '43', service: 'Fußmassage (15 Min.)', price: '25€', category: 'pedicure' }
  ],
  subscriptions: [
    {
      id: 'sub1',
      name: 'Silber',
      price: '300€',
      period: 'pro Monat',
      treatments: '72 Behandlungen',
      frequency: '2x pro Woche',
      features: [
        'Flexible Terminbuchung',
        'Alle Standardbehandlungen',
        'Kostenlose Beratung',
        'Individuelle Behandlungspläne'
      ],
      popular: false
    },
    {
      id: 'sub2',
      name: 'Gold',
      price: '400€',
      period: 'pro Monat',
      treatments: '106 Behandlungen',
      frequency: '3x pro Woche',
      features: [
        'Prioritätsbuchung',
        'Alle Premium-Behandlungen',
        'Kostenlose Beratung',
        'Rabatt auf Zusatzleistungen',
        'Flexible Pausenregelung'
      ],
      popular: true
    },
    {
      id: 'sub3',
      name: 'Platin',
      price: '500€',
      period: 'pro Monat',
      treatments: '150 Behandlungen',
      frequency: '4x pro Woche',
      features: [
        'VIP-Service',
        'Alle Behandlungen inklusive',
        'Persönliche Betreuung',
        'Kostenlose Zusatzleistungen',
        'Flexible Termingestaltung',
        'Exklusive Angebote'
      ],
      popular: false
    }
  ],
  lastUpdated: new Date().toISOString()
};

export const initializeContentData = () => {
  const existingData = localStorage.getItem(CONTENT_KEY);
  if (!existingData) {
    localStorage.setItem(CONTENT_KEY, JSON.stringify(defaultContentData));
  }
};

export const getContentData = (): ContentData => {
  const data = localStorage.getItem(CONTENT_KEY);
  return data ? JSON.parse(data) : defaultContentData;
};

export const updateContentData = (data: ContentData) => {
  data.lastUpdated = new Date().toISOString();
  localStorage.setItem(CONTENT_KEY, JSON.stringify(data));
};

// CRUD operations for prices
export const createPrice = (price: Omit<ServicePrice, 'id'>): ServicePrice => {
  const data = getContentData();
  const newPrice: ServicePrice = {
    ...price,
    id: Date.now().toString()
  };
  data.prices.push(newPrice);
  updateContentData(data);
  return newPrice;
};

export const updatePrice = (id: string, updates: Partial<ServicePrice>): ServicePrice | null => {
  const data = getContentData();
  const index = data.prices.findIndex(p => p.id === id);
  if (index === -1) return null;

  data.prices[index] = { ...data.prices[index], ...updates };
  updateContentData(data);
  return data.prices[index];
};

export const deletePrice = (id: string): boolean => {
  const data = getContentData();
  const index = data.prices.findIndex(p => p.id === id);
  if (index === -1) return false;

  data.prices.splice(index, 1);
  updateContentData(data);
  return true;
};

// CRUD operations for subscriptions
export const createSubscription = (subscription: Omit<SubscriptionPackage, 'id'>): SubscriptionPackage => {
  const data = getContentData();
  const newSubscription: SubscriptionPackage = {
    ...subscription,
    id: Date.now().toString()
  };
  data.subscriptions.push(newSubscription);
  updateContentData(data);
  return newSubscription;
};

export const updateSubscription = (id: string, updates: Partial<SubscriptionPackage>): SubscriptionPackage | null => {
  const data = getContentData();
  const index = data.subscriptions.findIndex(s => s.id === id);
  if (index === -1) return null;

  data.subscriptions[index] = { ...data.subscriptions[index], ...updates };
  updateContentData(data);
  return data.subscriptions[index];
};

export const deleteSubscription = (id: string): boolean => {
  const data = getContentData();
  const index = data.subscriptions.findIndex(s => s.id === id);
  if (index === -1) return false;

  data.subscriptions.splice(index, 1);
  updateContentData(data);
  return true;
};