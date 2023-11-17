import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { NotificationsDropdown } from "./NotificationsDropdown";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-hidden items-center justify-center">
      <Navbar
        className="w-full bg-gray"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <div>
          <a
            className="navbar-brand"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="relative rounded-lg"
              src="/mobile-logo.png"
              alt="Logo"
              width={136}
              height={30}
              priority
            />
          </a>
        </div>

        <NavbarContent className="w-full">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-full data-[justify=end]:flex-grow-1"
        >
          <NotificationsDropdown />
        </NavbarContent>
      </Navbar>
      {/* {children} */}
    </div>
  );
};
