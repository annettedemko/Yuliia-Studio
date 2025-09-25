import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Hand, Heart, Sparkles, Clock, Star, Phone, Scissors, Palette } from 'lucide-react';
// Изображения загружаются из папки public

const ManikuerePedikuere = () => {
  const manicureServices = [
    {
      icon: Hand,
      title: 'Klassische Maniküre',
      description: 'Professionelle Nagelpflege mit Formgebung, Nagelhautpflege und Politur',
      duration: '45-60 Min.',
      price: 'ab 35€'
    },
    {
      icon: Sparkles,
      title: 'Gel-Maniküre',
      description: 'Langanhaltende Gel-Lackierung mit bis zu 3 Wochen Haltbarkeit',
      duration: '60-75 Min.',
      price: 'ab 45€'
    },
    {
      icon: Scissors,
      title: 'Nagelverlängerung',
      description: 'Professionelle Verlängerung mit Gel oder Acryl in gewünschter Form',
      duration: '90-120 Min.',
      price: 'ab 60€'
    },
    {
      icon: Palette,
      title: 'Nail Art & Design',
      description: 'Kreative Nagelgestaltung mit individuellen Designs und Motiven',
      duration: '15-30 Min.',
      price: 'ab 10€'
    }
  ];

  const pedicureServices = [
    {
      icon: Heart,
      title: 'Medizinische Pediküre',
      description: 'Therapeutische Fußpflege mit Hornhautentfernung und Nagelpflege',
      duration: '60-75 Min.',
      price: 'ab 45€'
    },
    {
      icon: Sparkles,
      title: 'Wellness-Pediküre',
      description: 'Entspannende Fußbehandlung mit Peeling, Massage und Pflege',
      duration: '75-90 Min.',
      price: 'ab 55€'
    },
    {
      icon: Hand,
      title: 'Gel-Pediküre',
      description: 'Professionelle Gel-Lackierung für langanhaltende Ergebnisse',
      duration: '45-60 Min.',
      price: 'ab 40€'
    },
    {
      icon: Heart,
      title: 'Spa-Pediküre',
      description: 'Luxuriöse Fußbehandlung mit entspannender Massage und Maske',
      duration: '90-105 Min.',
      price: 'ab 65€'
    }
  ];

  const benefits = [
    'Professionelle Nagelpflege und -gestaltung',
    'Verwendung hochwertiger Markenprodukte',
    'Sterilisierte Instrumente und hygienische Arbeitsweise',
    'Individuelle Beratung und Farbauswahl',
    'Entspannte Atmosphäre für Wohlbefinden',
    'Fachkundige Behandlung von Nagelproblemen'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Beratung',
      description: 'Analyse der Nägel und Besprech­ung Ihrer Wünsche'
    },
    {
      step: 2,
      title: 'Vorbereitung',
      description: 'Entfernung alter Lackreste und Reinigung'
    },
    {
      step: 3,
      title: 'Pflege',
      description: 'Nagelhautpflege, Formgebung und Behandlung'
    },
    {
      step: 4,
      title: 'Finish',
      description: 'Lackierung, Design und abschließende Pflege'
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/11.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-white/30 via-white/60 to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Maniküre & Pediküre
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/95">
            Professionelle Hand- und Fußpflege in München
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Verwöhnen Sie Ihre Hände und Füße mit unseren professionellen Behandlungen.
            Von klassischer Pflege bis hin zu modernen Gel-Techniken.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 border-none shadow-lg"
            asChild
          >
            <a href="tel:+4915206067810">
              <Phone className="w-5 h-5 mr-2" />
              Termin vereinbaren
            </a>
          </Button>
        </div>
      </section>

      {/* Maniküre Services */}
      <section className="pt-4 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-primary mb-6">Maniküre-Leistungen</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professionelle Handpflege für gepflegte und schöne Nägel in entspannter Atmosphäre
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {manicureServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-rose-gold/20 p-3 rounded-full">
                        <service.icon className="w-6 h-6 text-rose-gold" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </span>
                          <span className="text-lg font-bold text-rose-gold">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white"
                      asChild
                    >
                      <Link to="/preise">
                        Alle Preise ansehen
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pediküre Services */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-primary mb-6">Pediküre-Leistungen</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Entspannende Fußpflege für gesunde und gepflegte Füße
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pedicureServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </span>
                          <span className="text-lg font-bold text-primary">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <Link to="/preise">
                        Alle Preise ansehen
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">Warum Yuliia Cheporska Studio?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Галерея изображений маникюра */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/7.jpg"
                    alt="Maniküre 1"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/11.jpg"
                    alt="Maniküre 2"
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/13.jpg"
                    alt="Maniküre 3"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/4.jpeg"
                    alt="Maniküre 4"
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/12.jpg"
                    alt="Maniküre 5"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/14.jpg"
                    alt="Maniküre 6"
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/15.jpg"
                    alt="Maniküre 7"
                    className="w-full h-24 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-rose-gold/20 p-2 rounded-full mt-1">
                      <Star className="w-4 h-4 text-rose-gold" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">Behandlungsablauf</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">{process.step}</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Care Tips */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">Pflege-Tipps für zu Hause</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hand className="w-5 h-5 text-rose-gold" />
                    Nagelpflege-Tipps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Verwenden Sie täglich Nagelöl oder Handcreme
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Tragen Sie Handschuhe bei Hausarbeiten
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Feilen Sie Nägel in eine Richtung
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Vermeiden Sie das Kauen an Nägeln und Nagelhaut
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Nutzen Sie einen Unterlack vor der Farbgebung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Fußpflege-Tipps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Cremen Sie Ihre Füße täglich ein
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Wechseln Sie täglich Strümpfe und Socken
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Schneiden Sie Fußnägel gerade ab
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Verwenden Sie atmungsaktive Schuhe
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Gönnen Sie Ihren Füßen regelmäßig ein Fußbad
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pediküre Gallery Section */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">Unsere Pediküre-Arbeiten</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Professionelle Fußpflege</h3>
                <p className="text-muted-foreground">
                  Entdecken Sie unsere hochwertigen Pediküre-Behandlungen. Von medizinischer Fußpflege
                  bis hin zu entspannenden Wellness-Behandlungen – wir sorgen für gesunde und gepflegte Füße.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Medizinische Fußpflege mit Hornhautentfernung
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Entspannende Wellness-Pediküre mit Massage
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Gel-Lackierung für langanhaltende Ergebnisse
                  </li>
                </ul>
              </div>

              {/* Галерея изображений педикюра */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <img
                    src="/8.jpg"
                    alt="Pediküre Hauptbild"
                    className="w-full h-80 object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/16.jpg"
                    alt="Pediküre Detail"
                    className="w-full h-80 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking CTA */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Verwöhnen Sie Ihre Hände und Füße</h2>
            <p className="text-xl mb-8 text-white/90">
              Buchen Sie jetzt Ihren Termin und erleben Sie professionelle Hand- und Fußpflege
              in entspannter Atmosphäre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="tel:+4915206067810">
                  Jetzt Termin buchen
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a
                  href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📸 Maniküre Arbeiten ansehen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-10">Was unsere Kunden sagen</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-rose-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "Die beste Maniküre, die ich je hatte! Yuliia arbeitet sehr präzise und das Ergebnis
                    hält wirklich 3 Wochen. Das Studio ist sehr sauber und gemütlich."
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-primary">Maria Schmidt</div>
                    <div className="text-sm text-muted-foreground">Stammkundin seit 2022</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-rose-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "Endlich eine Pediküre, bei der ich mich wirklich entspannen kann. Die Behandlung
                    ist sehr gründlich und meine Füße fühlen sich danach wie neu an."
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-primary">Anna Müller</div>
                    <div className="text-sm text-muted-foreground">Regelmäßige Kundin</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManikuerePedikuere;