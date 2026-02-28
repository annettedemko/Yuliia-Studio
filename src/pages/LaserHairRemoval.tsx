import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Train, Car, Clock, Shield, Award, Star, Instagram, CheckCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHelmet } from '@/components/PageHelmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { showBookingWidget } from '@/lib/altegioWidget';
import ConsentMap from '@/components/ConsentMap';
import { useScrollReveal } from '@/hooks/useScrollReveal';
// Изображения загружаются из папки public

const LaserHairRemoval = () => {
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

  const techRef = useScrollReveal({ threshold: 0.1 });
  const phasesRef = useScrollReveal({ threshold: 0.1 });
  const processRef = useScrollReveal({ threshold: 0.1 });
  const whyUsRef = useScrollReveal({ threshold: 0.1 });
  const faqRef = useScrollReveal({ threshold: 0.1 });
  const testimonialsRef = useScrollReveal({ threshold: 0.1 });
  const comparisonRef = useScrollReveal({ threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.1 });
  const mapRef = useScrollReveal({ threshold: 0.1 });

  const jsonLd = useMemo(() => {
    const baseUrl = 'https://www.munchen-beauty.de';
    const isRu = currentLang === 'ru';
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${baseUrl}/laser-haarentfernung-muenchen#service`,
          mainEntityOfPage: `${baseUrl}/${currentLang}/laser-haarentfernung-muenchen`,
          name: isRu
            ? 'Лазерная эпиляция в Мюнхене — навсегда'
            : 'Dauerhafte Laser-Haarentfernung München',
          serviceType: isRu ? 'Удаление волос' : 'Haarentfernung',
          provider: {
            '@type': 'BeautySalon',
            '@id': `${baseUrl}#business`,
            name: 'Yuliia Cheporska Studio'
          },
          description: isRu
            ? 'Профессиональная лазерная эпиляция александритовым и диодным лазером в салоне Yuliia Cheporska Studio, Мюнхен-Хайдхаузен.'
            : 'Professionelle Laser-Haarentfernung mit Alexandrit- und Diodenlaser-Technologie im Yuliia Cheporska Studio München-Haidhausen.',
          inLanguage: isRu ? 'ru' : 'de',
          image: `${baseUrl}/50.png`,
          areaServed: {
            '@type': 'City',
            name: 'München'
          },
          brand: [
            { '@type': 'Brand', name: 'DEKA' },
            { '@type': 'Brand', name: 'Quanta System' },
            { '@type': 'Brand', name: 'mTech Laser' }
          ],
          offers: {
            '@type': 'Offer',
            url: `${baseUrl}/${currentLang}/preise`,
            priceCurrency: 'EUR',
            description: isRu
              ? 'Цены варьируются в зависимости от зоны обработки (лицо, ноги, спина и т.д.).'
              : 'Preise variieren je nach Behandlungsareal (z.B. Gesicht, Beine, Rücken).',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'BeautySalon',
              name: 'Yuliia Cheporska Studio'
            }
          }
        },
        {
          '@type': 'HowTo',
          name: isRu ? 'Как проходит лазерная процедура' : 'Ablauf Ihrer Laser-Behandlung',
          inLanguage: isRu ? 'ru' : 'de',
          step: [
            {
              '@type': 'HowToStep',
              name: isRu ? 'Консультация' : 'Beratung',
              text: isRu
                ? 'Индивидуальный анализ типа кожи для выбора между александритовым или диодным лазером.'
                : 'Individuelle Analyse Ihres Hauttyps für die Wahl zwischen Alexandrit- oder Diodenlaser.'
            },
            {
              '@type': 'HowToStep',
              name: isRu ? 'Подготовка' : 'Vorbereitung',
              text: isRu
                ? 'Зона обработки очищается; лазер mTech настраивается под структуру ваших волос.'
                : 'Das Areal wird gereinigt; der mTech Laser wird auf Ihre Haarstruktur eingestellt.'
            },
            {
              '@type': 'HowToStep',
              name: isRu ? 'Лазерная процедура' : 'Laser-Behandlung',
              text: isRu
                ? 'Безопасное проведение эпиляции со встроенным охлаждением.'
                : 'Sichere Durchführung der Haarentfernung mit integrierter Kühlung.'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          inLanguage: isRu ? 'ru' : 'de',
          mainEntity: [
            {
              '@type': 'Question',
              name: isRu ? 'Как работает лазерная эпиляция?' : 'Wie funktioniert die Laser-Haarentfernung?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Лазер излучает свет, который поглощается меланином в волосе и преобразуется в тепло. Это тепло разрушает волосяные фолликулы навсегда.'
                  : 'Der Laser gibt Licht ab, das vom Melanin im Haar absorbiert und in Wärme umgewandelt wird. Diese Wärme zerstört die Haarfollikel dauerhaft.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Процедура болезненна?' : 'Ist die Behandlung schmerzhaft?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Благодаря современной контактной системе охлаждения процедура практически безболезненна. Большинство клиентов ощущают лишь лёгкое покалывание.'
                  : 'Dank modernster Kontaktkühlung ist die Behandlung sehr schmerzarm. Die meisten Kunden empfinden nur ein leichtes Prickeln.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Сколько сеансов необходимо?' : 'Wie viele Sitzungen sind notwendig?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Как правило, необходимо от 6 до 10 сеансов, так как удалить можно только волосы в фазе роста.'
                  : 'In der Regel sind 6 bis 10 Sitzungen erforderlich, da nur Haare in der Wachstumsphase entfernt werden können.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Что нужно учесть до и после процедуры?' : 'Was muss ich vor und nach der Behandlung beachten?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Избегайте солнца и эпиляции за 4 недели до процедуры. Бритьё необходимо за 1-2 дня до сеанса.'
                  : 'Vermeiden Sie 4 Wochen vorher Sonne und Epilation. Rasieren ist 1-2 Tage vorher notwendig.'
              }
            }
          ]
        }
      ]
    };
  }, [currentLang]);

  const faqItems = [
    {
      question: t('laser.faq.q1'),
      answer: t('laser.faq.a1')
    },
    {
      question: t('laser.faq.q2'),
      answer: t('laser.faq.a2')
    },
    {
      question: t('laser.faq.q3'),
      answer: t('laser.faq.a3')
    },
    {
      question: t('laser.faq.q4'),
      answer: t('laser.faq.a4')
    },
    {
      question: t('laser.faq.q5'),
      answer: t('laser.faq.a5')
    }
  ];

  return (
    <>
      <PageHelmet />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}

        {/* Hero Section */}
      <section
        className="relative min-h-[50vh] md:min-h-[55vh] lg:h-[65vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 animate-hero-zoom" style={{ backgroundImage: 'url(/HERO3.1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(15_45%_65%/0.12),transparent_60%)]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-8 md:pt-0">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 hero-stagger-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
            <span className="text-xs font-medium text-white/90 tracking-[0.2em] uppercase">Laser-Haarentfernung</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] hero-stagger-2">
            {t('laser.hero.title')}
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light mb-3 hero-stagger-3">
            {t('laser.hero.tagline')}
          </p>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8 hero-stagger-3">
            {t('laser.hero.description')}
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
              {t('laser.hero.button')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm border border-white/50 text-white hover:bg-white/30 hover:border-white transition-all duration-300 rounded-full px-8 shadow-lg"
              asChild
            >
              <Link to={withLang("/preis#alexandrit")}>
                {t('service.button.prices')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div ref={techRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
          <div className="max-w-5xl mx-auto">
            {/* Premium section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-rose-gold/10 border border-rose-gold/20 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-4 h-4 text-rose-gold" />
                <span className="text-sm font-medium text-rose-gold tracking-wide uppercase">{t('laser.tech.subtitle')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{t('laser.tech.title')}</h2>
              <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>

            {/* Equal-height laser cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Alexandrit Laser */}
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src="/50.png"
                    alt={t('alt.laser.alexandrit')}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">{t('laser.alexandrit.title')}</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {t('laser.alexandrit.desc')}
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground mt-auto">
                    {['item1', 'item2', 'item3', 'item4'].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-rose-gold flex-shrink-0 mt-0.5" />
                        <span>{t(`laser.alexandrit.benefits.${item}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Diodenlaser */}
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src="/51.png"
                    alt={t('alt.laser.diode')}
                    width={561}
                    height={764}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">{t('laser.diode.title')}</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {t('laser.diode.desc')}
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground mt-auto">
                    {['item1', 'item2', 'item3', 'item4'].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-rose-gold flex-shrink-0 mt-0.5" />
                        <span>{t(`laser.diode.benefits.${item}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison Link */}
            <div className="text-center">
              <Link to={withLang("/alexandrit-gegen-diodenlaser")}>
                <Button variant="outline" size="lg" className="group/btn bg-primary/10 border-2 border-primary/80 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 w-full sm:w-auto rounded-full px-8">
                  <span className="font-semibold text-sm sm:text-base">{t('laser.comparison.button')}</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Multiple Sessions Section */}
      <section className="py-20 bg-white">
        <div ref={phasesRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{t('laser.sessions.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('laser.sessions.intro')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { num: '1', titleKey: 'laser.sessions.anagen.title', descKey: 'laser.sessions.anagen.desc' },
                { num: '2', titleKey: 'laser.sessions.catagen.title', descKey: 'laser.sessions.catagen.desc' },
                { num: '3', titleKey: 'laser.sessions.telogen.title', descKey: 'laser.sessions.telogen.desc' },
              ].map((phase) => (
                <div key={phase.num} className="group relative text-center rounded-2xl border border-border/50 bg-gradient-to-b from-white to-accent/20 p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                  <div className="relative mx-auto mb-5 w-16 h-16">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-gold/20 to-primary/20 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative w-full h-full rounded-full bg-white border border-rose-gold/30 flex items-center justify-center shadow-sm">
                      <span className="text-2xl font-bold bg-gradient-to-br from-primary to-rose-gold bg-clip-text text-transparent">{phase.num}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-primary mb-3 text-lg">{t(phase.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(phase.descKey)}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <div className="max-w-2xl mx-auto rounded-2xl border border-rose-gold/20 bg-gradient-to-br from-rose-gold/5 to-primary/5 p-8 shadow-card">
                <Zap className="w-6 h-6 text-rose-gold mx-auto mb-4" />
                <h4 className="font-bold text-primary mb-3 text-lg">{t('laser.sessions.plan.title')}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t('laser.sessions.plan.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-gradient-to-b from-accent/30 to-accent/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-gold/5 rounded-full blur-3xl"></div>
        <div ref={processRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t('laser.process.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', titleKey: 'laser.process.step1.title', descKey: 'laser.process.step1.desc' },
                { num: '02', titleKey: 'laser.process.step2.title', descKey: 'laser.process.step2.desc' },
                { num: '03', titleKey: 'laser.process.step3.title', descKey: 'laser.process.step3.desc' },
                { num: '04', titleKey: 'laser.process.step4.title', descKey: 'laser.process.step4.desc' },
              ].map((step) => (
                <div key={step.num} className="group relative text-center">
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 p-6 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 h-full">
                    <span className="block text-3xl font-bold bg-gradient-to-br from-rose-gold to-rose-gold-dark bg-clip-text text-transparent mb-3 tracking-tight">{step.num}</span>
                    <h3 className="font-bold text-primary mb-2">{t(step.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suitability & Contraindications */}
      <section className="py-20">
        <div ref={comparisonRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t('laser.suitability.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-2xl border border-rose-gold/20 bg-gradient-to-br from-white to-rose-gold/5 p-8 shadow-card hover:shadow-elegant transition-all duration-500">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">{t('laser.suitability.suitable.title')}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {['item1', 'item2', 'item3', 'item4', 'item5'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4.5 h-4.5 text-rose-gold flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{t(`laser.suitability.suitable.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-destructive/15 bg-gradient-to-br from-white to-destructive/5 p-8 shadow-card hover:shadow-elegant transition-all duration-500">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">{t('laser.suitability.contraindications.title')}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {['item1', 'item2', 'item3', 'item4', 'item5'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-4.5 h-4.5 rounded-full border-2 border-destructive/40 flex-shrink-0 mt-0.5"></div>
                      <span className="leading-relaxed">{t(`laser.suitability.contraindications.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Risks and Side Effects */}
            <div className="text-center mb-10 mt-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4">{t('laser.risks.title')}</h3>
              <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <div className="rounded-2xl border border-rose-gold/30 bg-gradient-to-br from-white to-rose-gold-light/20 p-7 shadow-card">
                <h4 className="text-lg font-bold text-primary mb-4">{t('laser.risks.common.title')}</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {['item1', 'item2', 'item3', 'item4'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{t(`laser.risks.common.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-destructive/10 bg-gradient-to-br from-white to-destructive/5 p-7 shadow-card">
                <h4 className="text-lg font-bold text-primary mb-4">{t('laser.risks.rare.title')}</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {['item1', 'item2', 'item3', 'item4'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-destructive/50 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{t(`laser.risks.rare.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Preparation and Aftercare */}
            <div className="text-center mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4">{t('laser.care.title')}</h3>
              <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 p-7 shadow-card">
                <h4 className="text-lg font-bold text-primary mb-4">{t('laser.care.preparation.title')}</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {['item1', 'item2', 'item3', 'item4', 'item5'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-primary/50 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{t(`laser.care.preparation.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-gold/20 bg-gradient-to-br from-white to-rose-gold/5 p-7 shadow-card">
                <h4 className="text-lg font-bold text-primary mb-4">{t('laser.care.aftercare.title')}</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {['item1', 'item2', 'item3', 'item4', 'item5'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-rose-gold/60 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{t(`laser.care.aftercare.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gradient-to-b from-accent/30 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div ref={faqRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t('laser.faq.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/60 rounded-2xl px-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-card transition-shadow duration-300">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-rose-gold transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div ref={whyUsRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                {t('laser.why-us.title')}
              </h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {['item1', 'item2', 'item3', 'item4', 'item5', 'item6'].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-xl border border-border/40 bg-gradient-to-r from-white to-accent/10 p-5 shadow-sm hover:shadow-card transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-rose-gold to-rose-gold-dark flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`laser.why-us.${item}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-rose-gold-dark/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        <div ref={ctaRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t('laser.pricing.title')}</h2>
            <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mb-6"></div>
            <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('laser.pricing.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary border-none shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-full px-8"
                asChild
              >
                <Link to={withLang("/preis")}>
                  {t('laser.pricing.view-all')}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/30 hover:border-white transition-all duration-300 rounded-full px-8 shadow-lg"
                onClick={() => showBookingWidget()}
              >
                {t('laser.pricing.consultation')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-b from-accent/20 to-accent/5">
        <div ref={mapRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t('laser.location.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">{t('laser.location.address.title')}</h3>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-rose-gold transition-colors"
                    >
                      {t('laser.location.address.line1')}<br />
                      {t('laser.location.address.line2')}
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Train className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">{t('laser.location.transport.title')}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• {t('laser.location.transport.item1')}</p>
                      <p>• {t('laser.location.transport.item2')}</p>
                      <p>• {t('laser.location.transport.item3')}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Car className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">{t('laser.location.car.title')}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• {t('laser.location.car.item1')}</p>
                      <p>• {t('laser.location.car.item2')}</p>
                      <p className="ml-4">
                        <a
                          href="https://maps.app.goo.gl/8z6W3JdrDSJkH3ys9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-gold hover:underline"
                        >
                          {t('laser.location.car.parking1')}
                        </a>
                        {' '}{t('laser.location.car.parking1.time')}
                      </p>
                      <p className="ml-4">
                        <a
                          href="https://maps.app.goo.gl/49DpsSqqMTcRN3748"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-gold hover:underline"
                        >
                          {t('laser.location.car.parking2')}
                        </a>
                        {' '}{t('laser.location.car.parking2.time')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <ConsentMap height="h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div ref={testimonialsRef} className="container mx-auto px-4 reveal reveal-up">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t('laser.testimonials.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>

            <div className="max-w-2xl mx-auto rounded-2xl border border-rose-gold/20 bg-gradient-to-br from-white to-rose-gold/5 p-10 shadow-card">
              <div className="flex justify-center mb-5 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-rose-gold fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                &ldquo;{t('laser.testimonials.quote')}&rdquo;
              </blockquote>
              <div className="w-12 h-0.5 bg-gradient-to-r from-rose-gold to-primary mx-auto mb-4"></div>
              <div className="text-primary font-semibold">
                {t('laser.testimonials.name')}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t('laser.testimonials.since')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">{t('crosslink.title')}</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { to: '/redtouch-laser-muenchen', title: 'crosslink.redtouch', desc: 'crosslink.redtouch.desc' },
                { to: '/icoone-laser-muenchen', title: 'crosslink.icoone', desc: 'crosslink.icoone.desc' },
                { to: '/manikuere-pedikuere-muenchen', title: 'crosslink.nails', desc: 'crosslink.nails.desc' },
              ].map((link) => (
                <Link key={link.to} to={withLang(link.to)} className="group">
                  <div className="h-full rounded-2xl border border-border/50 bg-white p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowRight className="w-4 h-4 text-rose-gold transition-transform duration-300 group-hover:translate-x-1" />
                      <h3 className="font-bold text-primary group-hover:text-rose-gold transition-colors">{t(link.title)}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(link.desc)}</p>
                  </div>
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

export default LaserHairRemoval;