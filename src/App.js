import React, { useState } from 'react';
import './App.css';

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
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
