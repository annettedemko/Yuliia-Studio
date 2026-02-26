import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ConsentMapProps {
  className?: string;
  height?: string;
}

const MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2662!2d11.654647!3d48.120969!3m2!1i1024!2i768!4f13.1!3m6!1m2!1s0x0%3A0x9a465969a059dfde!2sYuliia%20Cheporska%20Studio!3m2!1sde!2sde';

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
