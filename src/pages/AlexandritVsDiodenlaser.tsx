import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Info, Zap, Shield, Sparkles, Target, Award, Star } from 'lucide-react';
import { useEffect } from 'react';
import { PageHelmet } from '@/components/PageHelmet';
import { setJsonLd } from '@/seo/seo';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { showBookingWidget } from '@/lib/altegioWidget';

const AlexandritVsDiodenlaser = () => {
  const { t } = useLanguage();

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
    const baseUrl = 'https://www.munchen-beauty.de';
    const isRu = currentLang === 'ru';
    setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${baseUrl}/alexandrit-gegen-diodenlaser#article`,
          headline: isRu
            ? 'Александритовый vs. диодный лазер: что и когда эффективнее?'
            : 'Alexandrit vs. Diodenlaser: Was ist wann effektiver?',
          inLanguage: isRu ? 'ru' : 'de',
          mainEntityOfPage: `${baseUrl}/${currentLang}/alexandrit-gegen-diodenlaser`,
          author: {
            '@type': 'Organization',
            name: 'Yuliia Cheporska Studio'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Yuliia Cheporska Studio',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo2.jpg`
            }
          },
          datePublished: '2025-01-15',
          description: isRu
            ? 'Понятное руководство: объясняем, как работают александритовый и диодный лазер, в чём их сильные стороны и как мы подбираем подходящий метод.'
            : 'Verständlicher Leitfaden: Wir erklären, wie Alexandrit- und Diodenlaser funktionieren, wo ihre Stärken liegen und wie wir die passende Methode wählen.'
        },
        {
          '@type': 'FAQPage',
          '@id': `${baseUrl}/alexandrit-gegen-diodenlaser#faq`,
          inLanguage: isRu ? 'ru' : 'de',
          mainEntity: [
            {
              '@type': 'Question',
              name: isRu ? 'Один метод принципиально лучше другого?' : 'Ist ein Verfahren grundsätzlich besser als das andere?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Нет. Обе системы эффективны. Мы выбираем лучший вариант для каждого человека и сеанса, основываясь на вашем типе кожи, цвете волос и зоне обработки.'
                  : 'Nein. Beide Systeme sind wirksam. Wir wählen je nach Person und Sitzung die beste Option – basierend auf Ihrem Hauttyp, Haarfarbe und Zone.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Больно ли делать лазерную эпиляцию?' : 'Tut Laser-Haarentfernung weh?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Ощущения индивидуальны. Контактное охлаждение делает сеанс хорошо переносимым для большинства. Многие описывают это как легкое покалывание или теплое ощущение.'
                  : 'Das Empfinden ist individuell. Die Kontaktkühlung macht die Sitzung für die meisten gut verträglich. Viele beschreiben ein leichtes Kribbeln oder Wärmegefühl.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Можно ли начинать летом?' : 'Kann ich im Sommer starten?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Да, с ограничениями: по возможности избегать солнца/загара; возможно консервативные настройки или перенос сеанса. Мы проконсультируем вас индивидуально о лучшей стратегии.'
                  : 'Ja, mit Einschränkungen: Sonne/Bräune möglichst meiden; ggf. konservativere Einstellungen oder Terminverschiebung. Wir beraten Sie individuell zur besten Strategie.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Работает ли на очень тонких, седых или рыжих волосах?' : 'Funktioniert es bei sehr feinen / grauen / roten Haaren?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Для очень светлых/седых/рыжих волос эффективность ограничена (мало/нет пигмента). Мы обсудим альтернативы и реалистичные ожидания во время консультации.'
                  : 'Bei sehr hellen/grauen/roten Haaren ist die Wirkung begrenzt (wenig/kein Pigment). Wir besprechen Alternativen und realistische Erwartungen im Beratungsgespräch.'
              }
            },
            {
              '@type': 'Question',
              name: isRu ? 'Сколько сеансов мне понадобится?' : 'Wie viele Sitzungen brauche ich?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: isRu
                  ? 'Обычно минимум 6, иногда больше. Интервалы 4–6 недель, в зависимости от зоны и динамики. Точное количество зависит от вашего типа волос, типа кожи и обрабатываемой зоны.'
                  : 'Üblicherweise mindestens 6, manchmal mehr. Abstände 4–6 Wochen, je nach Zone und Dynamik. Die genaue Anzahl hängt von Ihrem Haartyp, Hauttyp und zu behandelnder Zone ab.'
              }
            }
          ]
        }
      ]
    });
  }, [currentLang]);

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16">

        {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Soft warm background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(15_60%_97%)] via-white to-[hsl(15_40%_96%)]"></div>
        {/* Subtle glows */}
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[hsl(15_50%_88%/0.2)] rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-[hsl(280_40%_90%/0.15)] rounded-full blur-[100px]"></div>

        {/* Corner accents */}
        <div className="absolute top-12 left-12 hidden lg:block">
          <div className="w-16 h-px bg-gradient-to-r from-rose-gold/30 to-transparent"></div>
          <div className="w-px h-16 bg-gradient-to-b from-rose-gold/30 to-transparent"></div>
        </div>
        <div className="absolute top-12 right-12 hidden lg:block">
          <div className="w-16 h-px bg-gradient-to-l from-rose-gold/30 to-transparent ml-auto"></div>
          <div className="w-px h-16 bg-gradient-to-b from-rose-gold/30 to-transparent ml-auto"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">

            {/* Left — Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2.5 border border-rose-gold/15 rounded-full px-5 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/60"></span>
                <span className="text-xs font-medium text-rose-gold/80 tracking-[0.2em] uppercase">{t('comparison.hero.badge')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/60"></span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-primary">
                  {t('comparison.hero.title.line1')}
                </span>
                <br />
                <span className="gradient-text">{t('comparison.hero.title.line2')}</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t('comparison.hero.description')}
              </p>

              {/* Ornamental divider */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-rose-gold/40 to-transparent"></div>
                <div className="w-1.5 h-1.5 rotate-45 border border-rose-gold/40"></div>
                <div className="w-12 h-px bg-gradient-to-l from-rose-gold/40 to-transparent"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-hero text-white shadow-lg hover:shadow-rose hover:scale-105 transition-all duration-300 rounded-full px-8"
                  onClick={() => showBookingWidget()}
                >
                  {t('comparison.hero.button.book')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-primary/5 border-primary/30 text-primary hover:border-rose-gold hover:text-rose-gold hover:bg-rose-gold/10 transition-all duration-300"
                  asChild
                >
                  <Link to={withLang("/preis")}>
                    {t('comparison.hero.button.prices')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right — Device image */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              {/* Soft glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-rose-gold/8 via-primary/5 to-transparent rounded-full blur-3xl"></div>

              {/* Image container */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-elegant border border-rose-gold/10 transition-shadow duration-700 group-hover:shadow-rose">
                  <img
                    src="/24.png"
                    alt={t('comparison.hero.title.line1')}
                    width={600}
                    height={500}
                    loading="eager"
                    className="w-full max-w-[440px] h-auto object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                  />
                  {/* Subtle warm overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Kurzüberblick */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-gold-light/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-rose-gold to-primary p-1 rounded-full mb-4">
                <div className="bg-white px-6 py-2 rounded-full">
                  <span className="text-sm font-bold bg-gradient-to-r from-rose-gold-dark to-primary bg-clip-text text-transparent">
                    {t('comparison.overview.badge')}
                  </span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.overview.title')}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-gold via-rose-gold to-primary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4 mb-12">
              <Card className="border-2 border-transparent hover:border-rose-gold/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-gold/10 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-rose-gold" />
                    </div>
                    <p className="text-muted-foreground flex-1 leading-relaxed">
                      <span className="font-semibold text-primary">{t('comparison.overview.both.bold1')}</span> {t('comparison.overview.both.text').replace(t('comparison.overview.both.bold2'), '')} <span className="font-semibold text-primary">{t('comparison.overview.both.bold2')}</span>{t('comparison.overview.both.text').split(t('comparison.overview.both.bold2'))[1]}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-transparent hover:border-rose-gold/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-rose-gold-light/50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-gold/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-rose-gold-dark" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold text-rose-gold-dark text-lg">{t('comparison.overview.alexandrit.title')}</p>
                        <span className="bg-rose-gold text-white text-xs px-2 py-1 rounded-full font-semibold">{t('comparison.overview.alexandrit.badge')}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('comparison.overview.alexandrit.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-primary-light/50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold text-primary text-lg">{t('comparison.overview.diode.title')}</p>
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">{t('comparison.overview.diode.badge')}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('comparison.overview.diode.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-gold-dark/40 bg-gradient-to-br from-rose-gold-light/30 to-rose-gold-light/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-gold-dark/20 p-3 rounded-full">
                      <Info className="w-6 h-6 text-rose-gold-dark" />
                    </div>
                    <p className="text-muted-foreground flex-1 leading-relaxed">
                      <span className="font-bold text-rose-gold-dark text-lg block mb-1">{t('comparison.overview.warning.title')}</span>
                      {t('comparison.overview.warning.text')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-rose-gold bg-gradient-to-br from-rose-gold/5 via-primary/5 to-rose-gold/5 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-rose-gold/10 p-4 rounded-full">
                    <Target className="w-8 h-8 text-rose-gold" />
                  </div>
                </div>
                <p className="text-lg text-primary font-semibold leading-relaxed">
                  {t('comparison.overview.studio.text')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wie funktionieren die Laser */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-rose-gold/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-rose-gold/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-lg">
                <Sparkles className="w-5 h-5 text-rose-gold" />
                <span className="text-sm font-semibold text-primary">{t('comparison.how.badge')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.how.title')}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-gold via-rose-gold to-primary mx-auto rounded-full"></div>
            </div>

            {/* Image */}
            <div className="mb-10 relative group flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-rose-gold/8 rounded-full blur-3xl"></div>
              <img
                src="/19.png"
                alt={t('alt.comparison.hero')}
                width={561}
                height={764}
                loading="lazy"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-2xl shadow-elegant relative z-10 border border-rose-gold/10"
              />
            </div>

            <Card className="border-2 border-transparent hover:border-rose-gold/50 shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('comparison.how.description').split(t('comparison.how.description.bold1'))[0]}
                  <span className="font-semibold text-primary">{t('comparison.how.description.bold1')}</span>
                  {t('comparison.how.description').split(t('comparison.how.description.bold1'))[1].split(t('comparison.how.description.bold2'))[0]}
                  <span className="font-semibold text-primary">{t('comparison.how.description.bold2')}</span>
                  {t('comparison.how.description').split(t('comparison.how.description.bold2'))[1]}
                </p>
                <div className="bg-gradient-to-br from-rose-gold/10 to-primary/10 p-6 rounded-xl border-l-4 border-rose-gold">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <p className="font-semibold text-primary leading-relaxed">
                      {t('comparison.how.sessions.text')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gerätespezifischer Direktvergleich */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-gold/10 to-primary/10 px-6 py-3 rounded-full mb-4 border-2 border-gray-200">
                <div className="w-3 h-3 bg-rose-gold rounded-full"></div>
                <span className="text-sm font-bold text-primary">{t('comparison.devices.badge')}</span>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.devices.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('comparison.devices.subtitle')}
              </p>
            </div>

            <div className="overflow-x-auto mb-10">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gradient-to-r from-primary via-rose-gold to-primary">
                      <tr>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider">
                          {t('comparison.devices.table.criterion')}
                        </th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider bg-rose-gold/20">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            {t('comparison.devices.table.alexandrit')}
                          </div>
                        </th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider bg-primary/20">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            {t('comparison.devices.table.diode')}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.wavelength')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-rose-gold-light/50">{t('comparison.devices.table.wavelength.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-primary-light/50">{t('comparison.devices.table.wavelength.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.mode')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-rose-gold-light/50">{t('comparison.devices.table.mode.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-primary-light/50">{t('comparison.devices.table.mode.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.cooling')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-rose-gold-light/50">{t('comparison.devices.table.cooling.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-primary-light/50">{t('comparison.devices.table.cooling.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.skin')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-rose-gold-light/50">{t('comparison.devices.table.skin.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-primary-light/50">{t('comparison.devices.table.skin.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.evidence')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-rose-gold-light/50">{t('comparison.devices.table.evidence.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-primary-light/50">{t('comparison.devices.table.evidence.diode')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary-light/50 to-white shadow-lg mb-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Info className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-primary block mb-1">{t('comparison.devices.note.title')}</span>
                    {t('comparison.devices.note.text')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Device Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden shadow-elegant border border-rose-gold/30">
                <div className="relative bg-gradient-to-b from-rose-gold/5 to-white">
                  <img
                    src="/50.png"
                    alt={t('alt.comparison.alexandrit')}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-72 object-contain p-4"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-rose-gold/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">{t('comparison.devices.alexandrit.label')}</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-rose-gold-light/40 to-white border-t border-rose-gold-light">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Star className="w-4 h-4 text-rose-gold-dark" />
                    <p className="font-bold text-primary">{t('comparison.devices.alexandrit.title')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{t('comparison.devices.alexandrit.subtitle')}</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-elegant border border-primary/30">
                <div className="relative bg-gradient-to-b from-rose-gold/5 to-white">
                  <img
                    src="/51.png"
                    alt={t('alt.comparison.diode')}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-72 object-contain p-4"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">{t('comparison.devices.diode.label')}</span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-primary-light/40 to-white border-t border-primary-light">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Shield className="w-4 h-4 text-primary" />
                    <p className="font-bold text-primary">{t('comparison.devices.diode.title')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{t('comparison.devices.diode.subtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcher Laser passt zu wem */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-gold to-primary px-6 py-3 rounded-full mb-4 shadow-xl">
                <Target className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">{t('comparison.suitable.badge')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.suitable.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('comparison.suitable.subtitle')}
              </p>
            </div>

            <div className="overflow-x-auto mb-12">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gradient-to-r from-rose-gold via-primary to-rose-gold">
                      <tr>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase">{t('comparison.suitable.table.criterion')}</th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase bg-rose-gold/20">{t('comparison.suitable.table.alexandrit')}</th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase bg-primary/20">{t('comparison.suitable.table.diode')}</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.skin')}</td>
                        <td className="px-6 py-4 text-sm bg-rose-gold-light/50">{t('comparison.suitable.table.skin.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-primary-light/50">{t('comparison.suitable.table.skin.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.hair')}</td>
                        <td className="px-6 py-4 text-sm bg-rose-gold-light/50">{t('comparison.suitable.table.hair.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-primary-light/50">{t('comparison.suitable.table.hair.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.comfort')}</td>
                        <td className="px-6 py-4 text-sm bg-rose-gold-light/50">{t('comparison.suitable.table.comfort.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-primary-light/50">{t('comparison.suitable.table.comfort.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.speed')}</td>
                        <td className="px-6 py-4 text-sm bg-rose-gold-light/50">{t('comparison.suitable.table.speed.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-primary-light/50">{t('comparison.suitable.table.speed.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.safety')}</td>
                        <td className="px-6 py-4 text-sm bg-rose-gold-light/50">{t('comparison.suitable.table.safety.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-primary-light/50">{t('comparison.suitable.table.safety.diode')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Zonen-Empfehlungen */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-gold-light rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white shadow-lg px-6 py-3 rounded-full mb-4 border-2 border-rose-gold/30">
                <Sparkles className="w-5 h-5 text-rose-gold" />
                <span className="text-sm font-bold text-primary">{t('comparison.zones.badge')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.zones.title')}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-gold via-rose-gold to-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  zone: t('comparison.zones.zone1'),
                  alex: t('comparison.zones.zone1.alex'),
                  diode: t('comparison.zones.zone1.diode'),
                  alexBest: true
                },
                {
                  zone: t('comparison.zones.zone2'),
                  alex: t('comparison.zones.zone2.alex'),
                  diode: t('comparison.zones.zone2.diode'),
                  alexBest: false
                },
                {
                  zone: t('comparison.zones.zone3'),
                  alex: t('comparison.zones.zone3.alex'),
                  diode: t('comparison.zones.zone3.diode'),
                  alexBest: true
                },
                {
                  zone: t('comparison.zones.zone4'),
                  alex: t('comparison.zones.zone4.alex'),
                  diode: t('comparison.zones.zone4.diode'),
                  alexBest: false
                },
                {
                  zone: t('comparison.zones.zone5'),
                  alex: t('comparison.zones.zone5.alex'),
                  diode: t('comparison.zones.zone5.diode'),
                  alexBest: false
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-rose-gold/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2 rounded-full ${item.alexBest ? 'bg-rose-gold/20' : 'bg-primary/20'}`}>
                        <Target className={`w-5 h-5 ${item.alexBest ? 'text-rose-gold-dark' : 'text-primary'}`} />
                      </div>
                      <h3 className="text-xl font-bold text-primary flex-1">{item.zone}</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-rose-gold-light/50 p-4 rounded-lg border-l-4 border-rose-gold">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-rose-gold-dark" />
                          <p className="text-sm font-bold text-rose-gold-dark">{t('comparison.zones.alexandrit.label')}</p>
                        </div>
                        <p className="text-sm text-gray-700">{item.alex}</p>
                      </div>
                      <div className="bg-primary-light/50 p-4 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className="w-4 h-4 text-primary" />
                          <p className="text-sm font-bold text-primary">{t('comparison.zones.diode.label')}</p>
                        </div>
                        <p className="text-sm text-gray-700">{item.diode}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sitzungen, Abstände & Erwartungen */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-rose-gold/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.sessions.title')}
              </h2>
              <p className="text-muted-foreground">{t('comparison.sessions.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: CheckCircle, title: t('comparison.sessions.count.title'), desc: t('comparison.sessions.count.desc') },
                { icon: CheckCircle, title: t('comparison.sessions.interval.title'), desc: t('comparison.sessions.interval.desc') },
                { icon: CheckCircle, title: t('comparison.sessions.expectations.title'), desc: t('comparison.sessions.expectations.desc') },
                { icon: CheckCircle, title: t('comparison.sessions.preparation.title'), desc: t('comparison.sessions.preparation.desc') }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all border-2 border-transparent hover:border-rose-gold/50">
                  <CardContent className="p-6">
                    <div className="bg-rose-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-rose-gold" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-rose-gold shadow-xl bg-gradient-to-br from-rose-gold/5 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-gold/20 p-3 rounded-full">
                    <Sparkles className="w-6 h-6 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2 text-lg">{t('comparison.sessions.aftercare.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t('comparison.sessions.aftercare.desc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warum ist Alexandrit teurer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-rose-gold/10 px-6 py-3 rounded-full mb-4 border-2 border-rose-gold/30">
                <Award className="w-5 h-5 text-rose-gold-dark" />
                <span className="text-sm font-bold text-rose-gold-dark">{t('comparison.price.badge')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.price.title')}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: t('comparison.price.tech.title'),
                  text: t('comparison.price.tech.desc'),
                  color: 'yellow'
                },
                {
                  title: t('comparison.price.applicability.title'),
                  text: t('comparison.price.applicability.desc'),
                  color: 'yellow'
                },
                {
                  title: t('comparison.price.dynamics.title'),
                  text: t('comparison.price.dynamics.desc'),
                  color: 'yellow'
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 border-transparent hover:border-rose-gold/50 transition-all hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-gold/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                        <Star className="w-5 h-5 text-rose-gold-dark" />
                      </div>
                      <div>
                        <h3 className="font-bold text-rose-gold-dark mb-2 text-lg">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-rose-gold-light/50 to-rose-gold-light/30 border-2 border-rose-gold shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-gold/30 p-3 rounded-full">
                      <Info className="w-6 h-6 text-rose-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-gold-dark mb-2 text-lg">{t('comparison.price.note.title')}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('comparison.price.note.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sicherheit & Risiken */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-4 border-2 border-primary/30">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary">{t('comparison.safety.badge')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.safety.title')}
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary-light/30 to-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-lg">{t('comparison.safety.common.title')}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('comparison.safety.common.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-gold-dark/30 bg-gradient-to-br from-rose-gold-light/30 to-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-gold-dark/20 p-3 rounded-full">
                      <Info className="w-6 h-6 text-rose-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-gold-dark mb-2 text-lg">{t('comparison.safety.rare.title')}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('comparison.safety.rare.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-red-100/50 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-800 mb-4 text-lg flex items-center gap-2">
                    <div className="bg-red-500/20 p-2 rounded-full">
                      <Info className="w-5 h-5 text-red-600" />
                    </div>
                    {t('comparison.safety.temporary.title')}
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-12">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{t('comparison.safety.temporary.item1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{t('comparison.safety.temporary.item2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{t('comparison.safety.temporary.item3')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{t('comparison.safety.temporary.item4')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-2xl border-2 border-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-xl">{t('comparison.safety.measures.title')}</h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        {t('comparison.safety.measures.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-4 border-2 border-primary/30">
                <Info className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary">{t('comparison.faq.badge')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.faq.title')}
              </h2>
              <p className="text-muted-foreground">{t('comparison.faq.subtitle')}</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: t('comparison.faq.q1'),
                  a: t('comparison.faq.a1')
                },
                {
                  q: t('comparison.faq.q2'),
                  a: t('comparison.faq.a2')
                },
                {
                  q: t('comparison.faq.q3'),
                  a: t('comparison.faq.a3')
                },
                {
                  q: t('comparison.faq.q4'),
                  a: t('comparison.faq.a4')
                },
                {
                  q: t('comparison.faq.q5'),
                  a: t('comparison.faq.a5')
                }
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-gray-200 rounded-lg px-6 hover:border-rose-gold/50 transition-all"
                >
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-rose-gold transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-rose-gold to-primary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold">{t('comparison.cta.badge')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('comparison.cta.title')}
            </h2>

            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              {t('comparison.cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 text-lg px-8 py-6"
                onClick={() => showBookingWidget()}
              >
                {t('comparison.cta.button.book')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary transition-all hover:scale-105 text-lg px-8 py-6 shadow-lg"
                onClick={() => window.location.href = withLang('/laser-haarentfernung-muenchen')}
              >
                {t('comparison.cta.button.info')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default AlexandritVsDiodenlaser;
