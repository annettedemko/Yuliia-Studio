import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');

// Статические страницы для pre-render (должны быть сгенерированы как HTML)
// Динамические страницы: /, /preis, /deka, /deka-anna, /deka-lera, /deka-liudmila, /deka-day
const staticRoutes = {
  de: [
    '/de/about',
    '/de/services',
    '/de/laser-haarentfernung-muenchen',
    '/de/alexandrit-gegen-diodenlaser',
    '/de/icoone-laser-muenchen',
    '/de/manikuere-pedikuere-muenchen',
    '/de/redtouch-laser-muenchen',
    '/de/deka-geraeteverkauf',
    '/de/redtouch-pro',
    '/de/motus-pro',
    '/de/motus-ax',
    '/de/physiq360',
    '/de/again-cos',
    '/de/kontakt',
    '/de/impressum',
    '/de/datenschutzerklaerung',
  ],
  ru: [
    '/ru/about',
    '/ru/services',
    '/ru/laser-haarentfernung-muenchen',
    '/ru/alexandrit-gegen-diodenlaser',
    '/ru/icoone-laser-muenchen',
    '/ru/manikuere-pedikuere-muenchen',
    '/ru/redtouch-laser-muenchen',
    '/ru/deka-geraeteverkauf',
    '/ru/redtouch-pro',
    '/ru/motus-pro',
    '/ru/motus-ax',
    '/ru/physiq360',
    '/ru/again-cos',
    '/ru/kontakt',
    '/ru/impressum',
    '/ru/datenschutzerklaerung',
  ]
};

// Создаем директории и копируем index.html для каждого маршрута
function prerenderRoutes() {
  const indexHtmlPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('❌ index.html not found in dist folder. Run build first!');
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Обрабатываем статические маршруты
  Object.entries(staticRoutes).forEach(([lang, routes]) => {
    routes.forEach(route => {
      const routePath = path.join(distPath, route);
      const htmlPath = path.join(routePath, 'index.html');

      // Создаем директорию
      fs.mkdirSync(routePath, { recursive: true });

      // Модифицируем HTML для каждого языка
      let modifiedHtml = indexHtml;

      // Обновляем lang атрибут
      modifiedHtml = modifiedHtml.replace(
        /<html lang="[^"]*">/,
        `<html lang="${lang}">`
      );

      // Записываем файл
      fs.writeFileSync(htmlPath, modifiedHtml);
      console.log(`✅ Pre-rendered: ${route}`);
    });
  });

  // Создаем главные страницы для языков
  ['/de', '/ru'].forEach(lang => {
    const langPath = path.join(distPath, lang);
    const htmlPath = path.join(langPath, 'index.html');

    fs.mkdirSync(langPath, { recursive: true });

    let modifiedHtml = indexHtml;
    modifiedHtml = modifiedHtml.replace(
      /<html lang="[^"]*">/,
      `<html lang="${lang.slice(1)}">`
    );

    fs.writeFileSync(htmlPath, modifiedHtml);
    console.log(`✅ Pre-rendered: ${lang} (dynamic, will hydrate)`);
  });

  // Создаем для динамических страниц (они будут hydrate на клиенте)
  const dynamicRoutes = {
    de: ['/de/preis', '/de/deka', '/de/deka-anna', '/de/deka-lera', '/de/deka-liudmila', '/de/deka-day'],
    ru: ['/ru/preis', '/ru/deka', '/ru/deka-anna', '/ru/deka-lera', '/ru/deka-liudmila', '/ru/deka-day']
  };

  Object.entries(dynamicRoutes).forEach(([lang, routes]) => {
    routes.forEach(route => {
      const routePath = path.join(distPath, route);
      const htmlPath = path.join(routePath, 'index.html');

      fs.mkdirSync(routePath, { recursive: true });

      let modifiedHtml = indexHtml;
      modifiedHtml = modifiedHtml.replace(
        /<html lang="[^"]*">/,
        `<html lang="${lang}">`
      );

      fs.writeFileSync(htmlPath, modifiedHtml);
      console.log(`✅ Pre-rendered (dynamic): ${route}`);
    });
  });

  console.log('\n🎉 Pre-rendering complete!');
}

prerenderRoutes();
