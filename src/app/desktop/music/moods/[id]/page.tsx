"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";



import SelectBar from "@/components/music/selectbar";
import Musiclist from "@/components/music/musiclist";


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
