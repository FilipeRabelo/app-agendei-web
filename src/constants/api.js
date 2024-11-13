// npm install axios

import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.0.6:3001"
  baseURL: "http://localhost:3001"
});

export default api;