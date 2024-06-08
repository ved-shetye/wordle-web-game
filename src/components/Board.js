import React from 'react';

function Board({ board, currentRow, submittedRows, word }) {
  const getClassName = (letter, index, rowIndex) => {
    if (!letter) return 'board-box empty-box';
    if (!submittedRows.includes(rowIndex)) return 'board-box';
    if (letter === word[index]) return 'board-box correct-position';
    if (word.includes(letter)) return 'board-box correct-letter';
    return 'board-box incorrect-letter';
  };

  return (
    <div className="flex flex-col items-center">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.map((letter, colIndex) => (
            <div
              key={colIndex}
              className={getClassName(letter, colIndex, rowIndex)}
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
