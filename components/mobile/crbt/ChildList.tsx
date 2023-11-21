import React from "react";
import Image from "next/image";
import { Button, Card, Skeleton } from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";

import styles from "./crbtitems.module.css";
import { UpIcon } from "../musiccard/UpIcon";
import { PlayIcon } from "../musiccard/PlayIcon";

const CrbtList = () => {
  return (
    <div className={styles.crbt_child}>
      <div className="flex gap-4 items-center mt-3 p-4">
        <div className="flex w-16 justify-center">
          <UpIcon />
        </div>
        <div className="music-gradient flex">
            <Image
              src="/images/crbt_lg.jpg"
              width={120}
              height={120}
              alt="Picture of the author"
              className="aspect-square right-0 rounded-md"
            />
            <Button
              isIconOnly
              color="danger"
              radius="full"
              aria-label="Play"
              className="w-12 h-12 img_play_icon"
            >
              <PlayIcon />
            </Button>
        </div>
        <div className="flex-auto w-64">
          <div className="truncate break-words music_name">Music Name</div>
          <div className="flex gap-4 items-center">
            <div className={styles.new_play_lable}>News</div>
            <div className={styles.music_type}>Music Type</div>
          </div>
        </div>
        <div>
          <FaCartShopping className="h-5 w-5 float-right text-white" />
        </div>
      </div>
    </div>
  );
};

export default CrbtList;
