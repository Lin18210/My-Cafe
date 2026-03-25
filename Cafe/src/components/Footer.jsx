import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-950 text-coffee-100 pt-16 pb-8 border-t border-coffee-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center group mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gold-500/10 text-gold-400 mr-3 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-coffee-950 transition-all duration-300">
                <Coffee size={20} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-wide">
                Sunshine <span className="text-gold-400">Cafe</span>
              </span>
            </Link>
            <p className="text-coffee-300 text-sm leading-relaxed mb-6">
              A cozy sanctuary where premium, ethically-sourced coffee meets artisanal pastries. Experience warmth and elegance in every cup.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-coffee-900 flex items-center justify-center text-coffee-300 hover:bg-gold-500 hover:text-coffee-950 transition-all duration-300 transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-coffee-900 flex items-center justify-center text-coffee-300 hover:bg-gold-500 hover:text-coffee-950 transition-all duration-300 transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-coffee-900 flex items-center justify-center text-coffee-300 hover:bg-gold-500 hover:text-coffee-950 transition-all duration-300 transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold tracking-wide mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About Us', 'Contact', 'Order History'].map((item, index) => {
                const paths = ['/', '/menu', '/about', '/contact', '/history'];
                return (
                  <li key={index}>
                    <Link to={paths[index]} className="flex items-center text-coffee-300 hover:text-gold-400 transition-colors group">
                      <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold-500" />
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Operating Hours */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold tracking-wide mb-6 relative inline-block">
              Opening Hours
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-3 text-coffee-300 text-sm">
              <li className="flex justify-between border-b border-coffee-800/50 pb-2">
                <span>Mon - Fri:</span>
                <span className="text-gold-400">7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-coffee-800/50 pb-2">
                <span>Saturday:</span>
                <span className="text-gold-400">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday:</span>
                <span className="text-gold-400">8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold tracking-wide mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start text-coffee-300">
                <MapPin size={18} className="text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>123 Espresso Lane<br />Brewville, CA 90210</span>
              </li>
              <li className="flex items-center text-coffee-300">
                <Phone size={18} className="text-gold-500 mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="hover:text-gold-400 transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center text-coffee-300">
                <Mail size={18} className="text-gold-500 mr-3 flex-shrink-0" />
                <a href="mailto:hello@sunshinecafe.com" className="hover:text-gold-400 transition-colors">hello@sunshinecafe.com</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-coffee-800/50 flex flex-col md:flex-row justify-between items-center text-coffee-400 text-xs text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Sunshine Cafe. Designed with passion.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span>Brewed with</span>
            <Coffee size={12} className="text-gold-500 animate-pulse" />
            <span>for coffee lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;