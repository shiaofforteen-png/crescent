import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA, CLINIC_CONFIG } from '../config/clinicData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? TESTIMONIALS_DATA.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === TESTIMONIALS_DATA.length - 1 ? 0 : curr + 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading & Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3 block">
              PATIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] text-balance">
              <span className="text-[#1F3FF0]">Loved by Over 10,000 </span>
              <span className="text-[#0B1B4D]">Islamabad Smiles</span>
            </h2>
            <p className="text-base text-[#5B6478] mt-4">
              Real stories from our patients living in G-8, G-9, F-8, and F-10 who trusted us with their smile transformations.
            </p>
          </div>

          {/* Google-Style 4.9 Rating Summary */}
          <div className="bg-[#F4F6FB] rounded-2xl p-5 border border-[#E4E8F2] flex items-center gap-4 self-start md:self-end">
            <div className="w-12 h-12 rounded-xl bg-white text-[#1F3FF0] shadow-sm flex items-center justify-center font-bold text-xl">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#0B1B4D] leading-none">4.9</span>
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Based on <strong>1,240+ verified Google reviews</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card */}
          <div className="bg-[#F4F6FB] rounded-3xl p-8 sm:p-12 border border-[#E4E8F2] shadow-[0_15px_40px_rgba(11,27,77,0.05)] relative">
            <div className="absolute top-8 right-8 text-[#1F3FF0]/20 hidden sm:block">
              <Quote className="w-16 h-16" />
            </div>

            {/* Stars & Treatment Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex text-[#F59E0B]">
                {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#1F3FF0] bg-[#E8EDFF] px-3 py-1 rounded-full">
                {TESTIMONIALS_DATA[currentIndex].treatment}
              </span>
            </div>

            {/* Review Prose */}
            <p className="text-lg sm:text-xl text-[#0B1B4D] font-medium leading-relaxed mb-8 italic">
              "{TESTIMONIALS_DATA[currentIndex].review}"
            </p>

            {/* Patient Info */}
            <div className="flex items-center justify-between pt-6 border-t border-[#E4E8F2]/70">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1F3FF0] to-[#3B5BFF] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {TESTIMONIALS_DATA[currentIndex].avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[#0B1B4D] text-base">
                      {TESTIMONIALS_DATA[currentIndex].name}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" aria-label="Verified Patient" />
                  </div>
                  <span className="text-xs text-slate-500 block">
                    {TESTIMONIALS_DATA[currentIndex].area}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#E8EDFF] text-[#0B1B4D] hover:text-[#1F3FF0] border border-[#E4E8F2] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#E8EDFF] text-[#0B1B4D] hover:text-[#1F3FF0] border border-[#E4E8F2] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#1F3FF0]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
