import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Github as GitHub, Linkedin, Send, MapPin, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type NotificationStatus = 'success' | 'error' | null;

const ContactSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [notification, setNotification] = useState<NotificationStatus>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      setNotification('success');
      reset();
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setNotification('error');
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maxime.derbigny@gmail.com',
      href: 'mailto:maxime.derbigny@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GitHub,
      label: 'GitHub',
      value: 'github.com/MrTangoo',
      href: 'https://github.com/MrTangoo',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/maxime-derbigny',
      href: 'https://www.linkedin.com/in/maxime-derbigny-13625b313/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Canton de Fribourg / Vaud',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.04"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Me{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                contacter
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez un projet intéressant ou une opportunité à discuter ? 
              Je serais ravi d'échanger avec vous !
            </p>
          </div>
        </AnimatedSection>

        {/* Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className={`fixed top-8 right-8 z-50 p-4 rounded-xl shadow-lg border ${
                notification === 'success'
                  ? 'bg-green-50 border-green-200 text-green-800'
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}
            >
              <div className="flex items-center">
                {notification === 'success' ? (
                  <CheckCircle className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                <span className="font-medium">
                  {notification === 'success'
                    ? 'Message envoyé avec succès !'
                    : 'Erreur lors de l\'envoi. Réessayez plus tard.'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mr-3"></div>
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-4 rounded-xl border-2 ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                      } focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                      placeholder="Votre nom complet"
                      {...register('name', { required: 'Le nom est requis' })}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 flex items-center"
                      >
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-4 rounded-xl border-2 ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                      } focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                      placeholder="votre.email@example.com"
                      {...register('email', {
                        required: "L'email est requis",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Adresse email invalide'
                        }
                      })}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 flex items-center"
                      >
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-4 rounded-xl border-2 ${
                      errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                    } focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                    placeholder="Sujet de votre message"
                    {...register('subject', { required: 'Le sujet est requis' })}
                  />
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.subject.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`w-full px-4 py-4 rounded-xl border-2 ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                    } focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 resize-none`}
                    placeholder="Décrivez votre projet ou votre demande..."
                    {...register('message', { required: 'Le message est requis' })}
                  ></textarea>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mr-4`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Statut de disponibilité</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Disponible immédiatement</h3>
                <p className="text-green-100 mb-4">
                  Prêt pour de nouveaux défis et projets passionnants. 
                  Temps de réponse habituel : 24h maximum.
                </p>
                <div className="flex items-center text-sm text-green-100">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Ouvert aux opportunités de stage, emploi et freelance
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Travaillons ensemble !
                </h3>
                <p className="text-gray-600 mb-6">
                  Que ce soit pour un projet, une collaboration ou simplement pour échanger, 
                  n'hésitez pas à me contacter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="mailto:maxime.derbigny@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email direct
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/maxime-derbigny-13625b313/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;