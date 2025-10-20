import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { getMetaTags } from '@/seo/metaTags';

interface PageHelmetProps {
  /** Optional: Override page path (useful for custom routing) */
  pagePath?: string;
}

/**
 * PageHelmet component that automatically sets page title and meta description
 * based on current URL and language (de/ru)
 */
export const PageHelmet = ({ pagePath }: PageHelmetProps) => {
  const location = useLocation();
  const pathname = pagePath || location.pathname;

  // Determine current language from URL
  const currentLang = pathname.startsWith('/ru') ? 'ru' : 'de';

  // Get meta tags for this page and language
  const { title, description } = getMetaTags(pathname, currentLang);

  // Get base URL
  const baseUrl = 'https://www.munchen-beauty.de';

  // Get path without language prefix for canonical URL
  const pathWithoutLang = pathname.replace(/^\/(de|ru)/, '') || '/';
  const canonicalUrl = `${baseUrl}/${currentLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={currentLang === 'de' ? 'de_DE' : 'ru_RU'} />
      <meta property="og:image" content="https://www.munchen-beauty.de/logo2.jpg" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};
