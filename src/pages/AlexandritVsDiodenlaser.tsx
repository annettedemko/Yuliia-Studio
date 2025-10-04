import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, CheckCircle, Info, Zap, Shield } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';

const AlexandritVsDiodenlaser = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Alexandrit oder Diodenlaser? Unterschiede | Haarentfernung München',
      description: 'Vergleich Alexandrit vs. Diodenlaser – Vorteile & Unterschiede. Erfahren Sie, welche Methode für Ihre Haut & Haare geeignet ist. Studio in München-Haidhausen.'
    });

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Alexandrit vs. Diodenlaser: Was ist wann sinnvoll?',
      author: {
        '@type': 'Organization',
        name: 'Yuliia Cheporska Studio'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Yuliia Cheporska Studio',
        logo: {
          '@type': 'ImageObject',
          url: 'https://yuliia-studio.vercel.app/logo2.jpg'
        }
      },
      datePublished: '2025-01-15',
      description: 'Ein verständlicher Ratgeber: Wir erklären, wie Alexandrit- und Diodenlaser funktionieren, wo ihre Stärken liegen und wie wir die passende Methode auswählen.'
    });
  }, []);

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/20.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Alexandrit vs. Diodenlaser: Was ist wann sinnvoll?
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Ein verständlicher Ratgeber: Wir erklären, wie beide Systeme funktionieren, wo ihre Stärken liegen und wie wir in der Praxis die passende Methode auswählen.
          </p>
          <Button
            size="lg"
            className="bg-rose-gold hover:bg-rose-gold-dark text-white"
            onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt Beratung buchen
          </Button>
        </div>
      </section>

      {/* Kurzüberblick */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">Kurzüberblick</h2>

            <div className="space-y-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      Beide Laser reduzieren Haarwuchs nachhaltig, brauchen aber mehrere Sitzungen (mindestens 6), weil Haare in Zyklen wachsen.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary mb-2">Alexandrit (Motus AX, 755 nm):</p>
                      <p className="text-muted-foreground">
                        Sehr effektiv bei hellerer bis mittlerer Haut mit dunkleren Haaren; angenehm dank Kontaktkühlung; stark auf großen Flächen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary mb-2">Diodenlaser (M‑Tech):</p>
                      <p className="text-muted-foreground">
                        Flexibel für ein breites Haut-/Haarspektrum, auch empfindliche Zonen; schnelle Behandlungen, leistungsstarke Kühlung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-300 bg-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-orange-800">Wichtig:</span> Graue/weiße/rote Haare enthalten kaum/kein Pigment → eingeschränkte Wirkung bei beiden Systemen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-rose-gold/10 to-primary/10 rounded-lg">
              <p className="text-lg text-primary font-semibold">
                In unserem Studio wählen wir pro Termin das passende Gerät und passen die Parameter an Haut, Haar, Region und Saison an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wie funktionieren die Laser */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
              Wie funktionieren Alexandrit- und Diodenlaser?
            </h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Beide Systeme geben gerichtetes Licht ab. Das Haarpigment (Melanin) nimmt die Energie auf; an der Haarwurzel entsteht Wärme, die das Haarwachstum schwächt. Am wirksamsten ist das in der aktiven Wachstumsphase.
                </p>
                <div className="bg-rose-gold/10 p-6 rounded-lg">
                  <p className="font-semibold text-primary">
                    Deshalb sind mehrere Sitzungen nötig – typisch 6 bis 10 Behandlungen im Abstand von 4-6 Wochen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gerätespezifischer Direktvergleich - Tabelle */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
              Gerätespezifischer Direktvergleich
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left border border-gray-300">Kriterium</th>
                    <th className="p-4 text-left border border-gray-300">Motus Moveo AX (Alexandrit 755 nm)</th>
                    <th className="p-4 text-left border border-gray-300">M-Tech Diodenlaser</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-white">
                    <td className="p-4 font-semibold border border-gray-300">Wellenlängen</td>
                    <td className="p-4 border border-gray-300">755 nm (Alexandrit)</td>
                    <td className="p-4 border border-gray-300">4 Wellenlängen: 755/808/940/1064 nm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold border border-gray-300">Betriebsmodus & Spot</td>
                    <td className="p-4 border border-gray-300">Moveo (Mehrfachpass „in Bewegung"), 5–20 mm Spots, hohe Wiederholraten</td>
                    <td className="p-4 border border-gray-300">SHR/in-motion + „Stempeln"; große Spots je nach Handstück</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold border border-gray-300">Kühlung/Komfort</td>
                    <td className="p-4 border border-gray-300">Kontaktkühlung (Saphir-Tip), ausgelegt auf komfortable LHR</td>
                    <td className="p-4 border border-gray-300">Starke Hautkühlung (teils unter 0 °C)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold border border-gray-300">Haut-/Haartypen</td>
                    <td className="p-4 border border-gray-300">Stark bei feineren, dunklen Haaren; mit Moveo für alle Phototypen (I–VI)</td>
                    <td className="p-4 border border-gray-300">Flexibel: 1064 nm für dunklere Haut, 755 nm hilft bei feinerem Haar</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold border border-gray-300">Evidenzlage</td>
                    <td className="p-4 border border-gray-300">Studien zeigen gute Wirksamkeit & Sicherheit, auch bei IV–VI</td>
                    <td className="p-4 border border-gray-300">Klinische Daten zu Wirksamkeit & Sicherheit, inkl. Typ IV–V</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-blue-800">Hinweis:</span> Hersteller- und Studienangaben sind kontextabhängig. In der Praxis zählt die individuelle Parametrisierung — wir wählen je Termin das passende System.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcher Laser passt zu wem */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
              Welcher Laser passt zu wem? (Praxisleitfaden)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-rose-gold text-white">
                    <th className="p-4 text-left border border-gray-300">Kriterium</th>
                    <th className="p-4 text-left border border-gray-300">Alexandrit (Motus AX)</th>
                    <th className="p-4 text-left border border-gray-300">Diodenlaser (M-Tech)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-white">
                    <td className="p-4 font-semibold border border-gray-300">Hauttypen</td>
                    <td className="p-4 border border-gray-300">Optimal bei heller bis mittlerer Haut (I–III); mit Moveo auch IV–VI möglich</td>
                    <td className="p-4 border border-gray-300">Für alle Hauttypen geeignet; 1064 nm für mittlere bis dunkle Typen</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold border border-gray-300">Haartypen</td>
                    <td className="p-4 border border-gray-300">Feinere, dunklere Haare (z. B. Gesicht, Arme, Oberlippe)</td>
                    <td className="p-4 border border-gray-300">Kräftigere, tief sitzende Haare (z. B. Beine, Rücken, Achseln, Intimbereich)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold border border-gray-300">Komfort</td>
                    <td className="p-4 border border-gray-300">Sehr angenehm durch Kontaktkühlung und Moveo-Bewegung</td>
                    <td className="p-4 border border-gray-300">Angenehm durch Kontaktkühlung (je nach Modell)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold border border-gray-300">Geschwindigkeit</td>
                    <td className="p-4 border border-gray-300">Sehr schnell auf kleinen/mittleren Arealen</td>
                    <td className="p-4 border border-gray-300">Sehr effizient auf großen Flächen</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold border border-gray-300">Sicherheit</td>
                    <td className="p-4 border border-gray-300">Gute Daten bei passender Indikation & Parametern</td>
                    <td className="p-4 border border-gray-300">Flexibles Spektrum; bewährt bei vielen Haut-/Haartypen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Zonen-Empfehlungen */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
              Zonen-Empfehlungen – Alexandrit vs. Diodenlaser
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { zone: 'Oberlippe / Gesicht', alex: '✅ Besonders effektiv bei feinen, dunklen Haaren; sehr hoher Komfort', diode: 'Einsetzbar, wenn Haare dunkler sind' },
                { zone: 'Achseln', alex: 'Gut geeignet bei hellerer Haut', diode: '✅ Sehr effektiv auch bei dunklerer Haut' },
                { zone: 'Arme', alex: '✅ Optimal bei helleren Hauttypen und feinerem Haar', diode: 'Geeignet bei kräftigerem Haar' },
                { zone: 'Beine / Rücken', alex: 'Weniger effizient bei sehr tiefen Haaren', diode: '✅ Erste Wahl für große Flächen & dunklere Hauttypen' },
                { zone: 'Intim / Bikini', alex: 'Möglich, sehr komfortabel bei hellerer Haut', diode: '✅ Erste Wahl bei kräftigem Haar oder dunklerer Haut' }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">{item.zone}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-yellow-700 mb-1">Alexandrit:</p>
                        <p className="text-sm text-muted-foreground">{item.alex}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-700 mb-1">Diodenlaser:</p>
                        <p className="text-sm text-muted-foreground">{item.diode}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sitzungen, Abstände & Erwartungen */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-rose-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
              Sitzungen, Abstände & Erwartungen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-rose-gold mb-4" />
                  <h3 className="font-bold text-primary mb-2">Anzahl Sitzungen</h3>
                  <p className="text-muted-foreground">Rechne mit mindestens 6 Sitzungen, häufig mehr — Haare wachsen zyklisch.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-rose-gold mb-4" />
                  <h3 className="font-bold text-primary mb-2">Abstände</h3>
                  <p className="text-muted-foreground">Typisch 4–6 Wochen (je nach Region; z. B. Rücken ggf. länger).</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-rose-gold mb-4" />
                  <h3 className="font-bold text-primary mb-2">Erwartung</h3>
                  <p className="text-muted-foreground">Erste Reduktion oft nach wenigen Terminen; Ergebnis ist individuell (Haut/Haar/Hormone).</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-rose-gold mb-4" />
                  <h3 className="font-bold text-primary mb-2">Vorbereitung</h3>
                  <p className="text-muted-foreground">24 h vorher rasieren, nicht wachsen/epilieren; Sonne/Selbstbräuner meiden.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-2 border-rose-gold">
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-2">Nachsorge</h3>
                <p className="text-muted-foreground">Kühlen, milde Pflege; UV und starke Peelings kurz pausieren.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warum ist Alexandrit teurer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
              Warum ist der Alexandrit-Laser oft teurer?
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">Technologie & Gerät</h3>
                  <p className="text-muted-foreground">
                    Motus Moveo AX ist ein hochwertiges Alexandrit-System. Moveo-Protokolle (in-motion/Mehrfachpass bei Low-Fluence) ermöglichen komfortable, sichere Behandlungen — insbesondere in sensiblen Zonen. Anschaffung/Wartung sind höher.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">Eignung</h3>
                  <p className="text-muted-foreground">
                    755 nm hat eine hohe Melanin-Absorption — wird deshalb häufig bei feineren, dunkleren Haaren bevorzugt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">Sitzungsdynamik</h3>
                  <p className="text-muted-foreground">
                    Bei passender Indikation können schnell sichtbare Reduktionen auftreten; insgesamt bleiben mehrere Sitzungen nötig (typisch 4–6 Wochen Abstand).
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-yellow-800 mb-3">Einordnung</h3>
                  <p className="text-muted-foreground">
                    Der Alexandrit-Laser ist eine weit verbreitete Premium-Option, besonders bei helleren Hauttypen; bei sehr dunklen Hauttypen wird häufig 1064 nm (Nd:YAG) hervorgehoben.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sicherheit & Risiken */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
              Sicherheit, Risiken & Kontraindikationen
            </h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Typisch & vorübergehend:</h3>
                      <p className="text-muted-foreground">
                        Rötung/Wärmegefühl, evtl. leichte Schwellung (klingt in Stunden bis 1–2 Tagen ab).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-orange-700 mb-2">Selten:</h3>
                      <p className="text-muted-foreground">
                        Reizungen, vorübergehende Pigmentverschiebungen; sehr selten paradoxer Haarwuchs (feiner Flaum in Randbereichen).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-300 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 mb-3">Vorübergehend ungeeignet:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Frische starke Sonnenbräune</li>
                    <li>• Aktive Hautentzündungen</li>
                    <li>• Schwangerschaft (Vorsichtsprinzip)</li>
                    <li>• Photosensibilisierende Medikamente</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Unsere Maßnahmen:</h3>
                  <p>
                    Hauttest, Gerätewahl, Kontaktkühlung und individuelle Parameter pro Termin.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">Häufig gestellte Fragen</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Ist eine Methode grundsätzlich besser?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nein. Beide Systeme sind wirksam. Wir wählen pro Person & Termin die beste Option basierend auf Ihrem Hauttyp, Haarfarbe und der zu behandelnden Zone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Tut eine Laser-Behandlung weh?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Empfinden ist individuell. Die Kontaktkühlung macht die Sitzung für die meisten gut verträglich. Viele beschreiben es als leichtes Kribbeln oder warmes Gefühl.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Kann ich im Sommer starten?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ja, mit Einschränkungen: Sonne/Bräune möglichst meiden; ggf. konservative Einstellungen oder Termin verschieben. Wir beraten Sie individuell zur besten Strategie.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Wirkt es bei sehr feinen, grauen oder roten Haaren?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Bei sehr hellen/grauen/roten Haaren ist die Wirkung eingeschränkt (wenig/kein Pigment). Wir besprechen Alternativen und realistische Erwartungen während der Beratung.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  Wie viele Sitzungen brauche ich?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Meist mindestens 6, teils mehr. Abstände 4–6 Wochen, je nach Region und Verlauf. Die genaue Anzahl hängt von Ihrem Haartyp, Hauttyp und der behandelten Zone ab.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für Ihre persönliche Beratung?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie einen Termin in unserem Studio in München-Haidhausen. Wir analysieren Ihren Haut- und Haartyp und empfehlen die optimale Laser-Methode für Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Jetzt Termin buchen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.location.href = '/laser-haarentfernung-muenchen'}
            >
              Mehr zur Laser-Haarentfernung
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AlexandritVsDiodenlaser;
