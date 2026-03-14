import { useState, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageHelmet } from '@/components/PageHelmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Sparkles, Target, ListChecks, TrendingUp, CheckCircle, Package, Truck, ExternalLink } from 'lucide-react';

const plannerImages = [
  { src: '/planner/IMG_4694-web.jpg', alt: 'alt.planner.holding' },
  { src: '/planner/IMG_4486-web.jpg', alt: 'alt.planner.cover' },
  { src: '/planner/IMG_4488-web.jpg', alt: 'alt.planner.flowers' },
  { src: '/planner/IMG_4489-web.jpg', alt: 'alt.planner.pen' },
  { src: '/planner/IMG_4492-web.jpg', alt: 'alt.planner.inside' },
  { src: '/planner/IMG_4224-web.jpg', alt: 'alt.planner.hand' },
  { src: '/planner/IMG_4693-web.jpg', alt: 'alt.planner.roses' },
];

const PlannerYC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  const isSuccess = searchParams.get('success') === 'true';
  const isCanceled = searchParams.get('canceled') === 'true';

  const introRef = useScrollReveal({ threshold: 0.1 });
  const whatRef = useScrollReveal({ threshold: 0.1 });
  const featuresRef = useScrollReveal({ threshold: 0.1 });
  const whoRef = useScrollReveal({ threshold: 0.1 });
  const galleryRef = useScrollReveal({ threshold: 0.1 });
  const priceRef = useScrollReveal({ threshold: 0.1 });

  const handleCheckout = async () => {
    setIsLoading(true);
    setCheckoutError('');
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: currentLang }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setCheckoutError(
          currentLang === 'ru'
            ? 'Ошибка при создании заказа. Пожалуйста, попробуйте позже.'
            : 'Fehler beim Erstellen der Bestellung. Bitte versuchen Sie es später erneut.'
        );
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setCheckoutError(
        currentLang === 'ru'
          ? 'Ошибка соединения. Пожалуйста, проверьте интернет и попробуйте снова.'
          : 'Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Planner YC by Yuliia Cheporska',
    description: currentLang === 'ru'
      ? 'Стильный планер для планирования жизни, формирования мыслей и достижения целей'
      : 'Stilvoller Planer für Lebensplanung, Gedankenordnung und Zielerreichung',
    image: 'https://www.munchen-beauty.de/planner/IMG_4694-web.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Yuliia Cheporska',
    },
    offers: {
      '@type': 'Offer',
      price: '24.90',
      priceCurrency: 'EUR',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: `https://www.munchen-beauty.de/${currentLang}/planner-yc`,
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '6.00',
          currency: 'EUR',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'DE',
        },
      },
    },
  }), [currentLang]);

  /* Reusable order button block (§312j Abs. 3 BGB compliant) */
  const OrderButton = () => (
    <div>
      <Button
        size="lg"
        className="w-full bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-base py-6"
        onClick={handleCheckout}
        disabled={isLoading}
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        {isLoading
          ? (currentLang === 'ru' ? 'Загрузка...' : 'Laden...')
          : t('planner.price.cta')}
      </Button>

      {checkoutError && (
        <p className="text-sm text-red-600 text-center mt-2">{checkoutError}</p>
      )}

      {/* §312j BGB — Legal links before order (Widerrufsbelehrung, AGB, Datenschutz) */}
      <div className="text-xs text-center text-muted-foreground mt-3 leading-relaxed">
        <p>
          {t('planner.legal.order-info')}{' '}
          <Link to={`${langPrefix}/agb`} className="underline hover:text-foreground">
            {t('planner.legal.agb')}
          </Link>
          {' '}{t('planner.legal.and')}{' '}
          <Link to={`${langPrefix}/datenschutzerklaerung`} className="underline hover:text-foreground">
            {t('planner.legal.datenschutz')}
          </Link>
          {' '}{t('planner.legal.acknowledge')}{' '}
          <Link to={`${langPrefix}/agb#widerruf`} className="underline hover:text-foreground">
            {t('planner.legal.widerruf')}
          </Link>.
        </p>
        <p className="mt-1.5 flex items-center justify-center gap-1">
          <ExternalLink className="w-3 h-3" />
          {t('planner.legal.stripe-info')}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <PageHelmet />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen pt-16 bg-gradient-to-b from-white via-rose-50/30 to-white">

        {/* Success / Cancel Messages */}
        {isSuccess && (
          <div className="bg-green-50 border-b border-green-200 py-4">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">
                  {currentLang === 'ru'
                    ? 'Спасибо за заказ! Мы свяжемся с вами в ближайшее время.'
                    : 'Vielen Dank für Ihre Bestellung! Wir melden uns in Kürze bei Ihnen.'}
                </span>
              </div>
            </div>
          </div>
        )}
        {isCanceled && (
          <div className="bg-amber-50 border-b border-amber-200 py-4">
            <div className="container mx-auto px-4 text-center text-amber-700">
              {currentLang === 'ru'
                ? 'Заказ был отменён. Вы можете попробовать снова.'
                : 'Bestellung wurde abgebrochen. Sie können es erneut versuchen.'}
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-white to-purple-50/50"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-rose-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Gallery */}
              <div className="order-1 lg:order-1">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-rose-gold/20 cursor-pointer group"
                  onClick={() => setLightboxOpen(true)}
                >
                  <img
                    src={plannerImages[selectedImage].src}
                    alt={t(plannerImages[selectedImage].alt)}
                    className="w-full h-[400px] sm:h-[500px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {plannerImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === idx
                          ? 'border-rose-gold shadow-lg scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={t(img.alt)}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="order-2 lg:order-2">
                <div className="inline-flex items-center gap-1.5 bg-rose-gold/10 text-rose-gold-dark rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t('home.planner.badge')}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  {t('planner.hero.title')}
                </h1>
                <p className="text-sm text-muted-foreground italic mb-6">{t('planner.hero.badge')}</p>

                <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed">
                  {t('planner.hero.subtitle')}
                </p>

                {/* Price Card */}
                <Card className="border-rose-gold/20 bg-gradient-to-br from-white to-rose-50/50 mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-4xl font-bold text-primary">{t('home.planner.price')}</span>
                      <span className="text-sm text-muted-foreground">{t('home.planner.price.info')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Truck className="w-4 h-4" />
                      {t('home.planner.shipping')}
                    </div>
                    <div className="text-xs text-muted-foreground mb-5 space-y-0.5">
                      <div>{t('planner.price.net')}</div>
                      <div>{t('planner.price.vat')}</div>
                      <div className="font-semibold text-foreground pt-1">{t('planner.price.total')}</div>
                    </div>

                    <OrderButton />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div ref={introRef} className="container mx-auto px-4 max-w-3xl reveal reveal-up">
            <p className="text-xl sm:text-2xl text-center text-foreground/80 leading-relaxed italic mb-8">
              {t('planner.intro.question')}
            </p>
            <div className="flex flex-col items-center gap-2 mb-8">
              <span className="text-lg font-semibold text-primary">{t('planner.intro.more.focus')}</span>
              <span className="text-lg font-semibold text-primary">{t('planner.intro.more.discipline')}</span>
              <span className="text-lg font-semibold text-primary">{t('planner.intro.more.results')}</span>
            </div>
            <p className="text-base sm:text-lg text-center text-muted-foreground leading-relaxed mb-6">
              {t('planner.intro.chaos')}
            </p>
            <p className="text-base sm:text-lg text-center text-foreground font-medium leading-relaxed">
              {t('planner.intro.purpose')}
            </p>
          </div>
        </section>

        {/* What is it Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-rose-50/30 to-white">
          <div ref={whatRef} className="container mx-auto px-4 max-w-4xl reveal reveal-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  {t('planner.what.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {t('planner.what.description')}
                </p>
                <p className="text-base text-foreground mb-3">{t('planner.what.morning')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <Sparkles className="w-4 h-4 text-rose-gold mt-1 flex-shrink-0" />
                    {t('planner.what.point1')}
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <Sparkles className="w-4 h-4 text-rose-gold mt-1 flex-shrink-0" />
                    {t('planner.what.point2')}
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <Sparkles className="w-4 h-4 text-rose-gold mt-1 flex-shrink-0" />
                    {t('planner.what.point3')}
                  </li>
                </ul>
                <p className="text-base font-medium text-primary italic">
                  {t('planner.what.clarity')}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/planner/IMG_4693-web.jpg"
                  alt={t('alt.planner.roses')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div ref={featuresRef} className="container mx-auto px-4 max-w-3xl reveal reveal-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
              {t('planner.features.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Target, text: t('planner.features.1') },
                { icon: ListChecks, text: t('planner.features.2') },
                { icon: TrendingUp, text: t('planner.features.3') },
                { icon: Sparkles, text: t('planner.features.4') },
              ].map((feature, idx) => (
                <Card key={idx} className="border-rose-gold/10 hover:shadow-lg hover:shadow-rose-gold/10 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-gold/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-rose-gold" />
                    </div>
                    <p className="text-base font-medium text-foreground">{feature.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-rose-50/30 to-white">
          <div ref={whoRef} className="container mx-auto px-4 max-w-3xl text-center reveal reveal-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              {t('planner.who.title')}
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              {t('planner.who.description')}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed italic">
              {t('planner.who.result')}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div ref={galleryRef} className="container mx-auto px-4 reveal reveal-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
              {t('planner.gallery.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {plannerImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => { setSelectedImage(idx); setLightboxOpen(true); }}
                >
                  <img
                    src={img.src}
                    alt={t(img.alt)}
                    className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA / Price Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-rose-50/50 to-white">
          <div ref={priceRef} className="container mx-auto px-4 max-w-lg reveal reveal-up">
            <Card className="border-2 border-rose-gold/30 shadow-2xl shadow-rose-gold/10 overflow-hidden">
              <div className="bg-gradient-to-r from-rose-gold to-rose-gold-dark py-4 px-6 text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {t('planner.price.title')}
                </h2>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Package className="w-5 h-5 text-rose-gold" />
                    <span className="text-lg font-semibold">{t('planner.price.product')}</span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-primary my-4">{t('home.planner.price')}</div>
                  <div className="text-sm text-muted-foreground">{t('home.planner.price.info')}</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('planner.price.product')}</span>
                    <span>{t('planner.price.net')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{currentLang === 'ru' ? 'НДС (19 %)' : 'MwSt. (19 %)'}</span>
                    <span>{t('planner.price.vat')}</span>
                  </div>
                  <div className="border-t pt-1.5 flex justify-between font-medium">
                    <span>{currentLang === 'ru' ? 'Итого товар' : 'Zwischensumme'}</span>
                    <span>{t('planner.price.brutto')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" />
                      {currentLang === 'ru' ? 'Доставка' : 'Versand'}
                    </span>
                    <span>6,00 €</span>
                  </div>
                  <div className="border-t pt-1.5 flex justify-between font-bold text-primary text-base">
                    <span>{currentLang === 'ru' ? 'Итого с доставкой' : 'Gesamtpreis inkl. Versand'}</span>
                    <span>30,90 €</span>
                  </div>
                </div>

                <OrderButton />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light z-10"
            onClick={() => setLightboxOpen(false)}
          >
            &times;
          </button>
          <img
            src={plannerImages[selectedImage].src}
            alt={t(plannerImages[selectedImage].alt)}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {plannerImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(idx); }}
                className={`w-3 h-3 rounded-full transition-all ${
                  selectedImage === idx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PlannerYC;
