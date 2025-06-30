
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ar' | 'he' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الصفحة الرئيسية',
    aboutUs: 'من نحن؟',
    initiative: 'نص المبادرة',
    news: 'أخبار وأنشطة',
    contact: 'تواصل معنا',
    
    // Home page
    siteTitle: 'مبادرة جسور التصالح والسلام',
    heroTitle: 'مبادرة جسور التصالح والسلام',
    heroSubtitle: 'مبادرة سياسية مستقلة من القائمة العربية الموحدة لبناء جسور التفاهم والسلام',
    latestNews: 'آخر الأخبار والأنشطة',
    readMore: 'اقرأ المزيد',
    
    // About us
    introduction: 'مقدمة',
    visionGoals: 'الرؤية والأهداف',
    initiativeFounder: 'صاحب المبادرة: النائب منصور عباس',
    
    // Initiative
    initiativeText: 'نص المبادرة',
    downloadPdf: 'تحميل المبادرة (PDF)',
    
    // Contact
    contactUs: 'تواصل معنا',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    address: 'العنوان'
  },
  he: {
    // Navigation
    home: 'דף הבית',
    aboutUs: 'אודותינו',
    initiative: 'טקסט היוזמה',
    news: 'חדשות ופעילויות',
    contact: 'צור קשר',
    
    // Home page
    siteTitle: 'יוזמת גשרים של פיוס ושלום',
    heroTitle: 'יוזמת גשרים של פיוס ושלום',
    heroSubtitle: 'יוזמה פוליטית עצמאית מהרשימה הערבית המשותפת לבניית גשרים של הבנה ושלום',
    latestNews: 'חדשות ופעילויות אחרונות',
    readMore: 'קרא עוד',
    
    // About us
    introduction: 'הקדמה',
    visionGoals: 'חזון ומטרות',
    initiativeFounder: 'יוזם המבצע: חבר הכנסת מנסור עבאס',
    
    // Initiative
    initiativeText: 'טקסט היוזמה',
    downloadPdf: 'הורד את היוזמה (PDF)',
    
    // Contact
    contactUs: 'צור קשר',
    email: 'דוא"ל',
    phone: 'טלפון',
    address: 'כתובת'
  },
  en: {
    // Navigation
    home: 'Home',
    aboutUs: 'About Us',
    initiative: 'Initiative Text',
    news: 'News & Activities',
    contact: 'Contact Us',
    
    // Home page
    siteTitle: 'Bridges of Reconciliation and Peace Initiative',
    heroTitle: 'Bridges of Reconciliation and Peace Initiative',
    heroSubtitle: 'An independent political initiative from the Joint Arab List to build bridges of understanding and peace',
    latestNews: 'Latest News & Activities',
    readMore: 'Read More',
    
    // About us
    introduction: 'Introduction',
    visionGoals: 'Vision & Goals',
    initiativeFounder: 'Initiative Founder: MK Mansour Abbas',
    
    // Initiative
    initiativeText: 'Initiative Text',
    downloadPdf: 'Download Initiative (PDF)',
    
    // Contact
    contactUs: 'Contact Us',
    email: 'Email',
    phone: 'Phone',
    address: 'Address'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    // First check localStorage
    const stored = localStorage.getItem('language') as Language;
    if (stored && ['ar', 'he', 'en'].includes(stored)) {
      return stored;
    }
    
    // Then check browser language
    const browserLang = navigator.language.toLowerCase().split('-')[0];
    if (browserLang === 'ar') return 'ar';
    if (browserLang === 'he') return 'he';
    return 'en';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  // Save language preference whenever it changes
  React.useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
