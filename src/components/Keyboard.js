import React from 'react';

const keys = [
  'QWERTYUIOP',
  'ASDFGHJKL',
  'ZXCVBNM',
];

function Keyboard({ handleKeyClick }) {
  return (
    <div className="mt-8">
      {keys.map((keyRow, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-1">
          {keyRow.split('').map((key) => (
            <button
              key={key}
              className="w-7 md:w-8 h-7 md:h-8 m-1 bg-gray-300 text-xs md:text-sm rounded-lg"
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center mb-1">
        <button
          className="w-14 md:w-16 h-7 md:h-8 m-1 bg-red-300 text-xs md:text-sm rounded-lg"
          onClick={() => handleKeyClick('DELETE')}
        >
          Undo
        </button>
        <button
          className="w-14 md:w-16 h-7 md:h-8 m-1 bg-green-300 text-xs md:text-sm rounded-lg"
          onClick={() => handleKeyClick('SUBMIT')}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
