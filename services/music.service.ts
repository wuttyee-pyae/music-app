import { GET } from "./axios.api";


export const getAllGenres = async () => {
      const result = await GET('/genres').then( (res : any) => {
        console.log(" genre  --- "  , res )
        return  res
      })
      return result.data
  };
