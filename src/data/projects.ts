import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Application de gestion interne",
    description: "Application web développée pendant mon CFC pour SBB-CFF-FFS permettant la gestion des ressources internes.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: 2,
    title: "Système de facturation automatisé",
    description: "Solution développée pour Reist Telecom AG permettant d'automatiser le processus de facturation client.",
    image: "https://images.pexels.com/photos/4386340/pexels-photo-4386340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Vue.js", "PHP", "Laravel", "MySQL", "Docker"],
    links: {
      github: "#"
    }
  },
  {
    id: 3,
    title: "Application mobile de suivi sportif",
    description: "Projet personnel d'application mobile permettant aux utilisateurs de suivre leurs activités sportives et leur progression.",
    image: "https://images.pexels.com/photos/6203532/pexels-photo-6203532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React Native", "Firebase", "Redux", "Google Maps API"],
    links: {
      github: "#",
      demo: "#"
    }
  }
];