import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Star, TrendingUp, Shield, Users, Calendar, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUpcomingEvents, cleanupPastEvents, initializeContentData } from '@/utils/contentAPI';
import { Event } from '@/types/admin';

const Deka = () => {
  const [formData, setFormData] = useState({
    vorname: '',
    name: '',
    email: '',
    telefon: '',
    selectedEvent: ''
  });

  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Clean up past events and load upcoming ones
    console.log('Deka page - loading events');
    initializeContentData();
    cleanupPastEvents();
    const events = getUpcomingEvents();
    console.log('Loaded events:', events);
    setUpcomingEvents(events);
  }, []);

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        {/* Background with DEKA Devices */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 h-full w-full p-8 items-center justify-items-center">
            <div className="animate-float-1">
              <img src="/deka1.png" alt="Motus PRO" className="w-24 md:w-32 h-auto opacity-60 hover:opacity-80 transition-opacity duration-500" />
            </div>
            <div className="animate-float-2">
              <img src="/deka2.png" alt="RedTouch PRO" className="w-24 md:w-32 h-auto opacity-60 hover:opacity-80 transition-opacity duration-500" />
            </div>
            <div className="animate-float-3 col-span-1 md:col-span-1">
              <img src="/deka3.png" alt="Motus AX" className="w-28 md:w-36 h-auto opacity-70 hover:opacity-90 transition-opacity duration-500" />
            </div>
            <div className="animate-float-4">
              <img src="/deka4.png" alt="PHYSIQ 360" className="w-24 md:w-32 h-auto opacity-60 hover:opacity-80 transition-opacity duration-500" />
            </div>
            <div className="animate-float-5">
              <img src="/deka5.png" alt="Again cos" className="w-24 md:w-32 h-auto opacity-60 hover:opacity-80 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-rose-gold/10 rounded-full -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full -bottom-48 -right-48 animate-pulse delay-1000"></div>
          <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            {/* DEKA Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src="/DEKA logo.png"
                alt="DEKA Logo"
                className="h-16 md:h-20 w-auto filter drop-shadow-2xl animate-glow"
              />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-rose-gold to-white bg-clip-text text-transparent animate-shimmer">
                Beauty Congress
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-rose-gold mb-8 animate-fade-in-up delay-300">
              Ihr Schritt in die Zukunft
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-500">
              Erleben Sie die revolutionäre DEKA Technologie hautnah.<br/>
              <span className="text-rose-gold font-medium">Innovation • Sicherheit • Erfolg</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-700">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white text-lg py-6 px-8 rounded-full shadow-2xl hover:shadow-rose-gold/25 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const registrationSection = document.querySelector('#registration-form');
                  registrationSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Jetzt Registrieren
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-lg py-6 px-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const benefitsSection = document.querySelector('#benefits-section');
                  benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits-section" className="py-16 bg-background">
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

      {/* Upcoming Events Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Kommende Veranstaltungen</h3>
            <p className="text-lg text-muted-foreground">
              Besuchen Sie unsere exklusiven Beauty Events und erleben Sie die Deka Technologie hautnah
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-gold/20 p-3 rounded-full flex-shrink-0">
                        <Calendar className="w-6 h-6 text-rose-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-primary mb-2">{event.title}</h4>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(event.date).toLocaleDateString('de-DE', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                            {event.time && ` (${event.time})`}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">{event.location}</p>
                            <p className="text-sm">{event.address}</p>
                          </div>
                        </div>
                        {event.description && (
                          <p className="text-sm text-muted-foreground mt-3">{event.description}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>Aktuell sind keine Veranstaltungen geplant. Schauen Sie bald wieder vorbei!</p>
            </div>
          )}
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-16 bg-background">
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

                  {upcomingEvents.length > 0 && (
                    <div>
                      <Label htmlFor="selectedEvent" className="text-base font-medium">
                        Veranstaltung auswählen:
                      </Label>
                      <select
                        id="selectedEvent"
                        name="selectedEvent"
                        value={formData.selectedEvent}
                        onChange={(e) => handleInputChange({ target: { name: 'selectedEvent', value: e.target.value } } as any)}
                        className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-rose-gold focus:border-rose-gold"
                        required
                      >
                        <option value="">Bitte wählen Sie eine Veranstaltung</option>
                        {upcomingEvents.map((event) => (
                          <option key={event.id} value={event.id}>
                            {event.title} - {new Date(event.date).toLocaleDateString('de-DE', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })} {event.time && `(${event.time})`}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

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