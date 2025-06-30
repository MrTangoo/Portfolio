import React from 'react';
import AnimatedSection from './AnimatedSection';
import { educationTimeline } from '../data/timeline';

const CVSection: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="cv" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Experience & Education
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                {educationTimeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className="ml-16 bg-gray-50 p-6 rounded-lg shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <span className="text-sm text-blue-600 font-medium">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg text-gray-600 mb-3">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Download CV Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default CVSection;