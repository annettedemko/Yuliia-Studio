import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Clock, Shield, Target, Award, Star, Phone, Instagram } from 'lucide-react';

const MotusAX = () => {
  const keyFeatures = [
    {
      icon: Target,
      title: "Für alle Haut- und Haartypen",
      description: "Dank der innovativen Alexandrit-Lasertechnologie ist der Motus AX sicher und effektiv für alle Hauttypen (I bis VI) und Haare (außer bei weißem, grauem und rotem Haar)."
    },
    {
      icon: Clock,
      title: "Schnelligkeit und Komfort",
      description: "Das Multipass-Verfahren ermöglicht die Behandlung großer Flächen in wenigen Minuten – ideal für den effizienten Einsatz im Studioalltag."
    },
    {
      icon: Zap,
      title: "Moveo-Technologie",
      description: "Die einzigartige Moveo-Technologie ermöglicht 100 % Energieabsorption und minimiert Energieverluste, wodurch jede Behandlung sicher, komfortabel und besonders effizient wird."
    },
    {
      icon: Shield,
      title: "Integrierte Hautkühlung",
      description: "Die Kontakthautkühlung und Moveo-Technologie sorgen für eine allmähliche Erwärmung, was eine sanfte Behandlung und minimale Nebenwirkungen garantiert."
    }
  ];

  const technicalFeatures = [
    {
      number: "1",
      title: "Alexandrit-Laser 755 nm",
      description: "Der Alexandrit-Laser mit einer Wellenlänge von 755 nm bietet eine optimale Melaninabsorption, hohe Spitzenleistungen und kurze Pulslängen, wodurch präzise und effektive Ergebnisse bei allen Haut- und Haartypen erzielt werden."
    },
    {
      number: "2",
      title: "Moveo-Handstück mit Saphirspitze",
      description: "Das Moveo-Handstück mit einer innovativen Saphirspitze sorgt für eine direkte Energieübertragung auf die Haut, reduziert reflektierte Energieverluste und gewährleistet so maximale Effizienz und Sicherheit."
    },
    {
      number: "3",
      title: "Integriertes Kühlsystem",
      description: "Das integrierte Kühlsystem schützt die Haut während der Behandlung, minimiert das Risiko von Nebenwirkungen und erhöht gleichzeitig den Komfort für den Kunden."
    },
    {
      number: "4",
      title: "Flexible Spotgrößen",
      description: "Mit Spotgrößen zwischen 10 und 20 mm ermöglicht der Motus AX flexible Anpassungen, um sowohl kleine als auch große Behandlungsareale präzise und effizient abzudecken."
    }
  ];

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">

      {/* Hero Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="/deka3.png"
                  alt="Motus AX"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                  style={{
                    transform: 'scale(1.0)',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-primary font-semibold text-sm">DEKA Technology</span>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-4 right-4">
                  <img
                    src="/DEKA logo.png"
                    alt="DEKA Logo"
                    className="h-12 md:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                    style={{
                      filter: 'brightness(1.2) saturate(1.1)',
                    }}
                  />
                </div>

                <div className="mb-6 mt-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 animate-slide-up">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Motus AX
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-purple-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    Die neue Ära der Haarentfernung
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-lg text-lg px-8 py-4"
                    asChild
                  >
                    <a href="tel:+4915206067810">
                      <Phone className="w-5 h-5 mr-2" />
                      Beratung vereinbaren
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - RedTouch PRO Style with Purple/Indigo Colors */}
      <section className="py-12 bg-gradient-to-br from-purple-50 via-background to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-600/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up" style={{ marginTop: '1rem' }}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">Hauptvorteile des Motus AX</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 mx-auto animate-gradient mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Revolutionäre Alexandrit-Laser Technologie für maximale Effizienz und Sicherheit
              </p>
            </div>

            {/* Cards Around Device Layout */}
            <div className="relative max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* LEFT SIDE - First 2 Cards */}
                <div className="lg:col-span-3 space-y-6 lg:translate-x-1/4">
                  {keyFeatures.slice(0, 2).map((feature, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-purple-50/50 backdrop-blur-sm border-2 border-purple-100 hover:border-purple-300 animate-slide-up"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <feature.icon className="w-6 h-6 text-purple-600 group-hover:text-indigo-600 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                          </div>
                        </div>
                        {/* Animated border bottom */}
                        <div className="mt-3 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CENTER - Device Image */}
                <div className="lg:col-span-6 text-center">
                  <div className="relative inline-block animate-slide-up delay-300">
                    <img
                      src="/deka3.png"
                      alt="Motus AX - Das ultimative Haarentfernungsgerät"
                      className="w-full max-w-md mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating tech particles */}
                    <div className="absolute top-10 right-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-70"></div>
                    <div className="absolute bottom-12 left-12 w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
                    <div className="absolute top-1/3 left-8 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-500 opacity-80"></div>
                    <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-indigo-600 rounded-full animate-pulse delay-700 opacity-75"></div>
                  </div>
                </div>

                {/* RIGHT SIDE - Remaining Cards */}
                <div className="lg:col-span-3 space-y-6 lg:-translate-x-1/4">
                  {keyFeatures.slice(2, 4).map((feature, index) => (
                    <Card
                      key={index + 2}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-purple-50/50 backdrop-blur-sm border-2 border-purple-100 hover:border-purple-300 animate-slide-up"
                      style={{animationDelay: `${(index + 2) * 200}ms`}}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <feature.icon className="w-6 h-6 text-purple-600 group-hover:text-indigo-600 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                          </div>
                        </div>
                        {/* Animated border bottom */}
                        <div className="mt-3 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Technische Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative Technologien für optimale Behandlungsergebnisse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {feature.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-purple-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moveo Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
                  Die Moveo-Technologie: Effiziente Energie für maximale Ergebnisse
                </h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="mb-4">
                    Das Moveo-Handstück von DEKA revolutioniert die Laserbehandlung, indem es dank einer innovativen Saphir-Spitze Energieverluste minimiert und die Laserenergie präzise auf die Haut überträgt – selbst bei besonders hellen Hauttypen.
                  </p>
                  <p className="mb-4">
                    Die intelligente Software erkennt das Handstück automatisch und bietet eine schnelle Auswahl der Behandlungsparameter für alle Haut- und Haartypen. Ein integrierter Speicher zeigt die abgegebene Energie an, und ein akustisches Signal informiert, wenn der Behandlungsbereich vollständig ist.
                  </p>
                  <p className="font-semibold text-purple-600">
                    So lassen sich Hautareale von 10 x 10 cm in nur 25 Sekunden effizient behandeln. Nach einer kurzen Schulung ist das System für das gesamte Behandlungsteam einsatzbereit.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/deka3.1.jpeg"
                  alt="Moveo-Technologie"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                  style={{
                    transform: 'scale(0.8)',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <img
                  src="/deka3.2.jpeg"
                  alt="Motus AX Technologie"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img
                  src="/deka3.3.jpeg"
                  alt="Motus AX Handstück"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/10 rounded-full blur-xl animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für die neueste Laser-Technologie?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Erleben Sie die revolutionäre Motus AX Technologie in unserem Studio. Vereinbaren Sie noch heute Ihren Beratungstermin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-white/90 text-lg px-8 py-4"
              asChild
            >
              <a href="tel:+4915206067810">
                <Phone className="w-5 h-5 mr-2" />
                Jetzt beraten lassen
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-purple-900 text-lg px-8 py-4"
              asChild
            >
              <a href="mailto:Yulachip@icloud.com">
                <ArrowRight className="w-5 h-5 ml-2" />
                E-Mail senden
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <p className="text-sm text-white/80">DEKA Zertifiziert</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <p className="text-sm text-white/80">Sicher & Effektiv</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-rose-gold mx-auto mb-2" />
                <p className="text-sm text-white/80">Premium Qualität</p>
              </div>
            </div>

            <div className="mt-6">
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
          </div>
        </div>
      </section>

    </div>
  );
};

export default MotusAX;