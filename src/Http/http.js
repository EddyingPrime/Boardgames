import axios from "axios";

function http(options = {}) {
  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  return api;
}

export default http;
