import React from 'react';

function Board({ board, currentRow, submittedRows, word }) {
  const getColor = (letter, index) => {
    if (letter === word[index]) return 'bg-green-500';
    if (word.includes(letter)) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  return (
    <div className="grid grid-rows-6 gap-1 mt-8">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-1">
          {row.map((letter, colIndex) => (
            <div
              key={colIndex}
              className={`w-14 h-14 border-2 flex items-center justify-center text-xl ${
                submittedRows.includes(rowIndex) ? getColor(letter, colIndex) : ''
              }`}
              style={{ color: letter ? 'white' : 'black' }} // Dynamically set text color based on whether the box is filled
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
