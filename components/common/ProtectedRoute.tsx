"use client"
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect } from "react"
import Login from "../../src/app/login/page"
import { useSelector } from "react-redux";
import Dashboard from "../../src/app/(professional)/dashboard/page";

const ProtectedRoutes = ({ children } : { children : React.ReactNode}) => {
    const { auth } = useSelector((state : any) => state.app);
    const router = useRouter()

    useEffect(() => {
        console.log(" --- " , auth)
        if (auth) {
            router.push("/dashboard")
        }
    }, [router,auth])

    if(!auth) {
        return (
            <div>
                 <Login />
            </div>
               
        
        )
    }

    return children
}

export default ProtectedRoutes