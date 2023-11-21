import React from "react";
import Image from "next/image";
import { Tooltip, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "@/components/desktop/musicplayer/HeartIcon";
import { PlayIcon } from "../musiccard/PlayIcon"; 
import { PauseCircleIcon } from "@/components/desktop/crbtplayer/PauseCircleIcon";

export default function Footer(props: any, ref: any) {
  const [liked, setLiked] = React.useState(false);
  const styling = {
    // backgroundImage: "url('/images/crbt_lg.jpg')",
    // zIndex: '1',
    // backgroundSize: "cover",
    // width:"100%",
    // height:"auto",
    // backgroundPosition:"center center",
    // // filter:"blur(4px) saturate(100%)",
    // backdropFwilter:"blur(10px)",
  };

  return (
    <div className="">
       
      <footer
        style={styling}
        className="mx-4 rounded-md footer-container fixed-bottom border-gradient border-gradient-purple only-top"
      >
        <Slider
        aria-label="Player progress"
        color="foreground"
        hideThumb={true}
        size="sm"
        defaultValue={20}
        className="w-full px-4"
      />
        
        <div className="mx-4">
       
          <div className="flex gap-4 items-center z-10">
            <div className="music-gradient flex">
              <Image
                src="/images/crbt_lg.jpg"
                width={120}
                height={120}
                alt="Picture of the author"
                className="aspect-square right-0 rounded-md"
              />
            </div>
            <div className="flex-auto w-64">
              <div className="truncate break-words play_music_name text-white">
                Music Name
              </div>
              <div className="flex gap-4 items-center">
                <div className="text-white music_type">Artist Name</div>
              </div>
            </div>
            <div>
              <div className="mr-2">
                <Tooltip
                  color="secondary"
                  showArrow={true}
                  placement="top"
                  className="secondary"
                  content={
                    <div className="px-1 py-2 w-max">
                      <div className="text-tiny text-center">
                        Like This Item
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
            </div>
            {/* <div>
              <Button
                isIconOnly
                color="danger"
                radius="full"
                aria-label="Play"
                className="bg-none"
              >
                <PlayIcon size={22} />
              </Button>
            </div> */}
            <div>
              <Button
                isIconOnly
                color="danger"
                radius="full"
                aria-label="Play"
                className="bg-none mr-4"
              >
                <PauseCircleIcon size={22} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
