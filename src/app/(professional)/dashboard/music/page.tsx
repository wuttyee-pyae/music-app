"use client"
import React, { useState } from "react";
import MusicUpload from "@/components/common/MusicUpload";
import { useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";


const Music = () => {
  const type = useSearchParams()?.get("type");
  const [list, setList] = useState([1])
  const addItem = () => {
    const newList = [...list, list.length + 1];
    setList(newList)
  }

  console.log(type)
  return (
    <div>
      {
        type == "album" ?
          <div className="max-w-fit justify-center my-0 mx-auto pt-8">
            <Button
              fullWidth
              startContent={<PlusIcon />}
              color="primary"
              className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
              onClick={addItem}
            >
              Add Tack
            </Button>
          </div> : null
      }
      <MusicUpload data={list} />
    </div>
  );
};

export default Music;
