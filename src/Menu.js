import React from 'react';

const Menu = ({ onBlockSelect }) => {
  const handleBlockClick = (block) => {
    onBlockSelect(block);
  };

  const blocs = ['Chateau', 'Labo', 'Ecurie', 'Ferme', 'Archerie', 'Caserne', 'Cavalier', 'Archer', 'Lancier', 'catapulte'];

  return (
    <div className="menu">
      <h3>ACTION</h3>
      <div>
        {blocs.map((bloc, index) => (
          <p key={index} onClick={() => handleBlockClick(bloc)}>{bloc}</p>
        ))}
      </div>
    </div>
  );
};

export default Menu;
