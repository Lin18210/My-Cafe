import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the order history context
const OrderHistoryContext = createContext();

// Initial state for the order history
const initialState = [];

// Order history provider component
export const OrderHistoryProvider = ({ children }) => {
  // Load order history from localStorage if available
  const [orderHistory, setOrderHistory] = useState(() => {
    const savedOrders = localStorage.getItem('orderHistory');
    return savedOrders ? JSON.parse(savedOrders) : initialState;
  });

  // Save order history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }, [orderHistory]);

  // Add a new order to history
  const addOrder = (order) => {
    const newOrder = {
      id: orderHistory.length + 1,
      orderNumber: `Order ${String(orderHistory.length + 1).padStart(2, '0')}`,
      date: new Date().toISOString(),
      items: order.items,
      subtotal: order.totalAmount,
      tax: order.totalAmount * 0.08,
      total: order.totalAmount + (order.totalAmount * 0.08),
      receiptNumber: Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    };
    
    setOrderHistory(prev => [newOrder, ...prev]);
    
    return newOrder;
  };

  // Get a specific order by ID
  const getOrderById = (id) => {
    return orderHistory.find(order => order.id === id) || null;
  };

  return (
    <OrderHistoryContext.Provider
      value={{
        orderHistory,
        addOrder,
        getOrderById
      }}
    >
      {children}
    </OrderHistoryContext.Provider>
  );
};

// Custom hook to use the order history context
export const useOrderHistory = () => {
  const context = useContext(OrderHistoryContext);
  if (!context) {
    throw new Error('useOrderHistory must be used within an OrderHistoryProvider');
  }
  return context;
};