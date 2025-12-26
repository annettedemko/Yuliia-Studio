import { Card, CardContent } from '@/components/ui/card';
import { PageHelmet } from '@/components/PageHelmet';

const AGB = () => {
  return (
    <>
      <PageHelmet />
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>
            <p className="text-xl text-muted-foreground">
              für die Website www.munchen-beauty.de
            </p>
            </div>
          </div>
      </section>

      {/* AGB Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">1. Geltungsbereich</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die über die Website www.munchen-beauty.de angeboten werden, sowie für alle Terminvereinbarungen zwischen dem jeweiligen Studio / der jeweiligen Dienstleisterin (z. B. Yuliia Cheporska Studio) und ihren Kundinnen und Kunden.</p>

                      <p>Abweichende Bedingungen der Kundinnen und Kunden finden keine Anwendung, es sei denn, ihrer Geltung wurde ausdrücklich schriftlich zugestimmt.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">2. Leistungen</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die angebotenen Dienstleistungen umfassen insbesondere kosmetische und ästhetische Behandlungen (z. B. Gesichts- und Körperbehandlungen, apparative Kosmetik, Laserbehandlungen, Permanent Make-up sowie weitere Beauty-Leistungen).</p>

                      <p>Der genaue Leistungsumfang ergibt sich aus der jeweiligen Terminvereinbarung, der Leistungsbeschreibung auf der Website sowie der aktuellen Preisliste.</p>

                      <p>Individuelle Behandlungspläne und Sonderkonditionen sind nach Absprache möglich.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">3. Terminvereinbarung</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Termine können online (z. B. über externe Buchungssysteme), telefonisch, per E-Mail oder über Messenger-Dienste vereinbart werden.</p>

                      <p>Ein verbindlicher Vertrag kommt zustande, sobald der Termin durch das Studio bestätigt wurde.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">4. Zahlungsmodalitäten</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die Zahlung erfolgt grundsätzlich vor Ort nach der Behandlung, sofern nichts anderes vereinbart wurde.</p>

                      <p>Folgende Zahlungsmethoden werden akzeptiert:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Barzahlung</li>
                        <li>EC-Karte</li>
                        <li>Kreditkarte</li>
                      </ul>

                      <p>Bei Jahresabonnements erfolgt die Abrechnung monatlich per vereinbarter Abbuchung.</p>

                      <p>Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer, sofern diese anfällt.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">5. Stornierung und Terminabsagen</h2>

                    <h3 className="text-xl font-semibold text-primary mb-3">Stornierung durch Kundinnen und Kunden</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Eine kostenlose Stornierung oder Terminverschiebung ist bis 24 Stunden vor dem vereinbarten Termin möglich.</li>
                        <li>Bei einer Stornierung weniger als 24 Stunden vor dem Termin oder bei Nichterscheinen behalten wir uns vor, eine Ausfallpauschale in Höhe von 30 € zu berechnen, sofern kein geringerer Schaden nachgewiesen wird.</li>
                        <li>Den Kundinnen und Kunden bleibt der Nachweis vorbehalten, dass kein oder ein geringerer Schaden entstanden ist.</li>
                      </ul>

                      <p>Bei Abonnements wird im Rahmen der vertraglich vereinbarten Bedingungen eine angemessene Flexibilität bei Terminverschiebungen gewährt.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">6. Verspätung</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Bei einer Verspätung von mehr als 15 Minuten kann die Behandlungszeit entsprechend verkürzt werden. Ein Anspruch auf eine Preisreduzierung besteht in diesem Fall nicht.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">7. Haftung</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die angebotenen Behandlungen werden nach bestem Wissen und Gewissen sowie nach dem aktuellen fachlichen Standard durchgeführt.</p>

                      <p>Eine Garantie für ein bestimmtes Behandlungsergebnis kann nicht übernommen werden, da individuelle Reaktionen von Haut und Körper variieren können.</p>

                      <p>Für Schäden haftet das Studio nur bei Vorsatz oder grober Fahrlässigkeit. Dies gilt nicht für Schäden aus der Verletzung von Leben, Körper oder Gesundheit. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">8. Mitwirkungspflichten der Kundinnen und Kunden</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Kundinnen und Kunden sind verpflichtet, vor der Behandlung wahrheitsgemäße Angaben zu gesundheitlichen Einschränkungen, Allergien, Vorerkrankungen oder sonstigen relevanten Umständen zu machen.</p>

                      <p>Unterbleibt eine entsprechende Mitteilung, ist eine Haftung ausgeschlossen, soweit gesetzlich zulässig.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">9. Datenschutz</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß der geltenden Datenschutzerklärung auf www.munchen-beauty.de sowie den Bestimmungen der DSGVO.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">10. Anwendbares Recht</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Es gilt das Recht der Bundesrepublik Deutschland.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">11. Salvatorische Klausel</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
                      </div>
                    </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Stand:</strong> Februar 2025
                    </p>
                    </div>
                  </div>
              </CardContent>
            </Card>
            </div>
          </div>
      </section>

      </div>
    </>
  );
};

export default AGB;
