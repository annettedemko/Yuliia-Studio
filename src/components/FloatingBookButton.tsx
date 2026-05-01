import { Calendar } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { showBookingWidget } from '@/lib/altegioWidget';

/**
 * Premium floating booking button with animated gradient border,
 * shimmer sweep, and layered glass design.
 */
const FloatingBookButton = () => {
  const { t } = useLanguage();
  const location = useLocation();

  if (location.pathname.startsWith('/admin') || location.pathname.includes('/natrix-conference')) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40">
      {/* Outer glow pulse */}
      <div className="absolute inset-0 rounded-full bg-rose-gold/20 blur-xl animate-booking-glow"></div>

      {/* Rotating gradient border */}
      <div className="floating-btn-border relative rounded-full p-[2px]">
        <button
          onClick={showBookingWidget}
          className="floating-btn-inner relative group flex items-center gap-3 rounded-full pl-4 pr-6 py-3 md:pl-5 md:pr-7 md:py-3.5 overflow-hidden transition-all duration-300 ease-out hover:scale-[1.04] active:scale-[0.97]"
          aria-label={t('nav.button.book-appointment')}
        >
          {/* Shimmer sweep */}
          <div className="absolute inset-0 floating-btn-shimmer pointer-events-none"></div>

          {/* Icon */}
          <span className="relative z-10 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/[0.12] border border-white/[0.15] backdrop-blur-sm transition-all duration-400 group-hover:bg-white/[0.2] group-hover:scale-110 group-hover:rotate-6">
            <Calendar className="w-[18px] h-[18px] md:w-5 md:h-5 text-white drop-shadow-sm" />
          </span>

          {/* Text */}
          <span className="relative z-10 text-sm md:text-[15px] font-semibold tracking-[0.04em] text-white drop-shadow-sm">
            {t('nav.button.book-appointment')}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingBookButton;
