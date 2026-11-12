import React, { useState } from 'react';
import { Play, Calendar, User, Phone, Clock, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { SparkleIcon } from './ToothIcon';
import { CLINIC_CONFIG } from '../config/clinicData';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVideo }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('12:00 PM');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setToastMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setToastMessage('Please enter a valid phone number (0316 4768078).');
      return;
    }
    if (!date) {
      setToastMessage('Please select your preferred date.');
      return;
    }

    setToastMessage('Booking registered! Opening WhatsApp confirmation...');

    const text = `Hello Crescent Smile Dental Studio!\nI would like to book an appointment.\n\n👤 *Patient:* ${name}\n📞 *Phone:* ${phone}\n📅 *Date:* ${date}\n⏰ *Time:* ${time}\n📍 *Clinic:* G-8 Markaz, Islamabad`;
    const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setToastMessage(null);
      setName('');
      setPhone('');
      setDate('');
    }, 1200);
  };

  return (
    <section id="home" className="relative pt-6 sm:pt-12 pb-24 sm:pb-36 bg-gradient-to-b from-[#F4F6FB] via-[#F4F6FB] to-white overflow-hidden">
      {/* Soft background blue glow */}
      <div className="absolute top-1/4 right-5 sm:right-24 w-96 h-96 bg-[#1F3FF0]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-[#3B5BFF]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-[0_4px_16px_rgba(11,27,77,0.06)] border border-[#E4E8F2] mb-6">
              <span className="w-5 h-5 rounded-full bg-[#E8EDFF] flex items-center justify-center text-[#1F3FF0]">
                <SparkleIcon size={12} />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#0B1B4D] tracking-wide">
                Top-Notch Dental Care, Just for You
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight leading-[1.12] mb-6 text-balance">
              <span className="text-[#1F3FF0]">Your Best Dental </span>
              <span className="text-[#0B1B4D]">Experience Awaits</span>
            </h1>

            {/* Benefit Paragraph */}
            <p className="text-base sm:text-lg text-[#5B6478] leading-relaxed max-w-xl mb-8">
              Experience gentle, painless, and modern dentistry in the heart of G-8 Markaz, Islamabad. From routine check-ups and in-office teeth whitening to Swiss dental implants, our certified dental specialists deliver world-class clinical care tailored to your family.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-sm sm:text-base shadow-[0_10px_25px_rgba(31,63,240,0.30)] hover:brightness-110 hover:-translate-y-0.5 active:scale-98 transition-all"
              >
                Explore Our Services
              </a>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-[#E8EDFF] text-[#0B1B4D] border border-[#E4E8F2] font-semibold text-sm sm:text-base transition-all group cursor-pointer"
              >
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#1F3FF0] text-white group-hover:scale-105 transition-transform shadow-md shadow-blue-500/20">
                  <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                  <span className="absolute -inset-1 rounded-full border border-[#1F3FF0]/40 animate-ping pointer-events-none" />
                </span>
                <span>Watch Video Tour</span>
              </button>
            </div>

            {/* Trust points strip */}
            <div className="mt-10 pt-6 border-t border-[#E4E8F2] flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#5B6478]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>100% Painless Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>Open Daily Until 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>Crescent Arcade, G-8 Markaz</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Organic Blob & Floating Badge */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Background Organic Blob */}
            <div className="absolute w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-[40%_60%_70%_30%/40%_50%_60%_55%] bg-gradient-to-tr from-[#1F3FF0] to-[#E8EDFF] opacity-90 blur-xs transition-transform duration-700" />
            
            {/* Decorative Sparkles */}
            <div className="absolute -top-4 right-8 text-[#1F3FF0] animate-pulse">
              <SparkleIcon size={28} />
            </div>
            <div className="absolute bottom-16 -left-4 text-[#3B5BFF]">
              <SparkleIcon size={20} />
            </div>

            {/* Dentist Cutout Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(11,27,77,0.12)] border-4 border-white max-w-[340px] sm:max-w-[400px]">
              <img
                src={IMAGES.heroDentist}
                alt="Lead Dental Specialist at Crescent Smile Dental Studio Islamabad"
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                width={400}
                height={533}
              />
            </div>

            {/* Floating Glass Rating Card */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_12px_32px_rgba(11,27,77,0.14)] border border-[#E4E8F2] animate-float flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#E8EDFF] text-[#1F3FF0] flex items-center justify-center font-bold text-lg">
                <Star className="w-6 h-6 fill-[#F59E0B] text-[#F59E0B]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#0B1B4D] text-base leading-none">4.9 / 5.0</span>
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#5B6478] mt-1 font-medium">Rated by 1,200+ Islamabad Patients</p>
              </div>
            </div>

            {/* Floating Secondary Mini Pill */}
            <div className="absolute top-8 -right-3 z-20 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-[#E4E8F2] flex items-center gap-2 text-xs font-semibold text-[#0B1B4D]">
              <Sparkles className="w-3.5 h-3.5 text-[#1F3FF0]" />
              <span>Hospital-Grade Sterilization</span>
            </div>
          </div>

        </div>

        {/* Floating Interactive Booking Bar (Overlapping Hero bottom) */}
        <div className="mt-16 sm:mt-20 relative z-30">
          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-[0_15px_50px_rgba(11,27,77,0.09)] border border-[#E4E8F2]">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#1F3FF0]" />
                <span className="text-xs sm:text-sm font-bold text-[#0B1B4D] uppercase tracking-wider">
                  Quick Appointment Booking · G-8 Markaz
                </span>
              </div>
              <span className="text-xs text-[#22C55E] font-medium hidden sm:inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] inline-block animate-pulse" />
                Same-week priority slots open
              </span>
            </div>

            {toastMessage && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-[#0B1B4D] flex items-center justify-between">
                <span>{toastMessage}</span>
                <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-slate-700">✕</button>
              </div>
            )}

            <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
              
              {/* Field 1: Patient Name */}
              <div className="lg:col-span-3 relative">
                <label htmlFor="quick-name" className="sr-only">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="quick-name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 text-sm bg-[#F4F6FB] border border-[#E4E8F2] rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] text-[#0B1B4D] transition-colors"
                  />
                </div>
              </div>

              {/* Field 2: Phone */}
              <div className="lg:col-span-3 relative">
                <label htmlFor="quick-phone" className="sr-only">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="quick-phone"
                    type="tel"
                    required
                    placeholder="Phone: 0316 4768078"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 text-sm bg-[#F4F6FB] border border-[#E4E8F2] rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] text-[#0B1B4D] transition-colors"
                  />
                </div>
              </div>

              {/* Field 3: Date */}
              <div className="lg:col-span-2 relative">
                <label htmlFor="quick-date" className="sr-only">Preferred Date</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="quick-date"
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 text-xs sm:text-sm bg-[#F4F6FB] border border-[#E4E8F2] rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] text-[#0B1B4D] transition-colors"
                  />
                </div>
              </div>

              {/* Field 4: Time Slot */}
              <div className="lg:col-span-2 relative">
                <label htmlFor="quick-time" className="sr-only">Time Slot</label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="quick-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 text-sm bg-[#F4F6FB] border border-[#E4E8F2] rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] text-[#0B1B4D] transition-colors appearance-none"
                  >
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Button */}
              <div className="sm:col-span-2 lg:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-sm shadow-[0_8px_20px_rgba(31,63,240,0.30)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Book Appointment</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
