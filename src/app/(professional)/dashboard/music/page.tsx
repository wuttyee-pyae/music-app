"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import MyButton from "@/components/desktop/login/MyButton";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";
import { FileUpload } from "primereact/fileupload";

const Music = (props: { children: string; isSubmitting: boolean }) => {
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

  const onUpload = (val: any) =>{
    console.log(val);
  }

  return (
    <div className="container mt-4">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Dynamic tabs" items={tabs}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <div className="w-52 mx-auto my-0">
                <MyButton isSubmitting={false} startContent={<PlusIcon />}>
                  {item.id == "solo" ? "Solo Music" : "Album Music"}
                </MyButton>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="image/*"
                  maxFileSize={1000000}
                  onUpload={onUpload} 
                />
              </div>

              <Card className="mt-4">
                <CardBody>{item.content}</CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Music;
