import axios from 'axios';

// Je lance la méthode download_csv pour télécharger le csv avec sidekiq et redis
axios.get('/memory/download_csv');
