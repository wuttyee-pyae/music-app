import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

import { genders } from "./genderdata";
import { GenderIcon } from "./GenderIcon";

export default function Gender() {
  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="w-full mt-4">
      <p className="text-small text-default-600">Gender: {value}</p>
      <Select
        startContent={<GenderIcon />}
        aria-hidden="true"
        tabIndex={0}
        aria-labelledby="gender"
        placeholder="Select gender"
        variant="bordered"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={(e : any) => setValue(e.target.value)}
        defaultSelectedKeys={["other"]}
        id="gender"
        aria-checked="false"
  
      >
        {genders.map((gender) => (
          <SelectItem
            key={gender.value}
            value={gender.value}
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
            aria-labelledby="gender"
          >
            {gender.label}
          </SelectItem>
        ))}
      </Select>
    </div>

  );
}
