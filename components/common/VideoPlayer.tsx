"use client";
import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer(){
  //video path
  let videosrc ="/artists/idiots/mtv/chan_khae/chan_khae.mp4";

  return (
    <div className="w-full">
      {/* <h1>my custome player</h1> */}
      <ReactPlayer
    //   loop
      autoPlay
        width="100%"
        height="550px"
        url={[
           "/artists/idiots/mtv/chan_khae/chan_khae.mp4" ,
           "/artists/idiots/mtv/min_nae_nee_phot/min_nae_nee_phot.mp4",
        ]}
        // url={[
        //     'https://www.youtube.com/watch?v=oUFJJNQGwhk',
        //     'https://www.youtube.com/watch?v=jNgP6d9HraI'
        //   ]}
        controls={true}
        config={{
            youtube: {
              playerVars: { showinfo: 2 }
            }
          }}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      >
      {/* <source src={videosrc} type="video/mp4" /> */}
      </ReactPlayer>
    </div>
  );
};