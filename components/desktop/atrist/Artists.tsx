import React from "react";
import Image from "next/image";

import Artist01 from "@/assets/artists/aungh_htet/about_image/aung-htet.jpg";
import Artist02 from "@/assets/artists/david_lai/about_image/david-lai.jpg";
import Artist03 from "@/assets/artists/g_fatt/about_image/g-fatt.jpg";


export default function Artists() {
  return (
    <div className="">
      <h3 className="title mb-2">All Artists</h3>
      <div className="grid grid-cols-3 gap-4 xl:grid-cols-7 md:grid-cols-5">
        {/* Loop All Artists Id */}
        <div id="artists_id">
          <Image className="rounded-lg"
            alt="..."
            src={Artist01}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
          <div className="artist_list_name my-2">Aung Htet</div>
        </div>

        <div id="artists_id">
          <Image className="rounded-lg"
            alt="..."
            src={Artist02}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
          <div className="artist_list_name my-2">David Lai</div>
        </div>

        <div id="artists_id">
          <Image className="rounded-lg"
            alt="..."
            src={Artist03}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
          <div className="artist_list_name my-2">G-fatt</div>
        </div>
      </div>
    </div>
  );
}
