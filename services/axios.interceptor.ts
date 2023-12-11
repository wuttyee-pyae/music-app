import axios from 'axios';
import {store} from '../redux/store';

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.API_URL, // Replace with your API base URL
});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  
  (config) => {
    if(store.getState().app.auth){
      if (config.headers) config.headers.Authorization = store.getState().app.token;
    }
    // Modify the request config here (add headers, authentication tokens)
    //     const accessToken = JSON.parse(localStorage.getItem("token") || '');

    // // If token is present add it to request's Authorization Header
    // if (accessToken) {
    //   if (config.headers) config.headers.token = accessToken;
    // }
    // console.log("request . use")
    console.log('what is currently in store', store.getState());
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor



// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    console.log("response use ---  " , response)
    if(response.status == 403){
      // refresh token
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