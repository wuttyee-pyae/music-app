"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwipperSlider from "./SwipperSlide";

export default function Swipper({ dataList, title }: { dataList: any, title: string }) {
  const cardType = title == "Radio Channel" ? "header" : "footer"
  return (
    <div>
      <div className="py-4">
        <h2 className="title">{title}</h2>
      </div>
      <div className="py-4 flex">
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
                <SwipperSlider data={item} type={cardType}/>
               </SwiperSlide>
            ))}            </div>
             : null
          }
         
        </Swiper>
      </div>
    </div>
  );
}
