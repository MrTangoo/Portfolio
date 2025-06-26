import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Application de gestion d'études interne",
    description: "Application web enterprise développée pour SBB-CFF-FFS permettant la gestion complète des études internes avec authentification, gestion des rôles, et interface d'administration avancée.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
    category: "fullstack",
    featured: true,
    date: "2024",
    stats: {
      stars: 12,
      views: 450
    },
    links: {}
  },
  {
    id: 2,
    title: "Portfolio Professionnel",
    description: "Portfolio moderne et responsive développé avec les dernières technologies web. Interface élégante avec animations fluides, optimisé pour les performances et le SEO.",
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Vite", "Vercel", "Framer Motion"],
    category: "web",
    featured: false,
    date: "2024",
    stats: {
      stars: 8,
      views: 320
    },
    links: {
      github: "https://github.com/MrTangoo/Portfolio",
      demo: "https://portfolio-mrtangoos-projects.vercel.app/"
    }
  },
  {
    id: 3,
    title: "GarderieManager - Système de Gestion",
    description: "Application web complète pour la gestion d'une garderie avec suivi des présences, gestion des enfants, génération de rapports automatisés et interface intuitive pour le personnel.",
    image: "https://images.pexels.com/photos/3662836/pexels-photo-3662836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "fullstack",
    featured: true,
    date: "2024",
    stats: {
      stars: 15,
      views: 680
    },
    links: {
      github: "https://github.com/MrTangoo/GarderieManager",
      demo: "https://garderie-manager.vercel.app/"
    }
  },
  {
    id: 4,
    title: "API REST E-commerce",
    description: "API REST robuste pour une plateforme e-commerce avec authentification JWT, gestion des produits, commandes, paiements et système de notifications en temps réel.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe API", "Socket.io", "Redis"],
    category: "fullstack",
    featured: false,
    date: "2023",
    stats: {
      stars: 22,
      views: 890
    },
    links: {
      github: "https://github.com/MrTangoo"
    }
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif avec visualisations de données en temps réel, graphiques dynamiques et système de filtrage avancé pour l'analyse de performance.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "D3.js", "Chart.js", "TypeScript", "Material-UI", "WebSocket"],
    category: "web",
    featured: false,
    date: "2023",
    stats: {
      stars: 18,
      views: 560
    },
    links: {
      github: "https://github.com/MrTangoo"
    }
  },
  {
    id: 6,
    title: "Application Mobile Fitness",
    description: "Application mobile cross-platform pour le suivi d'entraînements avec planification personnalisée, statistiques détaillées et synchronisation cloud.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React Native", "Expo", "Firebase", "TypeScript", "AsyncStorage", "Push Notifications"],
    category: "mobile",
    featured: false,
    date: "2023",
    stats: {
      stars: 25,
      views: 1200
    },
    links: {
      github: "https://github.com/MrTangoo"
    }
  }
];