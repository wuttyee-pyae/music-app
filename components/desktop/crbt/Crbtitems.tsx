"use client";

import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import { Card, Skeleton } from "@nextui-org/react";
import { Tooltip, Button } from "@nextui-org/react";

import styles from "./Crbtitems.module.css";
const Crbtitems = () => {
  return (
    <Tooltip content={<BsPlayFill className="h-10 w-10 z-0" />} className="text-white music_hover" offset={0} placement="left">
    <div className={styles.music_card}>

      <div className="grid grid-cols-12 gap-4 items-center">

        <div className="flex items-center gap-4 justify-start">
          <div className="ml-4">ID</div>
        </div>
        <div className="mr-4 col-span-3 md:col-span-1">
          <Skeleton className="rounded-lg">
            <Image
              src="/images/lazy_music_lg.jpg"
              width={58}
              height={58}
              alt="Picture of the author"
              className="aspect-square right-0 rounded-md"
            />
          </Skeleton>
        </div>

        <div className="col-span-5 md:col-span-2">
          <div>
            <div className={styles.music_name}>Music Name</div>
            <div className={styles.music_type}>Artist Name</div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3">
          <div className="flex gap-4">
            <div className={styles.new_play_lable}>News</div>
            <div className={styles.music_type}>Music Type</div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2">
          <div className={styles.news_item}>
            <p className={styles.ctbt_id}>1527748202</p>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2">
          <div className={styles.news_item}>
            <span className={styles.crbt_price}>$</span>
            <span className={styles.crbt_price}> Price</span>
            <span className={styles.crbt_price}> Ks</span>
          </div>
        </div>
        <div>
          <FaCartShopping className="h-5 w-5 float-right mr-4" />
        </div>
      </div>
    </div>
    </Tooltip>
  );
};

export default Crbtitems;
