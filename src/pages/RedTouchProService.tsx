import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Target,
  Shield,
  Star,
  CheckCircle,
  Microscope,
  Activity,
  Monitor,
  Sparkles,
  Award,
  Clock,
  Instagram,
  Waves
} from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';
import { useLanguage } from '@/contexts/LanguageContext';

const RedTouchProService = () => {
  const { t } = useLanguage();
  useEffect(() => {
    setPageMeta({
      title: 'RedTouch 675 nm München – Hautbild & Pigment',
      description: 'RedTouch München: 675 nm, nicht-ablativ – Hautstruktur, feine Linien, Akne-Narben & ausgewählte Pigmentthemen. Meist kaum Downtime.'
    });

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: window.location.origin
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${window.location.origin}/services`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'RedTouch Laser München',
          item: window.location.href
        }
      ]
    });
  }, []);
  const deviceFeatures = [
    {
      icon: Sparkles,
      title: t('redtouch.device.feature1.title'),
      description: t('redtouch.device.feature1.desc'),
      position: 'top-left'
    },
    {
      icon: Monitor,
      title: t('redtouch.device.feature2.title'),
      description: t('redtouch.device.feature2.desc'),
      position: 'top-right'
    },
    {
      icon: Award,
      title: t('redtouch.device.feature3.title'),
      description: t('redtouch.device.feature3.desc'),
      position: 'center-left'
    },
    {
      icon: Shield,
      title: t('redtouch.device.feature4.title'),
      description: t('redtouch.device.feature4.desc'),
      position: 'center-right'
    },
    {
      icon: Target,
      title: t('redtouch.device.feature5.title'),
      description: t('redtouch.device.feature5.desc'),
      position: 'bottom-left'
    },
    {
      icon: Activity,
      title: t('redtouch.device.feature6.title'),
      description: t('redtouch.device.feature6.desc'),
      position: 'bottom-right'
    }
  ];

  const benefits = [
    t('redtouch.technology.benefit1'),
    t('redtouch.technology.benefit2'),
    t('redtouch.technology.benefit3'),
    t('redtouch.technology.benefit4'),
    t('redtouch.technology.benefit5'),
    t('redtouch.technology.benefit6')
  ];

  const treatmentAreas = [
    t('redtouch.areas.area1'),
    t('redtouch.areas.area2'),
    t('redtouch.areas.area3'),
    t('redtouch.areas.area4'),
    t('redtouch.areas.area5'),
    t('redtouch.areas.area6')
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-16"
        style={{
          backgroundImage: `url(/deka2.4.png)`,
          backgroundSize: '60%',
          backgroundPosition: '20% center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-white"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
              {t('redtouch.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-4">
              {t('redtouch.hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('redtouch.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">
              Vorteile von RedTouch®️ in München-Haidhausen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">675 nm Wellenlänge</h3>
                      <p className="text-muted-foreground">
                        Gezielte Kollagen-Ansprache für Hautverjüngung und Straffung – besonders effektiv bei Pigment und feinen Linien.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Geringe Ausfallzeit</h3>
                      <p className="text-muted-foreground">
                        Nicht-ablativ: keine Abtragung der Haut, meist schnelle Rückkehr zum Alltag.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Für verschiedene Hauttypen</h3>
                      <p className="text-muted-foreground">
                        Individuelle Behandlungsplanung nach Hauttyp und Behandlungsziel.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Zentrale Lage in Haidhausen</h3>
                      <p className="text-muted-foreground">
                        Bequem erreichbar nahe Ostbahnhof – ideal für Berufstätige in München.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Revolutionäre Laser-Technologie</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Das RedTouchPro System nutzt eine einzigartige 675nm Wellenlänge für optimale Kollagenstimulation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <img
                  src="/deka2.4.png"
                  alt="RedTouch PRO Logo"
                  className="h-20 w-auto"
                />
              </div>
              <img
                src="/deka2.png"
                alt="RedTouch 675 nm – Kosmetikstudio München Haidhausen – Hauptgerät"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Modernste Technologie für Ihre Haut
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Das RedTouchPro System kombiniert fortschrittliche Lasertechnologie mit einem integrierten
                Kühlsystem für maximale Sicherheit und Komfort während der Behandlung.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-rose-gold mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Behandlungsergebnisse</h2>
            <p className="text-xl text-muted-foreground">
              Überzeugen Sie sich von den beeindruckenden Ergebnissen unserer RedTouchPro Behandlungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { src: '/r1.jpg', alt: 'RedTouch 675 nm – Kosmetikstudio München Haidhausen – Behandlungsergebnis 1' },
              { src: '/r3.jpg', alt: 'RedTouch 675 nm – Kosmetikstudio München Haidhausen – Pigmentkorrektur' },
              { src: '/r4.jpg', alt: 'RedTouch 675 nm – Kosmetikstudio München Haidhausen – Hautverjüngung' },
              { src: '/r5.jpg', alt: 'RedTouch 675 nm – Kosmetikstudio München Haidhausen – Kollagen-Stimulation' },
              { src: '/r7.jpg', alt: 'RedTouch 675 nm – Kosmetikstudio München Haidhausen – Behandlungsdetail' }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
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
      </section>

      {/* Device Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Das RedTouchPro Gerät</h2>
            <p className="text-xl text-muted-foreground">
              Technische Perfektion in jedem Detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-rose-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behandlungsgebiete */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Behandlungsbereiche</h2>
              <p className="text-xl text-muted-foreground">
                Vielseitige Anwendungsmöglichkeiten für optimale Ergebnisse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Hauptbehandlungsbereiche</h3>
                <ul className="space-y-4">
                  {treatmentAreas.map((area, index) => (
                    <li key={index} className="flex items-center">
                      <Target className="w-5 h-5 text-rose-gold mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Behandlungshinweise</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• Behandlungsdauer: 15 Minuten bis 1,5 Stunden je nach Bereich</li>
                    <li>• Empfohlene Sitzungen: 3-6 Behandlungen für optimale Ergebnisse</li>
                    <li>• Behandlungsintervall: 2-4 Wochen zwischen den Sitzungen</li>
                    <li>• Keine Ausfallzeit oder Nebenwirkungen</li>
                    <li>• Sofortige Rückkehr zum normalen Alltag möglich</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für eine RedTouchPro Behandlung?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entdecken Sie die revolutionäre RedTouchPro Technologie für Hautstraffung.
            Vereinbaren Sie jetzt Ihren Beratungstermin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-gold to-pink-500 text-white hover:shadow-xl hover:scale-105 transition-all"
              asChild
            >
              <a href="tel:+4915206067810">
                <Phone className="w-5 h-5 mr-2" />
                Termin vereinbaren
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/80 text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link to="/preis#redtouchpro">
                Preise ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RedTouchProService;