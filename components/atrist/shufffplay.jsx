import React from "react";
import { Button } from "@nextui-org/react";
import { PlayIcon } from "@/components/crbtplayer/PlayIcon";

export default function ShufffPlay() {
  return (
    <div className="">
      <Button isIconOnly color="danger" radius="full" aria-label="Shuffplay" className="w-16 h-16">
        <PlayIcon />
      </Button>
    </div>
  );
}
