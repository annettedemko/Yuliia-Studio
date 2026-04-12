import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown, Calendar, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { showBookingWidget } from '@/lib/altegioWidget';
import { pushToDataLayer } from '@/lib/cookieConsent';

const Navigation = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dekaDropdownOpen, setDekaDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  // Функция для добавления языкового префикса к ссылкам
  const withLang = (path: string) => {
    // Для главной страницы возвращаем просто префикс языка
    if (path === '/') return langPrefix;
    // Для остальных страниц добавляем префикс
    return `${langPrefix}${path}`;
  };

  const navItems = [
    { href: '/', labelKey: 'nav.home' },
    { href: '/about', labelKey: 'nav.about' },
    { href: '/preis', labelKey: 'nav.pricing' },
    { href: '/kontakt', labelKey: 'nav.contact' },
  ];

  const services = [
    { href: '/laser-haarentfernung-muenchen', labelKey: 'nav.services.laser' },
    { href: '/alexandrit-gegen-diodenlaser', labelKey: 'nav.services.alexandrit-vs-diode' },
    { href: '/icoone-laser-muenchen', labelKey: 'nav.services.icoone' },
    { href: '/redtouch-laser-muenchen', labelKey: 'nav.services.redtouch' },
    { href: '/manikuere-pedikuere-muenchen', labelKey: 'nav.services.nails' },
  ];

  const natrixDevices = [
    { href: '/natrix-diodenlaser', labelKey: 'nav.natrix.diodenlaser' },
    { href: '/natrix-ipl', labelKey: 'nav.natrix.ipl' },
    { href: '/natrix-spheresculpt', labelKey: 'nav.natrix.spheresculpt' },
    { href: '/natrix-rf-microneedling', labelKey: 'nav.natrix.rf' },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDekaDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDekaDropdownOpen(false);
    }, 300); // 300ms задержки
  };

  const handleServicesDropdownEnter = () => {
    if (servicesDropdownTimeoutRef.current) {
      clearTimeout(servicesDropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesDropdownLeave = () => {
    servicesDropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300); // 300ms задержки
  };

  // Block body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (servicesDropdownTimeoutRef.current) {
        clearTimeout(servicesDropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (href: string) => location.pathname === withLang(href);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={withLang('/')} className="flex items-center space-x-2">
            <img
              src="/logo2.jpg"
              alt="Yuliia Cheporska Studio"
              className="h-16 w-auto"
            />
            {/* DEKA Logo - на всех DEKA страницах */}
            {(location.pathname.endsWith('/deka') ||
              location.pathname.endsWith('/DEKA') ||
              location.pathname.endsWith('/deka-day') ||
              location.pathname.endsWith('/deka-anna') ||
              location.pathname.endsWith('/deka-lera') ||
              location.pathname.endsWith('/deka-liudmila') ||
              location.pathname.endsWith('/kopie-deka-day-anna') ||
              location.pathname.endsWith('/deka-geraeteverkauf') ||
              location.pathname.endsWith('/physiq360') ||
              location.pathname.endsWith('/redtouch-pro') ||
              location.pathname.endsWith('/motus-ax') ||
              location.pathname.endsWith('/motus-pro') ||
              location.pathname.endsWith('/again-cos')) && (
              <div className="border border-primary rounded-lg p-1.5 bg-white/5 backdrop-blur-sm overflow-hidden">
                <img
                  src="/DEKA logo.png"
                  alt="DEKA Logo"
                  className="h-12 w-auto"
                  style={{
                    filter: 'brightness(1.2) saturate(1.1)',
                  }}
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={withLang(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-rose-gold",
                  isActive(item.href) ? "text-rose-gold" : "text-foreground"
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}

            {/* Planner YC */}
            <Link
              to={withLang('/planner-yc')}
              className={cn(
                "text-sm font-medium transition-colors hover:text-rose-gold flex items-center gap-1",
                isActive('/planner-yc') ? "text-rose-gold" : "text-foreground"
              )}
            >
              <BookOpen className="w-3.5 h-3.5" />
              {t('nav.planner')}
              <span className="bg-rose-gold/15 text-rose-gold text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                {currentLang === 'ru' ? 'NEW' : 'NEU'}
              </span>
            </Link>

            {/* Leistungen Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesDropdownEnter}
              onMouseLeave={handleServicesDropdownLeave}
            >
              <Link
                to={withLang('/services')}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-rose-gold flex items-center gap-1",
                  (isActive('/services') ||
                   services.some(service => isActive(service.href)))
                    ? "text-rose-gold" : "text-foreground"
                )}
              >
                {t('nav.services')}
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  servicesDropdownOpen ? "rotate-180" : ""
                )} />
              </Link>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={handleServicesDropdownEnter}
                  onMouseLeave={handleServicesDropdownLeave}
                >
                  <Link
                    to={withLang('/services')}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-rose-gold/10 hover:text-rose-gold transition-colors"
                  >
                    {t('nav.services.all')}
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={withLang(service.href)}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors hover:bg-rose-gold/10 hover:text-rose-gold",
                        isActive(service.href) ? "text-rose-gold bg-rose-gold/5" : "text-foreground"
                      )}
                    >
                      {t(service.labelKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Natrix Geräte Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to={withLang('/natrix-geraete')}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-rose-gold flex items-center gap-1",
                  (isActive('/natrix-geraete') ||
                   natrixDevices.some(device => isActive(device.href)))
                    ? "text-rose-gold" : "text-foreground"
                )}
              >
                {t('nav.natrix')}
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  dekaDropdownOpen ? "rotate-180" : ""
                )} />
              </Link>

              {dekaDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={withLang('/natrix-geraete')}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-rose-gold/10 hover:text-rose-gold transition-colors"
                  >
                    {t('nav.natrix.all')}
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {natrixDevices.map((device) => (
                    <Link
                      key={device.href}
                      to={withLang(device.href)}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors hover:bg-rose-gold/10 hover:text-rose-gold",
                        isActive(device.href) ? "text-rose-gold bg-rose-gold/5" : "text-foreground"
                      )}
                    >
                      {t(device.labelKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Events / Мероприятия */}
            <Link
              to={withLang('/natrix-conference')}
              className={cn(
                "text-sm font-medium transition-colors hover:text-rose-gold flex items-center gap-1",
                isActive('/natrix-conference') ? "text-rose-gold" : "text-foreground"
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              {t('nav.events')}
              <span className="bg-rose-gold/15 text-rose-gold text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                {currentLang === 'ru' ? 'NEW' : 'NEU'}
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-2">
              <LanguageSwitcher />
              <Button
                variant="outline"
                size="sm"
                className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white transition-colors h-8 px-3 text-xs"
                asChild
              >
                <a href="tel:+4915206067810" onClick={() => pushToDataLayer('phone_click', { event_category: 'contact', event_label: 'nav_desktop' })}>
                  <Phone className="w-3 h-3 mr-1" />
                  {t('nav.button.call')}
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-gradient-hero text-white border-none hover:opacity-90 h-8 px-3 text-xs"
                onClick={() => showBookingWidget()}
              >
                <Calendar className="w-3 h-3 mr-1" />
                {t('nav.button.appointment')}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isOpen ? t('nav.aria.close_menu') : t('nav.aria.open_menu')}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 border-t bg-background/95 backdrop-blur-md max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-4 px-4">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={withLang(item.href)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-rose-gold py-2 px-4 rounded-lg text-center",
                    isActive(item.href) ? "text-rose-gold bg-rose-gold/10" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              ))}

              {/* Planner YC - Mobile */}
              <Link
                to={withLang('/planner-yc')}
                className={cn(
                  "text-base font-medium transition-colors hover:text-rose-gold py-2 px-4 rounded-lg text-center flex items-center justify-center gap-2",
                  isActive('/planner-yc') ? "text-rose-gold bg-rose-gold/10" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                {t('nav.planner')}
                <span className="bg-rose-gold/15 text-rose-gold text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                  {currentLang === 'ru' ? 'NEW' : 'NEU'}
                </span>
              </Link>

              {/* Events - Mobile */}
              <Link
                to={withLang('/natrix-conference')}
                className={cn(
                  "text-base font-medium transition-colors hover:text-rose-gold py-2 px-4 rounded-lg text-center flex items-center justify-center gap-2",
                  isActive('/natrix-conference') ? "text-rose-gold bg-rose-gold/10" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                {t('nav.events')}
                <span className="bg-rose-gold/15 text-rose-gold text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                  {currentLang === 'ru' ? 'NEW' : 'NEU'}
                </span>
              </Link>

              {/* Natrix Geräte Section for Mobile */}
              <div className="border-t border-gray-200 pt-6 mt-4">
                <Link
                  to={withLang('/natrix-geraete')}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-widest block mb-3 py-1 px-4 text-center transition-colors",
                    (isActive('/natrix-geraete') ||
                     natrixDevices.some(device => isActive(device.href)))
                      ? "text-rose-gold" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.natrix')}
                </Link>
                <div className="flex flex-col space-y-1">
                  {natrixDevices.map((device) => (
                    <Link
                      key={device.href}
                      to={withLang(device.href)}
                      className={cn(
                        "text-sm transition-colors hover:text-rose-gold py-2.5 px-4 rounded-lg text-center",
                        isActive(device.href) ? "text-rose-gold bg-rose-gold/5" : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(device.labelKey)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Leistungen Section for Mobile */}
              <div className="border-t border-gray-200 pt-6 mt-4">
                <Link
                  to={withLang('/services')}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-widest block mb-3 py-1 px-4 text-center transition-colors",
                    (isActive('/services') ||
                     services.some(service => isActive(service.href)))
                      ? "text-rose-gold" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.services')}
                </Link>
                <div className="flex flex-col space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={withLang(service.href)}
                      className={cn(
                        "text-sm transition-colors hover:text-rose-gold py-2.5 px-4 rounded-lg text-center",
                        isActive(service.href) ? "text-rose-gold bg-rose-gold/5" : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(service.labelKey)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Buttons - Make them larger and more prominent */}
              <div className="flex flex-col space-y-3 mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white w-full py-4 text-base font-medium transition-colors"
                  asChild
                >
                  <a href="tel:+4915206067810" onClick={() => pushToDataLayer('phone_click', { event_category: 'contact', event_label: 'nav_mobile' })}>
                    <Phone className="w-5 h-5 mr-2" />
                    {t('nav.button.call')}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-gradient-hero text-white border-none w-full py-4 text-base font-medium"
                  onClick={() => showBookingWidget()}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('nav.button.book-appointment')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;