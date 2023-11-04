import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "./icons/searchicon";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import  Languagexbar from "./Languagexbar";

interface Props {
  children?: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
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
          <div className="flex w-full items-center gap-2 justify-end data-[justify=end]:flex-grow-1">
            <Languagexbar />
          </div>
          <NotificationsDropdown />

          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};