'use client'
import Image from "next/image";
import MusicCover from "@/assets/images/crbt_lg.jpg";
import { Button, Progress } from "@nextui-org/react";

import { HeartIcon } from "./HeartIcon";
// const [liked, setLiked] = React.useState(false);

const Track = ({ isPlaying, isActive, activeSong, data }: {
  isPlaying: any,
  isActive: any, activeSong: any, data: any
}) => {
  return (
    <div className="flex items-center justify-start col-span-12 lg:col-span-3">
      <div
        className={`${isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
          }sm:block h-16 w-16 mr-4`}
      >
        {/* <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" /> */}
        <Image
          src={data?.picture || MusicCover}
          // src={MusicCover?.activeSong?.images?.coverart}
          style={{ objectFit: "cover" }}
          width={58}
          height={58}
          alt="Picture of the author"
          className="aspect-square right-0 rounded-md"
        />
      </div>
      <div className="w-[50%]">
        <p className="truncate break-words music_name">
          {data?.name ? data?.name : "No active Song"}
        </p>
        <p className="truncate break-words music_type">
          {data?.singer ? data?.singer : "No active Artist"}
        </p>
      </div>
      <div className="flex-initial m-4">
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
