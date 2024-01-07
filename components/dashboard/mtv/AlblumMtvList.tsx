"use client";
import React from "react";
import {
  Tooltip,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import Play from "@/components/desktop/yoursplaylist/Play";

import styles from "../music/cardmusicList.module.css";

import MoreOption from "../music/MoreOption";


export default function AlblumMtvList({
  data,
  status,
}: {
  data?: any;
  status?: string;
}) {

  console.log(data ,"MTVData" , data.cover_image);

  return (
    
    <Tooltip
      content={<Play />}
      className="text-white play_hover z-0"
      offset={-50}
      placement="right"
    >
      <div>
      <Button className="playlist_card p-0 m-0 w-full">
        <Card className="py-4 mb-4">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={data.cover_image}
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex items-start">
            <div className="flex-col w-full text-left gap-4 overflow-hidden">
              <div className="truncate break-words music_name">{data.album_name}</div>
              <div className="flex gap-2 items-center">
                <div className={styles.music_type}>{data?.songs?.length || 0} Tack</div>
              </div>
            </div>

            <div>
              <MoreOption />
            </div>
          </CardHeader>
        </Card>
      </Button>
      </div>
    </Tooltip>
  );
}