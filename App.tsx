import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CountryDetail from './pages/CountryDetail';
import Newsroom from './pages/Newsroom';
import Contact from './pages/Contact';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-europe-cream text-europe-navy">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/country/:slug" element={<CountryDetail />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyActions />
      </div>
    </Router>
  );
};

export default App;