"use client";
import Image from "next/image";

import BannerImg from "@/components/desktop/yoursplaylist/BannerImg";
import InnerLogo from "@/assets/icons/mobile/inner-logo.png";
import PlayListIcon from "@/components/desktop/yoursplaylist/icons/PlayListIcon";
import { Button, Progress, Tooltip } from "@nextui-org/react";
import { HeartIcon } from "@/components/desktop/musicplayer/HeartIcon";
import React from "react";
import PlayListMore from "@/components/desktop/yoursplaylist/PlayListMore";
import PopularMusic from "@/components/desktop/artist/PopularMusic";

export default function PlaylistId() {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="drop-shadow-xl">
      <div>
        <BannerImg />
        <div className="mb-4 wapper text-white mt-4 w-full">
          <div className="flex flex-col gap-4 content-between px-4 absolute top-2 w-full">
            <div>
              <p>PlayList</p>
            </div>
            <div>
              <p className="text-8xl md:text-7xl font-bold tra">
                Today's Top Hite
              </p>
            </div>
            <div>
              <p>Dua Lipa is on top of the Hottest 50!</p>
            </div>

            <div className="inline-block content-between">
              <ul className="flex gap-3 items-center mt-4">
                <li>
                  <Image
                    className="relative"
                    src={InnerLogo}
                    alt="Logo"
                    width={100}
                    height={20}
                    priority
                  />
                </li>
                <li>34,433,100 likes</li>
                <li>12 Tracks,</li>
                <li>
                  <small className="text-default-500">
                    {" "}
                    about 2 hr 45 min{" "}
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-4 pt-2 relative">
          <div>
            <div className="grid grid-flow-row auto-rows-max">
              <div className="grid grid-flow-col gap-6 auto-cols-max items-center">
                <div>
                  <PlayListIcon />
                </div>
                <div>
                  <Tooltip
                    color="secondary"
                    showArrow={true}
                    placement="top"
                    className="secondary"
                    content={
                      <div className="px-1 py-2 w-max">
                        <div className="text-tiny text-center">
                          Save to Your Library
                        </div>
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
                <div>
                  <PlayListMore />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <PopularMusic />
          </div>
        </div>
      </div>
    </div>
  );
}
