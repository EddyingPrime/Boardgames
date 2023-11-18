import axios from "axios";
import { useStateContext } from "../authentication/ContextProvider";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      // Handle 401 error, e.g., redirect to login page
      // You can use react-router-dom for navigation
      // Example: history.push('/login');
    } else if (response.status === 404) {
      // Handle 404 error
    }

    throw error;
  }
);

export default axiosClient;
