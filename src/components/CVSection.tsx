import React from 'react';
import { Download, Award, Code } from 'lucide-react';
import { educationTimeline, skills } from '../data/timeline';
import AnimatedSection from './AnimatedSection';

const CVSection: React.FC = () => {
  return (
    <section id="cv" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">Mon parcours</h2>
            <a 
              href="/cv.pdf" 
              download 
              className="btn btn-outline hidden md:flex items-center"
            >
              <Download className="h-4 w-4 mr-2" /> Télécharger CV
            </a>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={0.2} className="md:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {educationTimeline.map((item, index) => (
                  <div key={item.id} className="relative pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-blue-50 border-4 border-white shadow-md flex items-center justify-center z-10">
                      <span className="text-blue-500 text-sm font-semibold">{item.year.split('–')[0]}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <span className="text-sm font-semibold text-blue-500">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.subtitle}</p>
                      {item.description && (
                        <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-glass border border-gray-100">
                <div className="flex items-center mb-4">
                  <Code className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold">Compétences techniques</h3>
                </div>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-glass border border-gray-100">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">CFC en développement d'applications</p>
                      <p className="text-sm text-gray-600">2024</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <a 
                href="/cv.pdf" 
                download 
                className="btn btn-primary w-full flex items-center justify-center md:hidden"
              >
                <Download className="h-4 w-4 mr-2" /> Télécharger CV
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CVSection;