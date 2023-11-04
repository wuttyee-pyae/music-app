import React from "react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import { LanIcon } from "./icons/LanIcon";

export default function Languagexbar() {
  return (
    <Select
      label="Select an animal" 
      defaultSelectedKeys={["english"]}
      startContent={<LanIcon />}
      className="max-w-xs languagbar"
      variant="flat"
      labelPlacement="outside"
      aria-hidden="true"


    >
      <SelectItem
        key="english"
        startContent={<Avatar alt="English" className="w-6 h-6" src="https://flagcdn.com/us.svg" />}
      >
        English
      </SelectItem>
      <SelectItem
        key="myanmar"
        startContent={<Avatar alt="Myanmar" className="w-6 h-6" src="https://flagcdn.com/mm.svg" />}
      >
        Myanmar
      </SelectItem>
      <SelectItem
        key="thailand"
        startContent={<Avatar alt="Thailand" className="w-6 h-6" src="https://flagcdn.com/th.svg" />}
      >
        Thailand
      </SelectItem>
    </Select>
  );
}
