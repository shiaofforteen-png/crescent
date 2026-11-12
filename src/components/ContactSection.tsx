import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';
import { CLINIC_CONFIG, SERVICES_DATA } from '../config/clinicData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('General Consultation');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const text = `Hello Crescent Smile Dental Studio!\nI sent an inquiry via your website:\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n🦷 *Service:* ${service}${message ? `\n💬 *Message:* ${message}` : ''}`;
      const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3 block">
            VISIT & REACH US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] text-balance">
            <span className="text-[#1F3FF0]">Conveniently Located </span>
            <span className="text-[#0B1B4D]">in G-8 Markaz, Islamabad</span>
          </h2>
          <p className="text-base text-[#5B6478] mt-4">
            Easy parking, elevator access to the 2nd Floor, and flexible evening slots until 9 PM. We look forward to welcoming you!
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards + Appointment Form */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* 4 Contact Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address */}
              <div className="p-5 rounded-2xl bg-[#F4F6FB] border border-[#E4E8F2] flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8EDFF] text-[#1F3FF0] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Our Studio</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B1B4D] leading-snug">
                    {CLINIC_CONFIG.address}
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-5 rounded-2xl bg-[#F4F6FB] border border-[#E4E8F2] flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8EDFF] text-[#1F3FF0] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                  <a
                    href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                    className="text-xs sm:text-sm font-bold text-[#1F3FF0] hover:underline block leading-snug"
                  >
                    {CLINIC_CONFIG.phone}
                  </a>
                  <span className="text-[11px] text-slate-400">Direct booking line</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#F4F6FB] border border-[#E4E8F2] flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8EDFF] text-[#1F3FF0] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Inquiries</h4>
                  <a
                    href={`mailto:${CLINIC_CONFIG.email}`}
                    className="text-xs sm:text-sm font-semibold text-[#0B1B4D] hover:text-[#1F3FF0] block truncate leading-snug"
                  >
                    {CLINIC_CONFIG.email}
                  </a>
                  <span className="text-[11px] text-slate-400">Replies within 2 hours</span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="p-5 rounded-2xl bg-[#F4F6FB] border border-[#E4E8F2] flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8EDFF] text-[#1F3FF0] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Clinic Timings</h4>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] inline-block animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-[#0B1B4D]">{CLINIC_CONFIG.hoursText}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">11:00 AM – 9:00 PM Daily</span>
                </div>
              </div>

            </div>

            {/* Direct Message Form */}
            <div className="bg-[#F4F6FB] rounded-3xl p-6 sm:p-8 border border-[#E4E8F2]">
              <h3 className="text-xl font-bold text-[#0B1B4D] mb-2">
                Send Us a Quick Message
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6478] mb-6">
                Fill in your details and our care coordinator will reach out to confirm your inquiry or slot.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-white rounded-2xl border border-emerald-200 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#22C55E] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-[#0B1B4D] mb-1">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Opening WhatsApp to connect directly with Dr. Ayesha’s team...
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-[#1F3FF0] hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#0B1B4D] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Tariq Mehmood"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#E4E8F2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] text-[#0B1B4D]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#0B1B4D] mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="0316 4768078"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#E4E8F2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] text-[#0B1B4D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-[#0B1B4D] mb-1">
                      Service / Interest
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#E4E8F2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] text-[#0B1B4D]"
                    >
                      <option value="General Consultation">General Consultation & Check-up</option>
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="block text-xs font-semibold text-[#0B1B4D] mb-1">
                      How can we help you? (Optional)
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={3}
                      placeholder="Share any tooth sensitivity, aesthetic goals, or preferred appointment dates..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 text-sm bg-white border border-[#E4E8F2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3FF0] text-[#0B1B4D] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-sm shadow-[0_8px_20px_rgba(31,63,240,0.25)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry & Connect</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Embed with "Get Directions" */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-[#F4F6FB] rounded-3xl p-4 sm:p-6 border border-[#E4E8F2] shadow-[0_15px_40px_rgba(11,27,77,0.06)]">
              
              <div className="flex items-center justify-between mb-4 px-2">
                <div>
                  <h3 className="text-base font-bold text-[#0B1B4D]">
                    Crescent Arcade, G-8 Markaz
                  </h3>
                  <p className="text-xs text-slate-500">
                    2nd Floor, Office No. 1 · Elevator available
                  </p>
                </div>

                <a
                  href={CLINIC_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1F3FF0] hover:bg-[#3B5BFF] text-white text-xs font-semibold transition-all shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Map Frame */}
              <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#E4E8F2] bg-slate-200">
                <iframe
                  title="Crescent Smile Dental Studio Location Map"
                  src={CLINIC_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Area Highlights */}
              <div className="mt-4 pt-4 border-t border-[#E4E8F2] grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-[#5B6478]">
                <div>
                  <strong className="text-[#0B1B4D] block">From F-8 / F-10:</strong>
                  <span>5–8 mins via Margalla Rd</span>
                </div>
                <div>
                  <strong className="text-[#0B1B4D] block">From G-9 / G-10:</strong>
                  <span>3–5 mins drive</span>
                </div>
                <div>
                  <strong className="text-[#0B1B4D] block">Parking:</strong>
                  <span>Ample Markaz plaza parking</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
