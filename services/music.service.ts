import { GET } from "./axios.api";


export const getAllGenres = async () => {
      const result = await GET('/genres').then( (res : any) => {
        console.log(" genre  --- "  , res )
        return  res
      })
      return result.data
  };

  export const getAllMoods = async () => {
    const result = await GET('/moods').then( (res : any) => {
      console.log(" mood --- "  , res )
      return  res
    })
    return result.data
};
