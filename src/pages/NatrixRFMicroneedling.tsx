import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Zap,
  Shield,
  Target,
  CheckCircle,
  Monitor,
  Sparkles,
  Award,
  Mail,
  MessageCircle,
  Thermometer,
  Layers,
  Cpu,
  Gauge,
  ScanLine,
  Snowflake,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import NatrixContactForm from '@/components/NatrixContactForm';

const NatrixRFMicroneedling = () => {
  const { t } = useLanguage();

  const heroRef = useScrollReveal({ threshold: 0.1 });
  const microneedlingRef = useScrollReveal({ threshold: 0.1 });
  const thermagicalRef = useScrollReveal({ threshold: 0.1 });
  const technologyRef = useScrollReveal({ threshold: 0.1 });
  const specsRef = useScrollReveal({ threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.1 });

  const applications = [
    'natrix.rf.applications.lifting',
    'natrix.rf.applications.tightening',
    'natrix.rf.applications.wrinkles',
    'natrix.rf.applications.pores',
    'natrix.rf.applications.acne-scars',
    'natrix.rf.applications.scars',
    'natrix.rf.applications.stretch-marks',
  ];

  const cartridges = [
    { pins: '10', key: 'natrix.rf.cartridge.10' },
    { pins: '25', key: 'natrix.rf.cartridge.25' },
    { pins: '36', key: 'natrix.rf.cartridge.36' },
    { pins: '49', key: 'natrix.rf.cartridge.49' },
    { pins: '64', key: 'natrix.rf.cartridge.64' },
  ];

  const thermagicalTips = [
    { size: '5x5 mm', key: 'natrix.rf.tip.5' },
    { size: '10x10 mm', key: 'natrix.rf.tip.10' },
    { size: '20x20 mm', key: 'natrix.rf.tip.20' },
    { size: '40x40 mm', key: 'natrix.rf.tip.40' },
  ];

  const technologyFeatures = [
    {
      icon: Sparkles,
      titleKey: 'natrix.rf.tech.gold-needles.title',
      descKey: 'natrix.rf.tech.gold-needles.desc',
    },
    {
      icon: Zap,
      titleKey: 'natrix.rf.tech.dual-freq.title',
      descKey: 'natrix.rf.tech.dual-freq.desc',
    },
    {
      icon: Snowflake,
      titleKey: 'natrix.rf.tech.cooling.title',
      descKey: 'natrix.rf.tech.cooling.desc',
    },
    {
      icon: Cpu,
      titleKey: 'natrix.rf.tech.motor.title',
      descKey: 'natrix.rf.tech.motor.desc',
    },
    {
      icon: ScanLine,
      titleKey: 'natrix.rf.tech.id-chip.title',
      descKey: 'natrix.rf.tech.id-chip.desc',
    },
    {
      icon: Shield,
      titleKey: 'natrix.rf.tech.nanofilter.title',
      descKey: 'natrix.rf.tech.nanofilter.desc',
    },
  ];

  const specs = [
    { labelKey: 'natrix.rf.spec.frequency', value: '5 MHz / 8 MHz' },
    { labelKey: 'natrix.rf.spec.power', value: '400 W' },
    { labelKey: 'natrix.rf.spec.depth', value: '0.1 – 4 mm' },
    { labelKey: 'natrix.rf.spec.needle-diameter', value: '0.18 mm' },
    { labelKey: 'natrix.rf.spec.pulse-micro', value: '250 – 600 ms' },
    { labelKey: 'natrix.rf.spec.pulse-therma', value: '1000 – 3000 ms' },
    { labelKey: 'natrix.rf.spec.display', value: '15.6"' },
    { labelKey: 'natrix.rf.spec.voltage', value: 'AC 220V/110V' },
  ];

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16 overflow-x-hidden bg-black">

        {/* Hero Section - Dark */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/Natrix/n3.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(197,165,114,0.1),transparent_60%)]"></div>

          <div ref={heroRef} className="relative z-10 container mx-auto px-4 text-center reveal reveal-up">
            <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-[#C5A572]/30 rounded-full px-5 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
              <span className="text-xs font-medium text-[#C5A572] tracking-[0.2em] uppercase">
                {t('natrix.rf.hero.badge')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
              <span className="text-[#C5A572]">Natrix Med</span>
              <br />
              RF Microneedling
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light mb-6 max-w-2xl mx-auto">
              {t('natrix.rf.hero.subtitle')}
            </p>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C5A572]/60"></div>
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C5A572]/60"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C5A572]/60"></div>
            </div>

            {/* Applications tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
              {applications.map((appKey, index) => (
                <span
                  key={index}
                  className="text-xs text-white/70 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5"
                >
                  {t(appKey)}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[#C5A572] text-black hover:bg-[#d4b882] rounded-full px-8 font-semibold"
                asChild
              >
                <a
                  href="#anfrage"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('natrix.rf.hero.cta.whatsapp')}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#C5A572]/50 text-[#C5A572] hover:bg-[#C5A572]/10 rounded-full px-8 bg-transparent"
                asChild
              >
                <a href="mailto:Yulachip@icloud.com">
                  <Mail className="w-5 h-5 mr-2" />
                  {t('natrix.rf.hero.cta.email')}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Microneedling RF Handpiece Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#C5A572]/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#C5A572]/5 rounded-full blur-2xl"></div>
          </div>

          <div ref={microneedlingRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-[#C5A572]" />
                  <span className="text-sm text-[#C5A572] tracking-[0.15em] uppercase font-medium">
                    {t('natrix.rf.micro.label')}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('natrix.rf.micro.title')}
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6"></div>
                <p className="text-lg text-white/60 max-w-3xl mx-auto">
                  {t('natrix.rf.micro.desc')}
                </p>
              </div>

              {/* Cartridge grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
                {cartridges.map((cartridge, index) => (
                  <Card
                    key={index}
                    className="bg-zinc-900/80 border border-[#C5A572]/20 hover:border-[#C5A572]/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-[#C5A572] mb-1">{cartridge.pins}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">{t('natrix.rf.pins')}</div>
                      <div className="text-xs text-white/40 mt-2">{t(cartridge.key)}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Key features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Sparkles className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{t('natrix.rf.micro.feat.gold.title')}</h4>
                    <p className="text-xs text-white/50">{t('natrix.rf.micro.feat.gold.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Layers className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{t('natrix.rf.micro.feat.insulation.title')}</h4>
                    <p className="text-xs text-white/50">{t('natrix.rf.micro.feat.insulation.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Gauge className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{t('natrix.rf.micro.feat.depth.title')}</h4>
                    <p className="text-xs text-white/50">{t('natrix.rf.micro.feat.depth.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thermagical RF Handpiece Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-1/3 right-10 w-40 h-40 bg-[#C5A572]/10 rounded-full blur-2xl"></div>
          </div>

          <div ref={thermagicalRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Thermometer className="w-5 h-5 text-[#C5A572]" />
                  <span className="text-sm text-[#C5A572] tracking-[0.15em] uppercase font-medium">
                    {t('natrix.rf.therma.label')}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('natrix.rf.therma.title')}
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6"></div>
                <p className="text-lg text-white/60 max-w-3xl mx-auto">
                  {t('natrix.rf.therma.desc')}
                </p>
              </div>

              {/* Tips grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {thermagicalTips.map((tip, index) => (
                  <Card
                    key={index}
                    className="bg-zinc-900/80 border border-[#C5A572]/20 hover:border-[#C5A572]/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-5 text-center">
                      <div className="text-xl font-bold text-[#C5A572] mb-1">{tip.size}</div>
                      <div className="text-xs text-white/40 mt-1">{t(tip.key)}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Thermagical advantages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Shield className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{t('natrix.rf.therma.feat.noninvasive.title')}</h4>
                    <p className="text-xs text-white/50">{t('natrix.rf.therma.feat.noninvasive.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Target className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{t('natrix.rf.therma.feat.lifting.title')}</h4>
                    <p className="text-xs text-white/50">{t('natrix.rf.therma.feat.lifting.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Zap className="w-5 h-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{t('natrix.rf.therma.feat.fat.title')}</h4>
                    <p className="text-xs text-white/50">{t('natrix.rf.therma.feat.fat.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
          <div ref={technologyRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('natrix.rf.tech.title')}
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6"></div>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  {t('natrix.rf.tech.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologyFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-zinc-900/60 border border-[#C5A572]/10 hover:border-[#C5A572]/40 transition-all duration-500 hover:-translate-y-2 group"
                  >
                    <CardContent className="p-6">
                      <div className="bg-[#C5A572]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C5A572]/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-[#C5A572]" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#C5A572] transition-colors">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">{t(feature.descKey)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-zinc-950 to-black">
          <div ref={specsRef} className="container mx-auto px-4 reveal reveal-up">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('natrix.rf.specs.title')}
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto"></div>
              </div>

              <div className="border border-[#C5A572]/20 rounded-2xl overflow-hidden">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between px-6 py-4 ${
                      index % 2 === 0 ? 'bg-zinc-900/40' : 'bg-zinc-900/20'
                    } ${index < specs.length - 1 ? 'border-b border-white/5' : ''}`}
                  >
                    <span className="text-sm text-white/60">{t(spec.labelKey)}</span>
                    <span className="text-sm font-semibold text-[#C5A572]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Additional specs */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-zinc-900/40 rounded-xl border border-white/5">
                  <Monitor className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                  <div>
                    <span className="text-xs text-white/40 block">{t('natrix.rf.specs.display-label')}</span>
                    <span className="text-sm text-white font-medium">15.6" Touchscreen</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-900/40 rounded-xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                  <div>
                    <span className="text-xs text-white/40 block">{t('natrix.rf.specs.detection-label')}</span>
                    <span className="text-sm text-white font-medium">{t('natrix.rf.specs.auto-id')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="anfrage" className="py-16 md:py-20 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
          <div ref={ctaRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-xl mx-auto">
              <NatrixContactForm device="RF Microneedling" />
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NatrixRFMicroneedling;
