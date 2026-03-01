import { useState, useEffect, useCallback, useRef } from 'react';
import { Instagram, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getConsentPreferences, type ConsentCategories } from '@/lib/cookieConsent';

const ELFSIGHT_APP_ID = '5ae99363-feb3-4a1f-9d1e-16cb0c5f2a6b';
const ELFSIGHT_SCRIPT_SRC = 'https://static.elfsight.com/platform/platform.js';

/**
 * Elfsight Instagram Feed with cookie consent integration for GDPR compliance.
 * If "Externe Medien" is enabled in cookie settings → loads widget immediately.
 * Otherwise shows a placeholder with a one-time "Load" button.
 */
const ElfsightInstagram = () => {
  const { t } = useLanguage();
  const scriptLoadedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showWidget, setShowWidget] = useState(() => {
    return getConsentPreferences()?.externalMedia === true;
  });
  const [widgetReady, setWidgetReady] = useState(false);

  const loadElfsightScript = useCallback(() => {
    if (scriptLoadedRef.current) return;
    if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)) {
      scriptLoadedRef.current = true;
      return;
    }
    const script = document.createElement('script');
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
    scriptLoadedRef.current = true;
  }, []);

  const handleConsentChanged = useCallback((e: Event) => {
    const detail = (e as CustomEvent<ConsentCategories | null>).detail;
    if (detail?.externalMedia) {
      setShowWidget(true);
    } else {
      setShowWidget(false);
      setWidgetReady(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('consentChanged', handleConsentChanged);
    return () => window.removeEventListener('consentChanged', handleConsentChanged);
  }, [handleConsentChanged]);

  useEffect(() => {
    if (showWidget) {
      loadElfsightScript();
    }
  }, [showWidget, loadElfsightScript]);

  // Watch for Elfsight to populate the widget container
  useEffect(() => {
    if (!showWidget || widgetReady) return;

    const observer = new MutationObserver(() => {
      if (containerRef.current && containerRef.current.childElementCount > 0) {
        setWidgetReady(true);
        observer.disconnect();
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    // Fallback: mark ready after 8s even if observer didn't fire
    const timeout = setTimeout(() => {
      setWidgetReady(true);
      observer.disconnect();
    }, 8000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [showWidget, widgetReady]);

  if (showWidget) {
    return (
      <div className="relative min-h-[200px]">
        {/* Loading indicator shown until Elfsight populates the div */}
        {!widgetReady && (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin text-rose-gold mb-3" />
            <p className="text-sm">Instagram wird geladen…</p>
          </div>
        )}
        <div
          ref={containerRef}
          className={`elfsight-app-${ELFSIGHT_APP_ID}`}
        />
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="h-[300px] md:h-[400px] bg-accent/30 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-rose-gold/10 flex items-center justify-center mb-4">
          <Instagram className="w-8 h-8 text-rose-gold" />
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">
          {t('instagram.consent.title')}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 max-w-md">
          {t('instagram.consent.description')}
        </p>
        <Button
          onClick={() => setShowWidget(true)}
          className="bg-rose-gold/10 hover:bg-rose-gold/20 border-2 border-rose-gold text-foreground font-semibold"
        >
          {t('instagram.consent.button')}
        </Button>
        <p className="text-xs text-muted-foreground mt-3 max-w-sm">
          {t('instagram.consent.settings_hint')}
        </p>
      </div>
    </div>
  );
};

export default ElfsightInstagram;
