
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Initiative from "./pages/Initiative";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import type { Language } from "./context/LanguageContext";
import { Seo } from "./components/Seo";

const queryClient = new QueryClient();

export const Site = ({ language }: { language: Language }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider language={language}>
        <Seo />
        <Toaster />
        <Sonner />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/initiative" element={<Initiative />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => {
  const base = import.meta.env.BASE_URL;
  const segment = window.location.pathname.slice(base.length).split('/')[0];
  const language: Language = segment === 'ar' || segment === 'he' ? segment : 'en';
  return (
    <BrowserRouter basename={`${base}${language === 'en' ? '' : `${language}/`}`}>
      <Site language={language} />
    </BrowserRouter>
  );
};

export default App;
