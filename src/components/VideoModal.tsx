import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ShieldCheck, Sparkles } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';
import { IMAGES } from '../assets/images';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    { title: "Sterilization Suite", desc: "100% sterile sealed instruments adhering to CDC & WHO guidelines." },
    { title: "Ergonomic Operatory", desc: "Italian-engineered dental chair with whisper-quiet digital systems." },
    { title: "3D Digital Imaging", desc: "Ultra-low radiation CBCT scans and intraoral precision cameras." },
    { title: "Gentle Treatment", desc: "Computerized painless numbing protocols and caring dentists." },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#0B1B4D] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
            <h3 id="video-modal-title" className="text-sm font-semibold tracking-wide text-white">
              Crescent Smile Virtual Clinic Tour · G-8 Markaz Islamabad
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
          <img
            src={IMAGES.clinicOperatory}
            alt="Crescent Smile Dental Studio modern operatory"
            className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/30" />

          {/* Chapter Overlay Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1F3FF0]" />
            <span className="font-semibold text-white">Highlight:</span>
            <span className="text-blue-200">{chapters[activeChapter].title}</span>
          </div>

          {/* Center Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-[#1F3FF0]/90 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-[0_0_30px_rgba(31,63,240,0.6)] cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
            </button>
          </div>

          {/* Bottom Bar Inside Video */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs z-10">
            <div className="flex items-center gap-2 text-white/90">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span>Full In-Person Tour: Crescent Arcade, G-8 Markaz</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-white/70 font-mono">01:45 / 02:30</span>
            </div>
          </div>
        </div>

        {/* Video Chapters & Tour Points */}
        <div className="p-6 bg-[#0B1B4D]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {chapters.map((ch, idx) => (
              <button
                key={ch.title}
                onClick={() => setActiveChapter(idx)}
                className={`text-left p-3 rounded-2xl border transition-all text-xs ${
                  activeChapter === idx
                    ? 'border-[#1F3FF0] bg-[#1F3FF0]/20 text-white'
                    : 'border-white/10 hover:border-white/20 text-white/70'
                }`}
              >
                <span className="text-[10px] text-blue-300 block font-mono">0{idx + 1}</span>
                <span className="font-semibold block truncate mt-0.5">{ch.title}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
            <div className="text-left w-full sm:w-auto">
              <p className="text-xs text-blue-200">
                Experience pain-free dentistry in Islamabad.
              </p>
              <p className="text-xs text-white/60">
                {CLINIC_CONFIG.hoursText} · Walk-ins & appointments welcome
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="px-4 py-2.5 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                Call {CLINIC_CONFIG.phone}
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="px-5 py-2.5 rounded-full bg-[#1F3FF0] hover:bg-[#3B5BFF] text-white text-xs font-semibold transition-colors"
              >
                Book Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
