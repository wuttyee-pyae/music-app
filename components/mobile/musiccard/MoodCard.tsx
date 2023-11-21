"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

export default function MoodCard() {
  return (
    <div className="my-2">
      <Swiper
        slidesPerView={2.1}
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
              height={100}
              src="/images/moods/mood_card.png"
              width={163}
            />
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
              height={100}
              src="/images/moods/mood_card-1.png"
              width={163}
            />
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
              height={100}
              src="/images/moods/mood_card-2.png"
              width={163}
            />
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
              height={100}
              src="/images/moods/mood_card-3.png"
              width={163}
            />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
