import useStorage from "@/hooks/useStorage";
import { post } from "./axios.api";
import { store } from "../redux/store";
import { setAuth, setToken } from "../redux/features/appSlice";

export const login = async (data: any) => {
    let requestData = {
        identifier : data.username,
        password :  data.password
    }
    const result = await post('/auth/log-in' , requestData).then( (res : any) => {
      useStorage().setItem("token",res.jwt, 'local')
      useStorage().setItem("user-data",res.data, 'local')
      store.dispatch(setAuth(true))
      store.dispatch(setToken(result.jwt))
      return  res
    })
    return result.data
};


