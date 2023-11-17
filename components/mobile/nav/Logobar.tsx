"use client";

import clsx from "clsx";
import React from "react";
import Image from "next/image";

const Logobar = () => {
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
    </div>
  );
};
export default Logobar;
