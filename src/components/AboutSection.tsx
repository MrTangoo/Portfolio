import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Calendar, MapPin, Languages, Briefcase, Dumbbell } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title">À propos de moi</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={0.2} className="order-2 md:order-1">
            <div className="bg-white rounded-xl p-6 shadow-glass border border-gray-100 h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Carte d'identité professionnelle</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Âge</p>
                    <p className="text-gray-800 font-medium">19 ans</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Languages className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Langues</p>
                    <p className="text-gray-800 font-medium">Français (natif), Anglais (B1)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Localisation</p>
                    <p className="text-gray-800 font-medium">Canton de Fribourg / Vaud</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Briefcase className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Spécialité</p>
                    <p className="text-gray-800 font-medium">Développement d'applications</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Dumbbell className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Passion</p>
                    <p className="text-gray-800 font-medium">Bodybuilding & Sport</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Qui suis-je?</h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Je suis un jeune développeur passionné par la création d'applications web et mobiles. 
                Fraîchement diplômé d'un CFC en développement d'applications, j'ai eu l'opportunité 
                de travailler sur des projets concrets chez SBB-CFF-FFS et au GRI.
              </p>
              <p className="leading-relaxed">
                En parallèle de ma passion pour le code, je suis un fervent adepte du bodybuilding et du sport en général. 
                Cette discipline m'a appris l'importance de la persévérance, de la rigueur et de la progression constante. 
                Des valeurs que j'applique également dans mon travail de développeur.
              </p>
              <p className="leading-relaxed">
                Je suis particulièrement intéressé par le développement web frontend et backend, 
                avec une préférence pour les technologies modernes comme React, TypeScript et Node.js.
              </p>
              <p className="font-medium text-blue-500">
                Je suis actuellement à la recherche de nouvelles opportunités où je pourrai mettre à profit 
                mes compétences et continuer à apprendre.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;