import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

import { musics } from "./musicdata";
import { MusicIcon } from "./MusicIcon";

export default function MusicSelect() {
  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="w-full mt-4">
      <p className="text-small text-default-600">Music: {value}</p>
      <Select
        startContent={<MusicIcon />}
        aria-hidden="true"
        tabIndex={0}
        aria-labelledby="music"
        placeholder="Select musics"
        variant="bordered"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={(e : any) => setValue(e.target.value)}
        defaultSelectedKeys={["all_time"]}
        id="music"
        aria-checked="false"
      >
        {musics.map((music) => (
          <SelectItem
            key={music.value}
            value={music.value}
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
            aria-labelledby="music"
          >
            {music.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
