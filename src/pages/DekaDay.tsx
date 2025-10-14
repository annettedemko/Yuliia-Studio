import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Star, TrendingUp, Shield, Users, Calendar, MapPin, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { eventsService } from '@/services/contentService';
import { useLanguage } from '@/contexts/LanguageContext';

const DekaDay = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    vorname: '',
    name: '',
    email: '',
    telefon: '',
    selectedEvent: ''
  });

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const { submitForm, isSubmitting, submitSuccess, submitError } = useFormSubmission('deka-day');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await eventsService.getUpcoming();
        setUpcomingEvents(events);
      } catch (error) {
        console.error('Error loading events:', error);
        setUpcomingEvents([]);
      }
    };

    loadEvents();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submitForm(formData);

    if (!submitError) {
      // Reset form on success
      setFormData({
        vorname: '',
        name: '',
        email: '',
        telefon: '',
        selectedEvent: ''
      });
    }
  };

  const benefits = [
    {
      icon: Users,
      titleKey: 'benefits.growth',
      descriptionKey: 'benefits.growth.desc'
    },
    {
      icon: TrendingUp,
      titleKey: 'benefits.retention',
      descriptionKey: 'benefits.retention.desc'
    },
    {
      icon: Star,
      titleKey: 'benefits.income',
      descriptionKey: 'benefits.income.desc'
    },
    {
      icon: Shield,
      titleKey: 'benefits.safety',
      descriptionKey: 'benefits.safety.desc'
    }
  ];

  const congressFeatures = [
    'congress.features.test',
    'congress.features.presentations',
    'congress.features.learning',
    'congress.features.networking'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-800/95">
        {/* Background with DEKA Devices - Optimized for mobile */}
        <div className="absolute inset-0 opacity-20 sm:opacity-25 md:opacity-30">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-4 h-full w-full p-6 sm:p-8 items-center justify-items-center">
            <div className="animate-float-1 flex items-center justify-center">
              <img src="/deka1.png" alt="Motus PRO" className="w-24 sm:w-28 md:w-32 lg:w-44 h-auto opacity-90 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="animate-float-2 self-end pb-32 flex items-center justify-center">
              <img src="/deka2.png" alt="RedTouch PRO" className="w-64 lg:w-88 h-auto opacity-90 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="animate-float-3 col-span-2 sm:col-span-1 flex items-center justify-center">
              <img src="/deka3.png" alt="Motus AX" className="w-72 lg:w-96 h-auto opacity-95 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="animate-float-4 hidden md:flex items-center justify-center">
              <img src="/deka4.png" alt="PHYSIQ 360" className="w-24 sm:w-28 md:w-32 lg:w-44 h-auto opacity-90 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="animate-float-5 hidden md:flex items-center justify-center">
              <img src="/deka5.png" alt="Again cos" className="w-36 lg:w-48 h-auto opacity-90 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Animated Background Particles - Smaller for mobile */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-rose-gold/10 rounded-full -top-24 sm:-top-48 -left-24 sm:-left-48 animate-pulse"></div>
          <div className="absolute w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/10 rounded-full -bottom-24 sm:-bottom-48 -right-24 sm:-right-48 animate-pulse delay-1000"></div>
          <div className="absolute w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 py-8 sm:py-12 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            {/* DEKA Logo */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <img
                src="/DEKA logo.png"
                alt="DEKA Logo"
                className="h-12 sm:h-16 md:h-20 w-auto filter drop-shadow-2xl animate-glow"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-rose-gold to-white bg-clip-text text-transparent animate-shimmer">
                {t('deka.hero.title')}
              </span>
            </h1>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-rose-gold mb-6 sm:mb-8 animate-fade-in-up delay-300 leading-tight">
              {t('deka.hero.subtitle')}
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-500">
              {t('deka.hero.description')}<br/>
              <span className="text-rose-gold font-medium">{t('deka.hero.features')}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-700">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white text-sm sm:text-base md:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full shadow-2xl hover:shadow-rose-gold/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={() => {
                  const registrationSection = document.querySelector('#registration-form');
                  registrationSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('deka.hero.button')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 text-sm sm:text-base md:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={() => {
                  const benefitsSection = document.querySelector('#benefits-section');
                  benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('deka.hero.button2')}
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits-section" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-4">
              {t('benefits.title')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl border-rose-gold/30 hover:bg-gradient-to-br hover:from-orange-100/50 hover:via-rose-100/50 hover:to-amber-50/50 hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:scale-[1.02] hover:border-rose-gold/50">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-rose-gold/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-rose-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">{t(benefit.titleKey)}</h4>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{t(benefit.descriptionKey)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Congress Features */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-primary mb-8">
              {t('congress.title')}
            </h3>

            <div className="space-y-4">
              {congressFeatures.map((featureKey, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl border border-rose-gold/30 rounded-xl hover:bg-gradient-to-br hover:from-orange-100/50 hover:via-rose-100/50 hover:to-amber-50/50 hover:border-rose-gold/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-rose-gold/20">
                  <Check className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{t(featureKey)}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-rose-gold/10 to-primary/10 rounded-lg">
              <div className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl rounded-lg p-8">
                <h4 className="text-2xl font-bold text-primary mb-4 text-center">
                  {t('congress.partner.title')}
                </h4>
                <p className="text-lg text-center text-muted-foreground mb-6">
                  {t('congress.partner.description')}
                </p>
                <div className="text-center">
                  <p className="text-xl font-semibold text-rose-gold mb-2">
                    {t('congress.partner.highlight')}
                  </p>
                  <p className="text-lg text-primary font-medium">
                    {t('congress.partner.cta')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">{t('events.upcoming.title')}</h3>
            <p className="text-lg text-muted-foreground">
              {t('events.upcoming.subtitle')}
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { src: '/IMG1.jpg', alt: 'DEKA Beauty Event 1' },
              { src: '/IMG3.jpg', alt: 'DEKA Beauty Event 2' },
              { src: '/IMG4.jpg', alt: 'DEKA Beauty Event 3' },
              { src: '/sert.jpg', alt: 'DEKA Zertifikat' }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-rose-gold/30 transition-all duration-500 hover:scale-105 border border-rose-gold/30 bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Event Video */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-rose-gold/10 to-primary/10 p-1">
              <div className="relative rounded-lg overflow-hidden bg-black">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-auto"
                  poster="/IMG1.jpg"
                >
                  <source src="/video1.mp4" type="video/mp4" />
                  {language === 'de' ? 'Ihr Browser unterstützt das Video-Tag nicht.' : 'Ваш браузер не поддерживает видео.'}
                </video>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm sm:text-base">
              {language === 'de' ? 'Eindrücke von unserem letzten DEKA Event' : 'Впечатления с нашего последнего мероприятия DEKA'}
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl border-rose-gold/30 hover:bg-gradient-to-br hover:from-orange-100/50 hover:via-rose-100/50 hover:to-amber-50/50 hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:scale-[1.02] hover:border-rose-gold/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-gold/20 p-3 rounded-full flex-shrink-0">
                        <Calendar className="w-6 h-6 text-rose-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-primary mb-2">{event.title}</h4>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(event.date).toLocaleDateString('de-DE', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                            {event.time && ` (${event.time})`}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">{event.location}</p>
                            <a
                              href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm hover:text-rose-gold transition-colors underline"
                            >
                              {event.address}
                            </a>
                          </div>
                        </div>
                        {event.description && (
                          <p className="text-sm text-muted-foreground mt-3">{event.description}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>{t('events.no-events')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-2xl border-rose-gold/30 shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:border-rose-gold/50">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                  {t('registration.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vorname" className="text-base font-medium">
                        {t('form.firstname')}:
                      </Label>
                      <Input
                        id="vorname"
                        name="vorname"
                        type="text"
                        value={formData.vorname}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">
                        {t('form.lastname')}:
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      {t('form.email')}:
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefon" className="text-base font-medium">
                      {t('form.phone')}:
                    </Label>
                    <Input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      className="mt-2"
                      required
                    />
                  </div>

                  {upcomingEvents.length > 0 && (
                    <div>
                      <Label htmlFor="selectedEvent" className="text-base font-medium">
                        {t('events.select-event')}
                      </Label>
                      <select
                        id="selectedEvent"
                        name="selectedEvent"
                        value={formData.selectedEvent}
                        onChange={(e) => handleInputChange({ target: { name: 'selectedEvent', value: e.target.value } } as any)}
                        className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-rose-gold focus:border-rose-gold"
                        required
                      >
                        <option value="">{t('events.select-placeholder')}</option>
                        {upcomingEvents.map((event) => (
                          <option key={event.id} value={event.id}>
                            {event.title} - {new Date(event.date).toLocaleDateString('de-DE', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })} {event.time && `(${event.time})`}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <Label className="text-base font-medium block mb-2">
                      {t('form.captcha.title')}
                    </Label>
                    <div className="border border-border rounded-lg p-4 bg-accent/20">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" id="captcha" className="w-4 h-4" required />
                        <label htmlFor="captcha" className="text-sm">
                          {t('form.captcha.click')}
                        </label>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {t('form.captcha.provider')}
                      </p>
                    </div>
                  </div>

                  {submitSuccess && (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-4">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 mr-2" />
                        <span>{t('form.success')}</span>
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-4">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        <span>{t('form.error')} {submitError}</span>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white text-base sm:text-lg py-4 sm:py-6 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg touch-manipulation"
                  >
                    {isSubmitting ? t('ui.submitting') : t('form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device Gallery */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">{t('devices.title')}</h3>
              <p className="text-muted-foreground">{t('devices.subtitle')}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {[
                { name: 'Motus PRO', src: '/deka1.png', alt: 'Motus PRO', link: '/motus-pro' },
                { name: 'RedTouch PRO', src: '/deka2.png', alt: 'RedTouch PRO', link: '/redtouch-pro' },
                { name: 'Motus AX', src: '/deka3.png', alt: 'Motus AX', link: '/motus-ax' },
                { name: 'PHYSIQ 360', src: '/deka4.png', alt: 'PHYSIQ 360', link: '/physiq360' },
                { name: 'Again cos', src: '/deka5.png', alt: 'Again cos', link: '/again-cos' }
              ].map((device, index) => (
                <Link key={index} to={device.link} className="block">
                  <div className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl border border-rose-gold/30 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-rose-gold/30 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-100/50 hover:via-rose-100/50 hover:to-amber-50/50 hover:border-rose-gold/50 transition-all duration-500 p-3 sm:p-4 cursor-pointer touch-manipulation group">
                    <img
                      src={device.src}
                      alt={device.alt}
                      className="w-full h-24 sm:h-28 md:h-32 object-contain object-center mb-2 sm:mb-3"
                    />
                    <h4 className="text-xs sm:text-sm font-semibold text-center text-primary leading-tight">{device.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DekaDay;

