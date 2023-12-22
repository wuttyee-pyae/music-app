import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { SearchIcon } from "@/components/mobile/nav/icons/SearchIcon";
import { NotificationsDropdown } from "@/components/mobile/nav/NotificationsDropdown";
import { UserDropdown } from "@/components/desktop/nav/UserDropdown";
import { UserIcon } from "@/components/mobile/nav/icons/UserIcon";
import DrawerMenu from "./DrawerMenu";

interface Props {
  children?: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div
      className={`relative flex flex-col flex-1 items-center justify-center`}
    >
      <Navbar
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full item-center p-0",
        }}
      >
        <div className="flex items-center m-2">
          <div>
            <DrawerMenu />
          </div>
          {/* <div>
            <a
              className="navbar-brand ml-4"
              href="/home"
              target="_self"
              rel="noopener noreferrer"
            >
              <Image
                className="relative"
                src="/mobile-logo.png"
                alt="Logo"
                width={136}
                height={30}
                priority
              />
            </a>
          </div> */}
        </div>
        <div className="w-full justify-center">
          <p className="text-white text-center">Aritst Name</p>
        </div>
        <NavbarContent
          justify="end"
          className="w-full data-[justify=end]:flex-grow-1"
        >
          <SearchIcon />
          <NotificationsDropdown />
          <UserDropdown />
        </NavbarContent>
      </Navbar>
      {/* {children} */}
    </div>
  );
};
