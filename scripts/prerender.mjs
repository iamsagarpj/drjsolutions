import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const CANONICAL_ORIGIN = 'https://drjsolutions.in';
const SITE_NAME = 'DRJ Solutions';
const OG_IMAGE_PATH = '/og-image.svg';
const SITE = (process.env.VITE_SITE_URL || CANONICAL_ORIGIN).replace(/\/$/, '');
const SEO_PAGES = JSON.parse(readFileSync(join(ROOT, 'src/config/seo-pages.json'), 'utf8'));

function canonical(path) {
  return path === '/' ? `${SITE}/` : `${SITE}${path}`;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function stripInjectedSeo(html) {
  return html
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    .replace(/\s*<meta\s+property="og:[^"]+"[\s\S]*?\/>/g, '')
    .replace(/\s*<meta\s+name="twitter:[^"]+"[\s\S]*?\/>/g, '')
    .replace(/\s*<meta\s+name="robots"[\s\S]*?\/>/g, '');
}

function injectHead(html, path, title, description, ogType) {
  const url = canonical(path);
  const image = `${SITE}${OG_IMAGE_PATH}`;
  const extra = [
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join('\n    ');

  return stripInjectedSeo(html)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtml(description)}" />`,
    )
    .replace('</head>', `    ${extra}\n  </head>`);
}

function writeRoute(html, path) {
  const filePath = path === '/' ? join(DIST, 'index.html') : join(DIST, path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);
}

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

for (const page of Object.values(SEO_PAGES)) {
  const html = injectHead(template, page.path, page.title, page.description, page.ogType ?? 'website');
  writeRoute(html, page.path);
}

const notFound = template
  .replace(/<title>[\s\S]*?<\/title>/, '<title>Page not found | DRJ Solutions</title>')
  .replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    '<meta name="description" content="The page you requested is not available." />',
  )
  .replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>');
writeFileSync(join(DIST, '404.html'), notFound);

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.values(SEO_PAGES)
  .map(
    (page) => `  <url>
    <loc>${canonical(page.path)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap);

const robots = `User-agent: *
Allow: /

Disallow: /404.html

Sitemap: ${SITE}/sitemap.xml
`;
writeFileSync(join(DIST, 'robots.txt'), robots);

console.log(`Prerendered ${Object.keys(SEO_PAGES).length} routes for ${SITE}`);
