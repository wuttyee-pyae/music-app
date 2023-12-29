"use client";
import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer(){
  //video path
//   let videosrc = "https://www.youtube.com/embed/Te_DTmOt4Xw";

  return (
    <>
      <h1>my custome player</h1>
      <ReactPlayer
      loop
      autoPlay
        width="500px"
        height="400px"
        url={""}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      >
      {/* <source src={videosrc} type="video/mp4" /> */}
      </ReactPlayer>
    </>
  );
};