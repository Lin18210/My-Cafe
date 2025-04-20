import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOrderHistory } from '../context/OrderHistoryContext';

const History = () => {
  const { orderHistory } = useOrderHistory();
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [animatedOrders, setAnimatedOrders] = useState([]);

  // Toggle order details visibility
  const toggleOrderDetails = (orderId) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null);
    } else {
      setExpandedOrderId(orderId);
    }
  };
  
  // Add animation effect when component mounts
  useEffect(() => {
    if (orderHistory && orderHistory.length > 0) {
      const timer = setTimeout(() => {
        setAnimatedOrders(orderHistory.map(order => order.id));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [orderHistory]);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  // If no orders, show a message
  if (!orderHistory || orderHistory.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-amber-900 drop-shadow-sm">Order History</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4">📋</div>
            <p className="text-xl text-gray-700 mb-6">You don't have any orders yet</p>
            <Link 
              to="/menu" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block shadow-md hover:shadow-lg"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-900 drop-shadow-sm">Order History</h1>
        
        <div className="space-y-6">
          {orderHistory.map((order) => (
            <div 
            key={order.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-all duration-300 ${animatedOrders.includes(order.id) ? 'animate-fade-in-down' : 'opacity-0'}`}
          >
            {/* Order Summary */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-amber-50 to-white">
              <div>
                <h2 className="text-xl font-semibold text-amber-900">{order.orderNumber}</h2>
                <p className="text-gray-600 flex items-center gap-2">
                  <span className="text-amber-500">📅</span>
                  {formatDate(order.date)}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-4">   
                <div className="font-bold text-amber-900 text-lg bg-amber-50 py-1 px-3 rounded-full border border-amber-200">
                  ${order.total.toFixed(2)}
                </div>
                
                <button 
                  onClick={() => toggleOrderDetails(order.id)}
                  className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-medium py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  {expandedOrderId === order.id ? 'Hide Details' : 'Show Details'}
                </button>
              </div>     
            </div>
          </div>
          
              
              {/* Order Details (Expanded) */}    
              {expandedOrderId === order.id && (
                <div className="border-t border-amber-200 p-6 bg-gradient-to-b from-amber-50 to-white animate-fade-in-down">
                  <div className="mb-4">
                    <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-amber-500">🧾</span>
                      Receipt #{order.receiptNumber}
                    </h3>
                  </div>
                      
                  <div className="border-t border-b border-amber-200 py-4 mb-4">
                    <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-amber-500">📋</span>
                      Order Details
                    </h3>
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-amber-800 bg-amber-100 rounded-lg">
                          <th className="pb-2 pt-2 pl-2 rounded-l-lg">Item</th>      
                          <th className="pb-2 pt-2 text-center">Qty</th>
                          <th className="pb-2 pt-2 text-right">Price</th>
                          <th className="pb-2 pt-2 text-right pr-2 rounded-r-lg">Total</th>
                        </tr>       
                      </thead>
                      <tbody className="divide-y divide-amber-100">
                        {order.items.map((item) => (
                          <tr key={`${item.category}-${item.id}`} className="text-gray-800 hover:bg-amber-50 transition-colors duration-150">
                            <td className="py-3 pl-2">{item.name}</td>
                            <td className="py-3 text-center">{item.quantity}</td>
                            <td className="py-3 text-right">${item.price.toFixed(2)}</td>
                            <td className="py-3 text-right pr-2 font-medium">${(item.price * item.quantity).toFixed(2)}</td>  
                          </tr>
                        ))}   
                      </tbody>
                    </table>
                  </div>   
                      
                  <div className="space-y-3 mb-4 mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100 shadow-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">${order.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax:</span>
                      <span className="font-medium">${order.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-amber-900 pt-2 border-t border-amber-200">
                      <span>Total:</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;