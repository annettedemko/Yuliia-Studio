import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';
import { subscriptionsService } from '@/services/contentService';
import type { SubscriptionPackage } from '@/types/admin';
import { useLanguage } from '@/contexts/LanguageContext';
// Изображения загружаются из папки public

const Home = () => {
  const { t } = useLanguage();
  const [subscriptions, setSubscriptions] = useState<SubscriptionPackage[]>([]);
  const [loadingSubscriptions, setLoadingSubscriptions] = useState(true);
  useEffect(() => {
    setPageMeta({
      title: 'Yuliia Cheporska Studio | Laser-Haarentfernung, RedTouch 675 nm, Icoone®️, Nails – München',
      description: 'Studio in München-Haidhausen (Elsässer Str. 33). Laser-Haarentfernung (Alexandrit & Diodenlaser), RedTouch 675 nm, Icoone®️, Maniküre & Pediküre. Jetzt online buchen.'
    });

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Yuliia Cheporska Studio',
      image: 'https://yuliia-studio.vercel.app/logo2.jpg',
      '@id': 'https://yuliia-studio.vercel.app',
      url: 'https://yuliia-studio.vercel.app',
      telephone: '+4915206067810',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Elsässer Straße 33',
        addressLocality: 'München',
        postalCode: '81667',
        addressCountry: 'DE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1181,
        longitude: 11.6034
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:00'
        }
      ],
      priceRange: '€€'
    });

    // Load subscriptions
    const loadSubscriptions = async () => {
      try {
        const data = await subscriptionsService.getAll();
        setSubscriptions(data);
      } catch (error) {
        console.error('Error loading subscriptions:', error);
      } finally {
        setLoadingSubscriptions(false);
      }
    };

    loadSubscriptions();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSubscriptions = () => {
    document.getElementById('subscriptions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white via-gray-50/30 to-white">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-fixed sm:bg-fixed"
        style={{
          backgroundImage: `url(/22.png)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 via-transparent to-white"></div>

        {/* Animated particles - hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-20 left-10 w-2 h-2 bg-rose-gold/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-rose-gold/40 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-40 right-10 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up leading-tight">
            <span className="bg-gradient-to-r from-white via-rose-gold/90 to-white bg-clip-text text-transparent">
              {t('home.hero.title')}
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-white/90 animate-slide-up delay-300 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 animate-slide-up delay-500 w-full sm:w-auto"
            onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
          >
            {t('home.hero.button')}
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-white/90 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">{t('home.services.title')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Link to="/laser-haarentfernung-muenchen" className="group">
              <Card className="hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/20.png"
                      alt="Laser-Haarentfernung München"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      style={{
                        objectPosition: '50% 5%',
                        transform: 'scale(1.0)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="text-xl font-bold">{t('home.services.laser.title')}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white to-gray-50/50 group-hover:from-rose-gold/5 group-hover:to-white transition-all duration-300">
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {t('home.services.laser.description')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/redtouch-laser-muenchen" className="group">
              <Card className="hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/deka2.2.jpeg"
                      alt="RedTouch 675 nm München"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="text-xl font-bold">{t('home.services.redtouch.title')}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white to-gray-50/50 group-hover:from-rose-gold/5 group-hover:to-white transition-all duration-300">
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {t('home.services.redtouch.description')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/icoone-laser-muenchen" className="group">
              <Card className="hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/3.4.jpg"
                      alt="Icoone®️-Behandlungen München"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ objectPosition: 'center 25%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="text-xl font-bold">{t('home.services.icoone.title')}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white to-gray-50/50 group-hover:from-rose-gold/5 group-hover:to-white transition-all duration-300">
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {t('home.services.icoone.description')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/manikuere-pedikuere-muenchen" className="group">
              <Card className="hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/11.jpg"
                      alt="Maniküre & Pediküre München"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="text-xl font-bold">{t('home.services.nails.title')}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white to-gray-50/50 group-hover:from-rose-gold/5 group-hover:to-white transition-all duration-300">
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {t('home.services.nails.description')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Button to Prices */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/preis">
                Посмотреть все цены
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Subscription Packages */}
      <section id="subscriptions" className="py-12 bg-transparent relative overflow-hidden -mt-12 md:-mt-16">
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-rose-gold/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6 sm:mb-8 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t('home.subscriptions.title')}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-gold via-primary to-rose-gold mx-auto animate-gradient mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground animate-slide-up delay-300 px-4">
              {t('home.subscriptions.subtitle')}
            </p>
          </div>

          {loadingSubscriptions ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t('home.subscriptions.loading')}</p>
            </div>
          ) : subscriptions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t('home.subscriptions.no-packages')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[...subscriptions].sort((a, b) => {
                const order = { 'Silber': 1, 'Gold': 2, 'Platin': 3 };
                return (order[a.name] || 99) - (order[b.name] || 99);
              }).map((pkg, index) => {
                const isPopular = pkg.is_popular;
                const tierColors = {
                  'Silber': { border: 'border-gray-400', shadow: 'hover:shadow-gray-500/20', gradient: 'from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500', text: 'text-gray-500', bgGradient: 'from-gray-100/50 to-gray-200/30' },
                  'Gold': { border: 'border-yellow-500', shadow: 'shadow-yellow-500/30 hover:shadow-elegant', gradient: 'from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700', text: 'text-yellow-600', bgGradient: 'from-yellow-400/10 via-transparent to-yellow-600/5' },
                  'Platin': { border: 'border-slate-600', shadow: 'hover:shadow-slate-600/20', gradient: 'from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900', text: 'text-slate-700', bgGradient: 'from-slate-600/10 to-slate-800/30' }
                };
                const colors = tierColors[pkg.name] || tierColors['Gold'];

                return (
                  <Card
                    key={pkg.id}
                    className={`${colors.border} border-2 ${colors.shadow} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 card-tilt animate-slide-up ${isPopular ? 'md:scale-105 hover:scale-110 relative overflow-visible md:mt-4' : ''}`}
                  >
                    {isPopular && (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient}`}></div>
                        {pkg.name === 'Gold' && <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl"></div>}
                      </>
                    )}
                    <CardContent className={`p-4 sm:p-6 md:p-8 ${isPopular ? 'pt-8 sm:pt-10 md:pt-12' : ''} text-center relative ${!isPopular ? 'overflow-hidden' : 'z-10'}`}>
                      {!isPopular && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient} opacity-0 hover:opacity-100 transition-opacity duration-500`}></div>
                      )}
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                          {t('home.subscriptions.popular')}
                        </div>
                      )}
                      <div className="relative z-10">
                        <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>{pkg.name}</h3>
                        <div className="mb-6">
                          <div className="text-4xl font-bold text-primary mb-1">
                            {pkg.price}<span className="text-lg font-normal">{t('home.subscriptions.per-month')}</span>
                          </div>
                          {pkg.treatments && pkg.frequency && (
                            <div className="text-sm text-muted-foreground mt-2">
                              {pkg.treatments} • {pkg.frequency}
                            </div>
                          )}
                        </div>
                        <Button
                          className={`w-full bg-gradient-to-r ${colors.gradient} ${pkg.name === 'Gold' ? 'text-white animate-glow' : pkg.name === 'Platin' ? 'text-white border border-slate-500' : 'text-gray-800 border border-gray-400'} hover:scale-105 transition-all duration-300 shadow-lg`}
                          onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
                        >
                          {t('home.hero.button')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Button to Prices */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/preis">
                {t('home.services.view-prices')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="py-10 bg-transparent relative overflow-hidden -mt-12 md:-mt-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-rose-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-rose-gold/10 to-primary/10 rounded-full animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4">{t('home.hours.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-gold to-primary mx-auto animate-gradient"></div>
          </div>

          <div className="max-w-md mx-auto animate-slide-up delay-300">
            <Card className="glass-effect border-rose-gold/20 hover:shadow-rose transition-all duration-500 hover:scale-105 card-tilt">
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Floating decorative element */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-rose-gold/20 to-primary/20 rounded-full blur-sm animate-float"></div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-rose-gold/10 to-transparent hover:from-rose-gold/20 transition-all duration-300">
                    <span className="font-medium text-foreground">{t('home.hours.weekdays')}</span>
                    <span className="text-rose-gold font-semibold animate-pulse">{t('home.hours.weekdays-time')}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-gray-100/50 to-transparent">
                    <span className="font-medium text-foreground">{t('home.hours.sunday')}</span>
                    <span className="text-muted-foreground">{t('home.hours.closed')}</span>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-transparent relative overflow-hidden -mt-16 md:-mt-24">
        {/* Floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-6 h-6 border-2 border-rose-gold/30 rotate-45 animate-float"></div>
          <div className="absolute bottom-32 right-16 w-8 h-8 border-2 border-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-4 h-16 bg-gradient-to-b from-rose-gold/20 to-transparent animate-bounce delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4">{t('home.map.title')}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-gold via-primary to-rose-gold mx-auto animate-gradient mb-6"></div>

            <Card className="max-w-3xl mx-auto glass-effect border-rose-gold/20 hover:shadow-rose transition-all duration-300">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-gold/20 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-rose-gold" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-primary text-lg mb-2">{t('home.map.address-title')}</h3>
                    <p className="text-muted-foreground">{t('home.map.address').split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-primary text-lg mb-2">{t('home.map.directions-title')}</h3>
                      <p className="text-muted-foreground mb-2">
                        <span className="font-semibold">{t('home.map.walking')}</span> {t('home.map.walking-desc')}
                      </p>
                      <p className="text-muted-foreground mb-2">
                        <span className="font-semibold">{t('home.map.public')}</span> {t('home.map.public-desc')}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">{t('home.map.parking')}</span> {t('home.map.parking-desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto animate-slide-up delay-500 mt-16">
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-gold/20 via-primary/20 to-rose-gold/20 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-rose transition-all duration-500 hover:scale-[1.02] card-tilt h-96">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10"></div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7363!2d11.6034!3d48.1181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf3f8b5c4b5d%3A0x8c4b5c4b5c4b5c4b!2sElsässer%20Str.%2033%2C%2081667%20München!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kosmetikstudio München Haidhausen – Karte / Anfahrt"
                  className="transition-all duration-500 hover:saturate-110"
                ></iframe>
              </div>

              {/* Floating location pin animation */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-rose-gold text-white p-2 rounded-full shadow-lg animate-bounce">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 bg-transparent relative overflow-hidden -mt-16 md:-mt-24">
        {/* Dynamic floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-rose-gold/10 to-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-tr from-primary/10 to-rose-gold/10 rounded-full blur-lg animate-float"></div>
          <div className="absolute top-1/2 left-10 w-4 h-4 bg-rose-gold/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-primary/40 rotate-45 animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6 animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4">{t('home.contact.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-gold to-primary mx-auto animate-gradient mb-6"></div>
            <p className="text-xl text-muted-foreground animate-slide-up delay-300">
              {t('home.contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-4 animate-slide-up delay-500">
              <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-white/50">
                <div className="bg-gradient-to-br from-rose-gold/20 to-rose-gold/30 p-3 rounded-full group-hover:shadow-lg group-hover:animate-pulse transition-all duration-300">
                  <Phone className="w-6 h-6 text-rose-gold group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary">{t('home.contact.phone')}</h3>
                  <a href="tel:+4915206067810" className="text-muted-foreground hover:text-rose-gold transition-colors text-lg hover:scale-105 inline-block">
                    +49 152 06067810
                  </a>
                  <div className="flex items-center space-x-3 mt-1">
                    <a
                      href="https://t.me/+4915206067810"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                      title="Telegram"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.43.67-.87.42l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.49.24l.17-2.43 4.33-3.91c.19-.17-.04-.26-.29-.1L9.09 13.65l-2.4-.75c-.52-.16-.53-.52.11-.78l9.37-3.61c.43-.16.81.1.67.75z"/>
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/4915206067810"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                      title="WhatsApp"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-white/50">
                <div className="bg-gradient-to-br from-rose-gold/20 to-rose-gold/30 p-3 rounded-full group-hover:shadow-lg group-hover:animate-pulse transition-all duration-300">
                  <Mail className="w-6 h-6 text-rose-gold group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{t('home.contact.email')}</h3>
                  <a href="mailto:Yulachip@icloud.com" className="text-muted-foreground hover:text-rose-gold transition-colors hover:scale-105 inline-block">
                    Yulachip@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-white/50">
                <div className="bg-gradient-to-br from-rose-gold/20 to-rose-gold/30 p-3 rounded-full group-hover:shadow-lg group-hover:animate-pulse transition-all duration-300">
                  <MapPin className="w-6 h-6 text-rose-gold group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{t('home.contact.address')}</h3>
                  <a
                    href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-rose-gold transition-colors"
                  >
                    Elsässer Straße 33<br />
                    81667 Мюнхен
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Card */}
            <div className="animate-slide-up delay-700">
              <Card className="glass-effect border-rose-gold/20 hover:shadow-rose transition-all duration-500 hover:scale-105 card-tilt relative overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 via-transparent to-primary/5 animate-gradient opacity-50"></div>

                {/* Floating decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-rose-gold/30 to-primary/30 rounded-full blur-sm animate-float"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-tr from-primary/20 to-rose-gold/20 rounded-full animate-pulse"></div>

                <CardContent className="p-8 relative z-10">
                  <h3 className="text-xl font-bold gradient-text mb-6">{t('home.contact.book-now')}</h3>
                  <div className="space-y-6">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-hero text-white border-none hover:scale-105 hover:shadow-lg transition-all duration-300 hover:animate-pulse"
                      onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
                    >
                      <Phone className="w-5 h-5 mr-2 animate-bounce" />
                      {t('home.hero.button')}
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-rose-gold/50 text-primary hover:bg-rose-gold hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
                      onClick={() => window.location.href = 'mailto:Yulachip@icloud.com'}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      {t('home.contact.send-email')}
                    </Button>
                  </div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/20 via-primary/20 to-rose-gold/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;