import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import { Coffee, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'History', path: '/history' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-coffee-950/90 backdrop-blur-md shadow-xl py-3 border-b border-coffee-800/50' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <motion.div 
            whileHover={{ rotate: 15 }} 
            className="flex items-center justify-center h-10 w-10 rounded-full bg-gold-500/10 text-gold-400 mr-3 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-coffee-950 transition-all duration-300"
          >
            <Coffee size={20} strokeWidth={2.5} />
          </motion.div>
          <span className="text-2xl font-display font-bold text-white tracking-wide">
            Sunshine <span className="text-gold-400">Cafe</span>
          </span>
        </Link>
        
        {/* Mobile Menu Button & Cart (Mobile) */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative text-white hover:text-gold-400 transition-colors">
            <ShoppingBag size={24} />
            {cart.totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center text-[10px] font-bold bg-gold-500 text-coffee-950 rounded-full border-2 border-coffee-950">
                {cart.totalItems}
              </span>
            )}
          </Link>
          <button 
            className="text-white focus:outline-none hover:text-gold-400 transition-colors" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-gold-400 ${location.pathname === link.path ? 'text-gold-400' : 'text-coffee-100/80'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Cart Icon */}
          <Link to="/cart" className="relative group p-2">
            <div className="text-white group-hover:text-gold-400 transition-colors">
              <ShoppingBag size={22} />
            </div>
            <AnimatePresence>
              {cart.totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute 0 top-0 right-0 flex h-5 w-5 translate-x-1/4 -translate-y-1/4 items-center justify-center text-[10px] font-bold bg-gold-500 text-coffee-950 rounded-full border-2 border-coffee-950"
                >
                  {cart.totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-coffee-950 border-b border-coffee-800 shadow-2xl"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`px-6 py-4 text-sm tracking-widest uppercase border-l-4 transition-colors ${location.pathname === link.path ? 'border-gold-400 text-gold-400 bg-coffee-900/50' : 'border-transparent text-coffee-100 hover:bg-coffee-900 hover:text-gold-400'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;