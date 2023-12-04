'use client'
import Desktop from "@/components/desktop/root/Desktop";
import Mobile from "@/components/mobile/root/Mobile";
import useDeviceType from "@/hooks/useDeviceType";

export default function MainPage ()  {
  const  isMobile =  useDeviceType();
  return  isMobile ? (
      <Mobile/>
    ) : (
      <Desktop/>
    )
}