import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, HeartHandshake, Award, MapPin, Clock, Phone } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const About = () => {
  return (
    <div className="bg-white overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000')" }}
        >
          <div className="absolute inset-0 bg-coffee-950/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 tracking-widest uppercase text-sm font-bold mb-4 block">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">About Us</h1>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=1000" 
                alt="Cafe Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-coffee-200 rounded-full opacity-50 blur-3xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-display font-bold text-coffee-950 mb-6">Our Story</h2>
            <p className="text-lg text-coffee-600 mb-6 leading-relaxed">
              Sunshine Cafe was founded in 2017 with a simple mission: to create a warm, welcoming space where people could enjoy exceptional coffee and artisanal food. What started as a small corner shop has naturally blossomed into a beloved community gathering place.
            </p>
            <p className="text-lg text-coffee-600 leading-relaxed">
              Our founder, Su Su Htwe, developed her passion for coffee while traveling through Europe and South America. She brought back not just premium coffee beans, but a philosophy about how a café should feel—like an elegant extension of your living room, where every guest is treated like family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-coffee-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-display font-bold text-coffee-950">Our Values</motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: <Leaf size={40} className="text-gold-500" strokeWidth={1.5} />,
                title: "Sustainability",
                desc: "We source our ingredients ethically and use eco-friendly packaging to consciously minimize our environmental footprint."
              },
              {
                icon: <HeartHandshake size={40} className="text-gold-500" strokeWidth={1.5} />,
                title: "Community",
                desc: "We believe in building deeply rooted relationships with our customers, local suppliers, and the broader community."
              },
              {
                icon: <Award size={40} className="text-gold-500" strokeWidth={1.5} />,
                title: "Quality",
                desc: "We never compromise on quality. From our carefully single-origin coffee beans to our freshly baked artisanal pastries."
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-coffee-100/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-coffee-50 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-coffee-950">{value.title}</h3>
                <p className="text-coffee-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-display font-bold text-coffee-950">What People Say</motion.h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: "The finest coffee experience I've ever had. The ambiance effortlessly bridges the gap between cozy and elegantly modern.",
              author: "Sarah K.",
              role: "Coffee Enthusiast"
            },
            {
              quote: "Their pastries are divine and the latte art genuinely shows the passion of the baristas. This is absolutely my new daily ritual.",
              author: "Michael T.",
              role: "Local Architect"
            },
            {
              quote: "A perfect sanctuary to read or work. Reliable atmosphere, exceptional service, and drinks that always impress.",
              author: "Jennifer L.",
              role: "Creative Director"
            }
          ].map((testimonial, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-coffee-900 p-10 rounded-2xl relative text-white"
            >
              <div className="absolute top-6 left-6 text-gold-500/20 text-6xl font-display leading-none">"</div>
              <p className="relative z-10 text-lg italic text-coffee-100 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-coffee-800 rounded-full flex items-center justify-center text-gold-400 font-bold font-display text-xl mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.author}</h4>
                  <p className="text-coffee-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;