import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');

// Routes to pre-render with SSR
const staticRoutes = {
  de: [
    '/de',
    '/de/about',
    '/de/services',
    '/de/laser-haarentfernung-muenchen',
    '/de/alexandrit-gegen-diodenlaser',
    '/de/icoone-laser-muenchen',
    '/de/manikuere-pedikuere-muenchen',
    '/de/redtouch-laser-muenchen',
    '/de/kontakt',
    '/de/impressum',
    '/de/datenschutzerklaerung',
    '/de/preis',
  ],
  ru: [
    '/ru',
    '/ru/about',
    '/ru/services',
    '/ru/laser-haarentfernung-muenchen',
    '/ru/alexandrit-gegen-diodenlaser',
    '/ru/icoone-laser-muenchen',
    '/ru/manikuere-pedikuere-muenchen',
    '/ru/redtouch-laser-muenchen',
    '/ru/kontakt',
    '/ru/impressum',
    '/ru/datenschutzerklaerung',
    '/ru/preis',
  ]
};

async function prerenderRoutes() {
  const baseUrl = 'https://www.munchen-beauty.de';
  const indexHtmlPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('❌ index.html not found in dist folder. Run build first!');
    process.exit(1);
  }

  const template = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Import SSR render function
  const serverEntryPath = path.join(distPath, 'server', 'entry-server.js');

  if (!fs.existsSync(serverEntryPath)) {
    console.error('❌ Server entry not found. Run SSR build first!');
    console.error('Expected path:', serverEntryPath);
    process.exit(1);
  }

  const { render } = await import(serverEntryPath);

  // Process all routes
  const allRoutes = [...staticRoutes.de, ...staticRoutes.ru];

  for (const route of allRoutes) {
    try {
      const { html: appHtml, helmet } = render(route);

      // Determine language
      const lang = route.startsWith('/ru') ? 'ru' : 'de';

      // Build final HTML
      let finalHtml = template;

      // Replace html lang attribute
      finalHtml = finalHtml.replace(
        /<html lang="[^"]*">/,
        `<html lang="${lang}">`
      );

      // Replace title
      if (helmet.title) {
        finalHtml = finalHtml.replace(
          /<title>[^<]*<\/title>/,
          helmet.title
        );
      }

      // Remove existing meta description and add new one from helmet
      finalHtml = finalHtml.replace(
        /<meta name="description" content="[^"]*" \/>/,
        ''
      );

      // Remove existing canonical and hreflang
      finalHtml = finalHtml.replace(
        /<!-- Canonical & Hreflang[^]*?<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
        ''
      );

      // Remove existing Open Graph tags
      finalHtml = finalHtml.replace(
        /<!-- Open Graph \/ Facebook -->[^]*?<meta property="og:locale" content="[^"]*" \/>/,
        ''
      );

      // Build canonical URL for this route
      const canonicalUrl = `${baseUrl}${route}`;

      // Insert static canonical + helmet meta tags before </head>
      const headContent = `
    <!-- Static canonical for SSR/pre-render (no JS required) -->
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Dynamic meta tags from React Helmet -->
    ${helmet.meta}
    ${helmet.link}
    ${helmet.script}
  `;

      finalHtml = finalHtml.replace(
        '</head>',
        `${headContent}</head>`
      );

      // Insert rendered app HTML
      finalHtml = finalHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Create directory and save file
      const routePath = route === '/de' || route === '/ru'
        ? path.join(distPath, route)
        : path.join(distPath, route);
      const htmlPath = path.join(routePath, 'index.html');

      fs.mkdirSync(routePath, { recursive: true });
      fs.writeFileSync(htmlPath, finalHtml);

      console.log(`✅ SSR Pre-rendered: ${route}`);
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route}:`, error.message);
    }
  }

  console.log('\n🎉 SSR Pre-rendering complete!');
  console.log(`📁 Total pages: ${allRoutes.length}`);
}

prerenderRoutes();
