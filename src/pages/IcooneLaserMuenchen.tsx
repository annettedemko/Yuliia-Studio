import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';

const IcooneLaserMuenchen = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Icoone® Behandlung in München-Haidhausen – Hautstraffung & Cellulite-Reduktion',
      description: 'Icoone® Laser Behandlung in München-Haidhausen. Mechanisch stimulierte Anwendungen für Bindegewebe, Hautstraffung und Cellulite-Reduktion. Jetzt Termin buchen!'
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
          name: 'Icoone Behandlung',
          item: window.location.href
        }
      ]
    });
  }, []);

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/3.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Icoone® Behandlung in München-Haidhausen – Hautstraffung & Cellulite-Reduktion
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95">
            Mechanisch stimulierte Anwendungen für Bindegewebe – angenehm und planbar.
            Die Icoone®-Technologie kombiniert Mikrostimulation mit Multi-Mikro-Alveolar-Stimulation (MMAS)
            für effektive Körperkonturierung und Hautstraffung.
          </p>
          <Button
            size="lg"
            className="bg-rose-gold hover:bg-rose-gold-dark text-white border-none shadow-lg"
            onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt Termin für Icoone® Behandlung buchen
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">
              Vorteile der Icoone® Behandlung
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Hautstraffung & Bindegewebe</h3>
                      <p className="text-muted-foreground">
                        Gezielte mechanische Stimulation fördert die Durchblutung und strafft das Bindegewebe für ein glatteres Hautbild.
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
                      <h3 className="font-bold text-primary mb-2">Cellulite-Reduktion</h3>
                      <p className="text-muted-foreground">
                        Multi-Mikro-Alveolar-Stimulation (MMAS) wirkt gezielt auf Problemzonen und kann das Erscheinungsbild von Cellulite verbessern.
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
                      <h3 className="font-bold text-primary mb-2">Angenehme Behandlung</h3>
                      <p className="text-muted-foreground">
                        Nicht-invasiv und schmerzfrei – die meisten Kunden empfinden die Behandlung als entspannende Massage.
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
                      <h3 className="font-bold text-primary mb-2">Planbare Ergebnisse</h3>
                      <p className="text-muted-foreground">
                        Regelmäßige Anwendungen führen zu sichtbaren und dauerhaften Verbesserungen – ideal für Abonnement-Pakete.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Packages Info */}
      <section className="py-12 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Abonnement-Pakete für regelmäßige Behandlungen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Für optimale Ergebnisse empfehlen wir regelmäßige Icoone®-Sitzungen.
              Entdecken Sie unsere attraktiven Jahresabonnements mit 2-4 Behandlungen pro Woche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-hero text-white">
                <Link to="/#subscriptions">
                  Abonnement-Pakete ansehen <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/preis#icoone">
                  Einzelpreise ansehen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to Massagen */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Wellness & Entspannung
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ergänzen Sie Ihre Icoone®-Behandlung mit unseren entspannenden Wellness-Massagen
              für ganzheitliches Wohlbefinden.
            </p>
            <Button asChild className="bg-gradient-hero text-white">
              <Link to="/massagen-muenchen">
                Mehr zu Wellness-Massagen <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 text-center">
            <Link to="/services" className="text-primary hover:text-rose-gold transition-colors">
              Alle Behandlungen im Überblick
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/preis" className="text-primary hover:text-rose-gold transition-colors">
              Preise
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/kontakt" className="text-primary hover:text-rose-gold transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IcooneLaserMuenchen;
