'use client'
import { useEffect , useState } from "react";
  const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState(false);
    let isMobile;
    useEffect(() => {
      const handleResize = () => {
        isMobile = window.innerWidth < 768 ? true : false
        setDeviceType(isMobile)
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return deviceType;
  };
  
  export default useDeviceType ;
  