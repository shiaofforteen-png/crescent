import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_DATA, CLINIC_CONFIG } from '../config/clinicData';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#F4F6FB] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3 block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] text-balance">
            <span className="text-[#1F3FF0]">Got Questions? </span>
            <span className="text-[#0B1B4D]">We Have Answers</span>
          </h2>
          <p className="text-base text-[#5B6478] mt-4">
            Everything you need to know about dental care, fees, emergency slots, and appointment scheduling at Crescent Smile.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-[#1F3FF0]/40 shadow-[0_10px_25px_rgba(31,63,240,0.06)] ring-1 ring-[#1F3FF0]/20'
                    : 'bg-white border-[#E4E8F2] hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3FF0] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-[#1F3FF0]' : 'text-[#0B1B4D]'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#1F3FF0] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#5B6478] leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Text */}
        <div className="text-center mt-12 text-sm text-[#5B6478]">
          Have a specific question not listed here?{' '}
          <a
            href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=Hello%2C%20I%20have%20a%20question%20about%20dental%20treatments.`}
            target="_blank"
            rel="noreferrer"
            className="text-[#1F3FF0] font-bold hover:underline"
          >
            Ask us on WhatsApp ({CLINIC_CONFIG.phone})
          </a>
        </div>

      </div>
    </section>
  );
};
