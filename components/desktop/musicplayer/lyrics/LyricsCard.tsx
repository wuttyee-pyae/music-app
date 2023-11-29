import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import Content from "./Content";

export default function LyricsCard() {
  return (
    <ScrollShadow size={100} className="w-full h-[500px]">
      <Content />
    </ScrollShadow>
  );
}