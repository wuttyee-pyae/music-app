import React from "react";
import Image from "next/image";

import Banner01 from "@/assets/collection_music_image/poster-01.jpg";
import Banner02 from "@/assets/collection_music_image/poster-02.jpg";
import Banner03 from "@/assets/collection_music_image/poster-03.jpg";
import Banner04 from "@/assets/collection_music_image/poster-04.jpg";

export default function BrowseArtists() {
  return (
      <div className="">
        <div className="mb-4 wapper mx-4">
          <h3 className="title mb-2">Browse Artists</h3>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
            {/* Loop All Artists Id */}
            <div id="browse_artists_id">
              <div className="img-gradient flex">
                <Image
                  className="rounded-lg"
                  alt="..."
                  src={Banner01}
                  style={{ objectFit: "cover" }}
                  // layout="responsive"
                  suppressHydrationWarning
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Male Solo
                </div>
              </div>
            </div>
            <div id="browse_artists_id">
              <div className="img-gradient flex">
                <Image
                  className="rounded-lg"
                  alt="..."
                  src={Banner02}
                  style={{ objectFit: "cover" }}
                  // layout="responsive"
                  suppressHydrationWarning
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Female Solo
                </div>
              </div>
            </div>
            <div id="browse_artists_id">
              <div className="img-gradient flex">
                <Image
                  className="rounded-lg"
                  alt="..."
                  src={Banner03}
                  style={{ objectFit: "cover" }}
                  // layout="responsive"
                  suppressHydrationWarning
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Group
                </div>
              </div>
            </div>

            <div id="browse_artists_id">
              <div className="img-gradient flex">
                <Image
                  className="rounded-lg"
                  alt="..."
                  src={Banner01}
                  style={{ objectFit: "cover" }}
                  // layout="responsive"
                  suppressHydrationWarning
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Male Solo
                </div>
              </div>
            </div>
            <div id="browse_artists_id">
              <div className="img-gradient flex">
                <Image
                  className="rounded-lg"
                  alt="..."
                  src={Banner02}
                  style={{ objectFit: "cover" }}
                  // layout="responsive"
                  suppressHydrationWarning
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Female Solo
                </div>
              </div>
            </div>
            <div id="browse_artists_id">
              <div className="img-gradient flex">
                <Image
                  className="rounded-lg"
                  alt="..."
                  src={Banner03}
                  style={{ objectFit: "cover" }}
                  // layout="responsive"
                  suppressHydrationWarning
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Group
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
