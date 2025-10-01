import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, Target, Clock, Shield, Star, Phone, Instagram } from 'lucide-react';

const IcooneLaser = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Body Contouring',
      description: 'Gezielte Modellierung der Körpersilhouette durch innovative Vakuum-Laser-Kombination'
    },
    {
      icon: Sparkles,
      title: 'Hautstraffung',
      description: 'Verbesserung der Hautelastizität und Reduzierung von Erschlaffungen'
    },
    {
      icon: Heart,
      title: 'Cellulite-Reduktion',
      description: 'Effektive Behandlung von Orangenhaut und Verbesserung der Hautstruktur'
    },
    {
      icon: Shield,
      title: 'Lymphdrainage',
      description: 'Förderung des Lymphflusses und Entgiftung des Gewebes'
    }
  ];

  const treatmentAreas = [
    'Bauch und Taille',
    'Oberschenkel und Po',
    'Arme und Oberarme',
    'Hüften und Flanken',
    'Rücken',
    'Dekolleté und Hals'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Beratung & Analyse',
      description: 'Individuelle Hautanalyse und Behandlungsplanung'
    },
    {
      step: 2,
      title: 'Vorbereitung',
      description: 'Reinigung und Vorbereitung der Behandlungszone'
    },
    {
      step: 3,
      title: 'Icoone Behandlung',
      description: 'Kombination aus Vakuummassage und Laserbehandlung'
    },
    {
      step: 4,
      title: 'Nachbehandlung',
      description: 'Pflegehinweise und Terminplanung für Folgesitzungen'
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      <section
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/3.6.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 via-transparent to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Icoone Laser
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/95">
            Body Contouring & Hautpflege
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Innovative Kombination aus Vakuummassage und Laser für Hautstraffung,
            Cellulite-Reduktion und Verbesserung der Hautqualität.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-none shadow-lg"
              asChild
            >
              <a href="https://beauty.dikidi.net/#widget=185505" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Beratungstermin vereinbaren
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/preis#icoone-laser">
                Preise ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-primary mb-6">Was ist Icoone Laser?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Icoone ist eine revolutionäre Technologie, die Vakuummassage mit Laserbehandlung kombiniert,
                um optimale Ergebnisse in der Körperkonturierung und Hautverbesserung zu erzielen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <img
                  src="/3.jpeg"
                  alt="Icoone Laser Behandlung"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                  style={{
                    transform: 'scale(0.8)',
                    objectPosition: 'center'
                  }}
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/3.9.jpg"
                    alt="Icoone Technologie Detail 1"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      transform: 'scale(0.85)',
                      objectPosition: 'center'
                    }}
                  />
                  <img
                    src="/3.10.jpg"
                    alt="Icoone Technologie Detail 2"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      transform: 'scale(0.85)',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">Mikro-Vakuum-Technologie</h3>
                    <p className="text-muted-foreground">
                      Über 21.600 Mikro-Perforationen erzeugen einen kontrollierten Vakuumeffekt,
                      der die Durchblutung fördert und das Gewebe stimuliert.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">Laser-Integration</h3>
                    <p className="text-muted-foreground">
                      Die Kombination mit Laserenergie verstärkt die Wirkung und sorgt für
                      tiefgreifende Hautverbesserungen und Gewebestraffung.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">Schmerzfreie Anwendung</h3>
                    <p className="text-muted-foreground">
                      Die Behandlung ist angenehm und entspannend, ohne Ausfallzeiten oder
                      schmerzhafte Nachwirkungen.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Behandlungsbeispiele & Ergebnisse</h2>
              <p className="text-xl text-muted-foreground">Sehen Sie die beeindruckenden Ergebnisse unserer Icoone Laser Behandlungen</p>
            </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { src: '/3.1.jpg', alt: 'Icoone Laser Behandlung 1' },
                { src: '/3.2.jpg', alt: 'Icoone Laser Behandlung 2' },
                { src: '/3.3.jpg', alt: 'Icoone Laser Behandlung 3' },
                { src: '/3.4.jpg', alt: 'Icoone Laser Behandlung 4' },
                { src: '/3.5.jpg', alt: 'Icoone Laser Behandlung 5' },
                { src: '/3.7.jpg', alt: 'Icoone Laser Behandlung 7' },
                { src: '/3.8.jpg', alt: 'Icoone Laser Behandlung 8' },
                { src: '/3.9.jpg', alt: 'Icoone Laser Behandlung 9' },
                { src: '/3.10.jpg', alt: 'Icoone Laser Behandlung 10' },
                { src: '/3.11.jpg', alt: 'Icoone Laser Behandlung 11' },
                { src: '/3.13.jpg', alt: 'Icoone Laser Behandlung 13' },
                { src: '/3.14.jpg', alt: 'Icoone Laser Behandlung 14' }
              ].map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
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

      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">Professionelle Icoone Laser Behandlung</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Erleben Sie die revolutionäre Kombination aus Vakuummassage und Laserbehandlung für
              optimale Hautstraffung und Körperkonturierung in unserem Studio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IcooneLaser;
