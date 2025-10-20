import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Train, Car, Clock, Shield, Award, Star, Instagram, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { PageHelmet } from '@/components/PageHelmet';
import { setJsonLd } from '@/seo/seo';
import { useLanguage } from '@/contexts/LanguageContext';
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

  useEffect(() => {
    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: window.location.origin
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${window.location.origin}/services`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Laser-Haarentfernung',
          item: window.location.href
        }
      ]
    });
  }, []);

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
      <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}

        {/* Hero Section */}
      <section
        className="relative min-h-[50vh] md:min-h-[60vh] lg:h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/HERO3.1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 via-transparent to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            {t('laser.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/95">
            {t('laser.hero.tagline')}
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {t('laser.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-rose-gold hover:bg-rose-gold-dark text-white border-none shadow-rose"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              {t('laser.hero.button')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
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
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('laser.tech.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('laser.tech.subtitle')}
              </p>
            </div>
            
            {/* Alexandrit Laser */}
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src="/17.png"
                      alt="Alexandrit Laser München"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">{t('laser.alexandrit.title')}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('laser.alexandrit.desc')}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('laser.alexandrit.benefits.item1')}</li>
                      <li>• {t('laser.alexandrit.benefits.item2')}</li>
                      <li>• {t('laser.alexandrit.benefits.item3')}</li>
                      <li>• {t('laser.alexandrit.benefits.item4')}</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Diodenlaser */}
            <div className="max-w-4xl mx-auto mb-10">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">{t('laser.diode.title')}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('laser.diode.desc')}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('laser.diode.benefits.item1')}</li>
                      <li>• {t('laser.diode.benefits.item2')}</li>
                      <li>• {t('laser.diode.benefits.item3')}</li>
                      <li>• {t('laser.diode.benefits.item4')}</li>
                    </ul>
                  </div>
                  <div className="relative">
                    <img
                      src="/19.png"
                      alt="Diodenlaser Haarentfernung München"
                      className="w-full h-full object-cover"
                      style={{
                        transform: 'scale(1.0)',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Comparison Link */}
            <div className="text-center mt-8">
              <Link to={withLang("/alexandrit-gegen-diodenlaser")}>
                <Button variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-white transition-all w-full sm:w-auto">
                  <span className="font-semibold text-sm sm:text-base">{t('laser.comparison.button')}</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Multiple Sessions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-8">{t('laser.sessions.title')}</h2>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('laser.sessions.intro')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">{t('laser.sessions.anagen.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('laser.sessions.anagen.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">{t('laser.sessions.catagen.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('laser.sessions.catagen.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">{t('laser.sessions.telogen.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('laser.sessions.telogen.desc')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-4">{t('laser.sessions.plan.title')}</h4>
                  <p className="text-muted-foreground">
                    {t('laser.sessions.plan.desc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('laser.process.title')}</h2>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">1</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">{t('laser.process.step1.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('laser.process.step1.desc')}</p>
                </div>

                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">2</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">{t('laser.process.step2.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('laser.process.step2.desc')}</p>
                </div>

                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">3</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">{t('laser.process.step3.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('laser.process.step3.desc')}</p>
                </div>

                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">4</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">{t('laser.process.step4.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('laser.process.step4.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitability & Contraindications */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('laser.suitability.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">{t('laser.suitability.suitable.title')}</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.suitable.item1')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.suitable.item2')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.suitable.item3')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.suitable.item4')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.suitable.item5')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">{t('laser.suitability.contraindications.title')}</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.contraindications.item1')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.contraindications.item2')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.contraindications.item3')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.contraindications.item4')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {t('laser.suitability.contraindications.item5')}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Risks and Side Effects */}
            <h3 className="text-3xl font-bold text-primary text-center mb-12">{t('laser.risks.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">{t('laser.risks.common.title')}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.risks.common.item1')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.risks.common.item2')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.risks.common.item3')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.risks.common.item4')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">{t('laser.risks.rare.title')}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.risks.rare.item1')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.risks.rare.item2')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.risks.rare.item3')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.risks.rare.item4')}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Preparation and Aftercare */}
            <h3 className="text-3xl font-bold text-primary text-center mb-12">{t('laser.care.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">{t('laser.care.preparation.title')}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.preparation.item1')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.preparation.item2')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.preparation.item3')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.preparation.item4')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.preparation.item5')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">{t('laser.care.aftercare.title')}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.aftercare.item1')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.aftercare.item2')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.aftercare.item3')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.aftercare.item4')}
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {t('laser.care.aftercare.item5')}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('laser.faq.title')}</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-rose-gold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">
              {t('laser.why-us.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  {t('laser.why-us.item1')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  {t('laser.why-us.item2')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  {t('laser.why-us.item3')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  {t('laser.why-us.item4')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  {t('laser.why-us.item5')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  {t('laser.why-us.item6')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-12 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('laser.pricing.title')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('laser.pricing.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-hero text-white border-none shadow-rose"
                asChild
              >
                <Link to={withLang("/preis")}>
                  {t('laser.pricing.view-all')}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
              >
                {t('laser.pricing.consultation')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">{t('laser.location.title')}</h2>

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
              
              <div className="rounded-lg overflow-hidden shadow-card h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7363!2d11.6034!3d48.1181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf3f8b5c4b5d%3A0x8c4b5c4b5c4b5c4b!2sElsässer%20Str.%2033%2C%2081667%20München!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yuliia Cheporska Studio Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-10">{t('laser.testimonials.title')}</h2>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground italic mb-6">
                  "{t('laser.testimonials.quote')}"
                </blockquote>
                <div className="text-primary font-semibold">
                  {t('laser.testimonials.name')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t('laser.testimonials.since')}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      </div>
    </>
  );
};

export default LaserHairRemoval;