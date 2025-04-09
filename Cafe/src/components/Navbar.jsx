import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-amber-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">☕</span>
          <span>Sunshine Cafe</span>
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
        <Link to="/cart" className="md:hidden hover:text-amber-200 transition-colors font-medium relative ml-4">
          <span className="flex items-center">
            <span className="mr-1">🛒</span>
            <span className="sr-only">Cart</span>
          </span>
          {cart.totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.totalItems}
            </span>
          )}
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center gap-8">
          <Link to="/" className="hover:text-amber-200 transition-colors font-medium">
            Home
          </Link>
          <Link to="/menu" className="hover:text-amber-200 transition-colors font-medium">
            Menu
          </Link>
          <Link to="/about" className="hover:text-amber-200 transition-colors font-medium">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-amber-200 transition-colors font-medium">
            Contact
          </Link>
          
          {/* Cart Icon with Badge for Desktop */}
          <Link to="/cart" className="hover:text-amber-200 transition-colors font-medium relative ml-20">
            <span className="flex items-center">
              <span className="mr-1">🛒</span>
              <span>Cart</span>
            </span>
            {cart.totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-800 mt-2 py-2 px-4 rounded-b shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="hover:text-amber-200 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="hover:text-amber-200 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="hover:text-amber-200 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-amber-200 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;