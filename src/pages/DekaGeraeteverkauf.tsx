import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Shield,
  Star,
  Zap,
  Target,
  Phone,
  Mail,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DekaGeraeteverkauf = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  const getDeviceUrl = (deviceId: string) => {
    const paths: Record<string, string> = {
      'physiq360': '/physiq360',
      'redtouch-pro': '/redtouch-pro',
      'again-cos': '/again-cos',
      'motus-ax': '/motus-ax',
      'motus-pro': '/motus-pro',
    };
    const path = paths[deviceId] || '#';
    return path === '#' ? path : `${langPrefix}${path}`;
  };

  const handleCardClick = (deviceId: string) => {
    const url = getDeviceUrl(deviceId);
    if (url !== '#') {
      navigate(url);
    }
  };

  const dekaDevices = [
    {
      id: 'physiq360',
      name: t('equipment.device.physiq360.name'),
      subtitle: t('equipment.device.physiq360.subtitle'),
      description: t('equipment.device.physiq360.description'),
      features: [
        t('equipment.device.physiq360.feature1'),
        t('equipment.device.physiq360.feature2'),
        t('equipment.device.physiq360.feature3'),
        t('equipment.device.physiq360.feature4')
      ],
      image: '/deka4.png'
    },
    {
      id: 'redtouch-pro',
      name: t('equipment.device.redtouch-pro.name'),
      subtitle: t('equipment.device.redtouch-pro.subtitle'),
      description: t('equipment.device.redtouch-pro.description'),
      features: [
        t('equipment.device.redtouch-pro.feature1'),
        t('equipment.device.redtouch-pro.feature2'),
        t('equipment.device.redtouch-pro.feature3'),
        t('equipment.device.redtouch-pro.feature4'),
        t('equipment.device.redtouch-pro.feature5')
      ],
      image: '/deka2.png'
    },
    {
      id: 'again-cos',
      name: t('equipment.device.again-cos.name'),
      subtitle: t('equipment.device.again-cos.subtitle'),
      description: t('equipment.device.again-cos.description'),
      features: [
        t('equipment.device.again-cos.feature1'),
        t('equipment.device.again-cos.feature2'),
        t('equipment.device.again-cos.feature3'),
        t('equipment.device.again-cos.feature4')
      ],
      image: '/deka5.png'
    },
    {
      id: 'motus-ax',
      name: t('equipment.device.motus-ax.name'),
      subtitle: t('equipment.device.motus-ax.subtitle'),
      description: t('equipment.device.motus-ax.description'),
      features: [
        t('equipment.device.motus-ax.feature1'),
        t('equipment.device.motus-ax.feature2'),
        t('equipment.device.motus-ax.feature3'),
        t('equipment.device.motus-ax.feature4')
      ],
      image: '/deka3.png'
    },
    {
      id: 'motus-pro',
      name: t('equipment.device.motus-pro.name'),
      subtitle: t('equipment.device.motus-pro.subtitle'),
      description: t('equipment.device.motus-pro.description'),
      features: [
        t('equipment.device.motus-pro.feature1'),
        t('equipment.device.motus-pro.feature2'),
        t('equipment.device.motus-pro.feature3'),
        t('equipment.device.motus-pro.feature4')
      ],
      image: '/deka1.png'
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: t('equipment.advantages.innovation.title'),
      description: t('equipment.advantages.innovation.description')
    },
    {
      icon: Shield,
      title: t('equipment.advantages.safety.title'),
      description: t('equipment.advantages.safety.description')
    },
    {
      icon: Target,
      title: t('equipment.advantages.precision.title'),
      description: t('equipment.advantages.precision.description')
    },
    {
      icon: Star,
      title: t('equipment.advantages.excellence.title'),
      description: t('equipment.advantages.excellence.description')
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] md:min-h-[70vh] lg:h-[80vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(/DEKA.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-900/15"></div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-rose-gold/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-float"></div>
        </div>


        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 animate-slide-up">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-white drop-shadow-lg">
            {t('equipment.hero.title')}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-4xl mx-auto leading-relaxed mt-4">
            {t('equipment.hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-none shadow-lg text-lg px-8 py-4"
              onClick={() => {
                if (window.alteg_code) {
                  window.alteg_code.show();
                }
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('equipment.hero.consultation')}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4"
              asChild
            >
              <a href="#devices">
                {t('equipment.hero.view-equipment')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About DEKA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t('equipment.about.title')}
              </h2>

              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('equipment.about.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('equipment.advantages.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('equipment.advantages.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <advantage.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section id="devices" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">{t('equipment.devices.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('equipment.devices.subtitle')}
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {dekaDevices.map((device, index) => (
              <div key={device.id} onClick={() => handleCardClick(device.id)}>
                <Card className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-up cursor-pointer ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`} style={{animationDelay: `${index * 200}ms`}}>
                <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px]">
                  <div className="relative overflow-hidden">
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                      style={{
                        transform: device.id === 'physiq360' ? 'scale(0.75)' :
                                 device.id === 'redtouch-pro' ? 'scale(0.85)' :
                                 device.id === 'again-cos' ? 'scale(0.8)' :
                                 device.id === 'motus-ax' ? 'scale(0.85)' :
                                 device.id === 'motus-pro' ? 'scale(0.8)' : 'scale(1)',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-primary font-semibold text-sm">DEKA Technology</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <img
                        src="/DEKA logo.png"
                        alt="DEKA Logo"
                        className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                        style={{
                          filter: 'brightness(1.2) saturate(1.1)',
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-primary mb-2">{device.name}</h3>
                      <p className="text-lg text-rose-gold font-medium mb-4">{device.subtitle}</p>
                      <p className="text-muted-foreground text-lg leading-relaxed">{device.description}</p>
                    </div>
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-primary mb-4">{t('equipment.devices.features')}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {device.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-rose-gold flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.alteg_code) {
                            window.alteg_code.show();
                          }
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {t('equipment.device.request-consultation')}
                      </Button>
                      <Button
                        variant="outline"
                        className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white"
                        asChild
                      >
                        <a href="mailto:Yulachip@icloud.com" onClick={(e) => e.stopPropagation()}>
                          <Mail className="w-4 h-4 mr-2" />
                          {t('equipment.device.request-quote')}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-rose-gold/10 rounded-full blur-xl animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {t('equipment.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('equipment.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              onClick={() => {
                if (window.alteg_code) {
                  window.alteg_code.show();
                }
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('equipment.cta.get-consultation')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4"
              asChild
            >
              <a href="mailto:Yulachip@icloud.com">
                <Mail className="w-5 h-5 ml-2" />
                {t('equipment.cta.send-email')}
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DekaGeraeteverkauf;