import React from 'react';
import { Link } from 'react-router-dom';

const Room = () => {
  return (
    <div className="room">
      <h1>ROOM PLACE</h1>
      <p>Cliquez sur <Link to="/game">Room 1</Link></p>
    </div>
  );
};

export default Room;
