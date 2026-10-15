import type { Language } from '../context/LanguageContext';

export const languages: Language[] = ['en', 'ar', 'he'];
export const pageNames = ['', 'about', 'initiative', 'news', 'contact'] as const;

const copy = {
  en: {
    site: 'Bridges of Reconciliation and Peace Initiative',
    pages: ['Home', 'About Us', 'Initiative Text', 'News & Activities', 'Contact Us'],
    descriptions: [
      'An initiative for a peaceful resolution and reconciliation between the Israeli and Palestinian peoples.',
      'Learn about the initiative, its vision and goals, and its founder, MK Mansour Abbas.',
      'Read and download the full initiative in Arabic, Hebrew, and English.',
      'Follow the latest news, interviews, and activities of the Bridges of Reconciliation and Peace Initiative.',
      'Contact MK Mansour Abbas and his team about the Bridges of Reconciliation and Peace Initiative.',
    ],
  },
  ar: {
    site: 'مبادرة جسور التصالح والسلام',
    pages: ['الصفحة الرئيسية', 'من نحن؟', 'نص المبادرة', 'أخبار وأنشطة', 'تواصل معنا'],
    descriptions: [
      'مبادرة للتسوية السلمية والتصالح بين الشعبين الإسرائيلي والفلسطيني.',
      'تعرف على المبادرة ورؤيتها وأهدافها وصاحب المبادرة النائب منصور عباس.',
      'اقرأ وحمّل النص الكامل للمبادرة بالعربية والعبرية والإنجليزية.',
      'تابع آخر أخبار ومقابلات وأنشطة مبادرة جسور التصالح والسلام.',
      'تواصل مع النائب منصور عباس وفريقه حول مبادرة جسور التصالح والسلام.',
    ],
  },
  he: {
    site: 'יוזמת גשרים של פיוס ושלום',
    pages: ['דף הבית', 'אודותינו', 'טקסט היוזמה', 'חדשות ופעילויות', 'צור קשר'],
    descriptions: [
      'יוזמה להסדר בדרכי שלום ולפיוס בין העם הישראלי לעם הפלסטיני.',
      'הכירו את היוזמה, חזונה ומטרותיה ואת יוזם היוזמה, חבר הכנסת מנסור עבאס.',
      'קראו והורידו את הטקסט המלא של היוזמה בערבית, בעברית ובאנגלית.',
      'עקבו אחר החדשות, הראיונות והפעילויות של יוזמת גשרים של פיוס ושלום.',
      'צרו קשר עם חבר הכנסת מנסור עבאס וצוותו בנושא יוזמת גשרים של פיוס ושלום.',
    ],
  },
};

export function pagePath(language: Language, name: string) {
  return `${language === 'en' ? '' : `${language}/`}${name ? `${name}/` : ''}`;
}

export function metadata(language: Language, pathname: string) {
  const name = pathname.replace(/^\/|\/$/g, '');
  const index = pageNames.findIndex(page => page === name);
  const text = copy[language];
  const origin = (import.meta.env.VITE_SITE_URL || 'https://jusor-initiative.org').replace(/\/$/, '');
  return {
    title: index === -1 ? `404 | ${text.site}` : `${text.pages[index]} | ${text.site}`,
    description: index === -1 ? text.site : text.descriptions[index],
    canonical: `${origin}/${pagePath(language, name)}`,
    alternates: languages.map(lang => ({ language: lang, href: `${origin}/${pagePath(lang, name)}` })),
    image: `${origin}/jusorImage.png`,
    robots: index === -1 || import.meta.env.VITE_SITE_INDEXABLE !== 'true' ? 'noindex, follow' : 'index, follow',
  };
}
