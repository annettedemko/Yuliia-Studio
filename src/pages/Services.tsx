import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Zap, Heart, Hand, Instagram, Waves, CheckCircle } from 'lucide-react';
import { PageHelmet } from '@/components/PageHelmet';
import { useLanguage } from '@/contexts/LanguageContext';
import AGBNotice from '@/components/AGBNotice';

const Services = () => {
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

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-6 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t('services.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
              {t('services.hero.subtitle')}
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
              {t('services.hero.description')}
            </p>
          </div>
          {/* AGB Notice */}
          <div className="max-w-3xl mx-auto mt-6">
            <AGBNotice />
          </div>
        </div>
      </section>

      {/* Laser-Haarentfernung Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">{t('services.laser.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              {t('services.laser.subtitle')}
            </p>
            <Button asChild className="bg-gradient-hero text-white mb-6">
              <Link to={withLang('/laser-haarentfernung-muenchen')}>
                {t('services.laser.learn-more')} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Motus AX Alexandrit-Laser */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to={withLang('/laser-haarentfernung-muenchen')} className="block">
              <Card className="overflow-hidden min-h-[400px] md:min-h-[500px] lg:h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative h-64 md:h-80 lg:h-full">
                  <img src="/17.png" alt="Motus AX Alexandrit-Laser" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center ml-[-8%]">
                  <h3 className="text-3xl font-bold text-primary mb-4">{t('services.motus.title')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('services.motus.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-gradient-hero text-white">
                      <Link to={withLang('/laser-haarentfernung-muenchen')}>
                        {t('services.motus.learn-more')} <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={withLang('/preis#alexandrit')}>{t('services.motus.view-prices')}</Link>
                    </Button>
                  </div>
                </div>
              </div>
              </Card>
            </Link>
          </div>

          {/* M-Tech Diodenlaser */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to={withLang('/laser-haarentfernung-muenchen')} className="block">
              <Card className="overflow-hidden min-h-[400px] md:min-h-[500px] lg:h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative h-64 md:h-80 lg:h-full">
                  <img src="/2.jpeg" alt="M-Tech Diodenlaser"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center ml-0 lg:ml-[-8%] translate-y-0 lg:translate-y-[-18%]">
                  <h3 className="text-3xl font-bold text-primary mb-4">{t('services.diode.title')}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t('services.diode.description')}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">{t('services.diode.benefits.title')}</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• {t('services.diode.benefits.efficiency')}</li>
                      <li>• {t('services.diode.benefits.cooling')}</li>
                      <li>• {t('services.diode.benefits.fast')}</li>
                      <li>• {t('services.diode.benefits.universal')}</li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-gradient-hero text-white">
                      <Link to={withLang('/laser-haarentfernung-muenchen')}>
                        {t('services.motus.learn-more')} <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={withLang('/preis#dioden')}>{t('services.motus.view-prices')}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            </Link>
          </div>

          {/* Icoone Laser Section */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to={withLang('/icoone-laser-muenchen')} className="block">
              <Card className="overflow-hidden min-h-[400px] md:min-h-[500px] lg:h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative h-64 md:h-80 lg:h-full">
                  <img src="/3.jpeg" alt="Icoone Laser"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(0.85)', objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center ml-0 lg:ml-[-8%] translate-y-0 lg:translate-y-[-15%]">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {t('services.icoone.title')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('services.icoone.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-gradient-hero text-white">
                      <Link to={withLang('/icoone-laser-muenchen')}>
                        {t('common.learn-more')} <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={withLang('/preis#icoone')}>{t('services.motus.view-prices')}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            </Link>
        </div>

          {/* RedTouchPro Section */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to={withLang('/redtouch-laser-muenchen')} className="block">
              <Card className="overflow-hidden min-h-[400px] md:min-h-[500px] lg:h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative h-64 md:h-80 lg:h-full">
                  <img src="/deka2.png" alt="RedTouchPro"
                    className="w-full h-full object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center ml-0 lg:ml-[-8%] translate-y-0 lg:translate-y-[-25%]">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {t('services.redtouch.title')}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t('services.redtouch.description')}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">{t('services.redtouch.areas.title')}</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• {t('services.redtouch.areas.face')}</li>
                      <li>• {t('services.redtouch.areas.decollete')}</li>
                      <li>• {t('services.redtouch.areas.hands')}</li>
                      <li>• {t('services.redtouch.areas.special')}</li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-gradient-hero text-white">
                      <Link to={withLang('/redtouch-laser-muenchen')}>
                        {t('common.learn-more')} <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={withLang('/preis#redtouchpro')}>{t('services.motus.view-prices')}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            </Link>
        </div>

        </div>
      </section>

      {/* Maniküre & Pediküre Section */}
      <section className="py-6 bg-white mt-[-2%]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to={withLang('/manikuere-pedikuere-muenchen')} className="block">
              <Card className="overflow-hidden min-h-[400px] md:min-h-[500px] lg:h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-primary mb-4">{t('services.nails.title')}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t('services.nails.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-gradient-hero text-white">
                        <Link to={withLang('/manikuere-pedikuere-muenchen')}>
                          {t('common.learn-more')} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to={withLang('/preis#manicure')}>{t('services.motus.view-prices')}</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-80 lg:h-full">
                    <img src="/23.png" alt="Maniküre & Pediküre" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Hand className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 bg-gradient-to-b from-white to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">{t('services.why-us.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">{t('services.why-us.experience')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">{t('services.why-us.certified')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">{t('services.why-us.individual')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">{t('services.why-us.flexible')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:col-span-2">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">{t('services.why-us.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 text-center">{t('services.all.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to={withLang('/laser-haarentfernung-muenchen')} className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">{t('services.all.laser')}</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <Link to={withLang('/redtouch-laser-muenchen')} className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">{t('services.all.redtouch')}</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <Link to={withLang('/icoone-laser-muenchen')} className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">{t('services.all.icoone')}</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <Link to={withLang('/manikuere-pedikuere-muenchen')} className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">{t('services.all.nails')}</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">{t('services.cta.title')}</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90"
              onClick={() => {
                if (window.yWidget) {
                  window.yWidget.show(window.yWidget.href);
                }
              }}
            >
              {t('services.cta.book')}
            </Button>
            <a
              href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              title="Instagram"
            >
              <Instagram className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default Services;