import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Salut, je suis <span className="text-blue-500">Maxime</span> 👋
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-2 mb-6">
            Développeur d'applications basé en Suisse
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
            Diplômé d'un CFC, je crée des applications performantes et élégantes. 
            Passionné par le code et le bodybuilding, j'apporte la même discipline et détermination à mes projets qu'à mes entraînements.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#projects" 
              className="btn btn-primary flex items-center justify-center"
            >
              Voir mes projets
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500/10 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Maxime Derbigny" 
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors duration-300">
          <span className="text-sm mb-1">Découvrir</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection