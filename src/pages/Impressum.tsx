import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHelmet } from '@/components/PageHelmet';
import { useLanguage } from '@/contexts/LanguageContext';


const Impressum = () => {
  const location = useLocation();
  const { t } = useLanguage();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  // Функция для добавления языкового префикса к ссылкам
  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  return (
    <>
      <PageHelmet />
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{t('impressum.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('impressum.subtitle')}
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
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('impressum.tmg.title')}</h2>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>{t('impressum.company')}</strong></p>
                      <p>{t('impressum.owner')}</p>
                      <p><strong>{t('impressum.legal_form')}</strong> {t('impressum.legal_form.value')}</p>
                      <a
                        href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-gold hover:underline"
                      >
                        {t('impressum.address.street')}<br/>
                        {t('impressum.address.city')}
                      </a>
                      <p>{t('impressum.address.country')}</p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.contact.title')}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>{t('impressum.contact.phone')}</strong> <a href="tel:+4915206067810" className="text-rose-gold hover:underline">+49 152 06067810</a></p>
                      <p><strong>{t('impressum.contact.email')}</strong> <a href="mailto:Yulachip@icloud.com" className="text-rose-gold hover:underline">Yulachip@icloud.com</a></p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.profession.title')}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>{t('impressum.profession.designation')}</strong> {t('impressum.profession.designation.value')}</p>
                      <p><strong>{t('impressum.profession.granted')}</strong> {t('impressum.profession.granted.value')}</p>
                      <p>{t('impressum.profession.regulations')}</p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.authority.title')}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{t('impressum.authority.name')}</p>
                      <p>{t('impressum.authority.department')}</p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.vat.title')}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{t('impressum.vat.exemption')}</p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.dispute.title')}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{t('impressum.dispute.description')}</p>
                      <p><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-rose-gold hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
                      <p>{t('impressum.dispute.email')}</p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.consumer.title')}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{t('impressum.consumer.description')}</p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.liability.content.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('impressum.liability.content.p1')}</p>

                      <p>{t('impressum.liability.content.p2')}</p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.liability.links.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('impressum.liability.links.p1')}</p>

                      <p>{t('impressum.liability.links.p2')}</p>
                      </div>
                    </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{t('impressum.copyright.title')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('impressum.copyright.p1')}</p>

                      <p>{t('impressum.copyright.p2')}</p>
                      </div>
                    </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>{t('impressum.updated')}</strong> {t('impressum.updated.date')}
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

export default Impressum;