import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Notification from '../components/Notification';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, Star } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [notification, setNotification] = useState({ visible: false, message: '' });
  const [addedItems, setAddedItems] = useState({});
  const { addToCart } = useCart();
  
  const handleAddToCart = (item) => {
    addToCart({...item, category: activeCategory});
    setNotification({ visible: true, message: `${item.name} added to cart!` });
    
    // Provide visual feedback on button
    setAddedItems({...addedItems, [item.id]: true});
    setTimeout(() => {
      setAddedItems(prev => ({...prev, [item.id]: false}));
    }, 2000);
  };
  
  const closeNotification = () => {
    setNotification({ ...notification, visible: false });
  };

  const categories = [
    { id: 'coffee', name: 'Coffee Signature' },
    { id: 'tea', name: 'Artisanal Teas' },
    { id: 'pastries', name: 'Fresh Pastries' },
    { id: 'sandwiches', name: 'Gourmet Sandwiches' },
  ];

  const menuItems = {
    coffee: [
      { id: 1, name: 'Espresso', description: 'Strong and concentrated coffee served in a small cup.', price: 3.50, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=500' },
      { id: 2, name: 'Cappuccino', description: 'Espresso with steamed milk and a thick layer of foamed milk.', price: 4.50, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=500' },
      { id: 3, name: 'Velvet Latte', description: 'Espresso with a lot of steamed milk and a light layer of micro-foam.', price: 4.75, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=500' },
      { id: 4, name: 'Americano', description: 'Espresso diluted with hot water for a smoother, rich taste.', price: 3.75, image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=500' },
      { id: 5, name: 'Dark Mocha', description: 'Espresso with rich dark chocolate syrup and steamed milk.', price: 4.95, image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=500' },
    ],
    tea: [
      { id: 6, name: 'Sencha Green Tea', description: 'Light and refreshing Japanese tea with antioxidant properties.', price: 3.25, image: 'https://images.unsplash.com/photo-1627492275512-4ebed28236c9?auto=format&fit=crop&q=80&w=500' },
      { id: 7, name: 'London Fog (Earl Grey)', description: 'Classic black tea with bergamot citrus notes.', price: 3.50, image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80&w=500' },
      { id: 8, name: 'Spiced Chai Latte', description: 'Aromatic spiced tea with steamed milk and wild honey.', price: 4.25, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=500' },
      { id: 9, name: 'Ceremonial Matcha', description: 'Premium grade Japanese matcha whisked with steamed oat milk.', price: 4.75, image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=500' },
    ],
    pastries: [
      { id: 10, name: 'Butter Croissant', description: 'Authentic French-style buttery, flaky pastry baked fresh daily.', price: 2.75, image: 'https://images.unsplash.com/photo-1549903072-7e6e08bc39fa?auto=format&fit=crop&q=80&w=500' },
      { id: 11, name: 'Wild Blueberry Muffin', description: 'Moist muffin bursting with fresh wild blueberries, topped with streusel.', price: 3.25, image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=500' },
      { id: 12, name: 'Sea Salt Chocolate Cookie', description: 'Chewy brown-butter cookie with dark chocolate chunks and sea salt flakes.', price: 3.50, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=500' },
      { id: 13, name: 'Classic Cinnamon Roll', description: 'Warm pastry with generous cinnamon swirl and rich cream cheese frosting.', price: 4.75, image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=500' },
    ],
    sandwiches: [
      { id: 14, name: 'Signature Turkey Club', description: 'Triple-decker with roasted turkey, applewood bacon, avocado, and truffle mayo.', price: 9.95, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=500' },
      { id: 15, name: 'Mediterranean Veggie', description: 'Hummus, roasted Mediterranean vegetables, and feta in a spinach wrap.', price: 8.95, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=500' },
      { id: 16, name: 'Pesto Chicken Panini', description: 'Grilled chicken breast, basil pesto, fresh mozzarella, and sun-dried tomatoes.', price: 9.50, image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=500' },
      { id: 17, name: 'Artisan Tuna Melt', description: 'Premium albacore tuna salad with aged cheddar melted on grilled sourdough.', price: 8.95, image: 'https://images.unsplash.com/photo-1619894801123-28c05e197a95?auto=format&fit=crop&q=80&w=500' },
    ],
  };

  return (
    <div className="min-h-screen bg-coffee-50 pt-24 pb-20">
      {notification.visible && (
        <Notification message={notification.message} onClose={closeNotification} />
      )}

      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-500 tracking-widest uppercase text-sm font-bold mb-3 block">Discover Our Offerings</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-coffee-950 mb-4">
            The Menu
          </h1>
          <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full mt-6 mb-8"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide 
                ${activeCategory === category.id 
                  ? 'bg-coffee-900 text-gold-400 shadow-xl scale-105' 
                  : 'bg-white text-coffee-600 hover:bg-gold-50 hover:text-coffee-900 border border-coffee-100'}`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Menu Items Grid */}
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {menuItems[activeCategory].map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={item.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-coffee-100/50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-coffee-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-coffee-950 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex text-gold-500 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <h3 className="text-xl font-display font-bold text-coffee-950 mb-3 group-hover:text-gold-600 transition-colors">{item.name}</h3>
                  <p className="text-sm text-coffee-600 mb-6 leading-relaxed flex-grow">{item.description}</p>
                  
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={addedItems[item.id]}
                    className={`w-full py-3 rounded-xl flex items-center justify-center font-semibold transition-all duration-300 ${
                      addedItems[item.id] 
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                        : 'bg-coffee-50 active:bg-coffee-100 text-coffee-900 group-hover:bg-coffee-900 group-hover:text-white group-hover:shadow-xl group-hover:shadow-coffee-900/20'
                    }`}
                  >
                    {addedItems[item.id] ? (
                      <><Check size={18} className="mr-2" /> Added</>
                    ) : (
                      <><Plus size={18} className="mr-2" /> Add to Order</>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;