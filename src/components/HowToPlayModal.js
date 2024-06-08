import React from 'react';

const HowToPlayModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 modal-background flex items-center justify-center">
      <div className="modal-content p-6 rounded-lg text-center max-w-lg">
        <h2 className="text-2xl mb-4">How To Play</h2>
        <p>Guess the Wordle in 6 tries.</p>
        <ul className="text-left mt-4">
          <li>Each guess must be a valid 5-letter word.</li>
          <li>The color of the tiles will change to show how close your guess was to the word.</li>
        </ul>
        <div className="examples mt-4">
          <p>Examples</p>
          <div className="example mt-2">
            <div className="example-row">
              <span className="board-box correct-position">W</span>
              <span className="board-box">E</span>
              <span className="board-box">A</span>
              <span className="board-box">R</span>
              <span className="board-box">Y</span>
            </div>
            <p>W is in the word and in the correct spot.</p>
          </div>
          <div className="example mt-2">
            <div className="example-row">
              <span className="board-box">P</span>
              <span className="board-box correct-letter">I</span>
              <span className="board-box">L</span>
              <span className="board-box">L</span>
              <span className="board-box">S</span>
            </div>
            <p>I is in the word but in the wrong spot.</p>
          </div>
          <div className="example mt-2">
            <div className="example-row">
              <span className="board-box">V</span>
              <span className="board-box">A</span>
              <span className="board-box">U</span>
              <span className="board-box">G</span>
              <span className="board-box">E</span>
            </div>
            <p>No letters used are in the word.</p>
          </div>
        </div>
        <button
          className="modal-button px-6 py-3 rounded-lg mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HowToPlayModal;
