import React from 'react';
import ProcessTimeline from '../components/ProcessTimeline';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-white">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-europe-navy mb-6">Our Journey & Philosophy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
          Founded on the belief that borders shouldn't limit potential. We are more than consultants; we are architects of your European future.
        </p>
      </div>

      {/* Story Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-europe-gold rounded-2xl z-0"></div>
             <img src="https://picsum.photos/seed/office/800/600" alt="Our Office" className="relative z-10 rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div>
            <h2 className="text-europe-gold font-bold tracking-widest uppercase mb-2 text-sm">Who We Are</h2>
            <h3 className="font-serif text-3xl font-bold text-europe-navy mb-6">Experts in European Mobility</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Europe Calling began with a simple mission: to demystify the complex process of moving to Europe. We saw too many talented individuals deterred by paperwork and opaque procedures.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, we stand as a beacon of trust, having helped thousands of professionals, students, and families relocate to countries like Germany, Poland, and France.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-europe-cream p-6 rounded-lg">
                <h4 className="font-serif font-bold text-europe-navy text-xl mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">To provide transparent, ethical, and efficient pathways to Europe for global talent.</p>
              </div>
              <div className="bg-europe-cream p-6 rounded-lg">
                <h4 className="font-serif font-bold text-europe-navy text-xl mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">To be the world's most trusted partner in cross-border human mobility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-europe-cream py-24 mb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl font-bold text-europe-navy">The Europe Calling Process</h3>
            <p className="text-gray-500 mt-2">A structured path to your success</p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* Founder's Note */}
      <section className="container mx-auto px-6 mb-24">
        <div className="bg-europe-navy rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-europe-gold/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-europe-gold/30 shadow-2xl">
              <img src="https://picsum.photos/seed/founder/400/400" alt="Founder" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-3xl font-bold mb-6">"We build bridges, not walls."</h3>
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                "Moving to a new continent is daunting. I started this company to ensure no one has to face that journey alone. We treat every application as if it were our own family member's."
              </p>
              <div>
                <p className="font-bold text-europe-gold text-xl">Dr. Alexander V.</p>
                <p className="text-sm text-gray-400">Founder & CEO</p>
              </div>
              
              <div className="mt-8 flex items-center gap-4 p-4 bg-white/10 rounded-lg max-w-md cursor-pointer hover:bg-white/20 transition-colors">
                <div className="w-10 h-10 bg-europe-gold rounded-full flex items-center justify-center">
                  <span className="text-white">▶</span>
                </div>
                <div>
                  <p className="font-bold text-sm">Listen to the Founder's Podcast</p>
                  <p className="text-xs text-gray-400">Ep 1: The Future of European Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;