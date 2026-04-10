export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  featured?: boolean;
}

export interface ResearchProject {
  title: string;
  description: string;
  details: string;
  stack: string[];
  link?: string;
}

export interface Certification {
  title: string;
  issuer?: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}