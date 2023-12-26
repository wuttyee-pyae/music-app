"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import ReleaseInfo from "./ReleaseInfo";
import AddTrack from "./AddTrack";

export default function SingelMusicUpload() {

  return (
    <Accordion defaultExpandedKeys={["1"]}>
      <AccordionItem
        key="1"
        aria-label="Release Info"
        subtitle="Press to expand"
        title="Release Info"
        startContent={<MusicIcon className="text-primary" />}
      >
        {/* {defaultContent} */}
        <ReleaseInfo />
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Track List"
        subtitle={<span>Press to expand</span>}
        title="Track List"
        startContent={<MusicIcon className="text-primary" />}

      >
        <div className="w-full justify-center max-w-lg mx-auto my-0">
        <AddTrack />
        </div>
      </AccordionItem>

    </Accordion>
  );
}
