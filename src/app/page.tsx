import { headers } from "next/headers";
import { getSelectorsByUserAgent } from "react-device-detect";
import DesktopRootLayout from "./desktop/layout";
import MobileRootLayout from "./mobile/layout";
import { ReactNode } from "react";
import Mobile from "./mobile/page";
import Desktop from "./desktop/page";

const { isMobile } = getSelectorsByUserAgent(headers().get("user-agent") ?? "");


export default function mainPage ()  {
  return  isMobile ? (
      <Mobile/>
    ) : (
      <Desktop/>
    )
  
  // isMobile ? (
  //   <MobileRootLayout>{children}</MobileRootLayout>
  // ) : (
  //   <DesktopRootLayout>{children}</DesktopRootLayout>
  // );
}