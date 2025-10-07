import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, Target, Clock, Shield, Star, Phone, Instagram, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';

const IcooneLaser = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Icoone®️ Behandlung München-Haidhausen – Hautstraffung & Lymphdrainage',
      description: 'Icoone®️ im Yuliia Cheporska Studio, Elsässer Str. 33 (Haidhausen). Straffere Haut, Cellulite-Reduktion, Lymphdrainage. Jetzt online buchen.'
    });

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: window.location.origin
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${window.location.origin}/services`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Icoone Laser München',
          item: window.location.href
        }
      ]
    });
  }, []);
  const benefits = [
    {
      icon: Target,
      title: 'Body Contouring',
      description: 'Целенаправленное моделирование силуэта тела с помощью инновационной вакуумно-лазерной комбинации'
    },
    {
      icon: Sparkles,
      title: 'Подтяжка кожи',
      description: 'Улучшение эластичности кожи и уменьшение провисаний'
    },
    {
      icon: Heart,
      title: 'Уменьшение целлюлита',
      description: 'Эффективное лечение апельсиновой корки и улучшение структуры кожи'
    },
    {
      icon: Shield,
      title: 'Лимфодренаж',
      description: 'Стимуляция лимфотока и детоксикация тканей'
    }
  ];

  const treatmentAreas = [
    'Живот и талия',
    'Бедра и ягодицы',
    'Руки и плечи',
    'Бока и фланки',
    'Спина',
    'Декольте и шея'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Консультация и анализ',
      description: 'Индивидуальный анализ кожи и планирование процедуры'
    },
    {
      step: 2,
      title: 'Подготовка',
      description: 'Очищение и подготовка зоны обработки'
    },
    {
      step: 3,
      title: 'Процедура Icoone',
      description: 'Комбинация вакуумного массажа и лазерной обработки'
    },
    {
      step: 4,
      title: 'Постобработка',
      description: 'Рекомендации по уходу и планирование последующих сеансов'
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      <section
        className="relative min-h-[50vh] md:min-h-[60vh] lg:h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/3.6.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 via-transparent to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Процедура Icoone®️ в Мюнхен-Хайдхаузен – Подтяжка кожи и уменьшение целлюлита
          </h1>
          <p className="text-lg md:text-xl mb-4 text-white/95">
            Профессиональная процедура Icoone Laser в Мюнхене
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Испытайте революционную комбинацию вакуумного массажа и лазерной обработки для оптимальной подтяжки кожи и коррекции фигуры в нашей студии в Мюнхен-Хайдхаузен.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 border-none shadow-lg"
              asChild
            >
              <a href="https://beauty.dikidi.net/#widget=185505" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Записаться на консультацию
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/preis#icoone-laser">
                Посмотреть цены
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">
              Преимущества Icoone®️ в Мюнхен-Хайдхаузен
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Подтяжка кожи и уменьшение целлюлита</h3>
                      <p className="text-muted-foreground">
                        Целенаправленное улучшение эластичности кожи, уменьшение апельсиновой корки и более упругие контуры тела.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Лимфодренаж и детоксикация</h3>
                      <p className="text-muted-foreground">
                        Стимуляция лимфотока, поддержка очищения и детоксикации тканей.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Безболезненно и расслабляюще</h3>
                      <p className="text-muted-foreground">
                        Приятная процедура без периода восстановления – идеально для работающих людей в Мюнхене.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Профессиональная консультация</h3>
                      <p className="text-muted-foreground">
                        Индивидуальный анализ и персонализированное планирование процедур в сердце Хайдхаузена.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Что такое Icoone Laser?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Icoone – это революционная технология, которая сочетает вакуумный массаж с лазерной обработкой
                для достижения оптимальных результатов в коррекции фигуры и улучшении состояния кожи.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <img
                  src="/3.jpeg"
                  alt="Icoone Behandlung – Kosmetikstudio München Haidhausen – Hauptgerät"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                  style={{
                    transform: 'scale(0.6)',
                    objectPosition: 'center'
                  }}
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/3.9.jpg"
                    alt="Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlungsraum"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      transform: 'scale(0.85)',
                      objectPosition: 'center'
                    }}
                  />
                  <img
                    src="/3.10.jpg"
                    alt="Icoone Behandlung – Kosmetikstudio München Haidhausen – Handstück Detail"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      transform: 'scale(0.85)',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">Микро-вакуумная технология</h3>
                    <p className="text-muted-foreground">
                      Более 21 600 микроперфораций создают контролируемый вакуумный эффект,
                      который стимулирует кровообращение и активизирует ткани.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">Лазерная интеграция</h3>
                    <p className="text-muted-foreground">
                      Комбинация с лазерной энергией усиливает эффект и обеспечивает
                      глубокое улучшение кожи и подтяжку тканей.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">Безболезненное применение</h3>
                    <p className="text-muted-foreground">
                      Процедура приятна и расслабляюща, без периода восстановления или
                      болезненных последствий.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Примеры процедур и результаты</h2>
              <p className="text-xl text-muted-foreground">Посмотрите впечатляющие результаты наших процедур Icoone Laser</p>
            </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { src: '/3.1.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlungsergebnis 1' },
                { src: '/3.2.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlungsergebnis 2' },
                { src: '/3.3.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Körperkonturierung' },
                { src: '/3.4.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Hautstraffung' },
                { src: '/3.5.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Cellulite-Behandlung' },
                { src: '/3.7.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Vorher-Nachher' },
                { src: '/3.8.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlungsablauf' },
                { src: '/3.9.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Studio Ansicht' },
                { src: '/3.10.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Gerät Detail' },
                { src: '/3.11.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Anwendung' },
                { src: '/3.13.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Ergebnis Detail' },
                { src: '/3.14.jpg', alt: 'Icoone Behandlung – Kosmetikstudio München Haidhausen – Behandlung Detail' }
              ].map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">Профессиональная процедура Icoone Laser</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Испытайте революционную комбинацию вакуумного массажа и лазерной обработки для
              оптимальной подтяжки кожи и коррекции фигуры в нашей студии.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IcooneLaser;
