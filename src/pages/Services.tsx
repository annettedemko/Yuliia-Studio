import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Heart, Hand, Instagram, Waves } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-6 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-0">
            <h1 className="text-5xl font-bold text-primary mb-2">Unsere Leistungen</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entdecken Sie unser umfassendes Angebot an professionellen Beauty- und Wellnessbehandlungen.
              Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Laser-Haarentfernung Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-primary mb-2">Laser-Haarentfernung</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modernste Laser-Technologien für dauerhafte und schonende Haarentfernung
            </p>
          </div>

          {/* Motus AX Alexandrit-Laser */}
          <div className="max-w-5xl mx-auto mb-6">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300">
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
                      <Link to="/preis#laser-haarentfernung">
                        Preise ansehen <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/laser-haarentfernung-muenchen">Mehr über Laser-Haarentfernung</Link>
                    </Button>
                  </div>
                </div>
              </div>
              </Card>
          </div>

          {/* M-Tech Diodenlaser */}
          <div className="max-w-5xl mx-auto mb-6">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300">
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
                      <Link to="/preis#laser-haarentfernung">
                        Preise ansehen <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/laser-haarentfernung-muenchen">Mehr über Laser-Haarentfernung</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Icoone Laser Section */}
          <div className="max-w-5xl mx-auto mb-6">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300">
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
                      <Link to="/preis#icoone-laser">
                        Preise ansehen <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/icoone-laser">Mehr erfahren</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
        </div>

          {/* RedTouchPro Section */}
          <div className="max-w-5xl mx-auto mb-6">
            <Link to="/redtouch-pro" className="block">
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
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
                      <Link to="/preis#redtouchpro">
                        Preise ansehen <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/redtouch-pro">Mehr erfahren</Link>
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
              <Card className="overflow-hidden h-[561px] hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-primary mb-4">Maniküre & Pediküre</h3>
                    <p className="text-muted-foreground mb-6">
                      Verwöhnen Sie Ihre Hände und Füße mit unseren professionellen Behandlungen.
                      Von klassischer Pflege bis hin zu modernen Gel-Techniken.
                    </p>
                    <div className="flex gap-3">
                      <Button asChild className="bg-gradient-hero text-white">
                        <Link to="/preis#manikuere-pedikuere">
                          Preise ansehen <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/manikuere-pedikuere">Mehr erfahren</Link>
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
            <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
              <a href="tel:+4915206067810">Jetzt Termin vereinbaren</a>
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