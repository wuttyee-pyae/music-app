"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./Banner.css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { HeartIcon } from "@/components/desktop/musicplayer/HeartIcon";

export default function ArtistCart() {
  const pagination = {
    loop: true,
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="my-2">
      <Swiper slidesPerView={2.2} spaceBetween={16} loop={true}>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <Avatar
              alt="Woman listing to music"
              className="object-cover w-auto h-auto"
              size="lg"
              src="/artists/apparat/albums/lp5/lp5-apparat.jpg"
            />
            <div className="flex-col items-start gap-2 my-4">
              <div className="truncate break-words music_name">Artist Name</div>
              <div className="flex gap-2 music_type items-center">
                <HeartIcon />
                <div className="truncate break-words text-tiny">
                  371,145
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <Avatar
              alt="Woman listing to music"
              className="object-cover w-auto h-auto"
              size="lg"
              src="/artists/thesmits/about_img/lil_smiths.jpg"
            />
            <div className="flex-col items-start gap-2 my-4">
              <div className="truncate break-words music_name">The Smiths</div>
              <div className="flex gap-2 music_type items-center">
                <HeartIcon />
                <div className="truncate break-words text-tiny">
                  371,145
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <Avatar
              alt="Woman listing to music"
              className="object-cover w-auto h-auto"
              size="lg"
              src="/artists/theclash/about_img/tehe_clash.jpg"
            />
            <div className="flex-col items-start gap-2 my-4">
              <div className="truncate break-words music_name">The Clash</div>
              <div className="flex gap-2 music_type items-center">
                <HeartIcon />
                <div className="truncate break-words text-tiny">
                  371,145
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <Avatar
              alt="Woman listing to music"
              className="object-cover w-auto h-auto"
              size="lg"
              src="/artists/david_bowie/about_img/jimmy_king.jpg"
            />
            <div className="flex-col items-start gap-2 my-4">
              <div className="truncate break-words music_name">David Bowie</div>
              <div className="flex gap-2 music_type items-center">
                <HeartIcon />
                <div className="truncate break-words text-tiny">
                  371,145
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
