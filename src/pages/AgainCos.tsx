import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, Clock, Target, Award, Star, Phone, Instagram, Sparkles, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AgainCos = () => {
  const { t } = useLanguage();
  const keyFeatures = [
    {
      icon: Zap,
      title: t('againcos.features.alexandrite.title'),
      description: t('againcos.features.alexandrite.description')
    },
    {
      icon: Users,
      title: t('againcos.features.simple.title'),
      description: t('againcos.features.simple.description')
    },
    {
      icon: Monitor,
      title: t('againcos.features.protocols.title'),
      description: t('againcos.features.protocols.description')
    },
    {
      icon: Shield,
      title: t('againcos.features.cooling.title'),
      description: t('againcos.features.cooling.description')
    },
    {
      icon: Target,
      title: t('againcos.features.moveohr.title'),
      description: t('againcos.features.moveohr.description')
    },
    {
      icon: Sparkles,
      title: t('againcos.features.display.title'),
      description: t('againcos.features.display.description')
    }
  ];

  const technicalFeatures = [
    {
      number: "1",
      description: t('againcos.technical.feature1')
    },
    {
      number: "2",
      description: t('againcos.technical.feature2')
    },
    {
      number: "3",
      description: t('againcos.technical.feature3')
    },
    {
      number: "4",
      description: t('againcos.technical.feature4')
    },
    {
      number: "5",
      description: t('againcos.technical.feature5')
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
                  src="/deka5.png"
                  alt="Again cos"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                  style={{
                    transform: 'scale(1.0)',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-primary font-semibold text-sm">{t('againcos.hero.badge')}</span>
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
                    <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Again cos
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-teal-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    {t('againcos.hero.subtitle')}
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:shadow-lg text-lg px-8 py-4"
                    asChild
                  >
                    <a href="tel:+4915206067810">
                      <Phone className="w-5 h-5 mr-2" />
                      {t('againcos.hero.button.consultation')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - RedTouch PRO Style with Teal/Cyan Colors */}
      <section className="py-12 bg-gradient-to-br from-teal-50 via-background to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-600/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">{t('againcos.features.section.title')}</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 mx-auto animate-gradient mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('againcos.features.section.subtitle')}
              </p>
            </div>

            {/* Cards Around Device Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT SIDE - First 3 cards */}
              <div className="lg:col-span-3 lg:col-start-1 space-y-6">
                {keyFeatures.slice(0, 3).map((feature, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-green-50/50 backdrop-blur-sm border-2 border-green-100 hover:border-green-300 animate-slide-up"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-green-600 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CENTER - Device Image */}
              <div className="lg:col-span-6 text-center">
                <div className="relative inline-block animate-slide-up delay-300">
                  <img
                    src="/deka5.png"
                    alt="Again cos - Das ultimative Haarentfernungsgerät"
                    className="w-full mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    style={{
                      maxWidth: '430px',
                      transform: 'scale(0.85) translateY(-15%)'
                    }}
                  />

                  {/* Floating tech particles */}
                  <div className="absolute top-10 right-10 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
                  <div className="absolute top-1/3 left-8 w-1 h-1 bg-green-300 rounded-full animate-ping delay-500 opacity-80"></div>
                  <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-emerald-600 rounded-full animate-pulse delay-700 opacity-75"></div>
                </div>
              </div>

              {/* RIGHT SIDE - Remaining 3 cards */}
              <div className="lg:col-span-3 space-y-6">
                {keyFeatures.slice(3, 6).map((feature, index) => (
                  <Card
                    key={index + 3}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-green-50/50 backdrop-blur-sm border-2 border-green-100 hover:border-green-300 animate-slide-up"
                    style={{animationDelay: `${(index + 3) * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-green-600 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section - Redesigned */}
      <section className="py-12 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  {t('againcos.technical.section.title')}
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-8"></div>
              <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
                {t('againcos.technical.section.subtitle')}
              </p>
            </div>

            {/* Center Image */}
            <div className="text-center mb-12 animate-slide-up delay-300">
              <div className="relative inline-block">
                <img
                  src="/deka5.1.jpeg"
                  alt="Again cos Technologie"
                  className="w-full max-w-md mx-auto h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                  style={{
                    transform: 'scale(0.8)',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>

            {/* Feature Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {technicalFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-lg border border-white/20 hover:border-teal-300/50 animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-teal-400 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <span className="text-white font-bold text-lg">{feature.number}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-teal-100 leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Showcase */}
      <section className="py-12 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">{t('againcos.showcase.section.title')}</h3>
              <p className="text-lg text-muted-foreground">{t('againcos.showcase.section.subtitle')}</p>
            </div>

            {/* System Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src="/deka5.2.jpeg"
                    alt="Again cos System Detail"
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="font-bold text-lg">{t('againcos.showcase.system.title')}</h4>
                    <p className="text-sm text-teal-100">{t('againcos.showcase.system.subtitle')}</p>
                  </div>
                </div>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src="/deka5.3.jpeg"
                    alt="Again cos Anwendung Detail"
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="font-bold text-lg">{t('againcos.showcase.application.title')}</h4>
                    <p className="text-sm text-cyan-100">{t('againcos.showcase.application.subtitle')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#5a2d2a] via-[#4a1d1a] to-[#5a2d2a] text-white relative overflow-hidden mb-0">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-rose-gold/10 rounded-full blur-xl animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {t('againcos.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('againcos.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#5a2d2a] hover:bg-white/90 text-lg px-8 py-4"
              asChild
            >
              <a href="tel:+4915206067810">
                <Phone className="w-5 h-5 mr-2" />
                {t('againcos.cta.button.consultation')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-[#5a2d2a] text-lg px-8 py-4"
              asChild
            >
              <a href="mailto:Yulachip@icloud.com">
                <ArrowRight className="w-5 h-5 ml-2" />
                {t('againcos.cta.button.email')}
              </a>
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <p className="text-sm text-white/80">{t('againcos.cta.certification')}</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <p className="text-sm text-white/80">{t('againcos.cta.safe')}</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-rose-gold mx-auto mb-2" />
                <p className="text-sm text-white/80">{t('againcos.cta.premium')}</p>
              </div>
            </div>

            <div className="mt-4">
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

export default AgainCos;