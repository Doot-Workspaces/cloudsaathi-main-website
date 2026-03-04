import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const ROUTES = [
  '/',
  '/philosophy',
  '/ai-native',
  '/products',
  '/services',
  '/services/cicd-setup',
  '/services/kubernetes-management',
  '/services/cloud-migration',
  '/services/infra-audit',
  '/about',
  '/contact',
  '/blog',
];

async function prerender() {
  const templatePath = path.join(root, 'dist', 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const serverEntryPath = path.join(root, 'dist-server', 'entry-server.js');
  const serverEntryUrl = pathToFileURL(serverEntryPath).href;
  const { render } = await import(serverEntryUrl);

  for (const route of ROUTES) {
    console.log(`Pre-rendering: ${route}`);
    const { html, helmet } = render(route);

    let page = template;

    // Inject rendered app HTML into the root div
    page = page.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    if (helmet) {
      // Replace title with page-specific title from Helmet
      const helmetTitle = helmet.title.toString();
      if (helmetTitle) {
        page = page.replace(/<title>[^<]*<\/title>/, helmetTitle);
      }

      // Remove static meta tags that Helmet overrides per-page
      page = page.replace(/<meta name="description"[^>]*\/?>\s*/g, '');
      page = page.replace(/<meta property="og:title"[^>]*\/?>\s*/g, '');
      page = page.replace(/<meta property="og:description"[^>]*\/?>\s*/g, '');
      page = page.replace(/<meta property="og:url"[^>]*\/?>\s*/g, '');
      page = page.replace(/<meta property="og:type"[^>]*\/?>\s*/g, '');
      page = page.replace(/<meta property="og:site_name"[^>]*\/?>\s*/g, '');
      page = page.replace(/<meta name="twitter:card"[^>]*\/?>\s*/g, '');
      page = page.replace(/<meta name="twitter:title"[^>]*\/?>\s*/g, '');
      page = page.replace(/<meta name="twitter:description"[^>]*\/?>\s*/g, '');
      page = page.replace(/<link rel="canonical"[^>]*\/?>\s*/g, '');

      // Inject Helmet-generated meta, link, and script tags
      const helmetMeta = helmet.meta.toString();
      const helmetLink = helmet.link.toString();
      const helmetScript = helmet.script.toString();

      const helmetTags = [helmetMeta, helmetLink, helmetScript]
        .filter(Boolean)
        .join('\n    ');

      if (helmetTags) {
        page = page.replace('</head>', `    ${helmetTags}\n  </head>`);
      }
    }

    // Write to the correct path in dist/
    const outDir = route === '/'
      ? path.join(root, 'dist')
      : path.join(root, 'dist', ...route.split('/').filter(Boolean));

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), page);
    console.log(`  -> dist${route === '/' ? '' : route}/index.html`);
  }

  console.log(`\nDone: pre-rendered ${ROUTES.length} routes.`);
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
