import React from "react";
import Image from 'next/image'



function Layout(props: any) {
  return (
    <div className="page-layout">


      {props.children}
      
    </div>
  );
}
 
export default Layout;
