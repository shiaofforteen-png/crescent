import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';
import { ToothIcon } from './ToothIcon';
import { CLINIC_CONFIG } from '../config/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Doctors', href: '#doctors', id: 'doctors' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Smile Results', href: '#results', id: 'results' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(11,27,77,0.06)] h-20 border-b border-[#E4E8F2]/80'
            : 'bg-white h-20 border-b border-[#E4E8F2]'
        }`}
      >
        <div className="max-w-[1280px] h-full mx-auto px-4 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Tooth Mark */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3FF0] rounded-xl"
            aria-label="Crescent Smile Dental Studio Home"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#1F3FF0] to-[#3B5BFF] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <ToothIcon size={24} color="white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0B1B4D] leading-tight">
                Crescent Smile
              </span>
              <span className="text-[11px] font-medium text-[#1F3FF0] tracking-wider uppercase">
                Dental Studio · Islamabad
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-[#5B6478]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 hover:text-[#1F3FF0] ${
                    isActive ? 'text-[#1F3FF0]' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1F3FF0] rounded-full animate-in fade-in"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0B1B4D] hover:text-[#1F3FF0] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1F3FF0]" />
              <span className="whitespace-nowrap">{CLINIC_CONFIG.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white text-sm font-semibold shadow-[0_8px_20px_rgba(31,63,240,0.28)] hover:brightness-110 active:scale-98 transition-all whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#0B1B4D] hover:bg-[#E8EDFF] transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white animate-in slide-in-from-top duration-300"
          role="dialog"
          aria-modal="true"
        >
          {/* Drawer Top */}
          <div className="flex items-center justify-between p-5 border-b border-[#E4E8F2]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1F3FF0] to-[#3B5BFF] flex items-center justify-center text-white">
                <ToothIcon size={22} color="white" />
              </div>
              <span className="text-lg font-bold text-[#0B1B4D]">Crescent Smile</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xl font-bold text-[#0B1B4D] hover:text-[#1F3FF0] py-2 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] text-white font-semibold text-center shadow-lg"
              >
                Book Appointment
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-[#0B1B4D] font-semibold text-xs"
                >
                  <Phone className="w-4 h-4 text-[#1F3FF0]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22C55E] text-white font-semibold text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 text-xs text-slate-400 text-center">
                <p>Office No. 1, 2nd Floor, Crescent Arcade, G-8 Markaz</p>
                <p className="mt-1 text-[#22C55E] font-medium">{CLINIC_CONFIG.hoursText}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
