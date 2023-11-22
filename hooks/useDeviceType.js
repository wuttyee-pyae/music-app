'use client'
import { useEffect , useState } from "react";

const DeviceType = {
    Mobile: 'mobile',
    Tablet: 'tablet',
    Desktop: 'desktop',
  };
  
  const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState(DeviceType.Desktop);
    
    useEffect(() => {
      const handleResize = () => {
        const { userAgent } = window.navigator;
  
        if (/Mobi/.test(userAgent)) {
          if (/Tablet|iPad/.test(userAgent)) {
            setDeviceType(DeviceType.Tablet);
          } else {
            setDeviceType(DeviceType.Mobile);
          }
        } else {
          setDeviceType(DeviceType.Desktop);
        }
      };
  
      // handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return deviceType;
  };
  
  export default useDeviceType ;
  