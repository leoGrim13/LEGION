import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // URL de votre serveur Spring Boot
  timeout: 5000, // Durée maximale d'attente pour une réponse
  headers: {
    'Content-Type': 'application/json', // Type de contenu des requêtes
  },
});

export default instance;
