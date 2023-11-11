"use client";

import Musiclist from "@/components/music/Musiclist";
import SelectBar from "@/components/music/SelectBar";


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
