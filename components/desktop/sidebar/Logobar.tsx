"use client";

import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { useSidebarContext } from "../../../context/SidebarContext";


const Logobar = () => {
  const {toggleSidebarcollapse} = useSidebarContext()
  return (
    <div className="flex gap-4">
      <a
        className="navbar-brand ml-4"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="relative mt-2"
          src="/mobile-logo.png"
          alt="Logo"
          width={136}
          height={30}
          priority
        />
      </a>

      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="inline-flex items-center p-2 ml-0"
        onClick={()=> toggleSidebarcollapse}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="false"
          fill="#A4A4A4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
export default Logobar;
