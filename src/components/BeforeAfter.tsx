import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { SparkleIcon } from './ToothIcon';

interface BeforeAfterProps {
  onOpenBooking: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="results" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3 block">
            REAL SMILE TRANSFORMATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] text-balance">
            <span className="text-[#1F3FF0]">See the Real </span>
            <span className="text-[#0B1B4D]">Before & After Difference</span>
          </h2>
          <p className="text-base text-[#5B6478] mt-4">
            Drag the slider to compare clinical results. We craft healthy, vibrant, and natural-looking smiles that fit your individual facial aesthetics.
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto bg-[#F4F6FB] rounded-3xl p-6 sm:p-10 border border-[#E4E8F2] shadow-[0_15px_40px_rgba(11,27,77,0.06)]">
          
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize border-2 border-white"
          >
            {/* "After" Image (Background Full Layer) */}
            <img
              src="/src/assets/images/smile_after_teeth_1794471000983.jpg"
              alt="Smile Transformation After cosmetic dentistry treatment"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            
            {/* "Before" Image (Clipped Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/smile_before_teeth_1794470999761.jpg"
                alt="Smile Transformation Before cosmetic dentistry treatment"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                }}
                draggable="false"
              />
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                Before
              </div>
            </div>

            {/* "After" Badge (Right side) */}
            <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#1F3FF0]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              After (2 Visits)
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#1F3FF0] text-white flex items-center justify-center shadow-2xl border-3 border-white">
                <div className="flex items-center gap-1 text-[11px] font-bold">
                  <span>◀</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Accessibility Control */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span>Drag slider or click anywhere to compare</span>
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Before and after slider position"
              className="w-32 accent-[#1F3FF0]"
            />
          </div>

          {/* Case Study Details Strip */}
          <div className="mt-8 pt-6 border-t border-[#E4E8F2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#1F3FF0]" />
                <h4 className="text-base font-bold text-[#0B1B4D]">
                  Case: Full Aesthetic Ceramic Veneers & In-Office Whitening
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#5B6478]">
                Patient from F-8/2 Islamabad: Severe fluorosis staining & chipped central incisors corrected in 2 appointments with painless preparation.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-98 transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              Get Your Smile Makeover
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
