import React from 'react';

export const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999] p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
          <div className="p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[80vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};