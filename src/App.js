import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Game from './Game.js';
import Elu from './Elu.js'; // Assurez-vous d'importer correctement le composant Elu
import './App.css';
import Room from './Room';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/elu" element={<Elu />} /> {/* Route vers la page Elu */}
          <Route path="/game" element={<Game />} /> {/* Route vers la page de jeu */}
          {/* Redirection vers la page Elu si l'utilisateur accède à la racine */}
          <Route path="/" element={<Navigate to="/elu" />} />
          <Route exact path="/room" component={Room} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
