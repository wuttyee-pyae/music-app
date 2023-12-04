import React from "react";
import Image from "next/image";


import Mood01 from "@/assets/music_images/moods/mood_card.png";
import Mood02 from "@/assets/music_images/moods/mood_card-1.png";
import Mood03 from "@/assets/music_images/moods/mood_card-2.png";
import Mood04 from "@/assets/music_images/moods/mood_card-3.png";
import { getAllGenres } from "../../../services/music.service";

export default function Moods() {
  
  // const data = getAllGenres('/genres').then(async (response : any)=>{
  //   console.log(" ---- " , response)
  //   return await response?.data || ''
  // })
  
  return (
    <div className="mb-4">
      <h3 className="title mb-2">Moods</h3>
      <div className="grid grid-cols-3 gap-4 xl:grid-cols-5 md:grid-cols-4">
        {/* Loop Moods Id */}
        <div id="moods_id">
          <Image
            alt="..."
            src={Mood01}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            className=""
            suppressHydrationWarning
          />
        </div>
        <div id="moods_id">
          <Image
            alt="..."
            src={Mood02}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            className=""
            suppressHydrationWarning
          />
        </div>
        <div id="moods_id">
          <Image
            alt="..."
            src={Mood03}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            className=""
            suppressHydrationWarning
          />
        </div>
        <div id="moods_id">
          <Image
            alt="..."
            src={Mood04}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            className=""
            suppressHydrationWarning
          />
        </div>
        <div id="moods_id">
          <Image
            alt="..."
            src={Mood01}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            className=""
            suppressHydrationWarning
          />
        </div>

      </div>
    </div>
  );
}
