import { useState, useEffect, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getConsentPreferences, type ConsentCategories } from '@/lib/cookieConsent';

interface ConsentMapProps {
  className?: string;
  height?: string;
}

const MAPS_EMBED_URL = 'https://www.google.com/maps?q=Yuliia+Cheporska+Studio,+Elsässer+Straße+33,+81667+München&z=17&output=embed';

/**
 * Google Maps with cookie consent integration for GDPR compliance.
 * If "Externe Medien" is enabled in cookie settings → shows map immediately.
 * Otherwise shows a placeholder with a one-time "Load map" button.
 */
const ConsentMap = ({ className = '', height = 'h-[300px] md:h-[450px]' }: ConsentMapProps) => {
  const { t } = useLanguage();
  const [showMap, setShowMap] = useState(() => {
    return getConsentPreferences()?.externalMedia === true;
  });

  const handleConsentChanged = useCallback((e: Event) => {
    const detail = (e as CustomEvent<ConsentCategories | null>).detail;
    if (detail?.externalMedia) {
      setShowMap(true);
    } else {
      setShowMap(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('consentChanged', handleConsentChanged);
    return () => window.removeEventListener('consentChanged', handleConsentChanged);
  }, [handleConsentChanged]);

  if (showMap) {
    return (
      <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          className={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('map.iframe.title')}
        />
      </div>
    );
  }

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <div
        className={`${height} bg-accent/30 flex flex-col items-center justify-center p-6 text-center`}
      >
        <div className="w-16 h-16 rounded-full bg-rose-gold/10 flex items-center justify-center mb-4">
          <MapPin className="w-8 h-8 text-rose-gold" />
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">
          {t('map.consent.title')}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 max-w-md">
          {t('map.consent.description')}
        </p>
        <Button
          onClick={() => setShowMap(true)}
          className="bg-rose-gold/10 hover:bg-rose-gold/20 border-2 border-rose-gold text-foreground font-semibold"
        >
          {t('map.consent.button')}
        </Button>
        <p className="text-xs text-muted-foreground mt-3 max-w-sm">
          {t('map.consent.settings_hint')}
        </p>
      </div>
    </div>
  );
};

export default ConsentMap;
