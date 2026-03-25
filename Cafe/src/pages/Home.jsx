import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, Award, Heart, ArrowRight, Star } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <div className="bg-coffee-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000')" }}
        >
          <div className="absolute inset-0 bg-coffee-950/70 bg-gradient-to-t from-coffee-950/90 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-gold-400 tracking-widest uppercase text-sm font-bold mb-4 block">Welcome to</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Sunshine <span className="text-gold-400 italic">Cafe</span>
            </h1>
            <p className="text-lg md:text-2xl text-coffee-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Experience the perfect symphony of artisanal roasting and unparalleled ambiance.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/menu" 
                className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-coffee-950 font-bold py-4 px-8 md:px-10 md:text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Explore Menu
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-gold-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeIn} className="text-gold-500 tracking-widest uppercase text-sm font-bold mb-2 block">Our Promise</motion.span>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-coffee-900">The Sunshine Standard</motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: <Award size={36} className="text-gold-500" strokeWidth={1.5} />,
                title: "Premium Quality",
                desc: "Ethically sourced, 100% Arabica beans roasted to perfection by our master craftsmen."
              },
              {
                icon: <Coffee size={36} className="text-gold-500" strokeWidth={1.5} />,
                title: "Artisanal Brew",
                desc: "Every cup is precision-brewed using pure, filtered water at the exact right temperature."
              },
              {
                icon: <Heart size={36} className="text-gold-500" strokeWidth={1.5} />,
                title: "Warm Ambiance",
                desc: "A sanctuary designed for comfort, connection, and the pure joy of a great cup of coffee."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-coffee-50 p-10 rounded-2xl text-center group hover:bg-coffee-900 transition-colors duration-500"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-6 group-hover:bg-coffee-800 transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-coffee-900 group-hover:text-gold-400 transition-colors duration-500">{feature.title}</h3>
                <p className="text-coffee-600 leading-relaxed group-hover:text-coffee-300 transition-colors duration-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Signature Specials Section */}
      <section className="py-24 bg-coffee-950 text-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-800/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeIn} className="text-gold-500 tracking-widest uppercase text-sm font-bold mb-2 block">Curated Selection</motion.span>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">Signature Specials</motion.h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-6 md:mt-0"
            >
              <Link to="/menu" className="text-gold-400 hover:text-white flex items-center font-medium transition-colors">
                View Full Menu <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Special 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group rounded-2xl overflow-hidden bg-coffee-900 border border-coffee-800 shadow-2xl flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 relative overflow-hidden h-64 sm:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800" 
                  alt="Morning Bliss" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex text-gold-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-gold-400 transition-colors">Morning Bliss Bundle</h3>
                <p className="text-coffee-300 mb-6 text-sm leading-relaxed">A perfectly balanced double shot of espresso paired with our buttery, flaky artisanal croissant.</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">$8.99</span>
                  <button className="bg-coffee-800 hover:bg-gold-500 text-white hover:text-coffee-950 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Special 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group rounded-2xl overflow-hidden bg-coffee-900 border border-coffee-800 shadow-2xl flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 relative overflow-hidden h-64 sm:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800" 
                  alt="Velvet Latte" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex text-gold-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-gold-400 transition-colors">Velvet Vanilla Latte</h3>
                <p className="text-coffee-300 mb-6 text-sm leading-relaxed">Smooth espresso infused with real Madagascar vanilla bean syrup and micro-foamed organic milk.</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">$6.50</span>
                  <button className="bg-coffee-800 hover:bg-gold-500 text-white hover:text-coffee-950 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial / Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square rounded-full overflow-hidden border-8 border-coffee-50 shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1000" 
                  alt="Barista pouring latte art" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-400 rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <span className="text-gold-500 tracking-widest uppercase text-sm font-bold mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-coffee-900 mb-8 leading-tight">
                Crafting moments, <br/>one cup at a time.
              </h2>
              <p className="text-lg text-coffee-600 mb-6 leading-relaxed">
                Founded with a simple mission: to elevate the everyday coffee experience. We believe that your daily cup isn't just a routine—it's a ritual.
              </p>
              <p className="text-lg text-coffee-600 mb-10 leading-relaxed">
                Our distinct roasting profile brings out the natural sweetness and complex flavors of our carefully selected beans, delivering a taste that lingers pleasantly long after the last drop.
              </p>
              
              <Link to="/about" className="inline-flex items-center text-coffee-900 font-bold hover:text-gold-500 transition-colors uppercase tracking-widest text-sm pb-1 border-b-2 border-coffee-900 hover:border-gold-500">
                Discover Our Heritage <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;