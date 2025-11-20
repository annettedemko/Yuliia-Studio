import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Компонент для добавления hreflang тегов для SEO
 * Связывает немецкие и русские версии страниц
 */
export const HreflangTags = () => {
  const location = useLocation();
  const baseUrl = 'https://www.munchen-beauty.de';

  // Получаем путь без языкового префикса
  const getPathWithoutLang = (pathname: string) => {
    return pathname.replace(/^\/(de|ru)/, '') || '/';
  };

  // Определяем текущий язык
  const getCurrentLang = (pathname: string): 'de' | 'ru' => {
    if (pathname.startsWith('/ru')) return 'ru';
    return 'de';
  };

  const pathWithoutLang = getPathWithoutLang(location.pathname);
  const currentLang = getCurrentLang(location.pathname);

  // Формируем URL для обоих языков
  const deUrl = `${baseUrl}/de${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  const ruUrl = `${baseUrl}/ru${pathWithoutLang === '/' ? '' : pathWithoutLang}`;

  return (
    <Helmet>
      <link rel="alternate" hrefLang="de" href={deUrl} />
      <link rel="alternate" hrefLang="ru" href={ruUrl} />
      <link rel="alternate" hrefLang="x-default" href="https://www.munchen-beauty.de/" />
      <html lang={currentLang} />
    </Helmet>
  );
};
