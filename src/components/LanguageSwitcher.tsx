import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'de' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('de')}
        className="h-8 px-3 text-xs font-medium"
      >
        🇩🇪 DE
      </Button>
      <Button
        variant={language === 'ru' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className="h-8 px-3 text-xs font-medium"
      >
        🇷🇺 RU
      </Button>
    </div>
  );
};

export default LanguageSwitcher;