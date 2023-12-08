import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const UserDropdown = () => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as="button"
            color="secondary"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        // onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <Link href="/login">
            <p>Signed in as <br/> zoey@example.com</p>
          </Link>
        </DropdownItem>

        {/* Just only show in resgistered user for Request Artist Dashboard */}
        <DropdownItem
          key="request_arist_dashboard"
          color="secondary"
          className="flex flex-col justify-start w-full items-start"
        >
          <Link href="/request_form">
            <p>Request as < br/> Artist Dashboard</p>
          </Link>
        </DropdownItem>
        <DropdownItem
          key="arist_dashboard"
          color="secondary"
          className="flex flex-col justify-start w-full items-start"
        >
          <Link href="/dashboard">
            <p>Swich to <br/> Artist Dashboard</p>
          </Link>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger" className="text-danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
