import React from "react";

import { Image } from "@nextui-org/react";
import MoreOption from "../../music/MoreOption";

export default function VideoCard(props: any) {
  // const [videoList, setvideoList] = React.useState(props?.data || null);
  // const updatedList = videoList?.map((item: any) => {
  //   console.log(item)
  //   if (item?.viewer && item?.name && item?.picture)
  //   return { ...item, isPlaying: true }
  //   else
  //     return { ...item, isPlaying: false }
  // })
  // setvideoList(updatedList);
  // console.log("videoList ----- ", videoList)

  let { picture, name, viewer } = props;

  return (
    <div>
      <Image
        isZoomed
        alt={name}
        src={picture}
        className="aspect-video"
        style={{ objectFit: "cover" }}
        fallbackSrc="https://via.placeholder.com/300x200"
        // layout="responsive"
        suppressHydrationWarning
      />
      <div className="my-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-10 mtv_title">{name}</div>
          <div>
            <MoreOption />
          </div>
        </div>
        <div className="flex gap-4">
        <div className="music_type">{viewer} views</div>
          <div className="music_type">like counts</div>
        </div>
      </div>
    </div>
  );
}
