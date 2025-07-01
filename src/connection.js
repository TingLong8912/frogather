import axios from 'axios';

const API_PORT = 
  (process.env.NODE_ENV === "production") ? 
  "/" 
  : "https://frogather-backend.onrender.com/"
;

const instance = axios.create({
  baseURL: API_PORT,
});

export { instance }