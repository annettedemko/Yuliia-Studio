import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  Loader2,
  AlertCircle,
  Sparkles,
  Target,
  TrendingUp,
  Gift,
  Megaphone,
  BarChart3,
  Lightbulb,
  ArrowDown,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const GOLD = '#C5A572';
const GOLD_DARK = '#A8884E';

const NatrixConference = () => {
  const { t, language } = useLanguage();
  const heroImage = language === 'de'
    ? '/Natrix/natrix-konferenz-muenchen-2026-de.jpg'
    : '/Natrix/natrix-med-business-konferenz-muenchen-2026.jpg';
  const heroRef = useScrollReveal({ threshold: 0.1 });
  const speakersRef = useScrollReveal({ threshold: 0.1 });
  const programRef = useScrollReveal({ threshold: 0.1 });
  const audienceRef = useScrollReveal({ threshold: 0.1 });
  const formRef = useScrollReveal({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    referrer: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const emailResponse = await fetch('https://formsubmit.co/ajax/Yulachip@icloud.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          phone: formData.phone,
          email: formData.email,
          'Veranstaltung': 'Natrix Med Konferenz — 26.04.2026, 12:00, München',
          'Eingeladen von': formData.referrer || '—',
          _subject: `Natrix Konferenz 26.04 Registrierung: ${fullName}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: formData.email,
          _autoresponse: `Hallo ${formData.firstName}!\n\nVielen Dank für Ihre Registrierung zur Business-Konferenz NATRIX MED und MARKETING!\n\n📅 Datum: 26. April 2026\n🕛 Uhrzeit: 12:00\n📍 Ort: München, Stahlgruberring 32, 81829\n\nWir freuen uns auf Sie!\n\n---\n\nПривет, ${formData.firstName}!\n\nСпасибо за регистрацию на бизнес-конференцию NATRIX MED и МАРКЕТИНГ!\n\n📅 Дата: 26 апреля 2026\n🕛 Время: 12:00\n📍 Место: Мюнхен, Stahlgruberring 32, 81829\n\nЖдём вас!\n\nNatrix Med Team`,
        }),
      });

      if (!emailResponse.ok) throw new Error('Email failed');

      try {
        const SUPABASE_URL = 'https://knmompemjlboqzwcycwe.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM';
        await fetch(`${SUPABASE_URL}/rest/v1/form_submissions`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: fullName,
            phone: formData.phone,
            email: formData.email,
            message: `Veranstaltung: Natrix Med Konferenz am 2026-04-26 um 12:00 | Eingeladen von: ${formData.referrer || '—'}`,
            page: 'natrix-conference',
            owner: 'Yulia',
          }),
        });
      } catch {
        // Supabase is secondary
      }

      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', referrer: '' });
      setTimeout(() => setSubmitSuccess(false), 10000);
    } catch {
      setSubmitError(t('natrix.conference.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const programItems = [
    { icon: Sparkles, key: 'natrix.conference.program.1' },
    { icon: BarChart3, key: 'natrix.conference.program.2' },
    { icon: TrendingUp, key: 'natrix.conference.program.3' },
    { icon: Megaphone, key: 'natrix.conference.program.4' },
    { icon: Gift, key: 'natrix.conference.program.5' },
    { icon: Target, key: 'natrix.conference.program.6' },
    { icon: Lightbulb, key: 'natrix.conference.program.7' },
  ];

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16 bg-[#0a0a0a] text-white">

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 30%, ${GOLD}18, transparent 70%)` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />

          <div ref={heroRef} className="relative z-10 container mx-auto px-4 pt-6 sm:pt-10 md:pt-14 pb-10 reveal reveal-up">
            <div className="max-w-5xl mx-auto">

              {/* Badge */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
                    {t('natrix.conference.badge')}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                </div>
              </div>

              {/* Poster */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#C5A572]/20 mb-8 sm:mb-10 max-w-2xl mx-auto">
                <img
                  src={heroImage}
                  alt={t('natrix.conference.heroAlt')}
                  className="w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
              </div>

              {/* Title under poster */}
              <div className="text-center mb-8 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  <span style={{ color: GOLD }}>{t('natrix.conference.title')}</span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                  {t('natrix.conference.subtitle')}
                </p>
              </div>

              {/* Date / Time / Location cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
                <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-[#C5A572]/20 rounded-xl px-5 py-5">
                  <CalendarDays className="w-7 h-7 flex-shrink-0" style={{ color: GOLD }} />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Datum / Дата</div>
                    <div className="font-bold text-white text-lg">{t('natrix.conference.date')}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-[#C5A572]/20 rounded-xl px-5 py-5">
                  <Clock className="w-7 h-7 flex-shrink-0" style={{ color: GOLD }} />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Zeit / Время</div>
                    <div className="font-bold text-white text-lg">{t('natrix.conference.time')}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-[#C5A572]/20 rounded-xl px-5 py-5">
                  <MapPin className="w-7 h-7 flex-shrink-0" style={{ color: GOLD }} />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Ort / Место</div>
                    <div className="font-bold text-white text-sm leading-snug">{t('natrix.conference.location')}</div>
                  </div>
                </div>
              </div>

              {/* CTA arrow */}
              <div className="text-center">
                <a
                  href="#registrierung"
                  className="inline-flex items-center gap-2 text-sm sm:text-base px-8 py-4 rounded-full font-semibold min-h-[48px] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#C5A572]/20"
                  style={{ backgroundColor: GOLD, color: '#000' }}
                >
                  {t('natrix.conference.form.submit')}
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ SPEAKERS ═══════════════════ */}
        <section className="py-12 sm:py-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.06)_0%,_transparent_60%)]" />
          <div ref={speakersRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
                <Users className="w-4 h-4" style={{ color: GOLD }} />
                <span className="text-sm font-semibold" style={{ color: GOLD }}>{t('natrix.conference.speakers.count')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.conference.speakers.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {t('natrix.conference.speakers.desc')}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════ PROGRAM ═══════════════════ */}
        <section className="py-12 sm:py-16 bg-[#111111] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.05)_0%,_transparent_50%)]" />

          <div ref={programRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.conference.program.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto" />
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {programItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-[#C5A572]/30 hover:bg-[#161616] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `linear-gradient(135deg, ${GOLD}25, ${GOLD}10)` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                    {t(item.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ AUDIENCE ═══════════════════ */}
        <section className="py-12 sm:py-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(197,165,114,0.06)_0%,_transparent_60%)]" />
          <div ref={audienceRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                {t('natrix.conference.audience.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-8" />
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                {t('natrix.conference.audience.desc')}
              </p>
              <div className="bg-gradient-to-r from-[#C5A572]/10 via-[#C5A572]/20 to-[#C5A572]/10 border border-[#C5A572]/30 rounded-xl p-6 sm:p-8">
                <p className="text-white text-base sm:text-lg font-medium leading-relaxed italic">
                  &laquo;{t('natrix.conference.result')}&raquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ REGISTRATION FORM ═══════════════════ */}
        <section id="registrierung" className="py-12 sm:py-20 bg-[#111111] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.08)_0%,_transparent_60%)]" />

          <div ref={formRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-xl mx-auto">

              {/* Seats counter */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-5 py-2.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-red-400 text-sm font-semibold">{t('natrix.conference.seats')}</span>
                </div>
              </div>

              {submitSuccess ? (
                <Card className="border-green-500/30 bg-green-500/10 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-green-300 mb-2">
                      {t('natrix.conference.form.success.title')}
                    </h3>
                    <p className="text-green-400/80">
                      {t('natrix.conference.form.success.text')}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-white/10 bg-[#0a0a0a] shadow-2xl shadow-[#C5A572]/10">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {t('natrix.conference.form.title')}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {t('natrix.conference.form.subtitle')}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="conf-firstName" className="block text-sm font-medium text-gray-300 mb-1.5">
                            {t('natrix.conference.form.firstName')} *
                          </label>
                          <Input
                            id="conf-firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder={t('natrix.conference.form.firstName.placeholder')}
                            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#C5A572]"
                          />
                        </div>
                        <div>
                          <label htmlFor="conf-lastName" className="block text-sm font-medium text-gray-300 mb-1.5">
                            {t('natrix.conference.form.lastName')} *
                          </label>
                          <Input
                            id="conf-lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder={t('natrix.conference.form.lastName.placeholder')}
                            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#C5A572]"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="conf-phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                          {t('natrix.conference.form.phone')} *
                        </label>
                        <Input
                          id="conf-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t('natrix.conference.form.phone.placeholder')}
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#C5A572]"
                        />
                      </div>

                      <div>
                        <label htmlFor="conf-email" className="block text-sm font-medium text-gray-300 mb-1.5">
                          {t('natrix.conference.form.email')} *
                        </label>
                        <Input
                          id="conf-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t('natrix.conference.form.email.placeholder')}
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#C5A572]"
                        />
                      </div>

                      <div>
                        <label htmlFor="conf-referrer" className="block text-sm font-medium text-gray-300 mb-1.5">
                          {t('natrix.conference.form.referrer')}
                        </label>
                        <Input
                          id="conf-referrer"
                          type="text"
                          value={formData.referrer}
                          onChange={(e) => setFormData({ ...formData, referrer: e.target.value })}
                          placeholder={t('natrix.conference.form.referrer.placeholder')}
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#C5A572]"
                        />
                      </div>

                      {submitError && (
                        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {submitError}
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full text-black border-none shadow-lg hover:shadow-xl transition-all duration-300 text-base py-6 min-h-[48px] font-semibold hover:scale-[1.02]"
                        style={{ backgroundColor: GOLD, color: '#000' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GOLD_DARK; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = GOLD; }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            {t('natrix.conference.form.sending')}
                          </>
                        ) : (
                          t('natrix.conference.form.submit')
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        {t('natrix.form.privacy')}
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Date reminder at the bottom */}
              <div className="mt-10 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/5 backdrop-blur-md border border-[#C5A572]/20 rounded-2xl px-8 py-6">
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="w-5 h-5" style={{ color: GOLD }} />
                    <span className="text-white font-semibold">{t('natrix.conference.date')}</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-white/10" />
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5" style={{ color: GOLD }} />
                    <span className="text-white font-semibold">{t('natrix.conference.time')}</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-white/10" />
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5" style={{ color: GOLD }} />
                    <span className="text-white font-semibold text-sm">{t('natrix.conference.location')}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NatrixConference;
