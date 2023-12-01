import { GET } from "./axios.api";


export const getAllGenres = async (url: string) => {
    try {
      await GET(url).then((res)=>{
         // Handle the response data here
      console.log(res);
      return res
      })
     
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };
