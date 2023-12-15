import { get } from "./axios.api";


export const getAllArtists = async (url: string) => {
    try {
      const response = await get(url).then((res : {})=>{
         // Handle the response data here
      console.log(res);
      })

     
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };
