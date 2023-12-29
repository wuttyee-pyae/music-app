import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { Tooltip } from "primereact/tooltip";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { DicIcon } from "./icons/DicIcon";
import { LyricsIcon } from "../desktop/musicplayer/LyricsIcon";

export default function FilesUpload() {
  const toast = useRef<any>(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef<any>(null);
  const [chooseTemplate, setChooseTemplate] = useState(null);

  const onTemplateSelect = (e: any) => {
    let _totalSize = totalSize;
    let files = e.files;

    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e: any) => {
    let _totalSize = 0;

    e.files.forEach((file: any) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast?.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const onTemplateRemove = (file: any, callback: any) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options: any) => {
    setChooseTemplate(options)
    console.log(" ---- header temple -- " , options.chooseButton)
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef?.current?.formatSize(totalSize)
        : "0 B";

    return (
      <div></div>
      // <div
      //   className={className}
      //   style={{
      //     backgroundColor: "white",
      //     display: "flex",
      //     alignItems: "center",
      //     borderBottom: "0.5px solid",
      //   }}
      // >
      //   {chooseButton}
      //   {uploadButton}
      //   {cancelButton}
      //   <div className="flex align-items-center gap-3 ml-auto">
      //     <span>{formatedValue} / 1 GB</span>
      //     <ProgressBar
      //       value={value}
      //       showValue={false}
      //       style={{ width: "10rem", height: "12px" }}
      //     ></ProgressBar>
      //   </div>
      // </div>
    );
  };

  const itemTemplate = (file: any, props: any) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

        <div className="flex align-items-center flex-wrap">
          <div className="flex align-items-center" style={{ width: "40%" }}>
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
    console.log("option template ---- " , chooseTemplate)
    const { className, chooseButton } :  any = chooseTemplate 
    
    return (
      <div id="track_id">
        <p className="text-white">Track 01</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center justify-center align-items-center flex-column w-full gap-6 border-2 border-dotted border-gray-400 p-6">
            <div>
            <div
        className={className || ""}
        style={{
          backgroundColor: "white",
          // display: "flex",
          // alignItems: "center",
          // borderBottom: "0.5px solid",
          width: "50px",
          height: "50px"
        }}
      >
        {chooseButton}
      </div>
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
          <div className="flex items-center justify-center align-items-center flex-column w-full gap-6 border-2 border-dotted border-gray-400 p-6">
            <div>
              <LyricsIcon
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
                Drag and Drop Lyric File Here
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  return (
    <div className="my-4 w-full">
      <Toast ref={toast}></Toast>
      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

      <FileUpload
        className="bg-none"
        ref={fileUploadRef}
        name="demo[]"
        url="/api/upload"
        multiple
        accept="*"
        maxFileSize={1000000000}
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
  );
}
