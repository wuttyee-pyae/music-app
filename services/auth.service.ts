import { post } from "./axios.api";

export const login = async (data: any) => {
    let requestData = {
        identifier : data.username,
        password :  data.password
    }
    const result = await post('/auth/log-in' , requestData).then( (res : any) => {
      console.log(" login  --- "  , res )
      return  res
    })
    return result.data
};