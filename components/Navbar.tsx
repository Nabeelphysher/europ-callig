import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { APP_NAME, NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-europe-navy text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
             <Globe size={24} />
          </div>
          <span className={`font-serif text-xl font-bold tracking-wide ${scrolled ? 'text-europe-navy' : 'text-white'}`}>
            {APP_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide hover:text-europe-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-europe-gold after:transition-all hover:after:w-full ${
                scrolled ? 'text-gray-800' : 'text-white/90'
              } ${location.pathname === link.path ? 'text-europe-gold after:w-full' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
             to="/contact"
             className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
               scrolled 
               ? 'bg-europe-navy text-white hover:bg-europe-blue' 
               : 'bg-white text-europe-navy hover:bg-europe-gold hover:text-white'
             }`}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-europe-navy' : 'text-white'}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-europe-navy font-medium text-lg border-b border-gray-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
             to="/contact"
             className="bg-europe-gold text-white text-center py-3 rounded-lg font-bold mt-2"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;