import React from 'react';

interface HorizontalButtonProps {
  onClick: () => void;
  length: number;
  symbol: string;
}

const HorizontalButton: React.FC<HorizontalButtonProps> = ({onClick, length, symbol}) => {
  return (
    <button
      className="m-1 bg-gray-500 w-6 text-white rounded hover:bg-gray-600 transition-colors duration-300 ease-in-out"
      onClick={onClick}
      style={{height: `${64 * length + 8 * (length - 1)}px`}}
    >
      {symbol}
    </button>
  )
}

export default HorizontalButton;