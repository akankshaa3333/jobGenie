import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-api.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;