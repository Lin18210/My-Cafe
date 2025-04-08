import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center">
        <div className="text-center p-8 bg-black/40 rounded-lg backdrop-blur-sm max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Café Delight</h1>
          <p className="text-xl text-white mb-6">Experience the perfect blend of flavor and ambiance</p>
          <Link to="/menu" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-block">
            View Our Menu
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 text-amber-600">☕</div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">Premium Quality</h3>
            <p className="text-gray-600">We source the finest beans from around the world to create our signature blends.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 text-amber-600">🍰</div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">Fresh Pastries</h3>
            <p className="text-gray-600">Our pastries are baked fresh daily using traditional recipes and quality ingredients.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 text-amber-600">🌿</div>
            <h3 className="text-xl font-semibold mb-2 text-amber-900">Cozy Atmosphere</h3>
            <p className="text-gray-600">Enjoy your coffee in our warm, inviting space designed for comfort and conversation.</p>
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Today's Specials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-amber-200 h-48 md:h-auto"></div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-semibold mb-2 text-amber-900">Seasonal Blend</h3>
                <p className="text-gray-600 mb-4">Our limited edition autumn blend with notes of cinnamon and chocolate.</p>
                <p className="text-amber-600 font-bold">$4.50</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-amber-200 h-48 md:h-auto"></div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-semibold mb-2 text-amber-900">Artisan Sandwich</h3>
                <p className="text-gray-600 mb-4">Freshly baked sourdough with premium fillings and house dressing.</p>
                <p className="text-amber-600 font-bold">$8.95</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;