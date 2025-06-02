import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Application de gestion d'études interne",
    description: "Application web développée pendant mon CFC pour SBB-CFF-FFS permettant la gestion des études internes.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Angular", "Java", "Springboot", "PostgreSQL"],
    links: {
 
    }
  },
  {
    id: 2,
    title: "Portfolio web",
    description: "Portfolio qui mets en avant mon travail et me présente.",
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Vue.js", "Vercel", "Tailwind CSS"],
    links: {
      github: "https://github.com/MrTangoo/Portfolio",
      demo: "https://portfolio-mrtangoos-projects.vercel.app/"
    }
  },
  {
    id: 3,
    title: "Application de gestion des présences d'une garderie",
    description: "Application web permettant au personnel de gérer simplement les informations des enfants, d’enregistrer leurs présences (matin et après-midi), et de générer automatiquement des feuilles de suivi claires et imprimables.",
image: "https://images.pexels.com/photos/3662836/pexels-photo-3662836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "Prisma", "Vercel", "PostgreSQL"],
    links: {
      github: "https://github.com/MrTangoo/GarderieManager",
      demo: "https://garderie-manager.vercel.app/"
    }
  }
];