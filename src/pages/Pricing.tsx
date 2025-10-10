import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Zap, Sparkles, Heart, Hand, Instagram, Waves, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pricesService, subscriptionsService, categoriesService, type PriceCategory } from '@/services/contentService';
import type { ServicePrice, SubscriptionPackage } from '@/types/admin';
import { useLanguage } from '@/contexts/LanguageContext';
import { setPageMeta } from '@/seo/seo';

const Pricing = () => {
  const { language, t } = useLanguage();
  const [prices, setPrices] = useState<ServicePrice[]>([]);
  const [subscriptions, setSubscriptions] = useState<SubscriptionPackage[]>([]);
  const [categories, setCategories] = useState<PriceCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // Set page meta
  useEffect(() => {
    setPageMeta({
      title: 'Preise – Yuliia Cheporska Studio München',
      description: 'Preise für Laser-Haarentfernung, RedTouch, Icoone, Maniküre & Pediküre im Yuliia Cheporska Studio München-Haidhausen. Transparente Kosten, keine versteckten Gebühren.'
    });
  }, []);

  // Helper: get translated text with fallback
  const getTranslated = (de: string, ru?: string) => {
    return language === 'ru' && ru ? ru : de;
  };

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

        // Handle anchor scrolling after data is loaded
        const hash = window.location.hash;
        if (hash) {
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 300);
        }
      } catch (error) {
        console.error('🔴 Ошибка загрузки данных:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">{t('pricing.loading')}</div>;
  }

  // Helper function to sort prices by numeric value
  const sortByPrice = (priceArray: ServicePrice[]) => {
    return [...priceArray].sort((a, b) => {
      const priceA = typeof a.price === 'string' ? parseFloat(a.price) : a.price;
      const priceB = typeof b.price === 'string' ? parseFloat(b.price) : b.price;
      return priceA - priceB;
    });
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

  // Helper function to map category codes to landing page URLs
  const getCategoryLandingPage = (categoryCode: string): string => {
    const categoryMap: Record<string, string> = {
      'alexandrit': '/laser-haarentfernung-muenchen',
      'dioden': '/laser-haarentfernung-muenchen',
      'icoone': '/icoone-laser-muenchen',
      'redtouchpro': '/redtouch-laser-muenchen',
      'manicure': '/manikuere-pedikuere-muenchen',
      'pedicure': '/manikuere-pedikuere-muenchen'
    };
    return categoryMap[categoryCode] || '/services';
  };

  // Custom order for categories
  const categoryOrder = ['icoone', 'manicure', 'pedicure', 'redtouchpro', 'alexandrit', 'dioden'];

  // Sort categories by custom order
  const sortedCategories = [...categories].sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.code);
    const indexB = categoryOrder.indexOf(b.code);

    // If both are in the custom order, sort by that order
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // If only A is in custom order, it comes first
    if (indexA !== -1) return -1;
    // If only B is in custom order, it comes first
    if (indexB !== -1) return 1;
    // If neither is in custom order, maintain original order
    return 0;
  });

  // Group prices by category and sort within each category
  const pricesByCategory = sortedCategories.map(category => {
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
                <span className="text-foreground">{getTranslated(item.service, item.service_ru)}</span>
                {item.note && <div className="text-sm text-muted-foreground">{getTranslated(item.note, item.note_ru)}</div>}
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t('pricing.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('pricing.hero.subtitle')}
            </p>
          </div>

        </div>
      </section>

      {/* Subscription Packages */}
      <section id="abonnements" className="pt-4 pb-12 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('pricing.subscriptions.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('pricing.subscriptions.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[...subscriptionPackages].sort((a, b) => {
              const order = { 'Silber': 1, 'Gold': 2, 'Platin': 3 };
              return (order[a.name] || 99) - (order[b.name] || 99);
            }).map((pkg, index) => {
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
                        {t('pricing.subscriptions.popular')}
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
                        <div className="text-muted-foreground">{getTranslated(pkg.period, pkg.period_ru)}</div>
                        <div className="text-sm text-muted-foreground mt-2">
                          {getTranslated(pkg.treatments, pkg.treatments_ru)} • {getTranslated(pkg.frequency, pkg.frequency_ru)}
                        </div>
                      </div>

                      <Button
                        className={`w-full hover:scale-105 transition-all duration-300 shadow-lg ${buttonStyles}`}
                        onClick={() => {
                          const dikidiLinks = {
                            'Silber': 'https://dkd.su/1833345/s/20701465',
                            'Gold': 'https://dkd.su/1833345/s/20701481',
                            'Platin': 'https://dkd.su/1833345/s/20701485'
                          };
                          const link = dikidiLinks[pkg.name] || 'https://beauty.dikidi.net/#widget=185505';
                          window.open(link, '_blank');
                        }}
                      >
                        {t('pricing.button.book')}
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
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {getTranslated(categoryGroup.category.name, categoryGroup.category.name_ru)}
                </h2>
                {categoryGroup.category.description && (
                  <p className="text-xl text-muted-foreground">
                    {getTranslated(categoryGroup.category.description, categoryGroup.category.description_ru)}
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

                {/* Кнопки бронирования и "Mehr Infos" после каждого блока цен */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    size="lg"
                    className="bg-rose-gold hover:bg-rose-gold-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
                  >
                    {t('pricing.button.book')}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    asChild
                  >
                    <Link to={getCategoryLandingPage(categoryGroup.category.code)}>
                      {t('pricing.button.more-info')} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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
                  {t('pricing.info.title')}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">{t('pricing.info.payment.title')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('pricing.info.payment.cash')}</li>
                      <li>• {t('pricing.info.payment.card')}</li>
                      <li>• {t('pricing.info.payment.subscription')}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">{t('pricing.info.cancellation.title')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('pricing.info.cancellation.free')}</li>
                      <li>• {t('pricing.info.cancellation.short')}</li>
                      <li>• {t('pricing.info.cancellation.flexible')}</li>
                      <li>• {t('pricing.info.cancellation.reschedule')}</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>{t('pricing.info.note.title')}</strong> {t('pricing.info.note.text')}
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {t('pricing.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('pricing.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90"
              asChild
            >
              <a href="https://beauty.dikidi.net/#widget=185505" target="_blank" rel="noopener noreferrer">
                {t('pricing.cta.book')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black bg-white hover:bg-white/90"
              asChild
            >
              <a href="mailto:Yulachip@icloud.com">
                {t('pricing.cta.consult')}
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