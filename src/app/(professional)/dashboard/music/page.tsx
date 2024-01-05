"use client"
import React, { useState } from "react";
import MusicUpload from "@/components/common/MusicUpload";
import { useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";
import { AppBar } from "@/components/dashboard/nav/AppBar";


const Music = () => {
  const type = useSearchParams()?.get("type");
  const item = {
    name: null,
    image: null,
    imageName: null,
    artistName: null,
    releaseDate:null,
    genre: null,
    lyric: null,
    lyricName: null,
  }
  const [list, setList] = useState([item])
  const addItem = () => {
    const newList = [...list, item];
    setList(newList)
  }

  console.log(type)
  return (
    <div className="container">
      <AppBar/>
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
      <MusicUpload data={list} type={type || ""}/>
    </div>
  );
};

export default Music;
