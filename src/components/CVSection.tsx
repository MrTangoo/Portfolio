import React from 'react';
import { Download, Award, Code, Calendar, MapPin, Trophy, Zap, Target } from 'lucide-react';
import { educationTimeline, skills, achievements } from '../data/timeline';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const CVSection: React.FC = () => {
  const skillCategories = [
    { name: 'Frontend', skills: skills.filter(s => s.category === 'frontend'), color: 'from-blue-500 to-blue-600' },
    { name: 'Backend', skills: skills.filter(s => s.category === 'backend'), color: 'from-green-500 to-green-600' },
    { name: 'Database', skills: skills.filter(s => s.category === 'database'), color: 'from-purple-500 to-purple-600' },
    { name: 'Tools', skills: skills.filter(s => s.category === 'tools'), color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section id="cv" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ddd6fe" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mon{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                parcours
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formation, expériences et compétences qui façonnent mon expertise
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-30"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {educationTimeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 border-4 border-white shadow-xl flex items-center justify-center z-10"
                    >
                      <span className="text-white text-sm font-bold">{item.year.split('–')[0]}</span>
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <p className="text-gray-600 font-medium">{item.subtitle}</p>
                      </div>
                      {item.description && (
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills and Achievements */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              {/* Skills */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Compétences techniques</h3>
                </div>
                
                <div className="space-y-6">
                  {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    >
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-2`}></div>
                        {category.name}
                      </h4>
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center justify-between">
                            <span className="text-gray-700 font-medium">{skill.name}</span>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  transition={{ duration: 0.3, delay: skillIndex * 0.1 + i * 0.05 }}
                                  className={`w-2 h-2 rounded-full ${
                                    i < skill.level
                                      ? `bg-gradient-to-r ${category.color}`
                                      : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Réalisations</h3>
                </div>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                        <span className="text-xs text-blue-600 font-medium">{achievement.year}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center"
              >
                <Target className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Prêt pour de nouveaux défis</h3>
                <p className="text-blue-100 mb-6">
                  Toujours en quête d'apprentissage et d'innovation
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Discutons ensemble
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CVSection;