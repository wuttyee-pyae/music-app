import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import Content from "./Content";

export default function LyricsCard({data}: {data: any}) {
  return (
    <ScrollShadow size={100} className="w-full h-[500px]">
      <Content data={data}/>
    </ScrollShadow>
  );
}