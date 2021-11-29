import axios from "axios";
import { store } from "Redux/index";

const axiosInstance = axios.create({
  baseURL: "https://reactlabapi.herokuapp.com/api/",
});

axiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.token;
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
      "Content-Type": "application/json"
    };
  }
  return config;
});

export default axiosInstance;
