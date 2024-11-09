import React, { useState } from 'react';
import { Mail, MapPin, Phone, Download, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{message: string, isError: boolean} | null>(null);

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Me Contacter</h2>
          <p className="text-xl text-gray-300">Discutons de votre prochain projet ensemble</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Card */}
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl p-8 animate-fadeInUp">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informations</h3>
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:abdelqedous.mrini@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      abdelqedous.mrini@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Téléphone</p>
                      <a href="tel:+212677323737" className="text-white hover:text-blue-400 transition-colors">
                        +212 6 77 32 37 37
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Localisation</p>
                      <p className="text-white">Kénitra, Maroc</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Réseaux Sociaux</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/212677323737"
                    target="_blank"
                    className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                  </a>
                  <a
                    href="https://t.me/MBW9_oFFc"
                    target="_blank"
                    className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                  >
                    <Send className="w-5 h-5 text-blue-400" />
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="https://abdelqedous-mrini.rf.gd/pdf/abdoooo.pdf"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger CV
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-gray-800 rounded-2xl p-8 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>
            {submitStatus && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.isError ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
                {submitStatus.message}
              </div>
            )}
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              if (isSubmitting) return;
              
              setIsSubmitting(true);
              setSubmitStatus(null);
              
              try {
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                
                await emailjs.init("EUWmQX_JoQb8N-n02");
                
                const templateParams = {
                  from_name: formData.get('name'),
                  from_email: formData.get('email'), 
                  subject: formData.get('subject'),
                  message: formData.get('message')
                };

                await emailjs.send(
                  "service_rru6r7l",
                  "template_x6ncibi",
                  templateParams
                );

                setSubmitStatus({
                  message: 'Message envoyé avec succès!',
                  isError: false
                });
                form.reset();
                setTimeout(() => {
                  window.location.reload();
                }, 2000); // Refresh after 2 seconds
              } catch (error) {
                console.error('Erreur:', error);
                setSubmitStatus({
                  message: 'Une erreur est survenue. Veuillez réessayer.',
                  isError: true
                });
              } finally {
                setIsSubmitting(false);
              }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-colors disabled:opacity-50"
                    placeholder="Abdo Mrini"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-colors disabled:opacity-50"
                    placeholder="abdo@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-colors disabled:opacity-50"
                  placeholder="Le sujet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-colors resize-none disabled:opacity-50"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}