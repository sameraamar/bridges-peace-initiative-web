import { build } from 'vite';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const base = process.env.PAGES_BASE_PATH || '/';
if (!base.startsWith('/') || !base.endsWith('/')) {
  throw new Error('PAGES_BASE_PATH must begin and end with /');
}
const escape = value => String(value).replace(/[&<>"']/g, char =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

await build({ base });
const template = await readFile('dist/index.html', 'utf8');
await build({ base, build: { ssr: 'src/entry-server.tsx', outDir: 'dist/server' } });
try {
  const { renderPage, metadata, languages, pageNames, pagePath } = await import(pathToFileURL(path.resolve('dist/server/entry-server.js')).href);
  const urls = [];
  for (const language of languages) {
    for (const name of [...pageNames, ...(language === 'en' ? ['404'] : [])]) {
      const data = metadata(language, `/${name}`);
      const alternateTags = [...data.alternates, { language: 'x-default', href: data.alternates[0].href }]
        .map(item => `<link rel="alternate" hreflang="${item.language}" href="${escape(item.href)}" />`).join('\n');
      const head = `<title>${escape(data.title)}</title>
<meta name="description" content="${escape(data.description)}" />
<meta name="robots" content="${data.robots}" />
<link rel="canonical" href="${escape(data.canonical)}" />
${alternateTags}
<meta property="og:type" content="website" />
<meta property="og:title" content="${escape(data.title)}" />
<meta property="og:description" content="${escape(data.description)}" />
<meta property="og:url" content="${escape(data.canonical)}" />
<meta property="og:image" content="${escape(data.image)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(data.title)}" />
<meta name="twitter:description" content="${escape(data.description)}" />
<meta name="twitter:image" content="${escape(data.image)}" />`;
      const html = template
        .replace(/<html lang="en">/, `<html lang="${language}" dir="${language === 'en' ? 'ltr' : 'rtl'}">`)
        .replace('<!--seo-head-->', head)
        .replace('<div id="root"></div>', () => `<div id="root">${renderPage(language, name)}</div>`);
      const filename = name === '404' ? 'dist/404.html' : path.join('dist', pagePath(language, name), 'index.html');
      await mkdir(path.dirname(filename), { recursive: true });
      await writeFile(filename, html);
      if (name !== '404') urls.push(data.canonical);
    }
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${escape(url)}</loc></url>`).join('')}</urlset>\n`);
  const origin = (process.env.VITE_SITE_URL || 'https://jusor-initiative.org').replace(/\/$/, '');
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
  await writeFile('dist/.nojekyll', '');
  console.log(`Generated ${urls.length} static pages and a real 404 page.`);
} finally {
  await rm('dist/server/entry-server.js');
  await rm('dist/server', { recursive: true });
}
