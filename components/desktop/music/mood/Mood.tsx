import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

import { moods } from "./mooddata";
import { MoodIcon } from "./MoodIcon";

export default function Mood() {
  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="w-full my-4">
      <p className="text-small text-default-600">Mood: {value}</p>
      <Select
        startContent={<MoodIcon />}
        aria-hidden="true"
        tabIndex={0}
        aria-labelledby="mood"
        placeholder="Select mood"
        variant="bordered"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={(e : any) => setValue(e.target.value)}
        defaultSelectedKeys={["other"]}
        id="mood"
        aria-checked="false"
  
      >
        {moods.map((mood) => (
          <SelectItem
            key={mood.value}
            value={mood.value}
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
            aria-labelledby="mood"
          >
            {mood.label}
          </SelectItem>
        ))}
      </Select>
    </div>

  );
}
