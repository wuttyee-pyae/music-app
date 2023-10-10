import clsx from "clsx";
import React from "react";
import Sidebar from "./Sidebar";
import UserSidebar from "./UserSidebar";

export default function Asidebar({ ...props  }) {
  return (
    <div className="">
      <aside
        id="sidebar-multi-level-sidebar"
        className=""
        aria-label="Sidebar"
      >
        <Sidebar />
        <UserSidebar />
      </aside>
    </div>
  );
}
