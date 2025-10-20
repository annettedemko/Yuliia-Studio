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
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">5. Soziale Medien</h2>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">Instagram Plugin</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.</p>
                      
                      <p>Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.</p>
                      
                      <p>Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">6. Plugins und Tools</h2>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">Google Maps</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                      
                      <p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.</p>
                      
                      <p>Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
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
                      
                      <p>Die Verarbeitung erfolgt zur Erfüllung des Vertrages mit Ihnen und zur Durchführung vorvertraglicher Maßnahmen auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden für die Dauer der Geschäftsbeziehung sowie darüber hinaus zur Erfüllung gesetzlicher Aufbewahrungspflichten gespeichert.</p>
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