import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Mail,
  MessageCircle,
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
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const NatrixSphereSculpt = () => {
  const { t } = useLanguage();

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

  const heroRef = useScrollReveal({ threshold: 0.1 });
  const bodyRef = useScrollReveal({ threshold: 0.1 });
  const faceRef = useScrollReveal({ threshold: 0.1 });
  const advantagesRef = useScrollReveal({ threshold: 0.1 });
  const specsRef = useScrollReveal({ threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16 overflow-x-hidden bg-black text-white">

        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(197,165,114,0.08),transparent_60%)]"></div>

          <div ref={heroRef} className="relative z-10 container mx-auto px-4 reveal reveal-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2.5 bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-full px-5 py-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
                  <span className="text-xs font-medium text-[#C5A572] tracking-[0.2em] uppercase">
                    {t('natrix.sphere.hero.badge')}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.1]">
                  <span className="text-white">Natrix Med</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#C5A572] to-[#E8D5B5] bg-clip-text text-transparent">
                    SphereSculpt
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 font-light mb-8 max-w-lg">
                  {t('natrix.sphere.hero.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-[#C5A572] text-black hover:bg-[#D4B88A] rounded-full px-8 font-semibold"
                    asChild
                  >
                    <a
                      href="https://wa.me/4915206067810?text=Anfrage%20Natrix%20SphereSculpt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t('natrix.sphere.hero.cta.whatsapp')}
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#C5A572]/50 text-[#C5A572] hover:bg-[#C5A572]/10 rounded-full px-8"
                    asChild
                  >
                    <a href="mailto:Yulachip@icloud.com">
                      <Mail className="w-5 h-5 mr-2" />
                      {t('natrix.sphere.hero.cta.email')}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C5A572]/10 via-transparent to-transparent rounded-3xl blur-2xl"></div>
                  <img
                    src="/Natrix/natrix-spheresculpt.jpg"
                    alt={t('natrix.sphere.hero.alt')}
                    className="relative w-full max-w-md lg:max-w-lg object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body Treatment Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
          <div ref={bodyRef} className="relative z-10 container mx-auto px-4 reveal reveal-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#C5A572] to-[#E8D5B5] bg-clip-text text-transparent">
                    {t('natrix.sphere.body.title')}
                  </span>
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6"></div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  {t('natrix.sphere.body.subtitle')}
                </p>
              </div>

              {/* Applications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {bodyApplications.map((app, index) => (
                  <Card
                    key={index}
                    className="bg-white/[0.03] border-[#C5A572]/20 hover:border-[#C5A572]/50 transition-all duration-500 hover:-translate-y-1 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C5A572]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A572]/20 transition-colors">
                          <app.icon className="w-6 h-6 text-[#C5A572]" />
                        </div>
                        <p className="text-gray-200 font-medium pt-2">{t(app.key)}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Body Areas */}
              <div className="bg-white/[0.02] border border-[#C5A572]/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#C5A572] mb-6 text-center">
                  {t('natrix.sphere.body.areas.title')}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {bodyAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full text-sm text-gray-300 hover:bg-[#C5A572]/20 transition-colors"
                    >
                      {t(area)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Face Treatment Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
          <div ref={faceRef} className="relative z-10 container mx-auto px-4 reveal reveal-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#C5A572] to-[#E8D5B5] bg-clip-text text-transparent">
                    {t('natrix.sphere.face.title')}
                  </span>
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6"></div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  {t('natrix.sphere.face.subtitle')}
                </p>
              </div>

              {/* Face Applications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {faceApplications.map((app, index) => (
                  <Card
                    key={index}
                    className="bg-white/[0.03] border-[#C5A572]/20 hover:border-[#C5A572]/50 transition-all duration-500 hover:-translate-y-1 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C5A572]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A572]/20 transition-colors">
                          <app.icon className="w-6 h-6 text-[#C5A572]" />
                        </div>
                        <p className="text-gray-200 font-medium pt-2">{t(app.key)}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Face Areas */}
              <div className="bg-white/[0.02] border border-[#C5A572]/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#C5A572] mb-6 text-center">
                  {t('natrix.sphere.face.areas.title')}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {faceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full text-sm text-gray-300 hover:bg-[#C5A572]/20 transition-colors"
                    >
                      {t(area)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(197,165,114,0.05),transparent_50%)]"></div>
          <div ref={advantagesRef} className="relative z-10 container mx-auto px-4 reveal reveal-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#C5A572] to-[#E8D5B5] bg-clip-text text-transparent">
                    {t('natrix.sphere.adv.title')}
                  </span>
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map((adv, index) => (
                  <Card
                    key={index}
                    className="bg-white/[0.03] border-[#C5A572]/15 hover:border-[#C5A572]/40 transition-all duration-500 hover:-translate-y-2 group"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="bg-gradient-to-br from-[#C5A572]/20 to-[#C5A572]/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <adv.icon className="w-8 h-8 text-[#C5A572]" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#C5A572] transition-colors">
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
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
          <div ref={specsRef} className="relative z-10 container mx-auto px-4 reveal reveal-up">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#C5A572] to-[#E8D5B5] bg-clip-text text-transparent">
                    {t('natrix.sphere.specs.title')}
                  </span>
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto"></div>
              </div>

              <div className="bg-white/[0.02] border border-[#C5A572]/15 rounded-2xl overflow-hidden">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between px-8 py-5 ${
                      index !== specs.length - 1 ? 'border-b border-[#C5A572]/10' : ''
                    } hover:bg-[#C5A572]/5 transition-colors`}
                  >
                    <span className="text-gray-300 font-medium">{t(spec.key)}</span>
                    <span className="text-[#C5A572] font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(197,165,114,0.08),transparent_60%)]"></div>
          <div ref={ctaRef} className="relative z-10 container mx-auto px-4 text-center reveal reveal-up">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#C5A572] to-[#E8D5B5] bg-clip-text text-transparent">
                  {t('natrix.sphere.cta.title')}
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                {t('natrix.sphere.cta.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-[#C5A572] text-black hover:bg-[#D4B88A] rounded-full px-10 py-6 text-lg font-semibold"
                  asChild
                >
                  <a
                    href="https://wa.me/4915206067810?text=Anfrage%20Natrix%20SphereSculpt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#C5A572]/50 text-[#C5A572] hover:bg-[#C5A572]/10 rounded-full px-10 py-6 text-lg"
                  asChild
                >
                  <a href="mailto:Yulachip@icloud.com">
                    <Mail className="w-5 h-5 mr-2" />
                    E-Mail
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C5A572]" />
                  <span>{t('natrix.sphere.cta.b2b')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C5A572]" />
                  <span>{t('natrix.sphere.cta.consultation')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default NatrixSphereSculpt;
