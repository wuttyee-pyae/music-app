import { Input, Progress } from "@nextui-org/react";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import { LyricsIcon } from "@/components/desktop/musicplayer/LyricsIcon";
import { Toast } from "primereact/toast";
import { Tooltip } from "primereact/tooltip";
import { FileUpload } from "primereact/fileupload";
import React from 'react';

export default function TackItem() {
 

  return (
    <div className="my-4 w-full">
      <form action="">
        <div className="grid grid-cols-1 gap-4">
          <div className="my-4">
            
          </div>
          {/* <div className="my-4">
          <label className="text-white">Select LRC file:</label>
          <Input
            type="file"
            variant={"bordered"}
            color="default"
            id="myfile"
            name="myfile"
            className="w-full"
            startContent={<LyricsIcon className="" />}
          />
          <Progress
            size="md"
            color="success"
            aria-label="Loading..."
            value={40}
          />
        </div> */}
        </div>
      </form>
    </div>
  );
}
