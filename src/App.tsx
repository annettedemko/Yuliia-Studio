import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HreflangTags } from "@/components/HreflangTags";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
// ProtectedRoute removed - each admin page handles auth internally via simpleAuthService
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Lazy load all page components for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const LaserHairRemoval = lazy(() => import("./pages/LaserHairRemoval"));
const AlexandritVsDiodenlaser = lazy(() => import("./pages/AlexandritVsDiodenlaser"));
const IcooneLaser = lazy(() => import("./pages/IcooneLaser"));
const ManikuerePedikuere = lazy(() => import("./pages/ManikuerePedikuere"));
// DEKA pages - TEMPORARILY HIDDEN
// const DekaGeraeteverkauf = lazy(() => import("./pages/DekaGeraeteverkauf"));
const RedTouchPro = lazy(() => import("./pages/RedTouchPro"));
const RedTouchProService = lazy(() => import("./pages/RedTouchProService"));
// const MotusPro = lazy(() => import("./pages/MotusPro"));
// const MotusAX = lazy(() => import("./pages/MotusAX"));
// const Physiq360 = lazy(() => import("./pages/Physiq360"));
// const AgainCos = lazy(() => import("./pages/AgainCos"));
const Pricing = lazy(() => import("./pages/Pricing"));
// const Deka = lazy(() => import("./pages/Deka"));
// const DekaDay = lazy(() => import("./pages/DekaDay"));
// const DekaAnna = lazy(() => import("./pages/DekaAnna"));
// const DekaLera = lazy(() => import("./pages/DekaLera"));
// const DekaLiudmila = lazy(() => import("./pages/DekaLiudmila"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const YuliaClients = lazy(() => import("./pages/YuliaClients"));
const AnnaClients = lazy(() => import("./pages/AnnaClients"));
const NataliaClients = lazy(() => import("./pages/NataliaClients"));
const LeraClients = lazy(() => import("./pages/LeraClients"));
const LiudmilaClients = lazy(() => import("./pages/LiudmilaClients"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <HreflangTags />
            <ScrollToTop />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navigation />
              <main style={{ flex: 1 }}>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                  {/* Редирект с корня на /de */}
                  <Route path="/" element={<Navigate to="/de" replace />} />

                  {/* Редиректы для старых ссылок без языкового префикса (все редиректят на /de) */}

                  {/* Основные страницы */}
                  <Route path="/about" element={<Navigate to="/de/about" replace />} />
                  <Route path="/services" element={<Navigate to="/de/services" replace />} />
                  <Route path="/preis" element={<Navigate to="/de/preis" replace />} />
                  <Route path="/kontakt" element={<Navigate to="/de/kontakt" replace />} />
                  <Route path="/impressum" element={<Navigate to="/de/impressum" replace />} />
                  <Route path="/datenschutzerklaerung" element={<Navigate to="/de/datenschutzerklaerung" replace />} />

                  {/* Услуги */}
                  <Route path="/laser-haarentfernung-muenchen" element={<Navigate to="/de/laser-haarentfernung-muenchen" replace />} />
                  <Route path="/alexandrit-gegen-diodenlaser" element={<Navigate to="/de/alexandrit-gegen-diodenlaser" replace />} />
                  <Route path="/icoone-laser-muenchen" element={<Navigate to="/de/icoone-laser-muenchen" replace />} />
                  <Route path="/manikuere-pedikuere-muenchen" element={<Navigate to="/de/manikuere-pedikuere-muenchen" replace />} />
                  <Route path="/redtouch-laser-muenchen" element={<Navigate to="/de/redtouch-laser-muenchen" replace />} />

                  {/* DEKA устройства - TEMPORARILY HIDDEN */}
                  {/* <Route path="/deka" element={<Navigate to="/de/deka" replace />} />
                  <Route path="/DEKA" element={<Navigate to="/de/DEKA" replace />} />
                  <Route path="/deka-day" element={<Navigate to="/de/deka-day" replace />} />
                  <Route path="/deka-anna" element={<Navigate to="/de/deka-anna" replace />} />
                  <Route path="/deka-lera" element={<Navigate to="/de/deka-lera" replace />} />
                  <Route path="/deka-liudmila" element={<Navigate to="/de/deka-liudmila" replace />} />
                  <Route path="/deka-geraeteverkauf" element={<Navigate to="/de/deka-geraeteverkauf" replace />} />
                  <Route path="/physiq360" element={<Navigate to="/de/physiq360" replace />} />
                  <Route path="/motus-ax" element={<Navigate to="/de/motus-ax" replace />} />
                  <Route path="/motus-pro" element={<Navigate to="/de/motus-pro" replace />} />
                  <Route path="/redtouch-pro" element={<Navigate to="/de/redtouch-pro" replace />} />
                  <Route path="/again-cos" element={<Navigate to="/de/again-cos" replace />} /> */}

                  {/* Немецкие роуты /de/* */}
                  <Route path="/de/*">
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="laser-haarentfernung-muenchen" element={<LaserHairRemoval />} />
                    <Route path="alexandrit-gegen-diodenlaser" element={<AlexandritVsDiodenlaser />} />
                    <Route path="icoone-laser-muenchen" element={<IcooneLaser />} />
                    <Route path="manikuere-pedikuere-muenchen" element={<ManikuerePedikuere />} />
                    <Route path="redtouch-laser-muenchen" element={<RedTouchProService />} />
                    {/* DEKA routes - TEMPORARILY HIDDEN */}
                    {/* <Route path="deka-geraeteverkauf" element={<DekaGeraeteverkauf />} />
                    <Route path="redtouch-pro" element={<RedTouchPro />} />
                    <Route path="motus-pro" element={<MotusPro />} />
                    <Route path="motus-ax" element={<MotusAX />} />
                    <Route path="physiq360" element={<Physiq360 />} />
                    <Route path="again-cos" element={<AgainCos />} /> */}
                    <Route path="kontakt" element={<Kontakt />} />
                    <Route path="impressum" element={<Impressum />} />
                    <Route path="datenschutzerklaerung" element={<Datenschutz />} />
                    <Route path="preis" element={<Pricing />} />
                    {/* <Route path="deka" element={<Deka />} />
                    <Route path="DEKA" element={<Deka />} />
                    <Route path="deka-day" element={<DekaDay />} />
                    <Route path="deka-anna" element={<DekaAnna />} />
                    <Route path="deka-lera" element={<DekaLera />} />
                    <Route path="deka-liudmila" element={<DekaLiudmila />} /> */}
                    <Route path="icoone-laser" element={<Navigate to="icoone-laser-muenchen" replace />} />
                    <Route path="manikuere-pedikuere" element={<Navigate to="manikuere-pedikuere-muenchen" replace />} />
                    <Route path="redtouchpro" element={<Navigate to="redtouch-laser-muenchen" replace />} />
                  </Route>

                  {/* Русские роуты /ru/* */}
                  <Route path="/ru/*">
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="laser-haarentfernung-muenchen" element={<LaserHairRemoval />} />
                    <Route path="alexandrit-gegen-diodenlaser" element={<AlexandritVsDiodenlaser />} />
                    <Route path="icoone-laser-muenchen" element={<IcooneLaser />} />
                    <Route path="manikuere-pedikuere-muenchen" element={<ManikuerePedikuere />} />
                    <Route path="redtouch-laser-muenchen" element={<RedTouchProService />} />
                    {/* DEKA routes - TEMPORARILY HIDDEN */}
                    {/* <Route path="deka-geraeteverkauf" element={<DekaGeraeteverkauf />} />
                    <Route path="redtouch-pro" element={<RedTouchPro />} />
                    <Route path="motus-pro" element={<MotusPro />} />
                    <Route path="motus-ax" element={<MotusAX />} />
                    <Route path="physiq360" element={<Physiq360 />} />
                    <Route path="again-cos" element={<AgainCos />} /> */}
                    <Route path="kontakt" element={<Kontakt />} />
                    <Route path="impressum" element={<Impressum />} />
                    <Route path="datenschutzerklaerung" element={<Datenschutz />} />
                    <Route path="preis" element={<Pricing />} />
                    {/* <Route path="deka" element={<Deka />} />
                    <Route path="DEKA" element={<Deka />} />
                    <Route path="deka-day" element={<DekaDay />} />
                    <Route path="deka-anna" element={<DekaAnna />} />
                    <Route path="deka-lera" element={<DekaLera />} />
                    <Route path="deka-liudmila" element={<DekaLiudmila />} /> */}
                    <Route path="icoone-laser" element={<Navigate to="icoone-laser-muenchen" replace />} />
                    <Route path="manikuere-pedikuere" element={<Navigate to="manikuere-pedikuere-muenchen" replace />} />
                    <Route path="redtouchpro" element={<Navigate to="redtouch-laser-muenchen" replace />} />
                  </Route>

                  {/* Admin routes (без языкового префикса) */}
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/yulia-clients" element={<YuliaClients />} />
                  <Route path="/admin/anna-clients" element={<AnnaClients />} />
                  <Route path="/admin/natalia-clients" element={<NataliaClients />} />
                  <Route path="/admin/lera-clients" element={<LeraClients />} />
                  <Route path="/admin/liudmila-clients" element={<LiudmilaClients />} />

                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
            <CookieBanner />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;