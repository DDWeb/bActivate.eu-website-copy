import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatIsBactivate from './pages/WhatIsBactivate';
import WhenToUse from './pages/WhenToUse';
import HowToUse from './pages/HowToUse';
import OurDistributors from './pages/OurDistributors';
import StudiesEffect from './pages/StudiesEffect';
import Podcast from './pages/Podcast';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Shop from './pages/Shop';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ConsultationConfirmed from './pages/ConsultationConfirmed';
import Contact from './pages/Contact';
import SwabComparison from './pages/SwabComparison';
import WhatsAppButton from './components/WhatsAppButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const { pathname } = useLocation();
  // FAQ lives on the homepage (general set) and the shop (purchase set) only,
  // so passage content stays unique on every other page.
  const faqVariant = pathname === '/' ? 'home' : pathname === '/shop' ? 'shop' : null;

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/what-is-bactivate" element={<WhatIsBactivate />} />
        <Route path="/when-to-use" element={<WhenToUse />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/our-distributors" element={<OurDistributors />} />
        <Route path="/studies-effect" element={<StudiesEffect />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/consultation-confirmed" element={<ConsultationConfirmed />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/swab-culture-vs-bactivate" element={<SwabComparison />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {faqVariant && <FAQSection variant={faqVariant} />}
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
