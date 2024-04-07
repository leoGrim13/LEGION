import React, { useState } from 'react';
import './Plateau.css';

const Plateau = ({ selectedBlock, menuType }) => {
  const [plateauState, setPlateauState] = useState(Array(12).fill(Array(12).fill('')));
  const [selectedCell, setSelectedCell] = useState(null);
  const [blockColors, setBlockColors] = useState({});

  const handleCellClick = (row, col) => {
    if (selectedCell) {
      // Si une case est déjà sélectionnée
      if (row === selectedCell.row && col === selectedCell.col) {
        // Double-clic sur la même case : placer le pion et la couleur
        const blockColorsCopy = { ...blockColors };
        blockColorsCopy[`${row}-${col}`] = menuType === 'gauche' ? 'rouge' : 'vert';
        setBlockColors(blockColorsCopy);
        
        const updatedPlateauState = plateauState.map((rowArray, rowIndex) => {
          if (rowIndex === row) {
            return rowArray.map((cell, colIndex) => {
              if (colIndex === col) {
                return selectedBlock;
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
        // Déplacement du pion et de la couleur
        const prevRow = selectedCell.row;
        const prevCol = selectedCell.col;
        const blockColorsCopy = { ...blockColors };
        const prevColor = blockColorsCopy[`${prevRow}-${prevCol}`];
        const prevText = plateauState[prevRow][prevCol];
        delete blockColorsCopy[`${prevRow}-${prevCol}`];
        blockColorsCopy[`${row}-${col}`] = prevColor;
        setBlockColors(blockColorsCopy);
        
        const updatedPlateauState = plateauState.map((rowArray, rowIndex) => {
          if (rowIndex === row) {
            return rowArray.map((cell, colIndex) => {
              if (colIndex === col) {
                return selectedBlock;
              } else if (colIndex === prevCol && rowIndex === prevRow) {
                return ''; // Supprimer le pion précédemment sélectionné
              } else {
                return cell;
              }
            });
          } else if (rowIndex === prevRow) {
            return rowArray.map((cell, colIndex) => {
              if (colIndex === prevCol) {
                return ''; // Supprimer le pion précédemment sélectionné
              } else {
                return cell;
              }
            });
          } else {
            return rowArray;
          }
        });
        updatedPlateauState[row][col] = prevText;
        setPlateauState(updatedPlateauState);
        setSelectedCell(null);
      }
    } else {
      // Si aucune case n'est sélectionnée, sélectionner la case actuelle
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
                className={`case ${selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex ? 'selected' : ''} ${blockColors[`${rowIndex}-${colIndex}`]}`}
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
