import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-europe-navy mb-12 text-center">Get in Touch</h1>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Info Side */}
          <div className="bg-europe-navy text-white p-12 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-8 text-europe-gold">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg shrink-0">
                    <MapPin size={24} className="text-europe-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Our Headquarters</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      123 Global Plaza, Business Bay<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg shrink-0">
                    <Phone size={24} className="text-europe-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Phone</p>
                    <p className="text-gray-300 text-sm">+971 50 123 4567</p>
                    <p className="text-gray-300 text-sm">+48 123 456 789 (EU Office)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg shrink-0">
                    <Mail size={24} className="text-europe-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Email</p>
                    <p className="text-gray-300 text-sm">support@europecalling.com</p>
                    <p className="text-gray-300 text-sm">partners@europecalling.com</p>
                  </div>
                </div>
                
                 <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg shrink-0">
                    <Clock size={24} className="text-europe-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Working Hours</p>
                    <p className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM (CET)</p>
                    <p className="text-gray-300 text-sm">Sat: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <p className="text-sm opacity-60">Licensed Recruitment Agency #12345</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 bg-gray-50">
            <h2 className="font-serif text-2xl font-bold text-europe-navy mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-8 text-sm">We typically reply within 2 hours during business days.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-europe-gold focus:ring-2 focus:ring-europe-gold/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-europe-gold focus:ring-2 focus:ring-europe-gold/20 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-europe-gold focus:ring-2 focus:ring-europe-gold/20 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-europe-gold focus:ring-2 focus:ring-europe-gold/20 outline-none transition-all"></textarea>
              </div>

              <button type="submit" className="w-full bg-europe-gold text-europe-navy font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 h-80 rounded-3xl bg-gray-200 overflow-hidden relative shadow-inner">
           <img src="https://picsum.photos/seed/map/1200/400" className="w-full h-full object-cover opacity-60" alt="Map Location" />
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-6 py-2 rounded-full shadow-lg font-bold text-europe-navy flex items-center gap-2">
                 <MapPin size={16} /> Locate us on Google Maps
              </span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;