import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-amber-900">About Us</h1>
        
        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 bg-amber-200 h-64 md:h-auto"></div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-amber-900">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Café Delight was founded in 2010 with a simple mission: to create a warm, welcoming space where people could enjoy exceptional coffee and food. What started as a small corner shop has grown into a beloved community gathering place.
              </p>
              <p className="text-gray-700">
                Our founder, Jane Smith, developed her passion for coffee while traveling through Europe and South America. She brought back not just coffee beans, but a philosophy about how a café should feel — like an extension of your living room, where every customer is treated like family.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-amber-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-amber-600">🌱</div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Sustainability</h3>
              <p className="text-gray-600">We source our ingredients ethically and use eco-friendly packaging to minimize our environmental footprint.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-amber-600">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Community</h3>
              <p className="text-gray-600">We believe in building strong relationships with our customers, suppliers, and the local community.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-amber-600">⭐</div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Quality</h3>
              <p className="text-gray-600">We never compromise on quality, from our carefully selected coffee beans to our freshly baked pastries.</p>
            </div>
          </div>
        </div>
        
        {/* Location Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2 bg-gray-300 h-64 md:h-auto">{
              /* This would be a map in a real implementation */
            }</div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-amber-900">Visit Us</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-amber-800 mb-2">Address</h3>
                <p className="text-gray-700">
                  123 Coffee Street<br />
                  Brewville, CA 90210
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-amber-800 mb-2">Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 7:00 AM - 8:00 PM<br />
                  Saturday - Sunday: 8:00 AM - 9:00 PM
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Contact</h3>
                <p className="text-gray-700">
                  Phone: (555) 123-4567<br />
                  Email: info@cafedelight.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;