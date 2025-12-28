import { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getConsentPreferences,
  saveConsentPreferences,
  acceptAllCookies,
  acceptNecessaryCookies,
  type ConsentCategories
} from '@/lib/cookieConsent';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettings = ({ isOpen, onClose }: CookieSettingsProps) => {
  const { t } = useLanguage();
  const [preferences, setPreferences] = useState<ConsentCategories>({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    // Load current preferences when modal opens
    if (isOpen) {
      const current = getConsentPreferences();
      if (current) {
        setPreferences(current);
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    saveConsentPreferences(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    acceptAllCookies();
    onClose();
  };

  const handleRejectAll = () => {
    acceptNecessaryCookies();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-background shadow-2xl">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold/20 to-primary/20 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-rose-gold" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  {t('cookies.settings.title')}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('cookies.settings.subtitle')}
                </p>
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="hover:bg-accent/50"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6">
            {t('cookies.settings.description')}
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-6">
            {/* Necessary Cookies */}
            <div className="border border-border rounded-lg p-4 bg-accent/5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary">
                      {t('cookies.settings.necessary.title')}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('cookies.settings.necessary.description')}
                  </p>
                </div>
                <div className="ml-4">
                  <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {t('cookies.settings.always_active')}
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-border rounded-lg p-4 bg-background">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart className="w-5 h-5 text-rose-gold" />
                    <h3 className="font-semibold text-primary">
                      {t('cookies.settings.analytics.title')}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t('cookies.settings.analytics.description')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('cookies.settings.analytics.details')}
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.analytics ? 'bg-rose-gold' : 'bg-muted'
                    }`}
                    role="switch"
                    aria-checked={preferences.analytics}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Info text */}
          <p className="text-xs text-muted-foreground mb-6">
            {t('cookies.settings.info')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleSave}
              className="bg-gradient-to-r from-rose-gold to-primary hover:opacity-90 text-white font-semibold"
            >
              {t('cookies.settings.save')}
            </Button>
            <Button
              onClick={handleAcceptAll}
              variant="outline"
              className="border-2 border-rose-gold/50 hover:border-rose-gold hover:bg-rose-gold/10 font-semibold"
            >
              {t('cookies.accept')}
            </Button>
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="border-2 border-muted hover:border-muted-foreground/50 hover:bg-accent font-semibold"
            >
              {t('cookies.necessary')}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieSettings;
