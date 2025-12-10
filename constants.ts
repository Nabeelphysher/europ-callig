import { Testimonial, Package, Country, NewsItem, Stat } from './types';

export const APP_NAME = "Europe Calling";

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Newsroom', path: '/newsroom' },
  { name: 'Contact', path: '/contact' },
];

export const STATS: Stat[] = [
  { label: 'Success Rate', value: '98%', sub: 'Visa Approvals' },
  { label: 'Experience', value: '12+', sub: 'Years Serving' },
  { label: 'Partners', value: '500+', sub: 'Across Europe' },
  { label: 'Happy Clients', value: '2.5k', sub: 'Placed Successfully' },
];

export const COUNTRIES: Country[] = [
  {
    id: '1',
    name: 'Germany',
    slug: 'germany',
    tagline: 'The Heart of European Innovation',
    image: 'https://picsum.photos/seed/germany/800/1000',
    description: 'Experience the strongest economy in Europe with pathways for skilled professionals and students.',
    eligibility: ['Bachelor Degree or higher', 'B1 German Language Proficiency', 'Valid Passport'],
    processSteps: [
      { title: 'Profile Assessment', desc: 'We evaluate your credentials against German standards.' },
      { title: 'Document Prep', desc: 'Full assistance with translations and legalizations.' },
      { title: 'Visa Application', desc: 'Guided submission at the consulate.' },
      { title: 'Arrival Support', desc: 'Airport pickup and accommodation help.' }
    ]
  },
  {
    id: '2',
    name: 'Poland',
    slug: 'poland',
    tagline: 'Gateway to the East',
    image: 'https://picsum.photos/seed/poland/800/1000',
    description: 'A rapidly growing hub for technology and manufacturing.',
    eligibility: ['High School Diploma', 'English Proficiency', 'Clean Criminal Record'],
    processSteps: [
      { title: 'Consultation', desc: 'Understanding your career goals.' },
      { title: 'Work Permit', desc: 'Securing the Voivodeship invitation.' },
      { title: 'Embassy Interview', desc: 'Mock interviews to prepare you.' },
      { title: 'Relocation', desc: 'Flight booking and housing.' }
    ]
  },
  {
    id: '3',
    name: 'France',
    slug: 'france',
    tagline: 'Art de Vivre & Opportunity',
    image: 'https://picsum.photos/seed/france/800/1000',
    description: 'Combine world-class lifestyle with diverse career opportunities.',
    eligibility: ['Specific Industry Experience', 'Basic French (A2)', 'Financial Proof'],
    processSteps: [
      { title: 'Discovery', desc: 'Matching skills to French market needs.' },
      { title: 'Sponsorship', desc: 'Connecting with licensed employers.' },
      { title: 'Visa Processing', desc: 'Long-stay visa application.' },
      { title: 'Integration', desc: 'Cultural orientation sessions.' }
    ]
  },
    {
    id: '4',
    name: 'Czech Republic',
    slug: 'czech',
    tagline: 'Central European Gem',
    image: 'https://picsum.photos/seed/czech/800/1000',
    description: 'Affordable living costs with high standards of safety.',
    eligibility: ['Trade Certification', 'English Communicative', 'Health Insurance'],
    processSteps: [
      { title: 'Assessment', desc: 'Trade skill verification.' },
      { title: 'Contract', desc: 'Signing with Czech employer.' },
      { title: 'Visa Type D', desc: 'Employee card application.' },
      { title: 'Settlement', desc: 'Registration with foreign police.' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Robert Fox',
    role: 'Software Engineer',
    company: 'TechBerlin',
    country: 'Germany',
    quote: 'In the first 30 days, Europe Calling helped me secure interviews with top firms in Berlin. Their kindness and precision made a stressful process feel like a breeze.',
    image: 'https://picsum.photos/seed/face1/200/200'
  },
  {
    id: 't2',
    name: 'Ananya Gupta',
    role: 'Hospitality Manager',
    company: 'Grand Hotel Warsaw',
    country: 'Poland',
    quote: 'I was worried about the paperwork, but the team handled everything with such warmth. I felt truly cared for, not just like another file number.',
    image: 'https://picsum.photos/seed/face2/200/200'
  },
  {
    id: 't3',
    name: 'Michael Chen',
    role: 'Student',
    company: 'Sorbonne University',
    country: 'France',
    quote: 'From Mumbai to Paris, the journey was seamless. The educational counseling was honest and transparent.',
    image: 'https://picsum.photos/seed/face3/200/200'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'basic',
    title: 'Essential Start',
    type: 'Basic',
    features: ['Profile Evaluation', 'Document Checklist', 'Visa Application Guide', 'Email Support'],
    description: 'Perfect for those who want to manage the details but need a roadmap.'
  },
  {
    id: 'premium',
    title: 'Signature Care',
    type: 'Customized',
    features: ['1-on-1 Strategy', 'Employer Matching', 'Full Documentation Review', 'Mock Interviews', '24/7 WhatsApp Priority', 'Arrival Concierge'],
    description: 'Our complete peace-of-mind service. We walk with you every step of the way.'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Germany Introduces Opportunity Card',
    date: 'Oct 12, 2023',
    category: 'Policy Update',
    summary: 'New regulations allow skilled workers to enter Germany to look for work for up to one year.',
    image: 'https://picsum.photos/seed/news1/600/400'
  },
  {
    id: 'n2',
    title: 'Europe Calling Expands to Azerbaijan',
    date: 'Sep 28, 2023',
    category: 'Company News',
    summary: 'We are proud to announce our new partnership office in Baku to serve the Caucasus region.',
    image: 'https://picsum.photos/seed/news2/600/400'
  },
  {
    id: 'n3',
    title: 'Hospitality Sector Booms in 2024',
    date: 'Aug 15, 2023',
    category: 'Market Trends',
    summary: 'Hotels and restaurants across Poland and France are hiring at record rates.',
    image: 'https://picsum.photos/seed/news3/600/400'
  }
];