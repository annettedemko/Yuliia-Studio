import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Shield,
  Headphones,
  Gem,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const NatrixGeraete = () => {
  const { t, language } = useLanguage();
  const scrollRef = useScrollReveal();

  const langPrefix = `/${language}`;

  const devices = [
    {
      id: 'diodenlaser',
      titleKey: 'natrix.overview.device.diodenlaser.title',
      subtitleKey: 'natrix.overview.device.diodenlaser.subtitle',
      descKey: 'natrix.overview.device.diodenlaser.desc',
      image: '/Natrix/natrix-diodenlaser.jpg',
      link: '/natrix-diodenlaser',
    },
    {
      id: 'ipl',
      titleKey: 'natrix.overview.device.ipl.title',
      subtitleKey: 'natrix.overview.device.ipl.subtitle',
      descKey: 'natrix.overview.device.ipl.desc',
      image: '/Natrix/natrix-ipl.jpg',
      link: '/natrix-ipl',
    },
    {
      id: 'spheresculpt',
      titleKey: 'natrix.overview.device.spheresculpt.title',
      subtitleKey: 'natrix.overview.device.spheresculpt.subtitle',
      descKey: 'natrix.overview.device.spheresculpt.desc',
      image: '/Natrix/natrix-spheresculpt.jpg',
      link: '/natrix-spheresculpt',
    },
    {
      id: 'rf-microneedling',
      titleKey: 'natrix.overview.device.rf.title',
      subtitleKey: 'natrix.overview.device.rf.subtitle',
      descKey: 'natrix.overview.device.rf.desc',
      image: '/Natrix/natrix-rf.jpg',
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
    <div className="min-h-screen bg-black">
      <PageHelmet />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-16">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#C5A572]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C5A572]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#C5A572]/30 bg-[#C5A572]/10">
            <span className="text-[#C5A572] text-sm font-medium tracking-wider uppercase">
              Natrix Med
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
            {t('natrix.overview.hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            {t('natrix.overview.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#C5A572] text-black hover:bg-[#C5A572]/90 text-lg px-8 py-4 font-semibold"
              asChild
            >
              <a href="https://wa.me/4915206067810" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('natrix.overview.hero.cta')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#C5A572]/50 text-[#C5A572] hover:bg-[#C5A572]/10 text-lg px-8 py-4 bg-transparent"
              asChild
            >
              <a href="#devices">
                {t('natrix.overview.hero.viewDevices')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Devices Grid Section */}
      <section id="devices" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('natrix.overview.devices.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('natrix.overview.devices.subtitle')}
            </p>
          </div>

          <div
            ref={scrollRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto scroll-reveal"
          >
            {devices.map((device) => (
              <Link
                key={device.id}
                to={`${langPrefix}${device.link}`}
                className="group block"
              >
                <Card className="overflow-hidden bg-gray-900 border-gray-800 hover:border-[#C5A572]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C5A572]/10 hover:-translate-y-1 h-full">
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={device.image}
                      alt={t(device.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C5A572]/90 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Natrix Med
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C5A572] transition-colors">
                      {t(device.titleKey)}
                    </h3>
                    <p className="text-[#C5A572] text-sm font-medium mb-3">
                      {t(device.subtitleKey)}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {t(device.descKey)}
                    </p>
                    <div className="flex items-center text-[#C5A572] text-sm font-medium group-hover:gap-2 transition-all">
                      {t('natrix.overview.devices.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Natrix Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('natrix.overview.why.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('natrix.overview.why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-[#C5A572]/30 transition-all duration-500 text-center group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#C5A572]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C5A572]/20 transition-colors">
                    <adv.icon className="w-8 h-8 text-[#C5A572]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {t(adv.titleKey)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(adv.descKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A572]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('natrix.overview.cta.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            {t('natrix.overview.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#C5A572] text-black hover:bg-[#C5A572]/90 text-lg px-8 py-4 font-semibold"
              asChild
            >
              <a href="https://wa.me/4915206067810" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('natrix.overview.cta.whatsapp')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#C5A572]/50 text-[#C5A572] hover:bg-[#C5A572]/10 text-lg px-8 py-4 bg-transparent"
              asChild
            >
              <a href="mailto:Yulachip@icloud.com">
                <Mail className="w-5 h-5 mr-2" />
                {t('natrix.overview.cta.email')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NatrixGeraete;
