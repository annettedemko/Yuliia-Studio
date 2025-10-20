import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { setPageMeta } from '@/seo/seo';

const Impressum = () => {
  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  // Функция для добавления языкового префикса к ссылкам
  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  useEffect(() => {
    setPageMeta({
      title: 'Impressum – Yuliia Cheporska Studio München',
      description: 'Anbieterkennzeichnung gemäß § 5 TMG: Anschrift, Kontakt und Verantwortliche des Studios in München-Haidhausen.'
    });
  }, []);

  return (
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">Impressum</h1>
            <p className="text-xl text-muted-foreground">
              Rechtliche Informationen nach § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Angaben gemäß § 5 TMG</h2>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Yuliia Cheporska Studio</strong></p>
                      <p>Inhaberin: Yuliia Cheporska</p>
                      <a
                        href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-gold hover:underline"
                      >
                        Elsässer Straße 33<br/>
                        81667 München
                      </a>
                      <p>Deutschland</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Kontakt</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Telefon:</strong> <a href="tel:+4915206067810" className="text-rose-gold hover:underline">+49 152 06067810</a></p>
                      <p><strong>E-Mail:</strong> <a href="mailto:Yulachip@icloud.com" className="text-rose-gold hover:underline">Yulachip@icloud.com</a></p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Berufsbezeichnung:</strong> Kosmetikerin</p>
                      <p><strong>Verliehen in:</strong> Deutschland</p>
                      <p><strong>Es gelten folgende berufsrechtliche Regelungen:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Handwerksordnung (HwO)</li>
                        <li>Kosmetikverordnung</li>
                        <li>Medizinproduktegesetz (MPG)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Umsatzsteuer-ID</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                      <p><strong>DE123456789</strong> (Beispiel - tatsächliche Nummer auf Anfrage)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Redaktionell verantwortlich</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Yuliia Cheporska</p>
                      <a
                        href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-gold hover:underline"
                      >
                        Elsässer Straße 33<br/>
                        81667 München
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">EU-Streitschlichtung</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                      <p><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
                      <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Haftung für Inhalte</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                      
                      <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Haftung für Links</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                      
                      <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Urheberrecht</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                      
                      <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Stand:</strong> Januar 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Impressum;