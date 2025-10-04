import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Train, Car, Instagram, Calendar, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';

const Kontakt = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Kontakt – Yuliia Cheporska Studio München-Haidhausen | Elsässer Str. 33',
      description: 'Yuliia Cheporska Studio in München-Haidhausen (Elsässer Str. 33). Nur 5 Min. vom Ostbahnhof. ÖPNV: Tram 19, Bus 145. Termin online buchen oder anrufen.'
    });

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Yuliia Cheporska Studio',
      image: 'https://yuliia-studio.vercel.app/logo2.jpg',
      '@id': 'https://yuliia-studio.vercel.app',
      url: 'https://yuliia-studio.vercel.app/kontakt',
      telephone: '+4915206067810',
      email: 'info@yuliia-studio.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Elsässer Straße 33',
        addressLocality: 'München',
        addressRegion: 'Bayern',
        postalCode: '81667',
        addressCountry: 'DE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1181,
        longitude: 11.6034
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:00',
          closes: '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '18:00'
        }
      ],
      priceRange: '€€'
    });
  }, []);

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-primary mb-6">Kontakt – Yuliia Cheporska Studio München-Haidhausen</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Besuchen Sie uns im Herzen von München-Haidhausen – nur 5–7 Minuten vom Ostbahnhof entfernt
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* Adresse */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-rose-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Adresse</h3>
                <p className="text-muted-foreground mb-2">Elsässer Straße 33</p>
                <p className="text-muted-foreground mb-4">81667 München-Haidhausen</p>
                <a
                  href="https://maps.google.com/?q=Elsässer+Straße+33,+81667+München"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-gold hover:underline text-sm"
                >
                  In Google Maps öffnen →
                </a>
              </CardContent>
            </Card>

            {/* Telefon & WhatsApp */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-rose-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Telefon & WhatsApp</h3>
                <p className="text-muted-foreground mb-2">
                  <a href="tel:+4915206067810" className="hover:text-rose-gold transition-colors">
                    +49 152 06067810
                  </a>
                </p>
                <a
                  href="https://wa.me/4915206067810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-green-600 hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp schreiben
                </a>
              </CardContent>
            </Card>

            {/* Telegram & Email */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-rose-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Telegram & Email</h3>
                <a
                  href="https://t.me/+4915206067810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-700 transition-colors mb-2"
                >
                  <Send className="w-4 h-4 inline mr-1" />
                  Telegram öffnen
                </a>
                <a
                  href="mailto:Yulachip@icloud.com"
                  className="block text-sm text-muted-foreground hover:text-rose-gold transition-colors"
                >
                  <Mail className="w-4 h-4 inline mr-1" />
                  Yulachip@icloud.com
                </a>
              </CardContent>
            </Card>

            {/* Öffnungszeiten */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-rose-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Öffnungszeiten</h3>
                <p className="text-muted-foreground mb-1">Mo–Fr: 10:00–20:00 Uhr</p>
                <p className="text-muted-foreground mb-1">Sa: 10:00–18:00 Uhr</p>
                <p className="text-muted-foreground">So: Nach Vereinbarung</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-8">So finden Sie uns</h2>

            {/* Google Maps Embed */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d11.6034!3d48.1181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f7d4f4c4c1%3A0x0!2sEls%C3%A4sser%20Stra%C3%9Fe%2033%2C%2081667%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yuliia Cheporska Studio München-Haidhausen Standort"
              ></iframe>
            </div>

            {/* Transport Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* ÖPNV */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Train className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Mit ÖPNV</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span><strong>S-Bahn:</strong> Ostbahnhof (S1, S2, S4, S6, S8) – 5–7 Min. Fußweg</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span><strong>Tram:</strong> Linie 19 (Haltestelle Orleansplatz)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span><strong>Bus:</strong> Linie 145 (Haltestelle Ostbahnhof)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Auto & Parken */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Car className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Mit dem Auto</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span><strong>Parken:</strong> Kostenlose Parkplätze in der Elsässer Straße (begrenzt)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span><strong>Parkhaus:</strong> Orleansplatz Tiefgarage (2–3 Min. Fußweg)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-gold mr-2">•</span>
                          <span><strong>Anfahrt:</strong> Über Rosenheimer Straße oder Haidhausener Straße</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Bereit für Ihre Behandlung?</h2>
            <p className="text-xl mb-8 text-white/90">
              Entdecken Sie unser vollständiges Angebot an professionellen Beauty-Behandlungen
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Online Termin buchen
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/services">
                  Alle Behandlungen ansehen
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/preis">
                  Preise ansehen
                </Link>
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <p className="text-white/80">Folgen Sie uns:</p>
              <a
                href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Kontakt;
