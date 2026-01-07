import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, Clock, Target, Award, Star, Phone, Instagram, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Physiq360 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const beforeAfterImages = [
    { id: 1, src: '/34.jpg', alt: t('physiq360.results.alt') + ' 1' },
    { id: 2, src: '/35.jpg', alt: t('physiq360.results.alt') + ' 2' },
    { id: 3, src: '/36.jpg', alt: t('physiq360.results.alt') + ' 3' },
    { id: 4, src: '/37.jpg', alt: t('physiq360.results.alt') + ' 4' },
    { id: 5, src: '/38.jpg', alt: t('physiq360.results.alt') + ' 5' },
    { id: 6, src: '/39.jpg', alt: t('physiq360.results.alt') + ' 6' },
    { id: 7, src: '/40.jpg', alt: t('physiq360.results.alt') + ' 7' },
    { id: 8, src: '/41.jpg', alt: t('physiq360.results.alt') + ' 8' },
    { id: 9, src: '/42.jpg', alt: t('physiq360.results.alt') + ' 9' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };
  const keyFeatures = [
    {
      icon: Sparkles,
      title: t('physiq360.features.versatile.title'),
      description: t('physiq360.features.versatile.description')
    },
    {
      icon: Target,
      title: t('physiq360.features.customizable.title'),
      description: t('physiq360.features.customizable.description')
    },
    {
      icon: Shield,
      title: t('physiq360.features.optimized.title'),
      description: t('physiq360.features.optimized.description')
    },
    {
      icon: Clock,
      title: t('physiq360.features.minimal.title'),
      description: t('physiq360.features.minimal.description')
    },
    {
      icon: Award,
      title: t('physiq360.features.safe.title'),
      description: t('physiq360.features.safe.description')
    }
  ];

  const technologyFeatures = [
    {
      title: t('physiq360.technology.ems.title'),
      subtitle: t('physiq360.technology.ems.subtitle'),
      description: t('physiq360.technology.ems.description'),
      icon: Zap
    },
    {
      title: t('physiq360.technology.lzr.title'),
      subtitle: t('physiq360.technology.lzr.subtitle'),
      description: t('physiq360.technology.lzr.description'),
      icon: Target
    }
  ];

  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  // Функция для добавления языкового префикса к ссылкам
  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">

      {/* Hero Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="/deka4.png"
                  alt="PHYSIQ 360"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                  style={{
                    transform: 'scale(1.15)',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-primary font-semibold text-sm">{t('physiq360.hero.badge')}</span>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-4 right-4">
                  <img
                    src="/DEKA logo.png"
                    alt="DEKA Logo"
                    className="h-12 md:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                    style={{
                      filter: 'brightness(1.2) saturate(1.1)',
                    }}
                  />
                </div>

                <div className="mb-6 mt-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 animate-slide-up">
                    <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      PHYSIQ 360
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-orange-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    {t('physiq360.hero.subtitle')}
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:shadow-lg text-lg px-8 py-4"
                    onClick={() => {
                      if (window.yWidget) {
                        window.yWidget.show(window.yWidget.href);
                      }
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {t('physiq360.hero.button.consultation')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features Section */}
      <section className="py-20 bg-orange-50 relative overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">{t('physiq360.features.section.title')}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">{t('physiq360.features.section.subtitle')}</p>
            </div>

            {/* Cards Around Device Layout */}
            <div className="relative max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* LEFT SIDE - First 2-3 Cards */}
                <div className="lg:col-span-3 space-y-6">
                  {keyFeatures.slice(0, 3).map((feature, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-orange-50/50 backdrop-blur-sm border-2 border-orange-100 hover:border-orange-300 animate-slide-up"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <feature.icon className="w-6 h-6 text-orange-600 group-hover:text-amber-600 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                          </div>
                        </div>
                        {/* Animated border bottom */}
                        <div className="mt-3 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CENTER - Device Image */}
                <div className="lg:col-span-6 text-center">
                  <div className="relative inline-block animate-slide-up delay-300">
                    <img
                      src="/deka4.png"
                      alt="PHYSIQ 360 - Das ultimative Körperkonturierungsgerät"
                      className="w-full max-w-md mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                      style={{transform: 'scale(0.8)'}}
                    />

                    {/* Floating tech particles */}
                    <div className="absolute top-10 right-10 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
                    <div className="absolute bottom-12 left-12 w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
                    <div className="absolute top-1/3 left-8 w-1 h-1 bg-orange-300 rounded-full animate-ping delay-500 opacity-80"></div>
                    <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-amber-600 rounded-full animate-pulse delay-700 opacity-75"></div>
                  </div>
                </div>

                {/* RIGHT SIDE - Remaining Cards */}
                <div className="lg:col-span-3 space-y-6">
                  {keyFeatures.slice(3, 5).map((feature, index) => (
                    <Card
                      key={index + 3}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-orange-50/50 backdrop-blur-sm border-2 border-orange-100 hover:border-orange-300 animate-slide-up"
                      style={{animationDelay: `${(index + 3) * 200}ms`}}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <feature.icon className="w-6 h-6 text-orange-600 group-hover:text-amber-600 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                          </div>
                        </div>
                        {/* Animated border bottom */}
                        <div className="mt-3 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* STEP Technology Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('physiq360.technology.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('physiq360.technology.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img
                  src="/deka4.1.jpeg"
                  alt="STEP-Technologie"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-2xl"></div>
              </div>
              <div>
                <div className="space-y-8">
                  {technologyFeatures.map((tech, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/70 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-orange-600 to-amber-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <tech.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-orange-600 transition-colors">
                              {tech.title}
                            </h3>
                            <h4 className="text-lg font-semibold text-orange-600 mb-3">
                              {tech.subtitle}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <img
                  src="/deka4.2.jpeg"
                  alt="PHYSIQ 360 Technologie"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img
                  src="/deka4.3.jpeg"
                  alt="PHYSIQ 360 Anwendung"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    transform: 'scale(0.85)',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Results Gallery */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-rose-gold/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {t('physiq360.results.title')}
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-rose-gold to-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('physiq360.results.subtitle')}
              </p>
            </div>

            {/* Slider */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                {beforeAfterImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group z-10"
                  aria-label={t('physiq360.slider.prev')}
                >
                  <ChevronLeft className="w-6 h-6 text-primary group-hover:text-rose-gold" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group z-10"
                  aria-label={t('physiq360.slider.next')}
                >
                  <ChevronRight className="w-6 h-6 text-primary group-hover:text-rose-gold" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-rose-gold w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={t('physiq360.slider.show') + ' ' + (index + 1)}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="text-center mt-4">
                <span className="text-sm text-muted-foreground">
                  {currentSlide + 1} / {beforeAfterImages.length}
                </span>
              </div>
            </div>

            {/* Info Card */}
            <Card className="mt-12 border-2 border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-rose-gold" />
                  <h3 className="font-bold text-primary text-lg">{t('physiq360.results.individual.title')}</h3>
                  <Sparkles className="w-5 h-5 text-rose-gold" />
                </div>
                <p className="text-muted-foreground">
                  {t('physiq360.results.individual.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-peach-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300/10 rounded-full blur-xl animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary">
            {t('physiq360.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            {t('physiq360.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4"
              onClick={() => {
                if (window.yWidget) {
                  window.yWidget.show(window.yWidget.href);
                }
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('physiq360.cta.button.consultation')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary bg-transparent hover:bg-primary hover:text-white text-lg px-8 py-4"
              asChild
            >
              <a href="mailto:Yulachip@icloud.com">
                <ArrowRight className="w-5 h-5 ml-2" />
                {t('physiq360.cta.button.email')}
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-primary/20">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm text-primary">{t('physiq360.cta.certification')}</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-primary">{t('physiq360.cta.safe')}</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-rose-gold mx-auto mb-2" />
                <p className="text-sm text-primary">{t('physiq360.cta.premium')}</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-br from-pink-500 to-orange-600 hover:from-pink-600 hover:to-orange-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                title="Instagram"
              >
                <Instagram className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Physiq360;
