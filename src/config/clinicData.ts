/**
 * Crescent Smile Dental Studio
 * Centralized Business Configuration & Content Store
 * Editable in one place to easily modify clinic details, phone numbers, doctors, and copy.
 */

import { IMAGES } from '../assets/images';

export const CLINIC_CONFIG = {
  businessName: "Crescent Smile Dental Studio",
  tagline: "Gentle care. Confident smiles.",
  phone: "+92 316 4768078",
  phoneRaw: "+923164768078",
  whatsappNumber: "923164768078",
  whatsappDefaultMessage: "Hello! I would like to book a dental appointment at Crescent Smile Dental Studio.",
  email: "info@crescentsmile.pk",
  address: "Office No. 1, 2nd Floor, Crescent Arcade, G-8 Markaz, Islamabad, Pakistan",
  areaLabel: "G-8 Markaz, Islamabad",
  hoursText: "Open daily · Closes 9 PM",
  hoursDetail: "Monday – Sunday: 11:00 AM – 9:00 PM (Emergency care available)",
  rating: "4.9",
  reviewCount: "1,240+",
  experienceYears: "15+",
  patientsServed: "10,000+",
  specialistCount: "8",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Crescent+Arcade+G-8+Markaz+Islamabad",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4589254093863!2d73.03758367629555!3d33.68925487329712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe38e3a2c589%3A0xb36d85ebae631ea3!2sG-8%20Markaz%20G%208%20Markaz%20G-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/923164768078",
    youtube: "https://youtube.com",
  },
  servingAreas: ["G-8 Markaz", "G-9", "G-10", "F-8", "F-10", "Blue Area", "Islamabad"],
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  priceEstimate: string;
  features: string[];
  image: string;
  featured?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    shortDesc: "Complete oral check-ups, ultrasonic scaling, digital x-rays, and preventative fluoride treatments for long-term oral health.",
    fullDesc: "Our comprehensive preventive care keeps your teeth and gums healthy for life. Using high-definition digital intraoral cameras and gentle ultrasonic scalers, we detect micro-cavities early and remove stubborn plaque with zero discomfort.",
    duration: "45–60 mins",
    priceEstimate: "From PKR 3,500",
    features: [
      "HD Digital Intraoral Scanning",
      "Painless Ultrasonic Scaling & Polishing",
      "Deep Periodontal Gum Assessment",
      "Custom Fluoride & Remineralization Therapy"
    ],
    image: IMAGES.dentalProcedure,
    featured: true,
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Permanent, bio-compatible titanium implants that look, feel, and function just like natural teeth for lifelong confidence.",
    fullDesc: "Restore missing teeth with gold-standard Swiss titanium implants. Our 3D CBCT guided surgical protocol guarantees microscopic accuracy, minimal healing downtime, and natural masticatory strength.",
    duration: "2–3 sessions",
    priceEstimate: "Consultation & 3D Plan",
    features: [
      "Grade-4 Pure Medical Titanium Fixtures",
      "Computer-Guided Flapless Placement",
      "Zirconia Aesthetic Final Crown",
      "Lifetime Structural Warranty"
    ],
    image: IMAGES.clinicOperatory,
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "Professional in-office laser whitening treatment lightening stains by up to 8 shades in a single safe, 45-minute visit.",
    fullDesc: "Eradicate years of stubborn tea, coffee, and tobacco discoloration. Our cool-light LED laser activation formula protects enamel integrity and includes anti-sensitivity desensitizers.",
    duration: "45 mins",
    priceEstimate: "From PKR 18,000",
    features: [
      "Up to 8 Shades Brighter in 1 Visit",
      "Enamel-Safe pH Balanced Formula",
      "Built-in Desensitizing Treatment",
      "Complimentary At-Home Maintenance Kit"
    ],
    image: IMAGES.smileAfter,
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    shortDesc: "Single-sitting rotary endodontics designed to save infected teeth painlessly under computerized local anesthesia.",
    fullDesc: "Forget the outdated myths of painful root canals. Our modern rotary instruments and electronic apex locators ensure quiet, virtually pain-free cleaning and hermetic thermal obturation in just one appointment.",
    duration: "60 mins (Single Sitting)",
    priceEstimate: "From PKR 12,000",
    features: [
      "Single-Visit Rotary Endodontics",
      "Digital Electronic Apex Locator",
      "Thermal Bio-Ceramic Sealant",
      "Post & Core Crown Prep Ready"
    ],
    image: IMAGES.dentalProcedure,
  },
  {
    id: "braces-aligners",
    title: "Braces & Clear Aligners",
    shortDesc: "Virtually invisible aligners and discreet ceramic brackets for children, teens, and adults desiring straight teeth.",
    fullDesc: "Achieve the aligned smile you have always wanted without embarrassing metal wires. We provide custom-molded 3D transparent aligners and aesthetic sapphire braces supervised by specialist orthodontists.",
    duration: "6–14 months",
    priceEstimate: "Flexible monthly installments",
    features: [
      "3D Pre-Treatment Digital Simulation",
      "Removable & Crystal-Clear Plastic",
      "Zero Dietary Restrictions",
      "Monthly Check-in / Remote Monitoring"
    ],
    image: IMAGES.doctorZainab,
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover & Veneers",
    shortDesc: "Handcrafted ultra-thin porcelain veneers and composite bonding customized to your facial proportions and lip line.",
    fullDesc: "Transform chipped, discolored, or unevenly spaced teeth. Our aesthetic dentists design individual porcelain veneers that mimic natural tooth translucency and light reflection.",
    duration: "2 visits",
    priceEstimate: "Custom Aesthetic Plan",
    features: [
      "Digital Smile Design (DSD) Preview",
      "Minimal Prep Ultra-Thin Porcelain",
      "Natural Multi-Layered Translucency",
      "Long-lasting Stain Resistance"
    ],
    image: IMAGES.aboutPatient,
  },
];

export interface DoctorProfile {
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  bio: string;
  image: string;
  specialties: string[];
}

export const DOCTORS_DATA: DoctorProfile[] = [
  {
    name: "Dr. Ayesha Khan",
    role: "Lead Cosmetic Dentist & Smile Designer",
    qualifications: "BDS, RDS, M.Sc. Aesthetic Dentistry (UK)",
    experience: "12+ Years Experience",
    bio: "Passionate about artistic smile transformations, Dr. Ayesha has designed over 2,500 smiles in Islamabad with gentle precision, porcelain veneers, and modern bonding.",
    image: IMAGES.doctorAyesha,
    specialties: ["Porcelain Veneers", "Digital Smile Design", "Laser Whitening", "Composite Artistry"],
  },
  {
    name: "Dr. Bilal Tariq",
    role: "Oral & Maxillofacial Surgeon",
    qualifications: "BDS, FCPS (Oral & Maxillofacial Surgery)",
    experience: "15+ Years Experience",
    bio: "Specializing in painless surgical extractions, bone grafting, and immediate-load dental implants, Dr. Bilal brings hospital-grade surgical expertise to Crescent Smile.",
    image: IMAGES.doctorBilal,
    specialties: ["Dental Implants", "Wisdom Tooth Surgery", "Bone Regeneration", "Sedation Dentistry"],
  },
  {
    name: "Dr. Zainab Malik",
    role: "Consultant Orthodontist & Pedodontist",
    qualifications: "BDS, M.Orth, Certified Clear Aligner Specialist",
    experience: "10+ Years Experience",
    bio: "An advocate for comfortable, discreet teeth straightening for adults and children alike. Dr. Zainab creates healthy, balanced bites that boost long-term facial aesthetics.",
    image: IMAGES.doctorZainab,
    specialties: ["Clear Aligners", "Ceramic Braces", "Early Interceptive Orthodontics", "TMJ Therapy"],
  },
];

export const WHY_US_FEATURES = [
  {
    title: "Painless Modern Techniques",
    description: "Computer-regulated topical anesthesia, vibra-numbing, and ultra-gentle protocols so you never dread the dentist.",
  },
  {
    title: "Hospital-Grade Sterilization",
    description: "Strict 7-stage autoclaving and single-use sealed kits adhering to CDC and WHO medical infection control standards.",
  },
  {
    title: "Board-Certified Specialists",
    description: "Every procedure is executed by certified consultants with international postgraduate training in their exact field.",
  },
  {
    title: "Transparent, Upfront Pricing",
    description: "Detailed treatment quotations in PKR before any procedure begins. Zero surprise charges or hidden fees.",
  },
  {
    title: "Evening Hours Until 9:00 PM",
    description: "Designed for busy Islamabad civil servants, tech professionals, and families who need appointments after work.",
  },
  {
    title: "Same-Day Emergency Relief",
    description: "Urgent care reserved slots for acute toothaches, fractured teeth, and pediatric dental emergencies.",
  },
];

export const TESTIMONIALS_DATA = [
  {
    name: "Usman Rafique",
    area: "Resident, F-8/2 Islamabad",
    rating: 5,
    treatment: "Dental Implant & Crown",
    review: "I had been postponing my implant for 2 years because of dentist anxiety. Dr. Bilal and the team at Crescent Arcade made it 100% painless. The clinic feels like a boutique hotel, super clean and modern.",
    avatar: "UR",
  },
  {
    name: "Mahnoor Tariq",
    area: "Software Engineer, G-9 Markaz",
    rating: 5,
    treatment: "In-Office Laser Whitening",
    review: "Needed whitening before my sister's wedding. Dr. Ayesha was so gentle, and my teeth brightened 7 shades in 45 minutes with zero sensitivity. Loved the late 8 PM slot after my office hours!",
    avatar: "MT",
  },
  {
    name: "Hamza Abbasi",
    area: "Banker, Blue Area / G-8",
    rating: 5,
    treatment: "Clear Aligners",
    review: "Working in client banking, I didn't want metal braces. Dr. Zainab designed my invisible aligners and now my gap is completely closed after just 7 months. Best dental decision of my life.",
    avatar: "HA",
  },
  {
    name: "Dr. Saba Farooq",
    area: "Physician, F-10 Islamabad",
    rating: 5,
    treatment: "Single-Sitting Root Canal",
    review: "As a fellow healthcare professional, their sterilization protocol impressed me immediately. Everything is autoclaved in sealed bags and opened right in front of you. Extremely competent staff.",
    avatar: "SF",
  },
  {
    name: "Kamran Qureshi",
    area: "Business Owner, G-10 Markaz",
    rating: 5,
    treatment: "Family Dentistry & Checkup",
    review: "We bring our entire family here, including my 6-year-old son who used to cry at clinic visits. The staff is so warm and welcoming. Crescent Smile is truly an asset for Islamabad residents.",
    avatar: "KQ",
  },
];

export const FAQ_DATA = [
  {
    q: "Is dental treatment at Crescent Smile really painless?",
    a: "Yes! Modern dentistry has evolved significantly. We use computerized topical numbing gels before any needle touches the gum, micro-fine needles, vibration-distraction techniques, and modern rotary instruments to ensure you feel virtually no pain throughout your visit.",
  },
  {
    q: "How long does professional teeth whitening last?",
    a: "Our clinical in-office whitening results typically last 18 to 24 months, depending on lifestyle factors such as black tea, green tea, and coffee consumption. We also provide customized home maintenance trays to keep your shade radiant year-round.",
  },
  {
    q: "Do you offer emergency dental appointments in Islamabad?",
    a: "Absolutely. We reserve daily emergency priority slots for severe tooth pain, fractured crowns, abscesses, or facial swelling. Contact our WhatsApp helpline at +92 316 4768078 for immediate triage and same-day scheduling.",
  },
  {
    q: "Can I pay for braces or dental implants in monthly installments?",
    a: "Yes, we believe premium dentistry should be accessible. For treatments like Clear Aligners, Orthodontic Braces, and Full-Mouth Implants, we offer interest-free structured payment plans spread across your active treatment duration.",
  },
  {
    q: "How often should I visit the dentist for a routine check-up?",
    a: "The international standard is every 6 months for a routine dental check-up and ultrasonic scaling. Regular scaling prevents gum bleeding (gingivitis) and catches microscopic decay before it becomes a costly root canal.",
  },
  {
    q: "Is the first consultation free or what is the consultation fee?",
    a: "Our initial consultation is PKR 1,500, which includes a comprehensive 15-point oral exam, intraoral digital camera photographs, and a customized written treatment roadmap. If you proceed with treatment, this fee is adjusted against your bill.",
  },
];

export const TIMELINE_STEPS = [
  {
    num: "01",
    title: "Book Online or WhatsApp",
    desc: "Pick your preferred time slot online or send us a quick WhatsApp. Same-week and evening appointments available.",
  },
  {
    num: "02",
    title: "Consultation & Digital Scan",
    desc: "Our specialists perform high-resolution digital imaging and listen attentively to your goals and health history.",
  },
  {
    num: "03",
    title: "Painless Personalized Care",
    desc: "Experience gentle, stress-free dentistry in our sanitized operatory with clear upfront pricing in PKR.",
  },
  {
    num: "04",
    title: "Radiant Smile & Lifelong Care",
    desc: "Walk out with a confident, healthy smile and receive dedicated follow-up guidance and preventive maintenance.",
  },
];
