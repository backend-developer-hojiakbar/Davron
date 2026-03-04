
export type Language = 'UZ' | 'RU' | 'EN';
export type Theme = 'light' | 'dark';

export interface Job {
  id: string;
  title: Record<Language, string>;
  country: Record<Language, string>;
  salary: string;
  category: Record<Language, string>;
  description: Record<Language, string>;
  requirements: Record<Language, string[]>;
  benefits: Record<Language, string[]>;
  postedAt: string;
  image: string;
}

export interface ServiceItem {
  title: Record<Language, string>;
  desc: Record<Language, string>;
  image: string;
}

export interface ProcessStep {
  step: number;
  title: Record<Language, string>;
  desc: Record<Language, string>;
}

export interface SiteInfo {
  heroTitle: Record<Language, string>;
  heroSubtitle: Record<Language, string>;
  heroImage: string;
  phone: string;
  email: string;
  address: string;
  stats: {
    resumes: string;
    vacancies: string;
    companies: string;
  };
  services: ServiceItem[];
  process: ProcessStep[];
  about: {
    title: Record<Language, string>;
    p1: Record<Language, string>;
    p2: Record<Language, string>;
    image: string;
    experience: string;
    clients: string;
  };
}

export interface Application {
  id: string;
  fullName: string;
  phone: string;
  telegram: string;
  birthDate: string;
  hasPassport: boolean;
  experience: string;
  targetCountry: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface Translation {
  nav: {
    home: string;
    jobs: string;
    about: string;
    contact: string;
    apply: string;
    admin: string;
    chat: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  stats: {
    visas: string;
    partners: string;
    vacancies: string;
    success: string;
  };
  filters: {
    all: string;
    country: string;
    sector: string;
    salary: string;
  };
  forms: {
    fullName: string;
    phone: string;
    birthDate: string;
    passport: string;
    experience: string;
    targetCountry: string;
    uploadCv: string;
    submit: string;
    yes: string;
    no: string;
  };
}
