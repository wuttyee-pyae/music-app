"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwipperSlider from "./SwipperSlide";

export default function Swipper({ dataList }: { dataList: any }) {
  return (
    <div>
      <div className="py-4">
        <h2 className="title">Relataled MTV Video</h2>
      </div>
      <div className="py-4">
        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          loop={true}
          className="mySwiper"
        >

          {
            dataList.length > 0 ?
            <div>
               {dataList?.map((item : {}, index : number) => (
              <SwiperSlide key={index}>
                <SwipperSlider data={item}/>
               </SwiperSlide>
            ))}
            </div>
             : null
          }
         
        </Swiper>
      </div>
    </div>
  );
}
