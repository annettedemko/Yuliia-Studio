import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Train, Car, Instagram, Calendar, MessageCircle, Send } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import AGBNotice from '@/components/AGBNotice';
import ConsentMap from '@/components/ConsentMap';
import { showBookingWidget } from '@/lib/altegioWidget';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Kontakt = () => {
  const { t } = useLanguage();


  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  // Функция для добавления языкового префикса к ссылкам
  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  const contactCardsRef = useScrollReveal();
  const mapRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const jsonLd = useMemo(() => {
    const baseUrl = 'https://www.munchen-beauty.de';
    return {
      '@context': 'https://schema.org',
      '@type': 'BeautySalon',
      '@id': `${baseUrl}#business`,
      name: 'Yuliia Cheporska Studio',
      url: `${baseUrl}/${currentLang}/kontakt`,
      mainEntityOfPage: `${baseUrl}/${currentLang}/kontakt`,
      description: currentLang === 'ru'
        ? 'Свяжитесь с Yuliia Cheporska Studio в Мюнхене-Хайдхаузен. Ваш экспертный салон лазерной эпиляции и аппаратной косметологии, всего 5-7 минут от Остбанхоф.'
        : 'Kontaktieren Sie das Yuliia Cheporska Studio in München-Haidhausen. Ihr Experten-Studio für Laser-Haarentfernung und apparative Kosmetik, nur 5-7 Minuten vom Ostbahnhof entfernt.',
      inLanguage: currentLang === 'ru' ? 'ru' : 'de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Elsässer Straße 33',
        addressLocality: 'München',
        addressRegion: 'Bayern',
        postalCode: '81667',
        addressCountry: 'DE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.120969,
        longitude: 11.654647
      },
      telephone: '+4915206067810',
      email: 'Yulachip@icloud.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+4915206067810',
          contactType: 'customer support',
          availableLanguage: ['German', 'Russian']
        }
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          opens: '10:00',
          closes: '20:00'
        }
      ],
      location: {
        '@type': 'Place',
        name: 'Yuliia Cheporska Studio',
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: currentLang === 'ru' ? 'Как добраться на общественном транспорте' : 'Anfahrt mit ÖPNV',
            value: 'S-Bahn Ostbahnhof (5-7 Min.), Tram 19 (Orleansplatz), Bus 145'
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: currentLang === 'ru' ? 'Парковка' : 'Parkmöglichkeiten',
            value: 'Parkhaus am Ostbahnhof (6 Min.), Motel One Parkplatz (5 Min.)'
          }
        ]
      },
      hasMap: 'https://www.google.com/maps?cid=11116671040407330782',
      sameAs: [
        'https://t.me/yuliia_cheporska_studio',
        'https://www.instagram.com/yuliia_cheporska_studio',
        'https://www.tiktok.com/@yuliia_cheporska_studio'
      ]
    };
  }, [currentLang]);

  return (
    <>
      <PageHelmet />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{t('kontakt.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('kontakt.hero.subtitle')}
            </p>
            </div>
          {/* AGB Notice */}
          <div className="max-w-3xl mx-auto mt-6">
            <AGBNotice />
          </div>
          </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-background">
        <div ref={contactCardsRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* Adresse */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-rose-gold" />
                  </div>
                <h3 className="text-xl font-bold text-primary mb-3">{t('kontakt.address.title')}</h3>
                <p className="text-muted-foreground mb-2">{t('kontakt.address.street')}</p>
                <p className="text-muted-foreground mb-4">{t('kontakt.address.city')}</p>
                <a
                  href="https://maps.google.com/?q=Elsässer+Straße+33,+81667+München"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-gold hover:underline text-sm"
                >
                  {t('kontakt.address.maps')}
                </a>
              </CardContent>
            </Card>

            {/* Telefon & WhatsApp */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-rose-gold" />
                  </div>
                <h3 className="text-xl font-bold text-primary mb-3">{t('kontakt.phone.title')}</h3>
                <p className="text-muted-foreground mb-2">
                  <a href="tel:+4915206067810" className="hover:text-rose-gold transition-colors">
                    +49 152 06067810
                  </a>
                </p>
                <a
                  href="https://wa.me/4915206067810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {t('kontakt.whatsapp')}
                </a>
              </CardContent>
            </Card>

            {/* Telegram & Email */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-rose-gold" />
                  </div>
                <h3 className="text-xl font-bold text-primary mb-3">{t('kontakt.telegram.title')}</h3>
                <a
                  href="https://t.me/+4915206067810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:text-primary/80 transition-colors mb-2"
                >
                  <Send className="w-4 h-4 inline mr-1" />
                  {t('kontakt.telegram.open')}
                </a>
                <a
                  href="mailto:Yulachip@icloud.com"
                  className="block text-sm text-muted-foreground hover:text-rose-gold transition-colors"
                >
                  <Mail className="w-4 h-4 inline mr-1" />
                  Yulachip@icloud.com
                </a>
              </CardContent>
            </Card>

            {/* Öffnungszeiten */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-rose-gold" />
                  </div>
                <h3 className="text-xl font-bold text-primary mb-3">{t('kontakt.hours.title')}</h3>
                <p className="text-muted-foreground mb-1">{t('kontakt.hours.weekdays')}</p>
                <p className="text-muted-foreground mb-1">{t('kontakt.hours.saturday')}</p>
                <p className="text-muted-foreground">{t('kontakt.hours.sunday')}</p>
              </CardContent>
            </Card>

            </div>
          </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-accent/10">
        <div ref={mapRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-8">{t('kontakt.map.title')}</h2>

            {/* Google Maps with 2-click consent */}
            <ConsentMap className="mb-8" />

            {/* Transport Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* ÖPNV */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Train className="w-6 h-6 text-primary" />
                      </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">{t('kontakt.transport.public.title')}</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span>{t('kontakt.transport.public.sbahn')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span>{t('kontakt.transport.public.tram')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span>{t('kontakt.transport.public.bus')}</span>
                        </li>
                      </ul>
                      </div>
                    </div>
                </CardContent>
              </Card>

              {/* Auto & Parken */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Car className="w-6 h-6 text-primary" />
                      </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">{t('kontakt.transport.car.title')}</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <a
                            href={t('kontakt.transport.car.parking-url')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rose-gold hover:underline"
                          >
                            {t('kontakt.transport.car.parking')}
                          </a>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <a
                            href={t('kontakt.transport.car.parkhouse-url')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rose-gold hover:underline"
                          >
                            {t('kontakt.transport.car.parkhouse')}
                          </a>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span>{t('kontakt.transport.car.directions')}</span>
                        </li>
                      </ul>
                      </div>
                    </div>
                </CardContent>
              </Card>

              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div ref={ctaRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">{t('kontakt.cta.title')}</h2>
            <p className="text-xl mb-8 text-white/90">
              {t('kontakt.cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => showBookingWidget()}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('kontakt.cta.book')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-primary shadow-lg"
                asChild
              >
                <Link to={withLang("/services")}>
                  {t('kontakt.cta.services')}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-primary shadow-lg"
                asChild
              >
                <Link to={withLang("/preis")}>
                  {t('kontakt.cta.prices')}
                </Link>
              </Button>
              </div>

            {/* Social Media */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <p className="text-white/80">{t('kontakt.cta.follow')}</p>
              <a
                href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-primary hover:bg-primary/90 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              </div>
            </div>
          </div>
      </section>

      </div>
    </>
  );
};

export default Kontakt;
