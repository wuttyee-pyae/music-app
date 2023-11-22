import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

import { genres } from "./genredata";
import { GenreIcon } from "./GenreIcon";

export default function Gender() {
  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="w-full mt-4">
      <p className="text-small text-default-600">Genre: {value}</p>
      <Select
        startContent={<GenreIcon />}
        aria-hidden="true"
        tabIndex={0}
        aria-labelledby="genre"
        placeholder="Select genre"
        variant="bordered"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={(e : any) => setValue(e.target.value)}
        defaultSelectedKeys={["other"]}
        id="genre"
        aria-checked="false"
  
      >
        {genres.map((genre) => (
          <SelectItem
            key={genre.value}
            value={genre.value}
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
            aria-labelledby="genre"
          >
            {genre.label}
          </SelectItem>
        ))}
      </Select>
    </div>

  );
}
