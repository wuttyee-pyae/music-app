
import { headers } from "next/headers"
import { getSelectorsByUserAgent } from "react-device-detect"
import MobileRootLayout from "./mobile/layout";
import DesktopRootLayout from "./desktop/layout";
const { isMobile } = getSelectorsByUserAgent(
  headers().get("user-agent") ?? ""
)
export default function Leading({}) {
  return (isMobile ? <MobileRootLayout children></MobileRootLayout> : <DesktopRootLayout children></DesktopRootLayout>
    // <div className="drop-shadow-xl">
    //   <div className="">
    //     <div className="pt-6">
    //       <div className="mb-4 wapper mx-4">
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
