export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack';
  featured: boolean;
  date: string;
  stats?: {
    stars?: number;
    views?: number;
    forks?: number;
  };
  links: {
    github?: string;
    demo?: string;
  };
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}