import React from "react";

import { Image } from "@nextui-org/react";
import MoreOption from "@/components/music/MoreOption";


export default function VideoImage(props, ref) {
  return (
    <div>
      <Image
        isZoomed
        alt="NextUI hero Image with delay"
        src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        style={{ objectFit: "cover" }}
        fallbackSrc="https://via.placeholder.com/300x200"
        // layout="responsive"
        suppressHydrationWarning

      />
      <div className="my-4">
        
        <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-10 mtv_title">MTV Title</div>
            <div className=""><MoreOption /></div>
        </div>
        <div className="flex gap-4">
            <div className="music_type">like counts</div>
            <div className="music_type">view counts</div>
        </div>
      </div>
    </div>
  );
}
