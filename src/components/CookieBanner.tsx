import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import CookieSettings from './CookieSettings';
import {
  hasConsent,
  acceptAllCookies,
  acceptNecessaryCookies,
  initializeAnalytics
} from '@/lib/cookieConsent';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // Get current language from URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  useEffect(() => {
    // Check if user has already made a consent choice
    if (!hasConsent()) {
      // Small delay before showing banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // User has made a choice, initialize analytics if consented
      initializeAnalytics();
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    initializeAnalytics();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    acceptNecessaryCookies();
    setIsVisible(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
    // If user saved preferences in settings, hide banner
    if (hasConsent()) {
      setIsVisible(false);
      initializeAnalytics();
    }
  };

  if (!isVisible) return null;

  return (
    <>
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
                      to={`${langPrefix}/datenschutzerklaerung`}
                      className="text-rose-gold hover:underline font-medium"
                    >
                      {t('cookies.privacy_policy')}
                    </Link>
                    .
                  </p>
                </div>

                {/* Buttons - Equal weight and prominence */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Accept All - Primary button */}
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-gradient-to-r from-rose-gold to-primary hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {t('cookies.accept')}
                  </Button>

                  {/* Reject/Necessary Only - Equal prominence */}
                  <Button
                    onClick={handleRejectAll}
                    className="bg-background hover:bg-accent border-2 border-rose-gold/50 hover:border-rose-gold text-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {t('cookies.necessary')}
                  </Button>

                  {/* Settings - Secondary but visible */}
                  <Button
                    onClick={handleOpenSettings}
                    variant="outline"
                    className="border-2 border-muted hover:border-rose-gold/50 hover:bg-accent/50 font-semibold transition-all"
                  >
                    {t('cookies.settings')}
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

      {/* Cookie Settings Modal */}
      <CookieSettings isOpen={showSettings} onClose={handleCloseSettings} />
    </>
  );
};

export default CookieBanner;
