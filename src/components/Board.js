import React from 'react';

const WORD = 'REACT'; // The correct word to guess

function Board({ board, currentRow }) {
  const getColor = (letter, index) => {
    if (letter === WORD[index]) return 'bg-green-500';
    if (WORD.includes(letter)) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  return (
    <div className="grid grid-rows-6 gap-1 mt-8">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-1">
          {row.map((letter, colIndex) => (
            <div
              key={colIndex}
              className={`w-16 h-16 border-2 flex items-center justify-center text-xl ${rowIndex < currentRow ? getColor(letter, colIndex) : ''}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
