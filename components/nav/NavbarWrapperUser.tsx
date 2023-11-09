import { Input, Link, Navbar, NavbarContent, Button } from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { UserDropdown } from "./UserDropdown";
import Languagexbar from "./Languagexbar";

interface Props {
  children?: React.ReactNode;
}

export const NavbarWrapperUser = ({ children }: Props) => {
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
          className="w-full"
        >
          <div className="flex w-full items-center gap-2 justify-end">
            <Link href="/" color="foreground" className="ml-3 hover:font-bold">
              Premium
            </Link>
            <div className="mx-3 text-white">|</div>
            <Link href="/" color="foreground" className="mr-3 hover:font-bold">
              Sing Up
            </Link>
            <Button color="default" size="lg" radius="full" className="ml-3 bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg">Login In</Button>
          </div>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
