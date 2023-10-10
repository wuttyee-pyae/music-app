"use client";
import React from "react";
import Image from "next/image";

import { Carousel } from "flowbite-react";
import Banner01 from "@/assets/images/poster_01.jpg";
import Banner02 from "@/assets/images/poster_02.jpg";
import Banner03 from "@/assets/images/poster_03.jpg";
import Banner04 from "@/assets/images/poster_04.jpg";

export default function SlidingInterval() {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <div className="">
      <div className="relative h-96 w-full">
        <Carousel slideInterval={5000} className="">
          <Image
            alt="..."
            src={Banner01}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
          <Image
            alt="..."
            src={Banner02}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
          <Image
            alt="..."
            src={Banner03}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
          <Image
            alt="..."
            src={Banner04}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </Carousel>
      </div>
    </div>
  );
}
