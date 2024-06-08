import React, { useState } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Modal from './components/Modal';
import { getRandomWord } from './words';
import './css/App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="App h-screen flex flex-col justify-center items-center bg-gray-100">
      {!gameStarted ? (
        <div className="text-center">
          <h1 className="front-page-text font-bold mb-4">Wordle</h1>
          <p className="text-lg md:text-xl text-gray-500 mb-4">A fun word-guessing game for everyone!</p>
          <button
            className="px-8 py-3 bg-green-500 text-white rounded-3xl front-page-button"
            onClick={() => setGameStarted(true)}
          >
            Start
          </button>
        </div>
      ) : (
        <WordleGame />
      )}
    </div>
  );
}

function WordleGame() {
  const [board, setBoard] = useState(Array(6).fill().map(() => Array(5).fill('')));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [word, setWord] = useState(getRandomWord());
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [submittedRows, setSubmittedRows] = useState([]);

  const handleKeyClick = (key) => {
    // Implement key click logic here
  };

  const handleCloseModal = () => {
    // Implement modal close logic here
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div className="text-center mb-4">
        <h2 className="text-lg md:text-xl text-gray-500">Guess the word:</h2>
        <p className="text-md md:text-lg text-gray-500 mb-2">Try to guess the word by filling in the boxes below.</p>
      </div>
      <Board board={board} currentRow={currentRow} submittedRows={submittedRows} word={word} />
      <Keyboard handleKeyClick={handleKeyClick} />
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
