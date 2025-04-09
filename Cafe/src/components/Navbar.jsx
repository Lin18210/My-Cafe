import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  
  return (
    <nav className="bg-amber-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">☕</span>
          <span>Café Delight</span>
        </Link>
        
        {/* Navigation links in the middle */}
        <div className="flex space-x-6 items-center">
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
          
          {/* Cart Icon with Badge */}
          <Link to="/cart" className="hover:text-amber-200 transition-colors font-medium relative">
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
    </nav>
  );
};

export default Navbar;