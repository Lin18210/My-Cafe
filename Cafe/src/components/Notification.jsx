import React, { useEffect, useState } from 'react';

const Notification = ({ message, isVisible, onClose, duration = 3000 }) => {
  const [isExiting, setIsExiting] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      setIsExiting(false);
      const timer = setTimeout(() => {
        setIsExiting(true);
        const exitTimer = setTimeout(() => {
          onClose();
        }, 500); // Match this with the exit animation duration
        
        return () => clearTimeout(exitTimer);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);
  
  if (!isVisible) return null;
  
  return (
    <div className={`fixed top-4 right-4 z-50 ${isExiting ? 'animate-fade-out-up' : 'animate-fade-in-down'}`}>
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center border border-amber-400 transform transition-all duration-300 hover:scale-105">
        <div className="mr-3 text-amber-200 text-xl">✓</div>
        <span className="font-medium">{message}</span>
        <button 
          onClick={() => setIsExiting(true)}
          className="ml-4 text-white hover:text-amber-200 focus:outline-none transition-transform duration-300 hover:rotate-90"
          aria-label="Close notification"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Notification;