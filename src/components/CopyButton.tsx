import React, { useState } from 'react';

interface CopyButtonProps {
  copy: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({copy}) => {
  const [text, setText] = useState<string>("Copy");
  const changeText = () => {
    setText("Copied!");
    setTimeout(() => {
      setText("Copy");
    }, 1000);
  };
  return (
    <button
      className="bg-gray-500 w-40 h-10 ml-4 text-white rounded hover:bg-gray-600 transition-colors duration-300 ease-in-out"
      onClick={() => {copy(); changeText();}}
    >
      {text}
    </button>
  )
}

export default CopyButton;