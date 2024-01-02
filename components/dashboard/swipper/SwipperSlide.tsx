"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";

import {
  Button,
  Card,
  CardFooter,
} from "@nextui-org/react";
import { PlayIcon } from "@/components/mobile/musiccard/PlayIcon";

export default function SwipperSlider({
  data,
  status,
}: {
  data: any;
  status?: string;
}) {
  console.log(data, "MTVData", data.cover_image);

  return (
    <div>
      <Card isFooterBlurred radius="lg" className="border-none background-none">
        <Image
          alt="Woman listing to music"
          className="object-cover rounded-md"
          height={150}
          src={data.picture}
          width={360}
        />

        <Button
          isIconOnly
          color="danger"
          radius="full"
          aria-label="Play"
          className="w-12 h-12 music_play_icon"
        >
          <PlayIcon />
        </Button>

        <CardFooter className="flex-col items-start text-left gap-2">
          <div className="truncate break-words music_name">LP5</div>
          <div className="truncate break-words music_type text-tiny">
            Apparat
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
