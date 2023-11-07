import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

import { populars } from "./populardata";
import { PopularIcon } from "./Popularcon";

export default function Popular() {

  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="w-full mt-4">
      <p className="text-small text-default-600">Popular: {value}</p>
      <Select
        startContent={<PopularIcon />}
        aria-hidden="true"
        tabindex="0"
        aria-labelledby="popular"
        placeholder="Select Popular"
        variant="bordered"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={setValue}
        defaultSelectedKeys={["monthly"]}
        id="popular"
        aria-checked="false"
      >
        {populars.map((popular) => (
          <SelectItem
            key={popular.value}
            value={popular.value}
            role="checkbox"
            aria-checked="false"
            tabindex="0"
            aria-labelledby="popular"
            className="max-w-xs"
          >
            {popular.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}