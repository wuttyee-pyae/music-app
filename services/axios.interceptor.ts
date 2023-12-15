import axios from 'axios';
import {store} from '../redux/store';

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.API_URL, // Replace with your API base URL
});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  
  (config) => {
    if(store.getState().app.auth){
      if (config.headers) config.headers.Authorization = `Bearer ${store.getState().app.token}` ;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }

  // console.log("header -- " , )
);
// End of Request interceptor



// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    // console.log("response use ---  " , response)
    if(response.status == 403 && store.getState().app.token){
      // refresh token
      console.log("refresh token")
    }
    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default axiosInterceptorInstance;