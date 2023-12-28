"use client";
import React, { useState } from "react";
import MusicPage from "@/components/dashboard/music/Music";
import FooterTab from "@/components/dashboard/footer/FooterTab";

const Music = () => {
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

  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <MusicPage />
      {/* <FooterTab handleActiveIndex={handleActiveIndex} /> */}
    </div>
  );
};

export default Music;
