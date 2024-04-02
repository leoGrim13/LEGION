import React, { useState } from 'react';
import './Plateau.css';

const Plateau = ({ selectedBlock }) => {
  const [plateauState, setPlateauState] = useState(Array(12).fill(Array(12).fill('')));
  const [selectedCell, setSelectedCell] = useState(null);
  

  const handleCellClick = (row, col) => {
    if (selectedCell) {
      const updatedPlateauState = plateauState.map((rowArray, rowIndex) => {
        if (rowIndex === row) {
          return rowArray.map((cell, colIndex) => {
            if (colIndex === col) {
              return selectedBlock;
            } else if (colIndex === selectedCell.col) {
              return '';
            } else {
              return cell;
            }
          });
        } else if (rowIndex === selectedCell.row) {
          return rowArray.map((cell, colIndex) => {
            if (colIndex === selectedCell.col) {
              return '';
            } else {
              return cell;
            }
          });
        } else {
          return rowArray;
        }
      });
      setPlateauState(updatedPlateauState);
      setSelectedCell(null);
    } else {
      setSelectedCell({ row, col });
    }
  };

  return (
    <div className="plateau-container">
      <div className="plateau">
        {plateauState.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div
                className={`case ${selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex ? 'selected' : ''}`}
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plateau;
