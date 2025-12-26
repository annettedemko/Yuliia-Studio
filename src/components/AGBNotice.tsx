import { Link, useLocation } from 'react-router-dom';
import { Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AGBNotice = () => {
  const { t } = useLanguage();
  const location = useLocation();

  // Получаем текущий язык из URL
  const currentLang = location.pathname.startsWith('/ru') ? 'ru' : 'de';
  const langPrefix = `/${currentLang}`;

  // Функция для добавления языкового префикса к ссылкам
  const withLang = (path: string) => {
    if (path === '/') return langPrefix;
    return `${langPrefix}${path}`;
  };

  return (
    <div className="bg-accent/30 border-l-4 border-rose-gold py-3 px-4 mb-8">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-rose-gold flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          <strong className="font-semibold text-primary">{t('agb.notice.title')}:</strong>{' '}
          {t('agb.notice.text')}{' '}
          <Link
            to={withLang('/agb')}
            className="text-rose-gold hover:underline font-medium"
          >
            {t('agb.notice.link')}
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default AGBNotice;
