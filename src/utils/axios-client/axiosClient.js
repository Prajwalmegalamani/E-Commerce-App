import axios from "axios";

// Axios Client: New Axios Instance Config
const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

export default AxiosClient;
