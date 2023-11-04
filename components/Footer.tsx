"use client"

import React from "react";

// import CrbtPlayer from "@/components/crbtplayer/CrbtPlayer"
import MusicPlayer from "@/components/MusicPlayer/index"

export default function Footer() {
  return (
    <div className="">
      <footer className="footer-container fixed-bottom border-gradient border-gradient-purple only-top">
        {/* <CrbtPlayer /> */}
        <MusicPlayer />
      </footer>
    </div>
  );
}
