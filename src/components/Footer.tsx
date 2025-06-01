import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Code className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-xl font-semibold">Maxime Derbigny</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">À propos</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projets</a>
            <a href="#cv" className="text-gray-300 hover:text-white transition-colors">Parcours</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Maxime Derbigny. Tous droits réservés.
          </p>
          
          <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
            Conçu et développé avec <Heart className="h-4 w-4 text-red-500 mx-1" /> en Suisse
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer