import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import LaserHairRemoval from "./pages/LaserHairRemoval";
import IcooneLaser from "./pages/IcooneLaser";
import ManikuerePedikuere from "./pages/ManikuerePedikuere";
import DekaGeraeteverkauf from "./pages/DekaGeraeteverkauf";
import RedTouchPro from "./pages/RedTouchPro";
import RedTouchProService from "./pages/RedTouchProService";
import MotusPro from "./pages/MotusPro";
import MotusAX from "./pages/MotusAX";
import Physiq360 from "./pages/Physiq360";
import AgainCos from "./pages/AgainCos";
import Pricing from "./pages/Pricing";
import Deka from "./pages/Deka";
import DekaDay from "./pages/DekaDay";
import KopieDekaDayAnna from "./pages/KopieDekaDayAnna";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AnnaClients from "./pages/AnnaClients";
import NataliaClients from "./pages/NataliaClients";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Helmet>
            <html lang="de" />
            <title>Yuliia Cheporska Studio – iCoone, Alexandrite Laser München, Александритовый Лазер Мюнхен</title>
            <meta name="description" content="Dauerhafte Alexandrite Laser Haarentfernung, iCoone Laser München, Maniküre und Pediküre. Александритовый лазер, удаление волос в Мюнхене. Elsässer Str. 33." />
            <meta name="author" content="Yuliia Cheporska Studio" />
            <meta name="keywords" content="iCoone München, Alexandrite Laser München, Александритовый Лазер Мюнхен, Laser Haarentfernung München, Kosmetik München" />
            <meta property="og:title" content="iCoone & Alexandrite Laser München – Yuliia Cheporska Studio" />
            <meta property="og:description" content="Professionelle iCoone und Alexandrite Laser Behandlungen in München. Александритовый лазер эпиляция Мюнхен." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/logo2.JPG" />
          </Helmet>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/laser-haarentfernung-muenchen" element={<LaserHairRemoval />} />
              <Route path="/icoone-laser" element={<IcooneLaser />} />
              <Route path="/manikuere-pedikuere" element={<ManikuerePedikuere />} />
              <Route path="/deka-geraeteverkauf" element={<DekaGeraeteverkauf />} />
              <Route path="/redtouch-pro" element={<RedTouchPro />} />
              <Route path="/redtouchpro" element={<RedTouchProService />} />
              <Route path="/motus-pro" element={<MotusPro />} />
              <Route path="/motus-ax" element={<MotusAX />} />
              <Route path="/physiq360" element={<Physiq360 />} />
              <Route path="/again-cos" element={<AgainCos />} />
              <Route path="/preis" element={<Pricing />} />
              <Route path="/deka" element={<Deka />} />
              <Route path="/DEKA" element={<Deka />} />
              <Route path="/deka-day" element={<DekaDay />} />
              <Route path="/kopie-deka-day-anna" element={<KopieDekaDayAnna />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/anna-clients" element={<AnnaClients />} />
              <Route path="/admin/natalia-clients" element={<NataliaClients />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutzerklaerung" element={<Datenschutz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;