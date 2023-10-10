import React from "react";
import Image from "next/image";

import Genre01 from "@/assets/music_images/genres/genres_01.png";
import Genre02 from "@/assets/music_images/genres/genres_02.png";
import Genre03 from "@/assets/music_images/genres/genres_03.png";
import Genre04 from "@/assets/music_images/genres/genres_04.png";
import Genre05 from "@/assets/music_images/genres/genres_05.png";
  
export default function Genres() {
  return (
    <div className="mb-10">
      <h3 className="title mb-2">Genres</h3>
      <div className="grid grid-cols-3 gap-4 xl:grid-cols-5 md:grid-cols-4">
        {/* Loop Genres Id */}
        <div id="genres_id">
          <Image
            alt="..."
            src={Genre01}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </div>
        <div id="genres_id">
          <Image
            alt="..."
            src={Genre02}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </div>
        <div id="genres_id">
          <Image
            alt="..."
            src={Genre03}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </div>
        <div id="genres_id">
          <Image
            alt="..."
            src={Genre04}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </div>
        <div id="genres_id">
          <Image
            alt="..."
            src={Genre05}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </div>

      </div>
    </div>
  );
}
