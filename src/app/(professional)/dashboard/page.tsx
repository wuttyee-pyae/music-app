import CardBox from "@/components/dashboard/nav/card/CardBox";
import Artistscover from "@/components/dashboard/nav/cover_banner/Artistscover";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import React from "react";

const Dashboard = () => {
  const cardList = [
    { title: "Music", count: 20, color: "text-purple-600", icon:<MusicIcon color="red"/> },
    { title: "MTV", count: 20, color: "text-green-600", icon:<MusicIcon color="white" /> },
    { title: "Collection", count: null, color: "text-red-600", icon:<MusicIcon color="pink" /> },
  ];
  return (
    <div className="pt-20">
      <div className="mb-4 wapper mx-4 pb-4">
        <Artistscover />

        <div className="mb-4 grid grid-cols-2 items-center gap-4">
          <div className="flex items-center gap-4">
            <h3 className="title text-white ">Real Time</h3>
            <p className="text-gray-300">24hr</p>
          </div>
          <div className="flex justify-end text-gray-300">More</div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {cardList.map((item, index) => (
            <CardBox key="index" data={item} status="time" />
          ))}
        </div>

        <div className="mb-4 grid grid-cols-2 items-center gap-4">
          <div className="flex items-center gap-4">
            <h3 className="title text-white ">Quick Add</h3>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {cardList.map((item, index) => (
            <CardBox key="index" data={item}  status="quick" Icon={item.icon}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
