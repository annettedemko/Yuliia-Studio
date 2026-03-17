import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Zap,
  Target,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Snowflake,
  Monitor,
  Gem,
  Cpu,
  Layers,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import NatrixContactForm from '@/components/NatrixContactForm';

const NatrixDiodenlaser = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const heroHighlights = [
    { value: '3000W', label: t('natrix.diodenlaser.hero.highlight1') },
    { value: '808nm', label: t('natrix.diodenlaser.hero.highlight2') },
    { value: 'Dual', label: t('natrix.diodenlaser.hero.highlight3') },
  ];

  const technologyFeatures = [
    {
      icon: Zap,
      title: t('natrix.diodenlaser.tech.bars.title'),
      description: t('natrix.diodenlaser.tech.bars.description'),
    },
    {
      icon: Target,
      title: t('natrix.diodenlaser.tech.limo.title'),
      description: t('natrix.diodenlaser.tech.limo.description'),
    },
    {
      icon: Snowflake,
      title: t('natrix.diodenlaser.tech.cooling.title'),
      description: t('natrix.diodenlaser.tech.cooling.description'),
    },
    {
      icon: Gem,
      title: t('natrix.diodenlaser.tech.sapphire.title'),
      description: t('natrix.diodenlaser.tech.sapphire.description'),
    },
    {
      icon: Monitor,
      title: t('natrix.diodenlaser.tech.display.title'),
      description: t('natrix.diodenlaser.tech.display.description'),
    },
    {
      icon: Cpu,
      title: t('natrix.diodenlaser.tech.system.title'),
      description: t('natrix.diodenlaser.tech.system.description'),
    },
  ];

  const specifications = [
    { label: t('natrix.diodenlaser.spec.wavelength'), value: '808 nm' },
    { label: t('natrix.diodenlaser.spec.power'), value: '3000 W' },
    { label: t('natrix.diodenlaser.spec.handpiece.large'), value: '1600 W / 20×20 mm' },
    { label: t('natrix.diodenlaser.spec.handpiece.small'), value: '1000 W / 12×12 mm' },
    { label: t('natrix.diodenlaser.spec.bars'), value: t('natrix.diodenlaser.spec.bars.value') },
    { label: t('natrix.diodenlaser.spec.shots'), value: t('natrix.diodenlaser.spec.shots.value') },
    { label: t('natrix.diodenlaser.spec.cooling'), value: t('natrix.diodenlaser.spec.cooling.value') },
    { label: t('natrix.diodenlaser.spec.frequency'), value: '1–10 Hz' },
    { label: t('natrix.diodenlaser.spec.fluence'), value: '1–120 J/cm²' },
    { label: t('natrix.diodenlaser.spec.pulse'), value: '10–400 ms' },
    { label: t('natrix.diodenlaser.spec.display'), value: t('natrix.diodenlaser.spec.display.value') },
    { label: t('natrix.diodenlaser.spec.system'), value: t('natrix.diodenlaser.spec.system.value') },
    { label: t('natrix.diodenlaser.spec.dimensions'), value: '520 × 460 × 1390 mm' },
    { label: t('natrix.diodenlaser.spec.weight'), value: '69 kg' },
    { label: t('natrix.diodenlaser.spec.voltage'), value: '220 V / 50 Hz' },
  ];

  const applications = [
    t('natrix.diodenlaser.app.face'),
    t('natrix.diodenlaser.app.underarms'),
    t('natrix.diodenlaser.app.arms'),
    t('natrix.diodenlaser.app.legs'),
    t('natrix.diodenlaser.app.back'),
    t('natrix.diodenlaser.app.chest'),
    t('natrix.diodenlaser.app.bikini'),
    t('natrix.diodenlaser.app.intimate'),
  ];

  const skinTypes = [
    t('natrix.diodenlaser.skin.type1'),
    t('natrix.diodenlaser.skin.type2'),
    t('natrix.diodenlaser.skin.type3'),
    t('natrix.diodenlaser.skin.type4'),
    t('natrix.diodenlaser.skin.type5'),
    t('natrix.diodenlaser.skin.type6'),
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHelmet />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.08)_0%,_transparent_60%)]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-10 w-2 h-2 bg-[#C5A572]/30 rounded-full animate-pulse" />
          <div className="absolute top-48 right-24 w-3 h-3 bg-[#C5A572]/20 rounded-full animate-bounce delay-1000" />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#C5A572]/25 rounded-full animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-2 mb-6">
                <span className="text-[#C5A572] text-sm font-medium">Natrix Med</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('natrix.diodenlaser.hero.title')}
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
                {t('natrix.diodenlaser.hero.subtitle')}
              </p>

              {/* Key highlights */}
              <div className="flex flex-wrap gap-4 mb-8">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#C5A572] text-black hover:bg-[#d4b682] text-lg px-8 py-4 font-semibold"
                  asChild
                >
                  <a
                    href="#anfrage"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('natrix.diodenlaser.hero.cta')}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#C5A572]/30 text-[#C5A572] hover:bg-[#C5A572]/10 hover:border-[#C5A572]/50 text-lg px-8 py-4"
                  asChild
                >
                  <a href="#specs">
                    {t('natrix.diodenlaser.hero.specs')}
                  </a>
                </Button>
              </div>
            </div>

            {/* Device image */}
            <div className="relative animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C5A572]/10 via-transparent to-[#C5A572]/5 rounded-3xl blur-3xl" />
              <img
                src="/Natrix/n1.png"
                alt={t('natrix.diodenlaser.hero.imageAlt')}
                className="w-full h-auto object-contain rounded-2xl relative z-10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,165,114,0.05)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10" ref={revealRef}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.diodenlaser.tech.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('natrix.diodenlaser.tech.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#C5A572]/30 transition-all duration-500 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-[#C5A572]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C5A572]/20 transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-[#C5A572]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C5A572] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section id="specs" className="py-20 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,114,0.04)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.diodenlaser.specs.title')}
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
                  {specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={`border-b border-[#1a1a1a] ${
                        index % 2 === 0 ? 'bg-[#111111]' : 'bg-[#0f0f0f]'
                      } hover:bg-[#C5A572]/5 transition-colors`}
                    >
                      <td className="py-3.5 px-6 text-gray-300 text-sm font-medium">
                        {spec.label}
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

      {/* Applications Section */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.05)_0%,_transparent_60%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.diodenlaser.app.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('natrix.diodenlaser.app.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Body Areas */}
              <div>
                <h3 className="text-xl font-bold text-[#C5A572] mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  {t('natrix.diodenlaser.app.areas.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {applications.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 hover:border-[#C5A572]/30 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skin Types */}
              <div>
                <h3 className="text-xl font-bold text-[#C5A572] mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  {t('natrix.diodenlaser.skin.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skinTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 hover:border-[#C5A572]/30 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{type}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-[#C5A572]/5 border border-[#C5A572]/20 rounded-xl p-5">
                  <p className="text-[#C5A572] text-sm font-medium mb-1">
                    {t('natrix.diodenlaser.skin.note.title')}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {t('natrix.diodenlaser.skin.note.text')}
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
            <NatrixContactForm device="Diodenlaser 808 nm" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NatrixDiodenlaser;
