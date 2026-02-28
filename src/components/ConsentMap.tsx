import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ConsentMapProps {
  className?: string;
  height?: string;
}

const MAPS_EMBED_URL = 'https://www.google.com/maps?q=Yuliia+Cheporska+Studio,+Elsässer+Straße+33,+81667+München&z=17&output=embed';

/**
 * Google Maps with 2-click solution for GDPR compliance.
 * Shows a placeholder until the user consents to loading Google Maps.
 */
const ConsentMap = ({ className = '', height = 'h-[300px] md:h-[450px]' }: ConsentMapProps) => {
  const [consented, setConsented] = useState(false);
  const { t } = useLanguage();

  if (consented) {
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
          onClick={() => setConsented(true)}
          className="bg-rose-gold/10 hover:bg-rose-gold/20 border-2 border-rose-gold text-foreground font-semibold"
        >
          {t('map.consent.button')}
        </Button>
      </div>
    </div>
  );
};

export default ConsentMap;
