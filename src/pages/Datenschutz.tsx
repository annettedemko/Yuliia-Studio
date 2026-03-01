import { Card, CardContent } from '@/components/ui/card';
import { PageHelmet } from '@/components/PageHelmet';
import { useLanguage } from '@/contexts/LanguageContext';


const Datenschutz = () => {
  const { t } = useLanguage();

  return (
    <>
      <PageHelmet />
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{t('datenschutz.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('datenschutz.subtitle')}
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
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('datenschutz.section1.title')}</h2>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('datenschutz.section1.general.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section1.general.p1')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('datenschutz.section1.collection.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>{t('datenschutz.section1.collection.who')}</strong></p>
                      <p>{t('datenschutz.section1.collection.who.answer')}</p>

                      <p><strong>{t('datenschutz.section1.collection.how')}</strong></p>
                      <p>{t('datenschutz.section1.collection.how.answer1')}</p>
                      <p>{t('datenschutz.section1.collection.how.answer2')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('datenschutz.section2.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section2.intro')}</p>
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
                        {t('datenschutz.section2.country')}</p>
                        <p><strong>{t('datenschutz.section2.phone')}:</strong> +49 152 06067810<br/>
                        <strong>{t('datenschutz.section2.email')}:</strong> Yulachip@icloud.com</p>
                        </div>
                      <p>{t('datenschutz.section2.explanation')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('datenschutz.section3.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section3.intro')}</p>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.rights.access.title')}</p>
                        <p className="text-sm">{t('datenschutz.rights.access.description')}</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.rights.rectification.title')}</p>
                        <p className="text-sm">{t('datenschutz.rights.rectification.description')}</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.rights.deletion.title')}</p>
                        <p className="text-sm">{t('datenschutz.rights.deletion.description')}</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.rights.restriction.title')}</p>
                        <p className="text-sm">{t('datenschutz.rights.restriction.description')}</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.rights.portability.title')}</p>
                        <p className="text-sm">{t('datenschutz.rights.portability.description')}</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.rights.objection.title')}</p>
                        <p className="text-sm">{t('datenschutz.rights.objection.description')}</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.rights.withdrawal.title')}</p>
                        <p className="text-sm">{t('datenschutz.rights.withdrawal.description')}</p>
                        <p className="text-sm mt-2"><strong>{t('datenschutz.rights.withdrawal.how')}</strong></p>
                        <ul className="list-disc list-inside ml-4 text-sm space-y-1 mt-1">
                          <li>{t('datenschutz.rights.withdrawal.cookie')}</li>
                          <li>{t('datenschutz.rights.withdrawal.email')}</li>
                          <li>{t('datenschutz.rights.withdrawal.messenger')}</li>
                        </ul>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.rights.complaint.title')}</p>
                        <p className="text-sm">{t('datenschutz.rights.complaint.description')}</p>
                        <p className="text-sm mt-2"><strong>{t('datenschutz.rights.complaint.authority')}</strong></p>
                        <p className="text-sm">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br/>
                        Promenade 18, 91522 Ansbach<br/>
                        Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">www.lda.bayern.de</a></p>
                      </div>

                      <p className="mt-4">{t('datenschutz.rights.contact')}</p>
                      <p className="font-semibold">E-Mail: Yulachip@icloud.com<br/>{t('datenschutz.section2.phone')}: +49 152 06067810</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('datenschutz.section4.title')}</h2>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('datenschutz.section4.serverlog.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section4.serverlog.intro')}</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{t('datenschutz.section4.serverlog.item1')}</li>
                        <li>{t('datenschutz.section4.serverlog.item2')}</li>
                        <li>{t('datenschutz.section4.serverlog.item3')}</li>
                        <li>{t('datenschutz.section4.serverlog.item4')}</li>
                        <li>{t('datenschutz.section4.serverlog.item5')}</li>
                        <li>{t('datenschutz.section4.serverlog.item6')}</li>
                      </ul>
                      <p>{t('datenschutz.section4.serverlog.legal')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('datenschutz.section4.contact_form.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section4.contact_form.p1')}</p>

                      <p>{t('datenschutz.section4.contact_form.p2')}</p>

                      <p>{t('datenschutz.section4.contact_form.p3')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('datenschutz.section4.inquiry.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section4.inquiry.p1')}</p>

                      <p>{t('datenschutz.section4.inquiry.p2')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section4.cookies.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="font-semibold">{t('datenschutz.section4.cookies.general.title')}</p>
                      <p>{t('datenschutz.section4.cookies.general.p1')}</p>

                      <p className="font-semibold">{t('datenschutz.section4.cookies.legal.title')}</p>
                      <p>{t('datenschutz.section4.cookies.legal.p1')}</p>

                      <p className="font-semibold">{t('datenschutz.section4.cookies.withdrawal.title')}</p>
                      <p>{t('datenschutz.section4.cookies.withdrawal.p1')}</p>

                      <p className="font-semibold mt-4">{t('datenschutz.section4.cookies.detail.title')}</p>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.section4.cookies.necessary.title')}</p>
                        <p className="text-sm mt-2"><strong>{t('datenschutz.section4.cookies.necessary.name')}:</strong> cookie_consent</p>
                        <p className="text-sm"><strong>{t('datenschutz.section4.cookies.necessary.purpose')}:</strong> {t('datenschutz.section4.cookies.necessary.purpose.value')}</p>
                        <p className="text-sm"><strong>{t('datenschutz.section4.cookies.necessary.duration')}:</strong> {t('datenschutz.section4.cookies.necessary.duration.value')}</p>
                        <p className="text-sm"><strong>{t('datenschutz.section4.cookies.necessary.legal')}:</strong> {t('datenschutz.section4.cookies.necessary.legal.value')}</p>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mt-2">
                        <p className="font-semibold">{t('datenschutz.section4.cookies.analytics.title')}</p>
                        <p className="text-sm mt-2"><strong>{t('datenschutz.section4.cookies.analytics.names')}:</strong> _ga, _gid, _gat_gtag_UA_*</p>
                        <p className="text-sm"><strong>{t('datenschutz.section4.cookies.analytics.provider')}:</strong> Google Analytics (Google Ireland Limited)</p>
                        <p className="text-sm"><strong>{t('datenschutz.section4.cookies.analytics.purpose')}:</strong> {t('datenschutz.section4.cookies.analytics.purpose.value')}</p>
                        <p className="text-sm"><strong>{t('datenschutz.section4.cookies.analytics.duration')}:</strong> _ga: {t('datenschutz.section4.cookies.analytics.duration.ga')}, _gid: {t('datenschutz.section4.cookies.analytics.duration.gid')}, _gat: {t('datenschutz.section4.cookies.analytics.duration.gat')}</p>
                        <p className="text-sm"><strong>{t('datenschutz.section4.cookies.analytics.legal')}:</strong> {t('datenschutz.section4.cookies.analytics.legal.value')}</p>
                        <p className="text-sm mt-2"><strong>{t('datenschutz.section4.cookies.analytics.transfer')}:</strong> {t('datenschutz.section4.cookies.analytics.transfer.value')}</p>
                      </div>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section4.ssl.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section4.ssl.p1')}</p>
                      <p>{t('datenschutz.section4.ssl.p2')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('datenschutz.section5.title')}</h2>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('datenschutz.section5.instagram.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>{t('datenschutz.section5.instagram.provider')}:</strong></p>
                      <p>{t('datenschutz.section5.instagram.provider.value')}</p>

                      <p><strong>{t('datenschutz.section5.instagram.transfer')}:</strong></p>
                      <p>{t('datenschutz.section5.instagram.transfer.value')}</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{t('datenschutz.section5.instagram.data.ip')}</li>
                        <li>{t('datenschutz.section5.instagram.data.browser')}</li>
                        <li>{t('datenschutz.section5.instagram.data.time')}</li>
                        <li>{t('datenschutz.section5.instagram.data.referrer')}</li>
                      </ul>

                      <p><strong>{t('datenschutz.section5.instagram.thirdcountry')}:</strong></p>
                      <p>{t('datenschutz.section5.instagram.thirdcountry.value')}</p>

                      <p><strong>{t('datenschutz.section5.instagram.legal')}:</strong></p>
                      <p>{t('datenschutz.section5.instagram.legal.value')}</p>

                      <p><strong>{t('datenschutz.section5.instagram.note')}:</strong></p>
                      <p>{t('datenschutz.section5.instagram.note.value')}</p>

                      <p><strong>{t('datenschutz.section5.instagram.info')}:</strong></p>
                      <p>{t('datenschutz.section5.instagram.info.label')}: <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://help.instagram.com/519522125107875</a></p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section5.tiktok.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>{t('datenschutz.section5.tiktok.provider')}:</strong></p>
                      <p>{t('datenschutz.section5.tiktok.provider.value')}</p>

                      <p><strong>{t('datenschutz.section5.tiktok.transfer')}:</strong></p>
                      <p>{t('datenschutz.section5.tiktok.transfer.value')}</p>

                      <p><strong>{t('datenschutz.section5.tiktok.legal')}:</strong></p>
                      <p>{t('datenschutz.section5.tiktok.legal.value')}</p>

                      <p><strong>{t('datenschutz.section5.tiktok.info')}:</strong></p>
                      <p>{t('datenschutz.section5.tiktok.info.label')}: <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/de-DE" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://www.tiktok.com/legal/page/eea/privacy-policy</a></p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('datenschutz.section6.title')}</h2>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('datenschutz.section6.maps.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>{t('datenschutz.section6.maps.provider')}:</strong></p>
                      <p>{t('datenschutz.section6.maps.provider.value')}</p>

                      <p><strong>{t('datenschutz.section6.maps.transfer')}:</strong></p>
                      <p>{t('datenschutz.section6.maps.transfer.value')}</p>

                      <p><strong>{t('datenschutz.section6.maps.legal')}:</strong></p>
                      <p>{t('datenschutz.section6.maps.legal.value')}</p>

                      <p><strong>{t('datenschutz.section6.maps.info')}:</strong></p>
                      <p>{t('datenschutz.section6.maps.info.label')}: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://policies.google.com/privacy</a></p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section6.analytics.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>{t('datenschutz.section6.analytics.provider')}:</strong></p>
                      <p>{t('datenschutz.section6.analytics.provider.value')}</p>

                      <p>{t('datenschutz.section6.analytics.cookies_intro')}</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{t('datenschutz.section6.analytics.data.ip')}</li>
                        <li>{t('datenschutz.section6.analytics.data.device')}</li>
                        <li>{t('datenschutz.section6.analytics.data.pages')}</li>
                        <li>{t('datenschutz.section6.analytics.data.referrer')}</li>
                      </ul>

                      <p><strong>{t('datenschutz.section6.analytics.anonymization')}:</strong></p>
                      <p>{t('datenschutz.section6.analytics.anonymization.value')}</p>

                      <p><strong>{t('datenschutz.section6.analytics.thirdcountry')}:</strong></p>
                      <p>{t('datenschutz.section6.analytics.thirdcountry.value')} (<a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://www.dataprivacyframework.gov/</a>).</p>

                      <p><strong>{t('datenschutz.section6.analytics.legal')}:</strong></p>
                      <p>{t('datenschutz.section6.analytics.legal.value')}</p>

                      <p><strong>{t('datenschutz.section6.analytics.withdrawal')}:</strong></p>
                      <p>{t('datenschutz.section6.analytics.withdrawal.value')}</p>
                      <p>{t('datenschutz.section6.analytics.storage')}</p>

                      <p><strong>{t('datenschutz.section6.analytics.info')}:</strong></p>
                      <p>{t('datenschutz.section6.analytics.info.label')}: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://policies.google.com/privacy</a></p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section6.searchconsole.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section6.searchconsole.p1')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section6.ahrefs.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section6.ahrefs.p1')}</p>

                      <p>{t('datenschutz.section6.ahrefs.p2')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section6.elfsight.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>{t('datenschutz.section6.elfsight.provider')}:</strong></p>
                      <p>{t('datenschutz.section6.elfsight.provider.value')}</p>

                      <p><strong>{t('datenschutz.section6.elfsight.transfer')}:</strong></p>
                      <p>{t('datenschutz.section6.elfsight.transfer.value')}</p>

                      <p><strong>{t('datenschutz.section6.elfsight.legal')}:</strong></p>
                      <p>{t('datenschutz.section6.elfsight.legal.value')}</p>

                      <p><strong>{t('datenschutz.section6.elfsight.info')}:</strong></p>
                      <p>{t('datenschutz.section6.elfsight.info.label')}: <a href="https://elfsight.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://elfsight.com/privacy-policy/</a></p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('datenschutz.section7.title')}</h2>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('datenschutz.section7.booking.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section7.booking.intro')}</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{t('datenschutz.section7.booking.item1')}</li>
                        <li>{t('datenschutz.section7.booking.item2')}</li>
                        <li>{t('datenschutz.section7.booking.item3')}</li>
                        <li>{t('datenschutz.section7.booking.item4')}</li>
                        <li>{t('datenschutz.section7.booking.item5')}</li>
                      </ul>

                      <p className="font-semibold">{t('datenschutz.section7.booking.health.title')}:</p>
                      <p>{t('datenschutz.section7.booking.health.p1')}</p>

                      <p>{t('datenschutz.section7.booking.legal')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section7.altegio.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>{t('datenschutz.section7.altegio.provider')}:</strong></p>
                      <p>{t('datenschutz.section7.altegio.provider.value')}</p>

                      <p><strong>{t('datenschutz.section7.altegio.data')}:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{t('datenschutz.section7.altegio.data.item1')}</li>
                        <li>{t('datenschutz.section7.altegio.data.item2')}</li>
                        <li>{t('datenschutz.section7.altegio.data.item3')}</li>
                        <li>{t('datenschutz.section7.altegio.data.item4')}</li>
                        <li>{t('datenschutz.section7.altegio.data.item5')}</li>
                      </ul>

                      <p><strong>{t('datenschutz.section7.altegio.legal')}:</strong></p>
                      <p>{t('datenschutz.section7.altegio.legal.value')}</p>

                      <p><strong>{t('datenschutz.section7.altegio.storage')}:</strong></p>
                      <p>{t('datenschutz.section7.altegio.storage.value')}</p>

                      <p><strong>{t('datenschutz.section7.altegio.processing')}:</strong></p>
                      <p>{t('datenschutz.section7.altegio.processing.value')}</p>

                      <p><strong>{t('datenschutz.section7.altegio.info')}:</strong></p>
                      <p>{t('datenschutz.section7.altegio.info.label')}: <a href="https://altegio.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://altegio.com/privacy-policy</a></p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section7.messenger.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><strong>{t('datenschutz.section7.messenger.general')}:</strong></p>
                      <p>{t('datenschutz.section7.messenger.general.value')}</p>

                      <p><strong>WhatsApp:</strong></p>
                      <p>{t('datenschutz.section7.messenger.whatsapp.provider')}</p>
                      <p>{t('datenschutz.section7.messenger.whatsapp.transfer')}</p>
                      <p>{t('datenschutz.section7.messenger.whatsapp.info.label')}: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://www.whatsapp.com/legal/privacy-policy</a></p>

                      <p><strong>Telegram:</strong></p>
                      <p>{t('datenschutz.section7.messenger.telegram.provider')}</p>
                      <p>{t('datenschutz.section7.messenger.telegram.transfer')}</p>
                      <p>{t('datenschutz.section7.messenger.telegram.info.label')}: <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://telegram.org/privacy</a></p>

                      <p><strong>{t('datenschutz.section7.messenger.legal')}:</strong></p>
                      <p>{t('datenschutz.section7.messenger.legal.value')}</p>

                      <p><strong>{t('datenschutz.section7.messenger.phone')}:</strong></p>
                      <p>{t('datenschutz.section7.messenger.phone.value')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section7.external.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section7.external.p1')}</p>

                      <p>{t('datenschutz.section7.external.p2')}</p>
                      </div>

                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">{t('datenschutz.section7.treatments.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section7.treatments.p1')}</p>

                      <p>{t('datenschutz.section7.treatments.p2')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('datenschutz.section8.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('datenschutz.section8.intro')}</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{t('datenschutz.section8.item1')}</li>
                        <li>{t('datenschutz.section8.item2')}</li>
                        <li>{t('datenschutz.section8.item3')}</li>
                        <li>{t('datenschutz.section8.item4')}</li>
                        <li>{t('datenschutz.section8.item5')}</li>
                      </ul>
                      <p>{t('datenschutz.section8.obligation')}</p>
                      </div>
                    </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>{t('datenschutz.updated')}:</strong> {t('datenschutz.updated.date')}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t('datenschutz.generator')}
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
