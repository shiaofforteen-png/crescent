import React from 'react';
import { CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { ToothIcon, SparkleIcon } from './ToothIcon';
import { CLINIC_CONFIG } from '../config/clinicData';
import { IMAGES } from '../assets/images';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const stats = [
    { value: "15+", label: "Years Experience", detail: "Serving Islamabad since 2010" },
    { value: "10,000+", label: "Happy Patients", detail: "Across G-8, G-9, F-8 & F-10" },
    { value: "8", label: "Specialist Doctors", detail: "FCPS, BDS & UK certified" },
    { value: "4.9★", label: "Average Rating", detail: "Based on 1,200+ patient reviews" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-[#E8EDFF]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Collage & Rotating Contact Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[500px]">
              
              {/* Primary Photo in Organic Blob */}
              <div className="relative z-10 rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(11,27,77,0.12)] border-4 border-white aspect-[4/3] bg-slate-100">
                <img
                  src={IMAGES.aboutPatient}
                  alt="Doctor and patient smiling at Crescent Smile Dental Studio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Secondary Overlapping Photo */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 z-20 w-3/5 rounded-[28px] overflow-hidden shadow-[0_16px_40px_rgba(11,27,77,0.16)] border-4 border-white aspect-[4/3] bg-slate-100 hidden sm:block">
                <img
                  src={IMAGES.clinicOperatory}
                  alt="Modern dental operatory room in Crescent Arcade G-8 Markaz"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Decorative 4-point Sparkles */}
              <div className="absolute -top-6 -left-4 text-[#1F3FF0] animate-pulse">
                <SparkleIcon size={24} />
              </div>
              <div className="absolute top-1/2 -right-6 text-[#3B5BFF]">
                <SparkleIcon size={18} />
              </div>

              {/* Circular Rotating Badge with Center Phone Icon */}
              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="absolute -top-6 right-4 sm:-right-4 z-30 group cursor-pointer"
                aria-label="Call Crescent Smile Dental Studio"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                  {/* Rotating Circular Text SVG */}
                  <svg
                    className="w-full h-full animate-spin-slow"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[10.5px] font-bold tracking-[0.18em] fill-[#0B1B4D] uppercase">
                      <textPath href="#circlePath">
                        • FAST CALL • CRESCENT SMILE • ISLAMABAD
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Blue Circle with Phone / Tooth */}
                  <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gradient-to-tr from-[#1F3FF0] to-[#3B5BFF] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3">
              ABOUT US
            </span>

            {/* Two-tone H2 */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] mb-6 text-balance">
              <span className="text-[#1F3FF0]">15 Years of Expertise </span>
              <span className="text-[#0B1B4D]">in Dental Care</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5B6478] leading-relaxed mb-6">
              Founded with a mission to make world-class dentistry comfortable, approachable, and painless, Crescent Smile Dental Studio is Islamabad’s premier dental facility in G-8 Markaz.
            </p>

            <p className="text-sm sm:text-base text-[#5B6478] leading-relaxed mb-8">
              We combine European dental chairs, Swiss CBCT 3D imaging, and hospital-grade sterilization protocols with genuine clinical warmth. Whether you require precision ceramic veneers, gentle root canal therapy, or child-friendly care, your comfort and long-term oral health always come first.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-8 w-full">
              {[
                "Premium Dental Services You Can Trust with Zero Hidden Costs",
                "Award-Winning Specialists in Cosmetic & Implant Dentistry",
                "Dedicated Experts & Gentle Painless Care Behind Every Smile",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8EDFF] text-[#1F3FF0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 fill-[#1F3FF0] text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#0B1B4D]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(31,63,240,0.30)] hover:brightness-110 hover:-translate-y-0.5 active:scale-98 transition-all cursor-pointer"
              >
                Learn More & Book
              </button>

              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="px-6 py-3.5 rounded-full border border-[#1F3FF0] text-[#1F3FF0] font-semibold text-sm hover:bg-[#E8EDFF] transition-all"
              >
                Call: {CLINIC_CONFIG.phone}
              </a>
            </div>

          </div>

        </div>

        {/* Counter Strip: 4 Animated Stats */}
        <div className="mt-20 pt-12 border-t border-[#E4E8F2]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#F4F6FB] rounded-3xl p-6 sm:p-8 text-center border border-[#E4E8F2]/60 hover:shadow-[0_10px_30px_rgba(11,27,77,0.06)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F3FF0] mb-2 font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-[#0B1B4D] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#5B6478]">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
