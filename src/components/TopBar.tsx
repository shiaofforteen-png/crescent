import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0B1B4D] text-white text-[13px] h-10 border-b border-white/10 flex items-center px-4 sm:px-8 z-30 relative">
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${CLINIC_CONFIG.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-[#3B5BFF] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#1F3FF0]" />
            <span className="font-medium">{CLINIC_CONFIG.phone}</span>
          </a>

          <a
            href={`mailto:${CLINIC_CONFIG.email}`}
            className="hidden md:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#1F3FF0]" />
            <span>{CLINIC_CONFIG.email}</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-white/70">
            <MapPin className="w-3.5 h-3.5 text-[#1F3FF0]" />
            <span>{CLINIC_CONFIG.areaLabel}</span>
          </div>
        </div>

        {/* Right: Hours status & Social icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
            </span>
            <span className="text-white/90 text-xs hidden sm:inline">
              {CLINIC_CONFIG.hoursText}
            </span>
            <span className="text-white/90 text-xs sm:hidden">
              Open today
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CLINIC_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#22C55E] flex items-center justify-center transition-all hover:-translate-y-0.5 text-white"
              aria-label="WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.086-.312-.102-.715-.24-1.233-.466-2.18-1.002-3.601-3.23-3.71-3.376-.11-.147-.887-1.178-.887-2.247 0-1.069.561-1.597.76-1.815.199-.219.434-.273.578-.273.145 0 .289.002.415.008.133.006.312-.05.488.373.18.433.614 1.498.668 1.608.054.11.09.238.018.383-.072.146-.109.238-.217.364-.109.127-.23.284-.328.382-.109.109-.222.228-.096.445.127.218.563.929 1.209 1.503.832.742 1.534.972 1.752 1.08.217.11.344.092.471-.055.127-.145.543-.635.688-.853.145-.218.29-.182.488-.109.199.073 1.267.597 1.484.706.217.11.362.164.416.255.054.091.054.528-.09 1.015z" />
              </svg>
            </a>

            <a
              href={CLINIC_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-all hover:-translate-y-0.5 text-white"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={CLINIC_CONFIG.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all hover:-translate-y-0.5 text-white"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
