import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { COUNTRIES, PACKAGES, STATS, TESTIMONIALS } from '../constants';
import LeadForm from '../components/LeadForm';

const Home: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section - Immersive Scene */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/europeTravel/1920/1080"
            alt="European Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-europe-navy/90 via-europe-navy/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 pt-20">
          <div className="text-white space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-europe-gold/50 rounded-full bg-europe-navy/50 backdrop-blur-sm text-europe-gold text-sm tracking-wider uppercase font-medium">
              <span className="w-2 h-2 rounded-full bg-europe-gold animate-pulse" />
              Your Gateway to Europe
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
              Trusted Partner for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-europe-gold to-white">Travel & Hospitality</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed font-light">
              We bridge the gap between your talent and European opportunities. Experience a seamless, transparent, and premium journey to your dream destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-europe-gold text-europe-navy font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-europe-gold/20"
              >
                Get Free Consultation
              </button>
              <Link
                to="/services"
                className="border border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-europe-navy transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Packages <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
           <span className="text-xs tracking-widest uppercase">Discover</span>
        </div>
      </section>

      {/* Stats Section - Trust Indicators */}
      <section className="bg-europe-navy py-12 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center group hover:transform hover:-translate-y-1 transition-transform">
                <p className="text-4xl md:text-5xl font-serif font-bold text-europe-gold mb-2">{stat.value}</p>
                <p className="text-white font-bold text-lg">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations - Arch Design */}
      <section className="py-24 bg-europe-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-europe-gold font-bold tracking-widest uppercase mb-3 text-sm">Destinations</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-europe-navy mb-6">Discover Your Next Chapter</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in countries with the highest demand for hospitality and skilled professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COUNTRIES.map((country) => (
              <Link to={`/country/${country.slug}`} key={country.id} className="group cursor-pointer">
                <div className="relative h-[400px] overflow-hidden rounded-t-full rounded-b-[100px] shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="absolute inset-0 bg-europe-navy/20 group-hover:bg-europe-navy/0 transition-colors z-10" />
                  <img src={country.image} alt={country.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-europe-navy/90 to-transparent z-20 text-center">
                    <h4 className="text-2xl font-serif font-bold text-white mb-1">{country.name}</h4>
                    <span className="text-europe-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 block">
                      Explore Opportunities
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Split Card Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h3 className="font-serif text-4xl font-bold text-europe-navy mb-6">Tailored Packages for Every Need</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you need basic documentation support or a full-service concierge for your relocation, we have a package designed for your peace of mind.
                </p>
                <div className="space-y-4 mb-8">
                  {['Transparent Pricing', 'No Hidden Fees', '100% Legal Compliance', 'Post-Landing Support'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-europe-gold" size={20} />
                      <span className="text-europe-navy font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services" className="text-europe-blue font-bold hover:text-europe-navy underline decoration-europe-gold underline-offset-4 decoration-2">
                  View Full Package Details
                </Link>
             </div>

             <div className="grid sm:grid-cols-2 gap-6">
                {PACKAGES.map((pkg) => (
                  <div key={pkg.id} className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${pkg.type === 'Customized' ? 'bg-europe-navy text-white border-europe-navy' : 'bg-europe-cream border-gray-100'}`}>
                    <div className="mb-4">
                      <span className={`text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full ${pkg.type === 'Customized' ? 'bg-europe-gold text-europe-navy' : 'bg-europe-navy/10 text-europe-navy'}`}>
                        {pkg.type}
                      </span>
                    </div>
                    <h4 className={`text-2xl font-serif font-bold mb-4 ${pkg.type === 'Customized' ? 'text-white' : 'text-europe-navy'}`}>{pkg.title}</h4>
                    <p className={`text-sm mb-6 ${pkg.type === 'Customized' ? 'text-gray-300' : 'text-gray-600'}`}>{pkg.description}</p>
                    <button onClick={() => setIsFormOpen(true)} className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${pkg.type === 'Customized' ? 'bg-white text-europe-navy hover:bg-europe-gold' : 'bg-europe-navy text-white hover:bg-europe-blue'}`}>
                      Enquire Now
                    </button>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Dark Mode Slider Style */}
      <section className="py-24 bg-europe-navy text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-europe-gold font-bold tracking-widest uppercase mb-3 text-sm">Success Stories</h2>
              <h3 className="font-serif text-4xl font-bold">Hear From Our Community</h3>
            </div>
            {/* Visual element representing navigation or count */}
            <div className="hidden md:block h-1 w-32 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-europe-gold"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Video Tile */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-800 h-80 md:h-auto">
              <img src="https://picsum.photos/seed/videoThumb/600/800" alt="Video Testimonial" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-europe-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play fill="white" className="text-white ml-1" />
                 </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-xl font-bold mb-1">Success Montage</p>
                <p className="text-sm text-gray-300">Watch real stories from 2023</p>
              </div>
            </div>

            {/* Text Testimonials */}
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div key={t.id} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-europe-gold" />
                  <div>
                    <p className="font-bold text-lg leading-none">{t.name}</p>
                    <p className="text-europe-gold text-sm">{t.role}, {t.country}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex gap-1">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-europe-gold">★</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Final CTA */}
      <section className="py-24 bg-europe-cream relative overflow-hidden">
         {/* Decorative blob */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-europe-gold/5 rounded-l-full -mr-20 z-0 pointer-events-none" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-16 text-center border border-gray-100">
               <h3 className="font-serif text-3xl md:text-4xl font-bold text-europe-navy mb-6">Ready to Start Your European Journey?</h3>
               <p className="text-gray-600 mb-8 text-lg">
                 Join over 2,500 successful clients who trusted Europe Calling. <br className="hidden md:block"/>
                 Your dream career is closer than you think.
               </p>
               <button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-europe-navy text-white text-lg font-bold py-4 px-10 rounded-full hover:bg-europe-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Book Free Consultation
               </button>
               <p className="mt-6 text-sm text-gray-400">No commitment required. 100% confidential.</p>
            </div>
         </div>
      </section>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Home;