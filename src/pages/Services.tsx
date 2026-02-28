import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Zap, Heart, Hand, Waves, CheckCircle, Sparkles, Instagram, Star, Shield, Clock, MapPin, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PageHelmet } from '@/components/PageHelmet';
import { setJsonLd } from '@/seo/seo';
import { useLanguage } from '@/contexts/LanguageContext';
import AGBNotice from '@/components/AGBNotice';
import { showBookingWidget } from '@/lib/altegioWidget';

/* ──────────────── Scroll-triggered animation hook ──────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}



const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  /* Section refs for scroll animations */
  const heroSection = useInView(0.1);
  const laserHeader = useInView(0.2);
  const whyUsSection = useInView(0.1);
  const quickLinksSection = useInView(0.2);
  const ctaSection = useInView(0.15);
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
      imgSrc: '/50.png',
      imgAlt: 'alt.services.alexandrit',
      imgW: 1536,
      imgH: 1024,
      icon: Zap,
      link: '/laser-haarentfernung-muenchen',
      priceAnchor: '#alexandrit',
      learnMoreKey: 'services.motus.learn-more',
    },
    {
      titleKey: 'services.diode.title',
      descKey: 'services.diode.description',
      imgSrc: '/51.png',
      imgAlt: 'alt.services.diode',
      imgW: 1536,
      imgH: 1024,
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
      imgSrc: '/52.png',
      imgAlt: 'alt.services.icoone',
      imgW: 1536,
      imgH: 1024,
      icon: Heart,
      link: '/icoone-laser-muenchen',
      priceAnchor: '#icoone',
      learnMoreKey: 'common.learn-more',
    },
    {
      titleKey: 'services.redtouch.title',
      descKey: 'services.redtouch.description',
      imgSrc: '/53.png',
      imgAlt: 'alt.services.redtouch',
      imgW: 1536,
      imgH: 1024,
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
    },
  ];

  const whyUsItems = [
    { key: 'experience', icon: Award },
    { key: 'certified', icon: Shield },
    { key: 'individual', icon: Star },
    { key: 'flexible', icon: Clock },
    { key: 'location', icon: MapPin, colSpan: true },
  ];

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16">

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section
        ref={heroSection.ref}
        className="relative min-h-[50vh] md:min-h-[55vh] lg:h-[65vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background image with slow cinematic zoom */}
        <div
          className="absolute inset-0 animate-hero-zoom"
          style={{ backgroundImage: 'url(/20.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

        {/* Overlay: dark top → rose-gold glow → white bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(15_45%_65%/0.12),transparent_60%)]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 hero-stagger-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
            <span className="text-xs font-medium text-white/90 tracking-[0.2em] uppercase">{t('services.hero.subtitle')}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] hero-stagger-2">
            {t('services.hero.title')}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-8 hero-stagger-3">
            {t('services.hero.description')}
          </p>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-3 hero-stagger-4">
            <div className="h-px bg-gradient-to-r from-transparent to-white/40 animate-line-expand"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-white/40"></div>
            <div className="h-px bg-gradient-to-l from-transparent to-white/40 animate-line-expand"></div>
          </div>
        </div>
      </section>

      {/* AGB Notice */}
      <section className="bg-white pt-6">
        <div className="max-w-3xl mx-auto px-4">
          <AGBNotice />
        </div>
      </section>

      {/* ═══════════════ LASER SECTION HEADER ═══════════════ */}
      <section ref={laserHeader.ref} className="pt-20 pb-6 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 transition-all duration-800 ${laserHeader.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('services.laser.title')}
          </h2>
          <div className={`mx-auto h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mb-4 transition-all duration-1000 delay-200 ${laserHeader.isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-800 delay-300 ${laserHeader.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {t('services.laser.subtitle')}
          </p>
          <div className={`transition-all duration-700 delay-500 ${laserHeader.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Button asChild className="bg-gradient-hero text-white rounded-full px-8 hover:scale-105 hover:shadow-rose transition-all duration-300">
              <Link to={withLang('/laser-haarentfernung-muenchen')}>
                {t('services.laser.learn-more')} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICE CARDS ═══════════════ */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            {services.map((service, index) => (
              <ServiceCard
                key={service.titleKey}
                service={service}
                index={index}
                withLang={withLang}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY US SECTION ═══════════════ */}
      <section ref={whyUsSection.ref} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/15 to-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-gold/5 rounded-full blur-3xl animate-float-2"></div>
        {/* Decorative dots */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-rose-gold/20 rounded-full animate-float-3 hidden md:block"></div>
        <div className="absolute bottom-20 right-[10%] w-3 h-3 bg-primary/10 rounded-full animate-float-1 hidden md:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 transition-all duration-800 ${whyUsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {t('services.why-us.title')}
              </h2>
              <div className={`mx-auto h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent transition-all duration-1000 delay-200 ${whyUsSection.isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyUsItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.key}
                    className={`group flex items-start gap-4 rounded-2xl border border-border/40 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 ${item.colSpan ? 'md:col-span-2 max-w-xl mx-auto w-full' : ''} ${whyUsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${300 + i * 120}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-rose-gold to-rose-gold-dark flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-rose transition-all duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1">
                      {t(`services.why-us.${item.key}`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ QUICK LINKS ═══════════════ */}
      <section ref={quickLinksSection.ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 transition-all duration-800 ${quickLinksSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {t('services.all.title')}
              </h2>
              <div className={`mx-auto h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent transition-all duration-1000 delay-200 ${quickLinksSection.isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { to: '/laser-haarentfernung-muenchen', label: 'services.all.laser', icon: Zap },
                { to: '/redtouch-laser-muenchen', label: 'services.all.redtouch', icon: Waves },
                { to: '/icoone-laser-muenchen', label: 'services.all.icoone', icon: Heart },
                { to: '/manikuere-pedikuere-muenchen', label: 'services.all.nails', icon: Hand },
              ].map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={withLang(link.to)}
                    className={`group block transition-all duration-700 ${quickLinksSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-white to-accent/10 p-6 hover:shadow-elegant hover:-translate-y-2 transition-all duration-400 overflow-hidden">
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/0 to-primary/0 group-hover:from-rose-gold/5 group-hover:to-primary/5 transition-all duration-500"></div>
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-rose-gold/10 flex items-center justify-center group-hover:bg-rose-gold/20 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-4 h-4 text-rose-gold" />
                          </div>
                          <span className="text-base font-medium text-primary group-hover:text-rose-gold transition-colors duration-300">{t(link.label)}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-rose-gold transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section ref={ctaSection.ref} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-rose-gold-dark/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_40%)]"></div>

        {/* Animated floating shapes */}
        <div className="absolute top-10 left-[10%] w-24 h-24 border border-white/10 rounded-full animate-float-1 hidden md:block"></div>
        <div className="absolute bottom-10 right-[10%] w-16 h-16 border border-white/10 rounded-full animate-float-3 hidden md:block"></div>
        <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-white/20 rounded-full animate-float-5 hidden md:block"></div>
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-white/15 rounded-full animate-float-4 hidden md:block"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${ctaSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('services.cta.title')}
          </h2>
          <div className={`mx-auto h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mb-6 transition-all duration-1200 delay-200 ${ctaSection.isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
          <p className={`text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${ctaSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {t('services.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${ctaSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button
              size="lg"
              className="bg-white text-primary border-none shadow-xl hover:bg-white/90 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-full px-8"
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

/* ═══════════════ SERVICE CARD COMPONENT ═══════════════ */
function ServiceCard({
  service,
  index,
  withLang,
  t,
}: {
  service: {
    titleKey: string;
    descKey: string;
    imgSrc: string;
    imgAlt: string;
    imgW: number;
    imgH: number;
    icon: React.ElementType;
    link: string;
    priceAnchor: string;
    learnMoreKey: string;
    reversed?: boolean;
    benefits?: { titleKey: string; items: string[] };
  };
  index: number;
  withLang: (path: string) => string;
  t: (key: string) => string;
}) {
  const { ref, isVisible } = useInView(0.12);
  const [imageLoaded, setImageLoaded] = useState(false);
  const Icon = service.icon;
  const isReversed = service.reversed || index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${100}ms` }}
    >
      <Link to={withLang(service.link)} className="block group">
        <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-white shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
          {/* Animated gradient border on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(15 45% 65% / 0.15), hsl(280 50% 25% / 0.1))', zIndex: 0 }}></div>

          <div className={`relative grid grid-cols-1 lg:grid-cols-2`}>
            {/* Image side */}
            <div className={`relative overflow-hidden ${isReversed ? 'lg:order-2' : ''} h-72 sm:h-80 lg:h-auto lg:min-h-[400px]`}>
              {/* Skeleton while loading */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 animate-pulse"></div>
              )}
              <img
                src={service.imgSrc}
                alt={t(service.imgAlt)}
                width={service.imgW}
                height={service.imgH}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-${isReversed ? 'l' : 'r'} from-black/25 via-black/5 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>

              {/* Floating icon badge */}
              <div className={`absolute top-5 ${isReversed ? 'right-5' : 'left-5'}`}>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-full shadow-lg group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Service number badge */}
              <div className={`absolute bottom-5 ${isReversed ? 'left-5' : 'right-5'}`}>
                <div className="bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                  <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
                    {String(index + 1).padStart(2, '0')} / {String(5).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className={`p-8 lg:p-10 xl:p-12 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''} relative z-10`}>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 group-hover:text-rose-gold transition-colors duration-300">
                {t(service.titleKey)}
              </h3>

              <div className="w-12 h-0.5 bg-gradient-to-r from-rose-gold to-rose-gold/30 mb-5 group-hover:w-20 transition-all duration-500"></div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t(service.descKey)}
              </p>

              {service.benefits && (
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">{t(service.benefits.titleKey)}</h4>
                  <ul className="space-y-2">
                    {service.benefits.items.map((itemKey, i) => (
                      <li
                        key={itemKey}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-gold/10 flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3 h-3 text-rose-gold" />
                        </div>
                        <span>{t(itemKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Button className="bg-gradient-hero text-white rounded-full px-6 hover:scale-105 hover:shadow-rose transition-all duration-300 ripple-effect">
                  {t(service.learnMoreKey)} <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
                <Button variant="outline" asChild className="rounded-full px-6 border-primary/30 hover:border-rose-gold hover:text-rose-gold hover:bg-rose-gold/5 transition-all duration-300">
                  <Link to={withLang(`/preis${service.priceAnchor}`)}>{t('services.motus.view-prices')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Services;
