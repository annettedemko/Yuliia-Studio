import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';

const HautberatungMuenchen = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Kosmetische Haut- & Beauty-Beratung in München-Haidhausen',
      description: 'Professionelle Hautberatung in München-Haidhausen. Individuelle Hautanalyse, Behandlungsempfehlungen und Beauty-Beratung. Nur 5 Min. vom Ostbahnhof. Jetzt Termin buchen!'
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
          name: 'Hautberatung',
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
          backgroundImage: `url(/H1.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Kosmetische Haut- & Beauty-Beratung in München-Haidhausen
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95">
            Individuelle Hautanalyse und maßgeschneiderte Behandlungsempfehlungen.
            Wir beraten Sie professionell zu allen Themen rund um Hautpflege,
            Laserbehandlungen und Beauty-Lösungen.
          </p>
          <Button
            size="lg"
            className="bg-rose-gold hover:bg-rose-gold-dark text-white border-none shadow-lg"
            onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt Beratungstermin buchen
          </Button>
        </div>
      </section>

      {/* Consultation Overview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">
              Beratung im Überblick
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Hautanalyse & Hauttyp-Bestimmung</h3>
                      <p className="text-muted-foreground">
                        Professionelle Analyse Ihrer Haut, um Ihren individuellen Hauttyp,
                        Bedürfnisse und mögliche Problemstellen zu identifizieren.
                        Basis für alle weiteren Empfehlungen.
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
                      <h3 className="font-bold text-primary mb-2">Behandlungsempfehlungen</h3>
                      <p className="text-muted-foreground">
                        Basierend auf Ihrer Hautanalyse empfehlen wir passende Behandlungen:
                        Laser-Haarentfernung, RedTouch®, Icoone® oder andere kosmetische Verfahren
                        für Ihre individuellen Ziele.
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
                      <h3 className="font-bold text-primary mb-2">Pflege-Beratung</h3>
                      <p className="text-muted-foreground">
                        Tipps zur optimalen Hautpflege-Routine für zu Hause:
                        Welche Produkte passen zu Ihrem Hauttyp?
                        Wie bereiten Sie Ihre Haut auf Behandlungen vor und pflegen sie danach?
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
                      <h3 className="font-bold text-primary mb-2">Langfristige Beauty-Planung</h3>
                      <p className="text-muted-foreground">
                        Gemeinsam entwickeln wir einen individuellen Behandlungsplan,
                        um Ihre Beauty-Ziele langfristig zu erreichen –
                        von glatter Haut bis zur Hautverjüngung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Warum Hautberatung bei uns?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Über 5 Jahre Erfahrung in der Beauty-Branche
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Individuelle, ehrliche Beratung ohne Verkaufsdruck
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Ganzheitlicher Ansatz für Ihre Beauty-Ziele
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Zentrale Lage in München-Haidhausen, nur 5 Min. vom Ostbahnhof
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Entdecken Sie unsere Behandlungen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nach Ihrer Hautberatung können Sie direkt die passende Behandlung wählen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild variant="outline" size="lg">
                <Link to="/laser-haarentfernung-muenchen">
                  Laser-Haarentfernung
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/redtouch-laser-muenchen">
                  RedTouch® Laser
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/icoone-laser-muenchen">
                  Icoone® Behandlung
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Bereit für Ihre persönliche Hautberatung?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Buchen Sie jetzt Ihren kostenlosen Beratungstermin und starten Sie Ihre Beauty-Journey.
            </p>
            <Button
              size="lg"
              className="bg-gradient-hero text-white"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Termin buchen
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

export default HautberatungMuenchen;
