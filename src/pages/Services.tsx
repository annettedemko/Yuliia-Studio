import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Zap, Heart, Hand, Waves, CheckCircle, Sparkles, Instagram } from 'lucide-react';
import { useEffect } from 'react';
import { PageHelmet } from '@/components/PageHelmet';
import { setJsonLd } from '@/seo/seo';
import { useLanguage } from '@/contexts/LanguageContext';
import AGBNotice from '@/components/AGBNotice';
import { showBookingWidget } from '@/lib/altegioWidget';

const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  useEffect(() => {
    const baseUrl = 'https://www.munchen-beauty.de';
    const isRu = currentLang === 'ru';
    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${baseUrl}/services#page`,
      mainEntityOfPage: `${baseUrl}/${currentLang}/services`,
      name: isRu ? 'Услуги студии Yuliia Cheporska' : 'Leistungen – Yuliia Cheporska Studio',
      description: isRu
        ? 'Все услуги: лазерная эпиляция, RedTouch 675 нм, Icoone®️, маникюр и педикюр в Мюнхене-Хайдхаузен.'
        : 'Alle Leistungen: Laser-Haarentfernung, RedTouch 675 nm, Icoone®️, Maniküre & Pediküre in München-Haidhausen.',
      inLanguage: isRu ? 'ru' : 'de',
      provider: {
        '@type': 'BeautySalon',
        '@id': `${baseUrl}#business`,
        name: 'Yuliia Cheporska Studio'
      },
      hasPart: [
        {
          '@type': 'Service',
          name: isRu ? 'Лазерная эпиляция' : 'Laser-Haarentfernung',
          url: `${baseUrl}/${currentLang}/laser-haarentfernung-muenchen`
        },
        {
          '@type': 'Service',
          name: isRu ? 'RedTouch 675 нм' : 'RedTouch 675 nm',
          url: `${baseUrl}/${currentLang}/redtouch-laser-muenchen`
        },
        {
          '@type': 'Service',
          name: 'Icoone®️ Laser',
          url: `${baseUrl}/${currentLang}/icoone-laser-muenchen`
        },
        {
          '@type': 'Service',
          name: isRu ? 'Маникюр и педикюр' : 'Maniküre & Pediküre',
          url: `${baseUrl}/${currentLang}/manikuere-pedikuere-muenchen`
        }
      ]
    });
  }, [currentLang]);

  const services = [
    {
      titleKey: 'services.motus.title',
      descKey: 'services.motus.description',
      imgSrc: '/17.png',
      imgAlt: 'alt.services.alexandrit',
      imgW: 6000,
      imgH: 6000,
      icon: Zap,
      link: '/laser-haarentfernung-muenchen',
      priceAnchor: '#alexandrit',
      learnMoreKey: 'services.motus.learn-more',
    },
    {
      titleKey: 'services.diode.title',
      descKey: 'services.diode.description',
      imgSrc: '/2.jpeg',
      imgAlt: 'alt.services.diode',
      imgW: 555,
      imgH: 740,
      icon: Zap,
      link: '/laser-haarentfernung-muenchen',
      priceAnchor: '#dioden',
      learnMoreKey: 'services.motus.learn-more',
      benefits: {
        titleKey: 'services.diode.benefits.title',
        items: ['services.diode.benefits.efficiency', 'services.diode.benefits.cooling', 'services.diode.benefits.fast', 'services.diode.benefits.universal'],
      },
    },
    {
      titleKey: 'services.icoone.title',
      descKey: 'services.icoone.description',
      imgSrc: '/3.jpeg',
      imgAlt: 'alt.services.icoone',
      imgW: 1500,
      imgH: 1870,
      icon: Heart,
      link: '/icoone-laser-muenchen',
      priceAnchor: '#icoone',
      learnMoreKey: 'common.learn-more',
    },
    {
      titleKey: 'services.redtouch.title',
      descKey: 'services.redtouch.description',
      imgSrc: '/deka2.png',
      imgAlt: 'alt.services.redtouch',
      imgW: 525,
      imgH: 1200,
      icon: Waves,
      link: '/redtouch-laser-muenchen',
      priceAnchor: '#redtouchpro',
      learnMoreKey: 'common.learn-more',
      benefits: {
        titleKey: 'services.redtouch.areas.title',
        items: ['services.redtouch.areas.face', 'services.redtouch.areas.decollete', 'services.redtouch.areas.hands', 'services.redtouch.areas.special'],
      },
    },
    {
      titleKey: 'services.nails.title',
      descKey: 'services.nails.description',
      imgSrc: '/23.png',
      imgAlt: 'alt.services.nails',
      imgW: 557,
      imgH: 594,
      icon: Hand,
      link: '/manikuere-pedikuere-muenchen',
      priceAnchor: '#manicure',
      learnMoreKey: 'common.learn-more',
      reversed: true,
    },
  ];

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-rose-gold/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-gold/8 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-rose-gold/10 border border-rose-gold/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-rose-gold" />
              <span className="text-sm font-medium text-rose-gold tracking-wide uppercase">{t('services.hero.subtitle')}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">{t('services.hero.title')}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              {t('services.hero.description')}
            </p>
            <div className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <AGBNotice />
          </div>
        </div>
      </section>

      {/* Laser Section Header */}
      <section className="pt-16 pb-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t('services.laser.title')}</h2>
          <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {t('services.laser.subtitle')}
          </p>
          <Button asChild className="bg-gradient-hero text-white rounded-full px-8 hover:scale-105 transition-all duration-300">
            <Link to={withLang('/laser-haarentfernung-muenchen')}>
              {t('services.laser.learn-more')} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = service.reversed || index % 2 !== 0;

              return (
                <Link key={service.titleKey} to={withLang(service.link)} className="block group">
                  <div className="rounded-2xl overflow-hidden border border-border/40 bg-white shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${isReversed ? '' : ''}`}>
                      {/* Image - always on left on desktop, but reversed for odd items */}
                      <div className={`relative h-72 sm:h-80 lg:h-[420px] overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                        <img
                          src={service.imgSrc}
                          alt={t(service.imgAlt)}
                          width={service.imgW}
                          height={service.imgH}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-${isReversed ? 'l' : 'r'} from-black/30 via-black/10 to-transparent`}></div>
                        <div className={`absolute top-5 ${isReversed ? 'right-5' : 'left-5'}`}>
                          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 shadow-lg">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-8 lg:p-10 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 group-hover:text-rose-gold transition-colors duration-300">{t(service.titleKey)}</h3>
                        <p className="text-muted-foreground mb-5 leading-relaxed">
                          {t(service.descKey)}
                        </p>

                        {service.benefits && (
                          <div className="mb-5">
                            <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wide">{t(service.benefits.titleKey)}</h4>
                            <ul className="space-y-1.5">
                              {service.benefits.items.map((itemKey) => (
                                <li key={itemKey} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="w-3.5 h-3.5 text-rose-gold flex-shrink-0 mt-0.5" />
                                  <span>{t(itemKey)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                          <Button className="bg-gradient-hero text-white rounded-full px-6 hover:scale-105 transition-all duration-300">
                            {t(service.learnMoreKey)} <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                          <Button variant="outline" asChild className="rounded-full px-6 border-primary/30 hover:border-primary">
                            <Link to={withLang(`/preis${service.priceAnchor}`)}>{t('services.motus.view-prices')}</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/10 to-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-gold/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t('services.why-us.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { key: 'experience' },
                { key: 'certified' },
                { key: 'individual' },
                { key: 'flexible' },
                { key: 'location', colSpan: true },
              ].map((item) => (
                <div
                  key={item.key}
                  className={`flex items-start gap-4 rounded-xl border border-border/40 bg-white/80 backdrop-blur-sm p-5 shadow-sm hover:shadow-card transition-all duration-300 ${item.colSpan ? 'md:col-span-2 max-w-xl mx-auto w-full' : ''}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-rose-gold to-rose-gold-dark flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`services.why-us.${item.key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Services Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">{t('services.all.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { to: '/laser-haarentfernung-muenchen', label: 'services.all.laser' },
                { to: '/redtouch-laser-muenchen', label: 'services.all.redtouch' },
                { to: '/icoone-laser-muenchen', label: 'services.all.icoone' },
                { to: '/manikuere-pedikuere-muenchen', label: 'services.all.nails' },
              ].map((link) => (
                <Link key={link.to} to={withLang(link.to)} className="group">
                  <div className="rounded-xl border border-border/50 bg-gradient-to-br from-white to-accent/10 p-5 hover:shadow-elegant hover:-translate-y-1 transition-all duration-400">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium text-primary group-hover:text-rose-gold transition-colors">{t(link.label)}</span>
                      <ArrowRight className="w-4 h-4 text-rose-gold transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-rose-gold-dark/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t('services.cta.title')}</h2>
          <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mb-6"></div>
          <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary border-none shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-full px-8"
              onClick={() => showBookingWidget()}
            >
              {t('services.cta.book')}
            </Button>
            <a
              href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-14 h-14 bg-white/15 border border-white/30 rounded-full hover:bg-white/25 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default Services;
