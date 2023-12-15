'use client'
import Desktop from "@/components/desktop/root/Desktop";
import Mobile from "@/components/mobile/root/Mobile";
import useDeviceType from "@/hooks/useDeviceType";
import useStorage from "@/hooks/useStorage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth, setToken } from "../../redux/features/appSlice";
export default function MainPage() {
  const dispatch = useDispatch();
  const isMobile = useDeviceType();
  const localStorage = useStorage()
  const checkStorage = async () => {
    const isLogin = localStorage.getItem("user-data", "local")
    const isToken = localStorage.getItem("token", "local")
    isLogin ? await dispatch(setAuth(true)) : null
    isToken ? await dispatch(setToken(isToken)) : null
  }

  useEffect( () =>  {
     checkStorage();
  })

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <Desktop />
      )}
    </>
  )
}