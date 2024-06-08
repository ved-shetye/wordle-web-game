import React, { useState, useEffect } from 'react';
import './css/App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Modal from './components/Modal';
import HowToPlayModal from './components/HowToPlayModal';
import { getRandomWord } from './words';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const handleShowHowToPlay = () => {
    setShowHowToPlay(true);
  };

  const handleCloseHowToPlay = () => {
    setShowHowToPlay(false);
  };

  return (
    <div className="App h-screen flex flex-col justify-center items-center">
      {!gameStarted ? (
        <div className="text-center">
          <h1 className="front-page-text font-bold mb-2">Wordle</h1>
          <p className="front-page-description mb-4">Try to guess the hidden word in six attempts!</p>
          <div>
            <button
              className="front-page-button px-8 py-3 rounded-3xl"
              onClick={() => setGameStarted(true)}
            >
              Start
            </button>
            <button
              className="front-page-button px-8 py-3 rounded-3xl ml-4"
              onClick={handleShowHowToPlay}
            >
              How to Play
            </button>
          </div>
          {showHowToPlay && <HowToPlayModal onClose={handleCloseHowToPlay} />}
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

  useEffect(() => {
    console.log(`The word is: ${word}`);
  }, [word]);

  const handleKeyClick = (key) => {
    if (key === 'DELETE') {
      if (currentCol > 0) {
        const newBoard = [...board];
        newBoard[currentRow][currentCol - 1] = '';
        setBoard(newBoard);
        setCurrentCol(currentCol - 1);
      }
    } else if (key === 'SUBMIT') {
      handleSubmit();
    } else if (currentCol < 5) {
      const newBoard = [...board];
      newBoard[currentRow][currentCol] = key;
      setBoard(newBoard);
      setCurrentCol(currentCol + 1);
    }
  };

  const handleSubmit = () => {
    if (currentCol === 5) {
      const guess = board[currentRow].join('').toUpperCase();
      console.log(`Submitted guess: ${guess}`); // Log the guess
      if (guess === word) {
        console.log('Correct guess!'); // Log when the guess is correct
        setModalMessage('Congratulations! You guessed the word!');
        setShowModal(true);
        setSubmittedRows([...submittedRows, currentRow]);
      } else if (currentRow < 5) {
        console.log('Incorrect guess, moving to next row.'); // Log when moving to the next row
        setSubmittedRows([...submittedRows, currentRow]);
        setCurrentRow(currentRow + 1);
        setCurrentCol(0);
      } else {
        console.log('Game over, no more attempts left.'); // Log when the game is over
        setModalMessage(`Hard luck! The word was ${word}`);
        setShowModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBoard(Array(6).fill().map(() => Array(5).fill('')));
    setCurrentRow(0);
    setCurrentCol(0);
    setSubmittedRows([]);
    setWord(getRandomWord());
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <p className="mb-2 text-4xl pt-5 font-semibold text-neon-green">Guess the word</p>
      <Board board={board} currentRow={currentRow} submittedRows={submittedRows} word={word} />
      <Keyboard handleKeyClick={handleKeyClick} />
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
