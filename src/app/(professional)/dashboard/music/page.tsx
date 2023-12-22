"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  ScrollShadow,
} from "@nextui-org/react";
import MyButton from "@/components/desktop/login/MyButton";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";
import { FileUpload } from "primereact/fileupload";
import CardMusicList from "@/components/dashboard/music/CardMusicList";
import AlblumPlayList from "@/components/dashboard/music/AlblumPlayList";

const Music = (props: { children: string; isSubmitting: boolean }) => {
  const variants = ["underlined"];
  const [selected, setSelected] = React.useState("overview");

  let tabs = [
    {
      id: "solo",
      label: "Solo",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "albums",
      label: "Albums",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const onUpload = (val: any) => {
    console.log(val);
  };

  return (
    <div className="container mt-4">
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Dynamic tabs"
          items={tabs}
          color="default"
          variant="underlined"
          selectedKey={selected}
          onSelectionChange={setSelected as any}
        >
          {(item) => (
            <Tab
              className="mt-4"
              key={item.id}
              title={
                <div className="flex flex-col justify-center items-center">
                  <span className="boder_line text-2xl">{item.label}</span>
                </div>
              }
            >
              <div className="w-52 mx-auto mb-4">
                <MyButton isSubmitting={false} startContent={<PlusIcon />}>
                  {item.id == "solo" ? "Solo Music" : "Album Music"}
                </MyButton>
                {/* <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="image/*"
                  maxFileSize={1000000}
                  onUpload={onUpload} 
                /> */}
              </div>
              <ScrollShadow className="w-[auto] h-[100dvh]">
                <div className="text-white">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3">
                    <CardMusicList />
                    <CardMusicList />
                    <CardMusicList />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3">
                    <AlblumPlayList />
                    <AlblumPlayList />
                    <AlblumPlayList />{" "}
                  </div>
                  {/* {item.content} */}
                </div>
              </ScrollShadow>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Music;
