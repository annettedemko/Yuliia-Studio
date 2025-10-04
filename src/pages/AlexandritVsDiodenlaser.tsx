import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, CheckCircle, Info, Zap, Shield, Sparkles, Target, Award, Star } from 'lucide-react';
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
        className="relative min-h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(/24.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Professioneller Vergleich</span>
            <Sparkles className="w-4 h-4 text-blue-300" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-white to-blue-300 bg-clip-text text-transparent">
              Alexandrit vs. Diodenlaser
            </span>
            <br />
            <span className="text-white">Was ist wann sinnvoll?</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
            Ein verständlicher Ratgeber: Wir erklären, wie beide Systeme funktionieren, wo ihre Stärken liegen und wie wir in der Praxis die passende Methode auswählen.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white shadow-2xl hover:shadow-rose-gold/50 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt Beratung buchen
          </Button>
        </div>
      </section>

      {/* Kurzüberblick */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-yellow-500 to-blue-500 p-1 rounded-full mb-4">
                <div className="bg-white px-6 py-2 rounded-full">
                  <span className="text-sm font-bold bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
                    Schneller Überblick
                  </span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Die wichtigsten Fakten auf einen Blick
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-rose-gold to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4 mb-12">
              <Card className="border-2 border-transparent hover:border-rose-gold/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-gold/10 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-rose-gold" />
                    </div>
                    <p className="text-muted-foreground flex-1 leading-relaxed">
                      <span className="font-semibold text-primary">Beide Laser</span> reduzieren Haarwuchs nachhaltig, brauchen aber <span className="font-semibold text-primary">mehrere Sitzungen (mindestens 6)</span>, weil Haare in Zyklen wachsen.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-transparent hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-yellow-50/50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold text-yellow-700 text-lg">Alexandrit (Motus AX, 755 nm)</p>
                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">PREMIUM</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Sehr effektiv bei hellerer bis mittlerer Haut mit dunkleren Haaren; angenehm dank Kontaktkühlung; stark auf großen Flächen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-transparent hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-blue-50/50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold text-blue-700 text-lg">Diodenlaser (M‑Tech)</p>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">UNIVERSAL</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Flexibel für ein breites Haut-/Haarspektrum, auch empfindliche Zonen; schnelle Behandlungen, leistungsstarke Kühlung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <Info className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="text-muted-foreground flex-1 leading-relaxed">
                      <span className="font-bold text-orange-800 text-lg block mb-1">⚠️ Wichtig zu wissen:</span>
                      Graue/weiße/rote Haare enthalten kaum/kein Pigment → eingeschränkte Wirkung bei beiden Systemen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-rose-gold bg-gradient-to-br from-rose-gold/5 via-primary/5 to-rose-gold/5 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-rose-gold/10 p-4 rounded-full">
                    <Target className="w-8 h-8 text-rose-gold" />
                  </div>
                </div>
                <p className="text-lg text-primary font-semibold leading-relaxed">
                  In unserem Studio wählen wir pro Termin das passende Gerät und passen die Parameter an Haut, Haar, Region und Saison an.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wie funktionieren die Laser */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-rose-gold/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-lg">
                <Sparkles className="w-5 h-5 text-rose-gold" />
                <span className="text-sm font-semibold text-primary">Technologie erklärt</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Wie funktionieren Alexandrit- und Diodenlaser?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-rose-gold to-blue-500 mx-auto rounded-full"></div>
            </div>

            {/* Image */}
            <div className="mb-10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
              <img
                src="/18.jpeg"
                alt="Laser Haarentfernung Technologie München"
                className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl relative z-10 border-4 border-white"
              />
            </div>

            <Card className="border-2 border-transparent hover:border-rose-gold/50 shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Beide Systeme geben <span className="font-semibold text-primary">gerichtetes Licht</span> ab. Das Haarpigment (Melanin) nimmt die Energie auf; an der Haarwurzel entsteht Wärme, die das Haarwachstum schwächt. Am wirksamsten ist das in der <span className="font-semibold text-primary">aktiven Wachstumsphase</span>.
                </p>
                <div className="bg-gradient-to-br from-rose-gold/10 to-primary/10 p-6 rounded-xl border-l-4 border-rose-gold">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <p className="font-semibold text-primary leading-relaxed">
                      Deshalb sind mehrere Sitzungen nötig – typisch 6 bis 10 Behandlungen im Abstand von 4-6 Wochen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gerätespezifischer Direktvergleich */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 px-6 py-3 rounded-full mb-4 border-2 border-gray-200">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-bold text-primary">VS</span>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Gerätespezifischer Direktvergleich
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Detaillierte technische Spezifikationen unserer Premium-Lasersysteme
              </p>
            </div>

            <div className="overflow-x-auto mb-10">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gradient-to-r from-primary via-rose-gold to-primary">
                      <tr>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider">
                          Kriterium
                        </th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider bg-yellow-500/20">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Alexandrit 755 nm
                          </div>
                        </th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider bg-blue-500/20">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            M-Tech Diodenlaser
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Wellenlängen</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">755 nm (Alexandrit)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">4 Wellenlängen: 755/808/940/1064 nm</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Betriebsmodus</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">Moveo (Mehrfachpass „in Bewegung"), 5–20 mm Spots</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">SHR/in-motion + „Stempeln"; große Spots</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Kühlung/Komfort</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">Kontaktkühlung (Saphir-Tip)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">Starke Hautkühlung (teils unter 0 °C)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Haut-/Haartypen</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">Stark bei dunklen Haaren; Moveo für alle Phototypen (I–VI)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">Flexibel: 1064 nm für dunklere Haut</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Evidenzlage</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">Studien zeigen gute Wirksamkeit & Sicherheit</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">Klinische Daten zu Wirksamkeit & Sicherheit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg mb-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Info className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-blue-800 block mb-1">💡 Hinweis:</span>
                    Hersteller- und Studienangaben sind kontextabhängig. In der Praxis zählt die individuelle Parametrisierung — wir wählen je Termin das passende System.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Device Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500/50 overflow-hidden">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src="/deka3.1.jpeg"
                    alt="Alexandrit Laser München - Motus AX"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">ALEXANDRIT</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-yellow-50/50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <p className="font-bold text-primary">Motus Moveo AX</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Alexandrit 755 nm - Premium Technologie</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500/50 overflow-hidden">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src="/19.png"
                    alt="Diodenlaser Haarentfernung München - M-Tech"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">DIODENLASER</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-blue-50/50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <p className="font-bold text-primary">M-Tech Diodenlaser</p>
                  </div>
                  <p className="text-sm text-muted-foreground">4-in-1 Wellenlängen - Universal System</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Welcher Laser passt zu wem */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-blue-500 px-6 py-3 rounded-full mb-4 shadow-xl">
                <Target className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">Praxisleitfaden</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Welcher Laser passt zu wem?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entscheidungshilfe basierend auf Ihrem Hauttyp und Behandlungsbereich
              </p>
            </div>

            <div className="overflow-x-auto mb-12">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gradient-to-r from-rose-gold via-primary to-rose-gold">
                      <tr>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase">Kriterium</th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase bg-yellow-500/20">Alexandrit</th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase bg-blue-500/20">Diodenlaser</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Hauttypen</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">Optimal I–III; Moveo auch IV–VI</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">Alle Hauttypen geeignet</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Haartypen</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">Feine, dunkle Haare</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">Kräftige, tief sitzende Haare</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Komfort</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">⭐ Sehr angenehm</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">⭐ Angenehm</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Geschwindigkeit</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">Schnell auf kleinen Arealen</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">Effizient auf großen Flächen</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Sicherheit</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">✅ Bewährt</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">✅ Flexibel</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-yellow-500/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/deka3.2.jpeg"
                    alt="Alexandrit Laser München - DEKA Technologie"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">DEKA Alexandrit System</p>
                    <p className="text-sm text-white/80">Premium Laser-Technologie</p>
                  </div>
                </div>
              </Card>

              <Card className="group hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-yellow-500/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/deka3.3.jpeg"
                    alt="Alexandrit Laser München - Behandlung"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">Alexandrit Behandlung</p>
                    <p className="text-sm text-white/80">Professionelle Anwendung</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Zonen-Empfehlungen */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white shadow-lg px-6 py-3 rounded-full mb-4 border-2 border-rose-gold/30">
                <Sparkles className="w-5 h-5 text-rose-gold" />
                <span className="text-sm font-bold text-primary">Zonen-Guide</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Empfehlungen nach Körperzone
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-rose-gold to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  zone: 'Oberlippe / Gesicht',
                  alex: '✅ Besonders effektiv bei feinen, dunklen Haaren; sehr hoher Komfort',
                  diode: 'Einsetzbar, wenn Haare dunkler sind',
                  alexBest: true
                },
                {
                  zone: 'Achseln',
                  alex: 'Gut geeignet bei hellerer Haut',
                  diode: '✅ Sehr effektiv auch bei dunklerer Haut',
                  alexBest: false
                },
                {
                  zone: 'Arme',
                  alex: '✅ Optimal bei helleren Hauttypen und feinerem Haar',
                  diode: 'Geeignet bei kräftigerem Haar',
                  alexBest: true
                },
                {
                  zone: 'Beine / Rücken',
                  alex: 'Weniger effizient bei sehr tiefen Haaren',
                  diode: '✅ Erste Wahl für große Flächen & dunklere Hauttypen',
                  alexBest: false
                },
                {
                  zone: 'Intim / Bikini',
                  alex: 'Möglich, sehr komfortabel bei hellerer Haut',
                  diode: '✅ Erste Wahl bei kräftigem Haar oder dunklerer Haut',
                  alexBest: false
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-rose-gold/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2 rounded-full ${item.alexBest ? 'bg-yellow-500/20' : 'bg-blue-500/20'}`}>
                        <Target className={`w-5 h-5 ${item.alexBest ? 'text-yellow-600' : 'text-blue-600'}`} />
                      </div>
                      <h3 className="text-xl font-bold text-primary flex-1">{item.zone}</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-yellow-50/50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-600" />
                          <p className="text-sm font-bold text-yellow-700">Alexandrit:</p>
                        </div>
                        <p className="text-sm text-gray-700">{item.alex}</p>
                      </div>
                      <div className="bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className="w-4 h-4 text-blue-600" />
                          <p className="text-sm font-bold text-blue-700">Diodenlaser:</p>
                        </div>
                        <p className="text-sm text-gray-700">{item.diode}</p>
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
      <section className="py-20 bg-gradient-to-br from-primary/5 via-rose-gold/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Sitzungen, Abstände & Erwartungen
              </h2>
              <p className="text-muted-foreground">Was Sie über den Behandlungsverlauf wissen sollten</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: CheckCircle, title: 'Anzahl Sitzungen', desc: 'Rechne mit mindestens 6 Sitzungen, häufig mehr — Haare wachsen zyklisch.' },
                { icon: CheckCircle, title: 'Abstände', desc: 'Typisch 4–6 Wochen (je nach Region; z. B. Rücken ggf. länger).' },
                { icon: CheckCircle, title: 'Erwartung', desc: 'Erste Reduktion oft nach wenigen Terminen; Ergebnis ist individuell (Haut/Haar/Hormone).' },
                { icon: CheckCircle, title: 'Vorbereitung', desc: '24 h vorher rasieren, nicht wachsen/epilieren; Sonne/Selbstbräuner meiden.' }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all border-2 border-transparent hover:border-rose-gold/50">
                  <CardContent className="p-6">
                    <div className="bg-rose-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-rose-gold" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-rose-gold shadow-xl bg-gradient-to-br from-rose-gold/5 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-gold/20 p-3 rounded-full">
                    <Sparkles className="w-6 h-6 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2 text-lg">Nachsorge</h3>
                    <p className="text-muted-foreground leading-relaxed">Kühlen, milde Pflege; UV und starke Peelings kurz pausieren.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warum ist Alexandrit teurer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-6 py-3 rounded-full mb-4 border-2 border-yellow-500/30">
                <Award className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-bold text-yellow-700">Premium-Technologie</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Warum ist der Alexandrit-Laser oft teurer?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Technologie & Gerät',
                  text: 'Motus Moveo AX ist ein hochwertiges Alexandrit-System. Moveo-Protokolle (in-motion/Mehrfachpass bei Low-Fluence) ermöglichen komfortable, sichere Behandlungen — insbesondere in sensiblen Zonen. Anschaffung/Wartung sind höher.',
                  color: 'yellow'
                },
                {
                  title: 'Eignung',
                  text: '755 nm hat eine hohe Melanin-Absorption — wird deshalb häufig bei feineren, dunkleren Haaren bevorzugt.',
                  color: 'yellow'
                },
                {
                  title: 'Sitzungsdynamik',
                  text: 'Bei passender Indikation können schnell sichtbare Reduktionen auftreten; insgesamt bleiben mehrere Sitzungen nötig (typisch 4–6 Wochen Abstand).',
                  color: 'yellow'
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 border-transparent hover:border-yellow-500/50 transition-all hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-500/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                        <Star className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-yellow-700 mb-2 text-lg">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/30 p-3 rounded-full">
                      <Info className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-yellow-800 mb-2 text-lg">💡 Einordnung</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Der Alexandrit-Laser ist eine weit verbreitete Premium-Option, besonders bei helleren Hauttypen; bei sehr dunklen Hauttypen wird häufig 1064 nm (Nd:YAG) hervorgehoben.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sicherheit & Risiken */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-500/10 px-6 py-3 rounded-full mb-4 border-2 border-green-500/30">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-bold text-green-700">Sicherheit First</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Sicherheit, Risiken & Kontraindikationen
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50/50 to-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-700 mb-2 text-lg">✅ Typisch & vorübergehend:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Rötung/Wärmegefühl, evtl. leichte Schwellung (klingt in Stunden bis 1–2 Tagen ab).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50/50 to-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <Info className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-700 mb-2 text-lg">⚠️ Selten:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Reizungen, vorübergehende Pigmentverschiebungen; sehr selten paradoxer Haarwuchs (feiner Flaum in Randbereichen).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-red-100/50 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-800 mb-4 text-lg flex items-center gap-2">
                    <div className="bg-red-500/20 p-2 rounded-full">
                      <Info className="w-5 h-5 text-red-600" />
                    </div>
                    🚫 Vorübergehend ungeeignet:
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-12">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Frische starke Sonnenbräune</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Aktive Hautentzündungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Schwangerschaft (Vorsichtsprinzip)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Photosensibilisierende Medikamente</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-2xl border-2 border-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-xl">🛡️ Unsere Maßnahmen:</h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        Hauttest, Gerätewahl, Kontaktkühlung und individuelle Parameter pro Termin.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-4 border-2 border-primary/30">
                <Info className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary">FAQ</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-muted-foreground">Antworten auf die wichtigsten Fragen</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: 'Ist eine Methode grundsätzlich besser?',
                  a: 'Nein. Beide Systeme sind wirksam. Wir wählen pro Person & Termin die beste Option basierend auf Ihrem Hauttyp, Haarfarbe und der zu behandelnden Zone.'
                },
                {
                  q: 'Tut eine Laser-Behandlung weh?',
                  a: 'Empfinden ist individuell. Die Kontaktkühlung macht die Sitzung für die meisten gut verträglich. Viele beschreiben es als leichtes Kribbeln oder warmes Gefühl.'
                },
                {
                  q: 'Kann ich im Sommer starten?',
                  a: 'Ja, mit Einschränkungen: Sonne/Bräune möglichst meiden; ggf. konservative Einstellungen oder Termin verschieben. Wir beraten Sie individuell zur besten Strategie.'
                },
                {
                  q: 'Wirkt es bei sehr feinen, grauen oder roten Haaren?',
                  a: 'Bei sehr hellen/grauen/roten Haaren ist die Wirkung eingeschränkt (wenig/kein Pigment). Wir besprechen Alternativen und realistische Erwartungen während der Beratung.'
                },
                {
                  q: 'Wie viele Sitzungen brauche ich?',
                  a: 'Meist mindestens 6, teils mehr. Abstände 4–6 Wochen, je nach Region und Verlauf. Die genaue Anzahl hängt von Ihrem Haartyp, Hauttyp und der behandelten Zone ab.'
                }
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-gray-200 rounded-lg px-6 hover:border-rose-gold/50 transition-all"
                >
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-rose-gold transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-rose-gold to-primary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold">Persönliche Beratung</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Bereit für Ihre persönliche Beratung?
            </h2>

            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Vereinbaren Sie einen Termin in unserem Studio in München-Haidhausen. Wir analysieren Ihren Haut- und Haartyp und empfehlen die optimale Laser-Methode für Sie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 text-lg px-8 py-6"
                onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt Termin buchen
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all hover:scale-105 text-lg px-8 py-6"
                onClick={() => window.location.href = '/laser-haarentfernung-muenchen'}
              >
                Mehr zur Laser-Haarentfernung
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AlexandritVsDiodenlaser;
