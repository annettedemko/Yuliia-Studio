import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { PageHelmet } from '@/components/PageHelmet';


const Datenschutz = () => {
  return (
    <>
      <PageHelmet />
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">Datenschutzerklärung</h1>
            <p className="text-xl text-muted-foreground">
              Informationen zum Schutz Ihrer persönlichen Daten
            </p>
            </div>
          </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">1. Datenschutz auf einen Blick</h2>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">Allgemeine Hinweise</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                      </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">Datenerfassung auf unserer Website</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                      
                      <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
                      <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                      <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">2. Verantwortliche Stelle</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                      <div className="bg-accent/20 p-4 rounded-lg">
                        <p><strong>Yuliia Cheporska Studio</strong><br/>
                        Yuliia Cheporska<br/>
                        <a
                          href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-gold hover:underline"
                        >
                          Elsässer Straße 33<br/>
                          81667 München
                        </a><br/>
                        Deutschland</p>
                        <p><strong>Telefon:</strong> +49 152 06067810<br/>
                        <strong>E-Mail:</strong> Yulachip@icloud.com</p>
                        </div>
                      <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">3. Ihre Rechte</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                      
                      <p>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">4. Datenerfassung auf unserer Website</h2>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">Server-Log-Dateien</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                      </ul>
                      <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3">Kontaktformular</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                      
                      <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
                      
                      <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

                      <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Cookie-Einwilligung</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die Verwendung von Cookies und vergleichbaren Technologien erfolgt ausschließlich nach Ihrer Einwilligung über das Cookie-Banner. Nicht notwendige Cookies und Tracking-Technologien werden erst nach Ihrer aktiven Zustimmung gesetzt. Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen oder anpassen.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">5. Soziale Medien</h2>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">Instagram Plugin</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.</p>
                      
                      <p>Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.</p>

                      <p>Die Nutzung von Instagram erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Diese Einwilligung können Sie jederzeit über die Cookie-Einstellungen widerrufen.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">6. Plugins und Tools</h2>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">Google Maps</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>

                      <p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.</p>

                      <p>Die Nutzung von Google Maps erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Diese Einwilligung können Sie jederzeit über die Cookie-Einstellungen widerrufen.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Google Analytics</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>

                      <p>Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch den Nutzer ermöglichen. Die durch die Cookies erzeugten Informationen über Ihre Benutzung dieser Website (z. B. IP-Adresse, Gerätetyp, besuchte Seiten, Verweildauer) werden in der Regel an Server von Google übertragen und dort gespeichert.</p>

                      <p>Die IP-Anonymisierung ist auf dieser Website aktiviert, sodass Ihre IP-Adresse von Google innerhalb der Europäischen Union gekürzt wird.</p>

                      <p>Die Nutzung von Google Analytics erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ihre Einwilligung können Sie jederzeit über die Cookie-Einstellungen widerrufen.</p>

                      <p>Die Speicherdauer der Daten beträgt bis zu 14 Monate.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Google Search Console</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Diese Website nutzt Google Search Console, einen Webanalysedienst von Google, zur technischen Analyse und Optimierung der Website. Google Search Console setzt keine Cookies und verarbeitet ausschließlich anonymisierte und aggregierte Daten.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Ahrefs</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Zur Suchmaschinenoptimierung und technischen Analyse der Website wird das Tool Ahrefs (Ahrefs Pte. Ltd., Singapur) eingesetzt. Ahrefs verarbeitet technische Zugriffsdaten (z. B. IP-Adresse, User-Agent) zur Analyse der Website-Performance.</p>

                      <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Optimierung und Sicherheit der Website).</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">7. Eigene Dienste</h2>

                    <h3 className="text-xl font-semibold text-primary mb-3">Terminbuchung und Kundenverwaltung</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Zur Terminvereinbarung und Kundenverwaltung verarbeiten wir folgende personenbezogene Daten:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Name und Vorname</li>
                        <li>Telefonnummer</li>
                        <li>E-Mail-Adresse</li>
                        <li>Behandlungswünsche und -historie</li>
                        <li>Terminzeiten</li>
                      </ul>

                      <p className="font-semibold">Behandlungswünsche und -historie:</p>
                      <p>Es werden keine medizinischen Diagnosen oder sensiblen Gesundheitsdaten im Sinne des Art. 9 DSGVO verarbeitet.</p>

                      <p>Die Verarbeitung erfolgt zur Erfüllung des Vertrages mit Ihnen und zur Durchführung vorvertraglicher Maßnahmen auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden für die Dauer der Geschäftsbeziehung sowie darüber hinaus zur Erfüllung gesetzlicher Aufbewahrungspflichten gespeichert.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Online-Terminbuchung über DIKIDI</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Die Online-Terminbuchung erfolgt teilweise über den externen Dienst DIKIDI. Bei der Nutzung des Buchungssystems werden personenbezogene Daten wie Name, Telefonnummer, E-Mail-Adresse sowie Terminwünsche verarbeitet.</p>

                      <p>Die Verarbeitung der Daten erfolgt zum Zweck der Terminverwaltung und -organisation auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).</p>

                      <p>Die Datenverarbeitung im Rahmen der Online-Terminbuchung erfolgt in der Verantwortung des jeweiligen Anbieters. Es gelten die Datenschutzbestimmungen von DIKIDI: <a href="https://support.dikidi.net/en/knowledge-bases/6/articles/648-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://support.dikidi.net/en/knowledge-bases/6/articles/648-privacy-policy</a></p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Kontakt über Messenger und Telefon</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Diese Website enthält Verlinkungen zu externen Kommunikationsdiensten wie WhatsApp, Telegram sowie eine Telefonverbindung.</p>

                      <p>Wenn Sie diese Dienste nutzen, erfolgt die Kommunikation über die jeweiligen Anbieter. Die Verarbeitung Ihrer personenbezogenen Daten erfolgt dabei in der Verantwortung des jeweiligen Dienstes.</p>

                      <p>Die Nutzung dieser Kommunikationswege erfolgt freiwillig und auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Externe Links und soziale Netzwerke</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Unsere Website enthält Links zu externen Websites und sozialen Netzwerken (z. B. Instagram, externe Partnerseiten).</p>

                      <p>Beim Anklicken solcher Links verlassen Sie unsere Website. Für die Verarbeitung personenbezogener Daten auf den verlinkten Seiten ist ausschließlich der jeweilige Betreiber verantwortlich.</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Behandlungstechnische Hinweise</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Im Rahmen unserer Dienstleistungen (z. B. Maniküre, Pediküre, apparative Kosmetik, Behandlungen mit dem iCOONE® System sowie Laserbehandlungen mit Dioden-, Alexandrit- und RedTouch-Lasersystemen) werden keine personenbezogenen Gesundheitsdaten im Sinne des Art. 9 DSGVO automatisiert verarbeitet oder gespeichert.</p>

                      <p>Personenbezogene Daten werden ausschließlich zur Terminorganisation und Kundenkommunikation verwendet.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">8. Auftragsverarbeitung</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Wir haben zu einem oder mehreren der oben genannten Zwecke Verträge über Auftragsverarbeitung mit folgenden Anbietern geschlossen:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Website-Hosting-Anbieter</li>
                        <li>E-Mail-Service-Provider</li>
                        <li>Terminbuchungssystem</li>
                      </ul>
                      <p>Alle Auftragsverarbeiter sind vertraglich dazu verpflichtet, Ihre Daten nur auf unsere Weisung und unter Einhaltung der DSGVO zu verarbeiten.</p>
                      </div>
                    </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Stand der Datenschutzerklärung:</strong> Januar 2024
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Diese Datenschutzerklärung wurde mit Hilfe des Datenschutz-Generators erstellt.
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

export default Datenschutz;