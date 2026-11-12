import React, { useState } from 'react';
import { ArrowUp, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { ToothIcon } from './ToothIcon';
import { CLINIC_CONFIG, SERVICES_DATA } from '../config/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1B4D] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Top Mini CTA / Free Assessment Strip */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
              Get Oral Health Tips & Exclusive Treatment Offers
            </h3>
            <p className="text-sm text-blue-200">
              Join 3,000+ Islamabad families receiving our seasonal dental health reminders.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto items-center gap-2 max-w-md">
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-sm text-[#22C55E] font-semibold bg-white/10 px-4 py-2.5 rounded-full border border-white/10">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#1F3FF0] w-full"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#1F3FF0] hover:bg-[#3B5BFF] text-white font-semibold text-sm transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#1F3FF0] flex items-center justify-center text-white">
                <ToothIcon size={22} color="white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Crescent Smile
              </span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Islamabad’s modern destination for gentle, comprehensive, and aesthetic dental care. Serving patients across G-8, G-9, G-10, F-8, and F-10 with world-class medical standards.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { name: 'WhatsApp', href: CLINIC_CONFIG.socialLinks.whatsapp, path: 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.086-.312-.102-.715-.24-1.233-.466-2.18-1.002-3.601-3.23-3.71-3.376-.11-.147-.887-1.178-.887-2.247 0-1.069.561-1.597.76-1.815.199-.219.434-.273.578-.273.145 0 .289.002.415.008.133.006.312-.05.488.373.18.433.614 1.498.668 1.608.054.11.09.238.018.383-.072.146-.109.238-.217.364-.109.127-.23.284-.328.382-.109.109-.222.228-.096.445.127.218.563.929 1.209 1.503.832.742 1.534.972 1.752 1.08.217.11.344.092.471-.055.127-.145.543-.635.688-.853.145-.218.29-.182.488-.109.199.073 1.267.597 1.484.706.217.11.362.164.416.255.054.091.054.528-.09 1.015z' },
                { name: 'Instagram', href: CLINIC_CONFIG.socialLinks.instagram, path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Facebook', href: CLINIC_CONFIG.socialLinks.facebook, path: 'M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1F3FF0] flex items-center justify-center transition-all hover:-translate-y-0.5 text-white"
                  aria-label={s.name}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#home" className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all">
                  Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all">
                  Specialist Doctors
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all">
                  Smile Transformations
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Dental Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all truncate max-w-full"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1F3FF0] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{CLINIC_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1F3FF0] shrink-0" />
                <a href={`tel:${CLINIC_CONFIG.phoneRaw}`} className="text-xs hover:text-white font-medium">
                  {CLINIC_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1F3FF0] shrink-0" />
                <a href={`mailto:${CLINIC_CONFIG.email}`} className="text-xs hover:text-white">
                  {CLINIC_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-[#22C55E] font-semibold block">{CLINIC_CONFIG.hoursText}</span>
                  <span className="text-white/50 text-[11px]">11:00 AM – 9:00 PM (Daily)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2025 {CLINIC_CONFIG.businessName}. All rights reserved. Registered with Pakistan Medical & Dental Council (PMDC).
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Care</a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
