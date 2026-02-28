import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Hand, Heart, Sparkles, Clock, Star, Scissors, Palette, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { setJsonLd } from '@/seo/seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { showBookingWidget } from '@/lib/altegioWidget';
// Изображения загружаются из папки public

const ManikuerePedikuere = () => {
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

  useEffect(() => {
    const baseUrl = 'https://www.munchen-beauty.de';
    const isRu = currentLang === 'ru';
    setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${baseUrl}/manikuere-pedikuere-muenchen#service`,
          mainEntityOfPage: `${baseUrl}/${currentLang}/manikuere-pedikuere-muenchen`,
          name: isRu ? 'Маникюр и педикюр Мюнхен' : 'Maniküre & Pediküre München',
          serviceType: isRu ? 'Ногтевой сервис' : 'Nagelservice',
          description: isRu
            ? 'Профессиональный маникюр и педикюр в Мюнхене-Хайдхаузен: классический, гель, наращивание, нейл-арт, медицинский педикюр.'
            : 'Professionelle Maniküre & Pediküre in München-Haidhausen: Klassisch, Gel, Nagelmodellage, Nail Art, medizinische Fußpflege.',
          inLanguage: isRu ? 'ru' : 'de',
          image: `${baseUrl}/7.jpg`,
          provider: {
            '@type': 'BeautySalon',
            '@id': `${baseUrl}#business`,
            name: 'Yuliia Cheporska Studio'
          },
          areaServed: {
            '@type': 'City',
            name: 'München'
          },
          offers: {
            '@type': 'Offer',
            url: `${baseUrl}/${currentLang}/preis#manicure`,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock'
          }
        },
        {
          '@type': 'BreadcrumbList',
          inLanguage: isRu ? 'ru' : 'de',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: isRu ? 'Главная' : 'Home',
              item: `${baseUrl}/${currentLang}`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: isRu ? 'Услуги' : 'Services',
              item: `${baseUrl}/${currentLang}/services`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: isRu ? 'Маникюр и педикюр Мюнхен' : 'Maniküre & Pediküre München',
              item: `${baseUrl}/${currentLang}/manikuere-pedikuere-muenchen`
            }
          ]
        }
      ]
    });
  }, [currentLang]);
  const manicureServices = [
    {
      icon: Hand,
      title: t('nails.manicure.classic.title'),
      description: t('nails.manicure.classic.desc'),
      duration: '45-60 Min.',
      price: `${t('nails.from')} 35€`
    },
    {
      icon: Sparkles,
      title: t('nails.manicure.gel.title'),
      description: t('nails.manicure.gel.desc'),
      duration: '60-75 Min.',
      price: `${t('nails.from')} 45€`
    },
    {
      icon: Scissors,
      title: t('nails.manicure.extension.title'),
      description: t('nails.manicure.extension.desc'),
      duration: '90-120 Min.',
      price: `${t('nails.from')} 60€`
    },
    {
      icon: Palette,
      title: t('nails.manicure.art.title'),
      description: t('nails.manicure.art.desc'),
      duration: '15-30 Min.',
      price: `${t('nails.from')} 10€`
    }
  ];

  const pedicureServices = [
    {
      icon: Heart,
      title: t('nails.pedicure.medical.title'),
      description: t('nails.pedicure.medical.desc'),
      duration: '60-75 Min.',
      price: `${t('nails.from')} 45€`
    },
    {
      icon: Sparkles,
      title: t('nails.pedicure.wellness.title'),
      description: t('nails.pedicure.wellness.desc'),
      duration: '75-90 Min.',
      price: `${t('nails.from')} 55€`
    },
    {
      icon: Hand,
      title: t('nails.pedicure.gel.title'),
      description: t('nails.pedicure.gel.desc'),
      duration: '45-60 Min.',
      price: `${t('nails.from')} 40€`
    },
    {
      icon: Heart,
      title: t('nails.pedicure.spa.title'),
      description: t('nails.pedicure.spa.desc'),
      duration: '90-105 Min.',
      price: `${t('nails.from')} 65€`
    }
  ];

  const benefits = [
    t('nails.benefits.item1'),
    t('nails.benefits.item2'),
    t('nails.benefits.item3'),
    t('nails.benefits.item4'),
    t('nails.benefits.item5'),
    t('nails.benefits.item6')
  ];

  const processSteps = [
    {
      step: 1,
      title: t('nails.process.step1.title'),
      description: t('nails.process.step1.desc')
    },
    {
      step: 2,
      title: t('nails.process.step2.title'),
      description: t('nails.process.step2.desc')
    },
    {
      step: 3,
      title: t('nails.process.step3.title'),
      description: t('nails.process.step3.desc')
    },
    {
      step: 4,
      title: t('nails.process.step4.title'),
      description: t('nails.process.step4.desc')
    }
  ];

  return (
    <>
      <PageHelmet />
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] lg:h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background with slow cinematic zoom */}
        <div
          className="absolute inset-0 animate-hero-zoom"
          style={{ backgroundImage: 'url(/26.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(15_45%_65%/0.12),transparent_60%)]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 hero-stagger-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
            <span className="text-xs font-medium text-white/90 tracking-[0.2em] uppercase">Nail Care</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/80"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] hero-stagger-2">
            {t('nails.hero.title')}
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light mb-3 hero-stagger-3">
            {t('nails.hero.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8 hero-stagger-4">
            {t('nails.hero.description')}
          </p>

          <div className="flex items-center justify-center gap-3 mb-8 hero-stagger-5">
            <div className="h-px bg-gradient-to-r from-transparent to-white/40 animate-line-expand"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-white/40"></div>
            <div className="h-px bg-gradient-to-l from-transparent to-white/40 animate-line-expand"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center hero-stagger-6">
            <Button
              size="lg"
              className="bg-white/90 backdrop-blur-sm text-primary border-none shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 rounded-full px-8"
              onClick={() => showBookingWidget()}
            >
              {t('nails.hero.button')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border border-white/40 text-white hover:bg-white/15 hover:border-white transition-all duration-300 rounded-full px-8"
              asChild
            >
              <Link to={withLang("/preis#manicure")}>
                {t('service.button.prices')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">
              {t('nails.services.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">{t('nails.services.classic.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('nails.services.classic.desc')}
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
                      <h3 className="font-bold text-primary mb-2">{t('nails.services.gel.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('nails.services.gel.desc')}
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
                      <h3 className="font-bold text-primary mb-2">{t('nails.services.extension.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('nails.services.extension.desc')}
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
                      <h3 className="font-bold text-primary mb-2">{t('nails.services.art.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('nails.services.art.desc')}
                      </p>
                      </div>
                    </div>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
      </section>

      {/* Maniküre Services */}
      <section className="pt-4 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('nails.manicure-services.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('nails.manicure-services.subtitle')}
              </p>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {manicureServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-rose-gold/20 p-3 rounded-full">
                        <service.icon className="w-6 h-6 text-rose-gold" />
                        </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </span>
                          <span className="text-lg font-bold text-rose-gold">{service.price}</span>
                          </div>
                        </div>
                      </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white"
                      asChild
                    >
                      <Link to={withLang("/preis#manicure")}>
                        {t('nails.view-prices')}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              </div>

            {/* Termin buchen button for Maniküre */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => showBookingWidget()}
              >
                {t('nails.cta.book')}
              </Button>
              </div>
            </div>
          </div>
      </section>

      {/* Pediküre Services */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('nails.pedicure-services.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('nails.pedicure-services.subtitle')}
              </p>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pedicureServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <service.icon className="w-6 h-6 text-primary" />
                        </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </span>
                          <span className="text-lg font-bold text-primary">{service.price}</span>
                          </div>
                        </div>
                      </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <Link to={withLang("/preis#pedicure")}>
                        {t('nails.view-prices')}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              </div>

            {/* Termin buchen button for Pediküre */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-white border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => showBookingWidget()}
              >
                {t('nails.cta.book')}
              </Button>
              </div>
            </div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('nails.why.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Галерея изображений маникюра */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/7.jpg"
                    alt={t('alt.nails.manicure1')}
                    width={1284}
                    height={1579}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/11.jpg"
                    alt={t('alt.nails.manicure2')}
                    width={1198}
                    height={1156}
                    loading="lazy"
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/13.jpg"
                    alt={t('alt.nails.manicure3')}
                    width={1284}
                    height={1259}
                    loading="lazy"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/25.jpg"
                    alt={t('alt.nails.design')}
                    width={960}
                    height={1280}
                    loading="lazy"
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/4.jpeg"
                    alt={t('alt.nails.manicure4')}
                    width={560}
                    height={560}
                    loading="lazy"
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/12.jpg"
                    alt={t('alt.nails.manicure5')}
                    width={1284}
                    height={1252}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/26.jpg"
                    alt={t('alt.nails.nailart')}
                    width={960}
                    height={1280}
                    loading="lazy"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/14.jpg"
                    alt={t('alt.nails.manicure6')}
                    width={1284}
                    height={1267}
                    loading="lazy"
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/27.jpg"
                    alt={t('alt.nails.gel')}
                    width={960}
                    height={1280}
                    loading="lazy"
                    className="w-full h-24 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/15.jpg"
                    alt={t('alt.nails.manicure7')}
                    width={1284}
                    height={1245}
                    loading="lazy"
                    className="w-full h-24 object-cover rounded-lg shadow-lg"
                  />
                  </div>
                </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-rose-gold/20 p-2 rounded-full mt-1">
                      <Star className="w-4 h-4 text-rose-gold" />
                      </div>
                    <p className="text-muted-foreground">{benefit}</p>
                    </div>
                ))}
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('nails.process.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">{process.step}</span>
                    </div>
                  <h3 className="font-bold text-primary mb-3">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                  </div>
              ))}
              </div>
            </div>
          </div>
      </section>

      {/* Care Tips */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('nails.tips.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hand className="w-5 h-5 text-rose-gold" />
                    {t('nails.tips.nails.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.nails.item1')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.nails.item2')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.nails.item3')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.nails.item4')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.nails.item5')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    {t('nails.tips.feet.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.feet.item1')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.feet.item2')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.feet.item3')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.feet.item4')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('nails.tips.feet.item5')}
                    </li>
                  </ul>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
      </section>

      {/* Pediküre Gallery Section */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('nails.gallery.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">{t('nails.gallery.subtitle')}</h3>
                <p className="text-muted-foreground">
                  {t('nails.gallery.description')}
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {t('nails.gallery.item1')}
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {t('nails.gallery.item2')}
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {t('nails.gallery.item3')}
                  </li>
                </ul>
                </div>

              {/* Галерея изображений педикюра */}
              <div className="flex gap-4">
                <div className="flex-1 overflow-hidden rounded-lg">
                  <img
                    src="/8.jpg"
                    alt={t('alt.nails.pedicure.main')}
                    width={1284}
                    height={1556}
                    loading="lazy"
                    className="w-full h-80 object-cover shadow-xl"
                  />
                  </div>
                <div className="flex-1 overflow-hidden rounded-lg">
                  <img
                    src="/16.jpg"
                    alt={t('alt.nails.pedicure.detail')}
                    width={1269}
                    height={1261}
                    loading="lazy"
                    className="w-full h-80 object-cover rounded-lg shadow-xl"
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Pricing & Booking CTA */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">{t('nails.final-cta.title')}</h2>
            <p className="text-xl mb-8 text-white/90">
              {t('nails.final-cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => showBookingWidget()}
              >
                {t('nails.final-cta.book')}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <a
                  href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('nails.final-cta.instagram')}
                </a>
              </Button>
              </div>
            </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('nails.testimonials.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-rose-gold fill-current" />
                    ))}
                    </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{t('nails.testimonials.item1.quote')}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-primary">{t('nails.testimonials.item1.name')}</div>
                    <div className="text-sm text-muted-foreground">{t('nails.testimonials.item1.subtitle')}</div>
                    </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-rose-gold fill-current" />
                    ))}
                    </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{t('nails.testimonials.item2.quote')}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-primary">{t('nails.testimonials.item2.name')}</div>
                    <div className="text-sm text-muted-foreground">{t('nails.testimonials.item2.subtitle')}</div>
                    </div>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
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
              <Link to={withLang("/icoone-laser-muenchen")} className="group">
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary mb-2 group-hover:text-rose-gold transition-colors">{t('crosslink.icoone')}</h3>
                    <p className="text-sm text-muted-foreground">{t('crosslink.icoone.desc')}</p>
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

export default ManikuerePedikuere;