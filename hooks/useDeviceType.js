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
        const  windowsize  = window.innerWidth;
        // console.log(" ---  size  -- " , windowsize)
        if (windowsize <= 768) {
            setDeviceType(DeviceType.Mobile);
        } else {
          setDeviceType(DeviceType.Desktop);
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return deviceType;
  };
  
  export default useDeviceType ;
  