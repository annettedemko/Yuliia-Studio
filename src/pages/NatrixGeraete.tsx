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
import NatrixContactForm from '@/components/NatrixContactForm';

const GOLD = '#C5A572';

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
      image: '/Natrix/diod dark.png',
      link: '/natrix-diodenlaser',
    },
    {
      id: 'ipl',
      titleKey: 'natrix.overview.device.ipl.title',
      subtitleKey: 'natrix.overview.device.ipl.subtitle',
      descKey: 'natrix.overview.device.ipl.desc',
      image: '/Natrix/ipl dark.png',
      link: '/natrix-ipl',
    },
    {
      id: 'spheresculpt',
      titleKey: 'natrix.overview.device.spheresculpt.title',
      subtitleKey: 'natrix.overview.device.spheresculpt.subtitle',
      descKey: 'natrix.overview.device.spheresculpt.desc',
      image: '/Natrix/sphere dark.png',
      link: '/natrix-spheresculpt',
    },
    {
      id: 'rf-microneedling',
      titleKey: 'natrix.overview.device.rf.title',
      subtitleKey: 'natrix.overview.device.rf.subtitle',
      descKey: 'natrix.overview.device.rf.desc',
      image: '/Natrix/rf dark.png',
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
      <div className="min-h-screen pt-16 bg-[#0a0a0a] text-white">

        {/* Hero Section */}
        <section
          className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 animate-hero-zoom opacity-50"
            style={{
              backgroundImage: 'url(/Natrix/diod dark.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a]" />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 40%, ${GOLD}12, transparent 60%)` }} />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8 sm:py-12">
            <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-medium tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                Natrix Med
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
              <span style={{ color: GOLD }}>
                {t('natrix.overview.hero.title')}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('natrix.overview.hero.subtitle')}
            </p>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(to right, transparent, ${GOLD}60)` }} />
              <div className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: `${GOLD}60` }} />
              <div className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(to left, transparent, ${GOLD}60)` }} />
            </div>

            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold min-h-[48px] transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: GOLD, color: '#000' }}
            >
              {t('natrix.overview.hero.cta')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Devices Grid Section */}
        <section id="devices" className="py-16 sm:py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.04)_0%,_transparent_70%)]" />

          <div ref={devicesRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.overview.devices.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
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
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#C5A572]/40 bg-[#111111] hover:bg-[#161616] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A572]/10 h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden bg-black">
                      <img
                        src={device.image}
                        alt={t(device.titleKey)}
                        className="w-full h-56 sm:h-64 md:h-72 object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md" style={{ backgroundColor: `${GOLD}cc`, color: '#000' }}>
                          Natrix Med
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/10 backdrop-blur-sm text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">
                          {t('natrix.price.onRequest')}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C5A572] transition-colors">
                        {t(device.titleKey)}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: GOLD }}>
                        {t(device.subtitleKey)}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {t(device.descKey)}
                      </p>
                      <div className="flex items-center text-sm font-medium group-hover:gap-2 transition-all" style={{ color: GOLD }}>
                        {t('natrix.overview.devices.learnMore')}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Natrix Section */}
        <section className="py-16 sm:py-20 bg-[#111111] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.05)_0%,_transparent_50%)]" />

          <div ref={whyRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.overview.why.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                {t('natrix.overview.why.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {advantages.map((adv, index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-[#C5A572]/30 hover:bg-[#161616] transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${GOLD}20, ${GOLD}08)` }}
                  >
                    <adv.icon className="w-8 h-8" style={{ color: GOLD }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#C5A572] transition-colors">
                    {t(adv.titleKey)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(adv.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="anfrage" className="py-12 sm:py-20 bg-[#0a0a0a] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(197,165,114,0.04)_0%,_transparent_60%)]" />
          <div ref={formRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
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
