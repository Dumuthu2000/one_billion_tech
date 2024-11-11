import React from 'react';
import { CalendarDays } from 'lucide-react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-green-500 hover:text-gray-700"
        >
          <CalendarDays className="h-10 w-10"/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
