import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLang: 'de' | 'ru') => {
    if (newLang !== language) {
      // Update localStorage directly first
      localStorage.setItem('language', newLang);
      // Then force page reload
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'de' ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleLanguageChange('de')}
        className="h-8 px-3 text-xs font-medium"
      >
        🇩🇪 DE
      </Button>
      <Button
        variant={language === 'ru' ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleLanguageChange('ru')}
        className="h-8 px-3 text-xs font-medium"
      >
        🇷🇺 RU
      </Button>
    </div>
  );
};

export default LanguageSwitcher;