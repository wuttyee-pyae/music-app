import axiosInterceptorInstance from './axios.interceptor';


  export const get = async (url: string , id?:any) => {
    try {
      const query_param = (id != undefined)? '/' +id : ''
      const response = await axiosInterceptorInstance.get(`${process.env.NEXT_PUBLIC_API_URL}${url}${query_param}` ); 

      // Handle the response data here
      // console.log(" axio api --- " , response);
      return response.data
    } catch (error) {
      // Handle the error here
      return Promise.reject(error);
    }
  };


  export const post = async (url: string ,requestData : any ) => {
    try {
      const response = await axiosInterceptorInstance.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestData);
      return response.data
    } catch (error) {
      // Handle the error here
      return Promise.reject(error);
    }
  };

  export const put = async (url: string ,requestData : any ) => {
    try {
      const response = await axiosInterceptorInstance.put(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestData);

      // Handle the response data here
      // console.log(response.data);
    } catch (error) {
      // Handle the error here
      return Promise.reject(error);
    }
  };

  export const deleted = async (url: string ,id : any ) => {
    try {
      const response = await axiosInterceptorInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}${url}${id}`);

      // Handle the response data here
      // console.log(response.data);
    } catch (error) {
      // Handle the error here
      return Promise.reject(error);
    }
  };