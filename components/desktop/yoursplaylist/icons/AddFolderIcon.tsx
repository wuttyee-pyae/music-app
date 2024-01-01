import React from "react";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "@/components/desktop/musicplayer/HeartIcon";

export default function AddFolderIcon() {
  return (
    <div>
      <Button isIconOnly color="secondary" radius="full" aria-label="Shuffplay" className="w-16 h-16">
        <HeartIcon />
      </Button>
    </div>
  );
}