import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Zap, Sparkles, Heart, Hand, Instagram, Waves } from 'lucide-react';
import { useEffect, useState } from 'react';
import { pricesService, subscriptionsService, categoriesService, type PriceCategory } from '@/services/contentService';
import type { ServicePrice, SubscriptionPackage } from '@/types/admin';

const Pricing = () => {
  const [prices, setPrices] = useState<ServicePrice[]>([]);
  const [subscriptions, setSubscriptions] = useState<SubscriptionPackage[]>([]);
  const [categories, setCategories] = useState<PriceCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('🟡 Начинаем загрузку данных...');
        console.log('🟡 Supabase URL:', import.meta.env.VITE_SUPABASE_URL);

        const [pricesData, subscriptionsData, categoriesData] = await Promise.all([
          pricesService.getAll(),
          subscriptionsService.getAll(),
          categoriesService.getAll()
        ]);

        console.log('🟢 Загружено цен:', pricesData.length);
        console.log('🟢 Загружено подписок:', subscriptionsData.length);
        console.log('🟢 Загружено категорий:', categoriesData.length);

        setPrices(pricesData);
        setSubscriptions(subscriptionsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('🔴 Ошибка загрузки данных:', error);
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

  // Helper function to sort prices by numeric value
  const sortByPrice = (priceArray: ServicePrice[]) => {
    return [...priceArray].sort((a, b) => parseInt(a.price) - parseInt(b.price));
  };

  // Helper function to get icon component by name
  const getIconComponent = (iconName?: string) => {
    const iconMap: Record<string, any> = {
      'Zap': Zap,
      'Sparkles': Sparkles,
      'Heart': Heart,
      'Hand': Hand,
      'Waves': Waves
    };
    return iconMap[iconName || 'Heart'] || Heart;
  };

  // Group prices by category and sort within each category
  const pricesByCategory = categories.map(category => {
    const categoryPrices = prices.filter(p => p.category === category.code);
    return {
      category,
      prices: sortByPrice(categoryPrices)
    };
  }).filter(group => group.prices.length > 0);

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
              <span className="font-semibold text-primary">{item.price}€</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {subscriptionPackages.map((pkg, index) => {
              // Определяем цветовую схему в зависимости от названия пакета
              let cardStyles = '';
              let titleStyles = '';
              let buttonStyles = '';
              let isPopular = false;

              if (pkg.name === 'Silber') {
                cardStyles = 'border-gray-400 border-2 hover:shadow-2xl hover:shadow-gray-500/20';
                titleStyles = 'text-gray-500';
                buttonStyles = 'bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 border border-gray-400';
              } else if (pkg.name === 'Gold') {
                cardStyles = 'border-yellow-500 border-2 shadow-2xl shadow-yellow-500/30 md:scale-105 hover:scale-110';
                titleStyles = 'text-yellow-600';
                buttonStyles = 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white animate-glow';
                isPopular = true;
              } else if (pkg.name === 'Platin') {
                cardStyles = 'border-slate-600 border-2 hover:shadow-2xl hover:shadow-slate-600/20';
                titleStyles = 'text-slate-700';
                buttonStyles = 'bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white border border-slate-500';
              } else {
                // Fallback для других названий
                cardStyles = pkg.popular ? 'border-rose-gold shadow-rose scale-105' : '';
                titleStyles = pkg.popular ? 'text-rose-gold' : 'text-primary';
                buttonStyles = pkg.popular
                  ? 'bg-rose-gold hover:bg-rose-gold-dark text-white'
                  : 'bg-primary hover:bg-primary/90 text-white';
                isPopular = pkg.popular;
              }

              return (
                <Card
                  key={index}
                  className={`relative hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 card-tilt ${cardStyles}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        BELIEBT
                      </div>
                    </div>
                  )}

                  <CardContent className={`p-4 sm:p-6 md:p-8 text-center relative overflow-hidden ${isPopular ? 'pt-8 sm:pt-10 md:pt-12' : ''}`}>
                    {/* Декоративные элементы для Gold */}
                    {pkg.name === 'Gold' && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-600/5"></div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl"></div>
                      </>
                    )}

                    {/* Декоративные элементы для других карточек */}
                    {pkg.name === 'Silber' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    )}

                    {pkg.name === 'Platin' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-slate-800/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    )}

                    <div className="relative z-10">
                      <h3 className={`text-2xl font-bold mb-2 ${titleStyles}`}>
                        {pkg.name}
                      </h3>

                      <div className="mb-8">
                        <div className="text-4xl font-bold text-primary mb-1">
                          {pkg.price}
                        </div>
                        <div className="text-muted-foreground">{pkg.period}</div>
                        <div className="text-sm text-muted-foreground mt-2">
                          {pkg.treatments} • {pkg.frequency}
                        </div>
                      </div>

                      <Button
                        className={`w-full hover:scale-105 transition-all duration-300 shadow-lg ${buttonStyles}`}
                        asChild
                      >
                        <a href="https://beauty.dikidi.net/#widget=185505" target="_blank" rel="noopener noreferrer">
                          Jetzt buchen
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Price Sections */}
      {pricesByCategory.map((categoryGroup, index) => {
        const Icon = getIconComponent(categoryGroup.category.icon);
        const isEven = index % 2 === 0;
        const bgClass = isEven ? 'bg-background' : 'bg-accent/20';

        return (
          <section
            key={categoryGroup.category.id}
            id={categoryGroup.category.code}
            className={`py-12 ${bgClass} scroll-mt-20`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  {categoryGroup.category.name}
                </h2>
                {categoryGroup.category.description && (
                  <p className="text-xl text-muted-foreground">
                    {categoryGroup.category.description}
                  </p>
                )}
              </div>

              <div className="max-w-4xl mx-auto">
                <PriceCard
                  title={categoryGroup.category.name}
                  prices={categoryGroup.prices}
                  icon={Icon}
                  color={categoryGroup.category.color || 'rose-gold'}
                />

                {/* Кнопка бронирования после каждого блока цен */}
                <div className="text-center mt-8">
                  <Button
                    size="lg"
                    className="bg-rose-gold hover:bg-rose-gold-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href="https://beauty.dikidi.net/#widget=185505" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt buchen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

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
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90"
              asChild
            >
              <a href="https://beauty.dikidi.net/#widget=185505" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Jetzt Termin vereinbaren
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black bg-white hover:bg-white/90"
              asChild
            >
              <a href="mailto:Yulachip@icloud.com">
                Kostenlose Beratung
              </a>
            </Button>
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