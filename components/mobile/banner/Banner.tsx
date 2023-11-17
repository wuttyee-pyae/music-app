"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Banner01 from "@/assets/images/poster_01.jpg";
import Banner02 from "@/assets/images/poster_02.jpg";
import Banner03 from "@/assets/images/poster_03.jpg";
import Banner04 from "@/assets/images/poster_04.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Banner() {
  const pagination = {
    loop: true,
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="">
      <Swiper rewind={true} pagination={pagination} modules={[Pagination]}>
        <SwiperSlide>
          <Image
            alt="..."
            src={Banner01}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="..."
            src={Banner02}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="..."
            src={Banner03}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="..."
            src={Banner04}
            style={{ objectFit: "cover" }}
            // layout="responsive"
            suppressHydrationWarning
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
