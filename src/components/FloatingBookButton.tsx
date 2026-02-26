import { Calendar } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { showBookingWidget } from '@/lib/altegioWidget';

/**
 * Custom floating booking button that replaces the default Altegio widget button.
 * Premium glassmorphism design, bilingual, hidden on admin pages.
 */
const FloatingBookButton = () => {
  const { t } = useLanguage();
  const location = useLocation();

  // Hide on admin pages
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <button
      onClick={showBookingWidget}
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 rounded-full px-6 py-3.5 md:px-7 md:py-4 font-medium transition-all duration-500 ease-out hover:scale-105 active:scale-95 bg-white/70 backdrop-blur-xl border border-rose-gold/30 text-foreground shadow-[0_8px_32px_-8px_rgba(181,131,141,0.35)] hover:shadow-[0_12px_40px_-8px_rgba(181,131,141,0.5)] hover:border-rose-gold/50 hover:bg-white/85"
      aria-label={t('nav.button.book-appointment')}
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-rose-gold to-rose-gold-dark text-white transition-transform duration-500 group-hover:rotate-12">
        <Calendar className="w-4 h-4" />
      </span>
      <span className="text-sm md:text-base tracking-wide">{t('nav.button.book-appointment')}</span>
    </button>
  );
};

export default FloatingBookButton;
