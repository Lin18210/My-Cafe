import React, { useEffect, useRef, useState } from 'react';

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
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // HubSpot form embed
  const formContainerRef = useRef(null);
  useEffect(() => {
    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formId = import.meta.env.VITE_HUBSPOT_FORM_ID_CONTACT;
    if (!portalId || !formId) return;

    function loadScriptOnce() {
      return new Promise((resolve) => {
        if (window.hbspt) return resolve();
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/embed/v2.js';
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    }

    loadScriptOnce().then(() => {
      if (window.hbspt && formContainerRef.current) {
        // Clear any previous render to avoid duplicates on hot reload
        formContainerRef.current.innerHTML = '';
        window.hbspt.forms.create({
          portalId,
          formId,
          target: '#hubspot-contact-form',
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-amber-900">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="bg-amber-700 text-white p-8 md:w-2/5">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="mb-8">
                <h3 className="font-semibold text-amber-200 mb-2">Visit Us</h3>
                <p className="mb-1">26th North Street</p>
                <p>Brewville, CA 90210</p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-semibold text-amber-200 mb-2">Call Us</h3>
                <p>(+66) 123-4567</p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-semibold text-amber-200 mb-2">Email Us</h3>
                <p>cafedelight@gmail.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">Hour</h3>
                <p className="mb-1">Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 md:w-3/5">
              <h2 className="text-2xl font-bold mb-6 text-amber-900">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {formStatus.message}
                </div>
              ) : null}
              
              {/* If HubSpot env provided, render HubSpot form; otherwise keep local fallback */}
              {import.meta.env.VITE_HUBSPOT_PORTAL_ID && import.meta.env.VITE_HUBSPOT_FORM_ID_CONTACT ? (
                <div id="hubspot-contact-form" ref={formContainerRef} />
              ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;