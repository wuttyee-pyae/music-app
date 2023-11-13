
import { headers } from "next/headers"
import { getSelectorsByUserAgent } from "react-device-detect"
import DesktopRootLayout from "./desktop/layout";
import MobileRootLayout from "./mobile/layout";
const { isMobile } = getSelectorsByUserAgent(
  headers().get("user-agent") ?? ""
)
export default function Leading({}) {
  return (
    isMobile ? <MobileRootLayout children></MobileRootLayout> : <DesktopRootLayout children></DesktopRootLayout>
  );
}
