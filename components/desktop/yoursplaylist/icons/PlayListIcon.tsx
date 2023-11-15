import React from "react";
import { Button } from "@nextui-org/react";
import { PlayIcon } from "@/components/desktop/crbtplayer/PlayIcon";

export default function PlayListIcon() {
  return (
    <div className="">
      <Button isIconOnly color="danger" radius="full" aria-label="Shuffplay" className="w-16 h-16">
        <PlayIcon />
      </Button>
    </div>
  );
}