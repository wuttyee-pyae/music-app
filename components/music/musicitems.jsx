"use client";

import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import { Card, Skeleton } from "@nextui-org/react";

import styles from "./musicitems.module.css";
import { Tooltip } from "@nextui-org/react";

import { Button, Progress } from "@nextui-org/react";
import { BuysIcon } from "./icons/BuysIcon";
import { HeartIcon } from "./icons/HeartIcon";
import { MoreIcon } from "./icons/MoreIcon";

import MoreOption from "./moreoption";

const Musicitems = (props, ref) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className={styles.music_card}>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="ml-4 col-span-3 md:col-span-1">
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
        <div>
          <Tooltip
            color="secondary"
            showArrow={true}
            placement="top"
            className="secondary"
            content={
              <div className="px-1 py-2 w-max">
                <div className="text-tiny text-center">Play This Item</div>
              </div>
            }
          >
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <BsPlayFill className="h-8 w-8" />
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-5 md:col-span-2">
          <div>
            <div className={styles.music_name}>Music Name</div>
            <div className={styles.music_type}>Music Type</div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3">
          <div className="flex gap-4">
            <div className={styles.new_play_lable}>News</div>
            <div className={styles.music_type}>Music Type</div>
          </div>
        </div>
        <div className="">
          <div className={styles.news_item}>
            <p className={styles.music_time}>3:00</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2">
          <div className={styles.news_item}>
            <span className={styles.crbt_price}>$</span>
            <span className={styles.crbt_price}> Price</span>
            <span className={styles.crbt_price}> Ks</span>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2">
          <div className="flex items-center justify-end">
            <div className="mr-2">
              <Tooltip
                color="secondary"
                showArrow={true}
                placement="top"
                className="secondary"
                content={
                  <div className="px-1 py-2 w-max">
                    <div className="text-tiny text-center">Like This Item</div>
                  </div>
                }
              >
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 mt-4"
                  radius="full"
                  variant="light"
                  onPress={() => setLiked((v) => !v)}
                >
                  <HeartIcon
                    className={liked ? "[&>path]:stroke-transparent" : ""}
                    fill={liked ? "#ef2d62" : "none"}
                  />
                </Button>
              </Tooltip>
            </div>

            <Tooltip
              color="secondary"
              showArrow={true}
              placement="top"
              className="secondary"
              content={
                <div className="px-1 py-2 w-max">
                  <div className="text-tiny text-center">Buy This Item</div>
                </div>
              }
            >
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <BuysIcon />
              </Button>
            </Tooltip>


              <MoreOption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musicitems;
