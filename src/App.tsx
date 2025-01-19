import React, { useState, useEffect } from 'react';
import './global.css';
import InputField from './components/InputField.tsx';
import HorizontalButton from './components/HorizontalButton.tsx';
import VerticalButton from './components/VerticalButton.tsx';
import CornerButton from './components/CornerButton.tsx';
import LatexOutput from './components/LatexOutput.tsx';
import Dropdown from './components/Dropdown.tsx';
import CopyButton from './components/CopyButton.tsx';
import Augment from './components/Augment.tsx';

export default function App() {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  const [matrix, setMatrix] = useState<string[][]>(Array(rows).fill(Array(cols).fill('')));
  const [type, setType] = useState<string>("bmatrix");
  const [output, setOutput] = useState<string>('');

  useEffect(() => {
    const newMatrix = Array.from({ length: cols }, (_, i) =>
      Array.from({ length: rows }, (_, j) => (matrix[i]?.[j] || ''))
    );
    setMatrix(newMatrix);
    console.log(rows);
    console.log(cols);
  }, [rows, cols]);

  const changeRows = (change: number) => {
    setRows((prev) => Math.max(1, prev + change));
  };

  const changeCols = (change: number) => {
    setCols((prev) => Math.max(1, prev + change));
  };

  const updateMatrix = (row: number, col: number, latex: string) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = latex;
    setMatrix(newMatrix);
  };

  const changeType = (newType: string) => {
    setType(newType);
  };

  const changeOutput = (newOutput: string) => {
    setOutput(newOutput);
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="container min-w-full min-h-screen bg-black">
      <header className="text-center text-white">
        <p className="text-3xl font-bold text-white p-4">Latex Generator</p>
      </header>
      <hr />
      <p className="text-center text-white text-2xl m-4">Matrix</p>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <div>
            <CornerButton onClick={() => { changeRows(-1); changeCols(-1); }} symbol={"-"} />
            <VerticalButton onClick={() => changeRows(-1)} length={cols} symbol={"-"}/>
          </div>
          <div className="flex justify-center">
            <HorizontalButton onClick={() => changeCols(-1)} length={rows} symbol={"-"}/>
            {matrix.length > 0 && (
              <div className="flex">
                {matrix.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-col justify-center">
                    {row.map((cell, colIndex) => (
                      <InputField
                        key={`${rowIndex}-${colIndex}`}
                        row={rowIndex}
                        col={colIndex}
                        current={cell}
                        updateMatrix={updateMatrix}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col">
              <HorizontalButton onClick={() => changeCols(1)} length={rows} symbol={"+"} />
            </div>
          </div>
          <div style={{ transform: 'translateX(32px)' }}>
            <VerticalButton onClick={() => changeRows(1)} length={cols} symbol={"+"} />
            <CornerButton onClick={() => { changeRows(1); changeCols(1); }} symbol={"+"} />
          </div>
        </div>
      </div>
      <div className="m-4 flex items-center justify-center">
        <div className="flex flex-row w-1/2">
          <div className="flex flex-col w-40">
            <Dropdown text={"Type"} items={["matrix","bmatrix","pmatrix","Bmatrix","vmatrix","Vmatrix","smallmatrix"]} onClick={changeType}/>
            <Augment changeType={changeType} cols={cols}/>
          </div>
          <div className="flex-grow ml-4 w-full">
            <LatexOutput matrix={matrix} type={type} changeOutput={changeOutput}/>
          </div>
          <div>
            <CopyButton copy={() => copy()}/>
          </div>
        </div>
      </div>
    </div>
  );
}