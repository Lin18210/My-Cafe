import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  
  // If cart is empty, show a message
  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-coffee-900">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl mb-4 text-coffee-200">🛒</div>
            <p className="text-xl text-gray-600 mb-6">Your cart is empty.</p>
            <Link 
              to="/menu" 
              className="bg-coffee-600 hover:bg-coffee-700 text-white font-medium py-2 px-6 rounded transition-colors inline-block transform hover:scale-105"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-coffee-900">Your Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Cart Items */}
          <div className="divide-y divide-coffee-100">
            {cart.items.map((item) => (
              <div key={`${item.category}-${item.id}`} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center w-full md:w-auto">
                  <div className="w-16 h-16 bg-coffee-100 rounded-md flex-shrink-0">
                    <img 
                      src={`/src/assets/${item.image}`} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    >
                    </img>
                  </div>
                  
                  <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-coffee-900">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="text-coffee-600 font-medium mt-1">${item.price.toFixed(2)}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 md:mt-0 md:ml-4">
                  <button 
                    onClick={() => removeFromCart(item)}
                    className="w-8 h-8 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-800 hover:bg-coffee-200 transition-colors"
                  >
                    -
                  </button>
                  
                  <span className="mx-3 font-medium text-coffee-800">{item.quantity}</span>
                  
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-8 h-8 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-800 hover:bg-coffee-200 transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6 text-right">
                  <div className="font-bold text-coffee-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="bg-coffee-50 p-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-coffee-800">${cart.totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tax (8%)</span>
              <span className="font-medium text-coffee-800">${(cart.totalAmount * 0.08).toFixed(2)}</span>
            </div>
            <div className="border-t border-coffee-200 my-4"></div>
            <div className="flex justify-between mb-6">
              <span className="text-lg font-bold text-coffee-900">Total</span>
              <span className="text-lg font-bold text-coffee-900">
                ${(cart.totalAmount + cart.totalAmount * 0.08).toFixed(2)}
              </span>
            </div>
            
            <Link to="/checkout" className="w-full bg-coffee-600 hover:bg-coffee-700 text-white font-medium py-3 px-4 rounded transition-colors block text-center transform hover:scale-105">
              Proceed to Checkout
            </Link>
            
            <button 
              onClick={clearCart}
              className="w-full mt-4 text-coffee-600 hover:text-coffee-700 font-medium py-2 transition-colors text-center"
            >
              Clear Cart
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/menu" 
            className="text-coffee-600 hover:text-coffee-700 font-medium transition-colors"
          >
            ← Continue Shopping 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;