import React from "react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import { LanIcon } from "./icons/LanIcon";

export default function Languagexbar() {
  return (
    <Select
      label=" " 
      defaultSelectedKeys={["english"]}
      startContent={<LanIcon />}
      className="max-w-xs languagbar text-white"
      variant="flat"
      labelPlacement="outside"
      aria-hidden="true"
    >
      <SelectItem
      className="text-white"
        key="english"
        startContent={<Avatar alt="English" className="w-6 h-6 text-whit" src="https://flagcdn.com/us.svg" />}
      >
        English
      </SelectItem>
      <SelectItem
      className="text-white"
        key="myanmar"
        startContent={<Avatar alt="Myanmar" className="w-6 h-6 text-whit" src="https://flagcdn.com/mm.svg" />}
      >
        Myanmar
      </SelectItem>
      <SelectItem
      className="text-white"
        key="thailand"
        startContent={<Avatar alt="Thailand" className="w-6 h-6 text-whit" src="https://flagcdn.com/th.svg" />}
      >
        Thailand
      </SelectItem>
    </Select>
  );
}
