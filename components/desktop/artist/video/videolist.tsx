import React from "react";
import { Image } from "@nextui-org/react";
import VideoImage from "./videoimg"

export default function VideoList(props :any, ref :any ) {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 md:grid-cols-2">
        <VideoImage />
        <VideoImage />
        <VideoImage />
        <VideoImage />
        <VideoImage />
    </div>
  );
}
