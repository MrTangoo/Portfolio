import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Calendar, MapPin, Languages, Briefcase, Dumbbell, Award, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Projets réalisés', value: '15+', icon: Target },
    { label: 'Technologies maîtrisées', value: '10+', icon: Zap },
    { label: 'Années d\'expérience', value: '3+', icon: Award },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ddd6fe" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              À propos de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                moi
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développeur passionné avec une approche moderne du développement d'applications
            </p>
          </div>
        </AnimatedSection>

        {/* Stats section */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.3} className="order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mr-3"></div>
                Profil professionnel
              </h3>
              
              <div className="space-y-6">
                {[
                  { icon: Calendar, label: 'Âge', value: '19 ans', color: 'from-blue-500 to-blue-600' },
                  { icon: Languages, label: 'Langues', value: 'Français (natif), Anglais (B1)', color: 'from-green-500 to-green-600' },
                  { icon: MapPin, label: 'Localisation', value: 'Canton de Fribourg / Vaud', color: 'from-purple-500 to-purple-600' },
                  { icon: Briefcase, label: 'Spécialité', value: 'Développement full-stack', color: 'from-indigo-500 to-indigo-600' },
                  { icon: Dumbbell, label: 'Passion', value: 'Bodybuilding & Sport', color: 'from-red-500 to-red-600' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{item.label}</p>
                      <p className="text-gray-900 font-semibold">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5} className="order-1 lg:order-2">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Qui suis-je ?
              </h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg"
                >
                  Je suis un développeur passionné par la création d'applications web et mobiles modernes. 
                  Fraîchement diplômé d'un CFC en développement d'applications, j'ai acquis une solide expérience 
                  pratique chez <span className="font-semibold text-blue-600">SBB-CFF-FFS</span> et au <span className="font-semibold text-blue-600">GRI</span>.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg"
                >
                  Ma passion pour le <span className="font-semibold text-indigo-600">bodybuilding</span> et le sport m'a enseigné 
                  l'importance de la discipline, de la persévérance et de l'amélioration continue. 
                  Ces valeurs se reflètent dans mon approche du développement logiciel.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg"
                >
                  Je me spécialise dans les technologies modernes comme <span className="font-semibold text-blue-600">React</span>, 
                  <span className="font-semibold text-blue-600"> TypeScript</span>, et <span className="font-semibold text-blue-600">Node.js</span>, 
                  avec un focus sur l'expérience utilisateur et les performances.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
                >
                  <p className="font-semibold text-blue-700 text-lg">
                    🚀 Actuellement à la recherche de nouvelles opportunités pour mettre à profit 
                    mes compétences et continuer à évoluer dans un environnement stimulant.
                  </p>
                </motion.div>
              </div>

              {/* Skills preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Expertise technique</h4>
                <div className="flex flex-wrap gap-3">
                  {['Frontend', 'Backend', 'Database', 'DevOps', 'Mobile'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;