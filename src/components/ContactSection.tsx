import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Github as GitHub, Linkedin, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // This would normally send the form data to a backend
    console.log('Form submitted:', data);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    alert('Message envoyé avec succès!');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title">Me contacter</h2>
          <p className="text-gray-600 max-w-2xl mt-4">
            Vous avez un projet intéressant ou une opportunité à discuter? N'hésitez pas à me contacter!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                  placeholder="Votre nom"
                  {...register('name', { required: 'Le nom est requis' })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                  placeholder="votre.email@example.com"
                  {...register('email', { 
                    required: 'L\'email est requis',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Adresse email invalide'
                    } 
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                  placeholder="Votre message..."
                  {...register('message', { required: 'Le message est requis' })}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> Envoyer le message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} className="flex flex-col justify-center">
            <div className="bg-white rounded-xl p-8 shadow-glass border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:jean.dupont@example.com" className="text-gray-800 hover:text-blue-500 transition-colors">
                      jean.dupont@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <GitHub className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <a 
                      href="https://github.com/jean-dupont" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-500 transition-colors"
                    >
                      github.com/jean-dupont
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/jean-dupont" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-500 transition-colors"
                    >
                      linkedin.com/in/jean-dupont
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-700 text-sm">
                  "Disponible pour un stage, un job ou un projet passionnant ! N'hésitez pas à me contacter."
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;