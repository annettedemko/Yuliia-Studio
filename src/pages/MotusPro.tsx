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
  Monitor,
  Sparkles,
  Award,
  Clock,
  Activity,
  Instagram
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MotusPro = () => {
  const { t } = useLanguage();
  const technicalFeatures = [
    {
      number: '1',
      title: t('motuspro.technical.feature1.title'),
      description: t('motuspro.technical.feature1.description')
    },
    {
      number: '2',
      title: t('motuspro.technical.feature2.title'),
      description: t('motuspro.technical.feature2.description')
    },
    {
      number: '3',
      title: t('motuspro.technical.feature3.title'),
      description: t('motuspro.technical.feature3.description')
    },
    {
      number: '4',
      title: t('motuspro.technical.feature4.title'),
      description: t('motuspro.technical.feature4.description')
    },
    {
      number: '5',
      title: t('motuspro.technical.feature5.title'),
      description: t('motuspro.technical.feature5.description')
    }
  ];

  const keyFeatures = [
    {
      icon: Zap,
      title: t('motuspro.features.laser.title'),
      description: t('motuspro.features.laser.description')
    },
    {
      icon: Monitor,
      title: t('motuspro.features.simple.title'),
      description: t('motuspro.features.simple.description')
    },
    {
      icon: Target,
      title: t('motuspro.features.moveo.title'),
      description: t('motuspro.features.moveo.description')
    },
    {
      icon: Award,
      title: t('motuspro.features.protocols.title'),
      description: t('motuspro.features.protocols.description')
    },
    {
      icon: Shield,
      title: t('motuspro.features.cooling.title'),
      description: t('motuspro.features.cooling.description')
    },
    {
      icon: Activity,
      title: t('motuspro.features.display.title'),
      description: t('motuspro.features.display.description')
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
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="/deka1.png"
                  alt="Motus PRO"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                  style={{
                    transform: 'scale(1.0)',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-primary font-semibold text-sm">{t('motuspro.hero.badge')}</span>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-4 right-4">
                  <img
                    src="/DEKA logo.png"
                    alt="DEKA Logo"
                    className="h-12 md:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                    style={{filter: 'brightness(1.2) saturate(1.1)'}}
                  />
                </div>
                <div className="mb-6 mt-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 animate-slide-up">
                    <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      Motus PRO
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-green-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    {t('motuspro.hero.subtitle')}
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg text-lg px-8 py-4"
                    onClick={() => {
                      if (window.yWidget) {
                        window.yWidget.show(window.yWidget.href);
                      }
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {t('motuspro.hero.button.consultation')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - RedTouch PRO Style with Green/Emerald Colors */}
      <section id="features" className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">{t('motuspro.features.section.title')}</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 mx-auto animate-gradient mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('motuspro.features.section.subtitle')}
              </p>
            </div>

            {/* Cards Around Device Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT SIDE - First 3 cards */}
              <div className="lg:col-span-3 space-y-6">
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
                    src="/deka1.png"
                    alt="Motus PRO - Das ultimative Haarentfernungsgerät"
                    className="w-full max-w-sm mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    style={{transform: 'scale(0.7)'}}
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

      {/* Technical Features Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('motuspro.technical.section.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('motuspro.technical.section.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {feature.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-green-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moveo Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
                  {t('motuspro.moveo.section.title')}
                </h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="mb-4">
                    {t('motuspro.moveo.sapphire.description')}
                  </p>
                  <p className="mb-4">
                    {t('motuspro.moveo.ultrafast.description')}
                  </p>
                  <p className="font-semibold text-green-600">
                    {t('motuspro.moveo.section.subtitle')}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/deka1.1.jpeg"
                  alt="Moveo-Technologie"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <img
                  src="/deka1.2.jpeg"
                  alt="Motus PRO Display"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img
                  src="/deka1.3.jpeg"
                  alt="Motus PRO System"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-300/10 rounded-full blur-xl animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {t('motuspro.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('motuspro.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-900 hover:bg-white/90 text-lg px-8 py-4"
              asChild
            >
              <a href="tel:+4915206067810">
                <Phone className="w-5 h-5 mr-2" />
                {t('motuspro.cta.button.call')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary border-white hover:bg-white/90 text-lg px-8 py-4 shadow-lg"
              asChild
            >
              <a href="mailto:Yulachip@icloud.com">
                <Mail className="w-5 h-5 mr-2" />
                {t('motuspro.cta.button.quote')}
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <p className="text-sm text-white/80">{t('motuspro.cta.partnership')}</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <p className="text-sm text-white/80">CE-zertifiziert</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-rose-gold mx-auto mb-2" />
                <p className="text-sm text-white/80">Premium Quality</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Instagram"
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

export default MotusPro;