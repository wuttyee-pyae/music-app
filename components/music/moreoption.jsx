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

import { MoreIcon } from "./icons/MoreIcon";
import { Tooltip } from "@nextui-org/react";
import { PlusIcon } from "./icons/PlusIcon.jsx";

export default function MoreOption(props, ref) {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger passHref>
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
          <DropdownItem
            key="new_project"
            endContent={<PlusIcon className="text-large" />}
          >
            Add To Playlist
          </DropdownItem>
          <DropdownItem key="go_to_album">Go to alblum</DropdownItem>
          <DropdownItem key="go_to_artist">Go to artist</DropdownItem>
          <DropdownItem key="shhare_embed">Share Embed</DropdownItem>
          <DropdownItem key="copy_link">Copy Lik</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
