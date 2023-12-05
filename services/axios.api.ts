import axiosInterceptorInstance from './axios.interceptor';


  export const GET = async (url: string) => {
    try {
      const response = await axiosInterceptorInstance.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`); 

      // Handle the response data here
      console.log(" axio api --- " , response);
      // response.status == 403
      return response.data
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  export const GET_ID = async (url: string ,id : number ) => {
    try {
      const response = await axiosInterceptorInstance.get(`${process.env.API_URL}${url}${id}`);

      // Handle the response data here
      console.log(response.data);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };