import React from 'react';
import { Calendar, Award, Phone } from 'lucide-react';
import { DOCTORS_DATA, DoctorProfile, CLINIC_CONFIG } from '../config/clinicData';

interface DoctorsProps {
  onSelectDoctorForBooking: (doctorName: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onSelectDoctorForBooking }) => {
  return (
    <section id="doctors" className="py-24 sm:py-32 bg-[#F4F6FB] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-[13px] font-bold text-[#1F3FF0] uppercase tracking-[0.18em] mb-3 block">
            MEDICAL LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] text-balance">
            <span className="text-[#1F3FF0]">Meet Our </span>
            <span className="text-[#0B1B4D]">Specialist Doctors</span>
          </h2>
          <p className="text-base text-[#5B6478] mt-4">
            Our team consists of UK and Pakistan board-certified dental surgeons dedicated to painless precision, artistry, and ethical care.
          </p>
        </div>

        {/* 3-Card Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS_DATA.map((doctor: DoctorProfile) => (
            <div
              key={doctor.name}
              className="group bg-white rounded-3xl border border-[#E4E8F2] overflow-hidden shadow-[0_10px_30px_rgba(11,27,77,0.04)] hover:shadow-[0_20px_45px_rgba(11,27,77,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header with Blob Backdrop */}
                <div className="relative pt-6 px-6 flex justify-center overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
                  <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-[#E8EDFF] opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="relative z-10 w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-2 right-8 z-20 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#1F3FF0] shadow-sm border border-[#E4E8F2]">
                    {doctor.experience}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <span className="text-xs font-semibold text-[#1F3FF0] tracking-wide block mb-1">
                    {doctor.qualifications}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#0B1B4D] mb-1">
                    {doctor.name}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    {doctor.role}
                  </p>

                  <p className="text-sm text-[#5B6478] leading-relaxed mb-6">
                    {doctor.bio}
                  </p>

                  {/* Specialties List */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {doctor.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectDoctorForBooking(doctor.name)}
                  className="w-full py-3 px-4 rounded-full bg-[#E8EDFF] group-hover:bg-[#1F3FF0] text-[#1F3FF0] group-hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book with {doctor.name.split(' ')[1]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
