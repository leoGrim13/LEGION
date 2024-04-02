// Piece.js
import React from 'react';

const Piece = ({ type }) => {
  return (
    <div className="piece">
      <span>{type}</span>
    </div>
  );
};

export default Piece;
