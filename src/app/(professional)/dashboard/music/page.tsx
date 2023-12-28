"use client";
import React, { useState } from "react";
import MusicPage from "@/components/dashboard/music/Music";
import FooterTab from "@/components/dashboard/footer/FooterTab";

const Music = () => {
  return (
    <div>
      <MusicPage />
      {/* <FooterTab handleActiveIndex={handleActiveIndex} /> */}
    </div>
  );
};

export default Music;
