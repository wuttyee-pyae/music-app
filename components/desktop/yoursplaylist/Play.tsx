import React from "react";
import { Button } from "@nextui-org/react";
import { PlayIcon } from "./icons/PlayIcon";

export default function play() {
  return (
    <div className="">
      <Button isIconOnly color="danger" radius="full" aria-label="Play" className="w-12 h-12">
        <PlayIcon />
      </Button>
    </div>
  );
}
