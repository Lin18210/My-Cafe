import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const { addToCart } = useCart();

  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'sandwiches', name: 'Sandwiches' },
  ];

  const menuItems = {
    coffee: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Strong and concentrated coffee served in a small cup.',
        price: 3.50,
        image: 'coffee-placeholder.jpg'
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and a layer of foamed milk.',
        price: 4.50,
        image: 'coffee-placeholder.jpg'
      },
      {
        id: 3,
        name: 'Latte',
        description: 'Espresso with a lot of steamed milk and a light layer of foam.',
        price: 4.75,
        image: 'coffee-placeholder.jpg'
      },
      {
        id: 4,
        name: 'Mocha',
        description: 'Espresso with chocolate, steamed milk, and whipped cream.',
        price: 5.25,
        image: 'coffee-placeholder.jpg'
      },
    ],
    tea: [
      {
        id: 1,
        name: 'Green Tea',
        description: 'Light and refreshing tea with antioxidants.',
        price: 3.25,
        image: 'tea-placeholder.jpg'
      },
      {
        id: 2,
        name: 'Earl Grey',
        description: 'Black tea flavored with oil of bergamot.',
        price: 3.50,
        image: 'tea-placeholder.jpg'
      },
      {
        id: 3,
        name: 'Chai Latte',
        description: 'Spiced tea mixed with steamed milk.',
        price: 4.50,
        image: 'tea-placeholder.jpg'
      },
    ],
    pastries: [
      {
        id: 1,
        name: 'Croissant',
        description: 'Buttery, flaky pastry of Austrian origin.',
        price: 3.25,
        image: 'pastry-placeholder.jpg'
      },
      {
        id: 2,
        name: 'Chocolate Muffin',
        description: 'Rich chocolate muffin with chocolate chips.',
        price: 3.75,
        image: 'pastry-placeholder.jpg'
      },
      {
        id: 3,
        name: 'Cinnamon Roll',
        description: 'Sweet roll with cinnamon and frosting.',
        price: 4.25,
        image: 'pastry-placeholder.jpg'
      },
    ],
    sandwiches: [
      {
        id: 1,
        name: 'Avocado Toast',
        description: 'Toasted bread topped with mashed avocado, salt, and pepper.',
        price: 7.50,
        image: 'sandwich-placeholder.jpg'
      },
      {
        id: 2,
        name: 'Chicken Panini',
        description: 'Grilled sandwich with chicken, cheese, and pesto.',
        price: 8.95,
        image: 'sandwich-placeholder.jpg'
      },
      {
        id: 3,
        name: 'Veggie Wrap',
        description: 'Tortilla filled with hummus and fresh vegetables.',
        price: 7.95,
        image: 'sandwich-placeholder.jpg'
      },
    ],
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Menu</h1>
        
        {/* Category Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${activeCategory === category.id ? 'bg-amber-600 text-white' : 'bg-white text-amber-900 hover:bg-amber-100'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-amber-200"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button 
                  onClick={() => addToCart({...item, category: activeCategory})}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;