import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.83.13:3001/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export { apiClient };
