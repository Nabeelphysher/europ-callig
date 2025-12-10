import React from 'react';

const ProcessTimeline: React.FC = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'We understand your profile, skills, and European aspirations deeply.' },
    { num: '02', title: 'Preparation', desc: 'Expert assistance with CVs, cover letters, and document legalization.' },
    { num: '03', title: 'Placement', desc: 'Connecting you with verified employers or universities in target countries.' },
    { num: '04', title: 'Visa Filing', desc: 'Meticulous visa application filing to maximize success rates.' },
    { num: '05', title: 'Departure', desc: 'Pre-departure briefing and accommodation assistance upon arrival.' },
  ];

  return (
    <div className="relative py-12">
      {/* Mobile Vertical Line */}
      <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-europe-gold/30"></div>

      <div className="grid md:grid-cols-5 gap-8 relative">
        {/* Desktop Wavy Line Background (Simplified visual representation) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-20 z-0">
           <svg className="w-full h-full" preserveAspectRatio="none">
             <path d="M0,40 Q150,80 300,40 T600,40 T900,40 T1200,40" fill="none" stroke="#d4af37" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
           </svg>
        </div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex md:flex-col items-start md:items-center gap-6 md:gap-4 md:text-center group">
            <div className="w-16 h-16 shrink-0 bg-white border-2 border-europe-gold rounded-full flex items-center justify-center font-serif text-2xl font-bold text-europe-navy shadow-lg group-hover:bg-europe-gold group-hover:text-white transition-colors duration-300">
              {step.num}
            </div>
            <div className="pt-2 md:pt-4">
              <h4 className="font-serif text-xl font-bold text-europe-navy mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;