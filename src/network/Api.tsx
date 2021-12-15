import axios from "axios";
import { getToken } from "./tokenService";

const axiosInstance = axios.create({
  baseURL: "https://reactlabapi.herokuapp.com/api/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
      "Content-Type": "application/json",
    };
  }
  return config;
});

export default axiosInstance;
