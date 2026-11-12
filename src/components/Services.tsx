import React, { useState } from 'react';
import { ArrowRight, Clock, Check, X, Calendar } from 'lucide-react';
import { ToothIcon } from './ToothIcon';
import { SERVICES_DATA, ServiceItem, CLINIC_CONFIG } from '../config/clinicData';

interface ServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F4F6FB] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] text-balance">
              <span className="text-[#1F3FF0]">A Wide Range of Services </span>
              <span className="text-[#0B1B4D]">for Your Best Smile</span>
            </h2>
            <p className="text-base text-[#5B6478] mt-4">
              Comprehensive clinical dentistry in Islamabad under one roof, using modern digital equipment and gentle, sterile procedures.
            </p>
          </div>

          <button
            onClick={() => onSelectServiceForBooking('')}
            className="self-start md:self-end px-6 py-3 rounded-full border-1.5 border-[#1F3FF0] text-[#1F3FF0] font-semibold text-sm hover:bg-[#1F3FF0] hover:text-white transition-all whitespace-nowrap cursor-pointer"
          >
            Explore All Services & Pricing
          </button>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className={`group bg-white rounded-3xl border border-[#E4E8F2] overflow-hidden shadow-[0_10px_30px_rgba(11,27,77,0.04)] hover:shadow-[0_20px_45px_rgba(11,27,77,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col ${
                service.featured ? 'border-b-4 border-b-[#1F3FF0]' : ''
              }`}
            >
              {/* Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Overlapping 64px Circular Blue Icon Badge */}
                <div className="absolute -bottom-6 left-6 w-16 h-16 rounded-full bg-gradient-to-tr from-[#1F3FF0] to-[#3B5BFF] text-white flex items-center justify-center shadow-lg border-3 border-white group-hover:-translate-y-1 transition-transform">
                  <ToothIcon size={28} color="white" />
                </div>

                {service.featured && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-[#1F3FF0] font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="pt-9 p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#1F3FF0]" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="font-semibold text-[#1F3FF0]">{service.priceEstimate}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1B4D] mb-3 group-hover:text-[#1F3FF0] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#5B6478] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E8F2]/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1F3FF0] hover:text-[#0B1B4D] transition-colors cursor-pointer group/btn"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#E8EDFF] text-[#1F3FF0] hover:bg-[#1F3FF0] hover:text-white transition-colors cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E4E8F2] overflow-hidden">
            <div className="relative h-48 w-full bg-slate-100">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#1F3FF0] tracking-wider uppercase">
                  Service Overview
                </span>
                <span className="text-xs font-semibold text-[#22C55E] bg-emerald-50 px-2.5 py-1 rounded-full">
                  {selectedService.priceEstimate}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0B1B4D] mb-3">
                {selectedService.title}
              </h3>

              <p className="text-sm text-[#5B6478] leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#0B1B4D] uppercase tracking-wider mb-3">
                  What's Included:
                </h4>
                <div className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1B4D]">
                      <div className="w-4 h-4 rounded-full bg-[#E8EDFF] text-[#1F3FF0] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#E4E8F2]">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForBooking(title);
                  }}
                  className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-sm shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Treatment</span>
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-full border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
