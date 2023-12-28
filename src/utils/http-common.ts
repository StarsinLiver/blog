import axios from 'axios';

export default axios.create({
  baseURL: "http://15.165.77.140:8000/api",
  // baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  }
});
