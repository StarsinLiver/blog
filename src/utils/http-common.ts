import axios from 'axios';

export default axios.create({
  baseURL: "http://52.78.132.72:8000/api",
  // baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  }
});
