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

import { Tooltip } from "@nextui-org/react";
import { MoreIcon } from "@/components/desktop/music/icons/MoreIcon";
import { PlusIcon } from "@/components/desktop/music/icons/PlusIcon";

export default function MoreOption() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
          >
            <MoreIcon />
          </Button>
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
