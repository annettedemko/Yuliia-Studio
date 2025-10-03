import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Heart, Hand, Instagram, Waves, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta } from '@/seo/seo';

const Services = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Unsere Behandlungen im Überblick – Kosmetik & Beauty in München-Haidhausen',
      description: 'Vielseitiges Angebot an Kosmetik-, Wellness- und Beauty-Behandlungen im Yuliia Cheporska Studio. Laser-Haarentfernung, Hautbehandlungen, Massagen & mehr in München-Haidhausen.'
    });
  }, []);

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-6 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-0">
            <h1 className="text-5xl font-bold text-primary mb-4">Unsere Behandlungen im Überblick – Kosmetik & Beauty in München-Haidhausen</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
              Im Yuliia Cheporska Studio in München-Haidhausen finden Sie ein vielseitiges Angebot an Kosmetik-, Wellness- und Beauty-Behandlungen.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
              Ob dauerhafte Haarentfernung, innovative Hautbehandlungen oder entspannende Massagen – hier erhalten Sie einen Überblick.
            </p>
            <p className="text-lg text-primary max-w-3xl mx-auto font-medium">
              👉 Klicken Sie auf die jeweilige Behandlung, um alle Details und Preise zu sehen.
            </p>
          </div>
        </div>
      </section>

      {/* Laser-Haarentfernung Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-primary mb-2">Laser-Haarentfernung in München</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Modernste Laser-Technologien für dauerhafte und schonende Haarentfernung
            </p>
            <Button asChild className="bg-gradient-hero text-white mb-6">
              <Link to="/laser-haarentfernung-muenchen">
                Mehr zur Laser-Haarentfernung in München <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Motus AX Alexandrit-Laser */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to="/laser-haarentfernung-muenchen" className="block">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative">
                  <img src="/17.png" alt="Motus AX Alexandrit-Laser" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center ml-[-8%]">
                  <h3 className="text-3xl font-bold text-primary mb-4">Motus AX Alexandrit-Laser</h3>
                  <p className="text-muted-foreground mb-6">
                    Modernste Alexandrit-Laser-Technologie für effektive und schmerzarme Haarentfernung.
                    Besonders geeignet für alle Hauttypen und Haarfarben.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild className="bg-gradient-hero text-white">
                      <Link to="/laser-haarentfernung-muenchen">
                        Mehr zur Laser-Haarentfernung <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/preis#alexandrit">Preise ansehen</Link>
                    </Button>
                  </div>
                </div>
              </div>
              </Card>
            </Link>
          </div>

          {/* M-Tech Diodenlaser */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to="/laser-haarentfernung-muenchen" className="block">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative">
                  <img src="/2.jpeg" alt="M-Tech Diodenlaser"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(0.93)', objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center ml-[-8%] translate-y-[-18%]">
                  <h3 className="text-3xl font-bold text-primary mb-4">M-Tech Diodenlaser</h3>
                  <p className="text-muted-foreground mb-4">
                    Der M-Tech Diodenlaser ist ein innovatives Gerät für professionelle Haarentfernung, das fortschrittliche
                    Technologien und höchste Effizienz vereint. Perfekt für alle Haut- und Haartypen mit schmerzfreien und sicheren Behandlungen.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Hauptvorteile:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hohe Effizienz mit langanhaltenden Ergebnissen</li>
                      <li>• Kühlsystem für sichere Anwendung</li>
                      <li>• Schnelle Behandlung großer Hautflächen</li>
                      <li>• Für alle Haut- und Haartypen geeignet</li>
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="bg-gradient-hero text-white">
                      <Link to="/laser-haarentfernung-muenchen">
                        Mehr zur Laser-Haarentfernung <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/preis#dioden">Preise ansehen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            </Link>
          </div>

          {/* Icoone Laser Section */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to="/icoone-laser-muenchen" className="block">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative">
                  <img src="/3.jpeg" alt="Icoone Laser"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(0.85)', objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center ml-[-8%] translate-y-[-15%]">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Icoone Laser – Body Contouring & Hautpflege
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Innovative Kombination aus Vakuummassage und Laser für Hautstraffung,
                    Cellulite-Reduktion und Verbesserung der Hautqualität.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild className="bg-gradient-hero text-white">
                      <Link to="/icoone-laser-muenchen">
                        Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/preis#icoone">Preise ansehen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            </Link>
        </div>

          {/* RedTouchPro Section */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to="/redtouch-laser-muenchen" className="block">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative">
                  <img src="/deka2.png" alt="RedTouchPro"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(0.50) translateY(-57%) translateX(-5%)', objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center ml-[-8%] translate-y-[-25%]">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    RedTouchPro – Innovative Hautstraffung
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Revolutionary 675nm Laser-Technologie für effektive Hautverjüngung und Kollagenproduktion.
                    Sichere und schmerzfreie Behandlung für alle Hauttypen.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Behandlungsgebiete:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Gesicht und Hals</li>
                      <li>• Dekolleté und Körper</li>
                      <li>• Hände und Unterarme</li>
                      <li>• Spezielle Körperzonen</li>
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="bg-gradient-hero text-white">
                      <Link to="/redtouch-laser-muenchen">
                        Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/preis#redtouchpro">Preise ansehen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            </Link>
        </div>

        </div>
      </section>

      {/* Maniküre & Pediküre Section */}
      <section className="py-6 bg-white mt-[-2%]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/manikuere-pedikuere-muenchen" className="block">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-primary mb-4">Maniküre & Pediküre</h3>
                    <p className="text-muted-foreground mb-6">
                      Verwöhnen Sie Ihre Hände und Füße mit unseren professionellen Behandlungen.
                      Von klassischer Pflege bis hin zu modernen Gel-Techniken.
                    </p>
                    <div className="flex gap-3">
                      <Button asChild className="bg-gradient-hero text-white">
                        <Link to="/manikuere-pedikuere-muenchen">
                          Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/preis#manicure">Preise ansehen</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <img src="/23.png" alt="Maniküre & Pediküre" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Hand className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 bg-gradient-to-b from-white to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Warum Yuliia Cheporska Studio in München?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">Über 5 Jahre Erfahrung in der Beauty-Branche</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">Zertifizierte Geräte & höchste Hygienestandards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">Individuelle Beratung & persönliche Betreuung</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">Flexible Termine, auch abends & am Wochenende</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:col-span-2">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-muted-foreground">Zentrale Lage in München-Haidhausen, nur 5 Min. vom Ostbahnhof</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Alle Behandlungen im Detail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/laser-haarentfernung-muenchen" className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">Laser-Haarentfernung</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <Link to="/redtouch-laser-muenchen" className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">RedTouch Laser</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <Link to="/icoone-laser-muenchen" className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">Icoone Behandlungen</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <Link to="/manikuere-pedikuere-muenchen" className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">Maniküre & Pediküre</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <Link to="/massagen-muenchen" className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">Wellness-Massagen</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <Link to="/hautberatung-muenchen" className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary group-hover:text-rose-gold transition-colors">Hautberatung</span>
                    <ArrowRight className="w-5 h-5 text-rose-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Ihre Traumbehandlung?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Lassen Sie sich von unserem Expertenteam beraten und finden Sie die perfekte Behandlung für Ihre Bedürfnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              Jetzt Termin vereinbaren
            </Button>
            <a
              href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              title="Instagram"
            >
              <Instagram className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;