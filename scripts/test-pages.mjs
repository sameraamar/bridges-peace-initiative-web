import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';

const base = process.env.PAGES_BASE_PATH || '/';
const origin = (process.env.VITE_SITE_URL || 'https://jusor-initiative.org').replace(/\/$/, '');
const robots = process.env.VITE_SITE_INDEXABLE === 'true' ? 'index, follow' : 'noindex, follow';
const pages = ['', 'about', 'initiative', 'news', 'contact'];
const titles = new Set();

for (const language of ['en', 'ar', 'he']) {
  for (const name of pages) {
    const route = `${language === 'en' ? '' : `${language}/`}${name ? `${name}/` : ''}`;
    test(`static HTML: ${route || '/'}`, async () => {
      const html = await readFile(`dist/${route}index.html`, 'utf8');
      assert.ok(html.includes(`<html lang="${language}" dir="${language === 'en' ? 'ltr' : 'rtl'}">`));
      assert.match(html, /<h1[^>]*>[^<]+<\/h1>/);
      assert.match(html, /<meta name="description" content="[^"]{20,}" \/>/);
      assert.ok(html.includes(`<meta name="robots" content="${robots}" />`));
      assert.ok(html.includes(`<link rel="canonical" href="${origin}/${route}" />`));
      for (const lang of ['en', 'ar', 'he', 'x-default']) {
        assert.ok(html.includes(`hreflang="${lang}"`));
      }
      const title = html.match(/<title>(.*?)<\/title>/)[1];
      assert.ok(!titles.has(title), `Duplicate title: ${title}`);
      titles.add(title);
      for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
        if (href.startsWith('/')) assert.ok(href.startsWith(base), `Asset/link escapes deployment base: ${href}`);
      }
      assert.ok(!html.includes('lovable.dev'));
      if (name === 'about') {
        assert.equal((html.match(/<details /g) || []).length, 3);
        for (const [, section] of html.matchAll(/<details [^>]*>([\s\S]*?)<\/details>/g)) {
          assert.ok((section.match(/<p /g) || []).length >= 3, 'Each closed About section must contain its paragraphs');
        }
      }
      if (name === 'initiative') assert.ok(html.includes(`${base}initiative-full-text.pdf`));
    });
  }
}

test('sitemap and genuine error page', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  assert.equal((sitemap.match(/<loc>/g) || []).length, 15);
  const error = await readFile('dist/404.html', 'utf8');
  assert.match(error, /<h1[^>]*>404<\/h1>/);
  assert.ok(error.includes('noindex, follow'));
  await access('dist/.nojekyll');
  await access('dist/initiative-full-text.pdf');
  await access('dist/jusorImage.png');
  const robotsFile = await readFile('dist/robots.txt', 'utf8');
  assert.ok(robotsFile.includes(`Sitemap: ${origin}/sitemap.xml`));
});
