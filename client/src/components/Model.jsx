import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Modal;
