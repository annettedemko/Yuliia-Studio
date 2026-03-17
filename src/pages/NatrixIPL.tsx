import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'react-router-dom';
import {
  Zap,
  Target,
  Shield,
  Star,
  CheckCircle,
  Monitor,
  Sparkles,
  Activity,
  Thermometer,
  Sun,
  Heart,
  Droplets,
  Clock,
  Gauge,
  Mail
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const GOLD = '#C5A572';

const NatrixIPL = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  const treatmentModes = [
    {
      icon: Sun,
      titleKey: 'natrix.ipl.modes.sr.title',
      descKey: 'natrix.ipl.modes.sr.desc',
      wavelength: '560–950 nm',
    },
    {
      icon: Heart,
      titleKey: 'natrix.ipl.modes.vr.title',
      descKey: 'natrix.ipl.modes.vr.desc',
      wavelength: '480–950 nm',
    },
    {
      icon: Sparkles,
      titleKey: 'natrix.ipl.modes.hr.title',
      descKey: 'natrix.ipl.modes.hr.desc',
      wavelength: '650–950 nm',
    },
  ];

  const technologyFeatures = [
    {
      icon: Star,
      titleKey: 'natrix.ipl.tech.reflector.title',
      descKey: 'natrix.ipl.tech.reflector.desc',
    },
    {
      icon: Zap,
      titleKey: 'natrix.ipl.tech.lamp.title',
      descKey: 'natrix.ipl.tech.lamp.desc',
    },
    {
      icon: Thermometer,
      titleKey: 'natrix.ipl.tech.cooling.title',
      descKey: 'natrix.ipl.tech.cooling.desc',
    },
    {
      icon: Shield,
      titleKey: 'natrix.ipl.tech.sapphire.title',
      descKey: 'natrix.ipl.tech.sapphire.desc',
    },
    {
      icon: Monitor,
      titleKey: 'natrix.ipl.tech.monitoring.title',
      descKey: 'natrix.ipl.tech.monitoring.desc',
    },
    {
      icon: Clock,
      titleKey: 'natrix.ipl.tech.continuous.title',
      descKey: 'natrix.ipl.tech.continuous.desc',
    },
  ];

  const applications = [
    'natrix.ipl.applications.hair',
    'natrix.ipl.applications.rejuvenation',
    'natrix.ipl.applications.pigmentation',
    'natrix.ipl.applications.vascular',
    'natrix.ipl.applications.acne',
  ];

  const specifications = [
    { labelKey: 'natrix.ipl.specs.power', value: '3000 W' },
    { labelKey: 'natrix.ipl.specs.continuous_power', value: '2000 W' },
    { labelKey: 'natrix.ipl.specs.wavelengths', value: '480–950 / 560–950 / 650–950 nm' },
    { labelKey: 'natrix.ipl.specs.spot_size', value: '8\u00D740 mm / 15\u00D750 mm' },
    { labelKey: 'natrix.ipl.specs.energy', value: '5–30 J/cm\u00B2' },
    { labelKey: 'natrix.ipl.specs.cooling_power', value: '108 W' },
    { labelKey: 'natrix.ipl.specs.screen', value: '15.6"' },
    { labelKey: 'natrix.ipl.specs.lamp', value: '9 mm / 1.000.000 Flashes' },
    { labelKey: 'natrix.ipl.specs.safety', value: 'Class II Type B' },
    { labelKey: 'natrix.ipl.specs.dimensions', value: '1345 \u00D7 447 \u00D7 466 mm' },
    { labelKey: 'natrix.ipl.specs.weight', value: '65 kg' },
    { labelKey: 'natrix.ipl.specs.operation', value: '24 h' },
  ];

  const heroRef = useScrollReveal({ threshold: 0.1 });
  const modesRef = useScrollReveal({ threshold: 0.1 });
  const techRef = useScrollReveal({ threshold: 0.1 });
  const specsRef = useScrollReveal({ threshold: 0.1 });
  const appsRef = useScrollReveal({ threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16 overflow-x-hidden">

        {/* Hero Section - Dark */}
        <section className="relative min-h-[55vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Background image */}
          <div
            className="absolute inset-0 animate-hero-zoom opacity-60"
            style={{
              backgroundImage: 'url(/Natrix/natrix-ipl.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, ${GOLD}15, transparent 60%)`,
            }}
          />

          <div ref={heroRef} className="relative z-10 container mx-auto px-4 text-center pt-8 md:pt-0 reveal reveal-up">
            <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-medium text-white/90 tracking-[0.2em] uppercase">
                {t('natrix.ipl.hero.badge')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
              <span style={{ color: GOLD }}>Natrix Med</span>{' '}
              <span className="text-white">IPL-Plattform</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light mb-3 max-w-3xl mx-auto">
              {t('natrix.ipl.hero.subtitle')}
            </p>

            <div className="flex items-center justify-center gap-3 mb-8 mt-6">
              <div className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(to right, transparent, ${GOLD}60)` }} />
              <div className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: `${GOLD}60` }} />
              <div className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(to left, transparent, ${GOLD}60)` }} />
            </div>

            {/* Key stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
              {[
                { value: '3000 W', labelKey: 'natrix.ipl.hero.stat.power' },
                { value: '3', labelKey: 'natrix.ipl.hero.stat.modes' },
                { value: '1M', labelKey: 'natrix.ipl.hero.stat.flashes' },
                { value: '24h', labelKey: 'natrix.ipl.hero.stat.operation' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl md:text-2xl font-bold" style={{ color: GOLD }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 text-black font-semibold hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: GOLD }}
                asChild
              >
                <a
                  href="https://wa.me/4915206067810?text=Anfrage%20Natrix%20IPL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('natrix.ipl.hero.cta.whatsapp')}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a href="mailto:Yulachip@icloud.com">
                  <Mail className="w-5 h-5 mr-2" />
                  {t('natrix.ipl.hero.cta.email')}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Treatment Modes Section */}
        <section className="py-16 md:py-20 bg-neutral-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ backgroundColor: `${GOLD}15` }} />
            <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full blur-2xl" style={{ backgroundColor: `${GOLD}10` }} />
          </div>

          <div ref={modesRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {t('natrix.ipl.modes.title')}
                </h2>
                <div className="w-40 h-1 mx-auto mb-6" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
                <p className="text-lg text-white/60 max-w-3xl mx-auto">
                  {t('natrix.ipl.modes.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {treatmentModes.map((mode, index) => (
                  <Card
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${GOLD}20` }}
                      >
                        <mode.icon className="w-8 h-8" style={{ color: GOLD }} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {t(mode.titleKey)}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {t(mode.descKey)}
                      </p>
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: `${GOLD}15`, color: GOLD }}
                      >
                        {mode.wavelength}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 md:py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full blur-lg" style={{ backgroundColor: GOLD }} />
            <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full blur-2xl" style={{ backgroundColor: GOLD }} />
          </div>

          <div ref={techRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {t('natrix.ipl.tech.title')}
                </h2>
                <div className="w-40 h-1 mx-auto mb-6" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
                <p className="text-lg text-white/60 max-w-3xl mx-auto">
                  {t('natrix.ipl.tech.subtitle')}
                </p>
              </div>

              {/* Cards around device layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* LEFT SIDE */}
                <div className="lg:col-span-4 space-y-6">
                  {technologyFeatures.slice(0, 3).map((feature, index) => (
                    <Card
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:shadow-xl transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: `${GOLD}15` }}
                          >
                            <feature.icon className="w-6 h-6" style={{ color: GOLD }} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-opacity-100 transition-colors" style={{ color: GOLD }}>
                              {t(feature.titleKey)}
                            </h3>
                            <p className="text-xs text-white/50 leading-tight">
                              {t(feature.descKey)}
                            </p>
                          </div>
                        </div>
                        <div
                          className="mt-3 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                          style={{ backgroundColor: GOLD }}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CENTER - Device Image */}
                <div className="lg:col-span-4 text-center flex items-center justify-center">
                  <div className="relative inline-block">
                    <img
                      src="/Natrix/natrix-ipl.jpg"
                      alt={t('natrix.ipl.alt.device')}
                      className="w-full max-w-sm mx-auto object-contain rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl blur-3xl scale-110 opacity-20 -z-10"
                      style={{ backgroundColor: GOLD }}
                    />
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-4 space-y-6">
                  {technologyFeatures.slice(3, 6).map((feature, index) => (
                    <Card
                      key={index + 3}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:shadow-xl transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${(index + 3) * 200}ms` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: `${GOLD}15` }}
                          >
                            <feature.icon className="w-6 h-6" style={{ color: GOLD }} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-white mb-1" style={{ color: GOLD }}>
                              {t(feature.titleKey)}
                            </h3>
                            <p className="text-xs text-white/50 leading-tight">
                              {t(feature.descKey)}
                            </p>
                          </div>
                        </div>
                        <div
                          className="mt-3 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                          style={{ backgroundColor: GOLD }}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Table Section */}
        <section className="py-16 md:py-20 bg-neutral-950">
          <div ref={specsRef} className="container mx-auto px-4 reveal reveal-up">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {t('natrix.ipl.specs.title')}
                </h2>
                <div className="w-40 h-1 mx-auto mb-6" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4 text-white/70 text-sm md:text-base font-medium">
                          {t(spec.labelKey)}
                        </td>
                        <td className="py-4 px-4 text-right font-semibold text-sm md:text-base" style={{ color: GOLD }}>
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Handpieces info */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-white/5 border border-white/10">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${GOLD}15` }}
                    >
                      <Target className="w-7 h-7" style={{ color: GOLD }} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{t('natrix.ipl.specs.handpiece1.title')}</h4>
                    <p className="text-white/50 text-sm">{t('natrix.ipl.specs.handpiece1.desc')}</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border border-white/10">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${GOLD}15` }}
                    >
                      <Gauge className="w-7 h-7" style={{ color: GOLD }} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{t('natrix.ipl.specs.handpiece2.title')}</h4>
                    <p className="text-white/50 text-sm">{t('natrix.ipl.specs.handpiece2.desc')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 md:py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: GOLD }} />
          </div>

          <div ref={appsRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {t('natrix.ipl.applications.title')}
                </h2>
                <div className="w-40 h-1 mx-auto mb-6" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  {t('natrix.ipl.applications.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {applications.map((appKey, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${GOLD}15` }}
                    >
                      <CheckCircle className="w-5 h-5" style={{ color: GOLD }} />
                    </div>
                    <span className="text-white font-medium">{t(appKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at center, ${GOLD}10, transparent 70%)`,
            }}
          />

          <div ref={ctaRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t('natrix.ipl.cta.title')}
              </h2>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                {t('natrix.ipl.cta.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full px-10 py-6 text-black font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: GOLD }}
                  asChild
                >
                  <a
                    href="https://wa.me/4915206067810?text=Anfrage%20Natrix%20IPL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 py-6 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-lg transition-all duration-300"
                  asChild
                >
                  <a href="mailto:Yulachip@icloud.com">
                    <Mail className="w-5 h-5 mr-2" />
                    {t('natrix.ipl.cta.email')}
                  </a>
                </Button>
              </div>

              <p className="mt-8 text-white/40 text-sm">
                {t('natrix.ipl.cta.note')}
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NatrixIPL;
