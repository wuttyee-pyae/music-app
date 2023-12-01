import { GET } from "./axios.api";


export const getAllArtists = async (url: string) => {
    try {
      const response = await GET('/artist').then((res)=>{
         // Handle the response data here
      console.log(res);
      })

     
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };
