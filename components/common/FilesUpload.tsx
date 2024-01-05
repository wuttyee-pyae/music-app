import React, { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { Tooltip } from "primereact/tooltip";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { DicIcon } from "./icons/DicIcon";
import { LyricsIcon } from "../desktop/musicplayer/LyricsIcon";

export default function FilesUpload({handleInfo} : {handleInfo:any}) {
  const toast = useRef<any>(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef<any>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const onTemplateSelect = (e: any) => {
    console.log(" file upload --- " , e)
    e?.files.length > 0 ? setIsDisabled(true) : setIsDisabled(false)
    let _totalSize = totalSize;
    let files = e.files;

    Object.keys(files).forEach((key) => {
      console.log("in loop -- " , files[key])
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };
  
  const onSelect = (file: any, callback: any) => {
    console.log("new event " , file)
  }

  useEffect(()=>{
    handleInfo(isDisabled)
  },[onTemplateSelect])
  

  const onTemplateRemove = (file: any, callback: any) => {
    setTotalSize(totalSize - file.size);
    file &&  setIsDisabled(false)
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options: any) => {
    const { className, chooseButton } = options;
    const value = totalSize / 10000000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef?.current?.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={`${className} p-0`}
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          borderBottom: "0.5px solid",
        }}
      >
        {chooseButton}
        <div className="flex align-items-center gap-3 ml-auto mr-4">
          <span>{formatedValue} / 1 GB</span>
          <ProgressBar 
          className="self-center"
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  const itemTemplate = (file: any, props: any) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-0">
        <div className="flex align-items-center flex-wrap">
          <div className="flex align-items-center" style={{ width: "40%" }}>
            <img
              alt={file.name}
              role="presentation"
              src={file.objectURL}
              className="rounded-full"
              width={100}
            />
            <span className="flex flex-column text-left ml-3">
              {file.name}
              <small className="ml-2  mt-1">
                {new Date().toLocaleDateString()}
              </small>
            </span>
          </div>
          <Tag
            value={props.formatSize}
            severity="warning"
            className="h-9 mt-6"
          />
          <Button
            type="button"
            icon="pi pi-times"
            className="p-button-outlined p-button-rounded p-button-danger ml-auto "
            onClick={() => onTemplateRemove(file, props.onRemove)}
          />
        </div>
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div id="track_id">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex items-center justify-center align-items-center flex-column w-full gap-6 border-2 border-dotted border-gray-400 p-6">
            <div>
              <DicIcon
                className="text-secondary"
                width={50}
                height={50}
                size={50}
              />
            </div>
            <div>
              <span
                style={{
                  fontSize: "1.2em",
                  color: "var(--text-color-secondary)",
                }}
                className="my-5"
              >
                Drag and Drop Audio File Here
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const onUpload = (e : any) =>{
    console.log("upload on -- " , e)
  }

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };

  return (
    <div className="my-4 w-full">
      <Toast ref={toast}></Toast>
      {/* <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" /> */}

      <FileUpload
        className="bg-none"
        ref={fileUploadRef}
        name="demo[]"
        accept="*"
        disabled={isDisabled}
        maxFileSize={1000000000}
        onSelect={onTemplateSelect}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        onUpload={onUpload}
      />
    </div>
  );
}
