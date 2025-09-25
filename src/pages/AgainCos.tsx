import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, Clock, Target, Award, Star, Phone, Instagram, Sparkles, Monitor } from 'lucide-react';

const AgainCos = () => {
  const keyFeatures = [
    {
      icon: Zap,
      title: "Alexandrit 755 nm",
      description: "Die Alexandrit-Wellenlänge ermöglicht eine schnelle und effektive Haarentfernung."
    },
    {
      icon: Users,
      title: "Einfach und benutzerfreundlich",
      description: "Der Again zeichnet sich durch einfache und leicht bedienbare Merkmale aus: die kompakte Größe, intuitive Software, leichtes und ergonomisches Handstück sowie die innovative Moveo-Methode."
    },
    {
      icon: Monitor,
      title: "Integrierte Protokolle",
      description: "Der Again bietet ein intuitives Benutzerinterface mit zahlreichen Behandlungsprotokollen für die Moveo-Technologie."
    },
    {
      icon: Shield,
      title: "Integrierte Hautkühlung",
      description: "Die Kontakthautkühlung und wiederholte Passes mit Impulsen geringer Fluence bewirken eine allmähliche Erwärmung, um eine sanfte Behandlung zu ermöglichen."
    },
    {
      icon: Target,
      title: "Moveo-HR-Handstück",
      description: "Das Moveo HR Handstück ist optimal für die Behandlung aller Haar- und Hauttypen. Dank der integrierten Kühlung ist eine sanfte Behandlung garantiert."
    },
    {
      icon: Sparkles,
      title: "180° dreh- und kippbares 15,6″ Display",
      description: "Das dreh- und kippbare 15,6\" Touchscreen Display mit einer komplett modernisierten Benutzeroberfläche ermöglicht eine intuitive und benutzerfreundliche Bedienung."
    }
  ];

  const technicalFeatures = [
    {
      number: "1",
      description: "Die Alexandrit-Wellenlänge (755 nm) eignet sich zum wirkungsvollen Behandeln von feinem und hellem Haar."
    },
    {
      number: "2",
      description: "Mit dem Moveo-HR-Handstück lässt sich unerwünschtes Haar mit Hilfe einer neuen, leichteren, schnelleren und sichereren Methode schmerzfrei und noch wirksamer entfernen."
    },
    {
      number: "3",
      description: "Eine innovative Technologie vereinfacht den Kern des Lasersystems strukturell und reduziert so die Kosten sowie Wartungsprobleme."
    },
    {
      number: "4",
      description: "Das System kommt in einem modernen Design mit einem großen und schwenkbaren 15,6 Zoll Display und intuitiver Benutzeroberfläche."
    },
    {
      number: "5",
      description: "Ein kompaktes System mit niedrigen, laufenden Kosten für das moderne Beauty-Studio."
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="/deka5.png"
                  alt="Again cos"
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
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 animate-slide-up">
                    <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Again cos
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-teal-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    Die Hightech Lösung in der Haarentfernung
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:shadow-lg text-lg px-8 py-4"
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

      {/* Key Features Section - RedTouch PRO Style with Teal/Cyan Colors */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-background to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-600/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-bold gradient-text mb-6">Hauptvorteile des Again cos</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 mx-auto animate-gradient mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Modernste Alexandrit-Laser-Technologie für professionelle Haarentfernung
              </p>
            </div>

            {/* Device with Features Around It */}
            <div className="relative max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-8 items-center">

                {/* LEFT SIDE - 3 Feature Cards */}
                <div className="col-span-12 lg:col-span-3 space-y-6 flex flex-col">
                  {keyFeatures.slice(0, 3).map((feature, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-teal-500/30 animate-slide-up h-[160px]"
                      style={{animationDelay: `${index * 300}ms`}}
                    >
                      <CardContent className="p-4 h-full flex flex-col justify-center">
                        <div className="flex items-start gap-3 h-full">
                          <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-6 h-6 text-teal-600 group-hover:text-cyan-600 transition-colors" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <h3 className="text-base font-bold text-primary mb-2 group-hover:text-teal-600 transition-colors leading-tight">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CENTER - Device Image */}
                <div className="col-span-12 lg:col-span-6 text-center">
                  <div className="relative inline-block animate-slide-up delay-300">
                    <img
                      src="/deka5.png"
                      alt="Again cos - Das ultimative Haarentfernungsgerät"
                      className="w-full max-w-lg mx-auto object-contain drop-shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-3xl"></div>

                    {/* Floating sparkle effects around device */}
                    <div className="absolute top-6 right-6 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute bottom-8 left-8 w-1 h-1 bg-cyan-500 rounded-full animate-bounce delay-1000 opacity-40"></div>
                    <div className="absolute top-1/3 left-6 w-1 h-1 bg-teal-300 rounded-full animate-ping delay-500 opacity-50"></div>
                    <div className="absolute bottom-1/3 right-8 w-1 h-1 bg-cyan-600 rounded-full animate-pulse delay-700 opacity-60"></div>
                  </div>
                </div>

                {/* RIGHT SIDE - 3 Feature Cards (moved 10% closer to center) */}
                <div className="col-span-12 lg:col-span-3 space-y-6 lg:pl-2 flex flex-col">
                  {keyFeatures.slice(3, 6).map((feature, index) => (
                    <Card
                      key={index + 3}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-teal-500/30 animate-slide-up h-[160px]"
                      style={{animationDelay: `${(index + 3) * 300}ms`}}
                    >
                      <CardContent className="p-4 h-full flex flex-col justify-center">
                        <div className="flex items-start gap-3 h-full">
                          <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-6 h-6 text-teal-600 group-hover:text-cyan-600 transition-colors" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <h3 className="text-base font-bold text-primary mb-2 group-hover:text-teal-600 transition-colors leading-tight">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Technische Features
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-8"></div>
              <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
                Revolutionäre Again cos Technologie für maximale Präzision und Effizienz
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
              {/* Left Column - Feature Cards */}
              <div className="space-y-6 animate-slide-up">
                {technicalFeatures.slice(0, 2).map((feature, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-lg border border-white/20 hover:border-teal-300/50">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="bg-gradient-to-br from-teal-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <span className="text-white font-bold text-2xl">{feature.number}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-teal-100 leading-relaxed text-lg">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Center Column - Main Image */}
              <div className="text-center animate-slide-up delay-300">
                <div className="relative inline-block">
                  <img
                    src="/deka5.1.jpeg"
                    alt="Again cos Technologie"
                    className="w-full max-w-md mx-auto h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                    style={{
                      transform: 'scale(0.8)',
                      objectPosition: 'center'
                    }}
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-3xl blur-xl"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-teal-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white font-semibold text-sm flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Advanced Technology
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="space-y-6 animate-slide-up delay-500">
                {technicalFeatures.slice(2, 4).map((feature, index) => (
                  <Card key={index + 2} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-300/50">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <span className="text-white font-bold text-2xl">{feature.number}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-cyan-100 leading-relaxed text-lg">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Showcase */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">System Highlights</h3>
              <p className="text-lg text-muted-foreground">Entdecken Sie die Details der Again cos Technologie</p>
            </div>

            {/* System Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src="/deka5.2.jpeg"
                    alt="Again cos System Detail"
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="font-bold text-lg">System Features</h4>
                    <p className="text-sm text-teal-100">Modernste Technologie</p>
                  </div>
                </div>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src="/deka5.3.jpeg"
                    alt="Again cos Anwendung Detail"
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="font-bold text-lg">Behandlung</h4>
                    <p className="text-sm text-cyan-100">Professionelle Anwendung</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900 via-amber-900 to-orange-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300/10 rounded-full blur-xl animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für professionelle Haarentfernung?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Erleben Sie die innovative Again cos Technologie in unserem Studio. Vereinbaren Sie noch heute Ihren Beratungstermin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-900 hover:bg-white/90 text-lg px-8 py-4"
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
              className="border-white text-white bg-transparent hover:bg-white hover:text-orange-900 text-lg px-8 py-4"
              asChild
            >
              <a href="mailto:cheporska.studio@mnet-online.de">
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
                className="inline-flex bg-gradient-to-br from-pink-500 to-orange-600 hover:from-pink-600 hover:to-orange-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
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

export default AgainCos;