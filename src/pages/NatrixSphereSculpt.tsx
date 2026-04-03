import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Mail,
  Zap,
  Target,
  Shield,
  Star,
  CheckCircle,
  Monitor,
  Sparkles,
  Volume2,
  Hand,
  CircleDot,
  Heart,
  Droplets,
  Waves,
  Activity,
  Eye,
  Smile,
  Sun,
  Layers,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import NatrixContactForm from '@/components/NatrixContactForm';

const NatrixSphereSculpt = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const heroHighlights = [
    { value: '450', label: 'RPM' },
    { value: '300 Hz', label: t('natrix.sphere.spec.frequency').split(':')[0] || 'Hz' },
    { value: '300W', label: t('natrix.sphere.spec.power').split(':')[0] || 'Watt' },
  ];

  const bodyApplications = [
    { icon: Target, key: 'natrix.sphere.body.app.contouring' },
    { icon: Droplets, key: 'natrix.sphere.body.app.lymphatic' },
    { icon: Sparkles, key: 'natrix.sphere.body.app.tightening' },
    { icon: Heart, key: 'natrix.sphere.body.app.pain' },
    { icon: Activity, key: 'natrix.sphere.body.app.vascular' },
    { icon: Zap, key: 'natrix.sphere.body.app.muscle' },
  ];

  const bodyAreas = [
    'natrix.sphere.body.area.chin',
    'natrix.sphere.body.area.thigh',
    'natrix.sphere.body.area.flanks',
    'natrix.sphere.body.area.bra',
    'natrix.sphere.body.area.abdomen',
    'natrix.sphere.body.area.sides',
    'natrix.sphere.body.area.buttocks',
    'natrix.sphere.body.area.outer',
  ];

  const faceApplications = [
    { icon: Sparkles, key: 'natrix.sphere.face.app.wrinkles' },
    { icon: Sun, key: 'natrix.sphere.face.app.vascular' },
    { icon: Shield, key: 'natrix.sphere.face.app.tightening' },
    { icon: Smile, key: 'natrix.sphere.face.app.relaxation' },
    { icon: Star, key: 'natrix.sphere.face.app.collagen' },
  ];

  const faceAreas = [
    'natrix.sphere.face.area.mouth',
    'natrix.sphere.face.area.forehead',
    'natrix.sphere.face.area.cheekbones',
    'natrix.sphere.face.area.eyes',
    'natrix.sphere.face.area.cheeks',
    'natrix.sphere.face.area.glabella',
    'natrix.sphere.face.area.neck',
    'natrix.sphere.face.area.decollete',
  ];

  const advantages = [
    {
      icon: CircleDot,
      titleKey: 'natrix.sphere.adv.spheres.title',
      descKey: 'natrix.sphere.adv.spheres.desc',
    },
    {
      icon: Volume2,
      titleKey: 'natrix.sphere.adv.noise.title',
      descKey: 'natrix.sphere.adv.noise.desc',
    },
    {
      icon: Hand,
      titleKey: 'natrix.sphere.adv.gentle.title',
      descKey: 'natrix.sphere.adv.gentle.desc',
    },
    {
      icon: Waves,
      titleKey: 'natrix.sphere.adv.vibration.title',
      descKey: 'natrix.sphere.adv.vibration.desc',
    },
    {
      icon: Monitor,
      titleKey: 'natrix.sphere.adv.screen.title',
      descKey: 'natrix.sphere.adv.screen.desc',
    },
    {
      icon: Eye,
      titleKey: 'natrix.sphere.adv.handpieces.title',
      descKey: 'natrix.sphere.adv.handpieces.desc',
    },
  ];

  const specs = [
    { key: 'natrix.sphere.spec.screen', value: '15.4"' },
    { key: 'natrix.sphere.spec.rpm', value: '450 RPM' },
    { key: 'natrix.sphere.spec.frequency', value: '40 - 300 Hz' },
    { key: 'natrix.sphere.spec.power', value: '300 W' },
    { key: 'natrix.sphere.spec.voltage', value: 'AC 110V / 220V' },
    { key: 'natrix.sphere.spec.noise', value: '< 49 dB' },
    { key: 'natrix.sphere.spec.handpiece', value: '2350 g' },
    { key: 'natrix.sphere.spec.dimensions', value: '420 x 440 x 1220 mm' },
    { key: 'natrix.sphere.spec.weight', value: '40 kg' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHelmet />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-[#0a0a0a] flex items-center overflow-hidden pt-24 sm:pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.08)_0%,_transparent_60%)]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-10 w-2 h-2 bg-[#C5A572]/30 rounded-full animate-pulse" />
          <div className="absolute top-48 right-24 w-3 h-3 bg-[#C5A572]/20 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }} />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#C5A572]/25 rounded-full animate-pulse" style={{ animationDelay: '500ms' }} />
          <div className="absolute top-64 left-1/3 w-1 h-1 bg-[#C5A572]/20 rounded-full animate-pulse" style={{ animationDelay: '1500ms' }} />
          <div className="absolute bottom-60 right-1/3 w-2.5 h-2.5 bg-[#C5A572]/15 rounded-full animate-pulse" style={{ animationDelay: '2000ms' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 whitespace-nowrap" style={{ animationDelay: '100ms' }}>
                <span className="text-[#C5A572] text-xs sm:text-sm font-medium">Natrix Med</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('natrix.sphere.hero.badge')}
                <br />
                <span className="bg-gradient-to-r from-[#C5A572] to-[#E8D5B5] bg-clip-text text-transparent">
                  SphereSculpt
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl" style={{ animationDelay: '200ms' }}>
                {t('natrix.sphere.hero.subtitle')}
              </p>

              {/* Key highlights */}
              <div className="flex flex-wrap gap-4 mb-8">
                {heroHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-xl px-5 py-3 text-center animate-slide-up"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="text-2xl font-bold text-[#C5A572]">{item.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <Button
                  size="lg"
                  className="bg-[#C5A572] text-black hover:bg-[#d4b682] hover:scale-105 transition-all duration-300 text-lg px-8 py-4 font-semibold"
                  asChild
                >
                  <a href="#anfrage">
                    <Mail className="w-5 h-5 mr-2" />
                    {t('natrix.sphere.hero.cta.whatsapp')}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#C5A572]/30 text-[#C5A572] hover:bg-[#C5A572]/10 hover:border-[#C5A572]/50 text-lg px-8 py-4"
                  asChild
                >
                  <a href="#specs">
                    {t('natrix.sphere.hero.specs')}
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Device image */}
            <div className="relative animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C5A572]/10 via-transparent to-[#C5A572]/5 rounded-3xl blur-3xl" />
              <img
                src="/Natrix/sphere dark.png"
                alt={t('natrix.sphere.hero.alt')}
                className="w-full h-auto object-contain rounded-2xl relative z-10 bg-[#1a1a1a] hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology / Features Section */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,165,114,0.05)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10" ref={revealRef}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.sphere.adv.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, index) => (
                <Card
                  key={index}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#C5A572]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#C5A572]/5 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-[#C5A572]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C5A572]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <adv.icon className="w-7 h-7 text-[#C5A572]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C5A572] transition-colors">
                      {t(adv.titleKey)}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t(adv.descKey)}
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
            src="/Natrix/sphere light.png"
            alt={t('natrix.sphere.hero.alt')}
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
                {t('natrix.sphere.specs.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#2a2a2a]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#C5A572]/10 border-b border-[#2a2a2a]">
                    <th className="text-left text-[#C5A572] font-semibold py-4 px-6 text-sm uppercase tracking-wider">
                      {t('natrix.diodenlaser.specs.parameter')}
                    </th>
                    <th className="text-left text-[#C5A572] font-semibold py-4 px-6 text-sm uppercase tracking-wider">
                      {t('natrix.diodenlaser.specs.value')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec, index) => (
                    <tr
                      key={index}
                      className={`border-b border-[#1a1a1a] ${
                        index % 2 === 0 ? 'bg-[#111111]' : 'bg-[#0f0f0f]'
                      } hover:bg-[#C5A572]/5 transition-colors`}
                    >
                      <td className="py-3.5 px-6 text-gray-300 text-sm font-medium">
                        {t(spec.key)}
                      </td>
                      <td className="py-3.5 px-6 text-white text-sm">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body Handpiece — Full-screen cinematic ── */}
      <section className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center">
        {/* Animated gold orb background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(197,165,114,0.08)_0%,_transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C5A572]/[0.03] to-transparent" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          {/* Section label */}
          <div className="text-center mb-6 lg:mb-0 lg:text-left">
            <span className="inline-block text-[#C5A572]/60 text-[11px] font-medium uppercase tracking-[0.4em] mb-3">
              SphereSculpt
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Image — dominant, centered */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start group">
              {/* Glow ring behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full border border-[#C5A572]/10 group-hover:border-[#C5A572]/25 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#C5A572]/[0.04] group-hover:bg-[#C5A572]/[0.08] blur-3xl transition-all duration-1000" />
              <img
                src="/Natrix/сфера тело 1.png"
                alt={t('natrix.sphere.handpiece.body.alt')}
                className="relative z-10 w-[300px] sm:w-[380px] lg:w-[420px] h-auto object-contain drop-shadow-[0_0_60px_rgba(197,165,114,0.15)] group-hover:scale-105 group-hover:drop-shadow-[0_0_80px_rgba(197,165,114,0.25)] transition-all duration-700"
                loading="lazy"
              />
            </div>

            {/* Text content */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-[1.1]">
                {t('natrix.sphere.body.areas.title')}
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C5A572] to-transparent mb-8" />

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                {t('natrix.sphere.handpiece.body.desc')}
              </p>

              {/* Features as elegant glassmorphism pills */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {bodyAreas.map((area, index) => (
                  <span
                    key={index}
                    className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-full px-4 py-2 text-sm text-gray-300 hover:bg-[#C5A572]/10 hover:border-[#C5A572]/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {t(area)}
                  </span>
                ))}
              </div>

              {/* Benefits with animated line */}
              <div className="space-y-4">
                {bodyApplications.map((app, index) => (
                  <div key={index} className="flex items-center gap-4 group/item">
                    <div className="w-8 h-[1px] bg-[#C5A572]/20 group-hover/item:bg-[#C5A572] group-hover/item:w-12 transition-all duration-500" />
                    <span className="text-gray-500 text-sm group-hover/item:text-white transition-colors duration-300">{t(app.key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Face Handpiece — Full-screen cinematic (reversed) ── */}
      <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
        {/* Ambient light */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(197,165,114,0.06)_0%,_transparent_70%)] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#C5A572]/[0.02] to-transparent" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0">
            {/* Text content — left on desktop */}
            <div className="w-full lg:w-1/2 lg:pr-12">
              <span className="inline-block text-[#C5A572]/60 text-[11px] font-medium uppercase tracking-[0.4em] mb-3">
                SphereSculpt
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-[1.1]">
                {t('natrix.sphere.face.areas.title')}
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C5A572] to-transparent mb-8" />

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                {t('natrix.sphere.handpiece.face.desc')}
              </p>

              {/* Features as glassmorphism pills */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {faceAreas.map((area, index) => (
                  <span
                    key={index}
                    className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-full px-4 py-2 text-sm text-gray-300 hover:bg-[#C5A572]/10 hover:border-[#C5A572]/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {t(area)}
                  </span>
                ))}
              </div>

              {/* Benefits with animated line */}
              <div className="space-y-4">
                {faceApplications.map((app, index) => (
                  <div key={index} className="flex items-center gap-4 group/item">
                    <div className="w-8 h-[1px] bg-[#C5A572]/20 group-hover/item:bg-[#C5A572] group-hover/item:w-12 transition-all duration-500" />
                    <span className="text-gray-500 text-sm group-hover/item:text-white transition-colors duration-300">{t(app.key)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — right on desktop */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end group">
              {/* Glow ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] rounded-full border border-[#C5A572]/10 group-hover:border-[#C5A572]/25 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full bg-[#C5A572]/[0.04] group-hover:bg-[#C5A572]/[0.08] blur-3xl transition-all duration-1000" />
              <img
                src="/Natrix/сфера лицо.png"
                alt={t('natrix.sphere.handpiece.face.alt')}
                className="relative z-10 w-[340px] sm:w-[440px] lg:w-[500px] h-auto object-contain drop-shadow-[0_0_60px_rgba(197,165,114,0.15)] group-hover:scale-105 group-hover:drop-shadow-[0_0_80px_rgba(197,165,114,0.25)] transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="anfrage" className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto">
            <NatrixContactForm device="SphereSculpt" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NatrixSphereSculpt;
