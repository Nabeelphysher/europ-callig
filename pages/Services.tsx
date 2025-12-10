import React from 'react';
import { PACKAGES } from '../constants';
import { Check, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-europe-navy mb-6">Transparent Services</h1>
          <p className="text-xl text-gray-600">
            Choose the level of support that suits your confidence and budget. No hidden costs, just clear value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`rounded-2xl p-8 border-2 transition-all duration-300 relative flex flex-col ${
                pkg.type === 'Customized' 
                ? 'border-europe-gold bg-white shadow-2xl scale-100 md:scale-105 z-10' 
                : 'border-transparent bg-white shadow-lg'
              }`}
            >
              {pkg.type === 'Customized' && (
                <div className="absolute top-0 right-0 bg-europe-gold text-europe-navy text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-serif text-3xl font-bold text-europe-navy mb-2">{pkg.title}</h3>
                <p className="text-gray-500">{pkg.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-1 rounded-full ${pkg.type === 'Customized' ? 'bg-europe-gold/20 text-europe-gold' : 'bg-gray-100 text-gray-500'}`}>
                      <Check size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                pkg.type === 'Customized'
                ? 'bg-europe-navy text-white hover:bg-europe-blue shadow-lg'
                : 'bg-europe-cream text-europe-navy hover:bg-gray-200'
              }`}>
                Choose {pkg.type}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-europe-cream rounded-3xl p-12 text-center">
           <ShieldCheck className="w-16 h-16 text-europe-gold mx-auto mb-6" />
           <h3 className="font-serif text-2xl font-bold text-europe-navy mb-4">Our Guarantee</h3>
           <p className="text-gray-600 max-w-2xl mx-auto mb-8">
             We do not sell visas. We charge for professional consulting, documentation, and representation services. If your profile is not eligible, we will tell you upfront. Honesty is our policy.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Services;