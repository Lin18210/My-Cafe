import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-amber-900">About Us</h1>
        
        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 md:mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 bg-amber-200 h-64 md:h-auto"></div>
            <div className="p-6 md:p-8 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-amber-900">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Sunshine Cafe was founded in 2017 with a simple mission: to create a warm, welcoming space where people could enjoy exceptional coffee and food. What started as a small corner shop has grown into a beloved community gathering place.
              </p>
              <p className="text-gray-700">
                Our founder, Su Su Htwe, developed her passion for coffee while traveling through Europe and South America. She brought back not just coffee beans, but a philosophy about how a café should feel — like an extension of your living room, where every customer is treated like family.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-amber-900">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
          <iframe
    title="Google Map"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d290.2144699530377!2d96.16198378977614!3d16.898625153460404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933b19ff5b5b%3A0xb2c8ef7ec1115539!2sSunshine%20Food%20%26%20Coffee%20and%20Hotpot%20%26%20Grill%20pot!5e0!3m2!1sen!2ssg!4v1744299050067!5m2!1sen!2ssg"
  ></iframe>
            <div className="p-6 md:p-8 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-amber-900">Visit Us</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-amber-800 mb-2">Address</h3>
                <p className="text-gray-700">
                  Thudama Road<br />
                  North Okkalapa, Thandar Stop
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-amber-800 mb-2">Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 7:00 AM - 7:00 PM<br />
                  Saturday - Sunday: 7:00 AM - 8:00 PM
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Contact</h3>
                <p className="text-gray-700">
                  Phone: 095065806 <br />
                  Email: sunshine12@gmail.com
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