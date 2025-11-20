import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { HreflangTags } from '@/components/HreflangTags';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';

// Direct imports (no lazy loading for SSR)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import LaserHairRemoval from './pages/LaserHairRemoval';
import AlexandritVsDiodenlaser from './pages/AlexandritVsDiodenlaser';
import IcooneLaser from './pages/IcooneLaser';
import ManikuerePedikuere from './pages/ManikuerePedikuere';
import RedTouchProService from './pages/RedTouchProService';
import Pricing from './pages/Pricing';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Kontakt from './pages/Kontakt';
import NotFound from './pages/NotFound';

interface RenderResult {
  html: string;
  helmet: {
    title: string;
    meta: string;
    link: string;
    script: string;
  };
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: any } = {};
  const queryClient = new QueryClient();

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <LanguageProvider>
            <TooltipProvider>
              <StaticRouter location={url}>
                <HreflangTags />
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Navigation />
                  <main style={{ flex: 1 }}>
                    <Routes>
                      {/* Redirect root to /de */}
                      <Route path="/" element={<Navigate to="/de" replace />} />

                      {/* German routes /de/* */}
                      <Route path="/de/*">
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="laser-haarentfernung-muenchen" element={<LaserHairRemoval />} />
                        <Route path="alexandrit-gegen-diodenlaser" element={<AlexandritVsDiodenlaser />} />
                        <Route path="icoone-laser-muenchen" element={<IcooneLaser />} />
                        <Route path="manikuere-pedikuere-muenchen" element={<ManikuerePedikuere />} />
                        <Route path="redtouch-laser-muenchen" element={<RedTouchProService />} />
                        <Route path="kontakt" element={<Kontakt />} />
                        <Route path="impressum" element={<Impressum />} />
                        <Route path="datenschutzerklaerung" element={<Datenschutz />} />
                        <Route path="preis" element={<Pricing />} />
                      </Route>

                      {/* Russian routes /ru/* */}
                      <Route path="/ru/*">
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="laser-haarentfernung-muenchen" element={<LaserHairRemoval />} />
                        <Route path="alexandrit-gegen-diodenlaser" element={<AlexandritVsDiodenlaser />} />
                        <Route path="icoone-laser-muenchen" element={<IcooneLaser />} />
                        <Route path="manikuere-pedikuere-muenchen" element={<ManikuerePedikuere />} />
                        <Route path="redtouch-laser-muenchen" element={<RedTouchProService />} />
                        <Route path="kontakt" element={<Kontakt />} />
                        <Route path="impressum" element={<Impressum />} />
                        <Route path="datenschutzerklaerung" element={<Datenschutz />} />
                        <Route path="preis" element={<Pricing />} />
                      </Route>

                      {/* 404 */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </StaticRouter>
            </TooltipProvider>
          </LanguageProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    html,
    helmet: {
      title: helmet?.title?.toString() || '',
      meta: helmet?.meta?.toString() || '',
      link: helmet?.link?.toString() || '',
      script: helmet?.script?.toString() || '',
    },
  };
}
