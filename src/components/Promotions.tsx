import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { promotionsService } from '@/services/contentService';
import type { Promotion } from '@/types/admin';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Zap,
  Heart,
  Gift,
  Star,
  Phone,
  Calendar,
  ArrowRight,
  Clock
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, any> = {
  Sparkles,
  Zap,
  Heart,
  Gift,
  Star,
  Phone,
  Calendar,
  Clock
};

// Color mapping for backgrounds and accents
const colorMap: Record<string, { bg: string; text: string; accent: string; border: string }> = {
  'rose-gold': {
    bg: 'bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50',
    text: 'text-rose-800',
    accent: 'bg-rose-gold',
    border: 'border-rose-gold/30'
  },
  'primary': {
    bg: 'bg-gradient-to-br from-primary/10 via-primary/5 to-white',
    text: 'text-primary',
    accent: 'bg-primary',
    border: 'border-primary/30'
  },
  'gold': {
    bg: 'bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-50',
    text: 'text-amber-800',
    accent: 'bg-amber-500',
    border: 'border-amber-500/30'
  }
};

export const Promotions = () => {
  const { language } = useLanguage();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const data = await promotionsService.getActive();
        setPromotions(data);
      } catch (error) {
        console.error('Error fetching promotions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-white via-accent/5 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-gold"></div>
          </div>
        </div>
      </section>
    );
  }

  if (promotions.length === 0) {
    return null;
  }

  const title = language === 'ru' ? 'Специальные предложения' : 'Aktuelle Aktionen';
  const subtitle = language === 'ru'
    ? 'Не упустите возможность воспользоваться нашими выгодными предложениями!'
    : 'Nutzen Sie unsere exklusiven Angebote und profitieren Sie von attraktiven Rabatten!';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'ru'
      ? date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
      : date.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-accent/5 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-rose-gold animate-pulse mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              {title}
            </h2>
            <Sparkles className="w-8 h-8 text-rose-gold animate-pulse ml-3" />
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {promotions.map((promo, index) => {
            const Icon = iconMap[promo.icon || 'Sparkles'] || Sparkles;
            const colors = colorMap[promo.color || 'rose-gold'] || colorMap['rose-gold'];
            const isExpiringSoon = promo.valid_until &&
              new Date(promo.valid_until).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000;

            return (
              <Card
                key={promo.id}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${colors.border} overflow-hidden relative animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Discount Badge */}
                {(promo.discount_text_de || promo.discount_text_ru) && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className={`${colors.accent} text-white text-lg px-4 py-2 font-bold shadow-lg`}>
                      {language === 'ru' ? promo.discount_text_ru : promo.discount_text_de}
                    </Badge>
                  </div>
                )}

                <CardContent className={`p-8 ${colors.bg} h-full flex flex-col`}>
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-full ${colors.accent}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>
                    {language === 'ru' ? promo.title_ru : promo.title_de}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-grow">
                    {language === 'ru' ? promo.description_ru : promo.description_de}
                  </p>

                  {/* Expiry Date */}
                  {promo.valid_until && (
                    <div className={`flex items-center gap-2 mb-6 ${isExpiringSoon ? 'animate-pulse' : ''}`}>
                      <Clock className={`w-4 h-4 ${isExpiringSoon ? 'text-red-500' : colors.text}`} />
                      <span className={`text-sm font-semibold ${isExpiringSoon ? 'text-red-600' : colors.text}`}>
                        {language === 'ru' ? 'До' : 'Gültig bis'} {formatDate(promo.valid_until)}
                      </span>
                    </div>
                  )}

                  {!promo.valid_until && (
                    <div className={`flex items-center gap-2 mb-6`}>
                      <Star className={`w-4 h-4 ${colors.text}`} />
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        {language === 'ru' ? 'Бессрочное предложение' : 'Dauerhaft gültig'}
                      </span>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${colors.accent} text-white hover:opacity-90 transition-all group-hover:scale-105`}
                    size="lg"
                    asChild
                  >
                    <a href="tel:+4915206067810" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      <span>{language === 'ru' ? 'Записаться' : 'Termin buchen'}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            {language === 'ru'
              ? 'Хотите узнать больше о наших акциях?'
              : 'Haben Sie Fragen zu unseren Angeboten?'}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-gold to-pink-500 text-white hover:shadow-xl hover:scale-105 transition-all"
            asChild
          >
            <a href="tel:+4915206067810" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{language === 'ru' ? 'Позвонить' : 'Jetzt anrufen'}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
