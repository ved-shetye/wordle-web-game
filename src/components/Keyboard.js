import React from 'react';

const keys = [
  'QWERTYUIOP',
  'ASDFGHJKL'
];

function Keyboard({ handleKeyClick }) {
  return (
    <div className="mt-4">
      {keys.map((keyRow, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-1">
          {keyRow.split('').map((key) => (
            <button
              key={key}
              className="keyboard-key"
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center mb-1">
        <button
          className="keyboard-key wide-key"
          onClick={() => handleKeyClick('DELETE')}
        >
          Delete
        </button>
        <div className="flex">
          {'ZXCVBNM'.split('').map((key) => (
            <button
              key={key}
              className="keyboard-key"
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <button
          className="keyboard-key wide-key"
          onClick={() => handleKeyClick('SUBMIT')}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
