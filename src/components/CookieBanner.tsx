import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  useEffect(() => {
    // Проверяем, был ли уже сделан выбор
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Небольшая задержка перед показом баннера для лучшего UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);

    // Здесь можно инициализировать Google Analytics и другие сервисы
    initializeAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const initializeAnalytics = () => {
    // Инициализация Google Analytics (если ID задан)
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-500">
      <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-sm border-2 border-rose-gold/20 shadow-2xl">
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4">
            {/* Cookie Icon */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold/20 to-primary/20 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-rose-gold" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                  {t('cookies.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('cookies.description')}{' '}
                  <Link
                    to={`${langPrefix}/datenschutz`}
                    className="text-rose-gold hover:underline font-medium"
                  >
                    {t('cookies.privacy_policy')}
                  </Link>
                  .
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="bg-gradient-to-r from-rose-gold to-primary hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  {t('cookies.accept')}
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="border-2 border-muted hover:border-rose-gold/50 hover:bg-accent/50 font-semibold transition-all"
                >
                  {t('cookies.decline')}
                </Button>
                <Button
                  onClick={() => setIsVisible(false)}
                  variant="ghost"
                  size="sm"
                  className="sm:ml-auto hover:bg-accent/50"
                  aria-label={t('cookies.close')}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Additional Info */}
              <p className="text-xs text-muted-foreground">
                {t('cookies.info')}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;
