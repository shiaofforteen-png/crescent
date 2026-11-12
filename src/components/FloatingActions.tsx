import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappDefaultMessage)}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-[#0B1B4D] shadow-lg border border-[#E4E8F2] flex items-center justify-center hover:bg-[#E8EDFF] hover:text-[#1F3FF0] transition-all cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center gap-3 p-3.5 rounded-full bg-[#22C55E] text-white shadow-[0_8px_25px_rgba(34,197,94,0.35)] hover:bg-[#1ea750] hover:scale-105 transition-all duration-300"
          aria-label="Chat with Crescent Smile on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#22C55E]/40 animate-ping pointer-events-none" />
          
          <MessageSquare className="w-6 h-6 relative z-10" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-semibold pr-1 relative z-10">
            WhatsApp Us
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Bar (<640px) */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E4E8F2] px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-2 items-center">
          <a
            href={`tel:${CLINIC_CONFIG.phoneRaw}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100 text-[#0B1B4D] font-semibold text-xs active:bg-slate-200 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#1F3FF0]" />
            <span>Call</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#22C55E] text-white font-semibold text-xs active:brightness-95 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-xs active:brightness-95 transition-colors"
          >
            <span>Book Now</span>
          </button>
        </div>
      </nav>
    </>
  );
};
