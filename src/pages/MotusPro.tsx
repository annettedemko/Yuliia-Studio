import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Target,
  Shield,
  Star,
  CheckCircle,
  Monitor,
  Sparkles,
  Award,
  Clock,
  Activity
} from 'lucide-react';

const MotusPro = () => {
  const technicalFeatures = [
    {
      number: '1',
      title: 'Длина волны александрита (755 нм)',
      description: 'Подходит для эффективного удаления тонких и светлых волос.'
    },
    {
      number: '2',
      title: 'Манипула Moveo-HR',
      description: 'Доступна как для александритовых, так и для Nd:YAG-лазеров. Обеспечивает безболезненное и эффективное удаление волос с помощью новой, более легкой, быстрой и безопасной методики.'
    },
    {
      number: '3',
      title: 'Инновационная технология',
      description: 'Структурно упрощает ядро лазерной системы, снижая расходы и проблемы с обслуживанием.'
    },
    {
      number: '4',
      title: 'Современный дизайн',
      description: 'Система с большим поворотным дисплеем 15,6 дюймов и интуитивным пользовательским интерфейсом.'
    },
    {
      number: '5',
      title: 'Компактная система',
      description: 'Низкие эксплуатационные расходы для современной бьюти-студии.'
    }
  ];

  const keyFeatures = [
    {
      icon: Zap,
      title: 'Комбинированный лазер 755 / 1064 нм',
      description: 'Длины волн александрита и Nd:YAG обеспечивают максимальную гибкость. Благодаря оптимизированному источнику питания достаточно стандартной розетки Schuko на 16А.'
    },
    {
      icon: Monitor,
      title: 'Простой и удобный',
      description: 'Motus PRO отличается особыми характеристиками: компактные размеры, интуитивное программное обеспечение, легкие и эргономичные манипулы, а также инновационный метод Moveo.'
    },
    {
      icon: Target,
      title: 'Инновационная манипула Moveo',
      description: 'Motus PRO предлагает манипулу Moveo-HR (диаметр пятна 24 мм) с фокусом на удаление волос. Дополнительно доступно подключение для охлаждения кожи.'
    },
    {
      icon: Award,
      title: 'Интегрированные протоколы процедур',
      description: 'Motus PRO предлагает до 200 протоколов процедур для технологии Moveo.'
    },
    {
      icon: Shield,
      title: 'Интегрированное охлаждение кожи',
      description: 'Контактное охлаждение кожи и технология Moveo обеспечивают постепенное нагревание, что гарантирует мягкую процедуру и минимальные побочные эффекты.'
    },
    {
      icon: Activity,
      title: 'Дисплей 15,6″ с поворотом на 180°',
      description: 'Поворотный и наклонный сенсорный дисплей 15,6" с полностью модернизированным интерфейсом и крупными иконками обеспечивает интуитивное и быстрое управление.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="/deka1.png"
                  alt="Motus PRO"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                  style={{
                    transform: 'scale(1.0)',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-primary font-semibold text-sm">DEKA Technology</span>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-4 right-4">
                  <img
                    src="/DEKA logo.png"
                    alt="DEKA Logo"
                    className="h-12 md:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                    style={{filter: 'brightness(1.2) saturate(1.1)'}}
                  />
                </div>
                <div className="mb-6 mt-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 animate-slide-up">
                    <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      Motus PRO
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-green-700 font-medium mb-6 animate-slide-up" style={{animationDelay: '200ms'}}>
                    Идеальное решение для эпиляции
                  </p>
                </div>

                <div className="flex justify-start animate-slide-up" style={{animationDelay: '400ms'}}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg text-lg px-8 py-4"
                    asChild
                  >
                    <a href="tel:+4915206067810">
                      <Phone className="w-5 h-5 mr-2" />
                      Записаться на консультацию
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - RedTouch PRO Style with Green/Emerald Colors */}
      <section id="features" className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">Основные характеристики Motus PRO</h2>
              <div className="w-40 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 mx-auto animate-gradient mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Инновационная технология для максимальной эффективности и комфорта
              </p>
            </div>

            {/* Cards Around Device Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT SIDE - First 3 cards */}
              <div className="lg:col-span-3 space-y-6">
                {keyFeatures.slice(0, 3).map((feature, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-green-50/50 backdrop-blur-sm border-2 border-green-100 hover:border-green-300 animate-slide-up"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-green-600 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CENTER - Device Image */}
              <div className="lg:col-span-6 text-center">
                <div className="relative inline-block animate-slide-up delay-300">
                  <img
                    src="/deka1.png"
                    alt="Motus PRO - Das ultimative Haarentfernungsgerät"
                    className="w-full max-w-sm mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    style={{transform: 'scale(0.7)'}}
                  />

                  {/* Floating tech particles */}
                  <div className="absolute top-10 right-10 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
                  <div className="absolute top-1/3 left-8 w-1 h-1 bg-green-300 rounded-full animate-ping delay-500 opacity-80"></div>
                  <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-emerald-600 rounded-full animate-pulse delay-700 opacity-75"></div>
                </div>
              </div>

              {/* RIGHT SIDE - Remaining 3 cards */}
              <div className="lg:col-span-3 space-y-6">
                {keyFeatures.slice(3, 6).map((feature, index) => (
                  <Card
                    key={index + 3}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white/95 to-green-50/50 backdrop-blur-sm border-2 border-green-100 hover:border-green-300 animate-slide-up"
                    style={{animationDelay: `${(index + 3) * 200}ms`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-green-600 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                        </div>
                      </div>
                      {/* Animated border bottom */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Device Images - Moved below the main feature section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up delay-500">
              <div className="text-center">
                <img
                  src="/deka1.1.jpeg"
                  alt="Motus PRO Handstück"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  style={{
                    transform: 'scale(1.0)',
                    objectPosition: 'center'
                  }}
                />
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-primary mb-3">Манипула Moveo</h4>
                  <p className="text-sm text-muted-foreground">Инновационный сапфировый наконечник для точной передачи энергии</p>
                </div>
              </div>

              <div className="text-center">
                <img
                  src="/deka1.2.jpeg"
                  alt="Motus PRO Display"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-primary mb-3">Сенсорный экран 15,6″</h4>
                  <p className="text-sm text-muted-foreground">Дисплей с поворотом на 180° и интуитивным интерфейсом</p>
                </div>
              </div>

              <div className="text-center">
                <img
                  src="/deka1.3.jpeg"
                  alt="Motus PRO System"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-primary mb-3">Компактный дизайн</h4>
                  <p className="text-sm text-muted-foreground">Современная система для профессиональной бьюти-студии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-bounce delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Технические характеристики</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 mx-auto animate-gradient mb-6"></div>
              <p className="text-xl text-blue-100">
                Пять ключевых технологий для оптимальных результатов процедур
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {technicalFeatures.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-lg">
                        {feature.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Moveo Technology Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-10 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-orange-400/20 rounded-full blur-2xl animate-bounce delay-700"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Технология Moveo</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
              <p className="text-xl text-blue-100">Повышенная эффективность для максимальных результатов</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-cyan-300">Революционный сапфировый наконечник</h3>
                    <p className="text-lg leading-relaxed mb-6 text-blue-100">
                      Манипула Moveo от DEKA революционизирует лазерные процедуры, благодаря
                      инновационному сапфировому наконечнику минимизируя потери энергии и точно передавая
                      лазерную энергию на кожу – даже для особенно светлых типов кожи.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-cyan-500/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-300 mb-2">Интеллектуальное ПО</h4>
                        <p className="text-blue-100 text-sm">Автоматически распознает манипулу и предлагает быстрый выбор параметров</p>
                      </div>
                      <div className="bg-cyan-500/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-300 mb-2">Встроенная память</h4>
                        <p className="text-blue-100 text-sm">Отображает переданную энергию со звуковым сигналом процедуры</p>
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold text-cyan-300">Ультрабыстрая процедура</span>
                      </div>
                      <p className="text-blue-100 text-sm">
                        Эффективная обработка участков кожи 10 x 10 см всего за 25 секунд
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-slide-up delay-300 flex justify-center">
                <div className="relative group max-w-sm mx-auto">
                  {/* Luxury background effects */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 via-amber-300/20 to-gold-400/20 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-xl blur-xl"></div>

                  {/* Premium frame - reduced size */}
                  <div className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 p-3 rounded-xl shadow-2xl border-4 border-gradient-to-r border-amber-300/50">
                    {/* Premium badge - attached to card */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-amber-300/50">
                        <span className="text-white font-bold text-xs flex items-center whitespace-nowrap">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Премиум-технология
                        </span>
                      </div>
                    </div>

                    <img
                      src="/deka1.png"
                      alt="Motus PRO Moveo-Technologie"
                      className="w-full object-contain rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-700"
                      style={{transform: 'scale(0.47)', margin: 'auto'}}
                    />

                    {/* Luxury shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-44 h-44 bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-52 h-52 bg-teal-400/30 rounded-full blur-3xl animate-float delay-500"></div>
          <div className="absolute top-2/3 right-1/3 w-28 h-28 bg-green-400/30 rounded-full blur-2xl animate-bounce delay-300"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Испытайте Motus PRO прямо сейчас</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Откройте для себя революционную технологию Motus PRO для вашей бьюти-студии.
              Свяжитесь с нами для индивидуальной консультации и демонстрации.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+4915206067810">
                  <Phone className="w-5 h-5 mr-2" />
                  Позвонить сейчас
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:info@yuliia-studio.de">
                  <Mail className="w-5 h-5 mr-2" />
                  Запросить предложение
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4"
                asChild
              >
                <Link to="/deka-geraeteverkauf">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Другое оборудование DEKA
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Как официальный партнер по продажам DEKA, мы предлагаем вам комплексные консультации,
                обучение и профессиональную поддержку для установки Motus PRO.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MotusPro;