import React from "react";
import Image from "next/image";
import styles from "./ArtistsCover.module.css"

import Artistscover01 from "@/assets/artists/big_bag/about_image/baner-01.jpg";

export default function Artistscover() {
  return (
      <div className="">
        <div className={styles.cover_gradient}>
        <Image
                  className=""
                  alt="..."
                  src={Artistscover01}
                  style={{ objectFit: "cover" }}
                  layout="responsive"
                  suppressHydrationWarning
                />
        </div>
            
      </div>
  );
}
