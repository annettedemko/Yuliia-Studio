import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Info, Zap, Shield, Sparkles, Target, Award, Star } from 'lucide-react';
import { useEffect } from 'react';
import { PageHelmet } from '@/components/PageHelmet';
import { setJsonLd } from '@/seo/seo';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

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
    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Alexandrit vs. Diodenlaser: Was ist wann effektiver?',
      author: {
        '@type': 'Organization',
        name: 'Yuliia Cheporska Studio'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Yuliia Cheporska Studio',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.munchen-beauty.de/logo2.jpg'
        }
      },
      datePublished: '2025-01-15',
      description: 'Verständlicher Leitfaden: Wir erklären, wie Alexandrit- und Diodenlaser funktionieren, wo ihre Stärken liegen und wie wir die passende Methode wählen.'
    });
  }, []);

  return (
    <>
      <PageHelmet />
      <div className="min-h-screen pt-16">

        {/* Hero Section */}
      <section
        className="relative min-h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(/24.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20 mt-16 sm:mt-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">{t('comparison.hero.badge')}</span>
            <Sparkles className="w-4 h-4 text-blue-300" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-white to-blue-300 bg-clip-text text-transparent">
              {t('comparison.hero.title.line1')}
            </span>
            <br />
            <span className="text-white">{t('comparison.hero.title.line2')}</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
            {t('comparison.hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white shadow-2xl hover:shadow-rose-gold/50 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              {t('comparison.hero.button.book')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to={withLang("/preis")}>
                {t('comparison.hero.button.prices')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kurzüberblick */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-yellow-500 to-blue-500 p-1 rounded-full mb-4">
                <div className="bg-white px-6 py-2 rounded-full">
                  <span className="text-sm font-bold bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
                    {t('comparison.overview.badge')}
                  </span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.overview.title')}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-rose-gold to-blue-500 mx-auto rounded-full"></div>
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

              <Card className="border-2 border-transparent hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-yellow-50/50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold text-yellow-700 text-lg">{t('comparison.overview.alexandrit.title')}</p>
                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">{t('comparison.overview.alexandrit.badge')}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('comparison.overview.alexandrit.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-transparent hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-blue-50/50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold text-blue-700 text-lg">{t('comparison.overview.diode.title')}</p>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">{t('comparison.overview.diode.badge')}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('comparison.overview.diode.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <Info className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="text-muted-foreground flex-1 leading-relaxed">
                      <span className="font-bold text-orange-800 text-lg block mb-1">{t('comparison.overview.warning.title')}</span>
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
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
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
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-rose-gold to-blue-500 mx-auto rounded-full"></div>
            </div>

            {/* Image */}
            <div className="mb-10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
              <img
                src="/19.png"
                alt="Laser Haarentfernung Technologie München"
                className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl relative z-10 border-4 border-white"
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
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 px-6 py-3 rounded-full mb-4 border-2 border-gray-200">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-bold text-primary">{t('comparison.devices.badge')}</span>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider bg-yellow-500/20">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            {t('comparison.devices.table.alexandrit')}
                          </div>
                        </th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider bg-blue-500/20">
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
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">{t('comparison.devices.table.wavelength.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">{t('comparison.devices.table.wavelength.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.mode')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">{t('comparison.devices.table.mode.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">{t('comparison.devices.table.mode.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.cooling')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">{t('comparison.devices.table.cooling.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">{t('comparison.devices.table.cooling.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.skin')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">{t('comparison.devices.table.skin.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">{t('comparison.devices.table.skin.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{t('comparison.devices.table.evidence')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">{t('comparison.devices.table.evidence.alex')}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">{t('comparison.devices.table.evidence.diode')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg mb-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Info className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-blue-800 block mb-1">{t('comparison.devices.note.title')}</span>
                    {t('comparison.devices.note.text')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Device Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src="/deka3.1.jpeg"
                    alt="Alexandrit Laser München - Motus AX"
                    className="w-full h-64 object-cover"
                    style={{ transform: 'scale(1.35)' }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">{t('comparison.devices.alexandrit.label')}</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-yellow-50/50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <p className="font-bold text-primary">{t('comparison.devices.alexandrit.title')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{t('comparison.devices.alexandrit.subtitle')}</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500/50 overflow-hidden">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src="/19.png"
                    alt="Diodenlaser Haarentfernung München - M-Tech"
                    className="w-full h-64 object-cover"
                    style={{ objectPosition: 'center 10%' }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">{t('comparison.devices.diode.label')}</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-blue-50/50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <p className="font-bold text-primary">{t('comparison.devices.diode.title')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{t('comparison.devices.diode.subtitle')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Welcher Laser passt zu wem */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-blue-500 px-6 py-3 rounded-full mb-4 shadow-xl">
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
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase bg-yellow-500/20">{t('comparison.suitable.table.alexandrit')}</th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase bg-blue-500/20">{t('comparison.suitable.table.diode')}</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.skin')}</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">{t('comparison.suitable.table.skin.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">{t('comparison.suitable.table.skin.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.hair')}</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">{t('comparison.suitable.table.hair.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">{t('comparison.suitable.table.hair.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.comfort')}</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">{t('comparison.suitable.table.comfort.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">{t('comparison.suitable.table.comfort.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.speed')}</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">{t('comparison.suitable.table.speed.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">{t('comparison.suitable.table.speed.diode')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{t('comparison.suitable.table.safety')}</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">{t('comparison.suitable.table.safety.alex')}</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">{t('comparison.suitable.table.safety.diode')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-yellow-500/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/deka3.2.jpeg"
                    alt="Alexandrit Laser München - DEKA Technologie"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">DEKA Alexandrit System</p>
                    <p className="text-sm text-white/80">Premium Laser-Technologie</p>
                  </div>
                </div>
              </Card>

              <Card className="group hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-yellow-500/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/deka3.3.jpeg"
                    alt="Alexandrit Laser München - Behandlung"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">Alexandrit Behandlung</p>
                    <p className="text-sm text-white/80">Professionelle Anwendung</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Zonen-Empfehlungen */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
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
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-rose-gold to-blue-500 mx-auto rounded-full"></div>
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
                      <div className={`p-2 rounded-full ${item.alexBest ? 'bg-yellow-500/20' : 'bg-blue-500/20'}`}>
                        <Target className={`w-5 h-5 ${item.alexBest ? 'text-yellow-600' : 'text-blue-600'}`} />
                      </div>
                      <h3 className="text-xl font-bold text-primary flex-1">{item.zone}</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-yellow-50/50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-600" />
                          <p className="text-sm font-bold text-yellow-700">{t('comparison.zones.alexandrit.label')}</p>
                        </div>
                        <p className="text-sm text-gray-700">{item.alex}</p>
                      </div>
                      <div className="bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className="w-4 h-4 text-blue-600" />
                          <p className="text-sm font-bold text-blue-700">{t('comparison.zones.diode.label')}</p>
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
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-6 py-3 rounded-full mb-4 border-2 border-yellow-500/30">
                <Award className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-bold text-yellow-700">{t('comparison.price.badge')}</span>
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
                <Card key={index} className="border-2 border-transparent hover:border-yellow-500/50 transition-all hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-500/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                        <Star className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-yellow-700 mb-2 text-lg">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/30 p-3 rounded-full">
                      <Info className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-yellow-800 mb-2 text-lg">{t('comparison.price.note.title')}</h3>
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
              <div className="inline-flex items-center gap-2 bg-green-500/10 px-6 py-3 rounded-full mb-4 border-2 border-green-500/30">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-bold text-green-700">{t('comparison.safety.badge')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {t('comparison.safety.title')}
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50/50 to-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-700 mb-2 text-lg">{t('comparison.safety.common.title')}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('comparison.safety.common.desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50/50 to-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-full">
                      <Info className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-700 mb-2 text-lg">{t('comparison.safety.rare.title')}</h3>
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
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
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
                onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
              >
                {t('comparison.cta.button.book')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all hover:scale-105 text-lg px-8 py-6"
                onClick={() => window.location.href = '/laser-haarentfernung-muenchen'}
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
