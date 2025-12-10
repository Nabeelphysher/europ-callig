import React, { useState } from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import LeadForm from './LeadForm';

const StickyActions: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        {/* WhatsApp Float */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} fill="white" />
          <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </a>

        {/* Enquire Now Sticky */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-europe-gold text-europe-navy font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <Calendar size={20} />
          <span>Book Consultation</span>
        </button>
      </div>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} source="Sticky Button" />
    </>
  );
};

export default StickyActions;