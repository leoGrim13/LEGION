import React from 'react';
import './Plateau.css';

const OR = ({ tourCount, onTourEnd }) => {
  return (
    <div className="or-container">
      <button onClick={onTourEnd}>Fin de tour</button>
      <div className="tour-counter">Tour : {tourCount}</div>
    </div>
  );
};

export default OR;
