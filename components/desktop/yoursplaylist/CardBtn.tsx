"use client";
import React from "react";
import {
  Button
} from "@nextui-org/react";
import AddPlayIcon from "./icons/AddPlayIcon";

export default function CardBtn() {
  return (
    <Button
      color="default"
      variant="bordered"
      className="w-full h-52 font-bold mb-4"
    >
      <div className="flex flex-col">
        <div>
          <AddPlayIcon />
        </div>
        <div className="mt-4">Create Playlist</div>
      </div>
    </Button>
  );
}
