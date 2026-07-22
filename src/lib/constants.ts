import { BookOpen, Calculator, Atom, Home, UserCheck, MessageCircle, FileText, CheckCircle } from "lucide-react";

export const siteData = {
  hero: {
    eyebrow: "Jaipur's Trusted Mathematics & Physics Tutors",
    headline: "Expert Home Tuition for Class 11 & 12 Students",
    subheading: "Personal attention. Proven results. IIT-JEE, NEET & Board expertise — from MNIT Jaipur graduates who care about every student.",
    stats: [
      { label: "Years Experience", value: 10, suffix: "+" },
      { label: "Students Taught", value: 500, suffix: "+" },
      { label: "Success Rate", value: 95, suffix: "%" },
    ]
  },
  tutors: [
    {
      id: "vijay",
      name: "Vijay Sir",
      tag: "Mathematics Expert",
      bio: "M.Sc graduate from MNIT Jaipur with years of experience shaping young mathematical minds. Vijay Sir's structured approach to IIT-JEE and board preparation has helped hundreds of students achieve their academic goals.",
      qualifications: ["M.Sc", "MNIT Jaipur", "IIT-JEE Expert"],
      teaches: ["Class 11", "Class 12", "IIT-JEE Main", "IIT-JEE Advanced", "CBSE", "State Board"],
      phone: "8005771599",
      imagePlaceholder: "/images/vijay.jpg",
    },
    {
      id: "ashok",
      name: "Ashok Sir",
      tag: "Physics Expert",
      bio: "With a deep passion for Physics and an intuitive teaching style, Ashok Sir makes complex concepts simple. Known for his patience and problem-solving approach that builds lasting conceptual clarity.",
      qualifications: ["Physics Expert", "Experienced Tutor"],
      teaches: ["Class 11", "Class 12", "IIT-JEE Main", "IIT-JEE Advanced", "NEET", "CBSE", "State Board"],
      phone: "8952010306",
      imagePlaceholder: "/images/ashok.jpg",
    }
  ],
  subjects: {
    mathematics: {
      title: "Mathematics",
      tutor: "Vijay Sir",
      boards: ["CBSE", "State Board"],
      exams: ["IIT-JEE Main", "IIT-JEE Advanced"],
      topics: ["Calculus", "Algebra", "Coordinate Geometry", "Vectors", "Probability", "Matrices","Trigonometry"]
    },
    physics: {
      title: "Physics",
      tutor: "Ashok Sir",
      boards: ["CBSE", "State Board"],
      exams: ["IIT-JEE Main", "IIT-JEE Advanced", "NEET"],
      topics: ["Mechanics", "Electrostatics", "Optics", "Modern Physics", "Thermodynamics"]
    }
  },
  services: [
    {
      title: "Home Tuition",
      description: "We come to your home. No commute stress for students.",
      icon: Home
    },
    {
      title: "One-on-One Sessions",
      description: "100% personalized attention. No batch distraction.",
      icon: UserCheck
    },
    {
      title: "Module Solving",
      description: "Allen · Narayana · Aakash · Sri Chaitnaya modules solved with explanation.",
      icon: BookOpen
    },
    {
      title: "Doubt Clearing",
      description: "Instant doubt resolution. WhatsApp support between sessions.",
      icon: MessageCircle
    }
  ],
  features: [
    "MNIT Jaipur Graduate (Vijay Sir)",
    "IIT-JEE, NEET & Board Expertise — Same Tutor",
    "Home Visits — No Commute",
    "Personal Attention — Never in a Batch",
    "Module-Based Teaching (Allen, Narayana, Aakash, Sri Chaitanya)",
    "Proven Track Record",
    "Parent Communication & Progress Updates",
    "Nearby Areas Covered — Pratap Nagar, Malviya Nagar, Sanganer, Mansarovar"
  ],
  testimonials: [
    {
      quote: "Vijay Sir explained calculus in a way my school teacher never could. I scored 92 in maths in boards.",
      author: "Rahul K.",
      detail: "Class 12, CBSE"
    },
    {
      quote: "My son was struggling with IIT-JEE. After just 3 months with Vijay Sir, his confidence completely transformed.",
      author: "Parent",
      detail: "Malviya Nagar"
    },
    {
      quote: "Ashok Sir makes physics fun. His real-world examples actually make concepts stick.",
      author: "Priya S.",
      detail: "Class 11"
    },
    {
      quote: "Both teachers together are a perfect combination. My daughter got top scores in both subjects.",
      author: "Parent",
      detail: "Sanganer"
    }
  ],
  areas: [
    "Pratap Nagar",
    "Malviya Nagar",
    "Sanganer",
    "Mansarovar",
    "Nearby South Jaipur Areas"
  ],
  faq: [
    {
      q: "What is the fee structure?",
      a: "Fees vary based on subject, class, and frequency of sessions. Please call or WhatsApp us for a personalized quote."
    },
    {
      q: "Do you teach at home or at a center?",
      a: "We provide home tuition — we come to your residence."
    },
    {
      q: "Do you teach IIT-JEE alongside board preparation?",
      a: "Yes. Vijay Sir specializes in both simultaneously. Board and JEE are taught in an integrated manner."
    },
    {
      q: "Which coaching modules do you solve?",
      a: "Allen, Narayana, Aakash and Sri Chaitanya modules are all covered."
    },
    {
      q: "What areas of Jaipur do you cover?",
      a: "Pratap Nagar, Malviya Nagar, Sanganer, Mansarovar and nearby South Jaipur localities. Contact us to confirm your area."
    },
    {
      q: "How many students are taught at once?",
      a: "We offer strictly one-on-one sessions. No group batches."
    },
    {
      q: "Can I speak to a parent whose child you've taught?",
      a: "Absolutely. We can connect you with references on request."
    },
    {
      q: "How do I book a demo session?",
      a: "Simply call or WhatsApp us. We offer a free demo session."
    }
  ],
  navLinks: [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Subjects", href: "#subjects" },
    { name: "Results", href: "#results" },
    { name: "Contact", href: "#contact" }
  ]
};
