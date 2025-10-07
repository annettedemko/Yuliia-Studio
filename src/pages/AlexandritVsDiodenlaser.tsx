import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Info, Zap, Shield, Sparkles, Target, Award, Star } from 'lucide-react';
import { useEffect } from 'react';
import { setPageMeta, setJsonLd } from '@/seo/seo';
import { Link } from 'react-router-dom';

const AlexandritVsDiodenlaser = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Alexandrit- oder Diodenlaser? Die Unterschiede | Laser-Haarentfernung München',
      description: 'Alexandrit- vs. Diodenlaser im Vergleich – Vorteile & Unterschiede. Erfahren Sie, welche Methode für Ihre Haut & Haare geeignet ist. Studio in München-Haidhausen.'
    });

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
          url: 'https://yuliia-studio.vercel.app/logo2.jpg'
        }
      },
      datePublished: '2025-01-15',
      description: 'Verständlicher Leitfaden: Wir erklären, wie Alexandrit- und Diodenlaser funktionieren, wo ihre Stärken liegen und wie wir die passende Methode wählen.'
    });
  }, []);

  return (
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Профессиональное сравнение</span>
            <Sparkles className="w-4 h-4 text-blue-300" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-white to-blue-300 bg-clip-text text-transparent">
              Александрит vs. Диодный лазер
            </span>
            <br />
            <span className="text-white">Что и когда эффективнее?</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
            Понятный путеводитель: Мы объясняем, как работают обе системы, в чем их сильные стороны и как мы на практике выбираем подходящий метод.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white shadow-2xl hover:shadow-rose-gold/50 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
            >
              Записаться на консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/preis">
                Посмотреть цены
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
                    Краткий обзор
                  </span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Самые важные факты с первого взгляда
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
                      <span className="font-semibold text-primary">Оба лазера</span> устойчиво уменьшают рост волос, но требуют <span className="font-semibold text-primary">нескольких сеансов (минимум 6)</span>, потому что волосы растут циклами.
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
                        <p className="font-bold text-yellow-700 text-lg">Alexandrit (Motus AX, 755 nm)</p>
                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">PREMIUM</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Очень эффективен для светлой и средней кожи с темными волосами; комфортен благодаря контактному охлаждению; мощный на больших зонах.
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
                        <p className="font-bold text-blue-700 text-lg">Diodenlaser (M‑Tech)</p>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">UNIVERSAL</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Гибкий для широкого спектра типов кожи и волос, включая чувствительные зоны; быстрые процедуры, мощное охлаждение.
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
                      <span className="font-bold text-orange-800 text-lg block mb-1">⚠️ Важно знать:</span>
                      Седые/белые/рыжие волосы содержат мало/не содержат пигмента → ограниченная эффективность для обеих систем.
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
                  В нашей студии мы выбираем подходящий аппарат для каждого сеанса и адаптируем параметры под тип кожи, волос, зону и сезон.
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
                <span className="text-sm font-semibold text-primary">Объяснение технологии</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Как работают александритовый и диодный лазеры?
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
                  Обе системы излучают <span className="font-semibold text-primary">направленный свет</span>. Пигмент волоса (меланин) поглощает энергию; в волосяном фолликуле образуется тепло, которое ослабляет рост волос. Наиболее эффективно это в <span className="font-semibold text-primary">активной фазе роста</span>.
                </p>
                <div className="bg-gradient-to-br from-rose-gold/10 to-primary/10 p-6 rounded-xl border-l-4 border-rose-gold">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <p className="font-semibold text-primary leading-relaxed">
                      Поэтому необходимо несколько сеансов – обычно 6-10 процедур с интервалом 4-6 недель.
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
                <span className="text-sm font-bold text-primary">VS</span>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Прямое сравнение аппаратов
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Подробные технические характеристики наших премиальных лазерных систем
              </p>
            </div>

            <div className="overflow-x-auto mb-10">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gradient-to-r from-primary via-rose-gold to-primary">
                      <tr>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider">
                          Критерий
                        </th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider bg-yellow-500/20">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Alexandrit 755 нм
                          </div>
                        </th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase tracking-wider bg-blue-500/20">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            M-Tech Диодный лазер
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Длины волн</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">755 нм (Александрит)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">4 длины волн: 755/808/940/1064 нм</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Режим работы</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">Moveo (многопроходный «в движении»), насадки 5–20 мм</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">SHR/in-motion + «штамповка»; большие насадки</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Охлаждение/Комфорт</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">Контактное охлаждение (сапфировый наконечник)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">Мощное охлаждение кожи (частично ниже 0 °C)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Типы кожи/волос</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">Мощный для темных волос; Moveo для всех фототипов (I–VI)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">Гибкий: 1064 нм для более темной кожи</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">Доказательства</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-yellow-50/50">Исследования показывают хорошую эффективность и безопасность</td>
                        <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50/50">Клинические данные об эффективности и безопасности</td>
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
                    <span className="font-semibold text-blue-800 block mb-1">💡 Примечание:</span>
                    Данные производителей и исследований зависят от контекста. На практике важна индивидуальная настройка параметров — мы выбираем подходящую систему для каждого сеанса.
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
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">ALEXANDRIT</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-yellow-50/50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <p className="font-bold text-primary">Motus Moveo AX</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Alexandrit 755 nm - Premium Technologie</p>
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
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">DIODENLASER</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-blue-50/50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <p className="font-bold text-primary">M-Tech Diodenlaser</p>
                  </div>
                  <p className="text-sm text-muted-foreground">4-in-1 Wellenlängen - Universal System</p>
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
                <span className="text-sm font-bold text-white">Практическое руководство</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Какой лазер кому подходит?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Помощь в выборе на основе вашего типа кожи и зоны обработки
              </p>
            </div>

            <div className="overflow-x-auto mb-12">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gradient-to-r from-rose-gold via-primary to-rose-gold">
                      <tr>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase">Критерий</th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase bg-yellow-500/20">Александрит</th>
                        <th scope="col" className="py-4 px-6 text-left text-sm font-bold text-white uppercase bg-blue-500/20">Диодный лазер</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Типы кожи</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">Оптимально I–III; Moveo также IV–VI</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">Подходит для всех типов кожи</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Типы волос</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">Тонкие, темные волосы</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">Жесткие, глубоко расположенные волосы</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Комфорт</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">⭐ Очень комфортно</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">⭐ Комфортно</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Скорость</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">Быстро на небольших зонах</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">Эффективно на больших поверхностях</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Безопасность</td>
                        <td className="px-6 py-4 text-sm bg-yellow-50/50">✅ Проверенный</td>
                        <td className="px-6 py-4 text-sm bg-blue-50/50">✅ Гибкий</td>
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
                <span className="text-sm font-bold text-primary">Руководство по зонам</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Рекомендации по зонам тела
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-rose-gold to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  zone: 'Верхняя губа / Лицо',
                  alex: '✅ Особенно эффективен для тонких темных волос; очень комфортно',
                  diode: 'Применим, если волосы темнее',
                  alexBest: true
                },
                {
                  zone: 'Подмышки',
                  alex: 'Хорошо подходит для светлой кожи',
                  diode: '✅ Очень эффективен также для более темной кожи',
                  alexBest: false
                },
                {
                  zone: 'Руки',
                  alex: '✅ Оптимально для светлых типов кожи и тонких волос',
                  diode: 'Подходит для более жестких волос',
                  alexBest: true
                },
                {
                  zone: 'Ноги / Спина',
                  alex: 'Менее эффективен для очень глубоких волос',
                  diode: '✅ Первый выбор для больших зон и более темных типов кожи',
                  alexBest: false
                },
                {
                  zone: 'Интимная зона / Бикини',
                  alex: 'Возможен, очень комфортен для светлой кожи',
                  diode: '✅ Первый выбор для жестких волос или более темной кожи',
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
                          <p className="text-sm font-bold text-yellow-700">Александрит:</p>
                        </div>
                        <p className="text-sm text-gray-700">{item.alex}</p>
                      </div>
                      <div className="bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className="w-4 h-4 text-blue-600" />
                          <p className="text-sm font-bold text-blue-700">Диодный лазер:</p>
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
                Сеансы, интервалы и ожидания
              </h2>
              <p className="text-muted-foreground">Что вам следует знать о ходе процедуры</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: CheckCircle, title: 'Количество сеансов', desc: 'Рассчитывайте минимум на 6 сеансов, часто больше — волосы растут циклами.' },
                { icon: CheckCircle, title: 'Интервалы', desc: 'Обычно 4–6 недель (в зависимости от зоны; напр., спина возможно дольше).' },
                { icon: CheckCircle, title: 'Ожидания', desc: 'Первое уменьшение часто после нескольких процедур; результат индивидуален (кожа/волосы/гормоны).' },
                { icon: CheckCircle, title: 'Подготовка', desc: 'За 24 ч до процедуры побриться, не делать воск/эпиляцию; избегать солнца/автозагара.' }
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
                    <h3 className="font-bold text-primary mb-2 text-lg">Послепроцедурный уход</h3>
                    <p className="text-muted-foreground leading-relaxed">Охлаждение, мягкий уход; на короткое время избегать УФ и сильных пилингов.</p>
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
                <span className="text-sm font-bold text-yellow-700">Премиум-технология</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Почему александритовый лазер часто дороже?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Технология и аппарат',
                  text: 'Motus Moveo AX - это высококачественная александритовая система. Протоколы Moveo (in-motion/многопроходный при Low-Fluence) позволяют проводить комфортные, безопасные процедуры — особенно в чувствительных зонах. Стоимость приобретения/обслуживания выше.',
                  color: 'yellow'
                },
                {
                  title: 'Применимость',
                  text: '755 нм имеет высокое поглощение меланином — поэтому часто предпочтителен для более тонких, темных волос.',
                  color: 'yellow'
                },
                {
                  title: 'Динамика сеансов',
                  text: 'При подходящих показаниях могут быстро появляться видимые результаты; в целом необходимо несколько сеансов (обычно с интервалом 4–6 недель).',
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
                      <h3 className="font-bold text-yellow-800 mb-2 text-lg">💡 Классификация</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Александритовый лазер - широко распространенный премиальный вариант, особенно для более светлых типов кожи; для очень темных типов кожи часто выделяют 1064 нм (Nd:YAG).
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
                <span className="text-sm font-bold text-green-700">Безопасность прежде всего</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Безопасность, риски и противопоказания
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
                      <h3 className="font-bold text-green-700 mb-2 text-lg">✅ Типичные и временные:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Покраснение/ощущение тепла, возможно легкая отечность (проходит в течение нескольких часов до 1–2 дней).
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
                      <h3 className="font-bold text-orange-700 mb-2 text-lg">⚠️ Редко:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Раздражения, временные изменения пигментации; очень редко парадоксальный рост волос (тонкий пушок по краям зоны).
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
                    🚫 Временно не подходит:
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-12">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Свежий сильный загар</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Активные воспаления кожи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Беременность (принцип предосторожности)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Фотосенсибилизирующие медикаменты</span>
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
                      <h3 className="font-bold mb-3 text-xl">🛡️ Наши меры:</h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        Тест кожи, выбор аппарата, контактное охлаждение и индивидуальные параметры для каждого сеанса.
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
                <span className="text-sm font-bold text-primary">FAQ</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-muted-foreground">Ответы на самые важные вопросы</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: 'Один метод принципиально лучше другого?',
                  a: 'Нет. Обе системы эффективны. Мы выбираем лучший вариант для каждого человека и сеанса, основываясь на вашем типе кожи, цвете волос и зоне обработки.'
                },
                {
                  q: 'Больно ли делать лазерную эпиляцию?',
                  a: 'Ощущения индивидуальны. Контактное охлаждение делает сеанс хорошо переносимым для большинства. Многие описывают это как легкое покалывание или теплое ощущение.'
                },
                {
                  q: 'Можно ли начинать летом?',
                  a: 'Да, с ограничениями: по возможности избегать солнца/загара; возможно консервативные настройки или перенос сеанса. Мы проконсультируем вас индивидуально о лучшей стратегии.'
                },
                {
                  q: 'Работает ли на очень тонких, седых или рыжих волосах?',
                  a: 'Для очень светлых/седых/рыжих волос эффективность ограничена (мало/нет пигмента). Мы обсудим альтернативы и реалистичные ожидания во время консультации.'
                },
                {
                  q: 'Сколько сеансов мне понадобится?',
                  a: 'Обычно минимум 6, иногда больше. Интервалы 4–6 недель, в зависимости от зоны и динамики. Точное количество зависит от вашего типа волос, типа кожи и обрабатываемой зоны.'
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
              <span className="text-sm font-bold">Персональная консультация</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Готовы к персональной консультации?
            </h2>

            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Запишитесь на прием в нашу студию в Мюнхен-Haidhausen. Мы проанализируем ваш тип кожи и волос и порекомендуем оптимальный лазерный метод для вас.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 text-lg px-8 py-6"
                onClick={() => window.open('https://beauty.dikidi.net/#widget=185505', '_blank')}
              >
                Записаться на прием
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all hover:scale-105 text-lg px-8 py-6"
                onClick={() => window.location.href = '/laser-haarentfernung-muenchen'}
              >
                Подробнее о лазерной эпиляции
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AlexandritVsDiodenlaser;
