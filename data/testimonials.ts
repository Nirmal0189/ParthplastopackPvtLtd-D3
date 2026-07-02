export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Rajesh Patel',
    company: 'MedPharm Industries',
    role: 'Head of Procurement',
    content: 'Parth Plasto Pack has been our trusted packaging partner for over 8 years. Their HDPE containers meet all our pharmaceutical grade requirements consistently. Exceptional quality and on-time delivery every single time.',
    rating: 5,
    avatar: '/images/team.webp',
  },
  {
    id: 2,
    name: 'Arun Sharma',
    company: 'NutriPro Supplements',
    role: 'CEO',
    content: 'The protein powder containers from Parth Plasto Pack are best-in-class. Food grade material, airtight sealing, and premium finish that our customers love. They helped us scale from 10K to 100K units per month seamlessly.',
    rating: 5,
    avatar: '/images/ceo.png',
  },
  {
    id: 3,
    name: 'Priya Mehta',
    company: 'HerbaCure Naturals',
    role: 'Quality Manager',
    content: 'We switched to Parth Plasto Pack for our Ayurvedic product packaging 3 years ago. Their ISO-certified manufacturing process and consistent quality have significantly reduced our rejection rates to nearly zero.',
    rating: 5,
    avatar: '/images/team.webp',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    company: 'FitBody Nutrition',
    role: 'Operations Director',
    content: 'Outstanding custom moulding capabilities. They developed a unique container design for our protein range that stands out on retail shelves. Quick prototyping and excellent after-sales support.',
    rating: 4,
    avatar: '/images/ceo.png',
  },
  {
    id: 5,
    name: 'Dr. Neha Gupta',
    company: 'PharmaTech Solutions',
    role: 'R&D Head',
    content: 'The child-resistant caps from Parth Plasto Pack exceed international safety standards. Their engineering team worked closely with us to customize the mechanism for our specific bottle design.',
    rating: 5,
    avatar: '/images/team.webp',
  },
  {
    id: 6,
    name: 'Kiran Desai',
    company: 'WellnessFirst Ltd.',
    role: 'Supply Chain Manager',
    content: 'Reliable, professional, and innovative — that\'s how I describe Parth Plasto Pack. Their effervescent tubes with desiccant caps are genuinely world-class quality at competitive pricing.',
    rating: 5,
    avatar: '/images/ceo.png',
  },
];
