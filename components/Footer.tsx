import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-europe-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="text-europe-gold" size={28} />
              <span className="font-serif text-2xl font-bold">{APP_NAME}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 pr-4">
              Your trusted partner for European opportunities. We bridge the gap between talent and destination with integrity, transparency, and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-europe-gold hover:text-europe-navy transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-europe-gold hover:text-europe-navy transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-europe-gold hover:text-europe-navy transition-all"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg font-semibold mb-6 text-europe-gold">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/newsroom" className="text-gray-400 hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Links Column */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg font-semibold mb-6 text-europe-gold">Destinations</h4>
            <ul className="space-y-4">
              <li><Link to="/country/germany" className="text-gray-400 hover:text-white transition-colors">Germany</Link></li>
              <li><Link to="/country/poland" className="text-gray-400 hover:text-white transition-colors">Poland</Link></li>
              <li><Link to="/country/france" className="text-gray-400 hover:text-white transition-colors">France</Link></li>
              <li><Link to="/country/czech" className="text-gray-400 hover:text-white transition-colors">Czech Republic</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-lg font-semibold mb-6 text-europe-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>123 Global Plaza, Business Bay<br />Dubai, UAE & Warsaw, Poland</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="shrink-0" size={18} />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="shrink-0" size={18} />
                <span>hello@europecalling.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;