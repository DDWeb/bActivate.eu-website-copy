import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatIsBactivate from './pages/WhatIsBactivate';
import WhenToUse from './pages/WhenToUse';
import HowToUse from './pages/HowToUse';
import OurDistributors from './pages/OurDistributors';
import StudiesEffect from './pages/StudiesEffect';
import Podcast from './pages/Podcast';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import TermsAndConditions from './pages/TermsAndConditions';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
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
        <Route path="/shop" element={<Shop />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
