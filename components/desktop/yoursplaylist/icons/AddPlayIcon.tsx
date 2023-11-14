import React from "react";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";

export default function AddPlayIcon() {
  return (
    <div className="">
      <Button isIconOnly color="danger" radius="full" aria-label="Shuffplay" className="w-16 h-16">
        <PlusIcon />
      </Button>
    </div>
  );
}