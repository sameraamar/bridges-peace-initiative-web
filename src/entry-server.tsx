import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Site } from './App';
import type { Language } from './context/LanguageContext';
export { metadata, languages, pageNames, pagePath } from './lib/seo';

export function renderPage(language: Language, name: string) {
  const basename = `${import.meta.env.BASE_URL}${language === 'en' ? '' : `${language}/`}`;
  return renderToString(
    <StaticRouter basename={basename} location={`${basename}${name}${name ? '/' : ''}`}>
      <Site language={language} />
    </StaticRouter>,
  );
}
