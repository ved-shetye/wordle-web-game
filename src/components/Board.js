// src/components/Board.js
import React from 'react';

function Board() {
  const rows = Array(6).fill(Array(5).fill(''));

  return (
    <div className="grid grid-rows-6 gap-1 mt-8">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-1">
          {row.map((_, colIndex) => (
            <div
              key={colIndex}
              className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center text-xl"
            >
              {/* Here will go the letter */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
