import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Train, Car, Clock, Shield, Award, Star, Instagram, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';
import { useLanguage } from '@/contexts/LanguageContext';
// Изображения загружаются из папки public

const LaserHairRemoval = () => {
  const { t } = useLanguage();
  useEffect(() => {
    setPageMeta({
      title: 'Dauerhafte Laser-Haarentfernung in München-Haidhausen',
      description: 'Professionelle Laser-Haarentfernung in München-Haidhausen mit Alexandrit (755 nm) & Diodenlaser. Schonend, effektiv, nachhaltig. Nur 5 Min. vom Ostbahnhof. Jetzt Termin buchen!'
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
          name: 'Laser-Haarentfernung',
          item: window.location.href
        }
      ]
    });
  }, []);

  const faqItems = [
    {
      question: 'Сколько сеансов необходимо?',
      answer: 'Как правило, требуется 6-10 сеансов, в зависимости от вашего типа волос, области тела и индивидуальных особенностей. Сеансы проводятся каждые 4-8 недель.'
    },
    {
      question: 'Болезненна ли процедура?',
      answer: 'Процедуру часто описывают как менее болезненную, чем восковую депиляцию. Большинство пациентов ощущают легкое покалывание или теплое ощущение. Наше современное оборудование минимизирует дискомфорт.'
    },
    {
      question: 'Для кого подходит лазерная эпиляция?',
      answer: 'Процедура подходит для большинства типов кожи. Особенно эффективна она для темных волос на светлой коже. На консультации мы обсудим ваши индивидуальные особенности.'
    },
    {
      question: 'Какие области тела можно обрабатывать?',
      answer: 'Практически все области тела могут быть обработаны: лицо, подмышки, ноги, руки, зона бикини, спина и другие. Каждая область требует индивидуальных циклов процедур.'
    },
    {
      question: 'Сколько стоит процедура?',
      answer: 'Стоимость варьируется в зависимости от зоны обработки. Небольшие зоны, такие как верхняя губа, начинаются от 30-35€, более крупные зоны, такие как полностью ноги, от 120-200€. Точные цены вы найдете на странице с ценами.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">{/* Add padding-top for fixed navigation */}
      
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] md:min-h-[60vh] lg:h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/HERO3.1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 via-transparent to-white"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            {t('laser.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/95">
            {t('laser.hero.tagline')}
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {t('laser.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-rose-gold hover:bg-rose-gold-dark text-white border-none shadow-rose"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('laser.hero.button')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/preis#laser-haarentfernung">
                {t('service.button.prices')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">{t('laser.tech.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('laser.tech.subtitle')}
              </p>
            </div>
            
            {/* Alexandrit Laser */}
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src="/17.png"
                      alt="Alexandrit Laser München"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">{t('laser.alexandrit.title')}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('laser.alexandrit.desc')}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Besonders effektiv bei dunklen Haaren</li>
                      <li>• Schnelle Behandlungszeiten</li>
                      <li>• Präzise und schonend</li>
                      <li>• Klinisch getestet und sicher</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Diodenlaser */}
            <div className="max-w-4xl mx-auto mb-10">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Diodenlaser</h3>
                    <p className="text-muted-foreground mb-4">
                      Unser Diodenlaser eignet sich hervorragend für alle Hauttypen und bietet
                      besonders schonende Behandlungen bei dauerhaften Ergebnissen.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Für alle Hauttypen geeignet</li>
                      <li>• Große Behandlungsflächen möglich</li>
                      <li>• Minimale Nebenwirkungen</li>
                      <li>• Langanhaltende Ergebnisse</li>
                    </ul>
                  </div>
                  <div className="relative">
                    <img
                      src="/19.png"
                      alt="Diodenlaser Haarentfernung München"
                      className="w-full h-full object-cover"
                      style={{
                        transform: 'scale(1.0)',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Comparison Link */}
            <div className="text-center mt-8">
              <Link to="/alexandrit-gegen-diodenlaser">
                <Button variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-white transition-all w-full sm:w-auto">
                  <span className="font-semibold text-sm sm:text-base">Mehr zur Technik: Alexandrit vs. Diodenlaser – Unterschiede & Einsatz</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Multiple Sessions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-8">Почему необходимо несколько сеансов?</h2>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Рост волос происходит в разных фазах. Лазер может эффективно обрабатывать только волосы в активной фазе роста (анагенфаза).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">Анагенфаза</h3>
                  <p className="text-sm text-muted-foreground">
                    Активная фаза роста - волосы наиболее чувствительны к лазерной обработке
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">Катагенфаза</h3>
                  <p className="text-sm text-muted-foreground">
                    Переходная фаза - волосы менее реагируют на лазерную обработку
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3">Телогенфаза</h3>
                  <p className="text-sm text-muted-foreground">
                    Фаза покоя - лазер не оказывает воздействия на спящие волосяные фолликулы
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-4">План процедур</h4>
                  <p className="text-muted-foreground">
                    Поскольку только 20-30% волос одновременно находятся в фазе роста, необходимо
                    <strong className="text-primary"> 6-10 сеансов с интервалом 4-8 недель</strong>,
                    чтобы охватить все волосы и достичь долговременных результатов.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">Ход процедуры</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">1</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Консультация</h3>
                  <p className="text-sm text-muted-foreground">Индивидуальный анализ кожи и план процедур</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">2</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Подготовка</h3>
                  <p className="text-sm text-muted-foreground">Очищение кожи и защитные меры</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">3</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Процедура</h3>
                  <p className="text-sm text-muted-foreground">Точное лазерное воздействие на целевую зону</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rose-gold">4</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Послепроцедурный уход</h3>
                  <p className="text-sm text-muted-foreground">Рекомендации по уходу и последующий прием</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitability & Contraindications */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">Для кого подходит лазерная эпиляция?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">✓ Подходит</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Эффективно для всех типов кожи (I-VI) и различных цветов волос благодаря александритовому и диодному лазерам
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Можно обрабатывать все области тела
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Женщины и мужчины любого возраста (от 16 лет)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Особенно эффективно при густом росте волос
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-rose-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Типы кожи I-IV (от светлой до оливковой)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">⚠️ Противопоказания</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Беременность и период лактации
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Острые воспаления кожи или инфекции
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Прием светочувствительных медикаментов
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Свежий загар или солнечные ванны (за 4 недели до процедуры)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Эпилепсия или другие неврологические заболевания
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Risks and Side Effects */}
            <h3 className="text-3xl font-bold text-primary text-center mb-12">Риски и побочные эффекты</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">Частые, временные побочные эффекты</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Легкое покраснение и отек (1-24 ч)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Теплое ощущение обработанной кожи
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Небольшие корочки вокруг волосяных фолликулов
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Легкое шелушение кожи через 1-2 недели
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">Редкие риски</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Гиперпигментация (темные пятна)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Гипопигментация (светлые пятна)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Поверхностные ожоги при неправильном применении
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Парадоксальный рост волос (очень редко)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Preparation and Aftercare */}
            <h3 className="text-3xl font-bold text-primary text-center mb-12">Подготовка и послепроцедурный уход</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">📋 Подготовка</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      За 4 недели до процедуры: Избегать солнца или солярия
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      За 6 недель до процедуры: Не делать воск, эпиляцию или выщипывание
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      За 1-2 дня до процедуры: Побрить волосы (не выщипывать!)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      В день процедуры: Не наносить кремы или дезодоранты
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      При приеме медикаментов: Проконсультироваться с нами
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">🧴 Послепроцедурный уход</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      24 ч после процедуры: Охлаждение холодными компрессами
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      2 недели: Использовать высокий SPF-фактор (SPF 50+)
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      4 недели: Избегать солнца или солярия
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      Между сеансами: Только бритье, не выщипывать и не делать воск
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      При покраснении: Наносить успокаивающий крем с алоэ вера
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">Часто задаваемые вопросы</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-rose-gold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">
              Почему лазерная эпиляция в Yuliia Cheporska Studio?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Современнейшие лазерные технологии (Александрит 755 нм и Диодный лазер)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Индивидуальная консультация и планирование процедур
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Erfahrene, zertifizierte Behandlerinnen mit über 5 Jahren Erfahrung
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Höchste Hygienestandards und Sicherheitsprotokolle
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Transparente Preise ohne versteckte Kosten
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Zentrale Lage in Мюнхен-Haidhausen, nur 5 Min. vom Ostbahnhof
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-12 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Preise Laser-Haarentfernung</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent und fair - entdecken Sie unsere Preise für alle Behandlungsbereiche
            </p>

            <Button
              size="lg"
              className="bg-gradient-hero text-white border-none shadow-rose mr-4"
              asChild
            >
              <Link to="/preis">
                Alle Preise ansehen
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">So finden Sie uns</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">Adresse</h3>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-rose-gold transition-colors"
                    >
                      Elsässer Straße 33<br />
                      81667 Мюнхен
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Train className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">Öffentliche Verkehrsmittel</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• S-Bahn: S3, S7 bis Rosenheimer Platz (5 Min. Fußweg)</p>
                      <p>• U-Bahn: U4, U5 bis Max-Weber-Platz (8 Min. Fußweg)</p>
                      <p>• Bus: Linie 145 bis Elsässer Straße</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Car className="w-6 h-6 text-rose-gold mr-3" />
                      <h3 className="text-xl font-bold text-primary">Anfahrt mit dem Auto</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• A94 Ausfahrt Мюнхен-Steinhausen</p>
                      <p>• Parkmöglichkeiten in der Nähe vorhanden</p>
                      <p>• Kostenpflichtige Parkplätze in der Straße</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-card h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7363!2d11.6034!3d48.1181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf3f8b5c4b5d%3A0x8c4b5c4b5c4b5c4b!2sElsässer%20Str.%2033%2C%2081667%20München!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yuliia Cheporska Studio Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-10">Kundenstimmen</h2>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground italic mb-6">
                  "Ich bin absolut begeistert von der professionellen Laser-Haarentfernung bei Yuliia! 
                  Die Behandlung war viel weniger schmerzhaft als erwartet und die Ergebnisse sind fantastisch. 
                  Das Studio ist sehr sauber und das Personal äußerst kompetent."
                </blockquote>
                <div className="text-primary font-semibold">
                  Inna Shevchenko
                </div>
                <div className="text-sm text-muted-foreground">
                  Kundin seit 2023
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LaserHairRemoval;