import axios from 'axios';
import {store} from '../redux/store';

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.API_URL, // Replace with your API base URL
});

const JWT = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Il9pZCI6IjY1NjgzNzY3NGE2MTgzNWYwZTY0OTczMiIsInVzZXJuYW1lIjoibXlpbnRteWF0dGhlaW4iLCJlbWFpbCI6Im15aW50bXlhdHRoZWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiN2I5ZmJkYmI5YTg4NjUyYTI2MjQyMjYzNjZmOGExOGNjODIzZmMyNSIsImNlcnRpZmllZCI6ZmFsc2UsImJsb2NrZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIzLTExLTMwVDA3OjE5OjAzLjIyN1oiLCJ1cGRhdGVkQXQiOm51bGwsIl9fdiI6MH0sImV4cCI6MTcwNDY1NjcwODc2NywiaWF0IjoxNzA0NjM1MTA4fQ.VZYkoahh5Uxisz5IVG_oE3bqJE8zz6dvsT-lHgnkqp-25XDpa8fs1fUQcnyc86r7jOvkT_fxXWbAu1QGSooo2n0UUWvWguW_tsZQvb4tZDF-RpOq8GudlCCj9W_GKuE5HohcTpDWhUz8l3ygSc9dvQPB09T9X0sKX7Nt1-zWUEXSRqMvQ50Oo70erYmhkT4IS5CTVYZeo2GGHze_daprjTvFTcf1x80aQ2dKmwJiFKm_Bmnrw4KSrhSYDtGaMBAFV-naYRixx73eqCwf3aPeVUAiHkWPRAcY4GVUNOGxYQ3znipSOsKAswr9_1ztcgW6jTWgUfZNfQT5tsMHRiNaTA"

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