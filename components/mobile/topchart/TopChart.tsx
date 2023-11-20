"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./topcard.css";

// import required modules
import TopCard from "./TopCard";

import Banner01 from "@/assets/collection_music_image/poster-01.jpg";
import Banner02 from "@/assets/collection_music_image/poster-02.jpg";
import Banner03 from "@/assets/collection_music_image/poster-03.jpg";
import Banner04 from "@/assets/collection_music_image/poster-04.jpg";
import { Card, CardBody } from "@nextui-org/react";

export default function TopChart() {

  return (
    <div className="my-2">
      <Swiper
        slidesPerView={1.4}
        loop={true}
        spaceBetween={20}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <div className="img-gradient flex">
                <Image
                  alt="Woman listing to music"
                  className="object-cover rounded-md img-bland"
                  height={200}
                  src="/images/f4.jpg"
                  width={200}
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Top 100 Chart
                </div>
              </div>
            </CardBody>

            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <div className="img-gradient flex">
                <Image
                  alt="Woman listing to music"
                  className="object-cover rounded-md img-bland"
                  height={200}
                  src="/images/f1.jpg"
                  width={200}
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Top 100 Chart
                </div>
              </div>
            </CardBody>

            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <div className="img-gradient flex">
                <Image
                  alt="Woman listing to music"
                  className="object-cover rounded-md img-bland"
                  height={200}
                  src="/images/f3.jpg"
                  width={200}
                />
                <div className="artist_list_name my-2 justify-center image-text">
                  Myanmar Top 100 Chart
                </div>
              </div>
            </CardBody>

            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 text-left px-4 text-small mb-2">
              <div className="col-span-2">
                <div className="flex gap-4">
                  <div>id</div>
                  <div className="truncate break-words music_name">
                    Music Name
                  </div>
                </div>
              </div>
              <div className="truncate break-words music_type justify-end">
                Tomer Katz ft. VIGZ
              </div>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
