import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Star, TrendingUp, Shield, Users, Calendar, MapPin, AlertCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { eventsService } from '@/services/contentService';
import { useLanguage } from '@/contexts/LanguageContext';

const Deka = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    vorname: '',
    name: '',
    email: '',
    telefon: '',
    selectedEvent: ''
  });

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const { submitForm, isSubmitting, submitSuccess, submitError } = useFormSubmission('deka');

  // Gallery state
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const galleryImages = [
    { src: '/IMG1.jpg', alt: 'DEKA Beauty Event 1' },
    { src: '/IMG3.jpg', alt: 'DEKA Beauty Event 2' },
    { src: '/IMG4.jpg', alt: 'DEKA Beauty Event 3' },
    { src: '/sert.jpg', alt: 'DEKA Zertifikat' }
  ];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextImage();
    }
    if (touchStart - touchEnd < -75) {
      prevImage();
    }
  };

  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  // Функция для добавления языкового префикса к ссылкам
  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen]);

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
    <div className="min-h-screen pt-16 relative">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-purple-800/90">
        {/* Background with DEKA Devices - Beautiful layout: 3 top, 2 bottom larger on mobile */}
        <div className="absolute inset-0 z-10">
          {/* Desktop: 5 in a row */}
          <div className="hidden md:grid grid-cols-5 gap-4 h-full w-full p-8 items-center justify-items-center">
            <div className="animate-float-1 flex items-center justify-center">
              <img src="/deka1.png" alt="Motus PRO" className="w-32 lg:w-44 h-auto hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="animate-float-2 flex items-center justify-center self-end pb-32">
              <img src="/deka2.png" alt="RedTouch PRO" className="w-64 lg:w-88 h-auto hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="animate-float-3 flex items-center justify-center">
              <img src="/deka3.png" alt="Motus AX" className="w-72 lg:w-96 h-auto hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="animate-float-4 flex items-center justify-center">
              <img src="/deka4.png" alt="PHYSIQ 360" className="w-32 lg:w-44 h-auto hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="animate-float-5 flex items-center justify-center">
              <img src="/deka5.png" alt="Again cos" className="w-36 lg:w-48 h-auto hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Mobile & Tablet: 5 devices in 2 rows with better spacing */}
          <div className="md:hidden grid grid-cols-5 gap-2 h-full w-full p-2 items-end pb-16 overflow-visible">
            {/* Top row - 3 devices, evenly spaced */}
            <div className="col-start-1 animate-float-1 flex items-center justify-center overflow-visible">
              <img src="/deka1.png" alt="Motus PRO" className="w-20 xs:w-24 sm:w-32 h-auto opacity-70 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="col-start-3 animate-float-2 flex items-center justify-center overflow-visible">
              <img src="/deka2.png" alt="RedTouch PRO" className="w-32 xs:w-48 sm:w-64 h-auto opacity-70 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="col-start-5 animate-float-3 flex items-center justify-center overflow-visible">
              <img src="/deka3.png" alt="Motus AX" className="w-40 xs:w-56 sm:w-72 h-auto opacity-70 hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Bottom row - 2 devices, positioned closer to center */}
            <div className="col-start-2 animate-float-4 flex items-center justify-center overflow-visible">
              <img src="/deka4.png" alt="PHYSIQ 360" className="w-24 xs:w-28 sm:w-36 h-auto opacity-70 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="col-start-4 animate-float-5 flex items-center justify-center overflow-visible">
              <img src="/deka5.png" alt="Again cos" className="w-28 xs:w-32 sm:w-40 h-auto opacity-70 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Animated Background Particles - Smaller for mobile */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-rose-gold/10 rounded-full -top-24 sm:-top-48 -left-24 sm:-left-48 animate-pulse"></div>
          <div className="absolute w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/10 rounded-full -bottom-24 sm:-bottom-48 -right-24 sm:-right-48 animate-pulse delay-1000"></div>
          <div className="absolute w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        </div>

        {/* Main Content - highest z-index to be on top */}
        <div className="relative z-20 text-center px-4 pt-0 pb-6 sm:pt-0 sm:pb-8 md:pt-0 md:pb-10 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            {/* DEKA Logo - higher and larger */}
            <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex justify-center">
              <div className="bg-gradient-to-br from-white/90 via-purple-50/80 to-white/90 px-4 sm:px-5 md:px-7 lg:px-9 py-2 sm:py-2 md:py-3 lg:py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/30">
                <img
                  src="/DEKA logo.png"
                  alt="DEKA Logo"
                  className="h-10 sm:h-14 md:h-17 lg:h-20 xl:h-23 w-auto"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-rose-gold to-white bg-clip-text text-transparent animate-shimmer">
                {t('deka.hero.title')}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-rose-gold mb-5 sm:mb-6 md:mb-7 animate-fade-in-up delay-300 leading-tight">
              {t('deka.hero.subtitle')}
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-12 sm:mb-14 md:mb-16 lg:mb-20 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-500">
              {t('deka.hero.description')}<br/>
              <span className="text-rose-gold font-medium">{t('deka.hero.features')}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center animate-fade-in-up delay-700">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white text-sm sm:text-base md:text-lg lg:text-xl py-4 sm:py-5 md:py-6 lg:py-7 px-6 sm:px-8 md:px-10 lg:px-12 rounded-full shadow-2xl hover:shadow-rose-gold/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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
                className="bg-transparent border-white/30 text-white hover:bg-white/10 text-sm sm:text-base md:text-lg lg:text-xl py-4 sm:py-5 md:py-6 lg:py-7 px-6 sm:px-8 md:px-10 lg:px-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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

      </section>

      {/* Benefits Section with Video Background - Light Theme */}
      <div className="relative">
        {/* Fixed Video Background Container - sticky parallax effect */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
          <div className="sticky top-0 h-screen overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60"
            >
              <source src="/video1.mp4" type="video/mp4" />
            </video>
            {/* Light Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-purple-50/60 to-white/70"></div>
          </div>
        </div>

      {/* Benefits Section */}
      <section id="benefits-section" className="relative z-10 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Light Glass morphism title - centered */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-orange-100/40 via-rose-100/40 to-amber-50/40 backdrop-blur-xl rounded-2xl border border-rose-gold/30 shadow-2xl">
                {t('benefits.title')}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl border-rose-gold/30 hover:bg-gradient-to-br hover:from-orange-100/50 hover:via-rose-100/50 hover:to-amber-50/50 hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:scale-[1.02] hover:border-rose-gold/50">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-gradient-to-br from-rose-gold to-rose-gold-dark p-3 sm:p-4 rounded-2xl flex-shrink-0 shadow-lg shadow-rose-gold/30">
                        <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">{t(benefit.titleKey)}</h4>
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
      <section className="relative z-10 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Light Glass morphism title - centered */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-orange-100/40 via-rose-100/40 to-amber-50/40 backdrop-blur-xl rounded-2xl border border-rose-gold/30 shadow-2xl">
                {t('congress.title')}
              </h3>
            </div>

            {/* Light Glass morphism features list */}
            <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
              {congressFeatures.map((featureKey, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl border border-rose-gold/30 rounded-xl hover:bg-gradient-to-br hover:from-orange-100/50 hover:via-rose-100/50 hover:to-amber-50/50 hover:border-rose-gold/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-rose-gold/20"
                >
                  <div className="bg-gradient-to-br from-rose-gold to-rose-gold-dark p-2 rounded-lg flex-shrink-0 shadow-lg shadow-rose-gold/30">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed mt-1">{t(featureKey)}</p>
                </div>
              ))}
            </div>

            {/* Premium Partner Card - Light */}
            <div className="mt-10 sm:mt-12 p-6 sm:p-8 md:p-10 bg-gradient-to-br from-rose-gold/10 via-purple-100/50 to-rose-gold/10 backdrop-blur-xl border border-rose-gold/30 rounded-3xl shadow-2xl hover:shadow-rose-gold/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-center">
                <div className="inline-block mb-4 sm:mb-6">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white px-6 py-2 bg-gradient-to-r from-rose-gold to-rose-gold-dark rounded-xl shadow-lg">
                    {t('congress.partner.title')}
                  </h4>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-8 leading-relaxed">
                  {t('congress.partner.description')}
                </p>
                <div className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-rose-gold/30">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-rose-gold mb-3 sm:mb-4">
                    {t('congress.partner.highlight')}
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-primary font-semibold">
                    {t('congress.partner.cta')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative z-10 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Light Glass morphism title - centered */}
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
            <div className="flex justify-center mb-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-orange-100/40 via-rose-100/40 to-amber-50/40 backdrop-blur-xl rounded-2xl border border-rose-gold/30 shadow-2xl">
                {t('events.upcoming.title')}
              </h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-foreground px-4">
              {t('events.upcoming.subtitle')}
            </p>
          </div>

          {/* Premium Photo Gallery - Light with Click to Open */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openGallery(index)}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-rose-gold/30 transition-all duration-500 hover:scale-105 border border-rose-gold/30 bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-rose-gold/70 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Gallery Modal/Carousel */}
          {isGalleryOpen && (
            <div
              className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center pt-16"
              onClick={closeGallery}
            >
              {/* Close button */}
              <button
                onClick={closeGallery}
                className="absolute top-20 right-4 z-[10000] p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </button>

              {/* Previous button */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 z-[10000] p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </button>

              {/* Next button */}
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 z-[10000] p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </button>

              {/* Image container with touch support */}
              <div
                className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 py-4"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain cursor-pointer"
                  onClick={closeGallery}
                />
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-white font-medium">
                  {currentImageIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          )}

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl border-rose-gold/30 hover:bg-gradient-to-br hover:from-orange-100/50 hover:via-rose-100/50 hover:to-amber-50/50 hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-500 hover:scale-[1.02] hover:border-rose-gold/50">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-rose-gold to-rose-gold-dark p-3 rounded-2xl flex-shrink-0 shadow-lg shadow-rose-gold/30">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{event.title}</h4>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm sm:text-base">
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
                            <p className="font-medium text-sm sm:text-base">{event.location}</p>
                            <a
                              href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm hover:text-rose-gold transition-colors underline"
                            >
                              {event.address}
                            </a>
                          </div>
                        </div>
                        {event.description && (
                          <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">{event.description}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-base sm:text-lg text-foreground bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl rounded-xl p-6 border border-rose-gold/30">{t('events.no-events')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="relative z-10 py-12 sm:py-16">
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
                      <Label htmlFor="vorname" className="text-base font-medium text-foreground">
                        {t('form.firstname')}:
                      </Label>
                      <Input
                        id="vorname"
                        name="vorname"
                        type="text"
                        value={formData.vorname}
                        onChange={handleInputChange}
                        className="mt-2 bg-white/80 border-rose-gold/30 focus:border-rose-gold backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="name" className="text-base font-medium text-foreground">
                        {t('form.lastname')}:
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 bg-white/80 border-rose-gold/30 focus:border-rose-gold backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium text-foreground">
                      {t('form.email')}:
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/80 border-rose-gold/30 focus:border-rose-gold backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefon" className="text-base font-medium text-foreground">
                      {t('form.phone')}:
                    </Label>
                    <Input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/80 border-rose-gold/30 focus:border-rose-gold backdrop-blur-sm"
                      required
                    />
                  </div>

                  {upcomingEvents.length > 0 && (
                    <div>
                      <Label htmlFor="selectedEvent" className="text-base font-medium text-foreground">
                        {t('events.select-event')}
                      </Label>
                      <select
                        id="selectedEvent"
                        name="selectedEvent"
                        value={formData.selectedEvent}
                        onChange={(e) => handleInputChange({ target: { name: 'selectedEvent', value: e.target.value } } as any)}
                        className="w-full mt-2 px-3 py-2 border border-rose-gold/30 rounded-md bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-rose-gold focus:border-rose-gold"
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
                    <Label className="text-base font-medium block mb-2 text-foreground">
                      {t('form.captcha.title')}
                    </Label>
                    <div className="border border-rose-gold/30 rounded-lg p-4 bg-white/80 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" id="captcha" className="w-4 h-4 accent-rose-gold" required />
                        <label htmlFor="captcha" className="text-sm text-foreground">
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
      <section className="relative z-10 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Light Glass morphism title - centered */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="flex justify-center mb-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-orange-100/40 via-rose-100/40 to-amber-50/40 backdrop-blur-xl rounded-2xl border border-rose-gold/30 shadow-2xl">
                  {t('devices.title')}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-foreground">{t('devices.subtitle')}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {[
                { name: 'Motus PRO', src: '/deka1.png', alt: 'Motus PRO', link: '/motus-pro' },
                { name: 'RedTouch PRO', src: '/deka2.png', alt: 'RedTouch PRO', link: '/redtouch-pro' },
                { name: 'Motus AX', src: '/deka3.png', alt: 'Motus AX', link: '/motus-ax' },
                { name: 'PHYSIQ 360', src: '/deka4.png', alt: 'PHYSIQ 360', link: '/physiq360' },
                { name: 'Again cos', src: '/deka5.png', alt: 'Again cos', link: '/again-cos' }
              ].map((device, index) => (
                <Link key={index} to={withLang(device.link)} className="block">
                  <div className="bg-gradient-to-br from-orange-100/30 via-rose-100/30 to-amber-50/30 backdrop-blur-xl border border-rose-gold/30 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-rose-gold/30 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-100/50 hover:via-rose-100/50 hover:to-amber-50/50 hover:border-rose-gold/50 transition-all duration-500 p-3 sm:p-4 cursor-pointer touch-manipulation group">
                    <img
                      src={device.src}
                      alt={device.alt}
                      className="w-full h-24 sm:h-28 md:h-32 object-contain object-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                    />
                    <h4 className="text-xs sm:text-sm font-bold text-center text-primary leading-tight">{device.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Deka;

