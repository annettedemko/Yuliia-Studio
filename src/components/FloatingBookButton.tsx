import { Calendar } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { showBookingWidget } from '@/lib/altegioWidget';

/**
 * Custom floating booking button that replaces the default Altegio widget button.
 * Rose-gold themed, bilingual, hidden on admin pages.
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
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-rose-gold px-5 py-3 text-white font-semibold shadow-rose transition-all duration-300 hover:bg-rose-gold-dark hover:scale-105 hover:shadow-xl active:scale-95 md:px-6 md:py-3.5"
      aria-label={t('nav.button.book-appointment')}
    >
      <Calendar className="w-5 h-5" />
      <span className="text-sm md:text-base">{t('nav.button.book-appointment')}</span>
    </button>
  );
};

export default FloatingBookButton;
