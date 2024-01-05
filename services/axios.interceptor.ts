import axios from 'axios';
import {store} from '../redux/store';

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.API_URL, // Replace with your API base URL
});

const JWT = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Il9pZCI6IjY1NjgzNzY3NGE2MTgzNWYwZTY0OTczMiIsInVzZXJuYW1lIjoibXlpbnRteWF0dGhlaW4iLCJlbWFpbCI6Im15aW50bXlhdHRoZWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiN2I5ZmJkYmI5YTg4NjUyYTI2MjQyMjYzNjZmOGExOGNjODIzZmMyNSIsImNlcnRpZmllZCI6ZmFsc2UsImJsb2NrZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIzLTExLTMwVDA3OjE5OjAzLjIyN1oiLCJ1cGRhdGVkQXQiOm51bGwsIl9fdiI6MH0sImV4cCI6MTcwNDQ1NDY2ODEwMSwiaWF0IjoxNzA0NDMzMDY4fQ.Egem265Vz7MDGiF4HxrgOlRTx0qLNFSORQ09Jb5vm6KspZZwcF8c8GYPD47UBA-lGe-_qeRN0J1W40wundbTNB2d9EZIt1xbQDmkS-jUTf8QdLUWSDZsOIliWPHdza1aVUUXPRZzNPQ9WYsYPBv84EbZ4J9413__0Q-QiLC5RKhJGOJSmOID0pThftyDa5FI0Q1j1moQhY1cQRfcdz1xvKZ9jlVCK45F1FnTYfkk0ys4WehEpp6PPD5Ue2I_J_shxqpsg_BabHPxqmWfYH95iASpEbwfdn8EvtCNDOERbPhdWZboElaLxYuSE0KaOsPni3-JKKdd7Hje4JegDjLFAg"

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  
  (config) => {
    console.log( store.getState().app.auth)
    // if(store.getState().app.auth){
      if (config.headers) config.headers.Authorization = `Bearer ${JWT}`;
      // ${store.getState().app.token}` ;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
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