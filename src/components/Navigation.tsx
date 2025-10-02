import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dekaDropdownOpen, setDekaDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Über uns' },
    { href: '/services', label: 'Leistungen' },
    { href: '/preis', label: 'Preise' },
  ];

  const dekaDevices = [
    { href: '/physiq360', label: 'Physiq 360' },
    { href: '/motus-ax', label: 'Motus AX' },
    { href: '/motus-pro', label: 'Motus PRO' },
    { href: '/redtouch-pro', label: 'RedTouch PRO' },
    { href: '/again-cos', label: 'Again Cos' },
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
    }, 1000); // 1 секунда задержки
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo2.jpg"
              alt="Yuliia Cheporska Studio"
              className="h-14 w-auto"
            />
            {/* DEKA Logo - на всех DEKA страницах */}
            {(location.pathname === '/deka' ||
              location.pathname === '/DEKA' ||
              location.pathname === '/deka-day' ||
              location.pathname === '/kopie-deka-day-anna' ||
              location.pathname === '/deka-geraeteverkauf' ||
              location.pathname === '/physiq360' ||
              location.pathname === '/redtouch-pro' ||
              location.pathname === '/motus-ax' ||
              location.pathname === '/motus-pro' ||
              location.pathname === '/again-cos') && (
              <div className="border border-primary rounded-lg p-2 bg-white/5 backdrop-blur-sm">
                <img
                  src="/DEKA logo.png"
                  alt="DEKA Logo"
                  className="h-10 w-auto"
                  style={{
                    filter: 'brightness(1.2) saturate(1.1)',
                  }}
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-rose-gold",
                  isActive(item.href) ? "text-rose-gold" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* DEKA Geräte Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/deka-geraeteverkauf"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-rose-gold flex items-center gap-1",
                  (isActive('/deka-geraeteverkauf') ||
                   dekaDevices.some(device => isActive(device.href)))
                    ? "text-rose-gold" : "text-foreground"
                )}
              >
                DEKA Geräte
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  dekaDropdownOpen ? "rotate-180" : ""
                )} />
              </Link>

              {/* Dropdown Menu */}
              {dekaDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to="/deka-geraeteverkauf"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-rose-gold/10 hover:text-rose-gold transition-colors"
                  >
                    Alle DEKA Geräte
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {dekaDevices.map((device) => (
                    <Link
                      key={device.href}
                      to={device.href}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors hover:bg-rose-gold/10 hover:text-rose-gold",
                        isActive(device.href) ? "text-rose-gold bg-rose-gold/5" : "text-foreground"
                      )}
                    >
                      {device.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <Button
                variant="outline"
                size="sm"
                className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white transition-colors"
                asChild
              >
                <a href="tel:+4915206067810">
                  <Phone className="w-4 h-4 mr-2" />
                  Anrufen
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-gradient-hero text-white border-none hover:opacity-90"
                asChild
              >
                <a href="https://beauty.dikidi.net/#widget=185505" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Termin buchen
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-6 px-4">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-rose-gold py-2 px-4 rounded-lg text-center",
                    isActive(item.href) ? "text-rose-gold bg-rose-gold/10" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* DEKA Geräte Section for Mobile */}
              <div className="border-t border-gray-200 pt-6 mt-4">
                <Link
                  to="/deka-geraeteverkauf"
                  className={cn(
                    "text-base font-medium transition-colors hover:text-rose-gold block mb-4 py-2 px-4 rounded-lg text-center",
                    (isActive('/deka-geraeteverkauf') ||
                     dekaDevices.some(device => isActive(device.href)))
                      ? "text-rose-gold bg-rose-gold/10" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  DEKA Geräte
                </Link>
                <div className="flex flex-col space-y-3 pl-4">
                  {dekaDevices.map((device) => (
                    <Link
                      key={device.href}
                      to={device.href}
                      className={cn(
                        "text-sm transition-colors hover:text-rose-gold py-2 px-3 rounded-md",
                        isActive(device.href) ? "text-rose-gold bg-rose-gold/5" : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {device.label}
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
                  <a href="tel:+4915206067810">
                    <Phone className="w-5 h-5 mr-2" />
                    Anrufen
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-gradient-hero text-white border-none w-full py-4 text-base font-medium"
                  asChild
                >
                  <a href="https://beauty.dikidi.net/#widget=185505" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    Termin buchen
                  </a>
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