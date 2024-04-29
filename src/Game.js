import React, { useState } from 'react';
import Plateau from './Plateau';
import Menu from './Menu';
import './App.css';

const Game = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [menuType, setMenuType] = useState('');

  const handleBlockSelect = (block, type) => {
    setSelectedBlock(block);
    setMenuType(type);
  };

  return (
    <div className="app">
      <div className="menu-gauche">
        <Menu onBlockSelect={(block) => handleBlockSelect(block, 'gauche')} />
      </div>
      <div className="plateau">
        <Plateau
          selectedBlock={selectedBlock}
          menuType={menuType}
        />
      </div>
      <div className="menu-droite">
        <Menu onBlockSelect={(block) => handleBlockSelect(block, 'droite')} />
      </div>
    </div>
  );
};

export default Game;
