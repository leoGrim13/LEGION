import React, { useState } from 'react';
import './App.css';

const Menu = ({ onBlockSelect }) => {
  const [counterOr, setCounterOr] = useState(0);
  const [counterFerme, setCounterFerme] = useState(0);

  const handleBlockClick = (block) => {
    onBlockSelect(block);
  };

  const handleIncrementOr = () => {
    if (counterOr < 12) {
      setCounterOr(counterOr + 1);
    }
  };

  const handleDecrementOr = () => {
    if (counterOr > 0) {
      setCounterOr(counterOr - 1);
    }
  };

  const handleIncrementFerme = () => {
    if (counterFerme < 6) {
      setCounterFerme(counterFerme + 1);
    }
  };

  const handleDecrementFerme = () => {
    if (counterFerme > 0) {
      setCounterFerme(counterFerme - 1);
    }
  };

  const blocs = ['CHATEAU','Humain', 'Ferme(1)', 'Ecurie(2)', 'Archerie(2)', 'Caserne(2)', 'Cavalier', 'Archer', 'Lancier', 'catapulte(4)','Labo(6)'];

  return (
    <div className="menu">
      <h3>ACTION</h3>
      <div>
        {blocs.map((bloc, index) => (
          <p key={index} onClick={() => handleBlockClick(bloc)}>{bloc}</p>
        ))}
      </div>
      <div className="counter-section">
        <h4>OR</h4>
        <div className="counter-buttons">
          <button onClick={handleDecrementOr}>-</button>
          <p>{counterOr}</p>
          <button onClick={handleIncrementOr}>+</button>
        </div>
      </div>
      <div className="counter-section">
        <h4>FERME/max6/</h4>
        <div className="counter-buttons">
          <button onClick={handleDecrementFerme}>-</button>
          <p>{counterFerme}</p>
          <button onClick={handleIncrementFerme}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
