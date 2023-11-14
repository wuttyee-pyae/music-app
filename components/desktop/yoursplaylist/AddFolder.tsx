"use client";
import React from "react";
import {
  Tooltip,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import Play from "./Play";
import AddFolderIcon from "./icons/AddFolderIcon";

export default function AddFolder() {
  return (
    <Button
      color="default"
      variant="bordered"
      className="w-full h-52 font-bold mb-4"
    >
      <div className="flex flex-col">
        <div>
          <AddFolderIcon />
        </div>
        <div className="mt-4">Create New Folder</div>
      </div>
    </Button>
  );
}
