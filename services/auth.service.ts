import useStorage from "@/hooks/useStorage";
import { post } from "./axios.api";

export const login = async (data: any) => {
    let requestData = {
        identifier : data.username,
        password :  data.password
    }
    const result = await post('/auth/log-in' , requestData , true).then( async (res : any) => {    
      console.log("--- " , res.data.updatedAt)
      useStorage().setItem("token",res.jwt, 'local')
      await useStorage().setItem("user-data",res.data, 'local')
      return  res
    })
    return result
};


