import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Shield,
  Headphones,
  Gem,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionDivider from '@/components/SectionDivider';
import NatrixContactForm from '@/components/NatrixContactForm';

const NatrixGeraete = () => {
  const { t, language } = useLanguage();
  const devicesRef = useScrollReveal({ threshold: 0.1 });
  const whyRef = useScrollReveal({ threshold: 0.1 });
  const formRef = useScrollReveal({ threshold: 0.1 });

  const langPrefix = `/${language}`;

  const devices = [
    {
      id: 'diodenlaser',
      titleKey: 'natrix.overview.device.diodenlaser.title',
      subtitleKey: 'natrix.overview.device.diodenlaser.subtitle',
      descKey: 'natrix.overview.device.diodenlaser.desc',
      image: '/Natrix/n1-1.png',
      link: '/natrix-diodenlaser',
    },
    {
      id: 'ipl',
      titleKey: 'natrix.overview.device.ipl.title',
      subtitleKey: 'natrix.overview.device.ipl.subtitle',
      descKey: 'natrix.overview.device.ipl.desc',
      image: '/Natrix/n4.png',
      link: '/natrix-ipl',
    },
    {
      id: 'spheresculpt',
      titleKey: 'natrix.overview.device.spheresculpt.title',
      subtitleKey: 'natrix.overview.device.spheresculpt.subtitle',
      descKey: 'natrix.overview.device.spheresculpt.desc',
      image: '/Natrix/n2-2.png',
      link: '/natrix-spheresculpt',
    },
    {
      id: 'rf-microneedling',
      titleKey: 'natrix.overview.device.rf.title',
      subtitleKey: 'natrix.overview.device.rf.subtitle',
      descKey: 'natrix.overview.device.rf.desc',
      image: '/Natrix/n3.png',
      link: '/natrix-rf-microneedling',
    },
  ];

  const advantages = [
    {
      icon: Gem,
      titleKey: 'natrix.overview.why.premium.title',
      descKey: 'natrix.overview.why.premium.desc',
    },
    {
      icon: Award,
      titleKey: 'natrix.overview.why.lenses.title',
      descKey: 'natrix.overview.why.lenses.desc',
    },
    {
      icon: Shield,
      titleKey: 'natrix.overview.why.certification.title',
      descKey: 'natrix.overview.why.certification.desc',
    },
    {
      icon: Headphones,
      titleKey: 'natrix.overview.why.support.title',
      descKey: 'natrix.overview.why.support.desc',
    },
  ];

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16 bg-gradient-to-b from-white via-gray-50/30 to-white">

        {/* Hero Section */}
        <section
          className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Natrix/n1-1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8 sm:py-12">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-rose-gold text-sm font-medium tracking-wider uppercase">
                Natrix Med
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-rose-gold/90 to-white bg-clip-text text-transparent">
                {t('natrix.overview.hero.title')}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('natrix.overview.hero.subtitle')}
            </p>

            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold min-h-[48px]"
            >
              {t('natrix.overview.hero.cta')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <SectionDivider variant="curve" />

        {/* Devices Grid Section */}
        <section id="devices" className="py-10 sm:py-16 bg-gradient-to-b from-white/90 to-white relative">
          <div ref={devicesRef} className="container mx-auto px-4 reveal reveal-up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('natrix.overview.devices.title')}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                {t('natrix.overview.devices.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {devices.map((device) => (
                <Link
                  key={device.id}
                  to={`${langPrefix}${device.link}`}
                  className="group block"
                >
                  <Card className="hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-0 relative z-10">
                      <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-b from-gray-50 to-gray-100">
                        <img
                          src={device.image}
                          alt={t(device.titleKey)}
                          className="w-full h-56 sm:h-64 md:h-72 object-contain p-4 img-silk-zoom"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-rose-gold/90 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                            Natrix Med
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                            {t('natrix.price.onRequest')}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 bg-gradient-to-b from-white to-gray-50/50 group-hover:from-rose-gold/5 group-hover:to-white transition-all duration-300">
                        <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-rose-gold transition-colors">
                          {t(device.titleKey)}
                        </h3>
                        <p className="text-rose-gold text-sm font-medium mb-3">
                          {t(device.subtitleKey)}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300">
                          {t(device.descKey)}
                        </p>
                        <div className="flex items-center text-rose-gold text-sm font-medium group-hover:gap-2 transition-all">
                          {t('natrix.overview.devices.learnMore')}
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Natrix Section */}
        <section className="py-10 sm:py-16 bg-gradient-to-b from-gray-50/50 to-white relative">
          <div ref={whyRef} className="container mx-auto px-4 reveal reveal-up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('natrix.overview.why.title')}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                {t('natrix.overview.why.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {advantages.map((adv, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-rose-gold/10 transition-all duration-500 hover:-translate-y-1 text-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold/15 to-rose-gold/5 flex items-center justify-center mx-auto mb-5 group-hover:from-rose-gold/25 group-hover:to-rose-gold/10 transition-all duration-300">
                      <adv.icon className="w-8 h-8 text-rose-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-rose-gold transition-colors">
                      {t(adv.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(adv.descKey)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="anfrage" className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50/50 relative">
          <div ref={formRef} className="container mx-auto px-4 reveal reveal-up">
            <div className="max-w-xl mx-auto">
              <NatrixContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NatrixGeraete;
