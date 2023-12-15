import CardBox from "@/components/dashboard/nav/card/CardBox";
import Artistscover from "@/components/dashboard/nav/cover_banner/Artistscover";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import { VideoIcon } from "@/components/mobile/nav/icons/VideoIcon";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const cardReport = [
    {
      title: "Music",
      count: 20,
      color: "secondary",
      icon: <MusicIcon color="secondary" />,
      url: "/dashboard/reports/id",
    },
    {
      title: "MTV",
      count: 20,
      color: "success",
      icon: <VideoIcon color="success" />,
      url: "/dashboard/reports/id",
    },
    {
      title: "Collection",
      count: null,
      color: "danger",
      icon: <MusicIcon color="danger" />,
      url: "/dashboard/reports/id",
    },
  ];

  const cardAddQuick = [
    {
      title: "Music",
      count: 20,
      color: "secondary",
      icon: <MusicIcon color="secondary" />,
      url: "/dashboard/music",
    },
    {
      title: "MTV",
      count: 20,
      color: "success",
      icon: <VideoIcon color="success" />,
      url: "/dashboard/vedio",
    },
    {
      title: "Collection",
      count: null,
      color: "danger",
      icon: <MusicIcon color="danger" />,
      url: "/dashboard/collection",
    },
  ];
  return (
    <div>
      <Artistscover />
      <div className="mb-4 grid grid-cols-2 items-center gap-4">
        <div className="flex items-center gap-4">
          <h3 className="title text-white ">Real Time</h3>
          <p className="text-gray-300">24hr</p>
        </div>
        <div className="flex justify-end text-gray-300">More</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {cardReport.map((item, index) => (
          <CardBox key="index" data={item} status="time" />
        ))}
      </div>

      <div className="mb-4 grid grid-cols-2 items-center gap-4">
        <div className="flex items-center gap-4">
          <h3 className="title text-white ">Quick Add</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {cardAddQuick.map((item, index) => (
          <CardBox key="index" data={item} status="quick" Icon={item.icon} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Dashboard;
