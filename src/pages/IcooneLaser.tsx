import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, Target, Clock, Shield, Star, Instagram, CheckCircle } from 'lucide-react';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { showBookingWidget } from '@/lib/altegioWidget';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const IcooneLaser = () => {
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

  const benefitsRef = useScrollReveal();
  const whatIsRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const professionalRef = useScrollReveal();
  const relatedServicesRef = useScrollReveal();

  const jsonLd = useMemo(() => {
    const baseUrl = 'https://www.munchen-beauty.de';
    const isRu = currentLang === 'ru';
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${baseUrl}/icoone-laser-muenchen#service`,
          mainEntityOfPage: `${baseUrl}/${currentLang}/icoone-laser-muenchen`,
          name: isRu
            ? 'Icoone® Laser Мюнхен — соединительная ткань и кожа'
            : 'Icoone® Laser München – Bindegewebe & Hautbild',
          serviceType: isRu ? 'Процедуры для тела и лица' : 'Körper- und Gesichtsbehandlung',
          provider: {
            '@type': 'BeautySalon',
            '@id': `${baseUrl}#business`,
            name: 'Yuliia Cheporska Studio'
          },
          description: isRu
            ? 'Инновационная процедура Icoone® Laser в Мюнхене-Хайдхаузен для укрепления соединительной ткани, уменьшения целлюлита и улучшения состояния кожи.'
            : 'Innovative Icoone® Laser Behandlung in München-Haidhausen zur Straffung des Bindegewebes, Reduktion von Cellulite und Verbesserung des Hautbildes.',
          inLanguage: isRu ? 'ru' : 'de',
          image: `${baseUrl}/52.png`,
          areaServed: {
            '@type': 'City',
            name: 'München'
          },
          brand: [
            { '@type': 'Brand', name: 'icoone®' },
            { '@type': 'Brand', name: 'DEKA' }
          ],
          offers: {
            '@type': 'Offer',
            url: `${baseUrl}/${currentLang}/preise`,
            priceCurrency: 'EUR',
            description: isRu
              ? 'Цены на Icoone процедуры варьируются в зависимости от продолжительности и зоны обработки.'
              : 'Preise für Icoone Behandlungen variieren je nach Behandlungsdauer und Areal.',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'BeautySalon',
              name: 'Yuliia Cheporska Studio'
            }
          }
        },
        {
          '@type': 'HowTo',
          name: isRu ? 'Как проходит процедура Icoone®' : 'Ablauf Ihrer Icoone® Behandlung',
          inLanguage: isRu ? 'ru' : 'de',
          step: [
            {
              '@type': 'HowToStep',
              name: isRu ? 'Консультация' : 'Beratungsgespräch',
              text: isRu
                ? 'Индивидуальный анализ ваших целей: подтяжка кожи или уменьшение целлюлита.'
                : 'Individuelle Analyse Ihrer Ziele, wie Hautstraffung oder Cellulite-Reduktion.'
            },
            {
              '@type': 'HowToStep',
              name: isRu ? 'Процедура' : 'Behandlungsphase',
              text: isRu
                ? 'Применение технологии icoone® Roboderm® для мягкой глубокой микростимуляции.'
                : 'Einsatz der icoone® Roboderm®-Technologie für eine sanfte, tiefenwirksame Mikrostimulation.'
            },
            {
              '@type': 'HowToStep',
              name: isRu ? 'Результат' : 'Ergebnis',
              text: isRu
                ? 'Улучшенный лимфодренаж и заметно более упругая кожа уже после нескольких сеансов.'
                : 'Verbesserte Lymphdrainage und ein sichtbar strafferes Hautbild bereits nach wenigen Sitzungen.'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          inLanguage: isRu ? 'ru' : 'de',
          mainEntity: [
            {
              '@type': 'Question',
              name: isRu ? 'Как работает icoone®?' : 'Wie funktioniert icoone®?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Технология Roboderm® от icoone® создаёт миллионы микростимуляций на поверхности кожи с помощью микростимуляторов. Это активирует клеточный обмен и стимулирует выработку коллагена и эластина.'
                  : 'Die Roboderm®-Technologie von icoone® erzeugt durch Mikrostimulatoren Millionen von Mikro-Stimulationen auf der Hautoberfläche. Dies aktiviert den Zellstoffwechsel und regt die Produktion von Kollagen und Elastin an.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'При каких проблемах помогает icoone®?' : 'Gegen welche Probleme hilft icoone®?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'icoone® особенно эффективен при целлюлите, дряблой соединительной ткани, локальных жировых отложениях, лимфатических отёках, а также для омоложения кожи.'
                  : 'icoone® ist besonders effektiv bei Cellulite, schlaffem Bindegewebe, lokalen Fettansammlungen, Lymphödemen sowie zur Hautverjüngung.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Сколько процедур необходимо?' : 'Wie viele Behandlungen sind nötig?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Для оптимальных результатов мы рекомендуем курс из 5-10 процедур, в идеале 1-2 раза в неделю.'
                  : 'Für optimale Ergebnisse empfehlen wir eine Kur von 5 bis 10 Behandlungen, idealerweise 1-2 Mal pro Woche.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Процедура болезненна?' : 'Ist die Behandlung schmerzhaft?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Нет, наоборот. Процедура воспринимается как очень приятная и расслабляющая.'
                  : 'Nein, im Gegenteil. Die Behandlung wird als sehr angenehm und entspannend empfunden.'
              }
            }
          ]
        }
      ]
    };
  }, [currentLang]);
  const benefits = [
    {
      icon: Target,
      title: t('icoone.benefits.bodycontouring.title'),
      description: t('icoone.benefits.bodycontouring.description')
    },
    {
      icon: Sparkles,
      title: t('icoone.benefits.tightening.title'),
      description: t('icoone.benefits.tightening.description')
    },
    {
      icon: Heart,
      title: t('icoone.benefits.cellulite.title'),
      description: t('icoone.benefits.cellulite.description')
    },
    {
      icon: Shield,
      title: t('icoone.benefits.lymphdrainage.title'),
      description: t('icoone.benefits.lymphdrainage.description')
    }
  ];

  const treatmentAreas = [
    t('icoone.areas.abdomen'),
    t('icoone.areas.thighs'),
    t('icoone.areas.arms'),
    t('icoone.areas.flanks'),
    t('icoone.areas.back'),
    t('icoone.areas.decollete')
  ];

  const processSteps = [
    {
      step: 1,
      title: t('icoone.process.step1.title'),
      description: t('icoone.process.step1.description')
    },
    {
      step: 2,
      title: t('icoone.process.step2.title'),
      description: t('icoone.process.step2.description')
    },
    {
      step: 3,
      title: t('icoone.process.step3.title'),
      description: t('icoone.process.step3.description')
    },
    {
      step: 4,
      title: t('icoone.process.step4.title'),
      description: t('icoone.process.step4.description')
    }
  ];

  return (
    <>
      <PageHelmet />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
    <div className="min-h-screen pt-16">

      <section
        className="relative min-h-[50vh] md:min-h-[55vh] lg:h-[65vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 animate-hero-zoom" style={{ backgroundImage: 'url(/52.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(15_45%_65%/0.12),transparent_60%)]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-8 md:pt-0">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 hero-stagger-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
            <span className="text-xs font-medium text-white/90 tracking-[0.2em] uppercase">Icoone Laser</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] hero-stagger-2">
            {t('icoone.hero.title')}
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light mb-3 hero-stagger-3">
            {t('icoone.hero.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8 hero-stagger-3">
            {t('icoone.hero.description')}
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
              {t('icoone.hero.button.consultation')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm border border-white/50 text-white hover:bg-white/30 hover:border-white transition-all duration-300 rounded-full px-8 shadow-lg"
              asChild
            >
              <Link to={withLang("/preis#icoone")}>
                {t('icoone.hero.button.pricing')}
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
              {t('icoone.benefits.section.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">{t('icoone.benefits.card1.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('icoone.benefits.card1.description')}
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
                      <h3 className="font-bold text-primary mb-2">{t('icoone.benefits.card2.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('icoone.benefits.card2.description')}
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
                      <h3 className="font-bold text-primary mb-2">{t('icoone.benefits.card3.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('icoone.benefits.card3.description')}
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
                      <h3 className="font-bold text-primary mb-2">{t('icoone.benefits.card4.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('icoone.benefits.card4.description')}
                      </p>
                      </div>
                    </div>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
      </section>

      <section className="py-12 bg-background">
        <div ref={whatIsRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('icoone.what.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('icoone.what.subtitle')}
              </p>
              </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <img
                  src="/52.png"
                  alt={t('alt.icoone.device')}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/3.9.jpg"
                    alt={t('alt.icoone.room')}
                    width={853}
                    height={1280}
                    loading="lazy"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      transform: 'scale(0.85)',
                      objectPosition: 'center'
                    }}
                  />
                  <img
                    src="/3.10.jpg"
                    alt={t('alt.icoone.handpiece')}
                    width={853}
                    height={1280}
                    loading="lazy"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      transform: 'scale(0.85)',
                      objectPosition: 'center'
                    }}
                  />
                  </div>
                </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{t('icoone.what.microvacuum.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('icoone.what.microvacuum.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{t('icoone.what.laser.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('icoone.what.laser.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{t('icoone.what.painless.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('icoone.what.painless.description')}
                    </p>
                  </CardContent>
                </Card>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div ref={galleryRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('icoone.gallery.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('icoone.gallery.subtitle')}</p>
              </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { src: '/3.1.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlungsergebnis 1' },
                { src: '/3.2.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlungsergebnis 2' },
                { src: '/3.3.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Körperkonturierung' },
                { src: '/3.4.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Hautstraffung' },
                { src: '/3.5.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Cellulite-Behandlung' },
                { src: '/3.7.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Vorher-Nachher' },
                { src: '/3.8.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlungsablauf' },
                { src: '/3.9.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Studio Ansicht' },
                { src: '/3.10.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Gerät Detail' },
                { src: '/3.11.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Anwendung' },
                { src: '/3.13.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Ergebnis Detail' },
                { src: '/3.14.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlung Detail' }
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
          </div>
      </section>

      <section className="py-12 bg-accent/10">
        <div ref={professionalRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">{t('icoone.professional.title')}</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('icoone.professional.description')}
            </p>
            </div>
          </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div ref={relatedServicesRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8">{t('crosslink.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to={withLang("/laser-haarentfernung-muenchen")} className="group">
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary mb-2 group-hover:text-rose-gold transition-colors">{t('crosslink.laser')}</h3>
                    <p className="text-sm text-muted-foreground">{t('crosslink.laser.desc')}</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to={withLang("/redtouch-laser-muenchen")} className="group">
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary mb-2 group-hover:text-rose-gold transition-colors">{t('crosslink.redtouch')}</h3>
                    <p className="text-sm text-muted-foreground">{t('crosslink.redtouch.desc')}</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to={withLang("/manikuere-pedikuere-muenchen")} className="group">
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary mb-2 group-hover:text-rose-gold transition-colors">{t('crosslink.nails')}</h3>
                    <p className="text-sm text-muted-foreground">{t('crosslink.nails.desc')}</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default IcooneLaser;
