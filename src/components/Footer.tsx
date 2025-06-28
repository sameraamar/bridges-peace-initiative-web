
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'he';

  return (
    <footer className="bg-gray-50 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t('siteTitle')}
            </h3>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>
          
          <div className="border-t border-green-100 pt-4">
            <p className="text-sm text-gray-500">
              © 2024 {t('siteTitle')}. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
