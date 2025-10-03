import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';

const MassagenMuenchen = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Wellness-Massagen in München-Haidhausen – Entspannung nahe Ostbahnhof',
      description: 'Entspannende Wellness-Massagen in München-Haidhausen. Klassische Massage, Hot Stone, Aromatherapie & mehr. Nur 5 Min. vom Ostbahnhof. Jetzt Termin buchen!'
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
          name: 'Wellness-Massagen',
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
          backgroundImage: `url(/22.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Wellness-Massagen in München-Haidhausen – Entspannung nahe Ostbahnhof
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95">
            Gönnen Sie sich eine Auszeit vom Alltag.
            Unsere professionellen Wellness-Massagen fördern Entspannung,
            lösen Verspannungen und steigern Ihr Wohlbefinden.
          </p>
          <Button
            size="lg"
            className="bg-rose-gold hover:bg-rose-gold-dark text-white border-none shadow-lg"
            onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt Termin für Wellness-Massage buchen
          </Button>
        </div>
      </section>

      {/* Massage Offerings Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">
              Massage-Angebote
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Klassische Massage</h3>
                      <p className="text-muted-foreground">
                        Ganzkörper- oder Teilmassage zur Lockerung der Muskulatur,
                        Förderung der Durchblutung und Stressabbau. Ideal bei Verspannungen im Nacken, Rücken oder Schultern.
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
                      <h3 className="font-bold text-primary mb-2">Hot Stone Massage</h3>
                      <p className="text-muted-foreground">
                        Warme Basaltsteine werden auf bestimmte Körperpunkte gelegt und massiert.
                        Die Wärme dringt tief ein, entspannt die Muskulatur und harmonisiert den Energiefluss.
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
                      <h3 className="font-bold text-primary mb-2">Aromatherapie-Massage</h3>
                      <p className="text-muted-foreground">
                        Kombination aus sanfter Massage und ätherischen Ölen.
                        Je nach Bedarf wirken die Düfte belebend, beruhigend oder ausgleichend – für ganzheitliches Wohlbefinden.
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
                      <h3 className="font-bold text-primary mb-2">Anti-Stress-Massage</h3>
                      <p className="text-muted-foreground">
                        Speziell entwickelt zur Reduzierung von Stress und innerer Anspannung.
                        Sanfte Techniken fördern die Entspannung und helfen, Körper und Geist zur Ruhe zu bringen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Vorteile unserer Wellness-Massagen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Professionelle Massagetechniken von erfahrenen Therapeutinnen
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Entspannte Atmosphäre in ruhigen, stilvollen Räumen
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Hochwertige Öle und Produkte für maximale Wirkung
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

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Bereit für pure Entspannung?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Buchen Sie jetzt Ihre Wellness-Massage und schenken Sie sich eine Auszeit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-hero text-white"
                onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Termin buchen
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/preis">
                  Preise ansehen
                </Link>
              </Button>
            </div>
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

export default MassagenMuenchen;
