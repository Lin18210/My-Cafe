import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for reaching out! A member of our team will contact you shortly.'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // HubSpot form embed
  const formContainerRef = useRef(null);
  useEffect(() => {
    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formId = import.meta.env.VITE_HUBSPOT_FORM_ID_CONTACT;
    if (!portalId || !formId) return;
    
    const script = document.createElement('script');
    script.src = `https://js.hsforms.net/forms/v2.js`;
    script.async = true;
    script.onload = () => {
      window.hbspt.forms.create({
        portalId: portalId,
        formId: formId,
        target: formContainerRef.current,
      });
    };
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-coffee-50 overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521017430205-c2508c90bd6d?auto=format&fit=crop&q=80&w=2000')" }}
        >
          <div className="absolute inset-0 bg-coffee-950/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 tracking-widest uppercase text-sm font-bold mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 bg-coffee-900 text-white rounded-2xl shadow-2xl p-10"
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-gold-400">Our Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-coffee-800 p-3 rounded-full mr-4 text-gold-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-coffee-300 text-sm leading-relaxed">
                    123 Espresso Lane<br />
                    Brewville, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-coffee-800 p-3 rounded-full mr-4 text-gold-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-coffee-300 text-sm">
                    <a href="tel:+11234567890" className="hover:text-gold-400 transition-colors">+1 (123) 456-7890</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-coffee-800 p-3 rounded-full mr-4 text-gold-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-coffee-300 text-sm">
                    <a href="mailto:hello@sunshinecafe.com" className="hover:text-gold-400 transition-colors">hello@sunshinecafe.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-coffee-800 p-3 rounded-full mr-4 text-gold-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Opening Hours</h4>
                  <p className="text-coffee-300 text-sm leading-relaxed">
                    Mon-Fri: 7am - 8pm<br />
                    Sat-Sun: 8am - 8pm
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-coffee-800">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-coffee-800 hover:bg-gold-500 hover:text-white transition-colors p-3 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="bg-coffee-800 hover:bg-gold-500 hover:text-white transition-colors p-3 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="bg-coffee-800 hover:bg-gold-500 hover:text-white transition-colors p-3 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-coffee-100"
          >
            <h2 className="text-3xl font-display font-bold text-coffee-950 mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-coffee-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-coffee-50 border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-coffee-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-coffee-50 border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-coffee-900 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-coffee-50 border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-coffee-900 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-coffee-50 border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                  rows="6"
                  placeholder="Tell us about..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto bg-coffee-900 hover:bg-gold-500 text-white hover:text-coffee-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            
            <AnimatePresence>
              {formStatus.submitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mt-6 p-4 rounded-xl text-center font-medium
                  ${formStatus.error ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* HubSpot Form Placeholder Container (Hidden unless configured) */}
            <div className="mt-8">
              <div ref={formContainerRef} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;