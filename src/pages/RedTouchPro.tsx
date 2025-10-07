import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
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
  Clock
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RedTouchPro = () => {
  const { t } = useLanguage();
  const deviceFeatures = [
    {
      icon: Sparkles,
      titleKey: 'redtouch.features.flex-fiber.title',
      descKey: 'redtouch.features.flex-fiber.desc',
      position: 'top-left'
    },
    {
      icon: Monitor,
      titleKey: 'redtouch.features.screen.title',
      descKey: 'redtouch.features.screen.desc',
      position: 'top-right'
    },
    {
      icon: Award,
      titleKey: 'redtouch.features.protocols.title',
      descKey: 'redtouch.features.protocols.desc',
      position: 'center-left'
    },
    {
      icon: Shield,
      titleKey: 'redtouch.features.cooling.title',
      descKey: 'redtouch.features.cooling.desc',
      position: 'center-right'
    },
    {
      icon: Target,
      titleKey: 'redtouch.features.wavelength.title',
      descKey: 'redtouch.features.wavelength.desc',
      position: 'bottom-left'
    },
    {
      icon: Activity,
      titleKey: 'redtouch.features.scanner.title',
      descKey: 'redtouch.features.scanner.desc',
      position: 'bottom-right'
    }
  ];

  const advantages = [
    {
      icon: Zap,
      titleKey: 'redtouch.advantages.mtd.title',
      descKey: 'redtouch.advantages.mtd.desc'
    },
    {
      icon: Shield,
      titleKey: 'redtouch.advantages.cooling.title',
      descKey: 'redtouch.advantages.cooling.desc'
    },
    {
      icon: Target,
      titleKey: 'redtouch.advantages.wavelength.title',
      descKey: 'redtouch.advantages.wavelength.desc'
    },
    {
      icon: Activity,
      titleKey: 'redtouch.advantages.moveo.title',
      descKey: 'redtouch.advantages.moveo.desc'
    },
    {
      icon: Star,
      titleKey: 'redtouch.advantages.power.title',
      descKey: 'redtouch.advantages.power.desc'
    },
    {
      icon: CheckCircle,
      titleKey: 'redtouch.advantages.all-skin.title',
      descKey: 'redtouch.advantages.all-skin.desc'
    }
  ];

  const applications = [
    'redtouch.applications.item1',
    'redtouch.applications.item2',
    'redtouch.applications.item3',
    'redtouch.applications.item4',
    'redtouch.applications.item5',
    'redtouch.applications.item6'
  ];

  const designFeatures = [
    {
      icon: Monitor,
      titleKey: 'redtouch.design.feature1.title',
      descKey: 'redtouch.design.feature1.desc'
    },
    {
      icon: Sparkles,
      titleKey: 'redtouch.design.feature2.title',
      descKey: 'redtouch.design.feature2.desc'
    },
    {
      icon: Award,
      titleKey: 'redtouch.design.feature3.title',
      descKey: 'redtouch.design.feature3.desc'
    }
  ];

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-16"
        style={{
          backgroundImage: `url(/deka2.4.png)`,
          backgroundSize: '60%',
          backgroundPosition: '20% center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 via-black/30 to-white"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              {t('redtouch.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-4">
              {t('redtouch.hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('redtouch.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="tel:+4915206067810">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('redtouch.hero.button.book')}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="#technology">
                  {t('redtouch.hero.button.learn')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RedTouch Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">{t('redtouch.gallery.title')}</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Device Image */}
              <div className="md:col-span-2 relative group animate-slide-up">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/deka2.png"
                    alt="RedTouch PRO - Professionelles Hautverjüngungsgerät"
                    className="w-full h-[500px] object-contain bg-gradient-to-br from-blue-50 to-white p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-primary font-semibold text-sm">DEKA Technology</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Images */}
              <div className="space-y-8">
                {/* Logo Image */}
                <div className="relative group animate-slide-up delay-200">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-6">
                    <img
                      src="/deka2.4.png"
                      alt="RedTouch Logo"
                      className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Detail Image */}
                <div className="relative group animate-slide-up delay-300">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="/deka2.3.jpeg"
                      alt="RedTouch PRO - Technologie Detail"
                      className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">675 nm Wellenlänge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Technology Section with Floating Features */}
      <section id="technology" className="pt-12 pb-0 bg-gradient-to-br from-blue-50 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose-gold/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">{t('redtouch.tech.title')}</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('redtouch.tech.subtitle')}
              </p>
            </div>

            {/* Cards Around Device Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" style={{marginBottom: '-40px'}}>
              {/* LEFT SIDE - First 3 cards */}
              <div className="lg:col-span-3 space-y-6" style={{transform: window.innerWidth >= 1024 ? 'translateY(7%)' : 'translateY(0)'}}>
                {deviceFeatures.slice(0, 3).map((feature, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-red-50/50 backdrop-blur-sm border-2 border-red-100 hover:border-red-300 animate-slide-up"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-red-600 group-hover:text-pink-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-red-600 transition-colors">{t(feature.titleKey)}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{t(feature.descKey)}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CENTER - Device Image */}
              <div className="lg:col-span-6 text-center">
                <div className="relative inline-block animate-slide-up delay-300">
                  <img
                    src="/deka2.png"
                    alt="RedTouch PRO - Das ultimative Hautverjüngungsgerät"
                    className="w-full max-w-md mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    style={{transform: 'scale(0.75) translateY(-25%)'}}
                  />

                  {/* Floating tech particles */}
                  <div className="absolute top-10 right-10 w-3 h-3 bg-red-400 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
                  <div className="absolute top-1/3 left-8 w-1 h-1 bg-red-300 rounded-full animate-ping delay-500 opacity-80"></div>
                  <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-pink-600 rounded-full animate-pulse delay-700 opacity-75"></div>
                </div>
              </div>

              {/* RIGHT SIDE - Remaining 3 cards */}
              <div className="lg:col-span-3 space-y-6">
                {deviceFeatures.slice(3, 6).map((feature, index) => (
                  <Card
                    key={index + 3}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-red-50/50 backdrop-blur-sm border-2 border-red-100 hover:border-red-300 animate-slide-up"
                    style={{animationDelay: `${(index + 3) * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-red-600 group-hover:text-pink-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-red-600 transition-colors">{t(feature.titleKey)}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{t(feature.descKey)}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Analysis Section */}
      <section className="py-10 bg-background relative overflow-hidden" style={{marginTop: '-160px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">{t('redtouch.analysis.title')}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">{t('redtouch.analysis.subtitle')}</p>
            </div>

            {/* Large Image at the top */}
            <div className="text-center mb-6 animate-slide-up">
              <div className="relative inline-block w-full max-w-6xl mx-auto">
                <img
                  src="/deka2.1.png"
                  alt="Wissenschaftliche Hautanalyse - Vorher/Nachher Vergleich der Kollagenfasern"
                  className="w-full object-contain rounded-xl shadow-2xl border-2 border-primary/20"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white font-semibold text-sm flex items-center">
                      <Microscope className="w-4 h-4 mr-2" />
                      Van Gieson-Färbetechnik
                    </span>
                  </div>
                </div>

                {/* RedTouch Logo in top right */}
                <div className="absolute top-4 right-4">
                  <img
                    src="/deka2.4.png"
                    alt="RedTouch Logo"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Text content below */}
            <div className="max-w-5xl mx-auto animate-slide-up delay-300" style={{marginTop: '-20px'}}>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">{t('redtouch.analysis.heading')}</h3>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    {t('redtouch.analysis.p1')}
                  </p>

                  <div className="border-t border-border pt-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">{t('redtouch.analysis.histology.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('redtouch.analysis.histology.p1')}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('redtouch.analysis.histology.p2')}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('redtouch.analysis.histology.p3')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Scientific Image */}
            <div className="text-center mb-6 animate-slide-up delay-500" style={{marginTop: '40px'}}>
              <div className="relative inline-block w-full max-w-4xl mx-auto">
                <img
                  src="/deka2.2.jpeg"
                  alt="RedTouch PRO - Detailaufnahme der Behandlungsergebnisse"
                  className="w-full object-contain rounded-xl shadow-2xl border-2 border-primary/20"
                  style={{transform: 'translateY(0%)'}}
                />
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white font-semibold text-sm flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Klinische Studie
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Device Showcase Section */}
      <section className="py-10 bg-gradient-to-b from-slate-50 to-white" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">{t('redtouch.device.title')}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                {t('redtouch.device.subtitle')}
              </p>
            </div>

            {/* Premium Device Card with DEKA-style design */}
            <div className="flex justify-center animate-slide-up delay-300">
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-primary/30 to-blue-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75 group-hover:opacity-100"></div>

                {/* Main device card */}
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden group-hover:shadow-3xl transition-all duration-500 w-[600px] h-[480px]">
                  {/* Silver gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 p-[2px] rounded-2xl">
                    <div className="bg-white h-full w-full rounded-2xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center">
                    {/* Device image container */}
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                      <img
                        src="/deka2.png"
                        alt="RedTouch PRO - Premium DEKA Device"
                        className="w-80 h-80 object-contain drop-shadow-2xl"
                      />
                      {/* Subtle glow around device */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-full blur-2xl scale-110"></div>
                    </div>

                    {/* Device name and badge */}
                    <div className="text-center">
                      <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-primary px-4 py-2 rounded-full mb-4">
                        <Star className="w-4 h-4 text-white mr-2" />
                        <span className="text-white font-semibold text-sm">DEKA Premium</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('redtouch.device.name')}</h3>
                      <p className="text-gray-600 font-medium">{t('redtouch.device.tech')}</p>
                    </div>
                  </div>

                  {/* Floating sparkle effects */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-primary rounded-full animate-bounce delay-1000 opacity-40"></div>
                  <div className="absolute top-1/3 left-6 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500 opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Technical specifications below */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up delay-500">
              <div className="text-center p-6 bg-white/50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('redtouch.device.spec1.title')}</h4>
                <p className="text-gray-600 text-sm">{t('redtouch.device.spec1.desc')}</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('redtouch.device.spec2.title')}</h4>
                <p className="text-gray-600 text-sm">{t('redtouch.device.spec2.desc')}</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('redtouch.device.spec3.title')}</h4>
                <p className="text-gray-600 text-sm">{t('redtouch.device.spec3.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile des RedTouch PRO */}
      <section className="py-8 bg-background" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4">{t('redtouch.advantages.title')}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <advantage.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{t(advantage.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(advantage.descKey)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anwendungsbereiche */}
      <section className="py-8 bg-accent/20" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4">{t('redtouch.applications.title')}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient mb-6"></div>
              <p className="text-xl text-muted-foreground">
                {t('redtouch.applications.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((applicationKey, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="bg-blue-500/10 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-primary font-medium">{t(applicationKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design & Ergonomie */}
      <section className="py-8 bg-background" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4">{t('redtouch.design.title')}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">{t('redtouch.design.heading')}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t('redtouch.design.p1')}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('redtouch.design.p2')}
                  </p>
                </div>

                <div className="space-y-6">
                  {designFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{t(feature.titleKey)}</h4>
                        <p className="text-muted-foreground">{t(feature.descKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-slide-up delay-300">
                <div className="relative">
                  <img
                    src="/deka2.png"
                    alt="RedTouch PRO Design"
                    className="w-full h-96 object-contain bg-gradient-to-br from-blue-50 to-primary/5 rounded-2xl shadow-elegant p-8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-2xl"></div>

                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-primary font-semibold text-sm">Moveo-Modus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-primary text-white" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-slide-up">
            {t('redtouch.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-slide-up delay-200">
            {t('redtouch.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="tel:+4915206067810">
                <Phone className="w-5 h-5 mr-2" />
                {t('redtouch.cta.button.book')}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="mailto:Yulachip@icloud.com">
                <Mail className="w-5 h-5 mr-2" />
                {t('redtouch.cta.button.email')}
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RedTouchPro;