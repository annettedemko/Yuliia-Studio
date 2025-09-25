import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Star, TrendingUp, Shield, Users } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Deka = () => {
  const [formData, setFormData] = useState({
    vorname: '',
    name: '',
    email: '',
    telefon: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Google Sheets integration
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: Users,
      title: 'Neue Kundschaft gewinnen',
      description: 'Innovative Behandlungen wirken wie ein Magnet für moderne Kunden'
    },
    {
      icon: TrendingUp,
      title: 'Bestehende Kunden langfristig binden',
      description: 'Beeindruckende Resultate sorgen dafür, dass sie immer wiederkommen'
    },
    {
      icon: Star,
      title: 'Umsatz deutlich steigern',
      description: 'Jedes Gerät ist ein Werkzeug für regelmäßige Einnahmen'
    },
    {
      icon: Shield,
      title: 'Mit Sicherheit arbeiten',
      description: 'Zertifizierte, geprüfte und bewährte Technologie'
    }
  ];

  const congressFeatures = [
    'die Geräte selbst testen und ihre Einzigartigkeit erleben',
    'spannende Präsentationen hören und umfassende Informationen erhalten',
    'konkrete Tipps bekommen, wie Sie ein eigenes Studio eröffnen',
    'erfahren, wie Sie Geräte clever leasen und ab dem ersten Tag Gewinn erzielen'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="relative py-12 h-[50vh]"
        style={{
          backgroundImage: `url(/sert.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 via-transparent to-white"></div>
      </section>

      {/* Title Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Deka Beauty Congress
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-rose-gold mb-8">
              Ihr Schritt in die Zukunft von Beauty und Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              In der Beauty-Branche gewinnen nur diejenigen, die mit der Zeit gehen.
              Kundinnen und Kunden suchen heute nicht einfach Dienstleistungen – sie erwarten
              sichtbare Ergebnisse, Sicherheit und Innovation. Genau deshalb sind die Geräte
              von Deka die erste Wahl erfolgreicher Studios weltweit.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-primary mb-4">
              Warum sind diese Geräte für Sie unverzichtbar?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-gold/20 p-3 rounded-full flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-rose-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
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
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-primary mb-8">
              Auf dem Deka Beauty Congress können Sie:
            </h3>

            <div className="space-y-4">
              {congressFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-rose-gold/10 to-primary/10 rounded-lg">
              <h4 className="text-2xl font-bold text-primary mb-4 text-center">
                Deka – das sind nicht einfach Geräte. Das ist Ihr Wachstumspartner.
              </h4>
              <p className="text-lg text-center text-muted-foreground mb-6">
                Jede Anschaffung ist eine Investition, die Tag für Tag für Sie arbeitet und
                sich schneller auszahlt, als Sie denken.
              </p>
              <div className="text-center">
                <p className="text-xl font-semibold text-rose-gold mb-2">
                  🌸 Deka Beauty Congress – weil Ihre Kundschaft das Beste verdient und Ihr Business mehr Erfolg!
                </p>
                <p className="text-lg text-primary font-medium">
                  Seien Sie dabei und werden Sie Teil der Zukunft der apparativen Kosmetik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary">
                  Registrieren
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vorname" className="text-base font-medium">
                        Vorname:
                      </Label>
                      <Input
                        id="vorname"
                        name="vorname"
                        type="text"
                        value={formData.vorname}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">
                        Name:
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      E-Mail:
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefon" className="text-base font-medium">
                      Telefon:
                    </Label>
                    <Input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium block mb-2">
                      Anti-Roboter-Verifizierung
                    </Label>
                    <div className="border border-border rounded-lg p-4 bg-accent/20">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" id="captcha" className="w-4 h-4" required />
                        <label htmlFor="captcha" className="text-sm">
                          Hier klicken
                        </label>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        FriendlyCaptcha
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white text-lg py-6"
                  >
                    Jetzt Registrieren
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device Gallery */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Deka Geräte</h3>
              <p className="text-muted-foreground">Professionelle Technologie für Ihren Erfolg</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Motus PRO', src: '/deka1.png', alt: 'Motus PRO', link: '/motus-pro' },
                { name: 'RedTouch PRO', src: '/deka2.png', alt: 'RedTouch PRO', link: '/redtouch-pro' },
                { name: 'Motus AX', src: '/deka3.png', alt: 'Motus AX', link: '/motus-ax' },
                { name: 'PHYSIQ 360', src: '/deka4.png', alt: 'PHYSIQ 360', link: '/physiq360' },
                { name: 'Again cos', src: '/deka5.png', alt: 'Again cos', link: '/again-cos' }
              ].map((device, index) => (
                <Link key={index} to={device.link} className="block">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-4 cursor-pointer">
                    <img
                      src={device.src}
                      alt={device.alt}
                      className="w-full h-32 object-contain object-center mb-3"
                    />
                    <h4 className="text-sm font-semibold text-center text-primary">{device.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deka;