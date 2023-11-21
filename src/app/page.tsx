import { headers } from "next/headers";
import { getSelectorsByUserAgent } from "react-device-detect";
import DesktopRootLayout from "./desktop/layout";
import MobileRootLayout from "./mobile/layout";
const { isMobile } = getSelectorsByUserAgent(headers().get("user-agent") ?? "");
export default function Leading({ 
  children,
}: {
  children: React.ReactNode;
}) {
  return isMobile ? (
    <MobileRootLayout>{children}</MobileRootLayout>
  ) : (
    <DesktopRootLayout>{children}</DesktopRootLayout>
  );
}
