import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { CLINIC_CONFIG, SERVICES_DATA, DOCTORS_DATA } from '../config/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDoctor?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedDoctor,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (preselectedService) setService(preselectedService);
      if (preselectedDoctor) setDoctor(preselectedDoctor);
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen, preselectedService, preselectedDoctor]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid Pakistani phone number (e.g., 0316 4768078).');
      return;
    }
    if (!preferredDate) {
      setErrorMessage('Please choose your preferred appointment date.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Create prefilled WhatsApp URL
      const text = `Hello Crescent Smile Dental Studio!\nI would like to book a dental appointment.\n\n👤 *Name:* ${fullName.trim()}\n📞 *Phone:* ${phoneNumber.trim()}\n📅 *Date:* ${preferredDate}\n⏰ *Time:* ${preferredTime}\n🦷 *Service:* ${service || 'General Consultation'}${doctor ? `\n👨‍⚕️ *Doctor:* ${doctor}` : ''}${notes ? `\n📝 *Notes:* ${notes}` : ''}`;
      
      const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
      
      // Auto open WhatsApp in new tab after 1.5 seconds
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1200);
    }, 600);
  };

  const timeSlots = [
    '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E4E8F2] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E4E8F2] bg-gradient-to-r from-slate-50 to-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
              <p className="text-xs font-semibold text-[#1F3FF0] tracking-wide uppercase">Crescent Smile Dental Studio</p>
            </div>
            <h3 id="booking-modal-title" className="text-xl font-bold text-[#0B1B4D]">
              Book Your Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#E8EDFF] text-[#1F3FF0] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#0B1B4D] mb-2">Booking Request Received!</h4>
              <p className="text-[#5B6478] text-sm mb-6 max-w-sm mx-auto">
                Thank you, <strong className="text-[#0B1B4D]">{fullName}</strong>! Our clinical coordinator will confirm your {preferredDate} slot at {preferredTime}.
              </p>
              <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-2xl text-xs text-[#0B1B4D] mb-6">
                🚀 Opening your pre-filled WhatsApp confirmation to <strong>{CLINIC_CONFIG.phone}</strong>...
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#22C55E] text-white font-semibold text-sm hover:bg-[#1ea750] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp Now
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B4D] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ayesha Siddiqui"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-[#E4E8F2] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] transition-all text-[#0B1B4D]"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B4D] uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="0316 4768078"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-[#E4E8F2] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] transition-all text-[#0B1B4D]"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">We will send appointment confirmation and location map here.</p>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1B4D] uppercase tracking-wider mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-[#E4E8F2] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] transition-all text-[#0B1B4D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1B4D] uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-[#E4E8F2] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] transition-all text-[#0B1B4D]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B4D] uppercase tracking-wider mb-1.5">
                  Select Treatment / Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-[#E4E8F2] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] transition-all text-[#0B1B4D]"
                >
                  <option value="">General Dental Consultation & Checkup</option>
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>{s.title} ({s.priceEstimate})</option>
                  ))}
                </select>
              </div>

              {/* Doctor Preference */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B4D] uppercase tracking-wider mb-1.5">
                  Preferred Doctor (Optional)
                </label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-[#E4E8F2] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] transition-all text-[#0B1B4D]"
                >
                  <option value="">Any Available Specialist</option>
                  {DOCTORS_DATA.map((d) => (
                    <option key={d.name} value={d.name}>{d.name} – {d.role.split('&')[0]}</option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#0B1B4D] uppercase tracking-wider mb-1.5">
                  Reason for Visit / Any Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Tooth sensitivity, interested in veneers, regular scaling..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 text-sm bg-slate-50 border border-[#E4E8F2] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] transition-all text-[#0B1B4D] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(31,63,240,0.30)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirm & Book Appointment</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  Open daily until 9 PM · Office No. 1, 2nd Floor, Crescent Arcade, G-8 Markaz, Islamabad
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
