import { get } from "./axios.api";


export const getAllGenres = async () => {
      const result = await get('/genres').then( (res : any) => {
        // console.log(" genre  --- "  , res )
        return  res
      })
      return result.data
  };

  export const getAllMoods = async () => {
    const result = await get('/moods').then( (res : any) => {
      console.log(" mood --- "  , res )
      return  res
    })
    return result.data
};
