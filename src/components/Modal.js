import React from 'react';

function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-2xl mb-4">{message}</h2>
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
          onClick={onClose}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Modal;
