import Image from "next/image";

import { FaCartShopping } from "react-icons/fa6";
import MusicCover from "@/assets/images/crbt_lg.jpg";

import React from "react";
import { Button, Progress } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { PlayIcon } from "./PlayIcon";
import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";
import { RepeatOneIcon } from "./RepeatOneIcon";
import { ShuffleIcon } from "./ShuffleIcon";

export default function CrbtPlayer() {
  const [liked, setLiked] = React.useState(false);

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
            <Button
              isIconOnly
              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
            >
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
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
            <Button css={{ borderRadius: 0 }}
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
        <div className="flex items-center float-right mr-4">
          <div className="flex-initial mr-4">
            <FaCartShopping className="h-5 w-5" />
          </div>
          <div className="float-right mr-4'">
            Tune ID:
            <span>100055</span>
          </div>
        </div>
      </div>
    </div>
  );
}
