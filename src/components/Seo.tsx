import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { metadata } from '../lib/seo';

export function Seo() {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  useEffect(() => {
    const data = metadata(language, pathname);
    document.title = data.title;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
    for (const [selector, value, attribute] of [
      ['meta[name="description"]', data.description, 'content'],
      ['meta[name="robots"]', data.robots, 'content'],
      ['meta[property="og:title"]', data.title, 'content'],
      ['meta[property="og:description"]', data.description, 'content'],
      ['meta[property="og:url"]', data.canonical, 'content'],
      ['meta[name="twitter:title"]', data.title, 'content'],
      ['meta[name="twitter:description"]', data.description, 'content'],
      ['link[rel="canonical"]', data.canonical, 'href'],
      ...data.alternates.map(item => [`link[hreflang="${item.language}"]`, item.href, 'href']),
      ['link[hreflang="x-default"]', data.alternates[0].href, 'href'],
    ]) {
      document.querySelector(selector)?.setAttribute(attribute, value);
    }
  }, [language, pathname]);
  return null;
}
