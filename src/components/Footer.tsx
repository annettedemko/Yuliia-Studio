import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
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

  const isHomePage = location.pathname === langPrefix || location.pathname === '/';

  return (
    <footer className={`bg-primary text-primary-foreground ${isHomePage ? 'mt-[9vh]' : ''}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Yuliia Cheporska Studio</h3>
            <p className="text-primary-foreground/80 text-sm">
              {t('footer.studio.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-rose-gold flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
                >
                  Elsässer Straße 33, 81667 München
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-rose-gold flex-shrink-0" />
                <a
                  href="tel:+4915206067810"
                  className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
                >
                  +49 152 06067810
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-rose-gold flex-shrink-0" />
                <a
                  href="mailto:Yulachip@icloud.com"
                  className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
                >
                  Yulachip@icloud.com
                </a>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.instagram.com/yuliia_cheporska_studio?igsh=b2oyaHJnNWNrazNt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-110"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services.title')}</h4>
            <div className="flex flex-col space-y-2">
              <Link
                to={withLang('/laser-haarentfernung-muenchen')}
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                {t('footer.services.laser')}
              </Link>
              <Link
                to={withLang('/icoone-laser-muenchen')}
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                {t('footer.services.icoone')}
              </Link>
              <Link
                to={withLang('/redtouch-laser-muenchen')}
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                {t('footer.services.redtouch')}
              </Link>
              <Link
                to={withLang('/manikuere-pedikuere-muenchen')}
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                {t('footer.services.nails')}
              </Link>
              <Link
                to={withLang('/services')}
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors font-medium"
              >
                {t('footer.services.all')}
              </Link>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal.title')}</h4>
            <div className="flex flex-col space-y-2">
              <Link
                to={withLang('/kontakt')}
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                {t('footer.legal.contact')}
              </Link>
              <Link
                to={withLang('/impressum')}
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                {t('footer.legal.imprint')}
              </Link>
              <Link
                to={withLang('/datenschutzerklaerung')}
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                {t('footer.legal.privacy')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;