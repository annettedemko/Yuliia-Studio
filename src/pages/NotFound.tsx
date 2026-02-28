import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Briefcase, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  const withLang = (path: string) => {
    const prefix = language === 'ru' ? '/ru' : '/de';
    if (path === '/') return prefix;
    return `${prefix}${path}`;
  };

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-accent/20 to-background pt-16 px-4">
      <div className="text-center max-w-md">
        {/* Decorative 404 */}
        <div className="mb-6">
          <span className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-rose-gold to-primary bg-clip-text text-transparent">
            404
          </span>
        </div>

        <h1 className="mb-3 text-2xl sm:text-3xl font-bold text-primary">
          {t('notfound.title')}
        </h1>
        <p className="mb-8 text-base text-muted-foreground leading-relaxed">
          {t('notfound.message')}
        </p>

        {/* Navigation links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-rose-gold hover:bg-rose-gold-dark text-white shadow-rose">
            <Link to={withLang('/')}>
              <Home className="w-4 h-4 mr-2" />
              {t('notfound.home')}
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-rose-gold/10 border-rose-gold/30 text-rose-gold hover:bg-rose-gold/20">
            <Link to={withLang('/services')}>
              <Briefcase className="w-4 h-4 mr-2" />
              {t('notfound.services')}
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-muted/10 border-muted hover:border-rose-gold/30 hover:bg-rose-gold/10">
            <Link to={withLang('/kontakt')}>
              <Phone className="w-4 h-4 mr-2" />
              {t('notfound.contact')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
