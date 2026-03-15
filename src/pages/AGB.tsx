import { Card, CardContent } from '@/components/ui/card';
import { PageHelmet } from '@/components/PageHelmet';
import { useLanguage } from '@/contexts/LanguageContext';

const AGB = () => {
  const { t } = useLanguage();

  return (
    <>
      <PageHelmet />
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{t('agb.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('agb.subtitle')}
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
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section1.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section1.p1')}</p>
                      <p>{t('agb.section1.p2')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section2.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section2.p1')}</p>
                      <p>{t('agb.section2.p2')}</p>
                      <p>{t('agb.section2.p3')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section3.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section3.p1')}</p>
                      <p>{t('agb.section3.p2')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section4.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section4.p1')}</p>
                      <p>{t('agb.section4.p2')}</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{t('agb.section4.payment.cash')}</li>
                        <li>{t('agb.section4.payment.ec')}</li>
                        <li>{t('agb.section4.payment.credit')}</li>
                      </ul>
                      <p>{t('agb.section4.p3')}</p>
                      <p>{t('agb.section4.p4')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section5.title')}</h2>

                    <h3 className="text-xl font-semibold text-primary mb-3">{t('agb.section5.subtitle')}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{t('agb.section5.li1')}</li>
                        <li>{t('agb.section5.li2')}</li>
                        <li>{t('agb.section5.li3')}</li>
                      </ul>
                      <p>{t('agb.section5.p1')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section6.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section6.p1')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section7.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section7.p1')}</p>
                      <p>{t('agb.section7.p2')}</p>
                      <p>{t('agb.section7.p3')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section8.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section8.p1')}</p>
                      <p>{t('agb.section8.p2')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section9.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section9.p1')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section10.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section10.p1')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section11.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section11.p1')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section12.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <h3 className="text-lg font-semibold text-primary mb-2">{t('agb.section12.subtitle1')}</h3>
                      <p>{t('agb.section12.p1')}</p>
                      <h3 className="text-lg font-semibold text-primary mb-2">{t('agb.section12.subtitle2')}</h3>
                      <p>{t('agb.section12.p2')}</p>
                      <h3 className="text-lg font-semibold text-primary mb-2">{t('agb.section12.subtitle3')}</h3>
                      <p>{t('agb.section12.p3')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section13.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section13.p1')}</p>
                      </div>
                    </div>

                  <div id="online-shop">
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.shop.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.shop.p1')}</p>
                      <p>{t('agb.shop.p2')}</p>
                      <p>{t('agb.shop.p3')}</p>
                      <p>{t('agb.shop.p4')}</p>
                      </div>
                    </div>

                  <div id="widerruf">
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.widerruf.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.widerruf.p1')}</p>
                      <p>{t('agb.widerruf.p2')}</p>
                      <p>{t('agb.widerruf.p3')}</p>
                      <p>{t('agb.widerruf.p4')}</p>
                      <p>{t('agb.widerruf.p5')}</p>
                      </div>
                    </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{t('agb.section14.title')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{t('agb.section14.p1')}</p>
                      </div>
                    </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>{t('agb.updated')}</strong> {t('agb.updated.date')}
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
