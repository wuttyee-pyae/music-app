"use client";

import Musiclist from "@/components/desktop/music/Musiclist";
import SelectBar from "@/components/desktop/music/SelectBar";


export default function MoodsId() {

  return (
    <div className="">
      <div className="relative mb-4 wapper mx-0 md:mx-4">
        <SelectBar />
        <Musiclist />
      </div>
    </div>
  );
}
