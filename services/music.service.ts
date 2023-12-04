import { GET } from "./axios.api";


export const getAllGenres = async (url: string) => {
    try {
      let response ;
      await GET(url).then(async(res)=>{
         // Handle the response data here
      console.log( "musuc service --- " , res);
      response = await res
      })
      
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };
