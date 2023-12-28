import React from "react";
import Image from "next/image";
import { Button, Card, Skeleton } from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";

import { PlayIcon } from "@/components/mobile/musiccard/PlayIcon";

import styles from "./cardmusicList.module.css";
import MoreOption from "./MoreOption";
export default function CardMusicListexport ({
  data,
  status,
}: {
  data?: any;
  status?: string;
}) {
  return (
    <div className={styles.crbt_has_child}>
      <div className="flex gap-4 items-center">
        <div className="music-gradient flex">
            <Image
              src={data.picture}
              width={45}
              height={45}
              alt="Picture of the author"
              className="aspect-square right-0 rounded-md"
            />
            <div>
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
           
        </div>
        <div className="flex-auto w-64">
          <div className="truncate break-words music_name">{data.name}</div>
          <div className="flex gap-2 items-center">
            <div className={styles.music_type}>{data.type}</div>
            <div className={styles.music_type}>{data.time}</div>
          </div>
        </div>
        <div>
        <MoreOption />
        </div>
      </div>

    </div>
  );
}
