import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';

const RedTouchLaser = () => {
  useEffect(() => {
    setPageMeta({
      title: 'RedTouch® Laserbehandlung in München-Haidhausen – Hautverjüngung & Pigmentkorrektur',
      description: 'RedTouch® 675 nm Laser in München-Haidhausen. Nicht-ablative Hautbehandlung für Kollagen-Ansprache, Pigmentkorrektur und Hautverjüngung. Jetzt Termin buchen!'
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
          name: 'RedTouch Laser',
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
          backgroundImage: `url(/deka2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            RedTouch® Laserbehandlung in München-Haidhausen – Hautverjüngung & Pigmentkorrektur
          </h1>
          <p className="text-lg md:text-xl mb-4 text-white/95">
            Das RedTouch®-Verfahren mit 675 nm (roter Bereich) ist ein nicht-ablatives Verfahren zur gezielten Kollagen-Ansprache.
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/95">
            Meist kurze Sitzungen mit geringer Ausfallzeit – die Eignung wird individuell geprüft.
          </p>
          <Button
            size="lg"
            className="bg-rose-gold hover:bg-rose-gold-dark text-white border-none shadow-lg"
            onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt Termin für RedTouch® Behandlung buchen
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">
              Vorteile der RedTouch® Behandlung in München-Haidhausen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Nicht-ablativ & schonend</h3>
                      <p className="text-muted-foreground">
                        Keine Abtragung der Hautschicht; sanfte Stimulation von innen mit minimaler Ausfallzeit.
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
                      <h3 className="font-bold text-primary mb-2">Gezielte Kollagen-Ansprache</h3>
                      <p className="text-muted-foreground">
                        Die 675-nm-Wellenlänge regt Kollagen- und Elastinbildung an – für straffere, glattere Haut.
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
                      <h3 className="font-bold text-primary mb-2">Pigmentkorrektur & Hautbild</h3>
                      <p className="text-muted-foreground">
                        Kann bei Pigmentstörungen, feinen Linien und ungleichmäßiger Hauttextur unterstützen.
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
                      <h3 className="font-bold text-primary mb-2">Kurze Behandlungsdauer</h3>
                      <p className="text-muted-foreground">
                        Je nach Areal oft nur wenige Minuten pro Sitzung – planbar und alltagskompatibel.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to Laser Hair Removal */}
      <section className="py-12 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Weitere Laser-Behandlungen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Neben RedTouch® bieten wir auch professionelle Laser-Haarentfernung mit Alexandrit und Diodenlaser an.
            </p>
            <Button asChild className="bg-gradient-hero text-white">
              <Link to="/laser-haarentfernung-muenchen">
                Mehr zur Laser-Haarentfernung <ArrowRight className="w-4 h-4 ml-2" />
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

export default RedTouchLaser;
