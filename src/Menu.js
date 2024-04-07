import React, { useState } from 'react';
import './App.css';

const Menu = ({ onBlockSelect }) => {
  const [counter, setCounter] = useState(0);

  const handleBlockClick = (block) => {
    onBlockSelect(block);
  };

  const handleIncrement = () => {
    if (counter < 12) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const blocs = ['Chateau','Humain', 'Labo', 'Ecurie', 'Ferme', 'Archerie', 'Caserne', 'Cavalier', 'Archer', 'Lancier', 'catapulte'];

  return (
    <div className="menu">
      <h3>ACTION</h3>
      <div>
        {blocs.map((bloc, index) => (
          <p key={index} onClick={() => handleBlockClick(bloc)}>{bloc}</p>
        ))}
      </div>
      <div className="counter-section">
        <h4>OR :</h4>
        <div className="counter-buttons">
          <button onClick={handleDecrement}>-</button>
          <p>{counter}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
