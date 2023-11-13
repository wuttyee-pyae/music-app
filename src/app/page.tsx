
import { headers } from "next/headers"
import { getSelectorsByUserAgent } from "react-device-detect"
import DesktopRootLayout from "./desktop/layout";
import CadPlayList from "@/components/yoursplaylist/CadPlayList";
import Link from "next/link";
import MobileRootLayout from "./mobile/layout";
const { isMobile } = getSelectorsByUserAgent(
  headers().get("user-agent") ?? ""
)
export default function Leading({}) {
  console.log("iHeader  " , headers)
  return (
    isMobile ? <MobileRootLayout children></MobileRootLayout> : <DesktopRootLayout children></DesktopRootLayout>
    // isMobile ? <Mobile></Mobile> : <Desktop></Desktop>
    // <div className="drop-shadow-xl">
    //   <div className="">
    //     <div className="pt-6">
    //       <div className="mb-4 wapper mx-4">

    //       <main className="layout__main-content">
    //                   {isMobile ? Mobile : Desktop}
    //                     </main>
    //         <Link
    //           href="/"
    //           color="foreground"
    //           className="text-xl hover:font-bold hover:underline mb-6"
    //         >
    //           Yours PlayList
    //         </Link>
    //         <div className="grid grid-cols-3 gap-4 xl:grid-cols-6 md:grid-cols-5">
    //           <CadPlayList />
    //           <CadPlayList />
    //           <CadPlayList />
    //           <CadPlayList />
    //           <CadPlayList />
    //           <CadPlayList />
    //         </div>


    //       </div>
    //     </div>

    //   </div>
    // </div>  
  );
}
