import React, { useEffect } from 'react';

interface LatexOutputProps {
  matrix: string[][];
  type: string;
  changeOutput: (output: string) => void;
}

const LatexOutput: React.FC<LatexOutputProps> = ({matrix, type, changeOutput}) => {
  const arr = type.split(" ");
  let output = "";
  console.log(type);
  if (arr.length === 1) {
    output = `\\begin{${type}}\n`;
  }
  else {
    if (arr[1] === "bmatrix") {
      output = `\\left[\\begin{${arr[0]}}`
    }
    else {
      output = `\\left(\\begin{${arr[0]}}`
    }
    let divider = "";
    for (let i = 0; i < matrix.length; ++i) {
      divider += "c";
      if (i === parseInt(arr[2]) - 1) {
        divider += "|"
      }
    }
    output += `{${divider}}\n`
  }
  for (let r = 0; r < matrix[0].length; ++r) {
    for (let c = 0; c < matrix.length; ++c) {
      output += matrix[c][r];
      if (c !== matrix.length - 1) {
        output += ' & ';
      }
    }
    if (r !== matrix[0].length - 1) {
      output += ' \\\\ \n'
    }
  }
  if (arr.length === 1) {
    output += `\n\\end{${type}}`;
  }
  else {
    if (arr[1] === "bmatrix") {
      output += `\n\\end{${arr[0]}}\\right]`;
    }
    else {
      output += `\n\\end{${arr[0]}}\\right)`;
    }
  }

  useEffect(() => {
    changeOutput(output);
  }, [matrix, type, changeOutput, output])

  return (
    <div className="bg-white">
      <pre>{output}</pre>
    </div>
  )
}

export default LatexOutput;