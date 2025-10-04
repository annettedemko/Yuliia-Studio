import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Train, Car, Clock, Shield, Award, Star, Instagram, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';
// Изображения загружаются из папки public

const LaserHairRemoval = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Dauerhafte Laser-Haarentfernung in München-Haidhausen',
      description: 'Professionelle Laser-Haarentfernung in München-Haidhausen mit Alexandrit (755 nm) & Diodenlaser. Schonend, effektiv, nachhaltig. Nur 5 Min. vom Ostbahnhof. Jetzt Termin buchen!'
    });

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: window.location.origin
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${window.location.origin}/services`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Laser-Haarentfernung',
          item: window.location.href
        }
      ]
    });
  }, []);

  const faqItems = [
    {
      question: 'Wie viele Sitzungen sind erforderlich?',
      answer: 'In der Regel sind 6-10 Sitzungen erforderlich, abhängig von Ihrem Haartyp, der Körperregion und Ihren individuellen Eigenschaften. Die Sitzungen werden alle 4-8 Wochen durchgeführt.'
    },
    {
      question: 'Ist die Behandlung schmerzhaft?',
      answer: 'Die Behandlung wird oft als weniger schmerzhaft als das Wachsen beschrieben. Die meisten Patienten empfinden sie als ein leichtes Zwicken oder eine warme Empfindung. Unser modernes Equipment minimiert Beschwerden.'
    },
    {
      question: 'Für wen ist die Laser-Haarentfernung geeignet?',
      answer: 'Die Behandlung ist für die meisten Hauttypen geeignet. Besonders effektiv ist sie bei dunklen Haaren auf heller Haut. Bei einer Beratung besprechen wir Ihre individuellen Voraussetzungen.'
    },
    {
      question: 'Welche Körperbereiche können behandelt werden?',
      answer: 'Praktisch alle Körperbereiche können behandelt werden: Gesicht, Achseln, Beine, Arme, Bikinizone, Rücken und mehr. Jeder Bereich erfordert individuelle Behandlungszyklen.'
    },
    {
      question: 'Was kostet eine Behandlung?',
      answer: 'Die Kosten variieren je nach Behandlungsbereich. Kleine Bereiche wie die Oberlippe beginnen bei 30-35€, größere Bereiche wie komplette Beine bei 120-200€. Genaue Preise finden Sie auf unserer Preisseite.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] md:min-h-[60vh] lg:h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/HERO3.1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 via-transparent to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Dauerhafte Laser-Haarentfernung in München-Haidhausen
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/95">
            Glatt. Schonend. Nachhaltig.
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Im Yuliia Cheporska Studio in München-Haidhausen bieten wir professionelle Laser-Haarentfernung
            mit Alexandrit- und Diodenlaser – individuell abgestimmt auf Haut- und Haartyp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-rose-gold hover:bg-rose-gold-dark text-white border-none shadow-rose"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Jetzt Termin für Laser-Haarentfernung buchen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/preis#laser-haarentfernung">
                Preise ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Modernste Laser-Technologie</h2>
              <p className="text-xl text-muted-foreground">
                Wir verwenden ausschließlich zertifizierte, hochmoderne Laser-Systeme für optimale Ergebnisse
              </p>
            </div>
            
            {/* Alexandrit Laser */}
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src="/17.png"
                      alt="Alexandrit Laser München"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Alexandrit Laser</h3>
                    <p className="text-muted-foreground mb-4">
                      Der Alexandrit-Laser ist der Goldstandard für die Haarentfernung bei hellen bis mittleren Hauttypen.
                      Mit seiner 755nm Wellenlänge erreicht er optimale Ergebnisse.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Besonders effektiv bei dunklen Haaren</li>
                      <li>• Schnelle Behandlungszeiten</li>
                      <li>• Präzise und schonend</li>
                      <li>• Klinisch getestet und sicher</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Diodenlaser */}
            <div className="max-w-4xl mx-auto mb-10">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Diodenlaser</h3>
                    <p className="text-muted-foreground mb-4">
                      Unser Diodenlaser eignet sich hervorragend für alle Hauttypen und bietet
                      besonders schonende Behandlungen bei dauerhaften Ergebnissen.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Für alle Hauttypen geeignet</li>
                      <li>• Große Behandlungsflächen möglich</li>
                      <li>• Minimale Nebenwirkungen</li>
                      <li>• Langanhaltende Ergebnisse</li>
                    </ul>
                  </div>
                  <div className="relative">
                    <img
                      src="/19.png"
                      alt="Diodenlaser Haarentfernung München"
                      className="w-full h-full object-cover"
                      style={{
                        transform: 'scale(1.0)',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Comparison Link */}
            <div className="text-center mt-8">
              <Link to="/alexandrit-gegen-diodenlaser">
                <Button variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-white transition-all">
                  <span className="font-semibold">Mehr zur Technik: Alexandrit vs. Diodenlaser – Unterschiede & Einsatz</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Multiple Sessions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-8">Warum sind mehrere Sitzungen erforderlich?</h2>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Das Haarwachstum erfolgt in verschiedenen Phasen. Der Laser kann nur Haare in der aktiven Wachstumsphase (Anagenphase) effektiv behandeln.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">Anagenphase</h3>
                  <p className="text-sm text-muted-foreground">
                    Aktive Wachstumsphase - Haare sind am empfindlichsten für Laserbehandlung
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">Katagenphase</h3>
                  <p className="text-sm text-muted-foreground">
                    Übergangsphase - Haare reagieren weniger auf Laserbehandlung
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">Telogenphase</h3>
                  <p className="text-sm text-muted-foreground">
                    Ruhephase - Laser zeigt keine Wirkung auf ruhende Haarfollikel
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-4">Behandlungsplan</h4>
                  <p className="text-muted-foreground">
                    Da sich nur 20-30% der Haare gleichzeitig in der Wachstumsphase befinden, sind
                    <strong className="text-primary"> 6-10 Sitzungen im Abstand von 4-8 Wochen</strong> erforderlich,
                    um alle Haare zu erfassen und dauerhafte Ergebnisse zu erzielen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">Behandlungsablauf</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">1</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Beratung</h3>
                  <p className="text-sm text-muted-foreground">Individuelle Hautanalyse und Behandlungsplan</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">2</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Vorbereitung</h3>
                  <p className="text-sm text-muted-foreground">Hautreinigung und Schutzmaßnahmen</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">3</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Behandlung</h3>
                  <p className="text-sm text-muted-foreground">Präzise Laser-Anwendung der Zielregion</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">4</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Nachsorge</h3>
                  <p className="text-sm text-muted-foreground">Pflegehinweise und Folgetermin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitability & Contraindications */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">Für wen ist die Laser-Haarentfernung geeignet?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">✓ Eignung</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Effektiv für alle Hauttypen (I bis VI) und verschiedene Haarfarben dank Alexandrit- und Diodenlaser
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Alle Körperbereiche behandelbar
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Frauen und Männer jeden Alters (ab 16 Jahren)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Besonders effektiv bei dichtem Haarwuchs
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Hauttypen I-IV (helle bis olivfarbene Haut)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">⚠️ Kontraindikationen</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Schwangerschaft und Stillzeit
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Akute Hautentzündungen oder Infektionen
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Einnahme lichtsensibilisierender Medikamente
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Frische Bräune oder Sonnenbad (4 Wochen vorher)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Epilepsie oder andere neurologische Erkrankungen
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Risks and Side Effects */}
            <h3 className="text-3xl font-bold text-primary text-center mb-12">Risiken und Nebenwirkungen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">Häufige, vorübergehende Nebenwirkungen</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Leichte Rötung und Schwellung (1-24h)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Warmes Gefühl der behandelten Haut
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Kleine Krusten um die Haarfollikel
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Leichte Hautschuppung nach 1-2 Wochen
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">Seltene Risiken</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Hyperpigmentierung (dunkle Flecken)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Hypopigmentierung (helle Flecken)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Oberflächliche Verbrennungen bei unsachgemäßer Anwendung
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Paradoxer Haarwuchs (sehr selten)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Preparation and Aftercare */}
            <h3 className="text-3xl font-bold text-primary text-center mb-12">Vorbereitung und Nachsorge</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">📋 Vorbereitung</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      4 Wochen vor Behandlung: Keine Sonnenbestrahlung oder Solarium
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      6 Wochen vorher: Kein Waxing, Epilation oder Zupfen
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      1-2 Tage vorher: Haare rasieren (nicht zupfen!)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Am Behandlungstag: Keine Cremes oder Deodorants auftragen
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Bei Medikamenteneinnahme: Rücksprache mit uns halten
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">🧴 Nachsorge</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      24h nach Behandlung: Kühlung mit kalten Kompressen
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      2 Wochen: Hohen Lichtschutzfaktor (LSF 50+) verwenden
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      4 Wochen: Keine Sonnenbestrahlung oder Solarium
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Zwischen Sitzungen: Nur rasieren, nicht zupfen oder wachsen
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Bei Rötung: Beruhigende Aloe Vera Creme auftragen
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">Häufig gestellte Fragen</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-rose-gold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">
              Warum Laser-Haarentfernung im Yuliia Cheporska Studio?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Modernste Laser-Technologie (Alexandrit 755 nm & Diodenlaser)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Individuelle Beratung und Behandlungsplanung
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Erfahrene, zertifizierte Behandlerinnen mit über 5 Jahren Erfahrung
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Höchste Hygienestandards und Sicherheitsprotokolle
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Transparente Preise ohne versteckte Kosten
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Zentrale Lage in München-Haidhausen, nur 5 Min. vom Ostbahnhof
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-12 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Preise Laser-Haarentfernung</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent und fair - entdecken Sie unsere Preise für alle Behandlungsbereiche
            </p>

            <Button
              size="lg"
              className="bg-gradient-hero text-white border-none shadow-rose mr-4"
              asChild
            >
              <Link to="/preis">
                Alle Preise ansehen
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">So finden Sie uns</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">Adresse</h3>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-rose-gold transition-colors"
                    >
                      Elsässer Straße 33<br />
                      81667 München
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Train className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">Öffentliche Verkehrsmittel</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• S-Bahn: S3, S7 bis Rosenheimer Platz (5 Min. Fußweg)</p>
                      <p>• U-Bahn: U4, U5 bis Max-Weber-Platz (8 Min. Fußweg)</p>
                      <p>• Bus: Linie 145 bis Elsässer Straße</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Car className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">Anfahrt mit dem Auto</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• A94 Ausfahrt München-Steinhausen</p>
                      <p>• Parkmöglichkeiten in der Nähe vorhanden</p>
                      <p>• Kostenpflichtige Parkplätze in der Straße</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-card h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7363!2d11.6034!3d48.1181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf3f8b5c4b5d%3A0x8c4b5c4b5c4b5c4b!2sElsässer%20Str.%2033%2C%2081667%20München!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yuliia Cheporska Studio Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-10">Kundenstimmen</h2>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground italic mb-6">
                  "Ich bin absolut begeistert von der professionellen Laser-Haarentfernung bei Yuliia! 
                  Die Behandlung war viel weniger schmerzhaft als erwartet und die Ergebnisse sind fantastisch. 
                  Das Studio ist sehr sauber und das Personal äußerst kompetent."
                </blockquote>
                <div className="text-primary font-semibold">
                  Inna Shevchenko
                </div>
                <div className="text-sm text-muted-foreground">
                  Kundin seit 2023
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
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
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 text-center">
            <Link to="/services" className="text-primary hover:text-rose-gold transition-colors">
              Alle Behandlungen im Überblick
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/preis" className="text-primary hover:text-rose-gold transition-colors">
              Preise
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/kontakt" className="text-primary hover:text-rose-gold transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LaserHairRemoval;