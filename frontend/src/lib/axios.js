import axios from 'axios';
import { useRateLimitStore } from '../store/useRateLimitStore';

const instance = axios.create({
  //baseURL: 'http://localhost:5001/api',
   baseURL:  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",



  withCredentials: true, // needed for cookie-based auth
});

// Optional: Include token if using JWT in headers
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token'); // or Zustand-based user store
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// ✅ Handle 429 globally with interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      const { setRateLimited } = useRateLimitStore.getState();
      setRateLimited(true);
    }

    return Promise.reject(error); // forward the error for local handling too
  }
);

export default instance;

///////
// import axios from "axios";

// // in production, there's no localhost so we have to make this dynamic
// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// const api = axios.create({
//   baseURL: BASE_URL,
// });

// export default api;