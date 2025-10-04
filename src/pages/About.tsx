import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Phone, Award, Users, Clock, Shield, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
// Изображения загружаются из папки public

const About = () => {

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { name: 'Laser-Haarentfernung (Alexandrit & Dioden)', link: '/laser-haarentfernung-muenchen' },
    { name: 'Icoone Laser Behandlungen', link: '/icoone-laser-muenchen' },
    { name: 'RedTouchPro Laser-Behandlungen', link: '/redtouch-laser-muenchen' },
    { name: 'Professionelle Maniküre & Pediküre', link: '/manikuere-pedikuere-muenchen' },
    { name: 'DEKA Geräte & Technologien', link: '/deka-geraeteverkauf' },
    { name: 'Individuelle Kosmetikberatung', link: '/services' }
  ];

  const advantages = [
    {
      icon: Award,
      title: 'Über 5 Jahre Erfahrung als Kosmetikerin',
      description: 'Langjährige Expertise in professionellen Beauty-Behandlungen'
    },
    {
      icon: Shield,
      title: 'Zertifizierte Laser- und Kosmetikgeräte',
      description: 'Modernste Technologie mit höchsten Sicherheitsstandards'
    },
    {
      icon: Users,
      title: 'Individuelle, persönliche Beratung',
      description: 'Jede Behandlung wird auf Ihre Bedürfnisse abgestimmt'
    },
    {
      icon: Clock,
      title: 'Flexible Terminzeiten (auch abends & am Wochenende)',
      description: 'Termine passend zu Ihrem Zeitplan'
    },
    {
      icon: MapPin,
      title: 'Zentrale Lage in München-Haidhausen (5 Min. vom Ostbahnhof)',
      description: 'Elsässer Straße 33, perfekte Anbindung mit ÖPNV'
    }
  ];

  return (
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section className="pt-16 pb-10 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">Über uns</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Willkommen im Yuliia Cheporska Studio – Ihrem Kosmetikstudio in München-Haidhausen.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-rose-gold" />
              Elsässer Straße 33 – nur 5–7 Minuten vom Ostbahnhof entfernt
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Галерея изображений */}
            <div className="flex gap-4">
              <div className="flex-1">
                <img
                  src="/IMG1.jpg"
                  alt="Yuliia Cheporska - Kosmetikerin"
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
              <div className="flex-1 mt-2">
                <img
                  src="/10.jpg"
                  alt="Studio Atmosphäre"
                  className="w-full h-80 object-cover rounded-lg shadow-elegant"
                  style={{ objectPosition: 'center 12%' }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6">
                Herzlich willkommen in unserem Kosmetikstudio in München!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mein Name ist Yuliia Cheporska und ich freue mich, Sie in meinem Kosmetikstudio in München begrüßen zu dürfen. Mit über 5 Jahren Erfahrung in der Beauty-Branche biete ich Ihnen professionelle Behandlungen in entspannter und vertrauensvoller Atmosphäre.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unser Studio ist darauf spezialisiert, Ihnen mit modernster Technik und individueller Beratung zu einem neuen Wohlgefühl zu verhelfen. Jede Behandlung wird sorgfältig auf Ihre Bedürfnisse abgestimmt.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vertrauen Sie auf unsere Expertise und lassen Sie sich von unserer Leidenschaft für Schönheit und Wohlbefinden begeistern.
              </p>

              <Button
                size="lg"
                className="bg-gradient-hero text-white border-none shadow-rose"
                onClick={scrollToContact}
              >
                <Phone className="w-5 h-5 mr-2" />
                Termin buchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-10 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Welche Kosmetikbehandlungen bietet Yuliia Cheporska Studio?</h2>
            <p className="text-xl text-muted-foreground">
              Professionelle Beauty-Behandlungen in München-Haidhausen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Link key={index} to={service.link} className="flex items-center space-x-3 hover:bg-rose-gold/5 p-3 rounded-lg transition-colors group">
                  <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-foreground group-hover:text-rose-gold transition-colors">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Warum Kundinnen uns in München vertrauen</h2>
            <p className="text-xl text-muted-foreground">
              Unsere Vorteile im Überblick
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-rose-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Moderne Studio-Atmosphäre im Herzen von München-Haidhausen</h2>
              <p className="text-xl text-muted-foreground">Entdecken Sie unsere moderne und einladende Atmosphäre</p>
            </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/s1.jpg', alt: 'Kosmetikstudio München Haidhausen – Empfangsbereich' },
                { src: '/s2.jpg', alt: 'Kosmetikstudio München Haidhausen – Behandlungsraum Laser' },
                { src: '/s3.jpg', alt: 'Kosmetikstudio München Haidhausen – Wartebereich' },
                { src: '/s4.jpg', alt: 'Kosmetikstudio München Haidhausen – Maniküre Bereich' },
                { src: '/s5.jpg', alt: 'Kosmetikstudio München Haidhausen – Pediküre Station' },
                { src: '/uns1.jpg', alt: 'Yuliia Cheporska Studio München – Innenansicht Eingang' },
                { src: '/uns2.jpg', alt: 'Yuliia Cheporska Studio München – DEKA Laser Geräte' },
                { src: '/uns3.jpg', alt: 'Yuliia Cheporska Studio München – Behandlungsliege' },
                { src: '/uns4.jpg', alt: 'Yuliia Cheporska Studio München – Kosmetikgeräte' },
                { src: '/uns5.jpg', alt: 'Yuliia Cheporska Studio München – Relaxbereich' }
              ].map((image, index) => (
                <div key={index} className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${image.className || ''}`}>
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
        </div>
      </section>


      {/* Contact Form */}
      <section id="contact-form" className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Kontaktieren Sie uns</h2>
              <p className="text-xl text-muted-foreground">
                Haben Sie Fragen oder möchten einen Termin vereinbaren? Schreiben Sie uns!
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Ihr vollständiger Name"
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefonnummer *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+49 xxx xxx xxxx"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-Mail-Adresse</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ihre@email.de"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Beschreiben Sie Ihren Wunschtermin oder stellen Sie Ihre Fragen..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-hero text-white border-none shadow-rose"
                  >
                    Nachricht senden
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                  </p>

                  <div className="text-center">
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
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;