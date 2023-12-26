import { Input, Progress } from "@nextui-org/react";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import { LyricsIcon } from "@/components/desktop/musicplayer/LyricsIcon";
import { Toast } from "primereact/toast";
import { Tooltip } from "primereact/tooltip";
import { FileUpload } from "primereact/fileupload";
import React, { useRef, useEffect, useState } from 'react';

export default function TackItem() {
  
  const toast = useRef<any>(null);


  return (
    <div className="my-4 w-full">
      <form action="">
        <div className="grid grid-cols-1 gap-4">
          <div className="my-4">
            <Toast ref={toast}></Toast>
            <Tooltip
              target=".custom-choose-btn"
              content="Choose"
              position="bottom"
            />
            <Tooltip
              target=".custom-upload-btn"
              content="Upload"
              position="bottom"
            />
            <Tooltip
              target=".custom-cancel-btn"
              content="Clear"
              position="bottom"
            />

            <FileUpload
              ref={fileUploadRef}
              name="demo[]"
              url="/api/upload"
              multiple
              accept="image/*"
              maxFileSize={1000000}
              onUpload={onTemplateUpload}
              onSelect={onTemplateSelect}
              onError={onTemplateClear}
              onClear={onTemplateClear}
              headerTemplate={headerTemplate}
              itemTemplate={itemTemplate}
              emptyTemplate={emptyTemplate}
              chooseOptions={chooseOptions}
              uploadOptions={uploadOptions}
              cancelOptions={cancelOptions}
            />
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
