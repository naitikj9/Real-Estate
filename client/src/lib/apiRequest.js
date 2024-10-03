import axios from "axios";

const apiRequest = axios.create({
  baseURL: "real-estate-1-h6b2.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
