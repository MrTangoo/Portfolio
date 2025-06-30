import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/me.jpg"
                  alt="Profile"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating innovative solutions that solve real-world problems and deliver 
                  exceptional user experiences.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With a strong foundation in both frontend and backend development, I enjoy 
                  working with cutting-edge technologies and continuously learning new skills 
                  to stay at the forefront of web development.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default AboutSection;