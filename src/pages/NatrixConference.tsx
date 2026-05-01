import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { eventsService } from '@/services/contentService';
import type { Event } from '@/types/admin';
import {
  CalendarDays,
  Clock,
  MapPin,
  CheckCircle,
  Loader2,
  AlertCircle,
  ArrowDown,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageHelmet } from '@/components/PageHelmet';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const GOLD = '#C5A572';
const GOLD_DARK = '#A8884E';

const NatrixConference = () => {
  const { t, language } = useLanguage();
  const heroRef = useScrollReveal({ threshold: 0.1 });
  const eventsRef = useScrollReveal({ threshold: 0.1 });
  const formRef = useScrollReveal({ threshold: 0.1 });

  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await eventsService.getUpcoming();
        setUpcomingEvents(events);
      } catch (err) {
        console.error('Failed to load events:', err);
      }
    };
    loadEvents();
  }, []);

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

  const getEventLabel = (event: Event): string => {
    const title = language === 'ru' && event.title_ru ? event.title_ru : event.title;
    const date = new Date(event.date).toLocaleDateString(
      language === 'ru' ? 'ru-RU' : 'de-DE',
      { day: '2-digit', month: '2-digit', year: 'numeric' }
    );
    return `${title} — ${date}${event.time ? ` (${event.time})` : ''}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const selectedEventObj = upcomingEvents.find(e => e.id === formData.selectedEvent);
    const eventLabel = selectedEventObj
      ? `${selectedEventObj.title} am ${new Date(selectedEventObj.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })} um ${selectedEventObj.time || '—'}`
      : 'Natrix Med Konferenz';

    const EMAILJS_SERVICE_ID = 'service_la15uhg';
    const EMAILJS_TEMPLATE_CONFIRM = 'template_5lq6fsa';
    const EMAILJS_TEMPLATE_ADMIN = 'template_gkvztfi';
    const EMAILJS_PUBLIC_KEY = 'KUlrBxaQk6SXqaLdB';

    try {
      // Save to Supabase FIRST (so registration is never lost even if email fails)
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
            message: `Veranstaltung: ${eventLabel} | Eingeladen von: ${formData.referrer || '—'}`,
            page: 'natrix-conference',
            owner: 'Yulia',
          }),
        });
      } catch (err) {
        console.error('Supabase save failed:', err);
      }

      // Send confirmation email to the registrant (DE + RU)
      try {
        const zoomLink = selectedEventObj?.date === '2026-05-05'
          ? 'https://us06web.zoom.us/j/86544422074?pwd=0VslhKgEby12shPcGjaaGFacsT8Sfr.1'
          : '';
        const eventTitle = selectedEventObj
          ? selectedEventObj.title.split('|||')[0]
          : 'Natrix Med';
        const eventTitleRu = selectedEventObj
          ? (selectedEventObj.title.split('|||')[1] || selectedEventObj.title.split('|||')[0])
          : 'Natrix Med';
        const eventDate = selectedEventObj
          ? new Date(selectedEventObj.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })
          : '';
        const eventDateRu = selectedEventObj
          ? new Date(selectedEventObj.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })
          : '';
        const eventTime = selectedEventObj?.time || '';
        const eventLocation = selectedEventObj
          ? `${selectedEventObj.location || ''}${selectedEventObj.address ? ', ' + selectedEventObj.address : ''}`
          : '';
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_CONFIRM,
          {
            to_email: formData.email,
            first_name: formData.firstName,
            full_name: fullName,
            event_title: eventTitle,
            event_title_ru: eventTitleRu,
            event_date: eventDate,
            event_date_ru: eventDateRu,
            event_time: eventTime,
            event_location: eventLocation,
            zoom_link: zoomLink,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      } catch (err) {
        console.error('EmailJS (confirm to registrant) failed:', err);
      }

      // Send notification to admin (Yulia)
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ADMIN,
          {
            full_name: fullName,
            phone: formData.phone,
            email: formData.email,
            referrer: formData.referrer || '—',
            event: eventLabel,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      } catch (err) {
        console.error('EmailJS (admin notification) failed:', err);
      }

      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', referrer: '', selectedEvent: '' });
      setTimeout(() => setSubmitSuccess(false), 10000);
    } catch (err) {
      console.error('Registration failed:', err);
      setSubmitError(t('natrix.conference.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

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

              {/* Title */}
              <div className="text-center mb-8 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  <span style={{ color: GOLD }}>{t('natrix.conference.title')}</span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                  {t('natrix.conference.subtitle')}
                </p>
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

        {/* ═══════════════════ UPCOMING EVENTS ═══════════════════ */}
        <section className="py-12 sm:py-16 bg-[#111111] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,114,0.06)_0%,_transparent_60%)]" />
          <div ref={eventsRef} className="container mx-auto px-4 relative z-10 reveal reveal-up">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {t('natrix.conference.events.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto mb-4" />
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                {t('natrix.conference.events.subtitle')}
              </p>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="space-y-8 sm:space-y-10 max-w-3xl mx-auto">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group rounded-2xl border border-[#C5A572]/20 bg-white/5 backdrop-blur-md overflow-hidden hover:border-[#C5A572]/50 hover:bg-white/10 transition-all duration-300"
                  >
                    {/* Афиша — изображение */}
                    {event.image_url && (
                      <div className="relative overflow-hidden">
                        <img
                          src={event.image_url}
                          alt={language === 'ru' && event.title_ru ? event.title_ru : event.title}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Контент */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: GOLD }}>
                        {language === 'ru' && event.title_ru ? event.title_ru : event.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-300">
                          <CalendarDays className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                          <span className="text-sm sm:text-base font-medium">
                            {new Date(event.date).toLocaleDateString(
                              language === 'ru' ? 'ru-RU' : 'de-DE',
                              { day: '2-digit', month: '2-digit', year: 'numeric' }
                            )}
                          </span>
                        </div>
                        {event.time && (
                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                            <span className="text-sm sm:text-base font-medium">{event.time}</span>
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                            <span className="text-sm sm:text-base font-medium">
                              {event.location}{event.address ? `, ${event.address}` : ''}
                            </span>
                          </div>
                        )}
                      </div>

                      {(event.description || event.description_ru) && (
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                          {language === 'ru' && event.description_ru ? event.description_ru : event.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-gray-400 text-base sm:text-lg bg-white/5 backdrop-blur-md border border-[#C5A572]/20 rounded-xl p-6 max-w-lg mx-auto">
                  {t('natrix.conference.events.noEvents')}
                </p>
              </div>
            )}
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

                      {/* Event selector */}
                      {upcomingEvents.length > 0 && (
                        <div>
                          <label htmlFor="conf-selectedEvent" className="block text-sm font-medium text-gray-300 mb-1.5">
                            {t('natrix.conference.form.selectEvent')} *
                          </label>
                          <select
                            id="conf-selectedEvent"
                            value={formData.selectedEvent}
                            onChange={(e) => setFormData({ ...formData, selectedEvent: e.target.value })}
                            required
                            className="w-full h-12 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-[#C5A572] focus:outline-none focus:ring-1 focus:ring-[#C5A572] transition-colors"
                          >
                            <option value="">{t('natrix.conference.form.selectEvent.placeholder')}</option>
                            {upcomingEvents.map((event) => (
                              <option key={event.id} value={event.id}>
                                {getEventLabel(event)}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

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
