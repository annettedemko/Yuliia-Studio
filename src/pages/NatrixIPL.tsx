import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Zap,
  Target,
  Shield,
  Star,
  CheckCircle,
  Monitor,
  Sparkles,
  Thermometer,
  Sun,
  Heart,
  Clock,
  Gauge,
  Mail,
  Layers,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import NatrixContactForm from '@/components/NatrixContactForm';

const NatrixIPL = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const heroHighlights = [
    { value: '3000W', label: t('natrix.ipl.hero.stat.power') },
    { value: '3 Modi', label: t('natrix.ipl.hero.stat.modes') },
    { value: '1M', label: t('natrix.ipl.hero.stat.flashes') },
  ];

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

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHelmet />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-[#0a0a0a] flex items-center overflow-hidden pt-24 sm:pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.08)_0%,_transparent_60%)]" />

        {/* Decorative floating gold dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-10 w-2 h-2 bg-[#C5A572]/30 rounded-full animate-pulse" />
          <div className="absolute top-48 right-24 w-3 h-3 bg-[#C5A572]/20 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }} />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#C5A572]/25 rounded-full animate-pulse" style={{ animationDelay: '500ms' }} />
          <div className="absolute top-64 left-1/3 w-1 h-1 bg-[#C5A572]/20 rounded-full animate-pulse" style={{ animationDelay: '1500ms' }} />
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-[#C5A572]/15 rounded-full animate-pulse" style={{ animationDelay: '2000ms' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text content */}
            <div>
              <div
                className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 animate-slide-up whitespace-nowrap"
                style={{ animationDelay: '0ms' }}
              >
                <span className="text-[#C5A572] text-xs sm:text-sm font-medium">Natrix Med</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up"
                style={{ animationDelay: '100ms' }}
              >
                {t('natrix.ipl.hero.title')}
              </h1>

              <p
                className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl animate-slide-up"
                style={{ animationDelay: '200ms' }}
              >
                {t('natrix.ipl.hero.subtitle')}
              </p>

              {/* Key highlights */}
              <div
                className="flex flex-wrap gap-4 mb-8 animate-slide-up"
                style={{ animationDelay: '300ms' }}
              >
                {heroHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-xl px-5 py-3 text-center"
                  >
                    <div className="text-2xl font-bold text-[#C5A572]">{item.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-slide-up"
                style={{ animationDelay: '400ms' }}
              >
                <Button
                  size="lg"
                  className="bg-[#C5A572] text-black hover:bg-[#d4b682] hover:scale-105 transition-all duration-300 text-lg px-8 py-4 font-semibold"
                  asChild
                >
                  <a href="#anfrage">
                    <Mail className="w-5 h-5 mr-2" />
                    {t('natrix.ipl.hero.cta.whatsapp')}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#C5A572]/30 text-[#C5A572] hover:bg-[#C5A572]/10 hover:border-[#C5A572]/50 text-lg px-8 py-4"
                  asChild
                >
                  <a href="#specs">
                    {t('natrix.ipl.hero.specs')}
                  </a>
                </Button>
              </div>
            </div>

            {/* RIGHT: Device image */}
            <div
              className="relative animate-slide-up"
              style={{ animationDelay: '500ms' }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C5A572]/10 via-transparent to-[#C5A572]/5 rounded-3xl blur-3xl" />
              <img
                src="/Natrix/ipl dark.png"
                alt={t('natrix.ipl.alt.device')}
                className="w-full h-auto object-contain rounded-2xl relative z-10 bg-[#1a1a1a] hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modes Section */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,165,114,0.05)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.ipl.modes.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('natrix.ipl.modes.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {treatmentModes.map((mode, index) => (
                <Card
                  key={index}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#C5A572]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#C5A572]/5 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-[#C5A572]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C5A572]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <mode.icon className="w-7 h-7 text-[#C5A572]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C5A572] transition-colors">
                      {t(mode.titleKey)}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {t(mode.descKey)}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#C5A572]/10 text-[#C5A572]">
                      {mode.wavelength}
                    </div>
                    <div className="mt-4 h-0.5 bg-gradient-to-r from-[#C5A572] to-[#C5A572]/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,165,114,0.05)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10" ref={revealRef}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.ipl.tech.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('natrix.ipl.tech.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#C5A572]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#C5A572]/5 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-[#C5A572]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C5A572]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-[#C5A572]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C5A572] transition-colors">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t(feature.descKey)}
                    </p>
                    <div className="mt-4 h-0.5 bg-gradient-to-r from-[#C5A572] to-[#C5A572]/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Device Showcase - Light Version */}
      <section className="py-0 bg-white">
        <div className="max-w-3xl mx-auto">
          <img
            src="/Natrix/ipl light.png"
            alt={t('natrix.ipl.alt.device')}
            className="w-full object-contain"
            loading="lazy"
          />
        </div>
      </section>

      {/* Specifications Table */}
      <section id="specs" className="py-20 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,114,0.04)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.ipl.specs.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#2a2a2a]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#C5A572]/10 border-b border-[#2a2a2a]">
                    <th className="text-left text-[#C5A572] font-semibold py-4 px-6 text-sm uppercase tracking-wider">
                      {t('natrix.ipl.specs.parameter') || t('natrix.diodenlaser.specs.parameter')}
                    </th>
                    <th className="text-left text-[#C5A572] font-semibold py-4 px-6 text-sm uppercase tracking-wider">
                      {t('natrix.ipl.specs.value_header') || t('natrix.diodenlaser.specs.value')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={`border-b border-[#1a1a1a] ${
                        index % 2 === 0 ? 'bg-[#111111]' : 'bg-[#0f0f0f]'
                      } hover:bg-[#C5A572]/5 transition-colors`}
                    >
                      <td className="py-3.5 px-6 text-gray-300 text-sm font-medium">
                        {t(spec.labelKey)}
                      </td>
                      <td className="py-3.5 px-6 text-white text-sm">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Handpieces info */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#C5A572]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#C5A572]/5 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#C5A572]/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C5A572]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target className="w-7 h-7 text-[#C5A572]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-[#C5A572] transition-colors">{t('natrix.ipl.specs.handpiece1.title')}</h4>
                  <p className="text-gray-400 text-sm">{t('natrix.ipl.specs.handpiece1.desc')}</p>
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-[#C5A572] to-[#C5A572]/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
              <Card className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#C5A572]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#C5A572]/5 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#C5A572]/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C5A572]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Gauge className="w-7 h-7 text-[#C5A572]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-[#C5A572] transition-colors">{t('natrix.ipl.specs.handpiece2.title')}</h4>
                  <p className="text-gray-400 text-sm">{t('natrix.ipl.specs.handpiece2.desc')}</p>
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-[#C5A572] to-[#C5A572]/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.05)_0%,_transparent_60%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.ipl.applications.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('natrix.ipl.applications.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Applications list */}
              <div>
                <h3 className="text-xl font-bold text-[#C5A572] mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  {t('natrix.ipl.applications.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {applications.map((appKey, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 hover:border-[#C5A572]/30 hover:bg-[#1a1a1a]/80 transition-all duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{t(appKey)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment modes summary */}
              <div>
                <h3 className="text-xl font-bold text-[#C5A572] mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  {t('natrix.ipl.modes.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatmentModes.map((mode, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 hover:border-[#C5A572]/30 hover:bg-[#1a1a1a]/80 transition-all duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{t(mode.titleKey)} ({mode.wavelength})</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-[#C5A572]/5 border border-[#C5A572]/20 rounded-xl p-5">
                  <p className="text-[#C5A572] text-sm font-medium mb-1">
                    {t('natrix.ipl.applications.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="anfrage" className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto">
            <NatrixContactForm device="IPL-Plattform" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NatrixIPL;
