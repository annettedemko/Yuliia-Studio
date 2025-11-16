import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Phone, Award, Users, Clock, Shield, Instagram, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';
import { PageHelmet } from '@/components/PageHelmet';

// Изображения загружаются из папки public

const About = () => {
  const { t } = useLanguage();

  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  // Функция для добавления языкового префикса к ссылкам
  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { nameKey: 'about.services.laser', link: '/laser-haarentfernung-muenchen' },
    { nameKey: 'about.services.icoone', link: '/icoone-laser-muenchen' },
    { nameKey: 'about.services.redtouch', link: '/redtouch-laser-muenchen' },
    { nameKey: 'about.services.nails', link: '/manikuere-pedikuere-muenchen' },
    // DEKA link - TEMPORARILY HIDDEN
    // { nameKey: 'about.services.deka', link: '/deka-geraeteverkauf' },
    { nameKey: 'about.services.consultation', link: '/services' }
  ];

  const advantages = [
    {
      icon: Award,
      titleKey: 'about.advantages.experience',
      descriptionKey: 'about.advantages.experience-desc'
    },
    {
      icon: Shield,
      titleKey: 'about.advantages.certified',
      descriptionKey: 'about.advantages.certified-desc'
    },
    {
      icon: Users,
      titleKey: 'about.advantages.individual',
      descriptionKey: 'about.advantages.individual-desc'
    },
    {
      icon: Clock,
      titleKey: 'about.advantages.flexible',
      descriptionKey: 'about.advantages.flexible-desc'
    },
    {
      icon: MapPin,
      titleKey: 'about.advantages.location',
      descriptionKey: 'about.advantages.location-desc'
    }
  ];

  return (
    <>
      <PageHelmet />
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section className="pt-16 pb-10 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              {t('about.hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-rose-gold" />
              {t('about.hero.location')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Галерея изображений */}
            <div className="flex gap-4">
              <div className="flex-1">
                <img
                  src="/IMG1.jpg"
                  alt="Yuliia Cheporska - Kosmetikerin"
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
              <div className="flex-1 mt-2">
                <img
                  src="/10.jpg"
                  alt="Studio Atmosphäre"
                  className="w-full h-80 object-cover rounded-lg shadow-elegant"
                  style={{ objectPosition: 'center 12%' }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6">
                {t('about.main.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.main.p1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.main.p2')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.main.p3')}
              </p>

              <Button
                size="lg"
                className="bg-gradient-hero text-white border-none shadow-rose"
                onClick={scrollToContact}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('about.main.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-10 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('about.services.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('about.services.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Link key={index} to={withLang(service.link)} className="flex items-center space-x-3 hover:bg-rose-gold/5 p-3 rounded-lg transition-colors group">
                  <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-foreground group-hover:text-rose-gold transition-colors">{t(service.nameKey)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('about.advantages.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('about.advantages.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-rose-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{t(advantage.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(advantage.descriptionKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('about.gallery.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('about.gallery.subtitle')}</p>
            </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/s1.jpg', alt: 'Kosmetikstudio München Haidhausen – Empfangsbereich' },
                { src: '/s2.jpg', alt: 'Kosmetikstudio München Haidhausen – Behandlungsraum Laser' },
                { src: '/s3.jpg', alt: 'Kosmetikstudio München Haidhausen – Wartebereich' },
                { src: '/s4.jpg', alt: 'Kosmetikstudio München Haidhausen – Maniküre Bereich' },
                { src: '/s5.jpg', alt: 'Kosmetikstudio München Haidhausen – Pediküre Station' },
                { src: '/uns1.jpg', alt: 'Yuliia Cheporska Studio München – Innenansicht Eingang' },
                { src: '/uns2.jpg', alt: 'Yuliia Cheporska Studio München – DEKA Laser Geräte' },
                { src: '/uns3.jpg', alt: 'Yuliia Cheporska Studio München – Behandlungsliege' },
                { src: '/uns4.jpg', alt: 'Yuliia Cheporska Studio München – Kosmetikgeräte' },
                { src: '/uns5.jpg', alt: 'Yuliia Cheporska Studio München – Relaxbereich' }
              ].map((image, index) => (
                <div key={index} className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${image.className || ''}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section id="contact-form" className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{t('about.contact.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('about.contact.subtitle')}
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t('about.form.name')} *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t('about.form.name-placeholder')}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('about.form.phone')} *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t('about.form.phone-placeholder')}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">{t('about.form.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('about.form.email-placeholder')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">{t('about.form.message')} *</Label>
                    <Textarea
                      id="message"
                      placeholder={t('about.form.message-placeholder')}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-hero text-white border-none shadow-rose"
                  >
                    {t('about.form.submit')}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {t('about.form.required')}
                  </p>

                  <div className="text-center">
                    <a
                      href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      title="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
                    </a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default About;