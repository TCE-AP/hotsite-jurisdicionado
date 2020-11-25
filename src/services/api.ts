import axios from 'axios';

const headers = {
  'Content-type': 'multipart/form-data',
  Accept: 'application/json',
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers,
});

export default api;
