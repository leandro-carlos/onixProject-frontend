import axios from 'axios';

export const baseUrl = 'https://onixapp-backend.herokuapp.com/'; // ambiente de produção

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
