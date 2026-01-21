import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Placeholder pages - to be filled in later
const PlaceholderPage = ({ title }: { title: string }) => (
  <main style={{ minHeight: '60vh', padding: '4rem 2rem', textAlign: 'center' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h1>
    <p style={{ color: '#666' }}>Content coming soon...</p>
  </main>
);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<PlaceholderPage title="About Us" />} />
        <Route path="/what-is-bactivate" element={<PlaceholderPage title="What is bActivate?" />} />
        <Route path="/when-to-use" element={<PlaceholderPage title="When to Use?" />} />
        <Route path="/how-to-use" element={<PlaceholderPage title="How to Use?" />} />
        <Route path="/our-distributors" element={<PlaceholderPage title="Our Distributors" />} />
        <Route path="/studies-effect" element={<PlaceholderPage title="Studies & Effect" />} />
        <Route path="/podcast" element={<PlaceholderPage title="Podcast" />} />
        <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
        <Route path="/shop" element={<PlaceholderPage title="Shop" />} />
        <Route path="/terms-and-conditions" element={<PlaceholderPage title="Terms and Conditions" />} />
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
