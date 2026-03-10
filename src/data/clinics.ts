export interface Doctor {
  name: string;
  credentials: string;
  slug: string;
  photo?: string;
  bio: string;
  education: string[];
  specialties: string[];
  services?: string[];
  bookingUrl?: string;
  fax?: string;
  memberships?: string[];
}

export interface Clinic {
  name: string;
  slug: string;
  type: "family-medicine" | "naturopathic" | "pain-management";
  tagline: string;
  description: string;
  address: string;
  url?: string;
  phone?: string;
  fax?: string;
  hours?: string;
  doctors: Doctor[];
  services: string[];
}

export const clinics: Clinic[] = [
  {
    name: "Monaghan Medical Clinic",
    slug: "monaghan-medical",
    type: "family-medicine",
    tagline: "Comprehensive family medicine for all ages",
    description: "Monaghan Medical Clinic provides comprehensive primary care services with a focus on building lasting relationships with patients and families. Our physicians take the time to listen and develop personalized care plans.",
    address: "1378 Bedford Highway, Bedford, NS B4A 1E2",
    url: "https://monaghanmed.ca/",
    phone: "902-800-3055",
    hours: "Monday–Friday: 8:30 AM – 5:00 PM (by appointment)",
    doctors: [
      {
        name: "Dr. Alexander Emeziem",
        credentials: "MD",
        slug: "alexander-emeziem",
        photo: "/images/doctors/alexander-emeziem.png",
        bio: "Dr. Emeziem is a dedicated family physician known for his compassionate, patient-centered approach to care. He takes the time to truly listen to his patients and their families, developing treatment plans that address the whole person. His patients describe him as professional, understanding, and passionate about their wellbeing.",
        education: [
          "Doctor of Medicine",
          "Licensed with College of Physicians & Surgeons of Nova Scotia"
        ],
        specialties: [
          "Family Medicine",
          "Preventive Care",
          "Chronic Disease Management",
          "Women's Health",
          "IUD Insertions"
        ],
        bookingUrl: "https://portal.healthmyself.net/dremeziem",
        fax: "833-444-0348"
      },
      {
        name: "Dr. Olarinde Babatolu",
        credentials: "MD",
        slug: "olarinde-babatolu",
        photo: "/images/doctors/olarinde-babatolu.jpg",
        bio: "Dr. Babatolu is an experienced family physician committed to providing accessible, high-quality primary care. He has built a strong patient base in the Halifax area and is dedicated to helping patients achieve and maintain optimal health through preventive care and ongoing management of health conditions.",
        education: [
          "Doctor of Medicine",
          "Licensed with College of Physicians & Surgeons of Nova Scotia"
        ],
        specialties: [
          "Family Medicine",
          "Preventive Care",
          "Chronic Disease Management",
          "Men's Health"
        ],
        bookingUrl: "https://portal.healthmyself.net/drolababatolu",
        fax: "833-999-0844"
      }
    ],
    services: [
      "Annual physicals and wellness exams",
      "Chronic disease management",
      "Preventive care and health screenings",
      "Women's and men's health",
      "Minor procedures",
      "Referrals to specialists"
    ]
  },
  {
    name: "Optimal Wellbeing Clinic",
    slug: "optimal-wellbeing",
    type: "naturopathic",
    tagline: "Evidence-based naturopathic medicine",
    description: "Optimal Wellbeing Clinic offers integrative naturopathic healthcare that combines the wisdom of traditional healing methods with modern scientific research. Our naturopathic doctors develop individualized treatment plans focused on treating the whole person and addressing root causes.",
    address: "1378 Bedford Highway, Bedford, NS B4A 1E2",
    url: "https://optimalwellbeing.ca/",
    phone: "902-406-4424",
    fax: "902-406-4428",
    hours: "By appointment",
    doctors: [
      {
        name: "Dr. Colin MacLeod",
        credentials: "ND",
        slug: "colin-macleod",
        photo: "/images/doctors/colin-macleod.jpg",
        bio: "Dr. MacLeod grew up in Cape Breton and has been practicing naturopathic medicine in Halifax since 2011. He integrates traditional healing wisdom with modern scientific research to develop individualized treatment plans. Outside of practice, he's an avid runner who has completed the Bluenose Marathon.",
        education: [
          "Doctor of Naturopathic Medicine, Canadian College of Naturopathic Medicine (CCNM)",
          "Bachelor of Science (Biology), Saint Mary's University",
          "Advanced training in prolotherapy and regenerative injection therapies",
          "Certified in intravenous therapy"
        ],
        specialties: [
          "Chronic Pain Management",
          "Musculoskeletal Injuries",
          "Weight Management",
          "Digestive Health",
          "Cardiovascular Health",
          "Fatigue & Energy Disorders",
          "Cancer Care Support"
        ],
        services: [
          "Prolotherapy (regenerative injections)",
          "IV Nutrient Therapy",
          "Acupuncture",
          "Clinical Nutrition",
          "Herbal Medicine"
        ],
        memberships: [
          "Nova Scotia Association of Naturopathic Doctors",
          "Canadian Association of Naturopathic Doctors"
        ],
        bookingUrl: "https://macleodnaturopathic.janeapp.com/"
      },
      {
        name: "Dr. Joann Osbourne",
        credentials: "ND",
        slug: "joann-osbourne",
        photo: "/images/doctors/joann-osbourne.png",
        bio: "Dr. Osbourne brings a unique combination of laboratory science expertise and naturopathic training to her practice. Her passion is integrating evidence-based medicine from both Western and Eastern traditions within a multidisciplinary healthcare team. A marathoner herself, she applies personal experience with nutrition and recovery in her clinical practice.",
        education: [
          "Doctor of Naturopathic Medicine, Canadian College of Naturopathic Medicine (CCNM)",
          "Bachelor of Science, Memorial University of Newfoundland",
          "Licensed Medical Laboratory Technologist",
          "Advanced training in IV therapy, ozone therapy, prolotherapy, and neural therapy"
        ],
        specialties: [
          "Pediatrics",
          "Allergies & Asthma",
          "Metabolic Conditions",
          "Digestive Disorders",
          "Cardiovascular Health",
          "Autoimmune Conditions",
          "Hormonal Health",
          "Integrated Oncology",
          "Pain Management"
        ],
        services: [
          "Acupuncture",
          "Botanical Medicine",
          "Clinical Nutrition",
          "IV Nutrient Therapy",
          "Homeopathic Medicine",
          "Traditional Chinese Medicine"
        ],
        memberships: [
          "Canadian Association of Naturopathic Doctors",
          "Nova Scotia Association of Naturopathic Doctors"
        ]
      }
    ],
    services: [
      "IV Nutrient Therapy (Vitamin C, Myers' Cocktail, Glutathione)",
      "Prolotherapy & Regenerative Injections",
      "Acupuncture",
      "Clinical Nutrition & Lifestyle Counselling",
      "Botanical & Herbal Medicine",
      "Laboratory Testing",
      "Ozone Therapy",
      "Neural Therapy"
    ]
  },
  {
    name: "Chronic Pain Management Clinic",
    slug: "chronic-pain",
    type: "pain-management",
    tagline: "Specialized care for chronic pain conditions",
    description: "The Chronic Pain Management Clinic provides specialized assessment and treatment for patients living with chronic pain. Dr. Hernandez uses a comprehensive, injection-based approach to help patients reduce pain and improve quality of life, working collaboratively to find solutions beyond medication alone.",
    address: "1378 Bedford Highway, Bedford, NS B4A 1E2",
    phone: "902-407-4545",
    hours: "Monday–Friday: 8:00 AM – 5:00 PM",
    doctors: [
      {
        name: "Dr. Maria del Rosario Hernandez",
        credentials: "MD",
        slug: "maria-hernandez",
        bio: "Dr. Hernandez is a highly qualified pain management specialist who completed her residency at Dalhousie University. She is known for her thorough, compassionate approach and her ability to communicate effectively with patients. She conducts in-person assessments and works collaboratively with patients to develop effective pain management strategies.",
        education: [
          "Doctor of Medicine",
          "Residency at Dalhousie University",
          "Licensed with College of Physicians & Surgeons of Nova Scotia"
        ],
        specialties: [
          "Chronic Pain Management",
          "Migraine & Headache Treatment",
          "TMJ & Facial Pain",
          "Trigeminal Neuralgia",
          "Back Pain & Spinal Conditions",
          "Injection Therapies"
        ]
      }
    ],
    services: [
      "Comprehensive pain assessment",
      "Injection therapies for chronic pain",
      "Migraine treatment",
      "TMJ and facial pain management",
      "Spinal pain management",
      "Collaborative care planning"
    ]
  }
];

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find(c => c.slug === slug);
}

export function getDoctorBySlug(slug: string): { doctor: Doctor; clinic: Clinic } | undefined {
  for (const clinic of clinics) {
    const doctor = clinic.doctors.find(d => d.slug === slug);
    if (doctor) {
      return { doctor, clinic };
    }
  }
  return undefined;
}
