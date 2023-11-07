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

import { MoreIcon } from "../music/icons/MoreIcon";
import { Tooltip } from "@nextui-org/react";
import { ReportIcon } from "@/components/icons/ReportIcon";

export default function ArtistsMoreIcon() {
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
          
          <DropdownItem key="go_to_artist">Go to artist website</DropdownItem>
          <DropdownItem key="shhare_embed">Share Embed</DropdownItem>
          <DropdownItem key="copy_link">Copy Lik</DropdownItem>
          <DropdownItem
            key="new_project"
            endContent={<ReportIcon className="text-large" />}
          >
            Report
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
