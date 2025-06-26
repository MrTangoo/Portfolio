import { TimelineItem, Skill } from '../types';

export const educationTimeline: TimelineItem[] = [
  {
    id: 1,
    year: "2012–2018",
    title: "École Primaire",
    subtitle: "Attalens, Suisse",
    description: "Formation scolaire fondamentale avec développement des compétences de base et découverte de l'informatique."
  },
  {
    id: 2,
    year: "2018–2021",
    title: "École Secondaire",
    subtitle: "Cycle de la Veveyse, Suisse",
    description: "Formation secondaire avec orientation scientifique et premiers projets de programmation."
  },
  {
    id: 3,
    year: "2021–2024",
    title: "CFC Développement d'applications",
    subtitle: "SBB-CFF-FFS, Berne",
    description: "Formation professionnelle approfondie en développement d'applications avec spécialisation en technologies web modernes et développement d'applications d'entreprise."
  },
  {
    id: 4,
    year: "2024–2025",
    title: "CFC Développement d'applications",
    subtitle: "Groupement romand de l'informatique, Yverdon",
    description: "Perfectionnement des compétences avec focus sur les architectures complexes, les méthodologies agiles et les bonnes pratiques de développement."
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },
  { name: "Vue.js", level: 4, category: "frontend" },
  { name: "Angular", level: 3, category: "frontend" },
  { name: "Tailwind CSS", level: 5, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express", level: 4, category: "backend" },
  { name: "Java", level: 3, category: "backend" },
  { name: "Spring Boot", level: 3, category: "backend" },
  { name: "PHP", level: 3, category: "backend" },
  
  // Database
  { name: "PostgreSQL", level: 4, category: "database" },
  { name: "MongoDB", level: 3, category: "database" },
  { name: "Prisma", level: 4, category: "database" },
  { name: "Redis", level: 3, category: "database" },
  
  // Tools
  { name: "Git", level: 5, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "Vite", level: 4, category: "tools" },
  { name: "Webpack", level: 3, category: "tools" },
];

export const achievements = [
  {
    title: "CFC Développement d'applications",
    description: "Diplôme fédéral de capacité obtenu avec mention",
    year: "2025"
  },
  {
    title: "Projet d'entreprise SBB-CFF-FFS",
    description: "Développement d'une application de gestion interne",
    year: "2024"
  },
  {
    title: "Application GarderieManager",
    description: "Système complet de gestion avec plus de 500 utilisateurs",
    year: "2024"
  },
  {
    title: "Certification TypeScript",
    description: "Maîtrise avancée du développement TypeScript",
    year: "2023"
  }
];