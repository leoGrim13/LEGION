import React, { useState } from 'react';

import axios from './axios';

const Elu = () => {
  const [nom, setNom] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/elu/connexion', { nom });
      console.log('Response:', response.data); // Afficher la réponse du serveur dans la console
      if (response.status === 200) {
        console.log('Connexion réussie'); // Afficher un message de succès dans la console
        window.location.href = '/room'; // Rediriger vers la page "room"
      } else {
        setError('Connexion échouée');
      }
    } catch (error) {
      console.error('Erreur:', error); // Afficher l'erreur dans la console
      setError('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };
  

  return (
    <div className="elu">
      <h2>Connexion</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label>
        <button type="submit">Entrer</button>
      </form>
    </div>
  );
};

export default Elu;
