import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.npoint.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
