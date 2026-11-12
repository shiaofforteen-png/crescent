import React from 'react';
import { ShieldCheck, Sparkles, Award, Receipt, Clock, HeartPulse } from 'lucide-react';
import { WHY_US_FEATURES, CLINIC_CONFIG } from '../config/clinicData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const icons = [
    <Sparkles className="w-6 h-6" key="0" />,
    <ShieldCheck className="w-6 h-6" key="1" />,
    <Award className="w-6 h-6" key="2" />,
    <Receipt className="w-6 h-6" key="3" />,
    <Clock className="w-6 h-6" key="4" />,
    <HeartPulse className="w-6 h-6" key="5" />,
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3 block">
            THE CRESCENT SMILE DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] text-balance">
            <span className="text-[#1F3FF0]">Why Patients Trust </span>
            <span className="text-[#0B1B4D]">Crescent Smile</span>
          </h2>
          <p className="text-base text-[#5B6478] mt-4">
            We hold ourselves to uncompromising standards of clinical excellence, painless care, and honest communication for families in Islamabad.
          </p>
        </div>

        {/* 2x3 Grid of Feature Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl bg-[#F4F6FB] border border-[#E4E8F2] hover:bg-[#1F3FF0] hover:border-[#1F3FF0] hover:shadow-[0_20px_40px_rgba(31,63,240,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-[#E8EDFF] text-[#1F3FF0] group-hover:bg-white group-hover:text-[#1F3FF0] flex items-center justify-center mb-6 transition-colors shadow-xs">
                  {icons[idx]}
                </div>

                <h3 className="text-xl font-bold text-[#0B1B4D] group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#5B6478] group-hover:text-white/90 leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E4E8F2]/60 group-hover:border-white/20 flex items-center text-xs font-semibold text-[#1F3FF0] group-hover:text-white transition-colors">
                <span>Verified Quality Standard</span>
                <span className="ml-auto" aria-hidden="true">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#E8EDFF]/60 border border-[#1F3FF0]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#1F3FF0] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0B1B4D]">
                Looking for evening or urgent weekend appointments?
              </h4>
              <p className="text-xs sm:text-sm text-[#5B6478]">
                We are open daily until 9:00 PM at Crescent Arcade, G-8 Markaz.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-7 py-3 rounded-full bg-[#1F3FF0] text-white font-semibold text-sm hover:bg-[#3B5BFF] shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            Schedule Free Assessment
          </button>
        </div>

      </div>
    </section>
  );
};
