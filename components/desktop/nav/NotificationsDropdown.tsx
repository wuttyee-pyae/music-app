import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
    NavbarItem,
  } from "@nextui-org/react";
  import React from "react";
  import { NotificationIcon } from "./icons/NotificationIcon";
  
  export const NotificationsDropdown = () => {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <NavbarItem>
            <NotificationIcon />
          </NavbarItem>
        </DropdownTrigger>
        <DropdownMenu className="w-80" aria-label="Avatar Actions">
          <DropdownSection title="Notificacions">
            <DropdownItem
              classNames={{
                base: "py-2",
                title: "text-base font-semibold",
              }}
              key="1"
              description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
            >
              <h4 className="text-white">📣 Edit your information</h4>
            </DropdownItem>
            <DropdownItem
              key="2"
              classNames={{
                base: "py-2",
                title: "text-base font-semibold",
              }}
              description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
            >
              <h4 className="text-white">🚀 Say goodbye to paper receipts!</h4>
            </DropdownItem>
            <DropdownItem
              key="3"
              classNames={{
                base: "py-2",
                title: "text-base font-semibold",
              }}
              description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
            >
              <h4 className="text-white">📣 Edit your information</h4>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    );
  };
  