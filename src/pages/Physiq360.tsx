import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, Clock, Target, Award, Star, Phone, Instagram, Sparkles } from 'lucide-react';

const Physiq360 = () => {
  const keyFeatures = [
    {
      icon: Sparkles,
      title: "Vielseitige Technologie",
      description: "PHYSIQ 360 kombiniert EMS und LZR mit exklusiver STEP-Technologie. Dies ermöglicht eine effektive Behandlung von Muskeln und Körperreserven in einer Sitzung."
    },
    {
      icon: Target,
      title: "Individuelle Behandlungsoptionen",
      description: "Mit vier unabhängigen Applikatoren können mehrere Körperbereiche gleichzeitig behandelt werden. Dies maximiert die Effizienz und Behandlungsergebnisse."
    },
    {
      icon: Shield,
      title: "Optimierte Patientenerfahrung",
      description: "Die Behandlung ist komfortabel und erfordert keine Ausfallzeiten. Konstante Kühlung und individuelle Anpassungen sorgen für eine angenehme Sitzung."
    },
    {
      icon: Clock,
      title: "Geringer Personalaufwand",
      description: "Dank intuitiver Steuerung und selbstfixierenden Applikatoren ist der Personalaufwand minimal. So können mehr Patienten in kürzerer Zeit behandelt werden."
    },
    {
      icon: Award,
      title: "Sicher und effektiv",
      description: "PHYSIQ 360 ist für alle Haut- und Körpertypen geeignet. Anpassbare und vorab definierte Parameter, einschließlich speziell entwickelter Kombinationsbehandlungen ermöglichen optimale Ergebnisse."
    }
  ];

  const technologyFeatures = [
    {
      title: "EMS",
      subtitle: "Elektrische Muskelstimulation",
      description: "Aktiviert kraftvoll alle Muskelfasern für eine umfassende Muskelneubildung.",
      icon: Zap
    },
    {
      title: "LZR",
      subtitle: "Laserbehandlung",
      description: "Laserenergie mit der patent-pending PURE BEAM-Technologie gewährleistet optimale Qualität, Gleichmäßigkeit und Eindringtiefe, um die Körperregionen gezielt zu behandeln.",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="/deka4.png"
                  alt="PHYSIQ 360"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                  style={{
                    transform: 'scale(1.15)',
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
                    <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      PHYSIQ 360
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-orange-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    Das System für einzigartige Körperkonturierung
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:shadow-lg text-lg px-8 py-4"
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

      {/* Revolutionary Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl font-bold gradient-text mb-6">Revolutionäre PHYSIQ 360 Features</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">Innovative Technologie für einzigartige Körperkonturierung</p>
            </div>

            {/* Cards Around Device Layout */}
            <div className="relative max-w-7xl mx-auto">
              {/* Desktop & Tablet: 3-column grid */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
                {/* LEFT SIDE - First 2 Cards */}
                <div className="lg:col-span-4 flex flex-col justify-start gap-6">
                  {keyFeatures.slice(0, 2).map((feature, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-orange-50/50 backdrop-blur-sm border-2 border-orange-100 hover:border-orange-300 animate-slide-up"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <feature.icon className="w-6 h-6 text-orange-600 group-hover:text-amber-600 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                          </div>
                        </div>
                        {/* Animated border bottom */}
                        <div className="mt-3 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CENTER - Device Image */}
                <div className="lg:col-span-4 flex items-start justify-center pt-0">
                  <div className="relative inline-block animate-slide-up delay-300 w-full max-w-[350px]">
                    <img
                      src="/deka4.png"
                      alt="PHYSIQ 360 - Das ultimative Körperkonturierungsgerät"
                      className="w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                      style={{transform: 'scale(0.8)'}}
                    />

                    {/* Floating tech particles */}
                    <div className="absolute top-10 right-10 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
                    <div className="absolute bottom-12 left-12 w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
                    <div className="absolute top-1/3 left-8 w-1 h-1 bg-orange-300 rounded-full animate-ping delay-500 opacity-80"></div>
                    <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-amber-600 rounded-full animate-pulse delay-700 opacity-75"></div>
                  </div>
                </div>

                {/* RIGHT SIDE - Next 2 Cards */}
                <div className="lg:col-span-4 flex flex-col justify-start gap-6">
                  {keyFeatures.slice(2, 4).map((feature, index) => (
                    <Card
                      key={index + 2}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-orange-50/50 backdrop-blur-sm border-2 border-orange-100 hover:border-orange-300 animate-slide-up"
                      style={{animationDelay: `${(index + 2) * 200}ms`}}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <feature.icon className="w-6 h-6 text-orange-600 group-hover:text-amber-600 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                          </div>
                        </div>
                        {/* Animated border bottom */}
                        <div className="mt-3 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Mobile: Vertical Stack */}
              <div className="lg:hidden flex flex-col items-center gap-6">
                {/* Device Image First on Mobile */}
                <div className="w-full max-w-sm animate-slide-up delay-300">
                  <img
                    src="/deka4.png"
                    alt="PHYSIQ 360 - Das ultimative Körperkonturierungsgerät"
                    className="w-full object-contain drop-shadow-2xl"
                    style={{transform: 'scale(0.9)'}}
                  />
                </div>

                {/* All Cards Below on Mobile */}
                {keyFeatures.slice(0, 4).map((feature, index) => (
                  <Card
                    key={index}
                    className="w-full group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-orange-50/50 backdrop-blur-sm border-2 border-orange-100 hover:border-orange-300 animate-slide-up"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-orange-600 group-hover:text-amber-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Fifth card centered below (both mobile and desktop) */}
              {keyFeatures[4] && (() => {
                const FifthIcon = keyFeatures[4].icon;
                return (
                  <div className="mt-8 max-w-md mx-auto animate-slide-up" style={{animationDelay: '800ms'}}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-orange-50/50 backdrop-blur-sm border-2 border-orange-100 hover:border-orange-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <FifthIcon className="w-6 h-6 text-orange-600 group-hover:text-amber-600 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-orange-600 transition-colors">{keyFeatures[4].title}</h3>
                            <p className="text-xs text-muted-foreground leading-tight">{keyFeatures[4].description}</p>
                          </div>
                        </div>
                        {/* Animated border bottom */}
                        <div className="mt-3 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* STEP Technology Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Exklusive STEP-Technologie</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Die exklusive STEP-Technologie (Sequential Thermal & Electrical Pulse) ermöglicht die sequenzielle
                Anwendung von EMS und LZR in einer einzigen Sitzung. Durch die gezielte Anpassung der Energiearten
                für Muskeln und Körperreserven werden die Ergebnisse maximiert, während die Behandlungsdauer
                minimiert wird.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img
                  src="/deka4.1.jpeg"
                  alt="STEP-Technologie"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-2xl"></div>
              </div>
              <div>
                <div className="space-y-8">
                  {technologyFeatures.map((tech, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/70 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-orange-600 to-amber-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <tech.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-orange-600 transition-colors">
                              {tech.title}
                            </h3>
                            <h4 className="text-lg font-semibold text-orange-600 mb-3">
                              {tech.subtitle}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <img
                  src="/deka4.2.jpeg"
                  alt="PHYSIQ 360 Technologie"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img
                  src="/deka4.3.jpeg"
                  alt="PHYSIQ 360 Anwendung"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    transform: 'scale(0.85)',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900 via-amber-900 to-orange-900 text-white relative overflow-hidden mb-0">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300/10 rounded-full blur-xl animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für revolutionäre Körperkonturierung?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Erleben Sie die innovative PHYSIQ 360 Technologie in unserem Studio. Vereinbaren Sie noch heute Ihren Beratungstermin.
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

export default Physiq360;