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
  Microscope,
  Activity,
  Monitor,
  Sparkles,
  Award,
  Clock
} from 'lucide-react';

const RedTouchPro = () => {
  const deviceFeatures = [
    {
      icon: Sparkles,
      title: 'Flexible Faser',
      description: 'Das Laserlicht wird über eine lange und flexible Faser übertragen und gewährleistet somit optimalen Komfort für den Behandler.',
      position: 'top-left'
    },
    {
      icon: Monitor,
      title: 'Ultrascharfer 10,1″ LCD Touchscreen',
      description: 'Das ultrascharfe und reaktionsschnelle 10,1" Display mit einer modernen Benutzeroberfläche ermöglicht eine intuitive Bedienung.',
      position: 'top-right'
    },
    {
      icon: Award,
      title: 'Integrierte Protokolle',
      description: 'Für den RedTouch PRO wurden spezielle Behandlungsprotokolle für die Hautverjüngung entwickelt.',
      position: 'center-left'
    },
    {
      icon: Shield,
      title: 'Integrierte Hautkühlung',
      description: 'Dank des integrierten Hautkühlungssystems wird die Epidermisschicht nicht beschädigt, dadurch werden Nebenwirkungen und daraus resultierende Ausfallzeiten minimiert.',
      position: 'center-right'
    },
    {
      icon: Target,
      title: 'Innovatives Wellenlängen-System',
      description: 'Der RedTouch war das erste System mit 675 nm, welches selektiv auf Kollagenfasern einwirkt und deshalb besonders effektiv arbeitet.',
      position: 'bottom-left'
    },
    {
      icon: Activity,
      title: 'Scanner',
      description: 'Der integrierte Scanner erzielt mittels optimierter Ergonomie bestmögliche Ergebnisse. Mikrozonen thermischer Schädigung rufen eine konsekutive Kollagenfaserdenaturierung hervor.',
      position: 'bottom-right'
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Mikrozonen thermischer Schädigung',
      description: 'Rufen eine sofortige konsekutive Kollagenfaserdenaturierung hervor, die zur Neokollagenese führt'
    },
    {
      icon: Shield,
      title: 'Integrierte Hautkühlung',
      description: 'Minimiert Nebenwirkungen und Ausfallzeiten durch Schutz der Epidermisschicht'
    },
    {
      icon: Target,
      title: '675 nm Wellenlänge',
      description: 'Selektiv auf Kollagenfasern ausgerichtet für hocheffektive Behandlungen'
    },
    {
      icon: Activity,
      title: 'Moveo-Modus',
      description: 'Verbesserte Behandlungsgeschwindigkeit und Handhabung auch bei dunkler Haut'
    },
    {
      icon: Star,
      title: 'Mehr Leistung',
      description: 'Weiterentwicklung des RedTouch mit verbesserter Kühlung und höherer Effizienz'
    },
    {
      icon: CheckCircle,
      title: 'Alle Hauttypen',
      description: 'Sicher anwendbar bei verschiedenen Hauttypen, auch gebräunter Haut'
    }
  ];

  const applications = [
    'Hautverjüngung und Anti-Aging',
    'Verbesserung der Hautelastizität',
    'Kollagen-Stimulation',
    'Behandlung verschiedener Hauttypen',
    'Reduzierung von Hauterschlaffung',
    'Optimierung der Hautstruktur'
  ];

  const designFeatures = [
    {
      icon: Monitor,
      title: 'Touchscreen Interface',
      description: 'Intuitive Bedienung über modernes Touchscreen-Display'
    },
    {
      icon: Sparkles,
      title: 'Flexible Faser',
      description: 'Optimierte Ergonomie für beste Energieübertragung'
    },
    {
      icon: Award,
      title: 'Integrierte Protokolle',
      description: 'Vordefinierte Behandlungsprotokolle für verschiedene Anwendungen'
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="/deka2.png"
                  alt="RedTouch PRO"
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
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      RedTouch PRO
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    Innovative Hautverjüngung mit Laser
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg text-lg px-8 py-4"
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

      {/* Revolutionary Technology Section with Floating Features */}
      <section id="technology" className="pt-12 pb-0 bg-gradient-to-br from-blue-50 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose-gold/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 animate-slide-up">
              <h2 className="text-5xl font-bold gradient-text mb-6">Revolutionäre Technologie</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Entdecken Sie die bahnbrechende 675 nm Technologie mit integriertem Scanner und modernster Benutzeroberfläche
              </p>
            </div>

            {/* Cards Around Device Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" style={{marginBottom: '-40px'}}>
              {/* LEFT SIDE - First 3 cards */}
              <div className="lg:col-span-3 space-y-6" style={{transform: 'translateX(25%) translateY(7%)'}}>
                {deviceFeatures.slice(0, 3).map((feature, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-red-50/50 backdrop-blur-sm border-2 border-red-100 hover:border-red-300 animate-slide-up"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-red-600 group-hover:text-pink-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-red-600 transition-colors">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CENTER - Device Image */}
              <div className="lg:col-span-6 text-center">
                <div className="relative inline-block animate-slide-up delay-300">
                  <img
                    src="/deka2.png"
                    alt="RedTouch PRO - Das ultimative Hautverjüngungsgerät"
                    className="w-full max-w-md mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    style={{transform: 'scale(0.75) translateY(-25%)'}}
                  />

                  {/* Floating tech particles */}
                  <div className="absolute top-10 right-10 w-3 h-3 bg-red-400 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
                  <div className="absolute top-1/3 left-8 w-1 h-1 bg-red-300 rounded-full animate-ping delay-500 opacity-80"></div>
                  <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-pink-600 rounded-full animate-pulse delay-700 opacity-75"></div>
                </div>
              </div>

              {/* RIGHT SIDE - Remaining 3 cards */}
              <div className="lg:col-span-3 space-y-6" style={{transform: 'translateX(-25%)'}}>
                {deviceFeatures.slice(3, 6).map((feature, index) => (
                  <Card
                    key={index + 3}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-red-50/50 backdrop-blur-sm border-2 border-red-100 hover:border-red-300 animate-slide-up"
                    style={{animationDelay: `${(index + 3) * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-red-600 group-hover:text-pink-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-red-600 transition-colors">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Analysis Section */}
      <section className="py-10 bg-background relative overflow-hidden" style={{marginTop: '-160px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 animate-slide-up">
              <h2 className="text-4xl font-bold gradient-text mb-6">Wissenschaftliche Analyse</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">Van Gieson-Färbetechnik zeigt revolutionäre Ergebnisse</p>
            </div>

            {/* Large Image at the top */}
            <div className="text-center mb-6 animate-slide-up">
              <div className="relative inline-block w-full max-w-6xl mx-auto">
                <img
                  src="/deka2.1.png"
                  alt="Wissenschaftliche Hautanalyse - Vorher/Nachher Vergleich der Kollagenfasern"
                  className="w-full object-contain rounded-xl shadow-2xl border-2 border-primary/20"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white font-semibold text-sm flex items-center">
                      <Microscope className="w-4 h-4 mr-2" />
                      Van Gieson-Färbetechnik
                    </span>
                  </div>
                </div>

                {/* RedTouch Logo in top right */}
                <div className="absolute top-4 right-4">
                  <img
                    src="/deka2.4.png"
                    alt="RedTouch Logo"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Text content below */}
            <div className="max-w-5xl mx-auto animate-slide-up delay-300" style={{marginTop: '-20px'}}>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Wirkprinzip der 675 nm Technologie</h3>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    Die Mikrozonen thermischer Schädigung rufen eine sofortige konsekutive Kollagenfaserdenaturierung
                    hervor, die zur Neokollagenese führt. Aufgrund eines integrierten Kühlungssystems und der
                    Selektivität von 675 nm wird die Epidermisschicht nicht beschädigt, dadurch werden Nebenwirkungen
                    und daraus resultierende Ausfallzeiten minimiert.
                  </p>

                  <div className="border-t border-border pt-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">Histologische Untersuchung</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Die histologische Untersuchung unter Anwendung der Van Gieson-Färbetechnik zeigt die
                      menschliche Haut vor (A) und nach der (B) der Behandlung mit dem RedTouch PRO.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Beim ersten Bilderpaar zeigt Bild B, dass es in der Retikularschicht (tiefe Hautschicht)
                      keine Kollagenfaserbündel gibt, sondern dünnere Fasern, die paralleler und gerader sind.
                      Es zeigt eine organisiertere Struktur mit einer <strong className="text-primary">Vermehrung von Kollagenfasern</strong>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Beim zweiten Bilderpaar zeigt Bild B, dass auch die elastischen Fasern (dunkel dargestellt)
                      nach der Behandlung paralleler und gerader in der Haut vorkommen. Dieser Aspekt weist auf
                      eine Struktur hin, die <strong className="text-primary">funktional geeigneter ist für eine bessere Gewebeelastizität</strong>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Scientific Image */}
            <div className="text-center mb-6 animate-slide-up delay-500" style={{marginTop: '40px'}}>
              <div className="relative inline-block w-full max-w-4xl mx-auto">
                <img
                  src="/deka2.2.jpeg"
                  alt="RedTouch PRO - Detailaufnahme der Behandlungsergebnisse"
                  className="w-full object-contain rounded-xl shadow-2xl border-2 border-primary/20"
                  style={{transform: 'translateY(0%)'}}
                />
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white font-semibold text-sm flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Klinische Studie
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Device Showcase Section */}
      <section className="py-10 bg-gradient-to-b from-slate-50 to-white" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 animate-slide-up">
              <h2 className="text-4xl font-bold gradient-text mb-6">RedTouch PRO Gerät</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Professionelle DEKA Technologie für Hautverjüngung
              </p>
            </div>

            {/* Premium Device Card with DEKA-style design */}
            <div className="flex justify-center animate-slide-up delay-300">
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-primary/30 to-blue-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75 group-hover:opacity-100"></div>

                {/* Main device card */}
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden group-hover:shadow-3xl transition-all duration-500 w-[600px] h-[480px]">
                  {/* Silver gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 p-[2px] rounded-2xl">
                    <div className="bg-white h-full w-full rounded-2xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center">
                    {/* Device image container */}
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                      <img
                        src="/deka2.png"
                        alt="RedTouch PRO - Premium DEKA Device"
                        className="w-80 h-80 object-contain drop-shadow-2xl"
                      />
                      {/* Subtle glow around device */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-full blur-2xl scale-110"></div>
                    </div>

                    {/* Device name and badge */}
                    <div className="text-center">
                      <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-primary px-4 py-2 rounded-full mb-4">
                        <Star className="w-4 h-4 text-white mr-2" />
                        <span className="text-white font-semibold text-sm">DEKA Premium</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">RedTouch PRO</h3>
                      <p className="text-gray-600 font-medium">675 nm Hautverjüngungstechnologie</p>
                    </div>
                  </div>

                  {/* Floating sparkle effects */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-primary rounded-full animate-bounce delay-1000 opacity-40"></div>
                  <div className="absolute top-1/3 left-6 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500 opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Technical specifications below */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up delay-500">
              <div className="text-center p-6 bg-white/50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Präzise Technologie</h4>
                <p className="text-gray-600 text-sm">675 nm Wellenlänge für optimale Kollagenbildung</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Sichere Anwendung</h4>
                <p className="text-gray-600 text-sm">Integrierte Hautkühlung schützt die Epidermis</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Moveo-Modus</h4>
                <p className="text-gray-600 text-sm">Fortschrittliche Behandlungsgeschwindigkeit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile des RedTouch PRO */}
      <section className="py-8 bg-background" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 animate-slide-up">
              <h2 className="text-4xl font-bold gradient-text mb-4">Vorteile des RedTouch PRO</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <advantage.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anwendungsbereiche */}
      <section className="py-8 bg-accent/20" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 animate-slide-up">
              <h2 className="text-4xl font-bold gradient-text mb-4">Anwendungsbereiche</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Vielseitige Behandlungsmöglichkeiten für alle Hauttypen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="bg-blue-500/10 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-primary font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design & Ergonomie */}
      <section className="py-8 bg-background" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 animate-slide-up">
              <h2 className="text-4xl font-bold gradient-text mb-4">Design & Ergonomie</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-500 mx-auto animate-gradient"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Optimierte Handhabung</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Der RedTouch PRO ist eine Weiterentwicklung des RedTouch, bietet mehr Leistung, eine verbesserte
                    Kühlung und fügt den Behandlungsmodus Moveo hinzu. Durch die Ausweitung der Anwendung auf dunkle
                    Hauttypen oder gebräunte Haut ermöglicht es eine unvergleichliche Behandlungsgeschwindigkeit und Handhabung.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Das RedTouch PRO-Handstück mit integriertem Scanner wurde entwickelt, um bei optimierter Ergonomie
                    die beste Leistung bei der Energieübertragung auf die Haut zu erzielen.
                  </p>
                </div>

                <div className="space-y-6">
                  {designFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-slide-up delay-300">
                <div className="relative">
                  <img
                    src="/deka2.png"
                    alt="RedTouch PRO Design"
                    className="w-full h-96 object-contain bg-gradient-to-br from-blue-50 to-primary/5 rounded-2xl shadow-elegant p-8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-2xl"></div>

                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-primary font-semibold text-sm">Moveo-Modus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-primary text-white" style={{marginTop: '-30px'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-slide-up">
            Interessiert am RedTouch PRO?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-slide-up delay-200">
            Entdecken Sie die revolutionäre RedTouch PRO Technologie für Ihr Studio.
            Vereinbaren Sie jetzt einen Beratungstermin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="tel:+4915206067810">
                <Phone className="w-5 h-5 mr-2" />
                Beratung vereinbaren
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="mailto:Yulachip@icloud.com">
                <Mail className="w-5 h-5 mr-2" />
                E-Mail senden
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RedTouchPro;