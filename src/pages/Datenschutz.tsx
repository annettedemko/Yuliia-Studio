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
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">3. Ihre Rechte gemäß DSGVO</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Sie haben als betroffene Person folgende Rechte gegenüber uns in Bezug auf Ihre personenbezogenen Daten. Diese Rechte können Sie jederzeit geltend machen:</p>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">Recht auf Auskunft (Art. 15 DSGVO)</p>
                        <p className="text-sm">Sie haben das Recht, unentgeltlich Auskunft über die von uns verarbeiteten personenbezogenen Daten zu erhalten. Dies umfasst Informationen über die Verarbeitungszwecke, Kategorien der Daten, Empfänger, Speicherdauer und Ihre weiteren Rechte.</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">Recht auf Berichtigung (Art. 16 DSGVO)</p>
                        <p className="text-sm">Sie haben das Recht, die Berichtigung unrichtiger personenbezogener Daten zu verlangen. Unvollständige Daten können Sie vervollständigen lassen.</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">Recht auf Löschung (Art. 17 DSGVO)</p>
                        <p className="text-sm">Sie können die Löschung Ihrer personenbezogenen Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen und die Verarbeitung nicht mehr erforderlich ist.</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</p>
                        <p className="text-sm">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen, wenn Sie die Richtigkeit der Daten bestreiten, die Verarbeitung unrechtmäßig ist oder wir die Daten nicht mehr benötigen.</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</p>
                        <p className="text-sm">Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und an einen anderen Verantwortlichen zu übermitteln.</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">Widerspruchsrecht (Art. 21 DSGVO)</p>
                        <p className="text-sm">Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen, sofern die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) beruht.</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</p>
                        <p className="text-sm">Sofern die Verarbeitung auf Ihrer Einwilligung beruht, haben Sie das Recht, diese jederzeit mit Wirkung für die Zukunft zu widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.</p>
                        <p className="text-sm mt-2"><strong>Wie können Sie Ihre Einwilligung widerrufen?</strong></p>
                        <ul className="list-disc list-inside ml-4 text-sm space-y-1 mt-1">
                          <li>Cookie-Einwilligung: über "Cookie-Einstellungen" im Footer</li>
                          <li>Kontaktformular/E-Mail: formlose Mitteilung an Yulachip@icloud.com</li>
                          <li>Messenger-Dienste: durch Löschen der Konversation und Abbruch der Kommunikation</li>
                        </ul>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</p>
                        <p className="text-sm">Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.</p>
                        <p className="text-sm mt-2"><strong>Zuständige Aufsichtsbehörde:</strong></p>
                        <p className="text-sm">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br/>
                        Promenade 18, 91522 Ansbach<br/>
                        Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">www.lda.bayern.de</a></p>
                      </div>

                      <p className="mt-4">Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:</p>
                      <p className="font-semibold">E-Mail: Yulachip@icloud.com<br/>Telefon: +49 152 06067810</p>
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

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Cookies und Tracking-Technologien</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="font-semibold">Allgemeine Hinweise zu Cookies</p>
                      <p>Unsere Website verwendet Cookies und vergleichbare Technologien. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und bestimmte Informationen enthalten.</p>

                      <p className="font-semibold">Rechtsgrundlage</p>
                      <p>Die Verwendung von Cookies und vergleichbaren Technologien erfolgt ausschließlich nach Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Nicht notwendige Cookies und Tracking-Technologien werden erst nach Ihrer aktiven Zustimmung über unser Cookie-Banner gesetzt.</p>

                      <p className="font-semibold">Widerruf Ihrer Einwilligung</p>
                      <p>Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie die Cookie-Einstellungen im Footer der Website aufrufen. Der Widerruf hat keinen Einfluss auf die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.</p>

                      <p className="font-semibold mt-4">Verwendete Cookies im Detail:</p>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">1. Notwendige Cookies</p>
                        <p className="text-sm mt-2"><strong>Cookie-Name:</strong> cookie_consent</p>
                        <p className="text-sm"><strong>Zweck:</strong> Speicherung Ihrer Cookie-Einwilligung</p>
                        <p className="text-sm"><strong>Laufzeit:</strong> 12 Monate</p>
                        <p className="text-sm"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Speicherung Ihrer Präferenzen)</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">2. Analytische Cookies (nur mit Ihrer Einwilligung)</p>
                        <p className="text-sm mt-2"><strong>Cookie-Namen:</strong> _ga, _gid, _gat_gtag_UA_*</p>
                        <p className="text-sm"><strong>Anbieter:</strong> Google Analytics (Google Ireland Limited)</p>
                        <p className="text-sm"><strong>Zweck:</strong> Statistische Auswertung der Website-Nutzung, Verbesserung unseres Angebots</p>
                        <p className="text-sm"><strong>Laufzeit:</strong> _ga: 24 Monate, _gid: 24 Stunden, _gat: 1 Minute</p>
                        <p className="text-sm"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                        <p className="text-sm mt-2"><strong>Datenübertragung:</strong> Daten können an Server von Google in den USA übertragen werden. Google ist nach dem EU-US Data Privacy Framework zertifiziert.</p>
                      </div>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">5. Soziale Medien</h2>
                    
                    <h3 className="text-xl font-semibold text-primary mb-3">Instagram Plugin und Verlinkungen</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>Anbieter und Funktionsweise:</strong></p>
                      <p>Auf unseren Seiten sind Funktionen und Links zum Dienst Instagram eingebunden. Diese Funktionen werden angeboten durch Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland (Muttergesellschaft: Meta Platforms, Inc., USA).</p>

                      <p><strong>Datenübertragung beim Anklicken:</strong></p>
                      <p>Beim Anklicken des Instagram-Buttons oder Instagram-Links erfolgt eine Übermittlung personenbezogener Daten an Meta. Wenn Sie in Ihrem Instagram-Account eingeloggt sind, kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Folgende Daten können dabei übertragen werden:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>IP-Adresse</li>
                        <li>Browserinformationen</li>
                        <li>Zeitpunkt des Besuchs</li>
                        <li>Referrer-URL (unsere Website)</li>
                      </ul>

                      <p><strong>Datenübermittlung in Drittstaaten:</strong></p>
                      <p>Meta kann personenbezogene Daten auch in die USA und andere Drittstaaten übertragen. Meta Platforms, Inc. ist nach dem EU-US Data Privacy Framework zertifiziert.</p>

                      <p><strong>Rechtsgrundlage:</strong></p>
                      <p>Die Verknüpfung mit Instagram erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung gilt für den Zeitpunkt des Anklickens des Links.</p>

                      <p><strong>Hinweis:</strong></p>
                      <p>Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram/Meta erhalten.</p>

                      <p><strong>Weitere Informationen:</strong></p>
                      <p>Datenschutzerklärung von Instagram: <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://help.instagram.com/519522125107875</a></p>
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
                      <p><strong>Anbieter und Umfang der Datenverarbeitung:</strong></p>
                      <p>Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google").</p>

                      <p>Google Analytics verwendet Cookies (siehe oben: _ga, _gid, _gat), die eine Analyse der Benutzung der Website durch den Nutzer ermöglichen. Die durch die Cookies erzeugten Informationen über Ihre Benutzung dieser Website umfassen:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>IP-Adresse (anonymisiert)</li>
                        <li>Gerätetyp und Browserinformationen</li>
                        <li>Besuchte Seiten und Verweildauer</li>
                        <li>Herkunft des Besuchers (Referrer)</li>
                      </ul>

                      <p><strong>IP-Anonymisierung:</strong></p>
                      <p>Die IP-Anonymisierung ist auf dieser Website aktiviert. Ihre IP-Adresse wird von Google bereits innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt, bevor sie in Ausnahmefällen an Server von Google in den USA übertragen wird.</p>

                      <p><strong>Datenübermittlung in Drittstaaten:</strong></p>
                      <p>Die durch Google Analytics erfassten Daten können an Server von Google in den USA übertragen werden. Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert, wodurch ein angemessenes Datenschutzniveau gewährleistet wird (siehe: <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://www.dataprivacyframework.gov/</a>).</p>

                      <p><strong>Rechtsgrundlage:</strong></p>
                      <p>Die Nutzung von Google Analytics erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.</p>

                      <p><strong>Widerruf und Speicherdauer:</strong></p>
                      <p>Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft über die Cookie-Einstellungen im Footer widerrufen. Nach Widerruf werden alle Google Analytics Cookies gelöscht und keine weiteren Daten erfasst.</p>
                      <p>Die Speicherdauer der Daten beträgt bis zu 14 Monate.</p>

                      <p><strong>Weitere Informationen:</strong></p>
                      <p>Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://policies.google.com/privacy</a></p>
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

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Online-Terminbuchung über ALTEGIO</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>Anbieter und Zweck:</strong></p>
                      <p>Die Online-Terminbuchung erfolgt über den externen Dienst ALTEGIO (Alteg.io). Bei der Nutzung des Buchungssystems werden personenbezogene Daten zum Zweck der Terminverwaltung und -organisation verarbeitet.</p>

                      <p><strong>Verarbeitete Daten:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Name und Vorname</li>
                        <li>Telefonnummer</li>
                        <li>E-Mail-Adresse</li>
                        <li>Terminwünsche (Datum, Uhrzeit, gewünschte Behandlung)</li>
                        <li>Optional: Besondere Wünsche oder Anmerkungen</li>
                      </ul>

                      <p><strong>Rechtsgrundlage:</strong></p>
                      <p>Die Verarbeitung der Daten erfolgt zum Zweck der Terminverwaltung und -organisation auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).</p>

                      <p><strong>Speicherdauer:</strong></p>
                      <p>Die Daten werden für die Dauer der Terminabwicklung sowie zur Erfüllung gesetzlicher Aufbewahrungspflichten gespeichert. Nach Ablauf der gesetzlichen Aufbewahrungsfristen werden die Daten gelöscht, sofern Sie nicht ausdrücklich einer weitergehenden Nutzung zugestimmt haben.</p>

                      <p><strong>Auftragsverarbeitung:</strong></p>
                      <p>Die Datenverarbeitung erfolgt im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO. ALTEGIO ist vertraglich verpflichtet, Ihre Daten nur auf unsere Weisung und unter Einhaltung der DSGVO zu verarbeiten.</p>

                      <p><strong>Weitere Informationen:</strong></p>
                      <p>Datenschutzbestimmungen von ALTEGIO: <a href="https://altegio.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://altegio.com/privacy-policy</a></p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Kontakt über Messenger und Telefon</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>Allgemeine Hinweise:</strong></p>
                      <p>Diese Website enthält Verlinkungen zu externen Kommunikationsdiensten wie WhatsApp, Telegram sowie eine Telefonverbindung.</p>

                      <p><strong>WhatsApp:</strong></p>
                      <p>Anbieter: Meta Platforms Ireland Limited (Muttergesellschaft: Meta Platforms, Inc., USA)</p>
                      <p>Beim Anklicken des WhatsApp-Links oder bei der Kontaktaufnahme über WhatsApp werden Daten an Meta übertragen. WhatsApp verarbeitet personenbezogene Daten (z. B. Telefonnummer, Nachrichteninhalte, Metadaten) auch auf Servern in den USA. Meta Platforms, Inc. ist nach dem EU-US Data Privacy Framework zertifiziert.</p>
                      <p>Datenschutzerklärung: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://www.whatsapp.com/legal/privacy-policy</a></p>

                      <p><strong>Telegram:</strong></p>
                      <p>Anbieter: Telegram Messenger LLP / Telegram FZ-LLC, Dubai, VAE</p>
                      <p>Telegram verarbeitet Daten auf Servern weltweit, einschließlich außerhalb der EU/EWR. Die Verarbeitung erfolgt nach den Datenschutzbestimmungen von Telegram.</p>
                      <p>Datenschutzerklärung: <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://telegram.org/privacy</a></p>

                      <p><strong>Rechtsgrundlage:</strong></p>
                      <p>Die Nutzung dieser Kommunikationswege erfolgt freiwillig und auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Durch das Anklicken des jeweiligen Links willigen Sie in die Datenübertragung an den entsprechenden Dienst ein.</p>

                      <p><strong>Telefon:</strong></p>
                      <p>Bei telefonischer Kontaktaufnahme werden Ihre Telefonnummer und Gesprächsinhalte zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO bzw. lit. f DSGVO).</p>
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