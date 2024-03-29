"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PetIcon } from "./PetIcon";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./Banner.css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { PlayIcon } from "./PlayIcon";

export default function MusicCard() {
  return (
    <div className="my-2">
      <Swiper
        slidesPerView={2.2}
        spaceBetween={16}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none background-none"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover rounded-md"
              height={200}
              src="/artists/apparat/albums/lp5/lp5-apparat.jpg"
              width={200}
            />
            <Button
              isIconOnly
              color="danger"
              radius="full"
              aria-label="Play"
              className="w-12 h-12 music_play_icon"
            >
              <PlayIcon />
            </Button>

            <CardFooter className="flex-col items-start text-left gap-2">
              <div className="truncate break-words music_name">Music Name</div>
              <div className="truncate break-words music_type text-tiny">
                Apparat
              </div>
              <div className="truncate break-words music_type text-tiny">
                Album release: 22/03/19
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none background-none"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover rounded-md"
              height={200}
              src="/artists/schoolboy_q/sigle/numb_numb_juice/numb_numb_juice.jpg"
              width={200}
            />
            <Button
              isIconOnly
              color="danger"
              radius="full"
              aria-label="Play"
              className="w-12 h-12 music_play_icon"
            >
              <PlayIcon />
            </Button>

            <CardFooter className="flex-col items-start text-left gap-2">
              <div className="truncate break-words music_name">Music Name</div>
              <div className="truncate break-words music_type text-tiny">
                Apparat
              </div>
              <div className="truncate break-words music_type text-tiny">
                Album release: 22/03/19
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none background-none"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover rounded-md"
              height={200}
              src="/artists/gunna/albums/drip_or_drown_2/drip_or_drown_2.png"
              width={200}
            />
            <Button
              isIconOnly
              color="danger"
              radius="full"
              aria-label="Play"
              className="w-12 h-12 music_play_icon"
            >
              <PlayIcon />
            </Button>
            <CardFooter className="flex-col items-start text-left gap-2">
              <div className="truncate break-words music_name">Music Name</div>
              <div className="truncate break-words music_type text-tiny">
                Apparat
              </div>
              <div className="truncate break-words music_type text-tiny">
                Album release: 22/03/19
              </div>
            </CardFooter>{" "}
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
