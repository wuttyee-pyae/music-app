"use client";

import clsx from "clsx";
import React from "react";
import Sidebar from "./Sidebar";
import UserSidebar from "./UserSidebar";
import Logobar from "./Logobar";
import Image from "next/image";
import { useSidebarContext } from "../../context/SidebarContext";
import { useEffect,useState } from "react";

const Asidebar = () => {
  const {isCollapsed,toggleSidebarcollapse} = useSidebarContext()


  useEffect(() => {
    if(window.innerWidth < 1024){
      toggleSidebarcollapse()
      console.log('asdasdas')
    }
  },[])

 


  return (
    <div  className={clsx("sidebar sidebar-dark left-bar left-0 z-30 w-64 transition-transform md:transition-translate-x-full lg:translate-x-0",isCollapsed ? 'hidden' :"block")}>
      <div className={` sidebar__wrapper overflow-y-auto`}>
      <aside
        id="sidebar-multi-level-sidebar"
        className=""
        aria-label="Sidebar"  
      >
        
        <Sidebar />    

        <UserSidebar />
      </aside>
    </div>
    </div>
    
  );
};
export default Asidebar;
