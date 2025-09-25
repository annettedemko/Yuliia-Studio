import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Target,
  Shield,
  Star,
  CheckCircle,
  Monitor,
  Sparkles,
  Award,
  Clock,
  Activity
} from 'lucide-react';

const MotusPro = () => {
  const technicalFeatures = [
    {
      number: '1',
      title: 'Alexandrit-Wellenlänge (755 nm)',
      description: 'Eignet sich zum wirkungsvollen Behandeln von feinem und hellem Haar.'
    },
    {
      number: '2',
      title: 'Moveo-HR-Handstück',
      description: 'Sowohl für Alexandrit- als auch für Nd:YAG-Laser erhältlich. Ermöglicht schmerzfreie und wirksame Haarentfernung mit neuer, leichterer, schnellerer und sichererer Methode.'
    },
    {
      number: '3',
      title: 'Innovative Technologie',
      description: 'Vereinfacht den Kern des Lasersystems strukturell und reduziert so die Kosten sowie Wartungsprobleme.'
    },
    {
      number: '4',
      title: 'Modernes Design',
      description: 'System mit großem und schwenkbarem 15,6 Zoll Display und intuitiver Benutzeroberfläche.'
    },
    {
      number: '5',
      title: 'Kompaktes System',
      description: 'Niedrige, laufende Kosten für das moderne Beauty-Studio.'
    }
  ];

  const keyFeatures = [
    {
      icon: Zap,
      title: '755 / 1064 nm Kombilaser',
      description: 'Die Alexandrit- und Nd:YAG-Wellenlänge ermöglichen eine maximale Flexibilität. Dank optimierter Stromversorgung reicht eine Standard Schuko-Steckdose mit 16A.'
    },
    {
      icon: Monitor,
      title: 'Einfach und benutzerfreundlich',
      description: 'Der Motus PRO zeichnet sich durch besondere Features aus: die kompakte Größe, intuitive Software, leichte und ergonomische Handstücke sowie die innovative Moveo-Methode.'
    },
    {
      icon: Target,
      title: 'Innovatives Moveo-Handstück',
      description: 'Der Motus PRO bietet mit seinem Moveo-HR-Handstück (24 mm Spot Ø) einen Fokus auf die Haarentfernung. Zusätzlich steht ein Anschluss für eine Hautkühlung zur Verfügung.'
    },
    {
      icon: Award,
      title: 'Integrierte Behandlungsprotokolle',
      description: 'Der Motus PRO bietet bis zu 200 Behandlungsprotokolle für die Moveo-Technologie.'
    },
    {
      icon: Shield,
      title: 'Integrierte Hautkühlung',
      description: 'Die Kontakthautkühlung und Moveo-Technologie sorgen für eine allmähliche Erwärmung, was eine sanfte Behandlung und minimale Nebenwirkungen garantiert.'
    },
    {
      icon: Activity,
      title: '180° schwenkbares 15,6″ Display',
      description: 'Das dreh- und kippbare 15,6" Touchscreen Display mit einer komplett modernisierten Oberfläche und großen Symbolen ermöglicht eine intuitive sowie schnelle Bedienung.'
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
                  src="/deka1.png"
                  alt="Motus PRO"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                  style={{
                    transform: 'scale(0.8)',
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
                    style={{filter: 'brightness(1.2) saturate(1.1)'}}
                  />
                </div>
                <div className="mb-6 mt-8">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 animate-slide-up">
                    <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      Motus PRO
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-green-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    Die ideale Lösung für Haarentfernung
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg text-lg px-8 py-4"
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

      {/* Key Features Section - RedTouch PRO Style with Green/Emerald Colors */}
      <section id="features" className="py-20 bg-gradient-to-br from-green-50 via-background to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl font-bold gradient-text mb-6">Hauptmerkmale des Motus PRO</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 mx-auto animate-gradient mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Innovative Technologie für maximale Effizienz und Komfort
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
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-green-500/30 animate-slide-up h-[160px]"
                      style={{animationDelay: `${index * 300}ms`}}
                    >
                      <CardContent className="p-4 h-full flex flex-col justify-center">
                        <div className="flex items-start gap-3 h-full">
                          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-6 h-6 text-green-600 group-hover:text-emerald-600 transition-colors" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <h3 className="text-base font-bold text-primary mb-2 group-hover:text-green-600 transition-colors leading-tight">{feature.title}</h3>
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
                      src="/deka1.png"
                      alt="Motus PRO - Das ultimative Haarentfernungsgerät"
                      className="w-full max-w-lg mx-auto object-contain drop-shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full blur-3xl"></div>

                    {/* Floating sparkle effects around device */}
                    <div className="absolute top-6 right-6 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute bottom-8 left-8 w-1 h-1 bg-emerald-500 rounded-full animate-bounce delay-1000 opacity-40"></div>
                    <div className="absolute top-1/3 left-6 w-1 h-1 bg-green-300 rounded-full animate-ping delay-500 opacity-50"></div>
                    <div className="absolute bottom-1/3 right-8 w-1 h-1 bg-emerald-600 rounded-full animate-pulse delay-700 opacity-60"></div>
                  </div>
                </div>

                {/* RIGHT SIDE - 3 Feature Cards (moved 10% closer to center) */}
                <div className="col-span-12 lg:col-span-3 space-y-6 lg:pl-2 flex flex-col">
                  {keyFeatures.slice(3, 6).map((feature, index) => (
                    <Card
                      key={index + 3}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-green-500/30 animate-slide-up h-[160px]"
                      style={{animationDelay: `${(index + 3) * 300}ms`}}
                    >
                      <CardContent className="p-4 h-full flex flex-col justify-center">
                        <div className="flex items-start gap-3 h-full">
                          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-6 h-6 text-green-600 group-hover:text-emerald-600 transition-colors" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <h3 className="text-base font-bold text-primary mb-2 group-hover:text-green-600 transition-colors leading-tight">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>
            </div>

            {/* Additional Device Images - Moved below the main feature section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up delay-500">
              <div className="text-center">
                <img
                  src="/deka1.1.jpeg"
                  alt="Motus PRO Handstück"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                  style={{
                    transform: 'scale(0.85)',
                    objectPosition: 'center'
                  }}
                />
                <h4 className="font-semibold text-primary mb-2">Moveo-Handstück</h4>
                <p className="text-sm text-muted-foreground">Innovative Saphir-Spitze für präzise Energieübertragung</p>
              </div>

              <div className="text-center">
                <img
                  src="/deka1.2.jpeg"
                  alt="Motus PRO Display"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <h4 className="font-semibold text-primary mb-2">15,6″ Touchscreen</h4>
                <p className="text-sm text-muted-foreground">180° schwenkbares Display mit intuitiver Benutzeroberfläche</p>
              </div>

              <div className="text-center">
                <img
                  src="/deka1.3.jpeg"
                  alt="Motus PRO System"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <h4 className="font-semibold text-primary mb-2">Kompaktes Design</h4>
                <p className="text-sm text-muted-foreground">Modernes System für das professionelle Beauty-Studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl font-bold gradient-text mb-6">Technische Features</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Fünf Schlüsseltechnologien für optimale Behandlungsergebnisse
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {technicalFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {feature.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Moveo Technology Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">Die Moveo-Technologie</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
              <p className="text-xl text-blue-100">Gesteigerte Effizienz für maximale Ergebnisse</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-cyan-300">Revolutionäre Saphir-Spitze</h3>
                    <p className="text-lg leading-relaxed mb-6 text-blue-100">
                      Das Moveo-Handstück von DEKA revolutioniert die Laserbehandlung, indem es dank einer
                      innovativen Saphir-Spitze Energieverluste minimiert und die Laserenergie präzise auf
                      die Haut überträgt – selbst bei besonders hellen Hauttypen.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-cyan-500/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-300 mb-2">Intelligente Software</h4>
                        <p className="text-blue-100 text-sm">Erkennt das Handstück automatisch und bietet schnelle Parameterauswahl</p>
                      </div>
                      <div className="bg-cyan-500/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-300 mb-2">Integrierter Speicher</h4>
                        <p className="text-blue-100 text-sm">Zeigt die abgegebene Energie an mit akustischem Behandlungssignal</p>
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold text-cyan-300">Ultraschnelle Behandlung</span>
                      </div>
                      <p className="text-blue-100 text-sm">
                        Hautareale von 10 x 10 cm in nur 25 Sekunden effizient behandeln
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-slide-up delay-300">
                <div className="relative">
                  <img
                    src="/deka1.png"
                    alt="Motus PRO Moveo-Technologie"
                    className="w-full object-contain rounded-xl shadow-2xl border-4 border-white/20"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-cyan-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white font-semibold text-sm flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Moveo-Technologie
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Jetzt Motus PRO erleben</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Entdecken Sie die revolutionäre Motus PRO Technologie für Ihr Beauty-Studio.
              Kontaktieren Sie uns für eine individuelle Beratung und Demonstration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+4915206067810">
                  <Phone className="w-5 h-5 mr-2" />
                  Sofort anrufen
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:info@yuliia-studio.de">
                  <Mail className="w-5 h-5 mr-2" />
                  Angebot anfordern
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4"
                asChild
              >
                <Link to="/deka-geraeteverkauf">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Weitere DEKA Geräte
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Als offizieller DEKA Vertriebspartner bieten wir Ihnen umfassende Beratung,
                Schulungen und professionellen Support für Ihre Motus PRO Installation.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MotusPro;