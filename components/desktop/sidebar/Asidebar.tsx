"use client";

import clsx from "clsx";
import React from "react";
import Sidebar from "./Sidebar";
import UserSidebar from "./UserSidebar";
import Logobar from "./Logobar";
import { useSidebarContext } from "../../../context/SidebarContext";

import { useState, useEffect } from 'react';

const Asidebar = ({collapsed}:{collapsed : boolean}) => {
  const [isCollapsed , setIsCollapsed] = React.useState(true)
  useEffect(() => {
    setIsCollapsed(collapsed)
  },[collapsed])
  return (
    <div  className={clsx("sidebar-dark left-bar transition-transform " ,isCollapsed ? "w-64" :"w-0 -z-10")}>
      <div className="sidebar__wrapper w-48 fixed">
      <aside
        id="sidebar-multi-level-sidebar"
        aria-label="Sidebar"  >
        <Sidebar />    
        <UserSidebar />
      </aside>
    </div>
    </div>
  );
};
export default Asidebar;
