/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceTicker } from './components/ServiceTicker';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Doctors } from './components/Doctors';
import { BeforeAfter } from './components/BeforeAfter';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Faq } from './components/Faq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VideoModal } from './components/VideoModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [preselectedDoctor, setPreselectedDoctor] = useState<string | undefined>();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookingWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setPreselectedDoctor(undefined);
    setIsBookingOpen(true);
  };

  const openBookingWithDoctor = (doctorName: string) => {
    setPreselectedDoctor(doctorName);
    setPreselectedService(undefined);
    setIsBookingOpen(true);
  };

  const openGeneralBooking = () => {
    setPreselectedService(undefined);
    setPreselectedDoctor(undefined);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FB] text-[#0B1B4D] flex flex-col relative selection:bg-[#1F3FF0] selection:text-white">
      {/* Scroll Progress Bar at very top */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#1F3FF0] to-[#3B5BFF] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Top Utility Bar */}
      <TopBar />

      {/* Sticky Header with Scroll-Spy */}
      <Header onOpenBooking={openGeneralBooking} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Overlapping Quick Booking */}
        <Hero
          onOpenBooking={openGeneralBooking}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* 2. Continuous Service Ticker */}
        <ServiceTicker />

        {/* 3. About Us Section with Collage & Stats */}
        <About onOpenBooking={openGeneralBooking} />

        {/* 4. Services Section */}
        <Services onSelectServiceForBooking={openBookingWithService} />

        {/* 5. Repeated Service Ticker Divider */}
        <ServiceTicker className="opacity-95" />

        {/* 6. Why Choose Us */}
        <WhyChooseUs onOpenBooking={openGeneralBooking} />

        {/* 7. Meet Our Doctors */}
        <Doctors onSelectDoctorForBooking={openBookingWithDoctor} />

        {/* 8. Before & After Smile Results */}
        <BeforeAfter onOpenBooking={openGeneralBooking} />

        {/* 9. How It Works Timeline */}
        <HowItWorks />

        {/* 10. Patient Testimonials Carousel */}
        <Testimonials />

        {/* 11. Consultation CTA Banner */}
        <CtaBanner onOpenBooking={openGeneralBooking} />

        {/* 12. FAQ Accordion */}
        <Faq />

        {/* 13. Contact & Google Maps Location */}
        <ContactSection />
      </main>

      {/* 14. Footer with Newsletter & PMDC accreditation */}
      <Footer onOpenBooking={openGeneralBooking} />

      {/* Floating Action Buttons (Desktop WhatsApp + Mobile Sticky Bar) */}
      <FloatingActions onOpenBooking={openGeneralBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
        preselectedDoctor={preselectedDoctor}
      />

      {/* Interactive Video Tour Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenBooking={openGeneralBooking}
      />
    </div>
  );
}
