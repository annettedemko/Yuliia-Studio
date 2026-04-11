import { useState, useEffect } from 'react';
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
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getUpcomingEvents } from '@/utils/supabaseEventsAPI';
import type { Event } from '@/utils/supabaseEventsAPI';

const GOLD = '#C5A572';
const GOLD_DARK = '#A8884E';

// Helper: parse bilingual field "DE|||RU"
const parseBilingual = (value: string | null, lang: string): string => {
  if (!value) return '';
  const parts = value.split('|||');
  if (lang === 'ru' && parts[1]) return parts[1];
  return parts[0];
};

const NatrixConference = () => {
  const { t, language } = useLanguage();
  const heroRef = useScrollReveal({ threshold: 0.1 });
  const programRef = useScrollReveal({ threshold: 0.1 });
  const eventsRef = useScrollReveal({ threshold: 0.1 });
  const formRef = useScrollReveal({ threshold: 0.1 });

  // Events from Supabase
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    referrer: '',
    selectedEvent: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch upcoming events on mount
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await getUpcomingEvents();
        setUpcomingEvents(events);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setEventsLoading(false);
      }
    };
    loadEvents();
  }, []);

  // Build a display label for the selected event
  const getEventLabel = (event: Event): string => {
    const title = parseBilingual(event.title, language);
    const dateStr = event.date
      ? new Date(event.date).toLocaleDateString(language === 'de' ? 'de-DE' : 'ru-RU', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
      : '';
    const time = event.time ? ` · ${event.time}` : '';
    return `${title} — ${dateStr}${time}`;
  };

  // Build the message field for Supabase (used for admin grouping)
  const getEventMessage = (event: Event): string => {
    const titleDe = parseBilingual(event.title, 'de');
    return `Veranstaltung: ${titleDe} am ${event.date} um ${event.time || '—'}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const selectedEvent = upcomingEvents.find((ev) => ev.id === formData.selectedEvent);
    const eventLabel = selectedEvent ? getEventLabel(selectedEvent) : '—';
    const eventMessage = selectedEvent
      ? `${getEventMessage(selectedEvent)} | Eingeladen von: ${formData.referrer || '—'}`
      : `Eingeladen von: ${formData.referrer || '—'}`;

    try {
      // Send email notification
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
          'Veranstaltung': eventLabel,
          'Eingeladen von': formData.referrer || '—',
          _subject: `Natrix Konferenz Registrierung: ${fullName}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!emailResponse.ok) throw new Error('Email failed');

      // Save to Supabase for admin dashboard
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
            message: eventMessage,
            page: 'natrix-conference',
            owner: 'Yulia',
          }),
        });
      } catch {
        // Supabase save is secondary
      }

      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', referrer: '', selectedEvent: '' });
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

        {/* Hero Section with Event Poster */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 30%, ${GOLD}15, transparent 70%)` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />

          <div ref={heroRef} className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16 reveal reveal-up">
            <div className="max-w-5xl mx-auto">
              {/* Event poster image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#C5A572]/20 mb-8 sm:mb-12 max-w-2xl mx-auto">
                <img
                  src="/Natrix/natrix-med-business-konferenz-muenchen-2026.jpg"
                  alt={t('natrix.conference.heroAlt')}
                  className="w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Badge */}
        <section className="py-10 sm:py-14 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.06)_0%,_transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
                <Users className="w-4 h-4" style={{ color: GOLD }} />
                <span className="text-sm font-semibold" style={{ color: GOLD }}>{t('natrix.conference.speakers.count')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t('natrix.conference.speakers.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {t('natrix.conference.speakers.desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Program Section */}
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

        {/* Audience Section */}
        <section className="py-12 sm:py-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(197,165,114,0.06)_0%,_transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
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

        {/* Upcoming Events Cards */}
        <section className="py-12 sm:py-16 bg-[#111111] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.04)_0%,_transparent_70%)]" />

          <div ref={eventsRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.conference.events.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                {t('natrix.conference.events.subtitle')}
              </p>
            </div>

            {eventsLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin" style={{ color: GOLD }} />
              </div>
            ) : upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {upcomingEvents.map((event) => {
                  const title = parseBilingual(event.title, language);
                  const description = parseBilingual(event.description, language);
                  const dateFormatted = event.date
                    ? new Date(event.date).toLocaleDateString(language === 'de' ? 'de-DE' : 'ru-RU', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })
                    : '';

                  return (
                    <a
                      key={event.id}
                      href="#registrierung"
                      onClick={() => setFormData((prev) => ({ ...prev, selectedEvent: event.id }))}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#C5A572]/50 bg-[#0a0a0a] hover:bg-[#161616] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C5A572]/10 p-6 h-full">
                        {/* Gold accent line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `linear-gradient(135deg, ${GOLD}30, ${GOLD}10)` }}
                          >
                            <CalendarDays className="w-6 h-6" style={{ color: GOLD }} />
                          </div>
                          <div>
                            <h3 className="font-bold text-white group-hover:text-[#C5A572] transition-colors text-lg">
                              {title}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-2.5 mb-4">
                          <div className="flex items-center gap-2.5 text-gray-400">
                            <CalendarDays className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                            <span className="text-sm">{dateFormatted}</span>
                          </div>
                          {event.time && (
                            <div className="flex items-center gap-2.5 text-gray-400">
                              <Clock className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                              <span className="text-sm">{event.time}</span>
                            </div>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-2.5 text-gray-400">
                              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                              <span className="text-sm">{event.location}{event.address ? `, ${event.address}` : ''}</span>
                            </div>
                          )}
                        </div>

                        {description && (
                          <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                            {description}
                          </p>
                        )}

                        {/* Seats badge */}
                        <div className="mt-4 pt-4 border-t border-white/5">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs text-red-400 font-medium">
                              {t('natrix.conference.events.freeSeats')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-base">{t('natrix.conference.events.noEvents')}</p>
              </div>
            )}
          </div>
        </section>

        {/* Registration Form Section */}
        <section id="registrierung" className="py-12 sm:py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.06)_0%,_transparent_60%)]" />

          <div ref={formRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="max-w-xl mx-auto">
              {/* Seats counter */}
              <div className="text-center mb-8">
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
                      {/* Event selection */}
                      {upcomingEvents.length > 0 && (
                        <div>
                          <label htmlFor="conf-event" className="block text-sm font-medium text-gray-300 mb-1.5">
                            {t('natrix.conference.form.selectEvent')} *
                          </label>
                          <select
                            id="conf-event"
                            required
                            value={formData.selectedEvent}
                            onChange={(e) => setFormData({ ...formData, selectedEvent: e.target.value })}
                            className="w-full h-12 px-3 rounded-md bg-white/5 border border-white/10 text-white text-sm focus:border-[#C5A572] focus:outline-none focus:ring-1 focus:ring-[#C5A572] appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23C5A572' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 12px center',
                            }}
                          >
                            <option value="" className="bg-[#1a1a1a] text-gray-400">
                              {t('natrix.conference.form.selectEvent.placeholder')}
                            </option>
                            {upcomingEvents.map((event) => (
                              <option key={event.id} value={event.id} className="bg-[#1a1a1a] text-white">
                                {getEventLabel(event)}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NatrixConference;
