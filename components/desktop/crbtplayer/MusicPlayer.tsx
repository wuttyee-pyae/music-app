import Image from "next/image";
import MusicCover from "@/assets/images/crbt_lg.jpg";
import { Tooltip } from "@nextui-org/react";
import React from "react";
import { Button, Progress } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { PlayIcon } from "./PlayIcon";
import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";
import { RepeatOneIcon } from "./RepeatOneIcon";
import { ShuffleIcon } from "./ShuffleIcon";
import { LyricsIcon } from "./LyricsIcon";
import { VolumUp } from "./VolumUp";

export default function CrbtPlayer() {
  const [liked, setLiked] = React.useState(false);

  function setValue(value: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex items-center">
      <div className="flex-auto ml-4">
        <div className="flex items-center">
          <div className="flex-initial">
            <Image
              priority
              fetchPriority="high"
              src={MusicCover}
              style={{ objectFit: "cover" }}
              width={58}
              height={58}
              alt="Picture of the author"
              className="aspect-square right-0 rounded-md"
            />
          </div>

          <div className="flex-initial m-4">
            <p className="music-name">Rebel Rebel</p>
            <p className="music-type">David Bowie</p>
          </div>
          <div className="flex-initial m-4">
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
        </div>
      </div>

      <div className="flex-auto w-64">
        <div className="flex flex-col col-span-2 md:col-span-2 items-center">
          <div className="flex w-full items-center justify-center gap-2">
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <RepeatOneIcon className="text-foreground/80" />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <PreviousIcon />
            </Button>
            <Button
              style={{ borderRadius: 0 }}
              isIconOnly
              className="w-auto h-auto data-[hover]:bg-foreground/0"
              radius="none"
              variant="light"
            >
              <PlayIcon size={40} />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/0"
              radius="none"
              variant="light"
            >
              <PauseCircleIcon size={40} />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <NextIcon />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <ShuffleIcon className="text-foreground/80" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col col-span-4 md:col-span-4 mt-3 gap-1">
          <Progress
            aria-label="Music progress"
            classNames={{
              indicator: "bg-default-800 dark:bg-white",
              track: "bg-default-500/30",
            }}
            color="default"
            size="sm"
            value={33}
          />
          <div className="flex justify-between">
            <p className="text-small">1:23</p>
            <p className="text-small text-foreground/50">4:32</p>
          </div>
        </div>
      </div>

      <div className="flex-auto w-32">
        <div className="flex items-center gap-4 justify-center mr-4">
          <div>
            <LyricsIcon className="h-5 w-5" />
          </div>
          <VolumUp className="h-5 w-5" />
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            className="volume_slider"
            onChange={(e : any) => setValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
