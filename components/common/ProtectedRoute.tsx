"use client"
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect } from "react"
import Login from "../../src/app/login/page"
import { useSelector } from "react-redux";
import useStorage from "@/hooks/useStorage";

const ProtectedRoutes = ({ children } : { children : React.ReactNode}) => {
    const { auth } = useSelector((state : any) => state.app);
    const localStorage = useStorage()
    const isLogin = localStorage.getItem("user-data", "local") || null
    const router = useRouter()

    useEffect(() => {
        console.log(" --- " , auth , isLogin)
        if (!isLogin) {
            router.push("/")
        }
    }, [router,auth])

    if(!isLogin) {
        return (
            <div>
                 <Login />
            </div>
               
        
        )
    }

    return children
}

export default ProtectedRoutes