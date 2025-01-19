import React, { useState, useEffect } from 'react';

interface AugmentProps {
  changeType: (output: string) => void;
  cols: number;
}

const Augment: React.FC<AugmentProps> = ({changeType, cols}) => {
  const [type, setType] = useState<string>("bmatrix");
  const [divider, setDivider] = useState(0);
  const [clicked, setClicked] = useState(false);

  const changeDivider = (change: number) => {
    setDivider(prev => Math.max(1, Math.min(cols - 1, prev + change)));
  };

  useEffect(() => {
    if (clicked) {
      changeType(`array ${type} ${divider}`);
    }
  }, [divider]);

  const helper = (type: string) => {
    setType(type);
  };

  return (
    <div className="mt-4 w-40 h-10 text-center text-white bg-gray-500 rounded group hover:bg-gray-600 relative hover:rounded-b-none transition-colors duration-300 ease-in-out">
      <button className="py-2 w-full">Augment
        <i className="ml-2 fa fa-caret-down"></i>
      </button>
      <div className="absolute hidden rounded-b group-hover:block bg-gray-500 w-full">
        <ul className="text-left">
          <li
            className="px-4 py-2 hover:bg-gray-600 hover:rounded-b cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={() => {changeType(`array bmatrix ${divider}`); helper("bmatrix"); setClicked(true);}}
          >
            bracket
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-600 hover:rounded-b cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={() => {changeType(`array pmatrix ${divider}`); helper("pmatrix"); setClicked(true);}}
          >
            parentheses
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-600 hover:rounded-b cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Divider
            <button className="text-right w-1/4 mr-2" onClick={() => changeDivider(-1)}>&lt;</button>
            {divider}
            <button className="text-right ml-2" onClick={() => changeDivider(1)}>&gt;</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Augment;