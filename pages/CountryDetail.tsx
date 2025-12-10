import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { COUNTRIES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const CountryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const country = COUNTRIES.find((c) => c.slug === slug);
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!country) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-20">
      {/* Country Hero */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-europe-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="animate-fade-in">
            <span className="text-europe-gold font-bold tracking-[0.2em] uppercase mb-4 block">{country.tagline}</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">{country.name}</h1>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="mt-4 bg-white text-europe-navy px-8 py-3 rounded-full font-bold hover:bg-europe-gold hover:text-white transition-colors"
            >
              Apply for {country.name}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-bold text-europe-navy mb-6">Why {country.name}?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{country.description}</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-europe-navy mb-6">Eligibility Criteria</h2>
              <div className="bg-europe-cream p-8 rounded-2xl">
                <ul className="space-y-4">
                  {country.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-600 shrink-0" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-europe-navy mb-6">Application Process</h2>
              <div className="space-y-6">
                {country.processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-europe-navy text-white flex items-center justify-center font-bold text-sm group-hover:bg-europe-gold transition-colors">
                        {idx + 1}
                      </div>
                      {idx !== country.processSteps.length - 1 && <div className="w-0.5 h-full bg-gray-200 my-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-lg text-europe-navy">{step.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-europe-navy mb-4">Interested in {country.name}?</h3>
              <p className="text-gray-500 text-sm mb-6">Fill out the quick form below and our country specialist will contact you.</p>
              
              <button 
                onClick={() => setIsFormOpen(true)}
                className="w-full bg-europe-gold text-europe-navy font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
              >
                Start Assessment <ArrowRight size={18} />
              </button>
              
              <div className="mt-8 border-t pt-6">
                <p className="text-xs text-gray-400 text-center uppercase tracking-wider mb-4">Need help?</p>
                <div className="flex items-center justify-center gap-2 text-europe-navy font-bold">
                  <span>📞 +48 123 456 789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default CountryDetail;