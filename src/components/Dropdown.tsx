import React from 'react';

interface DropdownProps {
  text: string;
  items: string[];
  onClick: (output: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({text, items, onClick}) => {
  return (
    <div className="w-40 h-10 text-center text-white bg-gray-500 rounded group hover:bg-gray-600 hover:rounded-b-none relative transition-colors duration-300 ease-in-out">
      <button className="py-2 w-full">{text}
        <i className="ml-2 fa fa-caret-down"></i>
      </button>
      <div className="absolute hidden rounded-b group-hover:block bg-gray-500 w-full z-10">
        <ul className="text-left">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-600 hover:rounded-b cursor-pointer transition-colors duration-300 ease-in-out"
              onClick={() => onClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;