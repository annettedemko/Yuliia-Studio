import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Check, Zap, Sparkles, Heart, Hand, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import { pricesService, subscriptionsService } from '@/services/contentService';
import type { ServicePrice, SubscriptionPackage } from '@/types/admin';

// Fallback data
const fallbackPrices: ServicePrice[] = [
  // Alexandrit Laser
  { id: '1', service: 'Oberlippe', price: '50€', category: 'alexandrit' },
  { id: '2', service: 'Kinn', price: '50€', category: 'alexandrit' },
  { id: '3', service: 'Achseln', price: '80€', category: 'alexandrit' },
  { id: '4', service: 'Beine komplett', price: '250€', category: 'alexandrit' },
  { id: '5', service: 'Bikinizone', price: '120€', category: 'alexandrit' },

  // Dioden Laser
  { id: '6', service: 'Oberlippe', price: '40€', category: 'dioden' },
  { id: '7', service: 'Kinn', price: '40€', category: 'dioden' },
  { id: '8', service: 'Achseln', price: '60€', category: 'dioden' },

  // Icoone
  { id: '9', service: 'Einzelbehandlung', price: '80€', category: 'icoone' },
  { id: '10', service: '5er Paket', price: '350€', category: 'icoone' },

  // Maniküre
  { id: '11', service: 'Klassische Maniküre', price: '35€', category: 'manicure' },
  { id: '12', service: 'Gel-Lackierung', price: '25€', category: 'manicure' },

  // Pediküre
  { id: '13', service: 'Klassische Pediküre', price: '45€', category: 'pedicure' },
  { id: '14', service: 'Wellness Pediküre', price: '55€', category: 'pedicure' }
];

const fallbackSubscriptions: SubscriptionPackage[] = [
  {
    id: '1',
    name: 'Silber',
    price: '300€',
    period: 'pro Monat',
    treatments: '72 Behandlungen',
    frequency: '2x pro Woche',
    features: ['Flexible Terminbuchung', 'Kostenlose Beratung', 'Keine Bindung'],
    popular: false
  },
  {
    id: '2',
    name: 'Gold',
    price: '400€',
    period: 'pro Monat',
    treatments: '106 Behandlungen',
    frequency: '3x pro Woche',
    features: ['Flexible Terminbuchung', 'Kostenlose Beratung', 'Priorität bei Terminen', 'Keine Bindung'],
    popular: true
  },
  {
    id: '3',
    name: 'Platin',
    price: '500€',
    period: 'pro Monat',
    treatments: '144 Behandlungen',
    frequency: '4x pro Woche',
    features: ['Flexible Terminbuchung', 'Kostenlose Beratung', 'Priorität bei Terminen', 'Keine Bindung', 'Zusatzleistungen'],
    popular: false
  }
];

const Pricing = () => {
  const [prices, setPrices] = useState<ServicePrice[]>([]);
  const [subscriptions, setSubscriptions] = useState<SubscriptionPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pricesData, subscriptionsData] = await Promise.all([
          pricesService.getAll(),
          subscriptionsService.getAll()
        ]);

        // Use fallback data if no data from Supabase
        setPrices(pricesData.length > 0 ? pricesData : fallbackPrices);
        setSubscriptions(subscriptionsData.length > 0 ? subscriptionsData : fallbackSubscriptions);
      } catch (error) {
        console.error('Error loading pricing data:', error);
        // Use fallback data on error
        setPrices(fallbackPrices);
        setSubscriptions(fallbackSubscriptions);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Handle anchor scrolling when component loads
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Laden...</div>;
  }

  // Filter prices by category
  const alexandritPrices = prices.filter(p => p.category === 'alexandrit');
  const diodenPrices = prices.filter(p => p.category === 'dioden');
  const icoonePrices = prices.filter(p => p.category === 'icoone');
  const manicurePrices = prices.filter(p => p.category === 'manicure');
  const pedicurePrices = prices.filter(p => p.category === 'pedicure');
  const subscriptionPackages = subscriptions;

  const PriceCard = ({ title, prices, icon: Icon, color = "rose-gold" }) => (
    <Card className="hover:shadow-card transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-2xl">
          <div className={`bg-${color}/20 p-3 rounded-full mr-4`}>
            <Icon className={`w-6 h-6 text-${color}`} />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {prices.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
              <div>
                <span className="text-foreground">{item.service}</span>
                {item.note && <div className="text-sm text-muted-foreground">{item.note}</div>}
              </div>
              <span className="font-semibold text-primary">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-16"
        style={{
          backgroundImage: `url(/H1.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 via-transparent to-white"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-white mb-6">Preise</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transparente und faire Preise für alle unsere Dienstleistungen.
              Professionelle Qualität zu attraktiven Konditionen.
            </p>
          </div>

        </div>
      </section>

      {/* Subscription Packages */}
      <section id="abonnements" className="pt-4 pb-12 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-4">Jahresabonnements Icoone Laser</h2>
            <p className="text-xl text-muted-foreground">
              Sparen Sie mit unseren flexiblen Abonnement-Modellen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-elegant transition-all duration-300 ${
                  pkg.popular ? 'border-rose-gold shadow-rose scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-rose-gold text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Beliebt
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8 text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? 'text-rose-gold' : 'text-primary'
                  }`}>
                    {pkg.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-muted-foreground">{pkg.period}</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {pkg.treatments} • {pkg.frequency}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-rose-gold mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+4915206067810"
                    className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors ${
                      pkg.popular
                        ? 'bg-rose-gold hover:bg-rose-gold-dark text-white'
                        : 'bg-primary hover:bg-primary/90 text-white'
                    }`}
                  >
                    Jetzt buchen
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Icoone Laser Prices */}
      <section id="icoone-laser" className="py-12 bg-accent/20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-4">Icoone Laser</h2>
            <p className="text-xl text-muted-foreground">
              Body Contouring und Hautstraffung mit innovativer Technologie
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <PriceCard
              title="IcooneLaser Body Contouring"
              prices={icoonePrices}
              icon={Heart}
              color="rose-gold"
            />
          </div>
        </div>
      </section>

      {/* Laser Treatment Prices */}
      <section id="laser-haarentfernung" className="py-12 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-4">Laser-Haarentfernung</h2>
            <p className="text-xl text-muted-foreground">
              Professionelle Laser-Behandlungen mit modernster Technologie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PriceCard
              title="Alexandrit Laser Motus AX"
              prices={alexandritPrices}
              icon={Zap}
              color="rose-gold"
            />
            <PriceCard
              title="M-Tech Diodenlaser"
              prices={diodenPrices}
              icon={Sparkles}
              color="primary"
            />
          </div>
        </div>
      </section>

      {/* Manicure & Pedicure Prices */}
      <section id="manikuere-pedikuere" className="py-12 bg-accent/20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-4">Maniküre & Pediküre</h2>
            <p className="text-xl text-muted-foreground">
              Professionelle Hand- und Fußpflege für gepflegte Nägel
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PriceCard 
              title="Maniküre" 
              prices={manicurePrices} 
              icon={Hand}
              color="rose-gold"
            />
            <PriceCard 
              title="Pediküre" 
              prices={pedicurePrices} 
              icon={Heart}
              color="primary"
            />
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Wichtige Informationen
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Zahlungsmodalitäten</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Barzahlung vor Ort</li>
                      <li>• EC-Karte und Kreditkarte</li>
                      <li>• Ratenzahlung bei Paketen möglich</li>
                      <li>• Jahresabonnements monatlich abbuchbar</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Stornierungsbedingungen</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Kostenlose Stornierung bis 24h vorher</li>
                      <li>• Bei kurzfristiger Absage 50% der Kosten</li>
                      <li>• Flexibilität bei Abonnements</li>
                      <li>• Terminverschiebung jederzeit möglich</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Hinweis:</strong> Alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer. 
                    Individuelle Behandlungspläne und Sonderkonditionen auf Anfrage möglich.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Ihre Behandlung?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt einen Beratungstermin und lassen Sie sich individuell beraten. 
            Wir finden gemeinsam die beste Lösung für Ihre Wünsche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4915206067810"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-black bg-white hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Jetzt Termin vereinbaren
            </a>
            <a
              href="mailto:cheporska.studio@mnet-online.de"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-black bg-white border border-white hover:bg-white/90 transition-colors"
            >
              Kostenlose Beratung
            </a>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              title="Instagram"
            >
              <Instagram className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;