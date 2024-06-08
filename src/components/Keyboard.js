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
              className="w-12 h-12 m-1 bg-gray-300 text-black rounded-lg"
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
