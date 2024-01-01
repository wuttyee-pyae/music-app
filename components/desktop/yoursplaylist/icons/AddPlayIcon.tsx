import React from "react";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";

export default function AddPlayIcon(zIndex? : any) {
  return (
    <div >
      <Button isIconOnly color="danger" radius="full" aria-label="Shuffplay" className={`w-16 h-16 ${zIndex && '-z-10'}`}>
        <PlusIcon />
      </Button>
    </div>
  );
}