import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrderHistory } from '../context/OrderHistoryContext';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrderHistory();
  const navigate = useNavigate();
  const receiptRef = useRef(null);

  // If cart is empty, redirect to cart page
  React.useEffect(() => {
    if (cart.items.length === 0) {
      navigate('/cart');
    }
  }, [cart.items.length, navigate]);

  // Calculate tax and total
  const tax = cart.totalAmount * 0.08;
  const total = cart.totalAmount + tax;

  // Function to generate and download receipt
  const downloadReceipt = async () => {
    const receipt = receiptRef.current;
    if (!receipt) return;

    try {
      const canvas = await html2canvas(receipt, {
        scale: 2,
        logging: false,
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('sunshine-cafe-receipt.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  // Handle order completion
  const handleCompleteOrder = () => {
    // In a real app, you would process payment here
    // Save the order to history
    addOrder(cart);
    // Clear the cart and redirect to history page
    clearCart();
    navigate('/history');
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-900">Checkout</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Receipt Content - This will be captured for PDF */}
          <div ref={receiptRef} className="p-6 bg-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-amber-900">Sunshine Cafe</h2>
              <p className="text-gray-600">123 Coffee Street, Brewville, CA 90210</p>
              <p className="text-gray-600">Tel: (555) 123-4567</p>
              <p className="text-gray-600">Receipt #{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
              <p className="text-gray-600">{new Date().toLocaleString()}</p>
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
                  {cart.items.map((item) => (
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
                <span className="font-medium">${cart.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="font-bold text-amber-900">Total</span>
                  <span className="font-bold text-amber-900">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center text-gray-600 mt-8">
              <p>Thank you for your order!</p>
              <p>We hope to see you again soon.</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="bg-amber-50 p-6 flex flex-col sm:flex-row justify-between gap-4">
            <button 
              onClick={downloadReceipt}
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded transition-colors flex-1"
            >
              Download Receipt
            </button>
            
            <button 
              onClick={handleCompleteOrder}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded transition-colors flex-1"
            >
              Complete Order
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/cart" 
            className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
          >
            ← Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;