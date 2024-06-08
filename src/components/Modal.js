import React from 'react';

function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 modal-background flex items-center justify-center">
      <div className="modal-content p-6 rounded-lg text-center">
        <h2 className="text-2xl mb-4">{message}</h2>
        <button
          className="modal-button px-6 py-3 rounded-lg"
          onClick={onClose}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Modal;
