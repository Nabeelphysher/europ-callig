export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  videoUrl?: string;
  country: string;
}

export interface Package {
  id: string;
  title: string;
  type: 'Basic' | 'Customized';
  features: string[];
  description: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  image: string;
  description: string;
  eligibility: string[];
  processSteps: { title: string; desc: string }[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
}