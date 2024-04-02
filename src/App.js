import React, { useState } from 'react';
import Plateau from './Plateau';
import Menu from './Menu';
import './App.css';

const App = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [plateauState, setPlateauState] = useState(Array(12).fill(Array(12).fill('')));
  const [selectedCell, setSelectedCell] = useState(null);

  const handleBlockSelect = (block) => {
    setSelectedBlock(block);
  };

  const handleCellClick = (row, col) => {
    // Vérifier s'il y a un bloc sélectionné et s'il y a déjà un bloc sur la case
    if (selectedBlock && !plateauState[row][col]) {
      // Placer le bloc sélectionné sur la case
      const updatedPlateauState = [...plateauState];
      updatedPlateauState[row][col] = selectedBlock;
      setPlateauState(updatedPlateauState);
      setSelectedCell({ row, col });
    } else if (selectedCell && plateauState[row][col]) {
      // Vérifier si la case cliquée contient un bloc et si elle correspond à la case sélectionnée
      if (selectedCell.row === row && selectedCell.col === col) {
        // Si oui, déselectionner la case en laissant la case vide
        const updatedPlateauState = [...plateauState];
        updatedPlateauState[row][col] = '';
        setPlateauState(updatedPlateauState);
        setSelectedCell(null);
      } else {
        // Si non, déplacer le bloc sélectionné vers la nouvelle case
        const updatedPlateauState = [...plateauState];
        updatedPlateauState[selectedCell.row][selectedCell.col] = '';
        updatedPlateauState[row][col] = selectedBlock;
        setPlateauState(updatedPlateauState);
        setSelectedCell({ row, col });
      }
    }
  };

  return (
    <div className="app">
      <div className="menu-gauche">
        <Menu onBlockSelect={handleBlockSelect} />
      </div>
      <div className="plateau">
        <Plateau
          onCellClick={handleCellClick}
          selectedBlock={selectedBlock}
          selectedCell={selectedCell}
          plateauState={plateauState}
        />
      </div>
      <div className="menu-droite">
        <Menu onBlockSelect={handleBlockSelect} />
      </div>
    </div>
  );
};

export default App;
