import React from "react";

import { Image } from "@nextui-org/react";
import MoreOption from "../music/MoreOption";
import Link from "next/link";

export default function VideoCard({
  data,
  status,
}: {
  data?: any;
  status?: string;
}) {

  console.log(data ,"MusicData" , data.cover_image)

  return (
    // <div>
      <Link href="/dashboard/player">
      <Image
        isZoomed
        alt={data.name}
        src={data.picture}
        className="aspect-video"
        style={{ objectFit: "cover" }}
        fallbackSrc="https://via.placeholder.com/300x200"
        // layout="responsive"
        suppressHydrationWarning
      />
     
      <div className="my-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-10 mtv_title">{data.name}</div>
          <div className="">
            <MoreOption />
          </div>
        </div>
        <div className="flex gap-4">
        <div className="music_type">{data.viewer} views</div>
          <div className="music_type">like counts</div>
        </div>
      </div>
    {/* </div> */}
     </Link>
  );
}