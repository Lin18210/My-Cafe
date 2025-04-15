import React, { useState, useEffect } from 'react';

const Notification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-fade-in-down">
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg max-w-xs">
        <div className="flex items-center">
          <div className="text-xl mr-2">✓</div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;