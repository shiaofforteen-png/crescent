import React from 'react';
import { ToothIcon } from './ToothIcon';

interface ServiceTickerProps {
  className?: string;
}

export const ServiceTicker: React.FC<ServiceTickerProps> = ({ className = "" }) => {
  const items = [
    "General Dentistry",
    "Teeth Whitening",
    "Dental Implants",
    "Dental Sealants",
    "Root Canal Treatment",
    "Braces & Aligners",
    "Smile Makeover",
    "Pediatric Dentistry",
    "Porcelain Veneers",
  ];

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-r from-[#1F3FF0] via-[#2F4FFF] to-[#3B5BFF] py-4 sm:py-5 border-y border-white/10 ${className}`}
      aria-label="Services Ticker"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First repetition */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0">
          {items.map((item, idx) => (
            <div key={`ticker-1-${idx}`} className="flex items-center gap-6 sm:gap-8">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-xs">
                {item}
              </span>
              <span className="text-white/80 shrink-0">
                <ToothIcon size={20} color="white" />
              </span>
            </div>
          ))}
        </div>

        {/* Second repetition for seamless infinite looping */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 ml-8 sm:ml-12" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`ticker-2-${idx}`} className="flex items-center gap-6 sm:gap-8">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-xs">
                {item}
              </span>
              <span className="text-white/80 shrink-0">
                <ToothIcon size={20} color="white" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
