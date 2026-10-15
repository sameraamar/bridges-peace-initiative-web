
import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, languageUrl } = useLanguage();

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'ar', name: 'Arabic', nativeName: 'عربي' },
    { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
    { code: 'en', name: 'English', nativeName: 'English' }
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          size="sm"
          asChild
          className={`text-sm ${language === lang.code ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-green-50'}`}
        >
          <a href={languageUrl(lang.code)} hrefLang={lang.code} lang={lang.code} aria-current={language === lang.code ? 'true' : undefined}>
            {lang.nativeName}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
