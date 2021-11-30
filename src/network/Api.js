import axios from "axios";
import { store } from "redux/index";

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
      "Content-Type": "application/json",
    };
  }
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  const data = response.data;
  return data;
});

export default axiosInstance;
