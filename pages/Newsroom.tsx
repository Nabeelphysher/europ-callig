import React from 'react';
import { NEWS } from '../constants';

const Newsroom: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="border-b-4 border-europe-navy pb-6 mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-europe-navy">Newsroom</h1>
          <p className="text-gray-500 mt-4 text-lg">Travel updates, policy changes, and success stories.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-europe-gold font-bold uppercase tracking-wider mb-3">
                <span>{item.category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-gray-400">{item.date}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-europe-navy mb-3 group-hover:text-europe-blue transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {item.summary}
              </p>
              <span className="text-europe-navy font-bold text-sm underline decoration-europe-gold decoration-2 underline-offset-4">Read Full Story</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsroom;