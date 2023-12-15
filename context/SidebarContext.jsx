'use client'

import { createContext, useContext, useState } from "react";

const initialValue = { isCollapsed: false , toggleSidebarcollapse: {} };

const SidebarContext = createContext(initialValue);

const SidebarProvider = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    console.log("click toggle Side bar collapse ")
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse ,setCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext)

export default SidebarProvider;