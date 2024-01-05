"use client";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";

import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import { PlayIcon } from "@/components/mobile/musiccard/PlayIcon";
import { classList, getRamDomClass } from "../../../services/common.service";

export default function SwipperSlider({
  data,
  type,
}: {
  data: any;
  type?: string;
}) {
  // console.log(data, "MTVData", data.cover_image);
  const [classname , setClassname] = React.useState(null)
const getClass = () => {
  return(getRamDomClass(classList.red)+"")
} 
console.log( "Get Class", getClass())

useLayoutEffect(() => {
  getClass()
},[])

  return (
    <div>
      <Card isFooterBlurred radius="lg" className="border-none background-none">
        {type == "header" ? (
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large text-left truncate overflow-visible">
              <b>{data.name}</b>
            </h4>
            <p className="text-default-500 text-sm">
              <b>FM {data.frequency}</b>
            </p>
          </CardHeader>
        ) : null}

        <Image
          alt="Woman listing to music"
          className={`bg-[${getClass()}] object-cover rounded-md overflow-hidden h-40 `} 
          height={150}
          src={data.picture}
          width={360}
        />

        {/* <Button
          isIconOnly
          color="danger"
          radius="full"
          aria-label="Play"
          className="w-12 h-12 music_play_icon"
        >
          <PlayIcon />
        </Button> */}

        {type == "footer" ? (
          <CardFooter className="flex-col items-start text-left gap-2">
            <div className="truncate break-words music_name">{data.name}</div>
            <div className="truncate break-words music_type text-tiny">
              {data.frequency}
            </div>
          </CardFooter>
        ) : null}
      </Card>
    </div>
  );
}
