import React from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';
addStyles();

interface InputFieldProps {
  row: number;
  col: number;
  current: string;
  updateMatrix: (row: number, col: number, latex: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({row, col, current, updateMatrix}) => {
  return (
    <div className="m-1 w-16 h-16 bg-white">
      <EditableMathField
        className="w-full h-full text-black p-2 border-0"
        latex={current}
        onChange={(mathField) => updateMatrix(row, col, mathField.latex())}
        style={{
          fontSize: '1.5rem',
          border: 'none',
        }}
      />
    </div>
  );
};

export default InputField;