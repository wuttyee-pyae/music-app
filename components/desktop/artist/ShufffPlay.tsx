import React from "react";
import { Button } from "@nextui-org/react";
import { PlayIcon } from "../crbtplayer/PlayIcon";

export default function ShufffPlay() {
  return (
    <div>
      <Button isIconOnly color="danger" radius="full" aria-label="Shuffplay" className="w-16 h-16">
        <PlayIcon />
      </Button>
    </div>
  );
}
