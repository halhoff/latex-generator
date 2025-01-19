import React from 'react';

interface CornerButtonProps {
  onClick: () => void;
  symbol: string;
}

const CornerButton: React.FC<CornerButtonProps> = ({onClick, symbol}) => {
  return (
    <button
      className="m-1 bg-gray-500 w-6 h-6 text-white rounded hover:bg-gray-600 transition-colors duration-300 ease-in-out"
      onClick={onClick}
    >
      {symbol}
    </button>
  )
}

export default CornerButton;