import React from 'react';

interface VerticalButtonProps {
  onClick: () => void;
  length: number;
  symbol: string;
}

const VerticalButton: React.FC<VerticalButtonProps> = ({onClick, length, symbol}) => {
  return (
    <button
      className="m-1 bg-gray-500 h-6 text-white rounded hover:bg-gray-600 transition-colors duration-300 ease-in-out"
      onClick={onClick}
      style={{width: `${64 * length + 8 * (length - 1)}px`}}
    >
      {symbol}
    </button>
  )
}

export default VerticalButton;