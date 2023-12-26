import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";

import { MoreIcon } from "@/components/desktop/music/icons/MoreIcon";
export default function MoreOption() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <div>
          <MoreIcon />
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Music Actions" variant="flat">
          {/* <DropdownItem
            key="new_project"
            endContent={<PlusIcon className="text-large" />}
          >
            Add To Playlist
          </DropdownItem> */}
          <DropdownItem key="playlist">Go to PlayList</DropdownItem>
          <DropdownItem key="edit">Edit</DropdownItem>
          <DropdownItem key="delete">Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
