import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Target,
  Shield,
  Star,
  CheckCircle,
  Microscope,
  Activity,
  Monitor,
  Sparkles,
  Award,
  Clock,
  Instagram,
  Waves
} from 'lucide-react';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { showBookingWidget } from '@/lib/altegioWidget';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const RedTouchProService = () => {
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

  const jsonLd = useMemo(() => {
    const baseUrl = 'https://www.munchen-beauty.de';
    const isRu = currentLang === 'ru';
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${baseUrl}/redtouch-laser-muenchen#service`,
          mainEntityOfPage: `${baseUrl}/${currentLang}/redtouch-laser-muenchen`,
          name: isRu
            ? 'RedTouch 675 нм Мюнхен — кожа и пигментация'
            : 'RedTouch 675 nm München – Hautbild & Pigment',
          serviceType: isRu ? 'Лазерная терапия кожи' : 'Laser-Hautbehandlung',
          provider: {
            '@type': 'BeautySalon',
            '@id': `${baseUrl}#business`,
            name: 'Yuliia Cheporska Studio'
          },
          description: isRu
            ? 'Специализированная лазерная процедура RedTouch (675 нм) в Мюнхене для стимуляции коллагена, омоложения кожи и лечения пигментных пятен.'
            : 'Spezialisierte RedTouch Laserbehandlung (675 nm) in München zur Kollagenstimulation, Hautverjüngung und Behandlung von Pigmentflecken.',
          inLanguage: isRu ? 'ru' : 'de',
          image: `${baseUrl}/deka2.4.png`,
          areaServed: {
            '@type': 'City',
            name: 'München'
          },
          brand: {
            '@type': 'Brand',
            name: 'DEKA'
          },
          offers: {
            '@type': 'Offer',
            url: `${baseUrl}/${currentLang}/preise`,
            priceCurrency: 'EUR',
            description: isRu
              ? 'Цены на RedTouch процедуры варьируются в зависимости от показаний и зоны обработки.'
              : 'Preise für RedTouch Behandlungen variieren je nach Indikation und Areal.',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'BeautySalon',
              name: 'Yuliia Cheporska Studio'
            }
          }
        },
        {
          '@type': 'HowTo',
          name: isRu ? 'Как проходит процедура RedTouch' : 'Der Ablauf Ihrer RedTouch Behandlung',
          inLanguage: isRu ? 'ru' : 'de',
          step: [
            {
              '@type': 'HowToStep',
              name: isRu ? 'Анализ кожи' : 'Hautanalyse',
              text: isRu
                ? 'Определение целей процедуры: уменьшение морщин или коррекция пигментации.'
                : 'Bestimmung der Behandlungsziele wie Faltenreduktion oder Pigmentausgleich.'
            },
            {
              '@type': 'HowToStep',
              name: isRu ? 'Лазерная процедура' : 'Laser-Anwendung',
              text: isRu
                ? 'Целенаправленная стимуляция коллагеновых волокон с помощью длины волны 675 нм лазера RedTouch.'
                : 'Gezielte Stimulation der Kollagenfasern durch die 675 nm Wellenlänge des RedTouch Lasers.'
            },
            {
              '@type': 'HowToStep',
              name: isRu ? 'Уход после процедуры' : 'Nachsorge',
              text: isRu
                ? 'Нанесение успокаивающего ухода и обсуждение защиты от солнца для оптимальных результатов.'
                : 'Auftragen beruhigender Pflege und Besprechung des Lichtschutzes für optimale Ergebnisse.'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          inLanguage: isRu ? 'ru' : 'de',
          mainEntity: [
            {
              '@type': 'Question',
              name: isRu ? 'Что делает лазер RedTouch?' : 'Was bewirkt der RedTouch Laser?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'RedTouch — первый лазер, целенаправленно воздействующий на коллагеновые волокна (длина волны 675 нм). Он стимулирует выработку нового коллагена, подтягивает ткани и улучшает состояние кожи при пигментации и покраснениях.'
                  : 'Der RedTouch ist der erste Laser, der gezielt auf die Kollagenfasern (Wellenlänge 675 nm) wirkt. Er regt die Neubildung von Kollagen an, strafft das Gewebe und verbessert das Hautbild bei Pigmentierungen und Rötungen.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Процедура болезненна?' : 'Ist die Behandlung schmerzhaft?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Благодаря встроенной системе охлаждения процедура очень комфортна. Большинство пациентов ощущают лишь приятное тепло.'
                  : 'Die Behandlung ist dank integrierter Kühlung sehr komfortabel. Die meisten Patienten spüren lediglich eine angenehme Wärme.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Сколько сеансов рекомендуется?' : 'Wie viele Sitzungen werden empfohlen?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Для оптимального результата омоложения кожи мы рекомендуем от 3 до 5 сеансов с интервалом в 4 недели.'
                  : 'Für ein optimales Ergebnis zur Hautverjüngung empfehlen wir ca. 3 bis 5 Sitzungen im Abstand von 4 Wochen.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Есть ли период восстановления?' : 'Gibt es Ausfallzeiten?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Периода восстановления практически нет. Лёгкое покраснение сразу после процедуры обычно проходит в течение нескольких часов.'
                  : 'Es gibt praktisch keine Ausfallzeiten. Eine leichte Rötung unmittelbar nach der Behandlung klingt meist innerhalb weniger Stunden ab.'
              }
            }
          ]
        }
      ]
    };
  }, [currentLang]);
  const deviceFeatures = [
    {
      icon: Sparkles,
      title: t('redtouch.device.feature1.title'),
      description: t('redtouch.device.feature1.desc'),
      position: 'top-left'
    },
    {
      icon: Monitor,
      title: t('redtouch.device.feature2.title'),
      description: t('redtouch.device.feature2.desc'),
      position: 'top-right'
    },
    {
      icon: Award,
      title: t('redtouch.device.feature3.title'),
      description: t('redtouch.device.feature3.desc'),
      position: 'center-left'
    },
    {
      icon: Shield,
      title: t('redtouch.device.feature4.title'),
      description: t('redtouch.device.feature4.desc'),
      position: 'center-right'
    },
    {
      icon: Target,
      title: t('redtouch.device.feature5.title'),
      description: t('redtouch.device.feature5.desc'),
      position: 'bottom-left'
    },
    {
      icon: Activity,
      title: t('redtouch.device.feature6.title'),
      description: t('redtouch.device.feature6.desc'),
      position: 'bottom-right'
    }
  ];

  const benefits = [
    t('redtouch.technology.benefit1'),
    t('redtouch.technology.benefit2'),
    t('redtouch.technology.benefit3'),
    t('redtouch.technology.benefit4'),
    t('redtouch.technology.benefit5'),
    t('redtouch.technology.benefit6')
  ];

  const treatmentAreas = [
    t('redtouch.areas.area1'),
    t('redtouch.areas.area2'),
    t('redtouch.areas.area3'),
    t('redtouch.areas.area4'),
    t('redtouch.areas.area5'),
    t('redtouch.areas.area6')
  ];

  const benefitsRef = useScrollReveal({ threshold: 0.1 });
  const featuresRef = useScrollReveal({ threshold: 0.1 });
  const resultsRef = useScrollReveal({ threshold: 0.1 });
  const deviceFeaturesRef = useScrollReveal({ threshold: 0.1 });
  const areasRef = useScrollReveal({ threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.1 });
  const relatedRef = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <PageHelmet />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] md:min-h-[55vh] lg:h-[65vh] flex items-start justify-center overflow-hidden"
      >
        <div className="absolute inset-0 animate-hero-zoom" style={{ backgroundImage: 'url(/55.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(15_45%_65%/0.12),transparent_60%)]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-[10vh] pb-12 md:pt-[10vh] md:pb-0">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 hero-stagger-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
            <span className="text-xs font-medium text-white/90 tracking-[0.2em] uppercase">RedTouch 675 nm</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] hero-stagger-2">
            {t('redtouch.hero.title')}
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light mb-3 hero-stagger-3">
            {t('redtouch.hero.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8 hero-stagger-3">
            {t('redtouch.hero.description')}
          </p>

          <div className="flex items-center justify-center gap-3 mb-8 hero-stagger-4">
            <div className="animate-line-expand h-px bg-gradient-to-r from-transparent to-white/40"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-white/40"></div>
            <div className="animate-line-expand h-px bg-gradient-to-l from-transparent to-white/40"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center hero-stagger-5">
            <Button
              size="lg"
              className="bg-white/90 backdrop-blur-sm text-primary border-none shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 rounded-full px-8"
              onClick={() => showBookingWidget()}
            >
              {t('redtouch.hero.button.consultation')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/90 backdrop-blur-sm border border-white/50 text-black hover:bg-white transition-all duration-300 rounded-full px-8 shadow-lg"
              asChild
            >
              <Link to={withLang("/preis#redtouchpro")}>
                {t('service.button.prices')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div ref={benefitsRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">
              {t('redtouch.benefits.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">{t('redtouch.benefits.wavelength.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('redtouch.benefits.wavelength.desc')}
                      </p>
                      </div>
                    </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">{t('redtouch.benefits.downtime.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('redtouch.benefits.downtime.desc')}
                      </p>
                      </div>
                    </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">{t('redtouch.benefits.skintypes.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('redtouch.benefits.skintypes.desc')}
                      </p>
                      </div>
                    </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">{t('redtouch.benefits.location.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('redtouch.benefits.location.desc')}
                      </p>
                      </div>
                    </div>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 bg-background">
        <div ref={featuresRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('redtouch.features.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('redtouch.features.subtitle')}
            </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <img
                  src="/deka2.4.png"
                  alt={t('alt.redtouch.logo')}
                  width={1080}
                  height={317}
                  loading="lazy"
                  className="h-20 w-auto"
                />
                </div>
              <img
                src="/53.png"
                alt={t('alt.redtouch.device')}
                width={525}
                height={1200}
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
              </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-6">
                {t('redtouch.technology.title')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('redtouch.technology.description')}
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-rose-gold mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
      </section>

      {/* Before/After Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-accent/10 to-white">
        <div ref={resultsRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('redtouch.results.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('redtouch.results.subtitle')}
            </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { src: '/r1.jpg', alt: t('redtouch.results.alt1') },
              { src: '/r3.jpg', alt: t('redtouch.results.alt2') },
              { src: '/r4.jpg', alt: t('redtouch.results.alt3') },
              { src: '/r5.jpg', alt: t('redtouch.results.alt4') },
              { src: '/r7.jpg', alt: t('redtouch.results.alt5') }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            ))}
            </div>
          </div>
      </section>

      {/* Device Features */}
      <section className="py-16 bg-white">
        <div ref={deviceFeaturesRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('redtouch.device.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('redtouch.device.subtitle')}
            </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-rose-gold" />
                    </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
      </section>

      {/* Behandlungsgebiete */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div ref={areasRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('redtouch.areas.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('redtouch.areas.subtitle')}
              </p>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">{t('redtouch.areas.main')}</h3>
                <ul className="space-y-4">
                  {treatmentAreas.map((area, index) => (
                    <li key={index} className="flex items-center">
                      <Target className="w-5 h-5 text-rose-gold mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
                </div>
              <div>
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">{t('redtouch.treatment.title')}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• {t('redtouch.treatment.duration')}</li>
                    <li>• {t('redtouch.treatment.sessions')}</li>
                    <li>• {t('redtouch.treatment.interval')}</li>
                    <li>• {t('redtouch.treatment.downtime')}</li>
                    <li>• {t('redtouch.treatment.return')}</li>
                  </ul>
                </Card>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div ref={ctaRef} className="container mx-auto px-4 text-center reveal reveal-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {t('redtouch.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('redtouch.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-gold to-rose-gold-dark text-white hover:shadow-xl hover:scale-105 transition-all"
              onClick={() => showBookingWidget()}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('redtouch.cta.book')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary border-white hover:bg-white/90 shadow-lg"
              asChild
            >
              <Link to={withLang("/preis#redtouchpro")}>
                {t('redtouch.cta.prices')}
              </Link>
            </Button>
            </div>
          </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div ref={relatedRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8">{t('crosslink.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { to: '/laser-haarentfernung-muenchen', title: 'crosslink.laser', desc: 'crosslink.laser.desc', img: '/50.png' },
                { to: '/icoone-laser-muenchen', title: 'crosslink.icoone', desc: 'crosslink.icoone.desc', img: '/52.png' },
                { to: '/manikuere-pedikuere-muenchen', title: 'crosslink.nails', desc: 'crosslink.nails.desc', img: '/7.jpg' },
              ].map((link) => (
                <Link key={link.to} to={withLang(link.to)} className="group">
                  <Card className="h-full overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <div className="h-40 overflow-hidden">
                      <img src={link.img} alt={t(link.title)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-primary mb-2 group-hover:text-rose-gold transition-colors">{t(link.title)}</h3>
                      <p className="text-sm text-muted-foreground">{t(link.desc)}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default RedTouchProService;