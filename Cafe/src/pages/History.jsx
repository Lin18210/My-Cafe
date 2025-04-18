import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOrderHistory } from '../context/OrderHistoryContext';

const History = () => {
  const { orderHistory } = useOrderHistory();
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  // Toggle order details visibility
  const toggleOrderDetails = (orderId) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null);
    } else {
      setExpandedOrderId(orderId);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  // If no orders, show a message
  if (orderHistory.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-amber-900">Order History</h1>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-xl text-gray-600 mb-6">You don't have any orders yet</p>
            <Link 
              to="/menu" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded transition-colors inline-block"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-900">Order History</h1>
        
        <div className="space-y-6">
          {orderHistory.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Order Summary */}
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-amber-900">{order.orderNumber}</h2>
                  <p className="text-gray-600">{formatDate(order.date)}</p>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <div className="font-bold text-amber-900 text-lg">
                    ${order.total.toFixed(2)}
                  </div>
                  
                  <button 
                    onClick={() => toggleOrderDetails(order.id)}
                    className="bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-2 px-4 rounded transition-colors"
                  >
                    {expandedOrderId === order.id ? 'Hide Details' : 'Show Details'}
                  </button>
                </div>
              </div>
              
              {/* Order Details (Expanded) */}
              {expandedOrderId === order.id && (
                <div className="border-t border-gray-200 p-6 bg-amber-50">
                  <div className="mb-4">
                    <h3 className="font-semibold text-amber-900 mb-3">Receipt #{order.receiptNumber}</h3>
                  </div>
                  
                  <div className="border-t border-b border-gray-200 py-4 mb-4">
                    <h3 className="font-semibold text-amber-900 mb-3">Order Details</h3>
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-gray-600">
                          <th className="pb-2">Item</th>
                          <th className="pb-2 text-center">Qty</th>
                          <th className="pb-2 text-right">Price</th>
                          <th className="pb-2 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {order.items.map((item) => (
                          <tr key={`${item.category}-${item.id}`} className="text-gray-800">
                            <td className="py-2">{item.name}</td>
                            <td className="py-2 text-center">{item.quantity}</td>
                            <td className="py-2 text-right">${item.price.toFixed(2)}</td>
                            <td className="py-2 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${order.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (8%)</span>
                      <span className="font-medium">${order.tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="font-bold text-amber-900">Total</span>
                        <span className="font-bold text-amber-900">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/menu" 
            className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;