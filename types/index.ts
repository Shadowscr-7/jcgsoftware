// Types for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'web' | 'mobile' | 'ai' | 'automation' | 'marketing';
  tags: string[];
  image: string;
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  impact?: string;
  year: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'ai' | 'marketing' | 'other';
  level: number; // 1-100
  icon?: string;
  yearsOfExperience?: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
