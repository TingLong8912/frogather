import axios from 'axios';

const API_PORT = 
  "https://frogather-backend.onrender.com/"
;

const instance = axios.create({
  baseURL: API_PORT,
});

export { instance }