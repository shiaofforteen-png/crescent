import React from 'react';
import { TIMELINE_STEPS } from '../config/clinicData';
import { Calendar, Stethoscope, Sparkles, Smile } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <Calendar className="w-5 h-5" key="0" />,
    <Stethoscope className="w-5 h-5" key="1" />,
    <Sparkles className="w-5 h-5" key="2" />,
    <Smile className="w-5 h-5" key="3" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F4F6FB] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3 block">
            SIMPLE, SEAMLESS EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] text-balance">
            <span className="text-[#1F3FF0]">How It Works: </span>
            <span className="text-[#0B1B4D]">Your Journey to a Radiant Smile</span>
          </h2>
          <p className="text-base text-[#5B6478] mt-4">
            From your first message to post-treatment follow-up, our process is designed around complete comfort, zero wait times, and total transparency.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Dashed Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 border-t-2 border-dashed border-[#1F3FF0]/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => (
              <div
                key={step.num}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E4E8F2] shadow-[0_10px_30px_rgba(11,27,77,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                {/* Step Number Circle */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1F3FF0] to-[#3B5BFF] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-extrabold text-[#0B1B4D]/15 font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1B4D] mb-2.5">
                  {step.title}
                </h3>

                <p className="text-sm text-[#5B6478] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
