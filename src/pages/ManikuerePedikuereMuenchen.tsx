import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';

const ManikuerePedikuereMuenchen = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Maniküre & Pediküre in München-Haidhausen – Kosmetikstudio nahe Ostbahnhof',
      description: 'Professionelle Maniküre & Pediküre in München-Haidhausen. Präzise Pflege, saubere Form, Hygiene. Lack/Gel nach Wunsch. Nur 5 Min. vom Ostbahnhof. Jetzt Termin buchen!'
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
          name: 'Maniküre & Pediküre',
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
          backgroundImage: `url(/23.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Maniküre & Pediküre in München-Haidhausen – Kosmetikstudio nahe Ostbahnhof
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95">
            Präzise Pflege, saubere Form, Hygiene – Lack/Gel nach Wunsch.
            Verwöhnen Sie Ihre Hände und Füße in unserem Kosmetikstudio,
            nur 5-7 Minuten vom Ostbahnhof entfernt.
          </p>
          <Button
            size="lg"
            className="bg-rose-gold hover:bg-rose-gold-dark text-white border-none shadow-lg"
            onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt Termin für Maniküre/Pediküre buchen
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">
              Leistungen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Klassische Maniküre</h3>
                      <p className="text-muted-foreground">
                        Nagelformung, Nagelhautpflege, Handbad und Massage. Optional mit hochwertigem Lack oder langhaltendem Gel.
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
                      <h3 className="font-bold text-primary mb-2">Professionelle Pediküre</h3>
                      <p className="text-muted-foreground">
                        Fußbad, Hornhautentfernung, Nagelbearbeitung und Fußmassage. Mit pflegenden Produkten für samtweiche Füße.
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
                      <h3 className="font-bold text-primary mb-2">Gel-Lack & Shellac</h3>
                      <p className="text-muted-foreground">
                        Langanhaltende Farbe mit brillantem Glanz – perfekt für den Alltag und besondere Anlässe. Hält bis zu 3 Wochen.
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
                      <h3 className="font-bold text-primary mb-2">Nail Art & Design</h3>
                      <p className="text-muted-foreground">
                        Kreative Nageldesigns nach Ihren Wünschen – von dezent bis extravagant. Individuelle Beratung inklusive.
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
              Warum Maniküre & Pediküre bei uns?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Höchste Hygienestandards – sterile Instrumente und Einwegmaterialien
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Hochwertige Produkte namhafter Marken
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Erfahrene und geschulte Nageldesignerinnen
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
              Bereit für gepflegte Hände und Füße?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vereinbaren Sie jetzt Ihren Termin und gönnen Sie sich eine Auszeit.
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
                <Link to="/preis#manicure">
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

export default ManikuerePedikuereMuenchen;
