import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  // Helper function to add language prefix
  const withLang = (path: string) => {
    const prefix = language === 'ru' ? '/ru' : '/de';
    if (path === '/') return prefix;
    return `${prefix}${path}`;
  };

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link to={withLang('/')} className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
