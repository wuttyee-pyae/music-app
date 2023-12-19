'use client'
import Image from "next/image";
import MusicCover from "@/assets/images/crbt_lg.jpg";
import { Button, Progress } from "@nextui-org/react";

import { HeartIcon } from "./HeartIcon";
import React from "react";
// const [liked, setLiked] = React.useState(false);

const Track = ({ isPlaying, isActive, activeSong, data , isExpand}: {
  isPlaying: any,
  isActive: any, 
  activeSong: any,
   data: any,
   isExpand: boolean
}) => {
  // const [imageWdith,setImageWidth] = React.useState(isExpand ? 200 : 50)

  return ( 
    //  ${isExpand && '  w-full'}
    <div className={`flex items-center justify-start col-span-12 lg:col-span-3 gap-4 ${isExpand && 'flex-col min-h-[50dvh]'}`}>
      <div
        className={`${(isPlaying && isActive) && "animate-[spin_3s_linear_infinite]"
          } sm:block ${isExpand ? 'h-96 w-96 animate-none' : 'h-16 w-16'}`}
      >
        {/* <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" /> */}
        <Image
          src={data?.picture || MusicCover}
          // src={MusicCover?.activeSong?.images?.coverart}
          color={"secondary"}
          style={{ objectFit: "cover" }}
          width={100}
          height={100}
          alt="Picture of the author"
          className={`aspect-square right-0 rounded-full border-4 border-purple-600 shadow-lg ${isExpand && 'w-full h-full rounded-md'}`}
        />
      </div>
      <div className={`w-[55%] ${isExpand && 'text-center mt-5'} `}>
        <p   className="truncate break-words music_name">
          {data?.name ? data?.name : "No active Song"}
        </p>
        <p className="truncate break-words music_type">
          {data?.singer ? data?.singer : "No active Artist"}
        </p>
      </div>
      <div className="flex-initial">
        {/* <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
        radius="full"
        variant="light"
        onPress={() => setLiked((v) => !v)}
      >
        <HeartIcon
          className={liked ? "[&>path]:stroke-transparent" : ""}
          fill={liked ? "currentColor" : "none"}
        />
      </Button> */}
      </div>
    </div>
  )
}



export default Track;
