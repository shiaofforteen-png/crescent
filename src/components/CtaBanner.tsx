import React from 'react';
import { Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { SparkleIcon } from './ToothIcon';
import { CLINIC_CONFIG } from '../config/clinicData';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappDefaultMessage)}`;

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#1F3FF0] via-[#2F4FFF] to-[#3B5BFF] p-8 sm:p-14 lg:p-16 text-white overflow-hidden shadow-[0_20px_50px_rgba(31,63,240,0.30)]">
          {/* Subtle Decorative Background Circles & Sparkles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl pointer-events-none" />
          
          <div className="absolute top-8 left-12 text-white/40 animate-pulse hidden sm:block">
            <SparkleIcon size={32} />
          </div>
          <div className="absolute bottom-10 right-16 text-white/30 hidden sm:block">
            <SparkleIcon size={24} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
              </span>
              <span>{CLINIC_CONFIG.hoursText}</span>
              <span className="text-white/60">· Same-Day Slots Available</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Ready for a Healthier, Brighter Smile?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto">
              Book your private consultation at Crescent Arcade, G-8 Markaz. Enjoy gentle, modern dentistry with clear upfront pricing in PKR and zero discomfort.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-white text-[#1F3FF0] font-bold text-sm sm:text-base hover:bg-blue-50 shadow-lg hover:-translate-y-0.5 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold text-sm sm:text-base transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <p className="text-xs text-blue-200 mt-6 font-medium">
              Prefer to call directly? Dial <a href={`tel:${CLINIC_CONFIG.phoneRaw}`} className="underline font-bold text-white">{CLINIC_CONFIG.phone}</a>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
