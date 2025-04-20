import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Add animation effect for cart badge
  const [animateCart, setAnimateCart] = useState(false);
  
  useEffect(() => {
    if (cart.totalItems > 0) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cart.totalItems]);

  return (
    <nav className="bg-gradient-to-r from-amber-800 to-amber-700 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className="text-2xl font-bold flex items-center transition-transform duration-300 hover:scale-105">
          <span className="mr-2 text-amber-300">☕</span>
          <span className="bg-gradient-to-r from-amber-100 to-amber-200 text-transparent bg-clip-text">Sunshine Cafe</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Cart Icon for Mobile - Always visible */}
        <Link to="/cart" className="md:hidden hover:text-amber-200 transition-all duration-300 font-medium relative ml-4 hover:scale-110">
          <span className="flex items-center">
            <span className="mr-1 text-amber-300">🛒</span>
            <span className="sr-only">Cart</span>
          </span>
          {cart.totalItems > 0 && (
            <span className={`absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md ${animateCart ? 'animate-pulse' : ''}`}>
              {cart.totalItems}
            </span>
          )}
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center gap-8 text-amber-50">
          <Link to="/" className="hover:text-amber-200 transition-all duration-300 font-medium hover:scale-110 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/menu" className="hover:text-amber-200 transition-all duration-300 font-medium hover:scale-110 relative group">
            Menu
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-amber-200 transition-all duration-300 font-medium hover:scale-110 relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="hover:text-amber-200 transition-all duration-300 font-medium hover:scale-110 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link to="/history" className="hover:text-amber-200 transition-all duration-300 font-medium hover:scale-110 relative group">
            Order History
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Cart Icon with Badge for Desktop */}
          <Link to="/cart" className="hover:text-amber-200 transition-all duration-300 font-medium relative ml-20 hover:scale-110 bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded-full shadow-md">
            <span className="flex items-center">
              <span className="mr-1 text-amber-200">🛒</span>
              <span>Cart</span>
            </span>
            {cart.totalItems > 0 && (
              <span className={`absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-amber-300 text-amber-900 text-xs rounded-full h-6 w-6 flex items-center justify-center shadow-md border border-amber-200 ${animateCart ? 'animate-pulse' : ''}`}>
                {cart.totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-amber-700 to-amber-800 mt-2 py-2 px-4 rounded-b shadow-lg animate-fade-in-down">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="hover:text-amber-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-amber-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-amber-300 mr-2">🏠</span> Home
            </Link>
            <Link 
              to="/menu" 
              className="hover:text-amber-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-amber-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-amber-300 mr-2">🍽️</span> Menu
            </Link>
            <Link 
              to="/about" 
              className="hover:text-amber-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-amber-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-amber-300 mr-2">ℹ️</span> About Us
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-amber-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-amber-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-amber-300 mr-2">📞</span> Contact
            </Link>
            <Link 
              to="/history" 
              className="hover:text-amber-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-amber-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-amber-300 mr-2">📋</span> Order History
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;