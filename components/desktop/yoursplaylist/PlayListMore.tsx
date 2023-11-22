"use client";
import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";

import { Tooltip } from "@nextui-org/react";
import { ReportIcon } from "@/components/desktop/icons/ReportIcon";
import { MoreIcon } from "../music/icons/MoreIcon";
import { PlusIcon } from "./icons/PlusIcon";

export default function PlayListMore() {

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
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
          <DropdownItem
            key="library"
            startContent={<PlusIcon className="text-large" />}
          >
            Add yor Library
          </DropdownItem>
          <DropdownItem key="share_embed">Share Embed</DropdownItem>
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
