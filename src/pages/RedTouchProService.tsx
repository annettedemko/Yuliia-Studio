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

const RedTouchProService = () => {
  const deviceFeatures = [
    {
      icon: Sparkles,
      title: 'Flexible Faser',
      description: 'Das Laserlicht wird über eine lange und flexible Faser übertragen und gewährleistet somit optimalen Komfort für den Behandler.',
      position: 'top-left'
    },
    {
      icon: Monitor,
      title: 'Ultrascharfer 10,1″ LCD Touchscreen',
      description: 'Das ultrascharfe und reaktionsschnelle 10,1" Display mit einer modernen Benutzeroberfläche ermöglicht eine intuitive Bedienung.',
      position: 'top-right'
    },
    {
      icon: Award,
      title: 'Integrierte Protokolle',
      description: 'Für den RedTouch PRO wurden spezielle Behandlungsprotokolle für die Hautverjüngung entwickelt.',
      position: 'center-left'
    },
    {
      icon: Shield,
      title: 'Integrierte Hautkühlung',
      description: 'Dank des integrierten Hautkühlungssystems wird die Epidermisschicht nicht beschädigt, dadurch werden Nebenwirkungen und daraus resultierende Ausfallzeiten minimiert.',
      position: 'center-right'
    },
    {
      icon: Target,
      title: 'Innovatives Wellenlängen-System',
      description: 'Der RedTouch war das erste System mit 675 nm, welches selektiv auf Kollagenfasern einwirkt und deshalb besonders effektiv arbeitet.',
      position: 'bottom-left'
    },
    {
      icon: Activity,
      title: 'Ergonomisches Design',
      description: 'Weiterentwicklung des RedTouch mit verbesserter Kühlung und höherer Effizienz',
      position: 'bottom-right'
    }
  ];

  const benefits = [
    'Effektive Hautstraffung und Kollagenproduktion',
    'Sichere Behandlung für alle Hauttypen',
    'Schmerzfreie und komfortable Anwendung',
    'Keine Ausfallzeiten nach der Behandlung',
    'Sichtbare Ergebnisse bereits nach wenigen Sitzungen',
    'Langanhaltende Hautverjüngung'
  ];

  const treatmentAreas = [
    'Gesicht (Faltenreduktion)',
    'Hals und Dekolleté',
    'Hände und Unterarme',
    'Körperzonen nach Bedarf',
    'Bikini-Bereich',
    'Spezielle Problemzonen'
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-16"
        style={{
          backgroundImage: `url(/deka2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-white mb-6">
              RedTouchPro
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Innovative 675nm Laser-Technologie für revolutionäre Hautstraffung und Kollagenproduktion.
              Die Zukunft der schmerzfreien Hautverjüngung.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Revolutionary Laser Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Das RedTouchPro System nutzt eine einzigartige 675nm Wellenlänge für optimale Kollagenstimulation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/deka2.2.jpeg"
                alt="RedTouchPro Device"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Modernste Technologie für Ihre Haut
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Das RedTouchPro System kombiniert fortschrittliche Laser-Technologie mit einem integrierten
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
            <h2 className="text-4xl font-bold text-primary mb-4">Behandlungsergebnisse</h2>
            <p className="text-xl text-muted-foreground">
              Überzeugen Sie sich von den beeindruckenden Ergebnissen unserer RedTouchPro Behandlungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { src: '/r1.jpg', alt: 'RedTouchPro Ergebnis 1' },
              { src: '/r2.jpg', alt: 'RedTouchPro Ergebnis 2' },
              { src: '/r3.jpg', alt: 'RedTouchPro Ergebnis 3' },
              { src: '/r4.jpg', alt: 'RedTouchPro Ergebnis 4' },
              { src: '/r5.jpg', alt: 'RedTouchPro Ergebnis 5' },
              { src: '/r6.jpg', alt: 'RedTouchPro Ergebnis 6' },
              { src: '/r7.jpg', alt: 'RedTouchPro Ergebnis 7' },
              { src: '/r8.jpg', alt: 'RedTouchPro Ergebnis 8' }
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
            <h2 className="text-4xl font-bold text-primary mb-4">RedTouchPro Gerät</h2>
            <p className="text-xl text-muted-foreground">
              Technische Exzellenz in jedem Detail
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
              <h2 className="text-4xl font-bold text-primary mb-4">Behandlungsgebiete</h2>
              <p className="text-xl text-muted-foreground">
                Vielseitige Anwendungsmöglichkeiten für optimale Ergebnisse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Hauptbehandlungsgebiete</h3>
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
                    <li>• Keine Ausfallzeiten oder Nebenwirkungen</li>
                    <li>• Sofort gesellschaftsfähig nach der Behandlung</li>
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
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Ihre RedTouchPro Behandlung?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entdecken Sie die revolutionäre RedTouchPro Technologie für Ihre Hautstraffung.
            Vereinbaren Sie jetzt einen Beratungstermin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90"
              asChild
            >
              <a href="tel:+4915206067810">
                <Phone className="w-5 h-5 mr-2" />
                Jetzt Termin vereinbaren
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black bg-white hover:bg-white/90"
              asChild
            >
              <Link to="/preis#redtouchpro">
                Preise ansehen
              </Link>
            </Button>
          </div>

          <div className="text-center mt-8">
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
        </div>
      </section>

    </div>
  );
};

export default RedTouchProService;