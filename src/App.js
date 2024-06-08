import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="App h-screen flex flex-col justify-center items-center bg-gray-100">
      {!gameStarted ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Wordle</h1>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg"
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

  const handleKeyClick = (key) => {
    if (currentCol < 5) {
      const newBoard = [...board];
      newBoard[currentRow][currentCol] = key;
      setBoard(newBoard);
      setCurrentCol(currentCol + 1);
    }
  };

  const handleSubmit = () => {
    if (currentCol === 5) {
      const guess = board[currentRow].join('');
      if (guess === 'REACT') {  // Change 'REACT' to the word of your choice
        alert('You guessed the word!');
      } else if (currentRow < 5) {
        setCurrentRow(currentRow + 1);
        setCurrentCol(0);
      } else {
        alert('Game Over! The word was REACT');
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <Board board={board} currentRow={currentRow} />
      <Keyboard handleKeyClick={handleKeyClick} />
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-lg mt-4"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
