import React from "react";
import Image from "next/image";

import Artistscover01 from "@/assets/artists/big_bag/cover_banner/baner-01.jpg";
import Artistscover02 from "@/assets/artists/big_bag/cover_banner/baner-02.jpg";

export default function Artistscover() {
  return (
      <div className="">
            <Image
                  className=""
                  alt="..."
                  src={Artistscover01}
                  style={{ objectFit: "cover" }}
                  layout="responsive"
                  suppressHydrationWarning
                />
      </div>
  );
}
