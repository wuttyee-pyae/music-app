import React from "react";
import Image from "next/image";
import { Button, Card, Skeleton } from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";

import styles from "./crbtitems.module.css";
import { DownIcon } from "../musiccard/DownIcon";
import { PlayIcon } from "../musiccard/PlayIcon";

const CrbtList = () => {
  return (
    <div>
      <div className="flex gap-4 items-center mb-4">
        <div className="music-gradient flex">
            <Image
              src="/images/aung-htet.jpg"
              width={45}
              height={45}
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
            <div>
              <DownIcon />
            </div>
            <div className={styles.new_play_lable}>News</div>
            <div className={styles.music_type}>Music Type</div>
          </div>
        </div>
        <div>
          <FaCartShopping className="h-5 w-5 float-right text-white mr-4" />
        </div>
      </div>
    </div>
  );
};

export default CrbtList;
